import ImageCard from "./ui/ImageCard";
import './UpdateBox.css';
import {BellDot, NotebookPen, Scroll, Send, Sticker, TicketsPlane } from "lucide-react";

const DATA =[
 {
    icon:<Send size={35} />,
    title:"Syllabus",
    link: "/syllabus"
 },
 {
    icon:<NotebookPen size={35} />,
    title:"Notes",
    link: "/notes" 
 },
{
    icon:<Scroll size={35} />,
    title:"Previous Paper",
    link: "/previous-paper"
 }, 
 {
    icon:<BellDot size={35}/>,
    title:"Exam Update",
    link: "/exam-update"
 },
 {
    icon:<Sticker size={35}/>,
    title:"Exam Result",
    link: "/exam-result"
 },
 {
    icon:<TicketsPlane size={35}/>,
    title:"Exam HallTicket",
    link: "/exam-HallTicket"
 },
]

const UpdateBox = () => {
  return (
 <section>
    <div className='UpdateBox'>
        <div id='UpdateBox-Container'>
            <div id='UpdateBox-Writen'>
               <img src="/logoRTMNU 1.svg"/>
                <h2>RTMNU || NAGPUR UNIVERSITY</h2>
                <div id="RTMNU-info">
                  <ul>
                  <li>Semester-Wise notes for CSE, AI&DS & more.</li>
                  <li>Easy access to quality study Material in one Place.</li>
                  <li>Quick Notes for last-minute prepration & revision</li>
                  <li>Created by students, for students.</li>
                  <li>Simplify learning & boost exam readiness</li>
                </ul>
                </div>
            </div>
            <div className="updateBox-ImageCard">
               <div id='UpdateBox-Card'>
                {DATA.map((item) => (
                 <ImageCard
                 icon={item.icon}
                 title={item.title}
                 link={item.link}
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
