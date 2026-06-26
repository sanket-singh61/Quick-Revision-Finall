import './Explore.css';
import ExploreCard from "../ui/ExploreCard";
import { 
  Code2, 
  Globe, 
  ShieldCheck, 
  Settings, 
  BrainCircuit, 
  Cloud, 
  Database, 
  Network 
} from "lucide-react";

const DATA = [
 { title: "Programming", icon: Code2, Explor: "Explore" },
 { title: "Web Development", icon: Globe, Explor: "Explore" },
 { title: "Cyber Security", icon: ShieldCheck, Explor: "Explore" },
 { title: "Operating System", icon: Settings, Explor: "Explore" },
 { title: "AI ML & DS", icon: BrainCircuit, Explor: "Explore" },
 { title: "Cloud Computing", icon: Cloud, Explor: "Explore" },
 { title: "Database", icon: Database, Explor: "Explore" },
 { title: "Networking", icon: Network, Explor: "Explore" },
];

const Explore = () => {
  return (
    <section className="explore-section">
       <div className="explore-container">
         <div className="explore-header">
           <h2>Explore Categories</h2>
           <p>Dive into various fields of computer science and find the perfect notes.</p>
         </div>
         <div className="explore-grid">
             {DATA.map((item) => (
                  <ExploreCard
                   key={item.title}
                   title={item.title}
                   Icon={item.icon}
                   Explor={item.Explor}
                   to={`/${item.title.replace(/\s+/g, '')}`} 
                  />                  
               ))}
         </div>
       </div>
    </section>
   )
}

export default Explore;
