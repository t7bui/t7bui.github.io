import React, { useState, useEffect } from 'react';
import "../style/Projects.css";
import fallen_star_mockup from '../assets/fallen_kiosk_2.jpg';
import plauto_logo from '../assets/plauto_logo.png';
import plauto_mockup from '../assets/plauto_laptop.png'

function Projects() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 440);
        };
        window.addEventListener('resize', handleResize);
        
        //Initial check on component mount
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    const logoMobileStyle = {
        width: '100px'
    };

    const plautoBackground = {
        'background-image': 'linear-gradient(to right, #FCD4FF , #D8F7FF)',
    };
    const kioskBackground = {
        'background-image': 'linear-gradient(to right, #92CCF6 , #FFFFFF)'
    };
    
    const kioskLogoColor = {
        color: '#3C90CD'
    };

    return(
        <div id="projects">
            <a target="_blank" href="https://t7bui.notion.site/Plauto-Plan-Automatically-9906f037827f44b185c929c4f0878a55">
                <div className="test-proj">
                    <div className="green" style={plautoBackground}>
                        <img src={plauto_mockup} />
                        {isSmallScreen && <img src={plauto_logo} style={logoMobileStyle}/>}
                        {isSmallScreen && (
                            <p>Provide individuals new and less tedious way of planning projects.</p>
                        )}
                    </div>
                    {!isSmallScreen && (
                        <div className="blue">
                            <img src={plauto_logo} />
                            <p>Provide individuals new and less tedious way of planning projects.</p>
                        </div>
                    )}
                </div>
            </a>

            <a target="_blank" href="https://t7bui.notion.site/Fallen-Star-Kiosk-4e091993b5b34af385875947de0e28b8">
                <div className="test-proj">
                    <div className="green" style={kioskBackground}>
                        <img src={fallen_star_mockup}/>
                        {isSmallScreen && (
                            <><h3 style={kioskLogoColor}>Fallen Star Kiosk</h3></>
                        )}
                        {isSmallScreen && (
                            <p>Help UCSD visitors and new students get the most out of the campus tour experience.</p>
                        )}
                    </div>
                    {!isSmallScreen && (
                        <div className="blue">
                            <h3 style={kioskLogoColor}>Fallen Star Kiosk</h3>
                            <p>Help UCSD visitors and new students get the most out of the campus tour experience</p>
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
}

export default Projects;