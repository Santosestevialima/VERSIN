import PostCard from "../componentes/PostCard";
import Link from "next/link"


    export default function FeedPage() {
    return (
    <main className="min-h-screen bg-black text-white">


        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
            <h1 className="text-2xl font-bold text-emerald-400">VERSIN</h1>
            <div className="flex items-center gap-3">
                <input
                type="text"
                placeholder="Buscar"
                className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm"
                />
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">

                </div>

            </div>

        </header>

        <section className="p-6 space-y-6">
            
            <div className="bg-zinc-900 border-zinc-800 rounded-2x1 p-6">
                <p className="text-zinc-400 mb-3"> @maria</p>
                <h2 className="text-x1  font-bold mb-2"> primeiro post do versin</h2>
                <p className="text-zinc-300">Aqui vai aparecer o conteúdo principal do feed , os posts , as ideias e as publicações.</p>




                <PostCard />
                <PostCard />
                <PostCard />

            </div>
            
        </section>

        <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex justify-around">
            <Link href="/feed" className="text-emerald-400 font-bold">Feed</Link>
            <Link href="/mensagens" className="text-zinc-400 font-bold">Mensagens</Link>
            <Link href="/Perfil" className="text-zinc-400 font-bold">Perfil</Link>
        </nav>

    </main>
    );
}