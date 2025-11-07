import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <GraduationCap className="h-4 w-4" />
              Lecturer & Researcher
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight text-gray-900">
              Empowering minds through teaching and research
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              I teach computer science, design inclusive curricula, and explore learning with AI. Welcome to my academic home on the web.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                Contact me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#teaching" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
                View courses
                <BookOpen className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                alt="Lecturing in a classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
