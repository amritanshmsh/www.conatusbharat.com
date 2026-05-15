import React from 'react';

type Props = {
  size?: number | string;
  className?: string;
  /** "ink" = black, "paper" = white, "iris" = brand purple */
  tone?: 'ink' | 'paper' | 'iris';
  spinning?: boolean;
};

/**
 * Conatus Bharat brand mark.
 * Pulled from /public/assets/Black Logo.svg — inlined as a React
 * component so it inherits color tokens and scales crisp at any size.
 */
export default function LoopLogo({
  size = 40,
  className = '',
  tone = 'ink',
  spinning = false,
}: Props) {
  const fill =
    tone === 'iris' ? '#5B6BFF' : tone === 'paper' ? '#FFFFFF' : '#0A0A0A';

  // Match the source SVG aspect ratio (725 × 669 ≈ 1.084).
  const numericSize = typeof size === 'number' ? size : parseInt(size, 10) || 40;
  const width = numericSize;
  const height = Math.round(numericSize * (669 / 725));

  return (
    <svg
      viewBox="0 0 725 669"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`loop-logo shrink-0 ${spinning ? 'animate-spin-slow' : ''} ${className}`}
      aria-label="Conatus Bharat"
      role="img"
    >
      <path
        d="M334.896 0C519.854 0.000221398 669.792 143.688 669.792 320.936C669.792 347.32 666.47 372.96 660.204 397.494C699.278 424.082 725 469.325 725 520.667C725 602.5 659.655 668.839 579.049 668.84C536.47 668.84 498.148 650.33 471.468 620.803C468.656 630.215 463.396 647.692 462.755 648.851C458.797 655.99 454.861 661.967 446.731 665.35C437.687 669.113 416.598 670.268 415.162 651.865C415.089 650.925 415.14 636.83 415.157 632.595C389.444 638.656 362.562 641.871 334.896 641.871C149.939 641.871 0.000120477 498.183 0 320.936C0 143.688 149.938 0 334.896 0ZM625.62 470.608C594.202 440.711 544.856 440.711 513.438 470.608C479.738 502.678 479.738 556.425 513.438 588.494C544.856 618.392 594.202 618.392 625.62 588.494C659.32 556.424 659.32 502.678 625.62 470.608ZM401.526 99.9453C277.199 99.9454 176.411 196.116 176.411 314.748C176.411 433.38 277.199 529.551 401.526 529.551C404.395 529.551 407.251 529.5 410.093 529.398C411.843 529.336 413.588 529.253 415.328 529.152V323.679C415.328 313.92 419.369 305.037 425.858 298.784C432.41 292.59 441.717 288.732 451.941 288.732C461.86 288.732 471.166 292.59 477.656 298.784C484.207 305.037 488.555 313.92 488.555 323.679V413.383C512.433 393.864 542.495 382.001 575.067 382.001C588.547 382.001 601.458 383.698 613.639 386.864C622.056 364.324 626.641 340.047 626.641 314.748C626.64 196.116 525.854 99.9455 401.526 99.9453Z"
        fill={fill}
      />
    </svg>
  );
}
