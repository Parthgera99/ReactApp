import React from 'react'
import './landing2.css'
import header from './desktop/image-header.jpg'
import egg from './desktop/image-transform.jpg'
import glass from './desktop/image-stand-out.jpg'
import cherry from './desktop/image-graphic-design.jpg'
import orange from './desktop/image-photography.jpg'

export default function landing2() {
  return (
    <>
    <img className='header' src={header} alt='header'/>
    <div className='firstSection'>
        <div className='leftFirst'></div>
        <img className='egg' src={egg} alt='egg'/>
    </div>
    <div className='secondSection'>
        <img className='glass' src={glass} alt='glass'/>
        <div className='rightSecond'> </div>
    </div>
    <div className='thirdSection'>
        <img className='cherry' src={cherry} alt='cherry'/>
        <img className='orange' src={orange} alt='orange'/>
    </div>
    <div className='textDiv'>
        <div className='leftThird graphic'>
            <h1 className='headings ' >Graphic design</h1>
            <p className='para'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.</p>
        </div>
        <div className='rightThird photo'>
            <h1 className='headings '>Photography</h1>
            <p className='para'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image. </p>
        </div>
    </div>
    <div className=' fourthSection'>
        <div className=' Testimonials firstTestimonial'></div>
        <div className=' Testimonials SecondTestimonial'></div>
        <div className=' Testimonials thirdTestimonial'></div>
    </div>

    </>
  )
}
