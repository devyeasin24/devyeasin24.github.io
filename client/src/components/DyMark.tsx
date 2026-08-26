// Design note: Contemporary Digital Atelier — a custom Signal Red studio stamp built from intersecting editorial strokes, not typed initials.
type DyMarkProps = {
  className?: string;
};

export function DyMark({ className = "" }: DyMarkProps) {
  return (
    <span className={`dy-studio-mark ${className}`} aria-hidden="true">
      <i className="dy-stroke dy-stroke-vertical" />
      <i className="dy-stroke dy-stroke-diagonal" />
      <i className="dy-stroke dy-stroke-arc" />
      <i className="dy-stroke dy-stroke-baseline" />
    </span>
  );
}
