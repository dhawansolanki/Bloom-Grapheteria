// import React, { useState } from 'react';
import './styles/reviews.css';

// function Reviews() {
//   const [activeCard, setActiveCard] = useState(2); // Start with the middle card (index 2)

//   const prevCard = () => {
//     setActiveCard((prev) => (prev - 1 + 5) % 5); // Loop through cards with modulus 5
//   };

//   const nextCard = () => {
//     setActiveCard((prev) => (prev + 1) % 5); // Loop through cards with modulus 5
//   };

//   return (
//     <div>
//       <div className="darksoul-container">
//         <div className="darksoul-cards-carousel">
//           <div
//             id="jscarousel-darksoul-cards-carousel-item-5"
//             className={`card ${activeCard === 0 ? 'card-left-2' : activeCard === 1 ? 'card-left-1' : ''}`}
//           >
//             <div className="card-content">
//               <div className="circle-image"></div>
//               <div className="text-line">I really like the overall concept of the design, it feels fresh and modern. The colors used are very vibrant and capture the energy of our brand. I think the use of the different shapes used in the logo is well balanced and proportional. The simplicity of the design is also a plus, it makes it easy to recognize and remember. </div>
//             </div>
//           </div>

//           <div
//             id="jscarousel-darksoul-cards-carousel-item-4"
//             className={`card ${activeCard === 0 ? 'card-left-1' : activeCard === 3 ? 'card-right-1' : ''}`}
//           >
//             <div className="card-content">
//               <div className="circle-image"></div>
//               <div className="text-line">I really like the overall concept of the design, it feels fresh and modern. The colors used are very vibrant and capture the energy of our brand. I think the use of the different shapes used in the logo is well balanced and proportional. The simplicity of the design is also a plus, it makes it easy to recognize and remember. </div>
//             </div>
//           </div>

//           <div
//             id="jscarousel-darksoul-cards-carousel-item-3"
//             className={`card ${activeCard === 1 ? 'card-center' : activeCard === 4 ? 'card-right-1' : ''}`}
//           >
//             <div className="card-content">
//               <div className="circle-image"></div>
//               <div className="text-line">I really like the overall concept of the design, it feels fresh and modern. The colors used are very vibrant and capture the energy of our brand. I think the use of the different shapes used in the logo is well balanced and proportional. The simplicity of the design is also a plus, it makes it easy to recognize and remember. </div>
//             </div>
//           </div>

//           <div
//             id="jscarousel-darksoul-cards-carousel-item-2"
//             className={`card ${activeCard === 2 ? 'card-center' : activeCard === 4 ? 'card-right-2' : ''}`}
//           >
//             <div className="card-content">
//               <div className="circle-image"></div>
//               <div className="text-line">I really like the overall concept of the design, it feels fresh and modern. The colors used are very vibrant and capture the energy of our brand. I think the use of the different shapes used in the logo is well balanced and proportional. The simplicity of the design is also a plus, it makes it easy to recognize and remember. </div>
//             </div>
//           </div>

//           <div
//             id="jscarousel-darksoul-cards-carousel-item-1"
//             className={`card ${activeCard === 3 ? 'card-right-2' : activeCard === 2 ? 'card-right-1' : ''}`}
//           >
//             <div className="card-content">
//               <div className="circle-image"></div>
//               <div className="text-line">I really like the overall concept of the design, it feels fresh and modern. The colors used are very vibrant and capture the energy of our brand. I think the use of the different shapes used in the logo is well balanced and proportional. The simplicity of the design is also a plus, it makes it easy to recognize and remember. </div>
//             </div>
//           </div>
//         </div>

//         <div className="darksoul-cards-carousel-buttons">
//           <button type="button" className="darksoul-btn-prev" onClick={prevCard}>
//           <i id="right" class="fa-solid fa-angle-right">
//                 <img src="./images/pre arow.png" alt=""/>
//             </i> 
//           </button>

//           <button type="button" className="darksoul-btn-next" onClick={nextCard}>
//           <i id="right" class="fa-solid fa-angle-right">
//                 <img src="./images/next arow.png" alt=""/>
//             </i> 
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reviews;



import React from 'react'

const Reviews = () => {
  return (
    <div>
      <div id="menu">
  <div id="nav">
    <div id="prev">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div id="next">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </div>
  <ul id="cards">
    <li id="box1" class="list">

    </li>
    <li id="box2" class="list">

    </li>
    <li id="box3" class="list">

    </li>
    <li id="box4" class="list">

    </li>
    <li id="box5" class="list">

    </li>
  </ul>
    </div>
    </div>
  )
}

export default Reviews