import React, { useRef } from 'react'
import './Testimonials.css'
import Next_icon from '../../assets/next1.png'
import back_icon from '../../assets/Back.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.webp'
import user3 from '../../assets/user3.webp'
import user4 from '../../assets/user4.jpg'


const Testimonials = () => {

    
        const slider = useRef();
        let tx=0;

    
    const slideForward= ()=>{
        if(tx >-50){
            tx -= 25;
        }
        slider.current.style.transform= `translatex(${tx}% )`

    }
    const slideBackward=()=>{
        if (tx< 0){
            tx+=25;
        }
         slider.current.style.transform= `translatex(${tx}% )`

    }



  return (
    <div className='testimonials'>
        <img src={Next_icon} alt="" className='naxt-btn'onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      
      <div className='slider'> 

        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user1} alt="" />
                    <div>
                        <h3>Deep gurav</h3>
                        <span>HVdesai,budhwar peth</span>
                          
                    </div>
                    </div>   
                    <p> hsedf sbd uibed iuhasd iuhd iuhd iued diuhesd iuhed iuhd iuged ghc iugde iugde ygyes uigsef iugdede seifug </p>
                
                
                </div>
                
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user2} alt="" />
                    <div>
                        <h3>Deep gurav</h3>
                        <span>HVdesai,budhwar peth</span>
                          
                    </div>
                    </div>   
                    <p> hsedf sbd uibed iuhasd iuhd iuhd iued diuhesd iuhed iuhd iuged ghc iugde iugde ygyes uigsef iugdede seifug </p>
                
                
                </div>
                
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user3} alt="" />
                    <div>
                        <h3>Deep gurav</h3>
                        <span>HVdesai,budhwar peth</span>
                          
                    </div>
                    </div>   
                    <p> hsedf sbd uibed iuhasd iuhd iuhd iued diuhesd iuhed iuhd iuged ghc iugde iugde ygyes uigsef iugdede seifug </p>
                
                
                </div>
                
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user4} alt="" />
                    <div>
                        <h3>Deep gurav</h3>
                        <span>HVdesai,budhwar peth</span>
                          
                    </div>
                    </div>   
                    <p> hsedf sbd uibed iuhasd iuhd iuhd iued diuhesd iuhed iuhd iuged ghc iugde iugde ygyes uigsef iugdede seifug </p>
                
                
                </div>
                
                </li>
                

        </ul>
      </div>
    </div>
  )
}
     
export default Testimonials
