const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
          {/* Upward arrow with horizontal line at base */}
          <path
            d="M20 12 L20 20 M20 12 L16 16 M20 12 L24 16 M14 20 L26 20"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Line graph pattern below */}
          <path
            d="M12 28 L16 25 L20 27 L24 23 L28 25"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
