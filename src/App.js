import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './containers/header/Header'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  )
}

export default App
