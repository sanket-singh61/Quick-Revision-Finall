
const ReviewCard = ({id, name, text, rating, img }) => {
  return (
    <div className="review-card">
       <div className="review-top">
        <img src={img} alt={name} className="review-avatar" />
        <div>
          <h4 className="review-name">{name}</h4>
          <div className="review-stars">
            {Array.from({ length: Math.min(rating, 5) }).map((_, index) => (
              <span key={index}>⭐</span>
            ))}
          </div>
        </div>
      </div>
      <p className="review-text">“{text}”</p>
    </div>
  );
};
export default ReviewCard;