
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import "./IntroBox.css";

const IntroBox = () => {
  return (
   <section className="intro-section">
     <div className='intro-container'>
       <div className='intro-card'>
         <div className='intro-content'>
           <div className="badge">🚀 Your Study Companion</div>
           <h1>Welcome to <span className="highlight">Quick Revision</span></h1>
           <h2>Your Last-Minute Weapon <span className="highlight">for First-Class Results</span></h2>
           <p>Prepare for academic exams and placements in minimum time without any hassle. Get access to curated, high-quality notes.</p>
           
           <div className="intro-actions">
             <Button className="primary-btn">
               Get Started 
             </Button>
           </div>
         </div>
         <div className='intro-image-wrapper'>
           <img src="/HeroImage.svg" alt="Learning Image" className="floating-img" />
           {/* Background glow behind image */}
           <div className="glow-effect"></div>
         </div>
       </div>
     </div>
   </section>
  )
}

export default IntroBox;
