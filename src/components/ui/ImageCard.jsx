const ImageCard =({icon,title,}) => {
    return(
      <div className="ImageCard">
        <img src={icon} alt={title}/>
        <h4>{title}</h4>
        {/* <p>{subtitle}</p> */}
      </div>
    );

};

export default ImageCard;
