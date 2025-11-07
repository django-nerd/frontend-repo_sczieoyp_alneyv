import { Calendar, Link as LinkIcon } from 'lucide-react'

const courses = [
  {
    code: 'CS101',
    title: 'Introduction to Computer Science',
    term: 'Fall 2025',
    link: '#',
    summary: 'Foundations of computing, Python basics, problem solving.'
  },
  {
    code: 'HCI302',
    title: 'Human-Computer Interaction',
    term: 'Spring 2026',
    link: '#',
    summary: 'User research, prototyping, usability testing, and design.'
  },
  {
    code: 'AIED410',
    title: 'AI in Education',
    term: 'Spring 2026',
    link: '#',
    summary: 'Intelligent tutoring systems, ethics, and learning analytics.'
  },
]

export default function Teaching() {
  return (
    <section id="teaching" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Teaching</h2>
            <p className="mt-2 text-gray-600">Courses I teach and recent offerings</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article key={c.code} className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{c.code}: {c.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-600"><Calendar className="h-4 w-4" />{c.term}</span>
                </div>
                <p className="mt-3 text-gray-600">{c.summary}</p>
                <a href={c.link} className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  Syllabus <LinkIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
