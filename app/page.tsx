"use client";

import { useState, useEffect } from "react";

// Icon Components
const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);
const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const IconCreditCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>
);
const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9c0 .893-.13 1.755-.372 2.568" />
  </svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);
const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconQuote = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#003a70] opacity-20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
  </svg>
);

// Data
const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Download", href: "#download" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Promo", href: "#promo" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

// section products
const products = [
  { icon: <IconCreditCard />, title: "Kartu Kredit", desc: "Nikmati kemudahan transaksi dengan berbagai pilihan kartu kredit Mandiri yang memberikan cashback, rewards, dan cicilan 0% di merchant pilihan." },
  { icon: <IconPhone />, title: "Livin' by Mandiri", desc: "Aplikasi super app perbankan digital yang memudahkan transfer, pembayaran, investasi, dan berbagai transaksi finansial dalam satu genggaman." },
  { icon: <IconChart />, title: "Investasi & Wealth", desc: "Kelola kekayaan Anda dengan produk investasi lengkap mulai dari reksa dana, obligasi, hingga layanan wealth management eksklusif." },
  { icon: <IconGlobe />, title: "Mandiri Internet Banking", desc: "Akses rekening Anda kapan saja dan di mana saja melalui platform internet banking yang aman dengan fitur transaksi lengkap." },
  { icon: <IconShield />, title: "Tabungan & Deposito", desc: "Pilihan tabungan dan deposito dengan bunga kompetitif, mulai dari Tabungan Mandiri, Tabungan Bisnis, hingga Deposito berjangka." },
  { icon: <IconUsers />, title: "Kredit & Pembiayaan", desc: "Solusi pembiayaan untuk kebutuhan Anda mulai dari KPR Mandiri, Kredit Multiguna, hingga pembiayaan usaha mikro dan korporasi." },
];

// section stats
const stats = [
  { value: "40 Juta+", label: "Nasabah Aktif" },
  { value: "2.700+", label: "Kantor Cabang" },
  { value: "18.000+", label: "ATM Tersebar" },
  { value: "#1", label: "Bank Terbesar di Indonesia" },
];

// section testimonials
const testimonials = [
  { name: "CipiCapa", role: "Bendahara Hati mu, Cina", text: "Jujur, jadi bendahara itu tanggung jawabnya gede banget, tapi untungnya pakai Bank Mandiri. Aplikasi Livin' nya user friendly banget buat cek uang masuk dari anggota secara instan.", avatar: "CP" },
  { name: "Lisa Angle Kiri", role: "Beauty Blogger, Dubai", text: "ilov Bank Mandiri karena saya orang mandiri ayo kt jd mandiri tanpa bantuan orang lain apalagi cowo (ngode minta cariin cowo bule)", avatar: "KZ" },
  { name: "Kajul Betean", role: "Jembong, Kebon Jeruk", text: "Jalan-jalan ke kota Kediri. Pas pulang di gigit laba-laba. Ayo kita pergi ke Bank Mandiri, Jangan lupa di coba.", avatar: "AJ" },
  { name: "Icop Pencari Baddie", role: "Anomali, Cipinang", text: "Aku suka Bank Mandiri walaupun aku lama untuk transfer ke teman aku karena ingin ragebait teman aku hehe", avatar: "IC" },
  { name: "Figo Behelan", role: "Freak, Depok", text: "Satu Dua hitung biri-biri. Pulangnya ke kota kumuh. Kalau kita omongin Bank Mandiri. Pagi Tolmuh!!", avatar: "FG" },
  { name: "Ripat Ngeselin", role: "Dokter, Bekasi", text: "Bareng Bank Mandiri, semua transaksi jadi lebih praktis. Pakai Livin' by Mandiri, cek saldo, transfer, dan bayar kebutuhan harian bisa langsung beres kapan saja, di mana saja.", avatar: "RP" },
  { name: "Ceja Bociel", role: "Influencer, Pasar Minggu", text: "Nggak perlu ribet urus keuangan. Dengan Livin' by Mandiri dari Bank Mandiri, semua jadi lebih cepat, aman, dan praktis dalam satu genggaman.", avatar: "CJ" },
  { name: "Kak Aliya Canci", role: "Dosen, London", text: "Sebagai Dosen di UK, Bank Mandiri merupakan salah satu bank Indonesia yang ada di London sehingga memudahkan saya untuk transaksi dari UK ke Indonesia", avatar: "AY" }
];

