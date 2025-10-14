import './Navbar.css';
// import icon1 from '/Whatsapp.svg';
// import icon2 from '/Instagram.svg';
// import icon3 from '/Telegram.svg';
// const iconlist =[icon1,icon2,icon3,];

// const transformedIcon =(icon) =>{
//   return<img src={icon}/>
// }

const Navbar = () => {
  return (
   <header>
      <nav>

        {/* logo  */}
        {/* <div><img src="/RLogo.svg" id='LogoQuick' /></div> */}
          <img src="/QR.png" id='LogoQuick' />
        <div id='Logo-Name'>
          Quick <br/> Revision
        </div>

        {/* components */}
        <div id='Nav-Components'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Notes</a></li>
                <li><a href="">Contact Us</a></li>
              <form action="">
              <input
               id='Nav-Input'
               type="text"
               placeholder="Search you're notes..."
               // value={searchTerm}
               // onChange={handleSearchChange}
             />
             <button type="submit">Search</button>
            </form>
            </ul>
        </div>

        {/* icons */}
        {/* <div id='icons'>
          {iconlist.map(transformedIcon)}
        </div> */}

      </nav>
   </header>
  )
}

export default Navbar
