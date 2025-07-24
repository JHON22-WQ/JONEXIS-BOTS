import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return setError(error.message)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h1>
        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Correo"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-700 text-white py-2 w-full rounded hover:bg-blue-800 transition">
          Entrar
        </button>
        <p className="text-center mt-4 text-sm">
          ¿No tienes cuenta? <a href="/signup" className="text-blue-700">Crear una cuenta</a>
        </p>
      </form>
    </div>
  )
}
