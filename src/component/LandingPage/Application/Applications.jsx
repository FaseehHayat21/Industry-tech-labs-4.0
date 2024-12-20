import React, {useEffect} from 'react';
import './Applications.css'; // Ensure this file exists and includes the styling below
import Aos from "aos"
import "aos/dist/aos.css"
export default function Applications() {
  useEffect(()=> {
                  Aos.init({duration: 2000});
              })
  return (
    <section className="applications-section"  data-aos="fade-left">
      <h2>
      Applications Opening Soon</h2>
      <p>Keep an eye out for our upcoming accelerator programs!.</p>
    </section>
  );
}
