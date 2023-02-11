import React from 'react'
import './Template.css'
import colton from './image-colton.jpg'
import irene from './image-irene.jpg'
import anne from './image-anne.jpg'


export default function template() {
  return (
    <>
    <div>
        <h1 className='heading1'> 10,000+ of our</h1>
        <h1 className='heading2 '> users love our </h1>
        <h1 className='heading3 '> products.</h1>
        <p className='text1'> We only provide great products combined with excellent </p>
        <p className='text2'> customer service. See what our satisfied customers are </p>
        <p className='text3'> saying about our services. </p>
        <svg className='bgTop' width="584" height="362" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.212%" x2="9.399%" y2="32.183%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z" transform="rotate(180 292 181)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>
        <svg className='bgBottom' width="1085" height="673" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.237%" x2="9.399%" y2="32.159%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M355 800c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C1224.157 181.442 1330 136.116 1440 127v673H355z" transform="translate(-355 -127)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>        
        <div className='ratings1' >
          <div className='starsGroup'>
            <svg className='kids stars first' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars ' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          </div>  
            <p className='kids last'><b>Rated 5 Star in Reviews.</b></p>
        </div>
        <div className='ratings2' >
          <div className='starsGroup'>
            <svg className='kids stars first' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars ' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          </div>
            <p className='kids last'><b>Rated 5 Star in Report Guru.</b></p>
        </div>
        <div className='ratings3' >
          <div className='starsGroup'>
            <svg className='kids stars first' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
            <svg className='kids stars ' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          </div>
            <p className='kids last'><b>Rated 5 Star in BestTech.</b></p>
        </div>


        <div className='main'>
          <div className='mainChild'>
            <img src={colton} className='images' alt='colton'  ></img>
            <p className='Name'><b>Colton Smith</b></p>
            <p className='designation firstBuyer'>Verified Buyer</p>
          </div>
          <p className='coltonText pahle'> "We needed the same printed design as</p>
          <p className='coltonText'> the one we had ordered a week prior. Not </p>
          <p className='coltonText'> only did they find the original order, but</p>
          <p className='coltonText'> we also received it in time. Excellent!"</p>
        </div>


        <div className='main2'>
          <div className='mainChild'>
            <img src={irene} className='images' alt='colton'  ></img>
            <p className='Name'><b>Irene Roberts</b></p>
            <p className='designation secondBuyer'>Verified Buyer</p>
          </div>
          <p className='coltonText pahle'> "Customer service is always excellent</p>
          <p className='coltonText '> and very quick turn around. Completely </p>
          <p className='coltonText '> delighted with the simplicity of the </p>
          <p className='coltonText '> purchase and the speed of delivery." </p>
        </div>


        <div className='main3'>
          <div className='mainChild'>
            <img src={anne} className='images' alt='colton'  ></img>
            <p className='Name'><b>Anne Wallace</b></p>
            <p className='designation thirdBuyer'>Verified Buyer</p>
          </div>
          <p className='coltonText pahle'> "Put an order with this company and can</p>
          <p className='coltonText'> only praise them for the very high </p>
          <p className='coltonText'>  standard. Will definitely use them again</p>
          <p className='coltonText'> and recommend them to everyone!"</p>
        </div>



    </div>
    </>
  )
}
