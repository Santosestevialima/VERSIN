import Link from "next/link";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-black text-white pb-24">
        <header className="px-6 py-6 border-b border-zinc-800">
            <h1 className="text-2xl font-bold text-emerald-400">Perfil</h1>
        </header>

        <section className="p-6 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold">
                F
                </div>

                <div>
                <h2 className="text-2xl font-bold">@fulana</h2>
                <p className="text-emerald-400 font-semibold mt-1">⚡ Vibe Tesla</p>
                </div>
            </div>

            <p className="text-zinc-300">
                Hoje @fulana está parecida com Nikola Tesla.
            </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Bio</h3>
            <p className="text-zinc-300">
                Criadora de ideias, projetos e conexões entre mentes curiosas.
            </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Destaques</h3>
            <p className="text-zinc-300">
                Aqui aparecerão destaques, republicações e projetos do usuário.
            </p>
            </div>
        </section>

        <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex justify-around">
            <Link href="/feed" className="text-zinc-400">
            Feed
            </Link>

            <Link href="/messages" className="text-zinc-400">
            Mensagens
            </Link>

            <Link href="/profile" className="text-emerald-400 font-bold">
            Perfil
            </Link>
        </nav>
        </main>
    );
    }