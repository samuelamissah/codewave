import Container from '@/components/ui/Container';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
          <p className="text-gray-400 mb-6">Last updated: February 01, 2026</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using CodeWave Solutions&apos; website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of CodeWave Solutions and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of CodeWave Solutions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>Maintaining the confidentiality of any account credentials.</li>
              <li>All activities that occur under your account.</li>
              <li>Ensuring that your use of our services complies with all applicable laws and regulations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall CodeWave Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <br />
              <span className="text-primary-400 font-medium">Email: kodewav3@gmail.com</span>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
