import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  CalendarDays, 
  ArrowRight, 
  Star, 
  Users, 
  Check, 
  Building2, 
  BarChart3, 
  ArrowLeftRight, 
  FileText, 
  Sparkles,
  Smartphone,
  ChevronRight,
  Shield,
  Layers,
  Lock,
  MessageSquare
} from 'lucide-react';
import './landing.css';

interface LandingPageProps {
  onGoToLogin: () => void;
  onGoToRegister?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGoToLogin, onGoToRegister }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [punchState, setPunchState] = useState<'idle' | 'validating' | 'punched'>('idle');

  // Relógio em tempo real no mockup do celular
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulatePunch = () => {
    if (punchState === 'punched') {
      setPunchState('idle');
      return;
    }
    setPunchState('validating');
    setTimeout(() => {
      setPunchState('punched');
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pontual-landing-wrapper selection:bg-[#F59242] selection:text-white">
      
      {/* ====================================================================
          1. HERO SECTION (DARK COM RADIAL GLOW & 3 COLUNAS)
          ==================================================================== */}
      <section className="pontual-hero-container relative w-full pt-6 pb-20 md:pb-28">
        <div className="pontual-hero-ambient-corner" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Navbar */}
          <nav className="flex items-center justify-between py-4 mb-12 border-b border-white/10">
            {/* Logo Pontual */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9F243C] via-[#F59242] to-[#F9DE97] flex items-center justify-center p-0.5 shadow-lg shadow-[#9F243C]/30">
                <div className="w-full h-full bg-[#08090C] rounded-[10px] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-[#F9DE97] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59242]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-sans flex items-center gap-1.5">
                  Pontual
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#9F243C]/50 text-[#F9DE97] border border-[#F59242]/30 font-mono font-bold">
                    PRO
                  </span>
                </span>
                <span className="text-[10px] text-white/50 tracking-wider uppercase font-mono">
                  Gestão de Ponto & Escalas
                </span>
              </div>
            </div>

            {/* Nav Links centrais */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/80">
              <a 
                href="#inicio" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#F9DE97] hover:text-white transition-colors relative py-1"
              >
                Início
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F59242] rounded-full" />
              </a>
              <a 
                href="#recursos" 
                onClick={(e) => { e.preventDefault(); scrollToSection('recursos'); }}
                className="hover:text-[#F9DE97] transition-colors"
              >
                Recursos
              </a>
              <a 
                href="#sobre" 
                onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}
                className="hover:text-[#F9DE97] transition-colors"
              >
                Sobre
              </a>
              <a 
                href="#contato" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}
                className="hover:text-[#F9DE97] transition-colors"
              >
                Contato
              </a>
            </div>

            {/* CTA Direito */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onGoToLogin}
                className="btn-pontual-primary text-xs sm:text-sm shadow-md"
              >
                <span>Acessar Sistema</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* Hero Content Grid (3 Colunas: Texto | Mockup 3D | Social Proof & Métricas) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center pt-4">
            
            {/* COLUNA 1 (Esquerda - 5 colunas): Headline & CTA Principal */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#F9DE97] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#F59242] animate-ping" />
                Portaria 671 MTE & Geofencing 100% Homologado
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
                A nova geração em controle de ponto e escalas.
              </h1>

              <p className="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed font-normal">
                A plataforma corporativa do Pontual oferece uma experiência transparente, segura e sem atritos para registro de ponto digital com GPS, distribuição de escalas em tempo real e fechamento de folha sem inconsistências.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onGoToLogin}
                  className="btn-pontual-primary text-sm px-8 py-3.5"
                >
                  <span>Começar Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('recursos')}
                  className="px-6 py-3.5 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 hover:bg-white/5 text-sm font-bold transition-all"
                >
                  Ver Funcionalidades
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-white/60 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F59242]" />
                  <span>Criptografia Ponta a Ponta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#F9DE97]" />
                  <span>Conformidade LGPD</span>
                </div>
              </div>
            </div>

            {/* COLUNA 2 (Centro - 4 colunas): Mockup 3D Realista de Smartphone com App Pontual */}
            <div className="lg:col-span-4 flex justify-center items-center py-4">
              <div className="phone-mockup-perspective">
                <div className="phone-mockup-frame">
                  <div className="phone-mockup-glare" />
                  
                  {/* Ilha dinâmica / Notch */}
                  <div className="phone-island">
                    <div className="phone-island-camera" />
                  </div>

                  {/* Tela do Aplicativo Pontual */}
                  <div className="phone-screen-content">
                    
                    {/* Top Bar do App */}
                    <div className="flex items-center justify-between text-[11px] text-white/70 font-mono mb-4 pt-1">
                      <span>{currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                        <span>5G</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Header do Colaborador no App */}
                    <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-2xl border border-white/10 mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                          alt="Avatar" 
                          className="w-8 h-8 rounded-full object-cover border border-[#F59242]"
                        />
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">Lucas Silva</div>
                          <div className="text-[10px] text-white/60">Atendimento Geral</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#9F243C]/40 text-[#F9DE97] border border-[#F9DE97]/30">
                        CLT 40h
                      </span>
                    </div>

                    {/* Relógio Digital Gigante & Data */}
                    <div className="text-center py-2">
                      <div className="text-[10px] font-mono font-bold tracking-wider text-[#F59242] uppercase">
                        Horário Oficial de Brasília
                      </div>
                      <div className="text-3xl font-black font-sans tracking-tight text-white my-0.5">
                        {currentTime.toLocaleTimeString('pt-BR')}
                      </div>
                      <div className="text-[11px] text-white/70 capitalize font-medium">
                        {currentTime.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })}
                      </div>
                    </div>

                    {/* Card de Turno de Hoje */}
                    <div className="bg-white/5 rounded-2xl p-3 border border-white/10 mb-3 text-left">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-mono uppercase text-white/50 tracking-wider">Turno de Hoje</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          punchState === 'punched' 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {punchState === 'punched' ? 'Presença Confirmada' : '08:00 - 17:00'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#F59242] shrink-0" />
                        <span className="truncate text-[11px]">Sede Matriz - Av. Paulista, 1000</span>
                      </div>
                    </div>

                    {/* Botão Interativo de Registrar Ponto */}
                    <div className="mt-1 mb-3">
                      <button
                        type="button"
                        onClick={handleSimulatePunch}
                        className={`w-full py-3 px-3 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                          punchState === 'punched'
                            ? 'bg-emerald-600 text-white shadow-emerald-900/40'
                            : punchState === 'validating'
                            ? 'bg-[#F59242] text-white animate-pulse'
                            : 'bg-gradient-to-r from-[#9F243C] via-[#b51d3b] to-[#F59242] text-white shadow-[#9F243C]/40 hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                      >
                        {punchState === 'punched' ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>PONTO BATIDO ÀS 07:58 ✓</span>
                          </>
                        ) : punchState === 'validating' ? (
                          <>
                            <span className="animate-spin text-base">📡</span>
                            <span>VALIDANDO SATÉLITE GPS...</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4" />
                            <span>REGISTRAR PONTO AGORA</span>
                          </>
                        )}
                      </button>
                      <p className="text-[9px] text-center text-white/40 mt-1 font-mono">
                        {punchState === 'punched' ? 'Clique novamente para reiniciar o teste' : 'Geolocalização e carimbo temporal criptografados'}
                      </p>
                    </div>

                    {/* Meta Semanal de Horas */}
                    <div className="bg-white/5 rounded-2xl p-2.5 border border-white/10 text-left mt-auto">
                      <div className="flex items-center justify-between text-[10px] font-bold text-white/70 mb-1">
                        <span>Carga Horária Semanal</span>
                        <span className="text-[#F9DE97] font-mono">38h / 40h (95%)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-[#9F243C] via-[#F59242] to-[#F9DE97]"
                          style={{ width: '95%' }}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA 3 (Direita - 3 colunas): Social Proof & Métricas Gigantes */}
            <div className="lg:col-span-3 text-left space-y-8 lg:pl-4">
              
              {/* Avaliação e Usuários Felizes */}
              <div className="space-y-3">
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  É hora de ter precisão e tranquilidade no controle de jornada da sua equipe. Junte-se a milhares de colaboradores e líderes.
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[#F9DE97] font-black text-sm">
                    <Star className="w-4 h-4 fill-[#F9DE97]" />
                    <span>4.9</span>
                  </div>
                  <span className="text-xs text-white/60">Avaliações positivas</span>
                  
                  {/* Avatars */}
                  <div className="flex -space-x-2">
                    <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&auto=format&fit=crop&q=80" alt="Camila" />
                    <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80" alt="Roberto" />
                    <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" alt="Beatriz" />
                  </div>
                </div>
              </div>

              {/* Métrica 1 */}
              <div className="space-y-1 border-t border-white/10 pt-6">
                <div className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight">
                  +150k
                </div>
                <div className="text-xs sm:text-sm text-white/60 font-medium">
                  Pontos registrados mensalmente via GPS
                </div>
              </div>

              {/* Métrica 2 */}
              <div className="space-y-1 border-t border-white/10 pt-6">
                <div className="text-4xl sm:text-5xl font-black text-[#F9DE97] font-sans tracking-tight">
                  +12.000
                </div>
                <div className="text-xs sm:text-sm text-white/60 font-medium">
                  Escalas e turnos gerenciados sem conflitos
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          2. SOCIAL PROOF / PARTNERS STRIP (FUNDO BRANCO CLEAN)
          ==================================================================== */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Mais de 1.500+ empresas e filiais gerenciam suas escalas e pontos com o Pontual
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-black text-slate-800 text-lg tracking-tighter">
              <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">E</span>
              Employer RH
            </div>
            <div className="flex items-center gap-2 font-black text-slate-800 text-lg tracking-tighter">
              <span className="w-7 h-7 rounded-lg bg-[#9F243C] text-white flex items-center justify-center font-bold text-xs">B</span>
              BNE Empregos
            </div>
            <div className="flex items-center gap-2 font-black text-slate-800 text-lg tracking-tighter">
              <span className="w-7 h-7 rounded-lg bg-[#F59242] text-white flex items-center justify-center font-bold text-xs">M</span>
              Banco Master
            </div>
            <div className="flex items-center gap-2 font-black text-slate-800 text-lg tracking-tighter">
              <span className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-xs">T</span>
              TechCorp Global
            </div>
            <div className="flex items-center gap-2 font-black text-slate-800 text-lg tracking-tighter">
              <span className="w-7 h-7 rounded-lg bg-[#640C1E] text-white flex items-center justify-center font-bold text-xs">I</span>
              InovaTech Soluções
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. FEATURE SPLIT SECTION ("One app. One banking." Style -> 2x2 Grid)
          ==================================================================== */}
      <section id="recursos" className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Headline & Descrição */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-10 h-1.5 bg-[#9F243C] rounded-full" />

              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Um só app.<br />
                Toda a gestão.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Nossa plataforma web e mobile oferece um ecossistema seguro e unificado para bater ponto com GPS, distribuir escalas operacionais, aprovar solicitações de folga e acompanhar indicadores de presença da sua equipe.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onGoToLogin}
                  className="btn-pontual-dark"
                >
                  <span>Conhecer Todos os Recursos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side: 2x2 Grid de Cards de Recursos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1: Ponto Digital GPS (Light) */}
              <div className="feature-card-light group">
                <div className="w-12 h-12 rounded-2xl bg-[#9F243C]/10 text-[#9F243C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    Ponto Digital com GPS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Registro em segundos com geolocalização por satélite, cálculo de jornada e 100% aderente à Portaria 671 do MTE.
                  </p>
                </div>
              </div>

              {/* Card 2: Gestão de Escalas Orbit (Dark / Highlighted) */}
              <div className="feature-card-dark group">
                <div className="w-12 h-12 rounded-2xl bg-[#F59242]/20 text-[#F9DE97] border border-[#F59242]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CalendarDays className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                    Gestão de Escalas Orbit
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#F59242] text-black font-extrabold">
                      NOVO
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Crie e publique turnos semanais ou mensais em minutos. Prevenção inteligente contra choque de horários e furos de cobertura.
                  </p>
                </div>
              </div>

              {/* Card 3: Solicitações & Trocas (Light) */}
              <div className="feature-card-light group">
                <div className="w-12 h-12 rounded-2xl bg-[#F59242]/10 text-[#F59242] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ArrowLeftRight className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    Solicitações & Trocas
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Permutas de turnos entre colaboradores e pedidos de folga com fluxo de aprovação transparente para a liderança.
                  </p>
                </div>
              </div>

              {/* Card 4: Métricas & Assiduidade (Light) */}
              <div className="feature-card-light group">
                <div className="w-12 h-12 rounded-2xl bg-[#9F243C]/10 text-[#9F243C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    Métricas & Assiduidade
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Acompanhe carga horária em tempo real, atestados com CID, faltas justificadas e banco de horas sem surpresas no fim do mês.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          4. ALTERNATING FEATURE SHOWCASE 1 (Gráficos + Ponto Instantâneo)
          ==================================================================== */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LADO ESQUERDO: Mockup com Círculo de Fundo & Widget Escuro + Cartão Sobreposto */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="showcase-curved-backdrop">
                
                {/* Círculo Curvo Suave */}
                <div className="showcase-circle-shape" />

                {/* Widget Dark: Gráfico de Horas & Custos (Inspirado no 'My costs' da foto) */}
                <div className="showcase-widget-dark">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-5">
                    <span className="font-bold text-white text-sm">Carga Horária Semanal</span>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-white/80 font-mono">
                      Semana Atual ▾
                    </span>
                  </div>

                  {/* Barras do Gráfico */}
                  <div className="flex items-end justify-between h-32 pt-4 px-2 border-b border-white/10">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-3 rounded-full bg-[#9F243C]" style={{ height: '70px' }} />
                      <span className="text-[9px] font-mono text-white/50">Seg 10</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-3 rounded-full bg-[#F59242]" style={{ height: '88px' }} />
                      <span className="text-[9px] font-mono text-white/50">Ter 11</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-3 rounded-full bg-[#F9DE97]" style={{ height: '95px' }} />
                      <span className="text-[9px] font-mono text-[#F9DE97] font-bold">Qua 12</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-3 rounded-full bg-[#9F243C]" style={{ height: '60px' }} />
                      <span className="text-[9px] font-mono text-white/50">Qui 13</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-3 rounded-full bg-[#F59242]" style={{ height: '82px' }} />
                      <span className="text-[9px] font-mono text-white/50">Sex 14</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-3 rounded-full bg-white/20" style={{ height: '30px' }} />
                      <span className="text-[9px] font-mono text-white/40">Sáb 15</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 text-[11px] text-white/60">
                    <span>Meta: 40h semanais</span>
                    <span className="text-emerald-400 font-bold">100% de Assiduidade</span>
                  </div>
                </div>

                {/* Cartão Sobreposto: Cartão Pontual Pass / Credencial Digital */}
                <div className="showcase-overlaid-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-black text-[#640C1E]">
                      PONTUAL PASS
                    </span>
                    <div className="w-5 h-5 rounded-full bg-[#640C1E]/10 flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 text-[#640C1E]" />
                    </div>
                  </div>

                  <div className="text-base font-black tracking-wider font-mono text-slate-900 mb-2">
                    •••• •••• •••• 4892
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-700">
                    <span>LUCAS SILVA</span>
                    <span>EXP 12/28</span>
                  </div>
                </div>

              </div>
            </div>

            {/* LADO DIREITO: Textos & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Simples, seguro e sem complicações.
              </span>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Valide presença e registre horas em tempo recorde.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Elimine filas em relógios mecânicos e desconfianças na operação. O colaborador registra seu turno no próprio smartphone com validação de coordenadas via satélite e biometria à prova de fraudes.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onGoToLogin}
                  className="btn-pontual-dark"
                >
                  <span>Experimentar Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          5. ALTERNATING FEATURE SHOWCASE 2 (Gestão de Escalas Orbit Invertida)
          ==================================================================== */}
      <section id="sobre" className="bg-[#F8FAFC] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LADO ESQUERDO: Textos & CTA */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Confiável, transparente e integrado.
              </span>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Assuma o controle total das escalas da sua equipe.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Nossa grade matricial proporciona visão panorâmica de turnos, folgas e plantões. Evite furos de escala, gerencie contratos CLT e prestadores PJ com precisão e mantenha todo o time conectado via chat interno em tempo real.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#9F243C] text-white flex items-center justify-center text-xs">✓</div>
                  <span>Visão Diária, Semanal e Mensal no formato Orbit</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#9F243C] text-white flex items-center justify-center text-xs">✓</div>
                  <span>Envio e aprovação instantânea de atestados com CID</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#9F243C] text-white flex items-center justify-center text-xs">✓</div>
                  <span>Acompanhamento de franquia de horas para contratos PJ</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onGoToLogin}
                  className="btn-pontual-dark"
                >
                  <span>Ver Grade Orbit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* LADO DIREITO: Mockup de Escalas / Widget Orbit */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="showcase-curved-backdrop">
                
                {/* Círculo Curvo Suave */}
                <div className="showcase-circle-shape" />

                {/* Widget Dark: Grade de Escalas Orbit */}
                <div className="showcase-widget-dark w-[340px]">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-4">
                    <span className="font-bold text-white text-sm">Escalas da Semana</span>
                    <span className="text-[10px] bg-[#9F243C]/40 text-[#F9DE97] px-2 py-0.5 rounded-full font-mono font-bold">
                      Publicada
                    </span>
                  </div>

                  {/* Lista de Turnos */}
                  <div className="space-y-2.5">
                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#F59242] text-black font-black text-xs flex items-center justify-center">
                          LS
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Lucas Silva</div>
                          <div className="text-[10px] text-white/60">08:00 - 17:00 • Presença ✓</div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                        No Posto
                      </span>
                    </div>

                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#9F243C] text-white font-black text-xs flex items-center justify-center">
                          BS
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Beatriz Santos</div>
                          <div className="text-[10px] text-white/60">09:00 - 18:00 • Suporte</div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">
                        Aguardando
                      </span>
                    </div>

                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-slate-700 text-white font-black text-xs flex items-center justify-center">
                          RM
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Rafael Mendes</div>
                          <div className="text-[10px] text-white/60">Folga Programada</div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-slate-600/30 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                        Folga
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60 font-mono">
                    <span>3 Colaboradores alocados</span>
                    <span className="text-[#F59242] font-bold">0 Conflitos</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          6. BANNER FINAL / CTA PRE-FOOTER
          ==================================================================== */}
      <section id="contato" className="bg-[#08090C] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#640C1E]/40 via-transparent to-[#F59242]/20 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9F243C] to-[#F59242] flex items-center justify-center mx-auto shadow-xl shadow-[#9F243C]/40">
            <Sparkles className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Pronto para modernizar a gestão de ponto e escalas da sua empresa?
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Acesse o Pontual agora mesmo e experimente o controle absoluto de escalas, geolocalização e relatórios em tempo real.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onGoToLogin}
              className="btn-pontual-primary px-9 py-4 text-base"
            >
              <span>Acessar o Pontual Agora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. FOOTER
          ==================================================================== */}
      <footer className="bg-[#060709] border-t border-white/10 py-10 text-white/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-base font-black text-white font-sans">Pontual</span>
            <span className="text-white/40">|</span>
            <span>Sistema Corporativo de Gestão de Escalas & Ponto Digital GPS</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a href="#inicio" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Início</a>
            <a href="#recursos" onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">Recursos</a>
            <a href="#sobre" onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Sobre</a>
            <button onClick={onGoToLogin} className="hover:text-[#F9DE97] transition-colors">Login Gestor / RH</button>
          </div>

          <div>
            © {new Date().getFullYear()} Pontual. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
};
