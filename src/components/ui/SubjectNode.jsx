import { Link } from "react-router-dom";

const SubjectNode = ({
  branch,
  year,
  semester,
  subjectName,
  subjectPath,
}) => {
  return (
    <Link
      to={`/notes/${branch}/${encodeURIComponent(year)}/${encodeURIComponent(semester)}/${subjectPath}`}
      className="subject-node"
    >
      {subjectName}
    </Link>
  );
};

export default SubjectNode;
