import LegalPage from '../../components/LegalPage';

export const metadata = {
  title: 'Privacy Policy | NexVora',
  description: 'Learn how NexVora handles information submitted through this website.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy describes how NexVora handles personal information when you visit this website or contact us about a project."
    >
      <section>
        <h2>1. Information you provide</h2>
        <p>
          If you submit the booking form, we collect the details you enter: your name,
          email address, optional phone number, selected service and package, and project
          message. Please avoid including passwords, payment-card details, or other
          sensitive information in your message.
        </p>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <p>We use submitted information to:</p>
        <ul>
          <li>Review and respond to your enquiry and prepare a project quote;</li>
          <li>Send you a confirmation of your request and follow up about the project;</li>
          <li>Operate, protect, and improve our website and services; and</li>
          <li>Meet applicable legal obligations and address disputes.</li>
        </ul>
        <p>
          We do not sell your personal information or use booking details for third-party
          advertising.
        </p>
      </section>

      <section>
        <h2>3. How information is shared</h2>
        <p>
          Booking submissions are sent by email to NexVora so we can respond, and a
          confirmation email is sent to the address you provide. We may use service
          providers, such as website hosting and email-delivery providers, to operate the
          website and handle those messages. They process information as needed to provide
          their services. We may also disclose information when required by law or when
          reasonably necessary to protect our rights, users, or services.
        </p>
      </section>

      <section>
        <h2>4. Technical information</h2>
        <p>
          When you access the website, our hosting or infrastructure providers may process
          technical information such as your IP address, browser and device details, and
          request logs to deliver the site, maintain security, and diagnose problems.
          Handling of this information may depend on the providers used to host and protect
          the website.
        </p>
      </section>

      <section>
        <h2>5. Retention and security</h2>
        <p>
          We keep enquiry information for as long as reasonably needed to respond, manage
          any resulting project, maintain appropriate business records, and meet legal
          requirements. We use reasonable safeguards to protect information, but no method
          of transmission or storage can be guaranteed to be completely secure.
        </p>
      </section>

      <section>
        <h2>6. Your choices and rights</h2>
        <p>
          Depending on where you live, you may have rights to request access to, correction
          of, or deletion of your personal information, or to object to or restrict certain
          processing. To make a privacy request or ask a question, contact us at{' '}
          <a href="mailto:hello@nexvora.com">hello@nexvora.com</a>. We may need to verify
          your request before acting on it.
        </p>
      </section>

      <section>
        <h2>7. Children and external links</h2>
        <p>
          This website is intended for a general audience and is not directed at children.
          The website may link to third-party sites; their privacy practices are governed
          by their own policies, which we encourage you to review.
        </p>
      </section>

      <section>
        <h2>8. Policy updates and contact</h2>
        <p>
          We may update this policy as our practices or requirements change. Any revised
          version will appear on this page with an updated date. For privacy questions or
          requests, email <a href="mailto:hello@nexvora.com">hello@nexvora.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
