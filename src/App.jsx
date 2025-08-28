import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() { 
  const [count, setCount] = useState(1)
    const sectionRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
      useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim');
    
          }// else {
            //entry.target.classList.remove('anim');
            // Сбрасываем класс, когда элемент выходит из зоны видимости
          //}
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    
    if (currentRef) {
      observer.observe(currentRef);
    
    }

    return () => {
      if (currentRef ) {
        observer.unobserve(currentRef);
       
      }
    };
    
    
  }, []);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);
  return (
    <>
     <div id='header' className='w-full fixed z-3 top-0 left-0 h-[6.5vh] flex flex-row items-center justify-between bg-[rgb(16,33,15)]' >
    <Link to='/' id='logo' className='text-2xl md:text-4xl pl-[3vw] md:pl-[1vw] text-white font-semibold' >J&B</Link>
    <div className='w-[50vw] md:w-[15vw] flex flex-row items-center justify-evenly h-full ' >
    <Link to='/Services' className='text-white text-xs  md:text-xs font-uniq hover:text-white/80 transition-all' >Services</Link>
     <Link to='/Consult' className='text-white text-xs md:text-xs font-uniq hover:text-white/80 transition-all' >Schedule a Consult</Link>
     </div></div>
     <div className='w-full h-[85vh] relative bg-image-1 bg-purple-800  flex justify-center md:text-start' >
      <h1 className='absolute bottom-[35%] md:top-[60%] md:left-[2.5%] text-white font-uniq   text-4xl md:text-9xl' >Jones & Brown Legal</h1>
       <h1 className='absolute top-[66.5%] md:top-[82.5%] md:left-[2.5%] text-white font-uniq md:text-4xl  text-center' >Deep expertise, decisive courtroom presence</h1>
       <h1 className='absolute bottom-[5.5%] md:top-[82.5%] md:left-[74.5%] text-white font-uniq text-[2.5vmax] w-[90%] md:w-[] text-center md:text-start text-clip md:text-xl' >We've been serving the Los Angeles area with{windowWidth < 500 ? '':<br></br>}expert legal counsel since 1976.</h1>
     </div>
     <div className='w-full h-[85vh] md:h-[70vh]  relative' >
      <div className='relative md:top-[20%] md:left-[10%] md:px-[5vmin] top-[5%]  md:w-[40%]' ><h1 className='text-black text-[2.8vmax] md:text-4xl md:text-start text-center font-uniq' >Welcome to Jones & Brown Legal</h1></div>
    <div className='w-[90%] md:w-[80%] p-[5vmin] mx-auto h-[75%] md:h-[50%] top-[5%] relative md:top-[20%] left-[0%] flex flex-col md:flex-row justify-between md:justify-between' >
    <div className='md:w-[40%]' ><p className='text-clip  font-uniq text-2xs md:text-xl text-black' >Jones & Brown Legal has been a pillar of the Los Angeles legal community, providing expert legal counsel across a wide spectrum of practice areas. We are more than just attorneys, we are trusted advisors, dedicated advocates, and strategic partners committed to achieving the best possible outcomes for our clients.</p></div>
    <div className='md:w-[50%]'><p  className='text-clip  font-uniq text-2xs md:text-xl text-black'>We combine decades of experience with a deep understanding of the complexities of California law. Our team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout Los Angeles and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.</p></div>
    
    </div>
     <div className='relative md:top-[15%] top-[8%] flex md:justify-start justify-center md:left-[10%] md:px-[5vmin]   md:w-[40%]' ><Link to='/Consult' className="text-xl bg-orange-950 transition-all hover:bg-[rgb(52,23,1)] hover:shadow-2xl active:text-white/90 active:scale-95 rounded-full px-[2.5vw] p-[2vmin] text-white font-uniq" >Schedule a Consult</Link></div>
     </div>
    <div className='w-full h-[30vh] md:h-[80vh]' >
    <img className='w-[100%] h-[100%]' src='./law-1.jpg' ></img>
     </div>
     <div className='w-full h-[70vh] md:h-[100vh] relative flex flex-row justify-center items-center bg-[rgb(16,33,15)]' >
      <div ref={sectionRef} className='opacity-0' >
   <div><h1 className='text-[rgb(255,253,241)] text-3xl md:text-4xl  absolute md:top-[10vh] top-[8.5%] left-[10vw] md:left-[7vw] font-uniq' >What We Offer</h1></div>
    <div className='w-auto h-[70%] absolute top-[10vh] left-[10vw] md:left-[28vw] mx-auto flex flex-col  justify-center md:justify-start' >
      <h1 className='b3-c font-uniq' >Business formation</h1>
      <h1 className='b3-c font-uniq'>Contract drafting</h1>
      <h1 className='b3-c font-uniq'>Mergers and Acquisitions</h1>
      <h1 className='b3-c font-uniq' >Property Protection</h1>
      <h1 className='b3-c font-uniq' >Employment Law</h1>
      <h1 className='b3-c font-uniq' >Corporate Governance</h1>
      <h1 className='b3-c font-uniq' >Shareholder Disputes</h1>
      <h1 className='text-4xl md:text-7xl font-uniq text-amber-100/30' >+More </h1>
      
    </div>
    <Link to='/Services' className='absolute md:top-[78%] md:h-[8vh] md:text-2xl bottom-[10%] hover:scale-105 hover:shadow-2xl hover:shadow-white/10 active:shadow-white/25 left-[10vw] active:scale-95 transition-all bg-white px-[3vmin] p-[2vmin]   rounded-full md:left-[28vw]  text-xl font-uniq' >Services</Link>
     </div>
     </div>
     <div className='w-full h-[115vh] bg-white pb-[10vh] items-center flex flex-col' >
    <div className='md:w-[25%] w-[80%] h-[35%] flex-col  pt-[8%]' >
      <div className='w-[100%] h-[40%] flex justify-center items-center ' >
        <h1 className='font-uniq md:text-3xl text-2xl' >Hear From Our Clients</h1>
      </div>
      <div className='w-[100%] flex justify-center items-center text-clip h-[40%] ' >
        <p className='text-clip md:text-xl font-uniq text-center' >We believe that our clients' experiences speak volumes about the quality of our legal services. Here's what some of them have to say:</p>
      </div>
      
    </div>
    <div className='md:w-[40%] w-[90%]  h-[45%] flex justify-center md:h-[42%] relative bg-neutral-100   pb-[5vh]' >
      <div className='font-uniq anim text-center  p-[5vmin] text-xl MD:text-2xl text-clip' >
        {count === 1 ?
       '"Jones & Brown Legal handled my estate planning with such care and professionalism. They listened to my concerns and made the process clear and straightforward. I now have complete peace of mind knowing my family future is secure."':
       count === 2 ? 
       '"Their expertise and courtroom presence were truly impressive. They turned a stressful situation into a successful outcome."':
        count === 3 ? 
       '"I was very impressed with the responsiveness and knowledge of everyone at Jones & Brown Legal. I felt like they really cared about my case, and they fought hard to get me a great result."':
        count === 4 ? 
       '"Their attention to detail and proactive communication made the entire process smooth and stress-free. I felt completely supported every step of the way."':'error'}</div>
      <div className='font-uniq text-center anim p-[3vmin] mt-[8.5vh] absolute   md:left-[25%] top-[45%] text-xl text-clip' >
        {count === 1 ? 
      <p className='anim' >— David L., Business Owner</p>:count === 2 ? 
      <p className='anim' >— Sarah M., Small Business Owner</p>: count === 3 ? 
      <p className='anim' >— Thomas P., Individual Client</p>: count === 4 ? 
      <p className='anim' >— Robert P., Real Estate Investor</p>:'error'}</div>
      <div className='mx-auto w-[30%]  h-[5vh] absolute left-[35%] top-[85%]  flex-row flex items-center' >
         <button onClick={()=> count === 1 ? setCount(4):setCount(count-1)} className='w-[10%] h-[100%]'  ><img src='arrow.png' className='w-[100%] h-auto rotate-y-180 hover:scale-110  active:scale-100 transition-all duration-100'  ></img></button>
        <div className='flex w-[80%] h-[100%] items-center justify-evenly  flex-row' > 
        <button onClick={()=> setCount(1)} className={`w-[10%] h-[33%] transition-all duration-300 hover:bg-stone-950/80 active:scale-95 ${ count === 1  ? 'bg-stone-950 ':'bg-stone-950/70'} rounded-full`} ></button>
        <button onClick={()=> setCount(2)} className={`w-[10%] h-[33%] transition-all duration-300 hover:bg-stone-950/80 active:scale-95 ${ count === 2  ? 'bg-stone-950':'bg-stone-950/70'} rounded-full`}></button>
        <button onClick={()=> setCount(3)} className={`w-[10%] h-[33%] transition-all duration-300 hover:bg-stone-950/80 active:scale-95 ${ count === 3  ? 'bg-stone-950':'bg-stone-950/70'} rounded-full`}></button>
        <button onClick={()=> setCount(4)} className={`w-[10%] h-[33%] transition-all duration-300 hover:bg-stone-950/80 active:scale-95 ${ count === 4  ? 'bg-stone-950':'bg-stone-950/70'} rounded-full`}></button>
      </div>
      <button onClick={()=> count === 4 ? setCount(1):setCount(count+1)} className='w-[10%] h-[100%] hover:scale-110  active:scale-100 transition-all duration-100'  ><img src='arrow.png' className='w-[100%] h-auto' ></img></button>
      </div>
    </div>
    <p className='font-uniq p-[5vmin] text-[1.6vmax]  md:text-xl text-black/85' >Let us help you navigate your legal journey with confidence <br></br>and peace of mind. Contact Jones & Brown Legal today.</p>
     <Link to='/Consult' className="text-xl bg-orange-950  transition-all hover:bg-[rgb(52,23,1)] hover:shadow-2xl active:text-white/90 active:scale-95 rounded-full px-[2.5vw] p-[2vmin] text-white font-uniq" >Schedule a Consult</Link>
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
  )
}

export default App
