import Link from "next/link";
import {Search , Menu } from "lucide-react";


export default function ProfilePage() {
return (
    <main className="min-h-screen bg-black text-white p-6">

        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-emerald-400">
                VERSIN
            </h1>
            <div className="flex  gap-4">
                <Search className="w-6 h-6 cursor-pointer" />
                <Menu className="w-6 h-6 cursor-pointer" />
            </div>
        </div>






      {/* Header */}
    <div className="flex items-center gap-4">
        <img
        src="https://i.pravatar.cc/100"
        className="w-20 h-20 rounded-full"
        />

        <div>
        <h2 className="text-xl font-bold">Maria Silva</h2>
        <p className="text-zinc-400">@maria</p>
        </div>
    </div>

      {/* Bio */}
    <div className="mt-4">
        <p className="text-sm text-zinc-300">
        Criando ideias, explorando criatividade e conectando mentes 
        </p>
    </div>

      {/* Stats */}
    <div className="flex gap-6 mt-4 text-sm">
        <span><b>12</b> posts</span>
        <span><b>1.2k</b> seguidores</span>
        <span><b>180</b> seguindo</span>
    </div>

      {/* Botões */}
    <div className="flex gap-4 mt-4">
        <button className="bg-emerald-500 text-black px-6 py-2 rounded-lg font-bold">
        + Seguir
        </button>

        <button className="border border-zinc-600 px-4 py-2 rounded-lg">
        Mensagem
        </button>
    </div>

      {/*  posts */}

    <div className="grid grid-cols-3 gap-2 mt-6">
    <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80"
        alt="Post"
        className="w-full h-64 object-cover rounded-md"
        />


        <div className="bg-zinc-800 h-24"></div>
        <div className="bg-zinc-800 h-24"></div>
        <div className="bg-zinc-800 h-24"></div>
        <div className="bg-zinc-800 h-24"></div>
        <div className="bg-zinc-800 h-24"></div>
        <div className="bg-zinc-800 h-24"></div>
    </div>


    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex justify-around">
        <a href="/feed" className="text-zinc-400 font-bold">Feed</a>
        <a href="/mensagens" className="text-zinc-400 font-bold">Mensagens</a>
        <a href="/Perfil" className="text-emerald-400 font-bold">Perfil</a>
        <a href="/Quiz" className="text-zinc-400 font-bold">Quiz</a>
    </nav>

    </main>
);
}