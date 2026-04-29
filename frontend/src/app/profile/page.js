"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
    const [imagemAberta, setImagemAberta] = useState(null);

    const user = {
        name: "ivis souza",
        username: "@ivis",
        avatar: "https://i.pravatar.cc/100",
        bio: "criando ideias, explorando criatividades e conectando mentes",
        posts: 12,
        seguidores: "1.2k",
        seguindo: 180,
    };

    const posts = [
        { id: 1, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400" },
        { id: 2, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
        { id: 3, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400" },
    ];

    return (
        <main className="min-h-screen bg-black text-white p-6">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-emerald-400">VERSIN</h1>

            <div className="flex gap-4">
            <Search className="w-6 h-6 cursor-pointer" />
            <Menu className="w-6 h-6 cursor-pointer" />
            </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4">
            <img
            src={user.avatar}
            className="w-20 h-20 rounded-full"
            alt="Foto de perfil"
            />

            <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-zinc-400">{user.username}</p>
            </div>
        </div>

        {/* Bio */}
        <div className="mt-4">
            <p className="text-sm text-zinc-300">{user.bio}</p>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-4 text-sm">
            <span><b>{user.posts}</b> posts</span>
            <span><b>{user.seguidores}</b> seguidores</span>
            <span><b>{user.seguindo}</b> seguindo</span>
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

        {/* posts */}
        <div className="grid grid-cols-3 gap-1 mt-6">
            {posts.map((post) => (
            <button key={post.id} onClick={() => setImagemAberta(post.image)}>
                <img
                src={post.image}
                className="w-full aspect-square object-cover"
                alt="Post"
                />
            </button>
            ))}
        </div>

        {imagemAberta && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-zinc-900 p-4 rounded-xl">
                <button onClick={() => setImagemAberta(null)}>
                Fechar
                </button>

                <img
                src={imagemAberta}
                className="mt-3 w-80 rounded-lg"
                alt="Imagem aberta"
                />
            </div>
            </div>
        )}

        <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex justify-around">
            <a href="/feed" className="text-zinc-400 font-bold">Feed</a>
            <a href="/mensagens" className="text-zinc-400 font-bold">Mensagens</a>
            <a href="/profile" className="text-emerald-400 font-bold">Perfil</a>
            <a href="/Quiz" className="text-zinc-400 font-bold">Quiz</a>
        </nav>
        </main>
    );
    }