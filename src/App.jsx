import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ResearchTeam from './components/ResearchTeam'
import ResearchProjects from './components/ResearchProjects'
import Publications from './components/Publications'
import Teaching from './components/Teaching'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchTeam />
        <ResearchProjects />
        <Publications />
        <Teaching />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Dr. Alex Lecturer. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  )
}

export default App
