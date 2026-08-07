import React from "react";

export default function TermsPage({ t }) {
  const Section = ({ title, children }) => (
    <div className="mb-6">
      <h2 className="font-display text-lg font-semibold mb-2" style={{ color: t.text }}>{title}</h2>
      <p className="text-sm leading-relaxed" style={{ color: t.textMuted }}>{children}</p>
    </div>
  );
  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl sm:text-3xl font-bold mb-6" style={{ color: t.text }}>Terms & Privacy</h1>
      <Section title="Using JSMaster">
        JSMaster is a learning platform. Content is provided for educational purposes, and while we aim to keep everything accurate, we can't guarantee it's error-free. Don't misuse the platform, copy content for commercial resale, or attempt to disrupt the service.
      </Section>
      <Section title="Your account">
        You're responsible for keeping your login details safe. Progress, tasks and quiz results are tied to your account and may be reset if the account is removed.
      </Section>
      <Section title="What we collect">
        We store the profile details you choose to add — name, email, about text, avatar and banner — along with your learning progress, so the app can show your dashboard correctly.
      </Section>
      <Section title="How we use it">
        Your data is used only to run the product: showing your progress, personalising your profile, and improving the content over time. We don't sell personal data to third parties.
      </Section>
      <Section title="Cookies & ads">
        If ad-supported, JSMaster may show ads and use basic analytics to understand usage. You can control cookie preferences from your browser settings at any time.
      </Section>
      <Section title="Changes">
        These terms may be updated as the product grows. Continued use after an update means you accept the revised terms.
      </Section>
      <p className="text-xs mt-8" style={{ color: t.textMuted }}>Last updated: August 2026 · This is placeholder legal copy — replace with real terms before you publish.</p>
    </div>
  );
}
