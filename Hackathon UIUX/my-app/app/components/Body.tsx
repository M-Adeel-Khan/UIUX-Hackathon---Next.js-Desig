import { TiTick } from "react-icons/ti";

export default function Body() {
  return (
    <div className="bg-[#0D0D0D] flex justify-evenly pt-10 pb-10">
      <div className="text-[#FFFFFF] w-[500px]">
        <h1 className="text-[#FF9F0D] font-[#GreatVibes] text-2xl pb-5">About Us</h1>
        <span className="text-[#FF9F0D] text-5xl font-bold">We </span><span className="text-5xl font-bold">Create the best foody product</span>
       <br /><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, eit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, etc ac dapibus sit eu velt in consequat.</p>
        
        <div className="flex py-2 pt-10"><TiTick  className=' text-3xl pr-2 pb-2'/>Lacus nisi, et ac dapibus sit eu velit in consequat. </div>
        <div className="flex py-2"><TiTick className=' text-3xl pr-2 pb-2'/> Quisque diam pellentesque bibendum non dui volutpat fringilla</div>
        <div className="flex py-2"><TiTick className=' text-3xl pr-2 pb-2'/> Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
       </div>
      
      <div>
        <div className=""><img className="h-[250px] w-[620px]" src="H2.jpg" alt="" /></div>
          <div className="flex space-x-5 pt-5">
          <img className='w-[300px] h-[200px]' src="H3.jpg" alt="" /> 
          <img className='w-[300px] h-[200px]' src="H4.jpg" alt="" />
          </div>
      </div>
    </div>
  );
}


export function BosySection() {
  return (
    <div className="pt-10 pb-10 bg-[#0D0D0D]">
      <div className="text-[#FFFFFF] text-center">
        <h1 className="text-[#FF9F0D] font-[#GreatVibes] text-2xl pb-5 ">Food Category</h1>
        <span className="text-[#FF9F0D] text-5xl font-bold">Ch</span><span className="text-5xl font-bold">oose Food Iteam</span>
        </div>
        <div className="flex justify-evenly pt-10">
          <img className='w-[300px] h-[300px]' src="H5.jpg" alt="" />
          <img className='w-[300px] h-[300px]' src="H6.jpg" alt="" />
          <img className='w-[300px] h-[300px]' src="H7.jpg" alt="" />
          <img className='w-[300px] h-[300px]' src="H8.jpg" alt="" />
        </div>
    </div>

  );
}