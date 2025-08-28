import { memo } from "react"
import { Link } from "react-router-dom"


function Consult(){
    return<>
  
       <div id='header' className='w-full fixed z-3 items-center top-0 left-0 h-[6.5vh] flex flex-row justify-between bg-[rgb(31,2,2)]' >
    <Link to='/' id='logo' className='text-2xl md:text-4xl pl-[2vw] md:pl-[1vw] text-white font-semibold' >J&B</Link>
    <div className='w-[50vw] md:w-[15vw] flex flex-row items-center justify-evenly h-full ' >
    <Link to='/Services' className='text-white text-xs  md:text-xs font-uniq hover:text-white/80 transition-all' >Services</Link>
     <Link to='/Consult' className='text-white text-xs md:text-xs font-uniq hover:text-white/80 transition-all' >Schedule a Consult</Link>
     </div></div>
     <div className="w-full relative h-[40vh] md:h-[75vh] bg-red-300 c-bg1" >
        <h1 className="md:text-9xl text-5xl left-[10%] bottom-[10%] text-white font-uniq absolute md:bottom-[10%] md:left-[3%]" >Let us help you</h1>
     </div>
    <div className="w-full h-[200vh] md:h-[180vh] flex justify-center bg-[rgb(31,2,2)]" >
        <div className="w-[75%] h-[115vh]" >
            <h1 className="font-uniq text-white text-xl md:text-4xl p-[5vmin]" >Ready to Take the Next Step? <br></br>Let's Discuss</h1>
            <div className="flex flex-col  text-white" >
             <div className="w-full h-[33%] border-t-1 flex flex-col md:flex-row items-center justify-center md:justify-between" >
                <h1 className="text-[20vmax]  font-extralight" >1.</h1>
                <div className="md:w-[33%] p-[3vmin]  text-clip" >
                    <h1 className="md:p-[3vmin] md:py-[0] py-[5vmin] md:text-2xl md:text-center font-uniq" >Free consultation</h1>
                   <p className="font-uniq md:text-xl" > Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.</p> 
                </div>
                
                </div>   
            </div>
             <div className="flex flex-col  text-white" >
             <div className="w-full h-[33%] border-t-1 flex flex-col md:flex-row items-center justify-between" >
                <h1 className=" text-[20vmax] font-extralight" >2.</h1>
                <div className="md:w-[33%] p-[3vmin]  text-clip" >
                    <h1 className="md:p-[3vmin] md:py-[0] py-[5vmin] md:text-2xl md:text-center font-uniq" >Personalized Case Evaluation</h1>
                  <p className="font-uniq md:text-xl" >  If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.</p>
                </div>
                
                </div>   
            </div>
             <div className="flex flex-col  text-white" >
             <div className="w-full h-[33%] border-t-1 border-b-1 flex items-center flex-col md:flex-row justify-between" >
                <h1 className=" text-[20vmax]  font-extralight" >3.</h1>
                <div className="md:w-[33%] p-[3vmin]  text-clip" >
                    <h1 className="md:p-[3vmin] md:py-[0] py-[5vmin] md:text-2xl md:text-center font-uniq" >Formal Engagement & Representation</h1>
                 <p className="font-uniq md:text-xl" >   Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.</p>
                </div>
                
                </div>   
            </div>
        </div>
    </div>
        <div className='w-full h-[60vh] relative' >
      <div className='font-uniq text-4xl md:text-6xl absolute top-[10%] left-[5%]' >Jones & Brown Legal</div>
      <div className='font-uniq text-xl md:text-2xl absolute top-[25%] left-[5%]' >Deep expertise, decisive courtroom presence</div>
      <div className='font-uniq text-xs md:text-2xs absolute top-[45%] left-[5%]' >123 Candy Lane <br></br>Suite 123 <br></br>Los Angeles,CA 94117</div>
      <div className='font-uniq text-xs md:text-2xs  absolute top-[45%] left-[45%] md:left-[35%]' >
        <button className='transition-all hover:text-black/70' >Instagram</button><br></br>
        <button className='transition-all hover:text-black/70' >Facebook</button><br></br>
        <button className='transition-all hover:text-black/70' >Linkedin</button><br></br>
        <button className='transition-all hover:text-black/70' >Bluesky</button><br></br>

      </div>
     <div className='font-uniq text-2xs absolute top-[75%] left-[5%]' >
          Jones & Brown Legal
<br></br> © 2025 All Rights Reserved</div>
     </div>
    </>
}
export default memo(Consult)