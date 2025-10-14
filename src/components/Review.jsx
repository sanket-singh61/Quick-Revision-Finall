import ReviewCard from "./ui/ReviewCard";
import "./Review.css";
  const reviews = [
    {
      name: "Yash Shahakar",
      text: "These notes are a game changer! Easy to access and super clean layout.",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Shreya Lambat",
      text: "I love how organized everything is. This site makes studying simple.",
      rating: 4,
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Smit Bhosale",
      text: "Perfect platform for quick revision before exams. Highly recommended!",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Ankit Dahake",
      text: "Very useful website with neat notes. I use it every day.",
      rating: 3,
      img: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "Sanket Baghel",
      text: "Very useful website with neat notes. I use it every day.",
      rating: 3,
      img: "https://i.pravatar.cc/100?img=4",
    },
  ];
  const Review = () => {
  return (
    <section className="review-section">
      <h2 className="review-heading">What Students Say !</h2>
      {/* <p className="review-subheading">Thousands of learners trust us 💬</p> */}

      <div className="review-grid">
        {reviews.map((item) => (
          <ReviewCard  
          name = {item.name}
          text = {item.text}
          rating = {item.rating}
          img = {item.img} 
          />
        ))}
      </div>
    </section>
  );
}
export default Review;