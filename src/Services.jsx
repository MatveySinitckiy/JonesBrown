import { memo } from "react"
import { Link } from "react-router-dom"

function Services(){
    return<>
     <div id='header' className='w-full fixed z-3 top-0 left-0 h-[6.5vh] flex flex-row items-center justify-between bg-[rgb(16,33,15)]' >
    <Link to='/' id='logo' className='text-2xl md:text-4xl pl-[2vw] md:pl-[1vw] text-white font-semibold' >J&B</Link>
    <div className='w-[50vw] md:w-[15vw] flex flex-row items-center justify-evenly h-full ' >
    <Link to='/Services' className='text-white text-xs  md:text-xs font-uniq hover:text-white/80 transition-all' >Services</Link>
     <Link to='/Consult' className='text-white text-xs md:text-xs font-uniq hover:text-white/80 transition-all' >Schedule a Consult</Link>
     </div></div>
     <div className="w-full relative h-[80vh] s-bg1" >
        <h1 className="font-uniq text-3xl md:text-4xl absolute text-center md:text-start md:left-[4%] bottom-[35%]  md:bottom-[8%] text-white" >At Jones & Brown Legal, we are committed to<br></br> exceptional service and successful outcomes with:</h1>
     </div>
     <div className="w-full text-center  md:text-start md:h-[32vh] items-center h-[85vh] text-[rgb(45,24,0)] flex flex-col md:flex-row p-[8vmin] justify-evenly" >
        <div className="flex flex-col   font-uniq " >
        <h1 className="text-9xl" >30+</h1><br></br>
        <p className="text-2xl" >years of experience</p>
        </div>
        <div className="flex flex-col  font-uniq " >
        <h1 className="text-9xl" >98%</h1><br></br>
        <p className="text-2xl" >success rate in court</p>
        </div>
          <div className="flex flex-col  font-uniq " >
        <h1 className="text-9xl" >120+</h1><br></br>
        <p className="text-2xl" >attorneys at hand</p>
        </div>
     </div>
     <div className="w-full h-auto justify-center flex bg-[rgb(16,33,15)]" >
        <div className="md:w-[70%] w-[85%] h-[100%] flex flex-col items-end" >
            
            <div className="w-full  md:h-[] flex flex-col" >
            <h1 className="text-white font-uniq w-[100%] text-2xl  md:text-4xl  py-[15vmin]" >Navigating Complex Legal Landscapes? <br></br>We Can Help.</h1>
                <div className="w-full py-[5vmin]  md:py-[3vmin] h-[22%]  border-t-1 border-t-white flex-col flex md:flex-row justify-between" >
                <h1 className="font-uniq text-white text-2xl md:text-2xl" >Business and Corporate Law</h1>
                <div className="flex flex-col font-uniq text-2xs py-[5vmin] md:py-[0]  md:text-xl text-white md:w-[41%]" >
                    <h1>Business formation (LLCs, corporations, partnerships)</h1>
                    <h1>Contract drafting and review</h1>
                    <h1>Mergers and acquisitions</h1>
                    <h1>Employment law and workplace policies</h1>
                    <h1>Corporate governance</h1>
                    <h1>Shareholder and partnership disputes</h1>
                </div>
                </div>
                <div className="w-full  h-[22%] py-[5vmin] md:py-[3vmin] border-t-1 border-t-white flex flex-col md:flex-row justify-between" >
                <h1 className="font-uniq text-white text-2xl md:text-xl" >Litigation and Dispute Resolution</h1>
                <div className="flex flex-col font-uniq md:text-xl py-[5vmin] md:py-[0] text-xl text-white  md:w-[41%]" >
                    <h1>Civil litigation</h1>
                    <h1>Commercial litigation</h1>
                    <h1>Arbitration and mediation</h1>
                    <h1>Class action lawsuits</h1>
                    <h1>Personal injury claims</h1>
                    <h1>Product liability cases</h1>
                </div>
                </div>
                <div className="w-full  h-[22%]  border-t-1  py-[5vmin] md:py-[3vmin] border-t-white flex flex-col md:flex-row justify-between" >
                <h1 className="font-uniq text-white text-2xl md:text-xl" >Family Law</h1>
                <div className="flex flex-col font-uniq md:text-xl  py-[5vmin] md:py-[] text-white md:w-[41%] " >
                    <h1>Divorce and separation</h1>
                    <h1>Child custody and support</h1>
                    <h1>Prenuptial and postnuptial agreements</h1>
                    <h1>Adoption and surrogacy</h1>
                    <h1>Domestic violence protection</h1>
                </div>
                </div>
                <div className="w-full  h-[22%]  border-t-1 py-[5vmin] md:py-[3vmin] border-t-white flex flex-col md:flex-row justify-between" >
                <h1 className="font-uniq text-white text-xl" >Criminal Defense</h1>
                <div className="flex flex-col font-uniq text-xl text-white py-[5vmin] md:py-[] md:w-[41%] " >
                    <h1>DUI and traffic offenses</h1>
                    <h1>White-collar crime defense</h1>
                    <h1>Drug charges</h1>
                    <h1>Assault and battery cases</h1>
                    <h1>Expungements and record sealing</h1>
                </div>
                </div>
                  <div className="w-full  h-[22%]  border-t-1 py-[5vmin] md:py-[3vmin] border-t-white flex flex-col md:flex-row justify-between" >
                <h1 className="font-uniq text-white text-xl" >Real Estate Law</h1>
                <div className="flex flex-col font-uniq text-xl text-white py-[5vmin] md:py-[] md:w-[41%] " >
                    <h1>Property transactions (buying, selling, leasing)</h1>
                    <h1>Landlord-tenant disputes</h1>
                    <h1>Zoning and land use</h1>
                    <h1>Construction law</h1>
                    <h1>Real estate development</h1>
                </div>
                </div>
            </div>
            
        </div>
     </div>
     <img className="w-full md:h-[60vh]" src="./sky.jpg" ></img>
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
export default memo(Services)