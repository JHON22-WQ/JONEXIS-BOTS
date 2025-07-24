import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
        <div className="text-xl font-bold text-blue-700">JONEXIS Bots</div>
        <div className="space-x-6">
          <Link href="#features" className="hover:text-blue-700">Funcionalidades</Link>
          <Link href="#pricing" className="hover:text-blue-700">Precios</Link>
          <Link href="/login" className="text-blue-700 font-medium">Iniciar sesión</Link>
          <Link href="/signup" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">Crear cuenta</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-20 bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-4xl font-bold mb-4">
          Crea y entrena tu propio <span className="text-blue-700">Bot con IA</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Súbele archivos, personaliza las respuestas, y úsalo en Web, WhatsApp, Telegram o Instagram.
        </p>
        <Link href="/signup" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition">
          Empieza ahora
        </Link>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">¿Qué puedes hacer?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">Entrena con tus propios datos</h3>
            <p className="text-gray-600">Sube PDFs, textos o URLs. Tu bot aprenderá de eso.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Respuestas inteligentes</h3>
            <p className="text-gray-600">Usamos GPT-4 para generar respuestas precisas y naturales.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Actívalo donde quieras</h3>
            <p className="text-gray-600">Obtén tu bot en Web, WhatsApp, Telegram o Instagram.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Planes disponibles</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="border rounded-lg p-8 bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">Plan Básico</h3>
            <p className="text-gray-500 mb-4">$10 / mes</p>
            <ul className="text-gray-600 mb-6">
              <li>1 bot entrenado</li>
              <li>200 respuestas por mes</li>
              <li>Soporte web</li>
            </ul>
            <Link href="/signup" className="block bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
              Elegir plan
            </Link>
          </div>
          <div className="border rounded-lg p-8 bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">Plan Avanzado</h3>
            <p className="text-gray-500 mb-4">$29 / mes</p>
            <ul className="text-gray-600 mb-6">
              <li>Hasta 5 bots</li>
              <li>2,000 respuestas por mes</li>
              <li>Integración WhatsApp y Telegram</li>
            </ul>
            <Link href="/signup" className="block bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
              Elegir plan
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} JONEXIS Bots. Todos los derechos reservados.
      </footer>
    </div>
  )
}
