import { Mail, MapPin, Globe } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! Your message has been sent.')
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-600">Reach out for collaborations, supervision, or speaking engagements.</p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600" /> alex.lecturer@university.edu</li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600" /> School of Computer Science, Room 402</li>
            <li className="flex items-center gap-3"><Globe className="h-5 w-5 text-blue-600" /> www.alexlecturer.edu</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea required rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
          </div>
          <button type="submit" className="w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">Send message</button>
          {status && <p className="text-green-700 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
