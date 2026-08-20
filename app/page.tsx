"use client";

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [grapLoaded, setGrapLoaded] = useState(false);

  // Barra de Progresso do Scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Simulação do carregamento da GRAP
  useEffect(() => {
    const timer = setTimeout(() => {
      setGrapLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-900/80 text-slate-200 font-sans antialiased selection:bg-emerald-500/30 selection:text-white min-h-screen relative overflow-x-hidden">
      {/* BARRA DE PROGRESSO DE SCROLL */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue via-emerald to-blue-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ============ HEADER ============ */}
      <header id="header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 bg-slate-900/80 backdrop-blur-md rounded-2xl mt-3 px-6 border border-white/10 shadow-xl">

            {/* LOGÓTIPO */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:border-cyan-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:rotate-45 transition-transform duration-500">
                  <path d="M12 12c-2-2.5-4-4-6.5-4A4.5 4.5 0 0 0 1 12.5 4.5 4.5 0 0 0 5.5 17c2.5 0 4.5-1.5 6.5-4Zm0 0c2 2.5 4 4 6.5 4a4.5 4.5 0 0 0 4.5-4.5A4.5 4.5 0 0 0 18.5 7c-2.5 0-4.5 1.5-6.5 4Z"/>
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                OFFICEPRO
              </span>
            </a>
            {/* MENU DESKTOP (ÚNICO) */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#caminhos" className="hover:text-white transition-colors">Caminhos</a>
              <a href="#apps" className="hover:text-white transition-colors">Aplicações</a>
              <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
              <a href="#garantia" className="hover:text-white transition-colors">Garantia</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>

            {/* BOTÕES DESKTOP (ÚNICO) */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                100% Legal
              </span>
              <a
                href="#caminhos"
                className="inline-flex items-center gap-2 bg-white text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                Agendar Instalação
              </a>
            </div>

            {/* BOTÃO MOBILE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* MENU MOBILE */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-slate-900 border border-slate-800 rounded-2xl mt-2 overflow-hidden transition-all duration-300 shadow-2xl">
              <nav className="flex flex-col p-5 gap-4 text-sm font-medium text-slate-300">
                <a href="#caminhos" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Caminhos</a>
                <a href="#apps" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Aplicações</a>
                <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Como funciona</a>
                <a href="#garantia" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Garantia</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">FAQ</a>
                <a
                  href="#caminhos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex justify-center items-center gap-2 bg-white text-slate-950 font-semibold text-sm px-5 py-3 rounded-xl mt-2"
                >
                  Agendar Instalação
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="top" className="relative pt-44 pb-28 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Instalação em todo o território angolano
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] max-w-4xl mx-auto bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            O escritório digital certo para si, instalado por quem entende do assunto.
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Evite pagar mensalidades ou assinaturas anuais. Recomendamos o que realmente resolve o seu dia a dia:{' '}
            <span className="text-white font-medium">Office 2024 Professional Plus</span>, instalação segura que inclui o{' '}
            <span className="text-white font-medium">Word, Excel, PowerPoint, Access, Outlook e OneNote</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#caminhos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_80px_-20px_rgba(37,99,235,0.45)]"
            >
              Ver caminho
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a
              href="https://wa.me/244922649899?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-white font-semibold px-7 py-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-500 font-mono">
            Sem promessas impossíveis. Sem licença vitalícia que desliga sozinha. Só software que continua a abrir amanhã.
          </p>
        </div>
      </section>

      {/* PROVA SOCIAL / GRAP */}
      <section className="py-10 border-t border-slate-800/60 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
            Empresas e profissionais em Angola que já aderiram ao OfficePro
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {!grapLoaded ? (
              <div className="skeleton-loader w-36 h-12 rounded-xl bg-slate-900 animate-pulse"></div>
            ) : (
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-sm hover:border-yellow-500/40 hover:scale-105 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-500 font-bold text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6a3 3 0 00-3-3H5a3 3 0 00-3 3v9a2 2 0 002 2h1a3 3 0 006 0h1a1 1 0 001-1V10a3 3 0 00-3-3z" />
                  </svg>
                </div>
                <span className="text-lg font-black tracking-wider text-white group-hover:text-yellow-500 transition-colors">
                  GRAP
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============ CAMINHOS ============ */}
      <section id="caminhos" className="relative px-6 py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">Caminhos de Instalação</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gradient">
              Tudo detalhado para melhor compreensão.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Aqui encontras algumas informações sobre esta versão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            {/* CARTÃO EXCEL */}
            <div className="relative group bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:border-emerald-500/40 overflow-hidden">
              <div className="relative rounded-2xl border border-slate-700 bg-black/40 p-1 mb-6 shadow-inner overflow-hidden aspect-video">
                <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                </div>
                <img
                  src="/proffisionalismo.jpg"
                  alt="Demonstração do Microsoft Excel 2024"
                  className="rounded-xl w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">gestão e tabelas no Excel</h3>
                    <p className="text-emerald-400 text-xs font-medium">ativação simples e segura.</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Planilhas poderosas para gestão financeira, relatórios dinâmicos e gráficos impressionantes com novos recursos e fórmulas avançadas.
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Controlo de Gastos e Orçamentos</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Cálculos e Somas Automáticas</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Gráficos Fáceis para Apresentações</li>
                </ul>
              </div>
            </div>

            {/* CARTÃO WORD */}
            <div className="relative group bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:border-blue-500/40 overflow-hidden">
              <div className="relative rounded-2xl border border-slate-700 bg-black/40 p-1 mb-6 shadow-inner overflow-hidden aspect-video">
                <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                </div>
                <img
                  src="/word-demo.jpg"
                  alt="Demonstração do Microsoft Word 2024"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Trabalhos e documentos no Word</h3>
                    <p className="text-blue-400 text-xs font-medium">Ativação genuína com chave de lincença válida</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Criação e edição de textos, relatórios e documentos com formatação avançada e integração para exportação limpa em PDF.
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Criação de currículos e Cartas</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Corretor de Português automático</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Armazenamento e conversão para PDF</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CAIXA DE PREÇO COM GLOW E HOVER */}
          <div className="relative mt-12 p-8 bg-slate-900 border border-slate-800 rounded-3xl max-w-xl mx-auto shadow-2xl transition-all duration-500 hover:border-emerald-500/50 hover:shadow-emerald-500/10 group overflow-hidden text-center">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-3">
              <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest font-semibold">
                Serviço Completo & Garantido
              </p>

              <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2 mb-1">
                Kz 60.000,00
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                Pagamento único · Sem mensalidades
              </p>

              <a
                href="https://wa.me/244922649899?text=Olá!%20Vim%20pela%20sec%C3%A7%C3%A3o%20detalhada%20e%20quero%20agendar%20a%20instala%C3%A7%C3%A3o%20do%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-500/90 text-slate-950 font-bold text-base transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01]"
              >
                <svg className="w-6 h-6 fill-current animate-bounce" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z" />
                </svg>
                <span>Agendar Instalação Segura</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ POR QUE NÃO ATIVADORES ============ */}
      <section className="relative px-6 py-24 border-t border-slate-800/60 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-blue-500 tracking-widest uppercase">IMPORTANTE</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gradient">
              Por que evitar ativadores piratas e chaves falsas?
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Existem muitos programas e ficheiros na internet que prometem o Office de graça, mas o custo real pode ser muito mais alto para o seu computador. Veja a diferença:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 rounded-2xl p-7 border border-red-500/20">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </span>
                <h3 className="font-bold text-white">Ativadores Piratas / Scripts Na internet</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex gap-2.5"><span className="text-red-400 mt-0.5">–</span>Podem conter malware, vírus e programas espiões que roubam senhas</li>
                <li className="flex gap-2.5"><span className="text-red-400 mt-0.5">–</span>O Windows update frequentemente bloqueia e desativa o programa.</li>
                <li className="flex gap-2.5"><span className="text-red-400 mt-0.5">–</span>Danificam ficheiros do sistema operativo e deixam o PC lento.</li>
                <li className="flex gap-2.5"><span className="text-red-400 mt-0.5">–</span>Sem garantia de funcionamento nem suporte quando der erro.</li>
              </ul>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-7 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="font-bold text-white">instalação oficial do Office 2024 pro plus</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-2.5"><span className="text-emerald-400 mt-0.5">✓</span>instalação e ativação com licença válida e segura.</li>
                <li className="flex gap-2.5"><span className="text-emerald-400 mt-0.5">✓</span>Totalmente seguro por 60.000kz, pagando um preço único</li>
                <li className="flex gap-2.5"><span className="text-emerald-400 mt-0.5">✓</span>Sem ficheiros modificados ou ativadores de origem duvidosa</li>
                <li className="flex gap-2.5"><span className="text-emerald-400 mt-0.5">✓</span>Suporte técnico garantido e acompanhamento na configuração.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ APLICAÇÕES ============ */}
      <section id="apps" className="relative px-6 py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">Cobertura completa</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gradient">
              Tudo o que precisa, prontinho a abrir
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Documentos, folhas de cálculo, apresentações e mais — configurados no seu computador antes de nos irmos embora.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold">W</div>
              <p className="text-sm font-semibold text-white">Word</p>
              <p className="text-xs text-slate-500 mt-1">Documentos e texto</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">X</div>
              <p className="text-sm font-semibold text-white">Excel</p>
              <p className="text-xs text-slate-500 mt-1">Folhas de cálculo</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold">P</div>
              <p className="text-sm font-semibold text-white">PowerPoint</p>
              <p className="text-xs text-slate-500 mt-1">Apresentações</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold">O</div>
              <p className="text-sm font-semibold text-white">Outlook</p>
              <p className="text-xs text-slate-500 mt-1">Gestão de Email</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">A</div>
              <p className="text-sm font-semibold text-white">Access</p>
              <p className="text-xs text-slate-500 mt-1">Bases de dados</p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">N</div>
              <p className="text-sm font-semibold text-white">OneNote</p>
              <p className="text-xs text-slate-500 mt-1">Notas digitais</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COMO FUNCIONA ============ */}
      <section id="como-funciona" className="relative px-6 py-24 border-t border-slate-800/60 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-blue-500 tracking-widest uppercase">Processo</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gradient">
              Do primeiro contacto ao Office a funcionar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-7 relative">
              <span className="font-mono text-4xl font-extrabold text-slate-700">01</span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Conte-nos o que precisa</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Uma conversa rápida no WhatsApp basta para percebermos o seu dia a dia e recomendar o caminho certo — nunca o mais caro por vender mais caro.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-7 relative">
              <span className="font-mono text-4xl font-extrabold text-slate-700">02</span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Instalamos onde estiver</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Por acesso remoto autorizado por si, em qualquer província, ou presencialmente em Luanda mediante agendamento. Você acompanha tudo em tempo real.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-7 relative">
              <span className="font-mono text-4xl font-extrabold text-slate-700">03</span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Testa antes de pagar</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Abre um documento, grava uma folha de cálculo, confirma que está tudo certo. Só paga quando estiver realmente satisfeito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GARANTIA ============ */}
      <section id="garantia" className="relative px-6 py-24 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m6 3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-2">Só paga o que já viu funcionar</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Confirma primeiro que tudo abre, grava e imprime corretamente. O pagamento vem depois, nunca antes.</p>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-600/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-2">Formatou o PC? Voltamos</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Nos primeiros 30 dias, se formatar ou trocar de equipamento, reinstalamos tudo sem custo adicional.</p>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h-9v9h9v-9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M15.75 3v1.5M8.25 19.5V21M15.75 19.5V21M3 8.25h1.5M3 12h1.5M3 15.75h1.5M19.5 8.25H21M19.5 12H21M19.5 15.75H21" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-2">Continuamos aqui depois</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Uma dúvida três meses depois da instalação? A mesma conversa de WhatsApp continua aberta para si.</p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="relative px-6 py-24 border-t border-slate-800/60 bg-slate-900/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">Dúvidas</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gradient">
              Antes de decidir, leia isto
            </h2>«
          </div>

          <div className="space-y-3">
            {[
              {
                q: "O valor de 60.000kz é pago uma única vez ou é mensal?",
                a: "Não há mensalidades, assinaturas anuais ou cobranças adicionais. Paga 60.000kz pela instalação e ativação para usar de forma contínua no seu computador."
              },
              {
                q: "Como é feita a instalação do Office 2024 no meu computador?",
                a: "A instalação é feita de forma rápida e segura. Pode ser efetuada presencialmente ou via acesso remoto (se preferir), garantindo que todo o pacote fique 100% configurado e pronto para usar."
              },
              {
                q: "A licença é oficial e segura? O meu PC corre algum risco?",
                a: "100% segura e limpa. Utilizamos chaves de ativação genuínas. Não usamos ativadores piratas, cracks ou programas nocivos que colocam os seus dados em risco."
              },
              {
                q: "E se eu formatar o computador no futuro, perco a licença?",
                a: "Não. A sua licença fica vinculada e guardamos o registo do seu serviço. Caso precise de formatar ou reinstalar no mesmo computador, prestamos o suporte necessário para ativar o seu Office."
              },
              {
                q: "Estou fora de Luanda ou longe de si, é possível fazer a instalação?",
                a: "Sim! Atendemos clientes em qualquer província de Angola através de suporte remoto seguro. Todo processo leva poucos minutos e acompanha a nossa garantia de suporte."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-45 text-emerald-400' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative px-6 py-24 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
          <h2 className="relative text-3xl md:text-4xl font-extrabold text-gradient mb-4">
            Vamos pôr o seu computador a trabalhar de verdade?
          </h2>
          <p className="relative text-slate-400 max-w-xl mx-auto mb-8">
            Sem pressão, sem contagem de stock inventada. Escreva-nos e decidimos juntos qual caminho faz sentido para si.
          </p>
          <a
            href="https://wa.me/244922649899?text=Olá!%20Li%20as%20informações%20no%20site%20e%20quero%20tirar%20uma%20dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-500/90 text-slate-950 font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_60px_-15px_rgba(16,185,129,0.4)]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z" />
            </svg>
            Falar no WhatsApp agora
          </a>
        </div>
      </section>
   {/* ============ FOOTER ============ */}
<footer className="relative px-6 py-10 border-t border-slate-800/60">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Logótipo + Nome */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center justify-center shrink-0">
          <svg 
            className="w-5 h-5 text-cyan-400 stroke-[2]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.178 8c5.096 0 5.096 8 0 8-2.3 0-3.962-1.89-5.178-3.416C11.782 14.11 10.12 16 7.822 16c-5.096 0-5.096-8 0-8 2.3 0 3.962 1.89 5.178 3.416C14.218 9.89 15.88 8 18.178 8z" />
          </svg>
        </div>
        <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          OFFICEPRO
        </span>
      </div>

      {/* Texto de Aviso Legal */}
      <p className="text-center text-xs text-slate-600 max-w-md leading-relaxed">
        Serviço independente de suporte técnico e instalação de software. Não somos afiliados, parceiros diretos nem revendedores oficiais certificados da Microsoft Corporation. Microsoft, Office, Word, Excel, PowerPoint, Outlook, Access e OneNote são marcas registadas da Microsoft Corporation.
      </p>

      {/* Link WhatsApp */}
      <a 
        href="https://wa.me/244922649899?text=Ol%C3%A1!%20Estava%20a%20ver%20o%20site%20no%20rodap%C3%A9%20gostaria%20de%20falar%20sobre%20a%20instala%C3%A7%C3%A3o%20do%20office" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs font-semibold text-emerald-400 hover:underline shrink-0 flex items-center gap-1"
      >
        WhatsApp
      </a>
    </div>

    {/* Linha Divisória */}
    <div className="h-px w-full bg-slate-800/80 mt-8 mb-6"></div>

    {/* Direitos de Autor */}
    <p className="text-center text-xs text-slate-600">
      © {new Date().getFullYear()} OfficePro · Luanda, Angola. Todos os direitos reservados.
    </p>
  </div>
</footer>
</div>
  );
}
