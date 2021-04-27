import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [num, setNum] = useState(0);

  const { name, image, job, text } = people[num];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prev = () => {
    const newNum = num - 1
    setNum(checkNumber(newNum));
  };

  const next = () => {
     const newNum = num +1;
     setNum(checkNumber(newNum));
  };
  const random = ()=>{
    const newNum = Math.floor(Math.random() * people.length);
     setNum(checkNumber(newNum));

  } ;

  return (
    <section className="container">
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <FaQuoteRight className="quote-icon" />
          <FaQuoteRight className="quote-icon" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={random}>surprise me</button>
      </article>
    </section>
    // <section className="container">
    //   {peoples.map((item) => {
    //     return (
    //       <article className="review">
    //         <div className="img-container">
    //           <img className="person-img" src={item.image} alt={item.name} />
    //           <FaQuoteRight className="quote-icon" />
    //         </div>
    //         <h4 className="author">{item.name}</h4>
    //         <p className="job">{item.job}</p>
    //         <p className="info">{item.text}</p>
    //         <div className="button-container">
    //           <button className="prev-btn">
    //             <FaChevronLeft />
    //           </button>
    //           <button className="prev-btn">
    //             <FaChevronRight />
    //           </button>
    //         </div>
    //         <button className="random-btn">surprise me</button>
    //       </article>
    //     );
    //   })}
    // </section>
  );
};

export default Review;
