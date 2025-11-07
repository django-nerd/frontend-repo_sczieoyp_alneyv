export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold text-gray-900">About</h2>
          <p className="mt-2 text-gray-600">Short biography and research interests</p>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
          <p>
            I am a lecturer in Computer Science with interests in human-computer interaction, AI in education, and accessible design. I am passionate about creating engaging learning experiences and mentoring the next generation of technologists.
          </p>
          <p>
            My research examines how intelligent systems can support inclusive teaching practices. I collaborate with interdisciplinary teams and publish in leading venues.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            <li className="p-3 rounded-md bg-gray-50 border border-gray-200">PhD, Computer Science</li>
            <li className="p-3 rounded-md bg-gray-50 border border-gray-200">Curriculum Design & Assessment</li>
            <li className="p-3 rounded-md bg-gray-50 border border-gray-200">HCI & Learning Technologies</li>
            <li className="p-3 rounded-md bg-gray-50 border border-gray-200">Accessible & Inclusive Pedagogy</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
