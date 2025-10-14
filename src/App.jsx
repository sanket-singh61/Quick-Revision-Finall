import './App.css'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Heading from './components/Heading'
import IntroBox from './components/IntroBox'
import MarginLine from './components/MarginLine'
import Navbar from './components/Navbar'
import Review from './components/Review'
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
      <Review/>
      <Footer/>
    </>
  )
}

export default App
