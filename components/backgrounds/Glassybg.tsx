export function GlassyBg() {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-transparent">
          <div className="water-effect"></div>
        </div>
      </div>
    );
  }
  