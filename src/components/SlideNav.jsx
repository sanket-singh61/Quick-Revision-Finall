import React from 'react'
import { Link , useParams} from 'react-router-dom';

const SlideNav = () => {
  const { branch, year, semester } = useParams();
  return (
    <section>
      <div className='slide'>
        <div className='slideNav'>
              <ul>
                <li><a href=""></a>HTML</li>
                <li><a href=""></a>CSS</li>
                <li><a href=""></a>Java Script</li>
                <li><a href=""></a>C</li>
                <li><a href=""></a>C++</li>
                <li><a href=""></a>Java</li>
                <li><a href=""></a>Python</li>
                <li><a href=""></a>IOT</li>
                <li><a href=""></a>CAO</li>
                <li><Link to={`/notes/AIDS/3year/5th/machinelearning`}>Machine Learning</Link></li>
                <li><Link to={`/notes/${branch}/${year}/${semester}/datamining`}>Data Mining</Link></li>
                <li><a href=""></a>Data Science</li>
                <li><a href=""></a>Operating System</li>
                <li><a href=""></a>DCFM</li>
                <li><a href=""></a>SQL</li>
                <li><a href=""></a>MongoDB</li>
            </ul>
        </div>
         <div className="Slide-line"></div>
      </div>
    </section>
  )
}

export default SlideNav;
