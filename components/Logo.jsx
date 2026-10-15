export default function Logo() {
  return (
    <a href="/#top" className="brand" aria-label="NexVora home">
      <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="gold-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F5DC93" />
            <stop offset=".5" stopColor="#D4AF5A" />
            <stop offset="1" stopColor="#A67C2E" />
          </linearGradient>
        </defs>
        <rect x=".75" y=".75" width="38.5" height="38.5" rx="10" fill="#0A1124" stroke="url(#gold-g)" strokeWidth="1.5" />
        <path
          d="M12 28V12l16 16V12"
          fill="none"
          stroke="url(#gold-g)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-name">NexVora</span>
    </a>
  );
}
