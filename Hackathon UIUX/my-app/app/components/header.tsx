import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


export default function MainHeader() {
  return (
    <div className="bg-[#0D0D0D]">
        <div className="text-[#FFFFFF] font-bold text-center py-5"><span className="text-[#FF9F0D]">Food</span>tuck</div>
        <div className="flex justify-evenly text-[#FFFFFF]">
          <div className="flex">
            <a href="./" className="pr-5">Home</a>
            <a href="./Menu" className="pr-5">Menu</a>
            <a href="./Blogs" className="pr-5">Blog</a>
            <a href="./Pages" className="pr-5">Pages</a>
            <a href="./About" className="pr-5">About</a>
            <a href="./Shop" className="pr-5">Shop</a>
            <a href="./Contact" className="pr-5">Contact</a>   
          </div>
          <div className="rounded-3xl border-[#FF9F0D] w-[200px] h-[40px] border-2 flex justify-evenly">
          <input className='bg-[#0D0D0D] w-[130px] pl-[25px] h-[30px] pt-2 ' type="text" name="Search" placeholder="Search.... "  /><CiSearch className=' pt-2 font-bold text-3xl' />
          </div>
        </div>
    

      <div className="h-[300px]">

      <div className="flex justify-evenly">
       <div className="text-[#FFFFFF] pt-10 ">
        <h1 className="text-[#FF9F0D] font-[great vibes] font-[Great Vibes]">Its Quick & amusing!</h1>
        <span className="text-[#FF9F0D] text-4xl font-bold">Th</span><span className="text-4xl font-bold">e Art of speed food Quality</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
        <p>Varius sed pharetra dictum neque massa congue</p>
        <br />
        <button className="h-[50px] w-[150px] rounded-3xl bg-[#FF9F0D] text-[#FFFFFF]">See Menu</button>
       </div>
      
      <div className="pt-5 ">     
      <img className='size-[300px]' src="H1.png" alt="" />
      </div>
      
     </div>
      
      </div>
      
    </div>
  );
}