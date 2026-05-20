// Seeded LCG — deterministic output, identical on server and client (no hydration mismatch)
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function makeBoxShadow(count: number, seed: number): string {
  const rand = seededRand(seed);
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * 2400);
    const y = Math.floor(rand() * 2400);
    shadows.push(`${x}px ${y}px #fff`);
  }
  return shadows.join(", ");
}

// Built once at module level — never re-computed
const SMALL  = makeBoxShadow(700, 42);
const MEDIUM = makeBoxShadow(220, 1337);
const LARGE  = makeBoxShadow(90,  7919);

export default function StarField() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
    >
      {/* Small stars — slow subtle pulse */}
      <div
        className="absolute top-0 left-0 w-px h-px rounded-full"
        style={{
          boxShadow: SMALL,
          animation: "twinkle-a 5s ease-in-out infinite",
        }}
      />

      {/* Medium stars — mid-speed, offset phase */}
      <div
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: "1.5px",
          height: "1.5px",
          boxShadow: MEDIUM,
          animation: "twinkle-b 8s ease-in-out 1.5s infinite",
        }}
      />

      {/* Large stars — slow, bright, different phase */}
      <div
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: "2px",
          height: "2px",
          boxShadow: LARGE,
          animation: "twinkle-c 12s ease-in-out 3.5s infinite",
        }}
      />
    </div>
  );
}
