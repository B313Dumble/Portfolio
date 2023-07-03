import React from "react";
import "./About.css";

export default function About() {
  return (
    <section class="about-contant">
      <h2 class="about-title ">What I do</h2>

      <div class="services">
        <div class="service">
          <h3>Design + Development</h3>
          <p>
            As a React developer, I'm passionate about building interactive and
            user-friendly web applications. I have honed my skills in
            JavaScript, HTML, CSS, and, of course, React to create seamless
            digital experiences.
          </p>
        </div>

        <div class="service">
          <h3>Ability</h3>
          <p>
            One of my key strengths is my ability to collaborate effectively
            with designers, product managers, and fellow developers to transform
            ideas into reality. I value clean code, maintainable solutions, and
            continuous improvement. I can easily learn new topics and put them
            into practice
          </p>
        </div>

        <div class="service">
          <h3>Courses</h3>
          <ul className="ulEl">
            <li>
              <a className="aEl" href="https://scrimba.com/learn/htmlandcss">
                Learn HTML and CSS - Scrimba
              </a>
            </li>
            <li>
              <a
                className="aEl"
                href="https://scrimba.com/learn/learnjavascript"
              >
                Learn JavaScript - Scrimba
              </a>
            </li>
            <li>
              <a className="aEl" href="https://scrimba.com/learn/learnreact">
                Learn React - Scrimba
              </a>
            </li>
            <li>
              <a
                className="aEl"
                href="https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22051328?start=15#overview"
              >
                The Web Developer Bootcamp 2022-(26 Section) - Udemy
              </a>
            </li>
            <li>
              <a
                className="aEl"
                href="https://www.udemy.com/course/understanding-html-and-css/learn/lecture/29889216?start=0#overview"
              >
                Understanding HTML and CSS - Udemy
              </a>
            </li>
            <li>
              <a
                className="aEl"
                href="https://www.udemy.com/course/modern-javascript/learn/lecture/9862404?start=15#overview"
              >
                The Modern JavaScript Bootcamp - Udemy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
