import profile from '../assets/thanh-helen-draw.png';
import githubLogo from '../assets/github-mark.png';
import linkedinLogo from '../assets/LI-In-Bug.png';
import "../style/HeroSection.css";

function HeroSection() {
    const linkedinStyleLink = {
        width: '21%',
    };
    return(
        <div id="home-container">
            <div className="welcome-msg">
                <div>
                    <h1>Hi, I'm <span className="name">Thanh Bui</span>!</h1>
                </div>
                <div>
                    <p>
                    As someone deeply committed to enhancing education, 
                    I'm driven by a passion for design and data analytics. 
                    My goal is to create inclusive designs and use data-driven insights 
                    to meaningfully advance education. 
                    </p>
                </div>
                <div className="other-logos">
                    <a href="https://github.com/t7bui" target="_blank">
                        <img src={githubLogo}/>
                    </a>
                    <a style={linkedinStyleLink} href="https://www.linkedin.com/in/thbui/" target="_blank">
                        <img src={linkedinLogo}/>
                    </a>
                </div>
            </div>
            <div className="profile-img">
                <img src={profile} />
            </div> 
        </div>
    );
}

export default HeroSection;