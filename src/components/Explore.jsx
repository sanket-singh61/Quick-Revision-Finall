import ExploreCard from "./ui/exploreCard";
const DATA =[
 {
    title:"Programming",
 },
 {
    title:"Web Development",
 },
 {
    title:"Database",
 },
 {
    title:"Operating System",
 },
 {
    title:"AI ML & DS",
 },
 {
    title:"Cloud Computing",
 },
 {
    title:"Cyber Security",
 },
 {
    title:"Networking",
 },

 
]
const Explore = () => {
  return (
    <section>
       <div className="explore-container">
         <div className="explore">
             {DATA.map((item) => (
                  <ExploreCard
                   title={item.title} 
                  />                  
               ))}
         </div>
       </div>
    </section>
   )
}

export default Explore
