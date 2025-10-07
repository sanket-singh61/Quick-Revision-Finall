
import { Button } from './ui/button';

const IntroBox = () => {
  return (
   <section>
     <div className='Intro'>
       <div className='IntroBox'>
         <div id='IntroBox-Text'>
           <h4>Wellcome to <span>quick revision...</span></h4>
           <h3>"Your Last-Minute Weapon <span>for first-Class Result"</span> </h3>
           <p>Prepare for accedmic exam and placement in minimum time without any hassle.</p>
           <Button>Let's Go</Button>
         </div>
         <div id='IntroBox-Image'>
           <img src="/HeroImage.svg" alt="Learning Image" />
         </div>
       </div>
     </div>
   </section>
  )
}

export default IntroBox
