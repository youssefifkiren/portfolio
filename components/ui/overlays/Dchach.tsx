// Dchach means Noise in Moroccan darija :D
const Dchach = () => {
  return (
    <svg
      className="pointer-events-none fixed isolate z-30 opacity-75 mix-blend-soft-light"
      width="100%"
      height="100%"
    >
      <filter id="dchach">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#dchach)" />
    </svg>
  )
}

export default Dchach