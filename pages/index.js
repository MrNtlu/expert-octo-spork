import Head from 'next/head'
import About from '../components/Experience'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Burak Fidan</title>
        <meta name="description" content="Burak Fidan's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}