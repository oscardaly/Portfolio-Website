"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useMounted, useReducedMotion } from "@/lib/hooks";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  varying float vEl;
  varying float vDist;

  void main() {
    vec3 p = position;
    float e =
        sin(p.x * 0.45 + uTime * 0.55) * 0.45
      + sin(p.z * 0.40 - uTime * 0.42) * 0.45
      + sin((p.x + p.z) * 0.28 + uTime * 0.30) * 0.28
      + sin(length(p.xz) * 0.50 - uTime * 0.70) * 0.20;
    p.y += e;
    vEl = e;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vDist = -mv.z;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(uSize * uPixelRatio * (1.0 / -mv.z), 1.0, 7.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vEl;
  varying float vDist;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;

    float core = smoothstep(0.5, 0.0, d);
    float t = clamp(vEl * 0.6 + 0.5, 0.0, 1.0);
    vec3 col = mix(uColorA, uColorB, t);
    col += pow(t, 3.0) * 0.55;          // brighten crests

    float far = 1.0 - smoothstep(11.0, 30.0, vDist);
    float near = smoothstep(1.2, 4.5, vDist);
    gl_FragColor = vec4(col, core * far * near * 0.95);
  }
`;

function ParticleField({ animate }: { animate: boolean }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const COLS = 170;
    const ROWS = 120;
    const W = 34;
    const D = 30;
    const arr = new Float32Array(COLS * ROWS * 3);
    let k = 0;
    for (let i = 0; i < COLS; i++) {
      for (let j = 0; j < ROWS; j++) {
        arr[k++] = (i / (COLS - 1) - 0.5) * W;
        arr[k++] = 0;
        arr[k++] = 4 - (j / (ROWS - 1)) * D;
      }
    }
    return arr;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 13.0 },
      uPixelRatio: {
        value:
          typeof window !== "undefined"
            ? Math.min(window.devicePixelRatio, 2)
            : 1,
      },
      uColorA: { value: new THREE.Color("#5cb8ff") },
      uColorB: { value: new THREE.Color("#9d7bff") },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (matRef.current && animate) {
      matRef.current.uniforms.uTime.value += delta;
    }
    if (groupRef.current) {
      const tx = state.pointer.x * 0.16;
      const ty = state.pointer.y * 0.08;
      groupRef.current.rotation.y += (tx - groupRef.current.rotation.y) * 0.045;
      groupRef.current.rotation.x +=
        (-ty - groupRef.current.rotation.x) * 0.045;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function HeroCanvas() {
  const mounted = useMounted();
  const animate = !useReducedMotion();

  if (!mounted) return null;

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 2.4, 5], fov: 55, near: 0.1, far: 80 }}
      onCreated={({ camera }) => camera.lookAt(0, 0, -6)}
      style={{ position: "absolute", inset: 0 }}
    >
      <ParticleField animate={animate} />
    </Canvas>
  );
}
