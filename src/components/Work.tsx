import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "CodeGalaxy",
    category: "Web Application",
    tools: "JavaScript, Node.js, Express, MongoDB",
    description: "A web app for sharing and discovering code snippets across multiple programming languages. Explore the universe of code with developers worldwide.",
    link: "https://github.com/ShreyasBairyKS/CodeGalaxy",
    image: "/images/codegalaxy.png",
  },
  {
    name: "Hideout",
    category: "Web Application",
    tools: "JavaScript, Web Technologies, Steganography",
    description: "A web app that uses steganography to hide secret messages within images, enabling covert and secure communication.",
    link: "https://github.com/ShreyasBairyKS/Hideout",
    image: "/images/hideout.png",
  },
  {
    name: "ArtFolio",
    category: "Mobile Application",
    tools: "Dart, Flutter, UI/UX",
    description: "A beautifully designed mobile app for artists to showcase their portfolios, connect with art enthusiasts, and sell artwork.",
    link: "https://github.com/ShreyasBairyKS/ArtFolio",
    image: "/images/artfolio.jpeg",
  },
  {
    name: "EatWise",
    category: "Mobile Application",
    tools: "Dart, Flutter, Nutrition API",
    description: "A mobile app that helps users make healthier food choices by providing nutritional information and personalized meal recommendations.",
    link: "https://github.com/ShreyasBairyKS/EatWise",
    image: "/images/eatwise.png",
  },
  {
    name: "MedVet AI",
    category: "AI Application",
    tools: "JavaScript, AI, Machine Learning",
    description: "An AI-powered application for medical and veterinary diagnostics, leveraging machine learning for accurate health assessments.",
    link: "https://github.com/ShreyasBairyKS/MedVet-AI",
    image: "/images/medvet ai.png",
  },
  {
    name: "Amazon Review Sentiment Analysis",
    category: "Big Data & NLP",
    tools: "PySpark, NLP, Machine Learning",
    description: "A big data project analyzing Amazon product reviews using PySpark and NLP to classify sentiment and extract customer insights.",
    link: "https://github.com/ShreyasBairyKS/Amazon-Review-Sentiment-Analysis-using-Spark",
    image: "/images/amazon rewiew.png",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <h4>Description</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
