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

            <div className='content'>
                {selectedTab === 'achievements' && (
                    <div>
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
                    <div>
                        <h2>Certificates</h2>
                        <p>Display the content for achievements here...</p>
                    </div>
                )}
                {selectedTab === 'internships' && (
                    <div>
                        <h2>Internships</h2>
                        <div className='intern'>
                            <img src={intern} alt="Internship" />
                            <p><p>Display the content for achievements here...</p></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Achievement;
