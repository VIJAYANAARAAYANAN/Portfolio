import React, { useEffect, useRef } from 'react';

import '../../components/Skill/skill.css';

import html from '../../assets/htmlicon.png';
import css from '../../assets/cssicon.png';
import javascript from '../../assets/javascript.gif';
import react from '../../assets/react.gif';
import java from '../../assets/java.gif';
import express from '../../assets/exprs.png';
import bootstrap from '../../assets/bootstrap.png';
import mongo from '../../assets/mongo.png';
import git from '../../assets/gitsmal.png';
import mysql from '../../assets/mysql.png'
function Skill() {
    // Ref for the skills section, including the header
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add 'show' class to the header
                    const headerElement = entry.target.querySelector('.skillheader');
                    if (headerElement) {
                        headerElement.classList.add('show');
                    }

                    // Add 'show' class to each skill element
                    const skillElements = entry.target.querySelectorAll('.skill');
                    skillElements.forEach((skillElement) => {
                        skillElement.classList.add('show');
                        
                        const progressBars = skillElement.querySelectorAll('progress');
                        progressBars.forEach((progressBar) => {
                            const targetValue = parseInt(progressBar.getAttribute('value'), 10);
                            progressBar.value = 0; // Start from 0

                            const duration = 1500;
                            const startTime = performance.now();

                            function animateProgress(timestamp) {
                                const elapsed = timestamp - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                progressBar.value = progress * targetValue;

                                if (progress < 1) {
                                    requestAnimationFrame(animateProgress);
                                }
                            }

                            requestAnimationFrame(animateProgress);
                        });
                    });
                    const textElements = entry.target.querySelectorAll('.text-element');
                    textElements.forEach((textElement) => {
                        textElement.classList.add('show');
                    });

                    const imageElements = entry.target.querySelectorAll('.image-element');
                    imageElements.forEach((imageElement) => {
                        imageElement.classList.add('show');
                    });

                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <>
       
            <div className="skillheader slide-in-top">
                <div className="title">
                    <h1>My <span className="skillcolor">Skills</span></h1>
                </div>
            </div>
            <div className="skills-section" ref={skillsRef}>
                <div className="skills-grid">
                    {/* Skill items */}
                    <div className="skill">
                        <div className="skill-icon">
                            <img src={html} alt="HTML Icon" />
                            <img src={css} alt="CSS Icon" />
                            <p>HTML|CSS</p>
                        </div>
                        <div className="skill-progress">
                            <progress value="80" max="100"></progress>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <img src={javascript} alt="JavaScript Icon" />
                            <p>JavaScript</p>
                        </div>
                        <div class="skill-progress">
                            <progress value="70" max="100"></progress>
                        </div>
                    </div>

                    <div className="skill">
                        <div class="skill-icon">
                            <img src={java} alt="Java Icon" />
                            <p>Java</p>
                        </div>
                        <div className="skill-progress">
                            <progress value="90" max="100"></progress>
                        </div>
                 </div>

                    <div className="skill">
                        <div class="skill-icon">
                            <img src={react} alt="React Icon" />
                            <p>React</p>
                        </div>
                        <div className="skill-progress">
                            <progress value="70" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subskills">
                <div className="techskills">
                    <h3>Libraries and Frameworks</h3>
                    <div className="subimgto">
                        <img src={express} alt="Express.js" title="Express.js" />
                        <img src={bootstrap} alt="Bootstrap" title="Bootstrap" />
                    </div>
                </div>
                <div className="techskills">
                    <h3>Tools and Technologies</h3>
                    <div className="subimgto">
                        <img src={mongo} alt="MongoDB" title="MongoDB" />
                        <img src={git} alt="Git" title="Git" />
                        <img src={mysql} alt="SQL" title='MySql' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill;
