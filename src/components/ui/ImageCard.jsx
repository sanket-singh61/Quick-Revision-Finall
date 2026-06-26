import { Link } from "react-router-dom";

const ImageCard = ({ icon, title, to }) => {
    return (
      <Link to={to} className="image-card-link">
        <div className="image-card">
           <div className="image-card-icon-wrapper">
             {icon}
           </div>
           <h4>{title}</h4>
        </div>
      </Link>
    );
};

export default ImageCard;