// Main Page Component
export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [testiIndex, setTestiIndex] = useState(0);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://www.bankmandiri.co.id/favicon.ico';
    document.head.appendChild(link);
    document.title = 'Bank Mandiri - Terdepan, Terpercaya, Tumbuh Bersama Anda';
  }, []);
  const testiPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testiPerPage);
  const prevTesti = () => setTestiIndex((p) => (p === 0 ? totalPages - 1 : p - 1));
  const nextTesti = () => setTestiIndex((p) => (p === totalPages - 1 ? 0 : p + 1));
  const visibleTestimonials = testimonials.slice(testiIndex * testiPerPage, testiIndex * testiPerPage + testiPerPage);

  return (
    <main className="overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="navbar-glass fixed top-0 left-0 w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3">
            <img
              src="/logo-mandiri.png"
              alt="Bank Mandiri"
              className="h-8 w-auto"
            />
          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[#003a70] hover:text-[#f2a900] transition-colors text-sm font-medium">{l.label}</a>
            ))}
            <a href="#kontak" className="btn-mandiri text-sm px-6 py-2.5 rounded-lg inline-block">Buka Rekening</a>
          </div>
          {/* Mobile toggle */}
          <button className="md:hidden text-[#003a70]" onClick={() => setMobileMenu(!mobileMenu)}>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenu(false)} className="text-[#003a70] hover:text-[#f2a900] py-2 text-sm font-medium">{l.label}</a>
            ))}
            <a href="#kontak" className="btn-mandiri text-sm px-6 py-2.5 rounded-lg inline-block text-center mt-2">Buka Rekening</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="beranda" className="hero-gradient min-h-screen flex items-center pt-20 pb-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 promo-badge px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
            Bank Terbesar di Indonesia
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Terdepan, Terpercaya.{" "}
            <span className="text-[#f2a900]">Tumbuh Bersama Anda.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Wujudkan masa depan finansial Anda bersama Bank Mandiri. Nikmati layanan perbankan digital terdepan, produk investasi terlengkap, dan jaringan terluas di seluruh Indonesia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#produk" className="btn-mandiri text-base">Jelajahi Produk</a>
            <a href="#keunggulan" className="btn-outline-mandiri text-base">Mengapa Mandiri?</a>
          </div>
        </div>
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#00264d]/80 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="stat-item text-center px-4">
                <p className="text-2xl md:text-3xl font-extrabold text-[#f2a900]">{s.value}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section id="download" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#003a70] to-[#0056a6] rounded-3xl px-10 py-14 grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-[#f2a900] font-bold text-sm uppercase tracking-widest mb-3">Super App Perbankan</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Semua Ada di<br />
                <span className="text-[#f2a900]">Livin&apos; by Mandiri</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Transfer, bayar tagihan, investasi reksa dana, beli asuransi, hingga buka deposito. Semuanya dalam satu aplikasi yang aman dan mudah digunakan.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open("https://apps.apple.com/id/app/livin-by-mandiri/id1555414743", "_blank")}
                  className="flex items-center gap-3 bg-black text-white font-semibold px-5 py-3.5 rounded-2xl hover:bg-gray-900 transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-white/60 text-xs">Download di</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </button>
                <button
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=id.bmri.livin&hl=id", "_blank")}
                  className="flex items-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-5 py-3.5 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M3.5 1.5L13.5 12L3.5 22.5C3.2 22.3 3 21.9 3 21.5V2.5C3 2.1 3.2 1.7 3.5 1.5Z" fill="#EA4335"/>
                    <path d="M17.5 8L13.5 12L3.5 1.5C3.7 1.4 3.9 1.4 4.1 1.5L17.5 8Z" fill="#FBBC04"/>
                    <path d="M21 12C21 12.6 20.7 13.2 20.1 13.5L17.5 15L13.5 12L17.5 8L20.1 10.5C20.7 10.8 21 11.4 21 12Z" fill="#4285F4"/>
                    <path d="M3.5 22.5L13.5 12L17.5 15L4.1 22.5C3.9 22.6 3.7 22.6 3.5 22.5Z" fill="#34A853"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-white/60 text-xs">Download di</p>
                    <p className="text-sm font-bold">Play Store</p>
                  </div>
                </button>
              </div>
            </div>
            {/* Right, feature list */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 3M21 7.5H7.5", label: "Transfer Instan" },
                { icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z", label: "Bayar Tagihan" },
                { icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z", label: "Investasi" },
                { icon: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z", label: "Scan QRIS" },
                { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "Aman & Terpercaya" },
                { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", label: "Transaksi 24/7" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f2a900]/20 text-[#f2a900] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#f2a900] font-bold text-sm uppercase tracking-widest mb-3">Produk & Layanan</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003a70] mb-4">Solusi Finansial untuk Setiap Kebutuhan</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Dari tabungan hingga investasi, Bank Mandiri menyediakan rangkaian produk perbankan terlengkap untuk mendukung perjalanan finansial Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#003a70] flex items-center justify-center mb-5">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#003a70] mb-3">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section id="keunggulan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#f2a900] font-bold text-sm uppercase tracking-widest mb-3">Mengapa Bank Mandiri?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003a70] mb-4">Keunggulan yang Membedakan Kami</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Sebagai bank terbesar di Indonesia berdasarkan aset, Bank Mandiri terus berinovasi untuk memberikan pengalaman perbankan terbaik.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { title: "Jaringan Terluas di Indonesia", desc: "Dengan lebih dari 2.700 kantor cabang dan 18.000 ATM di seluruh Indonesia, akses perbankan Mandiri selalu dekat dengan Anda." },
                { title: "Keamanan Berlapis", desc: "Teknologi enkripsi terkini, autentikasi biometrik, dan sistem fraud detection 24/7 melindungi setiap transaksi Anda." },
                { title: "Inovasi Digital Terdepan", desc: "Livin' by Mandiri telah diunduh lebih dari 30 juta pengguna dengan fitur lengkap dari transfer, investasi, hingga pembayaran QR." },
                { title: "Penghargaan Internasional", desc: "Meraih berbagai penghargaan termasuk Best Bank in Indonesia dari Euromoney, Finance Asia, dan The Asian Banker." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-[#003a70] font-bold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-[#003a70] text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#003a70] to-[#0056a6] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Fakta Bank Mandiri</h3>
              <div className="space-y-5">
              {[
                { label: "Total Aset", value: "Rp 2.000+ Triliun", isRating: false },
                { label: "Berdiri Sejak", value: "2 Oktober 1998", isRating: false },
                { label: "Karyawan", value: "37.000+ Profesional", isRating: false },
                { label: "Pengguna Livin'", value: "30 Juta+", isRating: false },
                { label: "Rating Aplikasi", value: "4.5 / 5.0", isRating: true },
                ].map((f, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/15 pb-3">
                    <span className="text-white/70 text-sm">{f.label}</span>
                    {f.isRating ? (
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                          {[1,2,3,4].map((s) => (
                            <svg key={s} className="w-4 h-4 text-[#f2a900]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                          <svg className="w-4 h-4 text-[#f2a900]" fill="currentColor" viewBox="0 0 24 24">
                            <defs>
                              <linearGradient id="halfStar">
                                <stop offset="50%" stopColor="#f2a900" />
                                <stop offset="50%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                            <path fill="url(#halfStar)" stroke="#f2a900" strokeWidth="1" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <span className="font-bold text-[#f2a900] text-sm">{f.value}</span>
                      </div>
                    ) : (
                      <span className="font-bold text-[#f2a900]">{f.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section id="promo" className="py-24 hero-gradient relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#f2a900] font-bold text-sm uppercase tracking-widest mb-3">Promo Spesial</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Penawaran Terbaik untuk Anda</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Manfaatkan berbagai promo menarik dari Bank Mandiri untuk memaksimalkan keuntungan finansial Anda.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: "Kartu Kredit", title: "Cashback 10% di Tokopedia", desc: "Belanja di Tokopedia menggunakan Kartu Kredit Mandiri dan dapatkan cashback hingga Rp 100.000 setiap bulannya. Berlaku untuk semua jenis kartu.", period: "s/d 31 Desember 2025" },
              { tag: "Tabungan", title: "Bunga Spesial Deposito 5.5%", desc: "Buka Deposito Rupiah mulai dari Rp 10 juta dan nikmati suku bunga spesial 5.5% p.a. untuk tenor 6 dan 12 bulan.", period: "s/d 30 November 2025" },
              { tag: "Livin'", title: "Gratis Transfer Antar Bank", desc: "Nikmati gratis biaya transfer antar bank hingga 30x per bulan melalui aplikasi Livin' by Mandiri. Tanpa syarat minimum saldo.", period: "Promo Berlangsung" },
            ].map((promo, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:bg-white/15 transition-colors">
                <span className="promo-badge text-xs font-bold px-3 py-1 rounded-full">{promo.tag}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">{promo.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{promo.desc}</p>
                <p className="text-[#f2a900] text-xs font-semibold">{promo.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#f2a900] font-bold text-sm uppercase tracking-widest mb-3">Testimoni Nasabah</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003a70] mb-4">Apa Kata Mereka tentang Bank Mandiri?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Dengarkan pengalaman nyata dari nasabah setia Bank Mandiri di berbagai kota di Indonesia.</p>
          </div>
          <div className="relative">
            {/* Left Arrow */}
            <button onClick={prevTesti} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition border border-gray-200">
              <svg width="20" height="20" fill="none" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="14,4 6,10 14,16" /></svg>
            </button>
            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 px-8">
              {visibleTestimonials.map((t, i) => (
                <div key={testiIndex * testiPerPage + i} className="testimonial-card rounded-2xl p-8 relative transition-all duration-300">
                  <div className="text-[#003a70] text-4xl font-serif mb-4">&ldquo;&ldquo;</div>
                  <p className="text-gray-600 leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#003a70] flex items-center justify-center text-white font-bold text-xs">{t.avatar}</div>
                    <div>
                      <p className="font-bold text-[#003a70] text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Right Arrow */}
            <button onClick={nextTesti} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition border border-gray-200">
              <svg width="20" height="20" fill="none" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6,4 14,10 6,16" /></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setTestiIndex(i)} className={`w-3 h-3 rounded-full transition-all ${i === testiIndex ? 'bg-[#003a70] w-8' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003a70] mb-4">Siap Memulai Perjalanan Finansial Anda?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Buka rekening Bank Mandiri sekarang dan nikmati semua kemudahan layanan perbankan digital terdepan di Indonesia.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://bankmandiri.co.id" target="_blank" rel="noopener noreferrer" className="btn-mandiri text-base">Buka Rekening Online</a>
            <a href="tel:14000" className="bg-[#003a70] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0056a6] transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Hubungi 14000
            </a>          
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontak" className="bg-[#00264d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-bold text-[#003a70] text-lg">M</div>
                <span className="font-bold text-xl">Bank Mandiri</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">Bank Mandiri merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS). Maksimum nilai simpanan yang dijamin LPS per Nasabah per Bank adalah Rp 2 miliar. Untuk mengetahui Tingkat Bunga Penjaminan LPS silakan akses di sini</p>
            </div>
            <div>
              <h4 className="font-bold text-[#f2a900] mb-4">Produk</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Tabungan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kartu Kredit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">KPR Mandiri</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deposito</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#f2a900] mb-4">Layanan Digital</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Livin&apos; by Mandiri</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Internet Banking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mandiri API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">QRIS Mandiri</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mandiri EDC</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#f2a900] mb-4">Hubungi Kami</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 5.25v1.5z" />
                  </svg>
                  Mandiri Call: <strong className="text-white">14000</strong>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  customer.care@bankmandiri.co.id
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Jl. Jend. Gatot Subroto Kav. 36-38, Jakarta 12190
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9c0 .893-.13 1.755-.372 2.568" />
                  </svg>
                  www.bankmandiri.co.id
                </li>
              </ul>
            </div>
          </div>
          <div className="section-divider mt-12 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">&copy; 2025 PT Bank Mandiri (Persero) Tbk. Terdaftar dan diawasi oleh OJK. Anggota LPS.</p>
            <div className="flex gap-6 text-white/30 text-sm">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Peta Situs</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}