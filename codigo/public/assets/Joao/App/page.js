'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function LandingPage() {
  const { data: session } = useSession()

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="w-full px-6 py-4 flex justify-between items-center bg-gray-100 shadow-md">
        <h1 className="text-2xl font-bold text-blue-700">Pull Request Generator</h1>
        {session ? (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Sair
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        )}
      </header>

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Automatize suas descrições de Pull Requests
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Gere descrições profissionais com base nas alterações entre branches. Conecte-se com o GitHub e deixe a IA fazer o trabalho!
        </p>
        <Link
          href="/dashboard"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition-shadow shadow-md"
        >
          Ir para Dashboard
        </Link>
      </section>

      <footer className="text-center text-sm text-gray-400 py-4 border-t">
        © {new Date().getFullYear()} Pull Request Generator. Todos os direitos reservados.
      </footer>
    </main>
  )
}