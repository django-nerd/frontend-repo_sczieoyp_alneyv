import { Users, GraduationCap, Award, Mail } from 'lucide-react'

const members = [
  {
    name: 'Dr. Alex',
    role: 'Principal Investigator',
    email: 'alex.lecturer@university.edu',
    focus: 'AI in Education, HCI',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Jamie Lee',
    role: 'PhD Candidate',
    email: 'jamie.lee@university.edu',
    focus: 'Learning Analytics',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Priya Patel',
    role: 'MSc Researcher',
    email: 'priya.patel@university.edu',
    focus: 'Accessible Interfaces',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Miguel Santos',
    role: 'Undergraduate RA',
    email: 'miguel.santos@university.edu',
    focus: 'Prototyping & UX',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop'
  },
]

export default function ResearchTeam() {
  return (
    <section id="team" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2"><Users className="h-6 w-6 text-blue-600" /> Research Team</h2>
          <p className="mt-2 text-gray-600">We are an interdisciplinary group exploring human-centered AI for learning.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((m) => (
          <div key={m.email} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="aspect-square w-full bg-gray-100">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1"><GraduationCap className="h-4 w-4" /> {m.role}</p>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1"><Award className="h-4 w-4" /> {m.focus}</p>
              <a href={`mailto:${m.email}`} className="mt-3 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 text-sm font-medium">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
