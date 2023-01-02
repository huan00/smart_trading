import './App.css'
import Navbar from './components/navbar/Navbar'
import { Header, Social, Wst, Features } from './containers'

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
    </div>
  )
}

export default App
