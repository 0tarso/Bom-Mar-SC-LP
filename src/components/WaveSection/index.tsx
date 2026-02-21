import React from "react";

export default function WaveSection({
  children,
  bg = "#4085cb",
  height = 120,
}) {
  return (
    <section style={{ background: bg, position: "relative" }}>
      {/* Onda superior */}
      <div
        style={{
          position: "absolute",
          top: (-height + 40),
          left: 0,
          width: "100%",
          transform: "rotate(180deg)",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          style={{ display: "block", width: "100%", height }}
          preserveAspectRatio="none"
        >
          <path
            fill={bg}
            d="M0,160L60,186.7C120,213,240,267,360,272C480,277,600,235,720,202.7C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160V0H0Z"
          />
        </svg>
      </div>

      {/* Conteúdo */}
      <div style={{ padding: "50px 0px", position: "relative", zIndex: 1 }}>
        {children}
      </div>

      {/* Onda inferior */}
      <div style={{ position: "absolute", bottom: -height, left: 0, width: "100%", transform: "rotate(180deg)" }}>
        <svg
          viewBox="0 0 1440 320"
          style={{ display: "block", width: "100%", height }}
          preserveAspectRatio="none"
        >
          <path
            fill={bg}
            d="M0,160L60,186.7C120,213,240,267,360,272C480,277,600,235,720,202.7C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
