import React from 'react'; 
import './Areaofinterest.css';

export const Area = () => {
  return (
    <section id = "Area" class="Area">
    <h2 class="interests-title">Area of Interest</h2>
    <div class="interests-container">
        <div class="interest-card">
            <h3 class="interest-title">Machine Learning</h3>
            <p class="interest-description">Exploring algorithms, building models, and working on AI solutions to solve real-world problems.</p>
        </div>
        <div class="interest-card">
            <h3 class="interest-title">Full-Stack Development</h3>
            <p class="interest-description">Creating dynamic and responsive web applications using modern frontend and backend technologies.</p>
        </div>
        <div class="interest-card">
            <h3 class="interest-title">Software Development</h3>
            <p class="interest-description">Creating, testing, and maintaining software applications to solve problems and improve efficiency using various programming languages and technologies.</p>
        </div>
        <div class="interest-card">
            <h3 class="interest-title">Computer Vision</h3>
            <p class="interest-description">Developing vision-based systems for object detection, image recognition, and augmented reality.</p>
        </div>
    </div>
</section>
)
}
