// import { useState, useMemo } from "react";
// import FlipbookNotes from "../components/ui/FlipbookNotes";
// import "./FlipbookWithSidebar.css";
// import { List } from "lucide-react";

// const FlipbookWithSidebar = ({ subject }) => {
//   const [selectedTopic, setSelectedTopic] = useState(subject.topics[0]);
//   const [isExpand, setIsExpand] = useState(true);

//   const toggleExpand = () => setIsExpand(!isExpand);

//   // ✅ FIX: only send valid pages (remove undefined)
//   const currentPages = useMemo(() => {
//     const pages = subject.notes[selectedTopic] || [];
//     return Array.isArray(pages) ? pages : [];
//   }, [selectedTopic, subject.notes]);

//   return (
//     <div className="flipbook-layout">
      
//       {/* Sidebar */}
//       <div className={`sidebar ${isExpand ? "open" : "close"}`}>
//         <div className="sidebar-main">
//           <button className="toggle-btn" onClick={toggleExpand}>
//             <div className={`arrow ${isExpand ? "Right" : "left"}`}>
//               <List />
//             </div>
//           </button>
//         </div>

//         <h2 className="sidebar-title">{subject.title}</h2>

//         <ul className="sidebar-list">
//           {subject.topics.map((topic, index) => (
//             <li
//               key={index}
//               className={`sidebar-item ${
//                 selectedTopic === topic ? "active-topic" : ""
//               }`}
//               onClick={() => setSelectedTopic(topic)}
//             >
//               {topic}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Flipbook viewer */}
//       <div className="flipbook-viewer">
//         {currentPages.length > 0 ? (
//           <FlipbookNotes title={selectedTopic} pages={currentPages} />
//         ) : (
//           <div className="no-pages-message">
//             <h2>Not available yet!</h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FlipbookWithSidebar;




// import { useParams } from "react-router-dom";
// import { useState, useMemo } from "react";
// import FlipbookNotes from "../components/ui/FlipbookNotes";
// import "./FlipbookWithSidebar.css";
// import { List } from "lucide-react";
// import subjectMap from "../components/ui/subjectMap";

// const FlipbookWithSidebar = () => {
//   const { subjectName } = useParams();

//   const subject = subjectMap[subjectName];

//   const [selectedTopic, setSelectedTopic] = useState(subject?.topics?.[0] || "");
//   const [isExpand, setIsExpand] = useState(true);

//   const toggleExpand = () => setIsExpand(!isExpand);

//   const currentPages = useMemo(() => {
//     const pages = subject?.notes?.[selectedTopic] || [];
//     return Array.isArray(pages) ? pages : [];
//   }, [selectedTopic, subject?.notes]);

//   if (!subject) {
//     return <h2 style={{ padding: 40 }}>Notes not found</h2>;
//   }

//   return (
//     <div className="flipbook-layout">
//       {/* Sidebar */}
//       <div className={`sidebar ${isExpand ? "open" : "close"}`}>
//         <div className="sidebar-main">
//           <button className="toggle-btn" onClick={toggleExpand}>
//             <List />
//           </button>
//         </div>

//         <h2 className="sidebar-title">{subject.title}</h2>

//         <ul className="sidebar-list">
//           {subject.topics.map((topic, index) => (
//             <li
//               key={index}
//               className={`sidebar-item ${
//                 selectedTopic === topic ? "active-topic" : ""
//               }`}
//               onClick={() => setSelectedTopic(topic)}
//             >
//               {topic}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Flipbook */}
//       <div className="flipbook-viewer">
//         {currentPages.length > 0 ? (
//           <FlipbookNotes title={selectedTopic} pages={currentPages} />
//         ) : (
//           <div className="no-pages-message">
//             <h2>Not available yet!</h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FlipbookWithSidebar;

import { useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import FlipbookNotes from "../components/ui/FlipbookNotes";
import subjectMap from "../components/ui/subjectMap";
import "./FlipbookWithSidebar.css";
import { List } from "lucide-react";

const FlipbookWithSidebar = () => {
  const { branch, year, semester, subjectName } = useParams();

  const subject = subjectMap[subjectName];

  const [selectedTopic, setSelectedTopic] = useState("");
  const [isExpand, setIsExpand] = useState(true);

  // ✅ Set first topic safely when subject loads
  useEffect(() => {
    if (subject?.topics?.length > 0) {
      setSelectedTopic(subject.topics[0]);
    }
  }, [subject]);

  const toggleExpand = () => setIsExpand(!isExpand);

  const currentPages = useMemo(() => {
    if (!subject || !selectedTopic) return [];
    const pages = subject.notes?.[selectedTopic] || [];
    return Array.isArray(pages) ? pages : [];
  }, [selectedTopic, subject]);

  // ✅ Safety check BEFORE rendering anything
  if (!subject) {
    return <h2 style={{ padding: 40 }}>Subject not found</h2>;
  }

  return (


    <div className="flipbook-layout">
      {/* Sidebar */}
      <div className={`sidebar ${isExpand ? "open" : "close"}`}>
        <div className="sidebar-main">
          <button className="toggle-btn" onClick={toggleExpand}>
            <div className={`arrow ${isExpand ? "Right" : "left"}`}>
               <List />
          </div>
          </button>
        </div>

        <h2 className="sidebar-title">
          {branch?.toUpperCase()} - {year} - {semester} - {subject.title}
        </h2>

        <ul className="sidebar-list">
          {subject.topics?.map((topic, index) => (
            <li
              key={index}
              className={`sidebar-item ${
                selectedTopic === topic ? "active-topic" : ""
              }`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Flipbook */}
      <div className="flipbook-viewer">
        {currentPages.length > 0 ? (
          <FlipbookNotes title={selectedTopic} pages={currentPages} />
        ) : (
          <div className="no-pages-message">
            <h2>Not available yet!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipbookWithSidebar;
