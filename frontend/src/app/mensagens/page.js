import Link from "next/link";

    export default function MensagensPage() {
    return (
        <main className="min-h-screen bg-black text-white pb-24">
        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
            <h1 className="text-2xl font-bold text-emerald-400">Mensagens</h1>

            <input
            type="text"
            placeholder="Pesquisar"
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm"
            />
        </header>

        <section className="p-6 space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <h2 className="font-bold">@maria</h2>
            <p className="text-zinc-400">Curtiu uma ideia sua • 7 min</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <h2 className="font-bold">@lucas</h2>
            <p className="text-zinc-400">Enviou uma mensagem • 13 min</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <h2 className="font-bold">@ana</h2>
            <p className="text-zinc-400">Compartilhou um protótipo • 35 min</p>
            </div>
        </section>

        <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex justify-around">
            <Link href="/feed" className="text-zinc-400">
            Feed
            </Link>

            <Link href="/messages" className="text-emerald-400 font-bold">
            Mensagens
            </Link>

            <Link href="/profile" className="text-zinc-400">
            Perfil
            </Link>
        </nav>
        </main>
    );
    }