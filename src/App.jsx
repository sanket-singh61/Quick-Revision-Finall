import './App.css'
import Explore from './components/Explore'
import Heading from './components/Heading'
import IntroBox from './components/IntroBox'
import MarginLine from './components/MarginLine'
import Navbar from './components/Navbar'
import SlideNav from './components/SlideNav'
import UpdateBox from './components/UpdateBox'

function App() {

  return (
    <>
      <Navbar/>
      <SlideNav/>
      <IntroBox/>
      <UpdateBox/>
      <MarginLine/>
      <Heading/>
      <MarginLine/>
      <Explore/>
    </>
  )
}

export default App
