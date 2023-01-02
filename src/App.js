import './App.css'
import { Navbar, Banner } from './components'
import {
  Header,
  Social,
  Wst,
  Features,
  Demo,
  Blogs,
  Footer
} from './containers'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Social />
      <Wst />
      <Features />
      <Demo />
      <Banner />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
