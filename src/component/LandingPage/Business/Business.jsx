import React, { useRef, useState } from 'react';
import './Business.css'; // Importing the CSS file
import image from "../../../assets/industry-a.jpg"
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div
        className="accordion-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className="accordion-text">{content}</div>
      </div>
    </div>
  );
};

function Business() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="containerr">
      {/* Left Side with Image */}
      <div className="left-side">
        <img src={image} alt="Left Side" />
      </div>

      {/* Right Side with Heading and Accordions */}
      <div className="right-side">
        <h1 className='offer-heading'>WHAT WE OFFER</h1>
        <AccordionItem
          title="Venture Funding for Startups / Faculty Projects"
          content="Description of Feature 1."
          isOpen={activeIndex === 0}
          onClick={() => toggleAccordion(0)}
        />
        <AccordionItem
          title="Business Incubation Programs / Management"
          content="Description of Feature 2."
          isOpen={activeIndex === 1}
          onClick={() => toggleAccordion(1)}
        />
        <AccordionItem
          title="Accelerator Programs"
          content="Description of Feature 3."
          isOpen={activeIndex === 2}
          onClick={() => toggleAccordion(2)}
        />
        <AccordionItem
          title="Internship Programs / Placements"
          content="Description of Feature 3."
          isOpen={activeIndex === 3}
          onClick={() => toggleAccordion(3)}
        />
        <AccordionItem
          title="FYPs Seeding / Support Program"
          content="Description of Feature 3."
          isOpen={activeIndex === 4}
          onClick={() => toggleAccordion(4)}
        />
        <AccordionItem
          title="Technology & Innovation Strategy"
          content="Description of Feature 3."
          isOpen={activeIndex === 5}
          onClick={() => toggleAccordion(5)}
        />
        <AccordionItem
          title="Corporate Startup Program"
          content="Description of Feature 3."
          isOpen={activeIndex === 6}
          onClick={() => toggleAccordion(6)}
        />
        <AccordionItem
          title="Collaborative Research Projects"
          content="Description of Feature 3."
          isOpen={activeIndex === 7}
          onClick={() => toggleAccordion(7)}
        />
        <AccordionItem
          title="Trainings / Workshops"
          content="Description of Feature 3."
          isOpen={activeIndex === 8}
          onClick={() => toggleAccordion(8)}
        />
        <AccordionItem
          title="Hackathons / Events"
          content="Description of Feature 3."
          isOpen={activeIndex === 9}
          onClick={() => toggleAccordion(9)}
        />
      </div>
    </div>
  );
}

export default Business;
