import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ExploreCard = ({ title, to, Explor, Icon }) => {
  return (
    <Link to={to} className="explore-card-link">
      <div className="explore-card">
        <div className="explore-icon-wrapper">
          {Icon && <Icon className="explore-icon" />}
        </div>
        <div className="explore-content">
          <h6>{title}</h6>
          <span className="explore-btn">
            {Explor} <ArrowRight className="arrow-icon" size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ExploreCard;
