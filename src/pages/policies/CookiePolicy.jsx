import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiDatabase, FiInfo, FiCheckCircle, FiShield, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Cookie Policy | Fix Appliancepro - Data Usage Standards</title>
        <meta name="description" content="Understand how Fix Appliancepro uses cookies to improve your experience on our repair service website and maintain technical performance." />
        <link rel="canonical" href="https://fixappliancepro.shop/cookie-policy" />
      </Helmet>

      {/* Page Hero Section - Clean & Premium */}
      <section className="relative pt-44 pb-32 bg-slate-50/50 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:bg-amber-100 transition-all shadow-sm"
          >
            <FiArrowLeft className="text-amber-500" /> Back to Home
          </Link>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-slate-100 rounded-2xl text-amber-500 mb-8 shadow-sm">
            <FiDatabase size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
            Cookie <span className="text-amber-500 underline decoration-slate-200 underline-offset-8 italic">Policy.</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Last updated February 06, 2026. This Cookie Policy explains how Fix Appliancepro uses cookies and similar tracking technologies.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed space-y-12 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-strong:text-slate-900 prose-a:text-amber-600">

              <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm text-slate-600">
                <p>
                  This Cookie Policy explains how Fix Appliancepro (“Company,” “we,” “us,” or “our”) uses cookies and similar tracking technologies when you visit our website <a href="https://fixappliancepro.shop/">https://fixappliancepro.shop/</a> (the “Website”). This policy should be read together with our <Link to="/privacy-policy">PRIVACY POLICY</Link> and <Link to="/terms-of-service">TERMS OF SERVICE</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">1. What Are Cookies</h2>
                <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies help websites function efficiently, enhance user experience, and provide information to website owners about how visitors interact with the site.</p>
                <p>Cookies do not give us access to your device or personal files.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">2. How We Use Cookies</h2>
                <p>Fix Appliancepro uses cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensure the Website functions properly</li>
                  <li>Maintain security and prevent fraudulent activity</li>
                  <li>Remember user preferences and settings</li>
                  <li>Analyze Website performance and usage patterns</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p>Cookies may collect device information such as IP address, browser type, device information, and browsing behavior, as described in our <Link to="/privacy-policy">PRIVACY POLICY</Link>.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">3. Types of Cookies We Use</h2>
                <div className="space-y-8 mt-8">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <FiLock />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">a) Essential Cookies</h4>
                      <p>These cookies are strictly necessary for the Website to operate correctly. They enable core functionality such as security, page navigation, and access to essential features. Without these cookies, the Website may not function properly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <FiCheckCircle />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">b) Performance and Analytics Cookies</h4>
                      <p>These cookies help us understand how visitors interact with our Website by collecting aggregated and anonymized information. This allows us to measure performance, identify errors, and improve Website functionality.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <FiInfo />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">c) Functional Cookies</h4>
                      <p>Functional cookies allow the Website to remember choices you make, such as language preferences or region, to provide a more personalized experience.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <FiShield />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">d) Advertising and Third-Party Cookies</h4>
                      <p>We may allow trusted third-party service providers to place cookies on our Website for analytics or advertising purposes. These cookies may be used to deliver relevant advertisements and measure campaign effectiveness, subject to applicable laws and user consent where required <Link to="/privacy-policy">PRIVACY POLICY</Link>.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">4. Third-Party Tracking Technologies</h2>
                <p>We may use third-party services such as Google Analytics to analyze Website usage and traffic patterns. These third parties may use cookies or similar technologies to collect information about your online activities across different websites.</p>
                <p>You can learn more about Google’s data practices by visiting Google’s Privacy & Terms page or opt out using Google’s opt-out tools, as referenced in our <Link to="/privacy-policy">PRIVACY POLICY</Link>.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">5. Your Cookie Choices and Controls</h2>
                <p>You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies or alert you when cookies are being sent.</p>
                <p>Please note that disabling cookies may affect certain features or functionality of the Website.</p>
                <p>For more information on managing cookies, visit your browser’s help section.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">6. Do Not Track Signals</h2>
                <p>Some browsers offer a “Do Not Track” (DNT) feature. At this time, there is no uniform industry standard for recognizing DNT signals, and Fix Appliancepro does not currently respond to such signals <Link to="/privacy-policy">PRIVACY POLICY</Link>.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">7. Updates to This Cookie Policy</h2>
                <p>We may update this Cookie Policy from time to time to reflect changes in industry standards, legal requirements, or our practices. Any updates will be indicated by a revised “Last Updated” date at the top of this policy.</p>
              </section>

              <section id="contact">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wider">8. Contact Us</h2>
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden mt-8 text-slate-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 blur-3xl"></div>
                  <h3 className="text-2xl font-bold mb-6 relative z-10 m-0 text-white">Questions about cookies?</h3>
                  <p className="text-slate-400 mb-8 relative z-10 text-slate-400">If you have questions or concerns about this Cookie Policy or our use of cookies, you may contact us at:</p>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                        <FiDatabase size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider m-0 text-slate-400">Email Support</p>
                        <p className="font-bold text-lg m-0 text-white">info@fixappliancepro.shop</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                        <FiInfo size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider m-0 text-slate-400">Address</p>
                        <p className="font-bold text-lg m-0 text-white">128 W Lake St, Addison, IL 60101, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
