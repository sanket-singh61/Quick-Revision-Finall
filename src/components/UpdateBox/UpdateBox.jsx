import ImageCard from "../ui/ImageCard";
import './UpdateBox.css';
import { BellDot, NotebookPen, Scroll, Send, Sticker, TicketsPlane, CheckCircle2 } from "lucide-react";

const DATA =[
 { icon:<Send size={32} />, title:"Syllabus" },
 { icon:<NotebookPen size={32} />, title:"Notes" },
 { icon:<Scroll size={32} />, title:"Previous Paper" }, 
 { icon:<BellDot size={32} />, title:"Exam Update" },
 { icon:<Sticker size={32} />, title:"Exam Result" },
 { icon:<TicketsPlane size={32} />, title:"Exam HallTicket" },
]

const UpdateBox = () => {
  return (
   <section className="update-section">
      <div className='update-container'>
          <div className='update-content'>
              <div className='update-info'>
                 <img src="/logoRTMNU 1.svg" alt="RTMNU Logo" className="university-logo" />
                 <h2>RTMNU || NAGPUR UNIVERSITY</h2>
                 <div className="info-list-container">
                   <ul className="info-list">
                     <li><CheckCircle2 size={20} className="check-icon" /> Semester-Wise notes for CSE, AI&DS & more.</li>
                     <li><CheckCircle2 size={20} className="check-icon" /> Easy access to quality study material in one place.</li>
                     <li><CheckCircle2 size={20} className="check-icon" /> Quick Notes for last-minute preparation.</li>
                     <li><CheckCircle2 size={20} className="check-icon" /> Created by students, for students.</li>
                     <li><CheckCircle2 size={20} className="check-icon" /> Simplify learning & boost exam readiness.</li>
                   </ul>
                 </div>
              </div>
              <div className="update-cards-wrapper">
                 <div className='update-cards-grid'>
                  {DATA.map((item) => (
                   <ImageCard
                     key={item.title}
                     icon={item.icon}
                     title={item.title}
                     to={`/${item.title.replace(/\s+/g, '')}`} 
                   />
                  ))}
                 </div>
              </div>
          </div>
       </div>
   </section>
  )
}

export default UpdateBox;
