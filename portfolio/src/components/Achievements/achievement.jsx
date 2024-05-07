import React, { useState } from 'react';
import '../../components/Achievements/achievement.css';
import hacksus from '../../assets/hackathon.jpg'
import intern from '../../assets/intern-certific.png';
function Achievement() {
    // State to track the selected tab
    const [selectedTab, setSelectedTab] = useState('achievements');

    // Event handlers for the buttons
    const handleAchievmentsClick = () => setSelectedTab('achievements');
    const handleCertificatesClick = () => setSelectedTab('certificates');
    const handleInternshipsClick = () => setSelectedTab('internships');

    return (
        <div className='mainthree'>
            {/* Buttons */}
            <div className='threebuttons' style={{ '--underline-left': `${['achievements', 'certificates', 'internships'].indexOf(selectedTab) * 120}px` }}>
                <button
                    className={`achi ${selectedTab === 'achievements' ? 'active' : ''}`}
                    onClick={handleAchievmentsClick}
                >
                    Achievements
                </button>
                <button
                    className={`certi ${selectedTab === 'certificates' ? 'active' : ''}`}
                    onClick={handleCertificatesClick}
                >
                    Certificates
                </button>
                <button
                    className={`intern ${selectedTab === 'internships' ? 'active' : ''}`}
                    onClick={handleInternshipsClick}
                >
                    Internships
                </button>
            </div>

            <div className='extracontent'>
                {selectedTab === 'achievements' && (
                    <div className='achieve'>
                        <h2>Achievements</h2>
                        <div className='hacksus'>
                            <img src={hacksus} alt="hackathon" />
                            <div className='hackinfo'>
                                <h1>HackSus Edition III</h1>
                            </div>
                        </div>
                       
                    </div>
                )}
                {selectedTab === 'certificates' && (
                    <div className='certi'>
                        <h2>Certificates</h2>
                        <p>Display the content for achievements here...</p>
                    </div>
                )}
                {selectedTab === 'internships' && (
                    <div className='achieve'>
                        <h2>Internship</h2>
                        <div className='intern'>
                            <img src={intern} alt="hackathon" />
                            <div className='interninfo'>
                                <h1>HackSus Edition III</h1>
                            </div>
                        </div>
                       
                    </div>
                )}
            </div>
        </div>
    );
}

export default Achievement;
