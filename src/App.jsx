import React from 'react';

function App() {
  return (
    <>
      <header className="bg-[#F4F1DE] dark:bg-slate-900 border-b border-[#E07A5F]/10 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(224,122,95,0.05)] sticky top-0 z-50 w-full font-newsreader tracking-tight">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12">
          <a className="flex items-center gap-3 text-2xl font-bold text-[#E07A5F] dark:text-orange-400" href="#">
            <img src="/images/logo.jpg" alt="Sri Baba Charitable Trust Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
            <span>Sri Baba Charitable Trust</span>
          </a>
          <nav className="hidden md:flex gap-8 items-center">
            <a className="text-[#E07A5F] dark:text-orange-400 font-bold border-b-2 border-[#E07A5F] pb-1 hover:text-[#E07A5F] dark:hover:text-orange-300 transition-all duration-300 active:scale-95" href="#">Home</a>
            <a className="text-slate-700 dark:text-slate-300 font-medium hover:text-[#E07A5F] dark:hover:text-orange-300 transition-all duration-300 active:scale-95" href="#">Our Work</a>
            <a className="text-slate-700 dark:text-slate-300 font-medium hover:text-[#E07A5F] dark:hover:text-orange-300 transition-all duration-300 active:scale-95" href="#">Donate</a>
            <a className="text-slate-700 dark:text-slate-300 font-medium hover:text-[#E07A5F] dark:hover:text-orange-300 transition-all duration-300 active:scale-95" href="#">Contact</a>
          </nav>
          <a className="hidden md:inline-flex bg-primary-container text-on-primary-container font-label-sm text-label-sm px-6 py-3 rounded-full hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors shadow-sm" href="#">Support Our Work</a>
        </div>
      </header>

      <main>
        <section className="relative py-section-padding flex items-center justify-center min-h-[819px] overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 z-0">
            <img alt="Elderly bed patient with a caregiver in warm, respectful lighting." className="w-full h-full object-cover opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIIhHfQRgMeaHRo4pBq6yyAUXmOnzav-TbzddQVS_i_9prGozbtowpZnPmomqvuUgm_42YpnDj_0e1NFmQgAEYkgL7ky52s2mmvCQmkNJetpajnI_usGCHzkA9dUICZk2TSQASupzadkjZ0m-jP0jRvPx5d7T4vLM0RVb6tiQcvbaXyLcr5dTVzkSCR5met8oFsrmj73RkdS5OHdEZdYjFcEaI6Q9v3J64Zv5cXGdWWUMU_PBN_QC5jGeg-lpBFLRK2YJ-C9jaNblG"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 to-surface/40"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center md:text-left flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <h1 className="font-newsreader text-5xl md:text-7xl font-bold text-on-surface leading-tight">Sri Baba Charitable Trust</h1>
              <p className="font-inter text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed">Caring for Every Senior – Especially Those Who Cannot Move.</p>
              <div className="pt-4">
                <a className="inline-flex items-center justify-center gap-3 bg-primary-container text-on-primary-container font-inter text-lg font-semibold px-10 py-5 rounded-full shadow-[0_8px_30px_rgba(224,122,95,0.2)] hover:bg-surface-tint hover:text-on-primary transition-all duration-300" href="#donate">
                  <span>Support Our Work</span>
                  <span className="material-symbols-outlined text-[28px] leading-none" style={{ fontVariationSettings: "'FILL' 0" }}>volunteer_activism</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-lowest relative">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <h2 className="font-h2 text-h2 text-primary mb-stack-md relative inline-block">
              Our Mission
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface-variant text-lg md:text-xl leading-relaxed">
                We are dedicated to providing love, care, and support to elderly people in our community. Our mission is to ensure that every senior citizen lives with dignity, respect, and comfort in their golden years. Through compassionate care and community support, we create a warm, safe home where the elderly can thrive.
              </p>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-h2 text-h2 text-on-surface">We Focus on Bedridden Patient Care</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Dignity, hygiene, and comfort for those who need it most.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Care Block 1 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(224,122,95,0.08)] border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img alt="Caregiver adjusting bed sheet" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqgA_iilU1q3uvtOT-3iwmHrNmHqS_2Vv0ckpYVNDwesjS7ZZTe1NQ-8kSwvECRFSspwpw4sC_juz094QKuCXbGYBa2ezZ_SGHgTI-Xq2hkWhmMrEKI-bPuh8UIrxdN56SAQB_xyAGmQhsBoyrtXULVE4v0MnbZJF4zH4xwW99Rr0Kqh0paHWVhTlyUgqp_gjloyT9GihUtvRTI5OvgyBsk97q40ITZI1yUTpVmhr0MICipg3uaIe64gpKSfooJSVEznUGHLW3j58a"/>
                  <div className="absolute top-4 right-4 bg-surface-container-lowest p-2 rounded-full shadow-sm text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>night_shelter</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-h3 text-h3 text-on-surface mb-2 text-[22px]">24/7 Bedside Assistance</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Constant, vigilant care to ensure comfort and immediate response to any needs.</p>
                </div>
              </div>

              {/* Care Block 2 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(224,122,95,0.08)] border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img alt="Nurse checking vitals" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAidytdOh-MAuhGcEVkd4PrKLsUSf8HMxIs-KCb0dHRaUmIaRiNNFVhGLw5oY79YTiArBlRshIxY7RyXokKHXV5OiSWNp-H9TRKE8Zbi8je4fdTAmSlUEtZHtGvNeGE0kGLKxvlvSoqK3vY-BjZO-mqn7rR3SUo_NI4o0yWqStC7i_AjmiZto-ljiPqLpq_5T8HyVpoxn7GxkM1Sano206lCj_C46YAJPLP7gKo2oWFRkwCcPxcvJf-bC-Xsw7zx3wRayGGvpEg3055"/>
                  <div className="absolute top-4 right-4 bg-surface-container-lowest p-2 rounded-full shadow-sm text-primary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-h3 text-h3 text-on-surface mb-2 text-[22px]">Pressure Sore Prevention</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Specialized mattresses and routine turning schedules to maintain skin integrity.</p>
                </div>
              </div>

              {/* Care Block 3 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(224,122,95,0.08)] border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img alt="Medical bed in a clean room" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXuquXa4MwSySgRmn3kZxrn2BQoeQCYP-jFrGeprHc0Er_noAAIpWL-8WXJ8M-wtozSzFZX2V47wMliZjwXouZDb8XftBhCESHjPJ1kY-8-laM47T78WbrH9iUcjBgdG9SIZyuRpKpQX0u6b9jQTe5nlFJ6Bjr2nQRSeonWrcY7L_DRU1GK7ME-nx9heyxs-KMRC5KT7irUcvoW6oxYTjmc3WXyQJm3Eq0mBYnaAmz28d93stqUyPdVKbqizFqrG0eufb9lusBPktQ"/>
                  <div className="absolute top-4 right-4 bg-surface-container-lowest p-2 rounded-full shadow-sm text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medication</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-h3 text-h3 text-on-surface mb-2 text-[22px]">Timed Medication &amp; Feeding</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Strict adherence to prescribed schedules for nutrition and health management.</p>
                </div>
              </div>

              {/* Care Block 4 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(224,122,95,0.08)] border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img alt="Hand-holding" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGzoFPyIWA9yS4JNKN7tQO9K9t_yTatrmJacRMeRBydkesPCAMB0mH-St_b7ZuuUkJt5oE_z9x4XlHMUjrU27YrAjZzoEwNfkgyUDLovoDCquFRWCnmzTEju_J8bxWliPpbRh5-5oUhn1DpwCBO0-YF_Z0RLsFZPDjdXBa9BEXvYcCzAVgaA_H52gR2-zdI3p1pqfydI-E0W8QGZBKYSgdbg5y45h6YaYVQKwSF-wmZX4HfOFGKVBY5Julr-nB80eLDH8tvlwHmTB5"/>
                  <div className="absolute top-4 right-4 bg-surface-container-lowest p-2 rounded-full shadow-sm text-primary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>clean_hands</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-h3 text-h3 text-on-surface mb-2 text-[22px]">Bed Bathing &amp; Hygiene</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Respectful and thorough personal care maintaining dignity and cleanliness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-low" id="donate-contact">
          <div className="max-w-6xl mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              
              {/* Contact Us - Left Side */}
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-[0_12px_40px_-10px_rgba(224,122,95,0.05)] border border-outline-variant/10 flex flex-col h-full items-center justify-center text-center">
                <h2 className="font-h2 text-h2 text-on-surface mb-8">Contact Us</h2>
                
                <div className="flex flex-col gap-10 flex-grow justify-center w-full">
                  <div className="flex flex-col gap-3 items-center">
                    <p className="font-body-md text-body-md text-secondary bg-secondary-container px-4 py-2 rounded-lg inline-block font-medium">
                      Phone
                    </p>
                    <div className="flex items-center gap-4 text-primary-container">
                      <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
                      <span className="font-h3 text-h3">+91 74021 77614</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 text-on-surface-variant items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[32px] text-primary">location_on</span>
                      <span className="font-h4 text-2xl font-bold text-on-surface">Address</span>
                    </div>
                    <div className="font-body-md text-body-md text-center text-lg leading-relaxed bg-surface-container-low p-6 rounded-xl w-full">
                      <span className="font-bold text-primary block mb-2">Sri Baba Charitable Trust</span>
                      48, Gandhi Nagar, 2nd Street<br />
                      Kavundampalayam, Coimbatore 641030<br />
                      India
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code / Donate - Right Side */}
              <div className="bg-surface-container p-8 md:p-12 rounded-2xl shadow-[0_12px_40px_-10px_rgba(224,122,95,0.15)] flex flex-col h-full items-center justify-center text-center">
                <h2 className="font-h2 text-h2 text-primary mb-4">Support Our Cause</h2>
                <p className="font-body-lg text-body-lg text-on-surface text-lg leading-relaxed mb-8 max-w-md">
                  Your contribution helps us provide better care and facilities for our elderly residents
                </p>
                <div className="flex flex-col items-center justify-center p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/30 w-full max-w-sm">
                  <div className="w-72 h-72 bg-surface-variant flex items-center justify-center rounded-xl mb-6 shadow-inner overflow-hidden relative border border-outline-variant/10">
                    {/* The image will load from the public/images folder */}
                    <img src="/images/qr-code.jpeg" alt="Donate QR Code" className="w-full h-full object-cover z-10" onError={(e) => { e.target.style.display = 'none'; }} />
                    {/* Fallback icon if image is not found */}
                    <span className="material-symbols-outlined text-[80px] text-on-surface-variant absolute z-0" style={{ fontVariationSettings: "'FILL' 0" }}>qr_code_2</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Scan and Donate</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-slate-950 border-t border-[#F4F1DE] dark:border-slate-800 font-newsreader text-sm w-full">
        <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-[#E07A5F] dark:text-orange-400 opacity-90 hover:opacity-100 transition-opacity">
            Sri Baba Charitable Trust
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <a className="text-slate-500 dark:text-slate-400 hover:text-[#E07A5F] dark:hover:text-orange-300 transition-colors opacity-90 hover:opacity-100" href="#">Admissions</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-[#E07A5F] dark:hover:text-orange-300 transition-colors opacity-90 hover:opacity-100" href="#">Volunteer</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-[#E07A5F] dark:hover:text-orange-300 transition-colors opacity-90 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-[#E07A5F] dark:hover:text-orange-300 transition-colors opacity-90 hover:opacity-100" href="#">Impact Report</a>
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-center md:text-right">
            © 2024 Sri Baba Charitable Trust. Providing dignity in care.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
