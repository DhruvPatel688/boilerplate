import './sixth.css'

function getRealTimeYear() {
  return new Date().getFullYear();
}
  
export default function Sixth(){
  return(
    <div className = "spacer">
   <nav>
     <hr />
     <nav className ="full-card">
       <div className="card13">
        <h2 className='font-color'>[logo] [title]</h2>
         <h2 className='font-color'>[Small description of what product does]</h2>
         <br />
         <br />
         <h2 className='font-color'>© Copyright {getRealTimeYear()}</h2>
       </div>
       <div className="card13 ">
         <h2 className='font-color'>[Links]</h2>
          <h2 className='font-color'>[Link 1]</h2>
         <h2 className='font-color'>[Link 2]</h2>
         <h2 className='font-color'>[Link 3]</h2>
        

       </div>
       <div className="card13 ">
          <h2 className='font-color'>[Legal]</h2>
          <h2 className='font-color'>[Terms of Use]</h2>
           <h2 className='font-color'>[Privacy Policy]</h2>
          


        </div>
       <div className="card13 ">
         <h2 className='font-color'>[More]</h2>
         <h2 className='font-color'>[Company 1]</h2>
         <h2 className='font-color'>[Company 2]</h2>
         <h2 className='font-color'>[Company 3]</h2>
       </div>
     </nav>
   </nav>
      
    </div>
  )
}