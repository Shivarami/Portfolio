import React from 'react';
import './Skills.css'
import UIDesign from '../../Assets/ui-design.png'
import WebDesign from '../../Assets/website-design.png'
import AppDesign from '../../Assets/app-design.png'

function Skills() {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'> I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. i have a good understading of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo vitae maiores dolorem, voluptatum quos amet.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, pariatur.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vitae!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
