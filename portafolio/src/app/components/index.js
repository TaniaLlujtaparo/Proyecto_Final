<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <div className="main">
    <div className="container">
      <div className="profile">
        <figure className="profile-img">
          <img src="assets/images/Tania.jpg" />
        </figure>
        <div className="profile-info">
          <h1>Tania Llujtaparo</h1>
          <p>Software Engineer</p>
          <div className="profile-social">
            <a href="https://github.com" target="_blank">
              <img
                src="assets/icons/github.svg"
                alt="github"
                className="profile-social-img"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src="assets/icons/twitter.svg"
                alt="twitter"
                className="profile-social-img"
              />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img
                src="assets/icons/linkedin.svg"
                alt="linkedin"
                className="profile-social-img"
              />
            </a>
            <a href="https://youtube.com" target="_blank">
              <img
                src="assets/icons/youtube.svg"
                alt="youtube"
                className="profile-social-img"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="facts">
        <div className="fact-item">
          <h2>7</h2>
          <p>Years of work experience</p>
        </div>
        <div className="fact-item">
          <h2>50+</h2>
          <p>Completed projects</p>
        </div>
        <div className="fact-item">
          <h2>20+</h2>
          <p>Satisfied customers</p>
        </div>
      </div>
      <div className="buttons">
        <button className="btn-primary" onclick="download()">
          <div className="btn-content">
            <p>Download CV</p>
            <img
              src="assets/icons/download.svg"
              alt="arrow"
              className="btn-primary-img"
            />
          </div>
        </button>
        <a className="btn-secondary" href="mailto:contact@me.com">
          <div className="btn-content">
            <p>Contact me</p>
          </div>
        </a>
      </div>
      <div className="tabs">
        <button className="tabs-background-item active">
          <p className="tabs-background-item-text">Portfolio</p>
        </button>
        <button className="tabs-background-item">
          <p className="tabs-background-item-text">Skills</p>
        </button>
      </div>
      <div className="project-container">
        <div className="content-card-img">
          <img className="image" src="assets/images/Hero_2.png" />
          <div className="content-card-img-overlay" />
          <div className="content-card-img-detail">
            <p className="title">SmarterTrading411</p>
            <p className="detail">
              Landing page of SmarterTrading411 created using WordPress
            </p>
            <button className="btn">
              <img src="assets/icons/link.svg" alt="link" />
            </button>
          </div>
        </div>
        <div className="content-card-img">
          <img className="image" src="assets/images/bussiness_man.png" />
          <div className="content-card-img-overlay" />
        </div>
        <div className="content-card-img">
          <img
            className="image grayscale"
            src="assets/images/pictures_wall.jpeg"
          />
          <div className="content-card-img-overlay" />
        </div>
        <div className="content-card-img">
          <img className="image" src="assets/images/kitchen.jpeg" />
          <div className="content-card-img-overlay" />
        </div>
        <div className="content-card-img">
          <img className="image" src="assets/images/mobile_app.png" />
          <div className="content-card-img-overlay" />
        </div>
        <div className="content-card-img">
          <img
            className="image grayscale"
            src="assets/images/issima_page.png"
          />
          <div className="content-card-img-overlay" />
        </div>
      </div>
    </div>
  </div>
</>
