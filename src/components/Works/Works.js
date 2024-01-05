import React from 'react';
import './Works.css'
import Portfolio1 from '../../Assets/portfolio-1.png';
import Portfolio2 from '../../Assets/portfolio-2.png';
import Portfolio3 from '../../Assets/portfolio-3.png';
import Portfolio4 from '../../Assets/portfolio-4.png';
import Portfolio5 from '../../Assets/portfolio-5.png';
import Portfolio6 from '../../Assets/portfolio-6.png';

function Works() {
  return (
    <section id='works'>
        <h2 className="workTitle">My Portfolio</h2>
        <span className="workDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae voluptates voluptatibus quos explicabo dolores.</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
