import { ArticleLayout } from "@/components/article";

const R3FGalaxy = () => {
  return (
    <ArticleLayout
      kicker="Case Study · 2023"
      title="R3F Galaxy"
      lead="A generative, interactive galaxy that lives in the browser — thousands of GPU-driven particles you can spin, tune and fly through, built with React Three Fiber and custom GLSL shaders."
      meta={[
        { label: "Year", value: "2023" },
        { label: "Stack", value: "R3F · WebGL · GLSL" },
      ]}
      links={[
        { label: "Live Demo", href: "https://r3f-galaxy.vercel.app/" },
        { label: "GitHub", href: "https://github.com/oscardaly/R3F-Galaxy" },
        {
          label: "Walkthrough (PDF)",
          href: "https://drive.google.com/file/d/1uezmYsmZ2JileeBgQL77MtksHuESwKz4/view?usp=sharing",
        },
      ]}
    >
      <h2>The idea</h2>
      <p>
        R3F Galaxy is an experiment in rendering something genuinely beautiful
        in real time on the web. Rather than drawing a static image, the whole
        galaxy is generated procedurally and drawn on the GPU — every star is a
        particle, positioned by maths and coloured by distance from the core, so
        the entire scene can be reshaped live from a control panel.
      </p>

      <h2>How it works</h2>
      <p>
        It&rsquo;s built with React Three Fiber, a React renderer for Three.js
        that lets the 3D scene be expressed as components. The star field is a
        single buffer geometry holding tens of thousands of points; their
        positions are computed across a configurable number of spiral branches,
        with randomness that increases toward the edges to give the arms their
        soft, scattered falloff. Colour is mixed between a warm inner hue and a
        cool outer one based on each star&rsquo;s radius.
      </p>
      <p>
        Custom GLSL shaders do the heavy lifting — sizing and shading every
        particle in parallel on the GPU so the scene stays smooth even at high
        star counts. A live GUI exposes the parameters (count, size, radius,
        branches, spin, randomness, colours) so you can redesign the galaxy in
        real time and watch it regenerate.
      </p>

      <h2>Why I built it</h2>
      <p>
        I wanted to understand the graphics pipeline from the ground up — buffer
        geometries, attributes, and writing shaders by hand rather than leaning
        on prebuilt materials. It became one of my favourite things to talk
        about and eventually a conference talk at NI Dev Conf 2023.
      </p>
    </ArticleLayout>
  );
};

export default R3FGalaxy;
