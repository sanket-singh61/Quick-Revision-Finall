const ImageCard =({icon,title,link}) => {
    return(
      <div className="ImageCard">
        {/* <img src={icon} alt={title}/>
        <h4>{title}</h4> */}
         <div className="icon">{icon}</div>   
         <h4>{title}</h4>
         <link to={link} ></link>
      </div>
    );

};

export default ImageCard;
