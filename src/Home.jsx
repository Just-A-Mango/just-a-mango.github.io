import './Home.css'
import {ansiShadow, useAsciiText} from 'react-ascii-text';
import {useState} from "react";


function Home() {
    const [txt, setTxt] = useState("Horace Hoff")

    const asciiTextRef = useAsciiText({
        animationLoop: false,
        fadeInOnly: true,
        animationDelay: 0,
        font: ansiShadow,
        text: txt,
        isAnimated: true,
        animationInterval: 0,
    });

    const handleButtonClick = () => {
        console.log("handled")
        setTxt("New Text!"); // Update text on button press
    };

    const repositories = [
        {
            name: "TRM-ENGINE",
            desc: "A lightweight terminal-based game engine built with Rust",
            url: "https://github.com/horacehoff/trm-engine",
            lang: "Rust"
        },
        {
            name: "LPI",
            desc: "An image format that compresses by clustering pixels by color using simple additions and multiplications",
            url: "https://github.com/horacehoff/lpi",
            lang: "Python"
        },
        {
            name: "KnowledgeQuantify",
            desc: "An experimental machine learning model to quantify knowledge density",
            url: "https://github.com/horacehoff/knowledge-quantify",
            lang: "Python"
        },
        {
            name: "Flux",
            desc: "An experimental easy-to-use programming language written in C++",
            url: "https://github.com/horacehoff/flux",
            lang: "C++"
        },
        {
            name: "DOUBLE16",
            desc: "A code marketplace made for buying and selling code snippets.",
            url: "https://github.com/horacehoff/double16",
            banner: "./assets/double16.png",
            lang: "React"
        },
        {
            name: "Veber",
            desc: "An experimental digital, fully-encrypted, secure monetary system.",
            url: "https://github.com/horacehoff/veber",
            lang: "Rust"
        }
    ]



    let isProjectHovered = false;
    function slowScroll(elementId, duration) {
        const element = document.getElementById(elementId);
        const start = element.scrollLeft;
        const end = element.scrollWidth - element.clientWidth; // Max scroll position
        const change = end - start;
        const startTime = performance.now();

        function scrollStep(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1

            element.scrollLeft = start + change * progress; // Set scroll position

            if (progress < 1) {
                requestAnimationFrame(scrollStep); // Continue animation
                if (!isProjectHovered) {
                    element.scrollLeft = 0
                }
            }
        }

        requestAnimationFrame(scrollStep);
    }

  return (
      <>
          <div className="bg"></div>
          <pre ref={asciiTextRef} id="testpre"></pre>
          <a className="cta" id="cta-mail" href="mailto:horace.hoff@gmail.com" target="_blank"><span className="emojifix" style={{
              position: "relative",
              marginRight: "6px"
          }}>✉️</span>Contact me</a>
          <a className="cta" id="cta-github" href="https://github.com/horacehoff" target="_blank" style={{marginLeft: "13px"}}>
              <svg width="24px" height="24px" strokeWidth="1.9" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg" color="white">
                  <path
                      d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                      stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#fff" strokeWidth="1.9"
                        strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              GitHub</a>
          <a className="cta" id="cta-linkedin" href="https://www.linkedin.com/in/horace-hoff/" target="_blank"
             style={{marginLeft: "15px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 72 72" width="24px"
                   className="cta-linkedin">
                  <g fill="none" fillRule="evenodd">
                      <path
                          d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                          fill="#007EBB"/>
                      <path
                          d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                          fill="#FFF"/>
                  </g>
              </svg>
              LinkedIn</a>
          <br/><br/>
          <h1>Hi, I'm Horace.</h1>
          <h2>I enjoy thinking and imagining, making rockets, creating programs, and making websites with
              designs I enjoy.</h2>
          <h3>Below are most of my projects.</h3>
          <ul className="projects">
              {
                  repositories.map((data, index) =>
                      <>
                          <li key={index} onMouseEnter={() => {
                              isProjectHovered = true
                              if (document.getElementById(index).scrollLeft === 0) {
                                  slowScroll(index, 3000)
                              }
                          }}
                              onMouseLeave={() => {
                                  isProjectHovered = false
                                  if (document.getElementById(index).scrollLeft === document.getElementById(index).scrollWidth - document.getElementById(index).clientWidth) {
                                      document.getElementById(index).scrollTo({
                                          left: 0,
                                          behavior: "smooth"
                                      })
                                  }
                          }}>
                              <a href={data.url} target="_blank">
                                  <h4>{data.name} <span>{data.lang}</span></h4>
                                  <h5 id={index} className="no-scrollbar" onMouseEnter={() => {
                                      handleButtonClick()
                                  }}>{data.desc}</h5>
                              </a>
                          </li>
                      </>
                  )
              }
          </ul>

      </>
  )
}

export default Home