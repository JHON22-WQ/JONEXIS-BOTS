import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [botName, setBotName] = useState('')
  const [instructions, setInstructions] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')

  // Proteger ruta
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) {
        setUser(data.user)
      } else {
        router.push('/login')
      }
    }
    getUser()
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Aquí iría la lógica de entrenamiento real con OpenAI
    setPreview(`🤖 Bot "${botName}" entrenado con éxito y listo para responder.`)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a tu panel, {user?.email}</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label className="block mb-1 font-medium">Nombre del bot</label>
          <input
            type="text"
            placeholder="Mi primer bot"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Instrucciones (¿cómo debe responder?)</label>
          <textarea
            placeholder="Este bot debe responder como un asesor profesional..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subir archivo (PDF o TXT)</label>
          <input
            type="file"
            accept=".pdf,.txt"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Entrenar bot
        </button>
      </form>

      {preview && (
        <div className="mt-10 p-4 bg-green-100 border border-green-300 rounded">
          <strong>✅ Resultado:</strong> <br />
          {preview}
        </div>
      )}
    </div>
  )
}
