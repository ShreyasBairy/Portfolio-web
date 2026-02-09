import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GM Vidyanikethan Public School</h4>
                <h5>Primary & Secondary Education</h5>
              </div>
              <h3>2009 - 2021</h3>
            </div>
            <p>
              Completed schooling with a strong foundation in academics and
              extracurricular activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Vidyodaya PU College</h4>
                <h5>Pre University • Udupi, India</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Percentage: 97% | JEE Mains: 97 Percentile.
              Excelled in Science stream with focus on Physics, Chemistry, and Mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BMS College of Engineering</h4>
                <h5>B.E. in Data Science • Bengaluru, India</h5>
              </div>
              <h3>2023 - NOW</h3>
            </div>
            <p>
              CGPA: 9.30 | Currently pursuing Bachelor of Engineering with
              specialization in Data Science and AI technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
