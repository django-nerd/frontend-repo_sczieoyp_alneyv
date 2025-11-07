import { FileText, Link as LinkIcon, Calendar } from 'lucide-react'

const publications = [
  {
    year: '2025',
    title: 'Transparent AI Feedback in Higher Education',
    venue: 'CHI 2025',
    authors: 'A. Lecturer, J. Lee, P. Patel',
    link: '#'
  },
  {
    year: '2024',
    title: 'Designing for Inclusivity in Intelligent Tutoring Systems',
    venue: 'LAK 2024',
    authors: 'A. Lecturer, M. Santos',
    link: '#'
  },
  {
    year: '2023',
    title: 'A Toolkit for Accessible Prototyping',
    venue: 'UIST 2023',
    authors: 'A. Lecturer, P. Patel',
    link: '#'
  },
]

export default function Publications() {
  return (
    <section id="publications" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2"><FileText className="h-6 w-6 text-blue-600" /> Publications</h2>
          <p className="mt-2 text-gray-600">Selected peer-reviewed works.</p>
        </div>
      </div>

      <ol className="space-y-4">
        {publications.map((pub) => (
          <li key={pub.title} className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {pub.year}</span>
              <span>•</span>
              <span>{pub.venue}</span>
            </div>
            <h3 className="mt-1 font-semibold text-gray-900">{pub.title}</h3>
            <p className="text-gray-600 text-sm">{pub.authors}</p>
            {pub.link && (
              <a href={pub.link} className="mt-2 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 text-sm font-medium">
                <LinkIcon className="h-4 w-4" /> Link
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
