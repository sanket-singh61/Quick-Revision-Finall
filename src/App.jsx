// import { Routes, Route } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Explore from './components/Explore/Explore'
import Footer from './components/Footer'
import Heading from './components/Heading'
import IntroBox from './components/IntroBox'
import MarginLine from './components/MarginLine'
import Navbar from './components/Navbar'
import Review from './components/Review'
import SlideNav from './components/SlideNav.jsx'
import UpdateBox from './components/UpdateBox/UpdateBox'
//Pages
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Notes from './Pages/Notes.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Programming from './components/Explore/Programming.jsx';
import DataMiningNotes from './components/SubjectNotes/DataMiningNotes.jsx';
import FlipbookWithSidebar from "./Pages/FlipbookWithSidebar.jsx";
import MachineLearningNotes from "./components/SubjectNotes/MachineLearningNotes.jsx";
 function App() {
  return ( 
    <Routes>
       <Route 
         path="/" 
         element={
          <>
            <Home />
            <Navbar />
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
          } 
       /> 

      {/* Home Page */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home/>
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
        }
      />

      {/* About Page */}
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <SlideNav />
            <About />
            <Footer />
          </>
        }
      />
      {/* Contact Page */}
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <SlideNav />
            <Contact />
            <Footer />
          </>
        }
      />
      {/* Explore all component path */}
      <Route
          path="/Programming"
          element={
            <>
              <Navbar />
              <Programming/>
              <Footer />
            </>
          }
        />
        {/* Notes Page */}
        <Route
         path="/notes"
           element={ 
             <> 
               <Navbar /> 
               <SlideNav /> 
               <Notes /> 
               <Footer /> 
              </> 
            }
          />
        <Route
         path="/notes/:branch"
            element={
              <>
                <Navbar />
                <SlideNav />
                <Notes />
                <Footer />
              </>
           }
        />
        <Route
          path="/notes/:branch/:year/:semester/:subjectName"
          element={
            <>
              <Navbar />
              <SlideNav />
              <FlipbookWithSidebar />
              <Footer />
            </>
          }
        />
        
        {/* Login Page */}
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />

    </Routes>
  )
}

export default App;
{/* <Navbar/>
      <SlideNav/>
      <IntroBox/>
      <UpdateBox/>
      <MarginLine/>
      <Heading/>
      <MarginLine/>
      <Explore/>
      <Review/>
      <Footer/> */}