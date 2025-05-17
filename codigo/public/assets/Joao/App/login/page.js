'use client'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Acesse com GitHub</h1>
        <button
          onClick={() => signIn('github')}
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Entrar com GitHub
        </button>
      </div>
    </main>
  )
}