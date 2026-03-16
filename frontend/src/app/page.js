import { Lightbulb , Rocket , Brain  } from "lucide-react";
import HeroBackground from "./componentes/herobackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <HeroBackground />

      <div className="absolute inset-0 -z-10 overflow-hidden" >
        <div className="absolute inset-0 blur-2xl"
        style={{
          background:`
            radial-gradient(circle at 18% 30%, rgba(34 , 197 , 94,0.35), transparent 28%),
            radial-gradient(circle at 82% 28%, rgba(34 , 197,94,0.22), transparent 22%),
            radial-gradient(circle at 30% 78%, rgba(249,115,22,0.28), transparent 26%),
            radial-gradient(circle at 70% 78%, rgba(168,85,247,0.16), transparent 20%),
            linear-gradient(to bottom, #020202, #050505, #080808)
            `,
        }}
        

        />
        <div className="absolute inset-0 bg-black/65"/>

      </div>

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


        <section className="grid grid-cols-1 md:grid-cols-3 gap-8  text-center mt-20 max-w-4xl mx-auto ">
          <div className = "bg-black/30 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-xl">
            <Lightbulb size={42} className="mx-auto text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"/>
            <h3 className="font-bold mt-2">Comapartilhe ideias</h3>
            <p className="text-zinc-400 mt-2">
              Publique pensamentos e projetos .
            </p>
          </div>


          <div className = "bg-black/30 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-xl">
            <Rocket size={42} className="mx-auto text-orange-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]"/>
            <h3 className="font-bold mt-2">Colabore</h3>
            <p className="text-zinc-400 text-sm"> 
              Construa projetos com outras pessoas.
            </p>
            </div>

            
          <div  className = "bg-black/30 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-xl">
            <Brain size={42} className="mx-auto text-purple-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"/>
            <h3 className="font-bold mt-2"> Descubra</h3>
            <p className="text-zinc-400 text-sm">
              Encontre novas ideias e pesquisas.
            </p>
          </div>

        </section>



      </div>
    </main>
  );
}