"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill()
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner flex flex-row h-screen w-[400vw] relative"
        >
          <div className="scroll-section  h-screen w-screen bg-red-500">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section h-screen w-screen bg-pink-500">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section h-screen w-screen bg-blue-500">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section h-screen w-screen bg-sky-500">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
