import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faGithub, faTwitter, faInstagram, faYoutube, faLinkedin )
function FooterLanding(props){
   return ( 
      <div>
         <div className={`footer ${props.bgColor}`}>
            <div class="grid-container">
               <div class="wanna-talk-to-us"><h1>Wanna talk to us?</h1></div>
                  <div class="write-to-us">
                     <form id="contact-us">
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <textarea type="text" id="message" name="messsage" placeholder="Start typing!"></textarea>
                        {/* TODO: style the button */}
                        <div className="send-btn-container"><input type="submit" value="Send" className="send"></input></div>
                     </form>
                  </div>
                  <div class="links">
                        <ul class="footer-links flex-container">
                           <li><a href="https://www.linkedin.com/company/geeksforgeeks-kiit" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                           <li><a href="https://youtube.com/channel/UC281oAcZl0asjjuvmnXh2PQ" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}/></a></li>
                           <li><a href="https://github.com/GFG-CLUB-KIIT"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
                           <li><a href="https://twitter.com/ClubGfg?s=08" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" ><FontAwesomeIcon icon={faTwitter}/></i></a></li>
                           <li><a href="https://instagram.com/gfg_kiit_club?igshid=rnewwd09app3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        </ul>
                  </div>
                  <div class="footer-info">
                     <div class="desc">
                        <div class="description1">
                           <p class = "contact strong">Feel free to contact us</p>
                           <br></br>
                           <p>School of Computer</p>
                           <p>Engineering, KIIT</p>
                           <p>University, Bhubaneswar</p>
                           <p>751024</p>
                           <p>Email: gfgkiit@gmail.com</p>
                           <p>Phone: +91 87655 16718</p>
                           <p>(Taran)</p>
                           <br></br>
                           </div>
                        <div>
                           <div class="description3">
                              <p class = "guideline strong">General Guidelines</p>
                              <br></br>
                              <p>Code of Conduct</p>    
                              <br></br>        
                              <br></br>        
                           </div>
                           <div class="description2">
                              <p class = "community strong">Community</p>
                              <br></br>
                              <p>GFG KIIT</p>
                              <br></br>
                        </div>
                     </div>
                  </div>
               </div>
            </div>   
         </div>
         <style>{`
                  /* default reset styles */
                  :root {
                     --text-light: #fefefe;
                     --text-dark: #333;
                     --font-size-heading: clamp(30px, 4vw, 70px);
                     --font-size-subheading: clamp(25px, 2.5vw, 40px);
                     --font-size-paragragh: clamp(12px, 1.25vw, 22px);
                  
                     --footer-icon-size: clamp(30px, 5vw, 50px);
                  
                     --heading-font: "Roboto";
                     --paragragh-font: "PT Sans", sans-serif;
                  }
                  *:focus {
                     outline: none;
                  }
                  .background-static {
                     // background-image: url('../../public/img/swirlLiq.png');
                     background-size: cover;
                     background-color: pink;

                  }
                  .footer {
                     width: 100%;
                     min-height: 100vh;
                     overflow-x: hidden;
                     display: grid;
                     place-items: center;
                     z-index: 1;
                     // background-image: url(../public/img/swirl-liq-mono.png');
                     background-size: cover;
                     background-blend-mode: overlay;
                     background-color: pink;
                  }
                  /* Variable props */
                  .footer-landing {
                     background-color: rgb(22, 94, 52);
                  }
                  .footer-projects {
                     background-color: rgb(48, 54, 141);
                  }
                  .footer-events {
                     background-color: rgb(17, 71, 73);
                  }
                  .footer-aboutUs {
                     background-color: rgb(134, 20, 58);
                  }
                  .grid-container {
                     color: white;
                     font-size: 3rem;
                     width: 100%;
                     height: 100%;
                  }
                  
                  .grid-container {
                     display: grid;
                     grid-template-columns: 1fr 1fr 1fr 1fr;
                     grid-template-rows: minmax(minmax(100px, 10vh), 200px) 1fr 1fr;
                     gap: 0px 0px;
                     grid-template-areas:
                        "wanna-talk-to-us wanna-talk-to-us wanna-talk-to-us ."
                        "write-to-us write-to-us links links"
                        "write-to-us write-to-us footer-info footer-info";
                  
                     backdrop-filter: blur(25px);
                     -webkit-backdrop-filter: blur(25px);
                  }
                  .wanna-talk-to-us {
                     grid-area: wanna-talk-to-us;
                     display: flex;
                     align-items: center;
                     font-size: var(--font-size-heading);
                     padding-top: 100px;
                     font-family: var(--heading-font);
                     font-weight: 600;
                     margin-left: 5vw;
                  }
                  
                  /* Form Section starts */
                  .write-to-us {
                     grid-area: write-to-us;
                     display: flex;
                     flex-direction: row;
                     justify-content: flex-start;
                     margin-left: 5vw;
                  }
                  
                  .write-to-us form {
                     width: clamp(400px, 20vw, 800px);
                  }
                  #email,
                  #message {
                     background-color: rgba(255, 255, 255, 0.2);
                     border: none;
                     color: #fefefe;
                  
                     border-radius: 10px;
                     font-size: var(--font-size-paragragh);
                     font-family: var(--paragragh-font);
                  }
                  
                  #email:focus {
                     background-color: rgba(255, 255, 255, 0.4);
                     box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.5);
                  }
                  #message:focus {
                     background-color: rgba(255, 255, 255, 0.4);
                     box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.5);
                  }
                  
                  #email::placeholder {
                     color: rgba(254, 254, 254, 0.75);
                     font-size: var(--font-size-paragragh);
                     font-family: var(--paragragh-font);
                     font-style: italic;
                  }
                  #message::placeholder {
                     color: rgba(254, 254, 254, 0.75);
                     font-size: var(--font-size-paragragh);
                     font-family: var(--paragragh-font);
                     font-style: italic;
                  }
                  
                  #email {
                     width: 90%;
                     padding: 0.8rem;
                     margin: 1rem 0;
                  }
                  #message {
                     width: 90%;
                     height: clamp(170px, 15vw, 500px);
                     padding: 1rem;
                     margin: 1rem 0;
                  
                     resize: none;
                  }
                  .send-btn-container {
                     width: 100%;
                     display: grid;
                     place-items: center;
                  }
                  .send {
                     width: 50%;
                     height: 2.5rem;
                     font-weight: 100;
                     font-family: var(--heading-font);
                     font-size: 1rem;
                     color: #fefefe;
                     background-color: rgba(255, 255, 255, 0.2);
                  
                     border-style: none;
                     border-radius: 20px;
                     transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                  }
                  .send:hover {
                     background-color: rgba(255, 255, 255, 0.5);
                     transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                  }
                  /* Form Section Ends */
                  
                  .links {
                     grid-area: links;
                     margin-right: 5vw;
                     margin-top: 10px;
                  }
                  .links .flex-container {
                     display: flex;
                     justify-content: center;
                     flex-direction: row;
                     flex-wrap: nowrap;
                  
                     height: 100%;
                  }
                  .links .flex-container li {
                     display: flex;
                     justify-content: center;
                     align-items: center;
                  
                     width: 20%;
                     height: 10vh;
                  }
                  .links .flex-container li a  {
                     color: #fefefe;
                     background-color: rgba(255, 255, 255, 0);
                     font-size: var(--footer-icon-size);
                  
                     border-radius: 20px;
                     padding: 1vw;
                     transition: 0.3s ease-out;
                  }
                  .links .flex-container li a:hover{
                     padding: 1.5rem;
                     background-color: rgba(255, 255, 255, 0.3);
                     transition: 0.3s ease-out;
                  }
                  
                  .footer-info {
                     grid-area: footer-info;
                     margin-right: 5vw;
                     font-size: var(--font-size-paragragh);
                  }
                  .description {
                     font-size: var(--font-size-paragragh);
                  }
                  .description p {
                     font-family: var(--paragragh-font);
                  }
                  .description1 {
                     float: right;
                     margin-right: 2vw;
                     margin-left: 0;
                     text-align: right;
                     font-family: var(--paragragh-font);
                     line-height: 2.2ch;
                     width: 230px;
                  }
                  .description2 {
                     float: right;
                     margin-right: 2vw;
                     text-align: right;
                     font-family: var(--paragragh-font);
                     line-height: 2.2ch;
                     width: 280px;
                  }
                  .description3 {
                     float: right;
                     margin-right: 2vw;
                     text-align: right;
                     font-family: var(--paragragh-font);
                     line-height: 2.2ch;
                     width: 280px;
                  }
                  .strong {
                     font-weight: 700;
                     font-size: 18px;
                     letter-spacing: 1pt;
                  }
                  /* Extra small devices (phones, 600px and down) */
                  /* @media only screen and (max-width: 600px) {
                      ...;
                    } */
                  
                  /* Small devices (portrait tablets and large phones, 600px and up) */
                  
                  @media only screen and (max-width: 600px) {
                     .grid-container {
                        grid-template-rows: minmax(minmax(100px, 10vh), 200px) 1fr 1fr 1fr;
                        grid-template-areas:
                           "wanna-talk-to-us wanna-talk-to-us wanna-talk-to-us wanna-talk-to-us"
                           "write-to-us write-to-us write-to-us write-to-us"
                           "links links links links"
                           "footer-info footer-info footer-info footer-info";
                     }
                     .wanna-talk-to-us {
                        padding-top: 100px;
                        margin: 1rem;
                     }
                     .write-to-us {
                        justify-content: center;
                     }
                     #email,
                     #message {
                        margin: 0.5vw 0;
                     }
                  
                     .description1 {
                        float: right;
                        margin-right: 2vw;
                        margin-left: 0;
                        text-align: right;
                        font-family: var(--paragragh-font);
                        line-height: 2.2ch;
                        width: 250px;
                        margin-top: 30px;
                     }
                     .description2 {
                        float: right;
                        margin-right: 2vw;
                        text-align: right;
                        font-family: var(--paragragh-font);
                        line-height: 2.2ch;
                        width: 100px;
                     }
                     .description3 {
                        float: right;
                        margin-right: 2vw;
                        text-align: right;
                        font-family: var(--paragragh-font);
                        line-height: 2.2ch;
                        width: 200px;
                        margin-top: 30px;
                     }
                  }
                  @media only screen and (max-width: 800px) {
                     .grid-container {
                        grid-template-rows: minmax(minmax(100px, 10vh), 200px) 1fr 1fr 1fr;
                        grid-template-areas:
                           "wanna-talk-to-us wanna-talk-to-us wanna-talk-to-us wanna-talk-to-us"
                           "write-to-us write-to-us write-to-us write-to-us"
                           "links links links links"
                           "footer-info footer-info footer-info footer-info";
                     }
                     .wanna-talk-to-us {
                        padding-top: 20%;
                        margin: 1rem;
                        justify-content: flex-start;
                        margin-left: 20%;
                     }
                     .write-to-us {
                        justify-content: center;
                     }
                     #email,
                     #message {
                        margin: 0.5rem 0;
                     }
                  }
                  @media only screen and (max-width: 400px) {
                     .description2 {
                        margin-top: 29px;
                     }
                  }
                  
                  `}</style>
      </div>

   )
}

export default FooterLanding