import LegalPage from '../../components/LegalPage';

export const metadata = {
  title: 'Terms & Conditions | NexVora',
  description: 'Terms and conditions for using the NexVora website and services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms explain the basic rules for using the NexVora website and working with us. A project proposal or written agreement may add or replace terms for that specific project."
    >
      <section>
        <h2>1. Using this website</h2>
        <p>
          By accessing or using this website, you agree to these terms. If you do not agree,
          please do not use the website. You must use it lawfully and must not attempt to
          disrupt, damage, or gain unauthorised access to the website or its systems.
        </p>
      </section>

      <section>
        <h2>2. Services, proposals, and pricing</h2>
        <p>
          NexVora provides software and digital services, which may include AI agents,
          automations, machine-learning solutions, websites, and web applications. Website
          descriptions and prices are general information and starting estimates, not a
          binding offer. The scope, deliverables, schedule, and final price for a project
          will be confirmed in a written proposal or agreement.
        </p>
        <p>
          Sending a booking or enquiry form does not create a contract or require you to
          make a payment. Work begins only after the project details and applicable terms
          have been agreed in writing.
        </p>
      </section>

      <section>
        <h2>3. Your responsibilities</h2>
        <p>
          You agree to provide accurate project information, make decisions and provide
          materials or feedback reasonably needed for the work, and ensure you have the
          rights and permissions to give us any materials you supply. You remain responsible
          for the accuracy and legality of those materials and for how you use the delivered
          work.
        </p>
      </section>

      <section>
        <h2>4. Fees, changes, and cancellations</h2>
        <p>
          Payment amounts, due dates, included revisions, and any cancellation or refund
          terms will be set out in the applicable written proposal or agreement. Changes
          beyond the agreed scope may affect the price or schedule and will be discussed
          with you before that additional work proceeds.
        </p>
      </section>

      <section>
        <h2>5. Intellectual property</h2>
        <p>
          Each party retains ownership of materials it owned before a project. Unless a
          written agreement says otherwise, ownership of custom deliverables created
          specifically for you transfers to you after all amounts due for that project have
          been paid. Third-party and open-source materials remain subject to their own
          licences, and any reusable tools or components NexVora brings to a project are
          not transferred unless agreed in writing.
        </p>
      </section>

      <section>
        <h2>6. Third-party services</h2>
        <p>
          A project may rely on third-party platforms, software, or services. Their
          availability, terms, fees, and privacy practices are controlled by their
          respective providers. NexVora is not responsible for changes or interruptions
          caused by those providers.
        </p>
      </section>

      <section>
        <h2>7. Disclaimers and liability</h2>
        <p>
          We aim to keep this website accurate and available, but provide it on an
          “as is” and “as available” basis. To the extent permitted by law, NexVora is not
          liable for indirect or consequential loss arising from use of this website. Any
          project-specific warranties, remedies, or liability limits will be set out in the
          applicable written agreement. Nothing in these terms excludes liability or rights
          that cannot legally be excluded or limited.
        </p>
      </section>

      <section>
        <h2>8. Changes and contact</h2>
        <p>
          We may update these terms by posting a revised version on this page. The “Last
          updated” date indicates when the current version was published. For questions
          about these terms, email <a href="mailto:companynexvora@gmail.com">companynexvora@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
