import React from 'react'
import './landingPage.css'
import header from './desktop/image-header.jpg'
import egg from './desktop/image-transform.jpg'
import glass from './desktop/image-stand-out.jpg'
import cherry from './desktop/image-graphic-design.jpg'
import orange from './desktop/image-photography.jpg'

export default function landingPage() {
  return (
    <>
    <div>
        <img className='header' src={header} alt='header'/>        
        <h1 className='heading2'>WE ARE CREATIVES</h1>
        <svg className='arrow' width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
        <div className='firstSection'>
            <div className='leftFirst'>
                <h1 className='leftHead'>Transform your brand</h1>
                <p className='leftPara'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <h2 className='learnMore'> Learn more</h2>
            </div>
            <img className='eggImg' src={egg} alt='egg'></img>
        </div>
        <div className='secondSection'>
            <img className='glassImg' src={glass} alt='glass'></img>
            <div className='rightSecond'>
                <h1 className='leftHead'>Stand out to the right audience</h1>
                <p className='leftPara'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we will build and extend your brand in digital places.</p>
                <h2 className='learnMore'> Learn more</h2>
            </div>
        </div>
        <div className='leftThird'>
            <h1>Graphic design</h1>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className='rightThird'>
            <h1>Photography</h1>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image. </p>
        </div>
        <div className='thirdSection'>
            <img className='cherry' src={cherry} alt='cherry'/>
            <img className='orange' src={orange} alt='orange'/>
        </div>




        <h1 className='headingText'>Sunny Side</h1>
        <nav className='navbar'>
            <div className='navItem'>About</div>
            <div className='navItem'>Services</div>
            <div className='navItem'>Projects</div>
            <div className='navItem'>Contact</div>
        </nav>
    </div>
    </>
  )
}
