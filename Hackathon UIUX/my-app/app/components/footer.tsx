import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { PiClockClockwise } from "react-icons/pi";

export const MainFooter  = () => {
  return (
    <div className='bg-[#0D0D0D] text-[#FFFFFF]  w-full h-[550px]'>
      <div className='flex justify-evenly pt-20 pb-3'>
        <div >
        <h1 className='text-2xl pb-3'>Still You Need Our Support ?</h1>
        <p>Don't wait make a smart & logical qoute here. Its pretty easy.</p>
        </div>
    
        <div><input className =' rounded-s bg-[#FF9F0D] text-[#FFFFFF] w-[250px] h-[50px] pl-5'type="text" name="input_field" placeholder='Enter Your Email' />
        <button className =' rounded-e bg-[#FFFFFF] text-[#FF9F0D] w-[150px] h-[50px] pl-2'>Subscribe Now</button>
        </div>
      </div>
      <div className='flex justify-evenly pt-[50px] pb-[60px] '>
      <div className='grid pb-10'>
        <h1 className='text-2xl pb-2'>Abouts Us.</h1>
        <p>orporate clients and leisure travelers hasbeen</p> <p>relying on Groundlink for dependablesafe, and</p> 
        <p>professional chauffeured carservice in major</p> <p>cities across World.</p>
        <div className='flex pt-3 justify-start space-x-10'>
        <p className='bg-[#FF9F0D] text-[#FFFFFF] h-[50px] w-[55px] rounded-[5px] text-3xl pt-2 pl-3'><PiClockClockwise /></p>
          <div>
          <h1>Opening Houres</h1>
          <p>Mon - Sat(8.00 - 6.00)</p>
          <p>Sunday - Closed</p>
          </div>
        </div>
        </div>
      <div className='grid'>
        <h1 className='text-2xl' >Useful Links</h1>
        <p>About</p>
        <p>News</p>
        <p>Patners</p>
        <p>Team</p>
        <p>Menu</p>
        <p>Contact</p>
        </div>
      <div className='grid'>
        <h1 className='text-2xl' >Help?</h1>
        <p>FAQ</p>
        <p>Terms & Condition</p>
        <p>Reporting</p>
        <p>Documentation</p>
        <p>Support Policy</p>
        <p>Privacy</p>
        </div>
      <div className='grid w-[20%]'>
      <h1 className='text-2xl'>Recent Post</h1>
        <div className='flex pt-2 justify-start space-x-5'>
        <p><img  className='h-[80px] w-[100px]' src="F1.jpg" alt="image" /></p>
        <p>Is fastfood good for your body <br />February 28, 2022</p>
        </div>
        <div className='flex pt-2 justify-start space-x-5'>
        <p><img  className='h-[80px] w-[140px]' src="F1.jpg" alt="image" /></p>
        <p>Change your food habit with organic food <br />February 28, 2022</p>
        </div>
        <div className='flex pt-2 justify-start space-x-5'>
         <p><img  className='h-[80px] w-[110px]' src="F1.jpg" alt="image" /></p>
        <p>Do you like fastfood for your life? <br />February 28, 2022</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export const Footer  = () => {
  return (
    <div className='bg-[#4F4F4F]  w-1920px flex justify-evenly h-[40px]' > 
    <footer  className='text-[#FFFFFF] pb-2 pt-2'> Copyright © 2024 by Ayeman. All Rights Reserved.</footer>
        <div className=' flex space-x-4 pt-2.5 pb-3' ><FaFacebookF className='bg-[#FFFFFF] h-[20px] w-[20px] rounded-[2px]' /> 
        <FaTwitter className ='bg-[#FFFFFF] h-[20px] w-[20px] rounded-[2px]' /> 
        <IoLogoInstagram className='bg-[#FFFFFF] h-[20px] w-[20px] rounded-[2px]'/>
        <IoLogoYoutube className='bg-[#FFFFFF] text-[#FF9F0D] h-[20px] w-[20px] rounded-[2px]'/>
        <FaPinterest className='bg-[#FFFFFF] h-[20px] w-[20px] rounded-[2px]'/></div>
    </div>
  )
}


