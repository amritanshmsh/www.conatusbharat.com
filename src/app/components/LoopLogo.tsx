import React from 'react';

type Props = {
  size?: number | string;
  className?: string;
  /** "ink" = black, "paper" = white, "iris" = brand purple */
  tone?: 'ink' | 'paper' | 'iris';
  spinning?: boolean;
};

/**
 * Conatus Bharat loop mark — a stylised "B / infinity" loop.
 * Pure SVG so it scales crisp at any size and inherits currentColor for theming.
 */
export default function LoopLogo({
  size = 40,
  className = '',
  tone = 'ink',
  spinning = false,
}: Props) {
  const color =
    tone === 'iris' ? '#5B6BFF' : tone === 'paper' ? '#FFFFFF' : '#0A0A0A';

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`loop-logo ${spinning ? 'animate-spin-slow' : ''} ${className}`}
      aria-label="Conatus Bharat"
      role="img"
    >
      {/* outer big loop */}
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke={color}
        strokeWidth="6"
      />
      {/* inner small loop overlapping right */}
      <circle
        cx="44"
        cy="32"
        r="10"
        fill="none"
        stroke={color}
        strokeWidth="6"
      />
      {/* tiny iris dot in the centre — the spark */}
      <circle cx="32" cy="32" r="3" fill="#5B6BFF" />
    </svg>
  );
}
