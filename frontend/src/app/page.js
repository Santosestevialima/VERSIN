import HeroBackground from "./componentes/herobackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 text-center max-w-2xl px-6">
        <p className="text-emerald-400 uppercase tracking-[0.35em] text-sm md:text-base mb-5">
          ONDE AS IDEIAS ENCONTRAM QUEM ACREDITA NELAS
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          VERSIN
        </h1>

        <p className="text-zinc-300 mt-5 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Rede social para ideias futuristas, pesquisas e conexões entre mentes curiosas.
        </p>

        <div className="relative flex gap-5 justify-center mt-8">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-2xl font-bold transition shadow-lg shadow-emerald-500/30">
            Entrar
          </button>

          <button className="border-2 border-orange-400 text-orange-300 px-8 py-3 rounded-2xl font-bold hover:bg-orange-500/10 transition">
            Criar conta
          </button>
        </div>
      </div>
    </main>
  );
}