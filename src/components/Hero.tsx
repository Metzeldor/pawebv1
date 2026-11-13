export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
          Desarrollador Frontend
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Interfaces web modernas y agentes de IA para tu negocio
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Creo sitios rápidos y bien diseñados, y automatizo tareas con
          asistentes de IA personalizados.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-400"
          >
            Hablemos
          </a>
          <a
            href="#servicios"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-slate-400"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  )
}