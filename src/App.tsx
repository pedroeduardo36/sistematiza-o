import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Infos } from './components/infos'
import { Services } from './components/Services'

export function App() {


  return (
    <>  
      <Header />
      <About />
      <Services />
      <Infos />
      <Footer />
    </>
  )
}

