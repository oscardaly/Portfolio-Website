"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const KNOT = { radius: 1.05, tube: 0.32, p: 2, q: 3 } as const;

const vertexShader = /* glsl */ `
  uniform float uSize;
  uniform float uPixelRatio;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (1.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`;

// Points sampled across the torus knot surface.
function torusKnotPoints() {
  const geo = new THREE.TorusKnotGeometry(
    KNOT.radius,
    KNOT.tube,
    260,
    18,
    KNOT.p,
    KNOT.q,
  );
  const arr = new Float32Array(geo.attributes.position.array);
  geo.dispose();
  return arr;
}

function Orb({ animate }: { animate: boolean }) {
  const tilt = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);

  const positions = useMemo(() => torusKnotPoints(), []);
  const uniforms = useMemo(
    () => ({
      uSize: { value: 7.5 },
      uPixelRatio: {
        value:
          typeof window !== "undefined"
            ? Math.min(window.devicePixelRatio, 2)
            : 1,
      },
      uColor: { value: new THREE.Color("#7fcfff") },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (spin.current && animate) {
      spin.current.rotation.y += delta * 0.22;
      spin.current.rotation.x += delta * 0.05;
    }
    if (tilt.current) {
      tilt.current.rotation.x +=
        (state.pointer.y * 0.35 - tilt.current.rotation.x) * 0.05;
      tilt.current.rotation.y +=
        (state.pointer.x * 0.35 - tilt.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[positions, 3]}
            />
          </bufferGeometry>
          <shaderMaterial
            uniforms={uniforms}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
        <mesh>
          <torusKnotGeometry
            args={[KNOT.radius, KNOT.tube, 170, 12, KNOT.p, KNOT.q]}
          />
          <meshBasicMaterial
            wireframe
            color="#9d7bff"
            transparent
            opacity={0.32}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function WireOrb() {
  const holder = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { rootMargin: "250px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={holder} className="absolute inset-0">
      {inView && (
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Orb animate={animate} />
        </Canvas>
      )}
    </div>
  );
}
