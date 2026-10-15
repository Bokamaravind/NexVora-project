import Reveal from './Reveal';

const STEPS = [
  { title: 'Tell us what you need', text: 'Fill in the booking form with your idea, service, and timeline.' },
  { title: 'Get a fixed quote', text: 'We review your requirements and confirm scope and price in writing.' },
  { title: 'We build and update you', text: 'You see progress along the way and can request changes early.' },
  { title: 'Launch and handover', text: 'We deploy, hand over the code, and stay available for support.' },
];

export default function Process() {
  return (
    <section id="process" className="sec process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Process</span>
          <h2>How we work</h2>
          <p>A clear path from your first message to a finished product.</p>
        </Reveal>

        <Reveal className="steps">
          <div className="steps-line" aria-hidden="true"><i></i></div>
          {STEPS.map((s, i) => (
            <div className="step" key={s.title} style={{ '--i': i }}>
              <div className="step-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
