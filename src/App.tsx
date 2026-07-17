import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Collection } from './sections/Collection'
import { BrandStory } from './sections/BrandStory'
import { FragranceNotes } from './sections/FragranceNotes'
import { WhyChooseUs } from './sections/WhyChooseUs'
import { Bestseller } from './sections/Bestseller'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
import { Newsletter } from './sections/Newsletter'
import { DeveloperContact } from './sections/DeveloperContact'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#collection"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-gold text-ink px-4 py-2 text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <BrandStory />
        <FragranceNotes />
        <WhyChooseUs />
        <Bestseller />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <DeveloperContact />
    </div>
  )
}

export default App
