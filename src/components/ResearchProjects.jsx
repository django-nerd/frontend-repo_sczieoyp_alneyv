import { FlaskConical, GitBranch, Clock } from 'lucide-react'

const projects = [
  {
    title: 'Inclusive Intelligent Tutoring Systems',
    status: 'Active',
    duration: '2024–2026',
    summary: 'Designing AI-driven tutoring that adapts to diverse learner needs with transparency and fairness.',
    repo: '#'
  },
  {
    title: 'Learning Analytics for Feedback',
    status: 'Active',
    duration: '2023–2025',
    summary: 'Leveraging clickstream and assessment data to generate formative feedback for students and instructors.',
    repo: '#'
  },
  {
    title: 'Accessible Prototyping Toolkit',
    status: 'Completed',
    duration: '2022–2023',
    summary: 'A rapid prototyping kit and guidelines for building accessible interfaces in the classroom.',
    repo: '#'
  },
]

export default function ResearchProjects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2"><FlaskConical className="h-6 w-6 text-blue-600" /> Research Projects</h2>
            <p className="mt-2 text-gray-600">Ongoing and recent projects from the lab.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1"><GitBranch className="h-4 w-4" /> {p.status}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {p.duration}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.summary}</p>
                <a href={p.repo} className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">Learn more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
