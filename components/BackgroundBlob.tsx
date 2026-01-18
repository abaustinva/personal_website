import React from "react";

interface BackgroundBlobProps {
  className?: string; // For positioning and custom colors
  style?: React.CSSProperties; // For animation delays using inline styles if needed
}

export const BackgroundBlob = ({
  className = "",
  style,
}: BackgroundBlobProps) => {
  return (
    <div
      className={`absolute rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob ${className}`}
      style={style}
    />
    // Note: mix-blend-screen works well on dark backgrounds. mix-blend-multiply on light.
    // Since we set body to black, screen or overlay is good.
  );
};
