import React, { useEffect, useRef } from "react";
import classes from "./FadeInOnScroll.module.css"; // Link to your external CSS file

const FadeInOnScroll = ({ children }) => {
  const fadeElementRef = useRef();

  useEffect(() => {
    const options = {
      threshold: 0.2, // Adjust the threshold as needed
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes.visible);
          fadeInObserver.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    }, options);

    fadeInObserver.observe(fadeElementRef.current);

    // Cleanup the observer when the component is unmounted
    return () => {
      fadeInObserver.disconnect();
    };
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div ref={fadeElementRef} className={classes.fade_in}>
      {/* Your content goes here */}
      {children}
    </div>
  );
};

export default FadeInOnScroll;
