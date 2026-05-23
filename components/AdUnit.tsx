"use client";

interface AdUnitProps {
  slot: string;
  format?: "banner" | "rectangle" | "leaderboard" | "sidebar";
  className?: string;
}

const dimensions: Record<string, { width: number; height: number; label: string }> = {
  banner: { width: 728, height: 90, label: "728x90 Leaderboard" },
  rectangle: { width: 336, height: 280, label: "336x280 Rectangle" },
  leaderboard: { width: 970, height: 90, label: "970x90 Billboard" },
  sidebar: { width: 300, height: 250, label: "300x250 Medium Rectangle" },
};

export default function AdUnit({ slot, format = "rectangle", className = "" }: AdUnitProps) {
  const dim = dimensions[format];

  // Replace this comment block with your actual AdSense ins tag:
  // <ins class="adsbygoogle"
  //      style="display:block"
  //      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //      data-ad-slot={slot}
  //      data-ad-format="auto"
  //      data-full-width-responsive="true" />
  // <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  return (
    <div
      className={`ad-unit ${className}`}
      style={{ width: "100%", maxWidth: dim.width, height: dim.height, margin: "0 auto" }}
      aria-label="Advertisement"
    >
      <span>Ad, {dim.label}, Slot: {slot}</span>
    </div>
  );
}
