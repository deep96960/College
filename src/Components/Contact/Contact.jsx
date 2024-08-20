import React from 'react'
import './Contact.css'
import arrow from '../../assets/msg-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a3d9ac49-d69b-4986-8d71-e4e4e6c2df88");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });    
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us message</h3>
            <p>Feel free to reach out through contact form or find our contact information below.your feedback, qution and suggestion are important to us as we strive to provide exceptional service to our university community</p>
       <ul>


        <li>deepakgugalgave846@gmail.com</li>
        <li>9579593887</li>
        <li>hadpsar pune411028</li>
       </ul>
        </div>
          
      <div className='contact-col'></div>
      <form onSubmit={onSubmit}>
        <label> 
            Your name
        </label>
        <input type="text"  name='name' placeholder='Enter Your name'required />

        <label>Phone Number</label>
        <input type="tel" name='phone'placeholder='Enter your mobile number' required />

               <label>Write your messages here</label>
               <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea> 
               <button type='submit' className='btn dark-b'>Submit now <img src="arrow" alt="" /></button>

         </form>
         <span>{result}</span>
    </div>
  )
}

export default Contact
