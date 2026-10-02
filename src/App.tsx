import Header from './components/Header'
import Hero from './components/Hero'
import Formats from './components/Formats'
import TopPerformers from './components/TopPerformers'
import Languages from './components/Languages'
import Create from './components/Create'
import Integrity from './components/Integrity'
import AIStages from './components/AIStages'
import Roles from './components/Roles'
import Why from './components/Why'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Formats />
        <TopPerformers />
        <Languages />
        <Create />
        <Integrity />
        <AIStages />
        <Roles />
        <Why />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
