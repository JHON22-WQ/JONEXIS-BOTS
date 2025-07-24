import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignup = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) return setError(error.message)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Crear cuenta</h1>
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
          {loading ? 'Creando...' : 'Crear cuenta'}
        </button>
        <p className="text-center mt-4 text-sm">
          ¿Ya tienes cuenta? <a href="/login" className="text-blue-700">Iniciar sesión</a>
        </p>
      </form>
    </div>
  )
}
