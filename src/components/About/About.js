import React from "react";
import './About.css'

export default function About(){
    return(
        <section class="about-contant">
            <h2 class="about-title ">What I do</h2>

            <div class="services">
                <div class="service">
                    <h3>Design + Development</h3>
                    <p>As a React developer, I'm passionate about building interactive and user-friendly web applications. 
                    I have honed my skills in JavaScript, HTML, CSS, and, of course, React to create seamless digital experiences.</p>
                </div> 
                
                <div class="service">
                    <h3>Ability</h3>
                    <p>One of my key strengths is my ability to collaborate effectively with designers, product managers, 
                    and fellow developers to transform ideas into reality. I value clean code, maintainable solutions, and continuous improvement. 
                    I am comfortable working in an agile environment and enjoy solving complex problems through efficient and innovative approaches</p>
                </div> 
                
                <div class="service">
                    <h3>View</h3>
                    <p>I am always open to new opportunities and challenges. If you're looking for a dedicated 
                    React developer who can bring your ideas to life and help your business thrive, feel free to reach out. 
                    I'm excited to collaborate and contribute to the success of your projects</p>
                </div> 
            </div> 
        </section>
    )
}