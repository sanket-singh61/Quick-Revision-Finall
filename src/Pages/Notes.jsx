
import { useParams, useNavigate } from "react-router-dom";
import SubjectNode from "../components/ui/SubjectNode";
import notesData from "../components/ui/NotesData";
import "./Notes.css";

export default function NotesFlow() {
  const { branch } = useParams();
  const navigate = useNavigate();

  // 🔥 If no branch → Show branch selection
  if (!branch) {
    return (
      <div className="app-bg">
        <h1 className="title" style={{color:"#521f0f"}}>Select Your Branch</h1>

        <div className="Branch-container">
          {Object.keys(notesData).map((b) => (
            <div
              key={b}
              className="Branch-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/notes/${b}`)}
            >
              {b.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const branchNotes = notesData[branch];

  if (!branchNotes) {
    return <h2 style={{ padding: 40 }}>Branch not found</h2>;
  }

  return (
    <div className="app-bg">
      <h1 className="title">{branch} Notes</h1>

      <div className="flow-container">
        {Object.entries(branchNotes).map(([year, semesters]) => (
          <div key={year} className="year-group">
            <div className="year-circle">{year}</div>
             <div className="tilt-line">
               <div className="tilt-line-1" />
                 <div className="tilt-line-2" />
              </div>


            <div className="semester-row">
              {Object.entries(semesters).map(([semester, subjects]) => (
                <div key={semester} className="semester-group">
                  <div className="semester-label">{semester}</div>

                  <div className="subjects">
                    {subjects.map((subject) => (
                      <SubjectNode
                        key={subject.path}
                        branch={branch}
                        year={year}
                        semester={semester}
                        subjectName={subject.name}
                        subjectPath={subject.path}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
