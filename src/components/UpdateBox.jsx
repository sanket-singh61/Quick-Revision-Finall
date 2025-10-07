import ImageCard from "./ui/ImageCard";

const DATA =[
 {
    icon:"/vite.svg",
    title:"Syllabus",
 },
 {
    icon:"/vite.svg",
    title:"Notes",
 },
{
    icon:"/vite.svg",
    title:"Previous Paper",
 }, 
 {
    icon:"/vite.svg",
    title:"EXam Update",
 },
 {
    icon:"/vite.svg",
    title:"Exam Result",
 },
 {
    icon:"/vite.svg",
    title:"Exam HallTicket",
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
            <div id='UpdateBox-Card'>
                {DATA.map((item) => (
                 <ImageCard
                 icon={item.icon}
                 title={item.title}
                 />
             ))}
            </div>
        </div>
     </div>
   </section>
  )
}

export default UpdateBox
