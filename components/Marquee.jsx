const ITEMS = [
  'AI agents',
  'Business automations',
  'Machine learning models',
  'Full-stack websites',
  'AI-powered web apps',
  'Custom software products',
];

export default function Marquee() {
  const group = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k}>
            {group.map((t, i) => (
              <span key={`${k}-${i}`}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
