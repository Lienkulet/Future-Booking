interface StarsVideoProps {
  opacity?: string;
  fadeColor?: string;
}

export default function StarsVideo({
  opacity = "opacity-30",
  fadeColor = "#080612",
}: StarsVideoProps) {
  return (
    <>
      <video
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${opacity}`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/stars.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, ${fadeColor}, transparent)` }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${fadeColor}, transparent)` }}
      />
    </>
  );
}
