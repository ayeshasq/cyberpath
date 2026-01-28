// Main Application Logic

document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentDiv = document.getElementById('content');
    
    // Navigation handler
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load content
            loadSection(section);
        });
    });
    
    // Load initial section
    loadSection('overview');
    
    // Section loading function
    function loadSection(section) {
        contentDiv.innerHTML = '';
        contentDiv.className = `section-${section}`;
        
        switch(section) {
            case 'overview':
                renderOverview();
                break;
            case 'education':
                renderEducation();
                break;
            case 'skills':
                renderSkills();
                break;
            case 'certifications':
                renderCertifications();
                break;
            case 'labs':
                renderLabs();
                break;
            case 'careers':
                renderCareers();
                break;
            case 'events':
                renderEvents();
                break;
            default:
                renderOverview();
        }
    }
    
    function renderOverview() {
        contentDiv.innerHTML = cyberPathData.overview.content;
    }
    
    function renderEducation() {
        let html = `
            <div class="section-header">
                <h2>${cyberPathData.education.title}</h2>
                <p class="section-intro">Choose your educational path based on your circumstances, time, and goals.</p>
            </div>
            <div class="education-paths">
        `;
        
        cyberPathData.education.paths.forEach(path => {
            html += `
                <div class="education-card">
                    <div class="card-header">
                        <h3>${path.level}</h3>
                        <span class="duration">${path.duration}</span>
                    </div>
                    <div class="card-body">
                        <div class="info-section">
                            <h4>Recommended Programs:</h4>
                            <ul>
                                ${path.recommended.map(prog => `<li>${prog}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="info-section">
                            <h4>Key Subjects:</h4>
                            <ul class="subjects-list">
                                ${path.keySubjects.map(subject => `<li>${subject}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="pros-cons">
                            <div class="pros">
                                <strong>✓ Pros:</strong> ${path.pros}
                            </div>
                            <div class="cons">
                                <strong>✗ Cons:</strong> ${path.cons}
                            </div>
                        </div>
                        <div class="outcome">
                            <strong>Career Outcome:</strong> ${path.outcome}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
        contentDiv.innerHTML = html;
    }
    
    function renderSkills() {
        let html = `
            <div class="section-header">
                <h2>${cyberPathData.skills.title}</h2>
                <p class="section-intro">Master these skills progressively to build your cybersecurity expertise.</p>
            </div>
        `;
        
        cyberPathData.skills.categories.forEach(category => {
            html += `
                <div class="skills-category">
                    <div class="category-header">
                        <h3>${category.category}</h3>
                        <span class="level-badge level-${category.level.toLowerCase()}">${category.level}</span>
                    </div>
                    <div class="skills-grid">
            `;
            
            category.skills.forEach(skill => {
                html += `
                    <div class="skill-card">
                        <h4>${skill.name}</h4>
                        <p class="skill-details">${skill.details}</p>
                        <div class="skill-meta">
                            <span class="time-estimate">⏱️ ${skill.time}</span>
                        </div>
                        <div class="resources">
                            <strong>Resources:</strong>
                            <ul>
                                ${skill.resources.map(res => `<li>${res}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        contentDiv.innerHTML = html;
    }
    
    function renderCertifications() {
        let html = `
            <div class="section-header">
                <h2>${cyberPathData.certifications.title}</h2>
                <p class="section-intro">Industry-recognized certifications to validate your skills and boost your career.</p>
            </div>
            
            <div class="cert-path-overview">
                <h3>🎯 Recommended Path</h3>
                <div class="path-timeline">
                    <div class="path-stage">
                        <strong>Beginner:</strong>
                        ${cyberPathData.certifications.certPath.beginner.join(' → ')}
                    </div>
                    <div class="path-stage">
                        <strong>Intermediate:</strong>
                        ${cyberPathData.certifications.certPath.intermediate.join(' → ')}
                    </div>
                    <div class="path-stage">
                        <strong>Advanced:</strong>
                        ${cyberPathData.certifications.certPath.advanced.join(' → ')}
                    </div>
                </div>
            </div>
        `;
        
        cyberPathData.certifications.levels.forEach(level => {
            html += `
                <div class="cert-level">
                    <div class="level-header">
                        <h3>${level.level}</h3>
                        <p>${level.description}</p>
                    </div>
                    <div class="certs-grid">
            `;
            
            level.certs.forEach(cert => {
                html += `
                    <div class="cert-card">
                        <div class="cert-title">
                            <h4>${cert.name}</h4>
                            <span class="cert-cost">${cert.cost}</span>
                        </div>
                        <div class="cert-meta">
                            <span class="difficulty ${cert.difficulty.toLowerCase()}">${cert.difficulty}</span>
                            <span class="duration">${cert.duration}</span>
                        </div>
                        <p class="cert-topics"><strong>Topics:</strong> ${cert.topics}</p>
                        <p class="cert-jobs"><strong>Target Jobs:</strong> ${cert.jobs}</p>
                        <p class="cert-why"><strong>Why this cert:</strong> ${cert.why}</p>
                        ${cert.prerequisites ? `<p class="cert-prereq"><strong>Prerequisites:</strong> ${cert.prerequisites}</p>` : ''}
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        contentDiv.innerHTML = html;
    }
    
    function renderLabs() {
        let html = `
            <div class="section-header">
                <h2>${cyberPathData.labs.title}</h2>
                <p class="section-intro">Practice makes perfect. These platforms offer hands-on experience with real-world scenarios.</p>
            </div>
            
            <div class="recommended-path">
                <h3>📍 Recommended Learning Path</h3>
                <ol class="path-list">
                    ${cyberPathData.labs.recommendedPath.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="platforms-grid">
        `;
        
        cyberPathData.labs.platforms.forEach(platform => {
            html += `
                <div class="platform-card">
                    <div class="platform-header">
                        <h3>${platform.name}</h3>
                        <span class="platform-type">${platform.type}</span>
                    </div>
                    <div class="platform-meta">
                        <span class="cost">${platform.cost}</span>
                        <span class="difficulty">${platform.difficulty}</span>
                    </div>
                    <p class="platform-focus"><strong>Focus:</strong> ${platform.focus}</p>
                    <div class="platform-features">
                        <strong>Features:</strong>
                        <ul>
                            ${platform.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <p class="platform-best"><strong>Best For:</strong> ${platform.bestFor}</p>
                    <a href="https://${platform.url}" target="_blank" class="platform-link">Visit ${platform.name} →</a>
                </div>
            `;
        });
        
        html += `</div>`;
        contentDiv.innerHTML = html;
    }
    
    function renderCareers() {
        let html = `
            <div class="section-header">
                <h2>${cyberPathData.careers.title}</h2>
                <p class="section-intro">Explore different career paths in cybersecurity, from entry-level to executive positions.</p>
            </div>
            <div class="careers-grid">
        `;
        
        cyberPathData.careers.roles.forEach(role => {
            html += `
                <div class="career-card">
                    <div class="career-header">
                        <h3>${role.title}</h3>
                        <div class="career-meta">
                            <span class="level">${role.level}</span>
                            <span class="salary">${role.salary}</span>
                        </div>
                    </div>
                    <p class="career-description">${role.description}</p>
                    
                    <div class="career-section">
                        <h4>Key Responsibilities:</h4>
                        <ul>
                            ${role.responsibilities.slice(0, 4).map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="career-section">
                        <h4>Required Skills:</h4>
                        <ul class="skills-tags">
                            ${role.requiredSkills.map(skill => `<li class="skill-tag">${skill}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="career-section">
                        <h4>Recommended Certifications:</h4>
                        <p class="certs">${role.certifications.join(', ')}</p>
                    </div>
                    
                    <div class="career-section">
                        <h4>Education:</h4>
                        <p>${role.education}</p>
                    </div>
                    
                    <div class="career-path">
                        <strong>Career Progression:</strong>
                        <p>${role.careerPath}</p>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
        contentDiv.innerHTML = html;
    }
    
    function renderEvents() {
        let html = `
            <div class="section-header">
                <h2>${cyberPathData.events.title}</h2>
                <p class="section-intro">Network, compete, and learn at cybersecurity events, CTFs, and conferences.</p>
            </div>
            
            <div class="how-to-start">
                <h3>🚀 How to Get Started</h3>
                <ul>
                    ${cyberPathData.events.howToStart.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="events-section">
                <h3>🏆 Capture The Flag (CTF) Competitions</h3>
                <div class="events-grid">
        `;
        
        cyberPathData.events.ctfs.forEach(ctf => {
            html += `
                <div class="event-card ctf-card">
                    <div class="event-header">
                        <h4>${ctf.name}</h4>
                        <span class="difficulty-badge ${ctf.difficulty.toLowerCase()}">${ctf.difficulty}</span>
                    </div>
                    <div class="event-meta">
                        <span class="type">${ctf.type}</span>
                        <span class="frequency">${ctf.frequency}</span>
                    </div>
                    <p class="event-description">${ctf.description}</p>
                    <p class="event-why"><strong>Why participate:</strong> ${ctf.why}</p>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
            
            <div class="events-section">
                <h3>🎤 Security Conferences</h3>
                <div class="events-grid">
        `;
        
        cyberPathData.events.conferences.forEach(conf => {
            html += `
                <div class="event-card conf-card">
                    <div class="event-header">
                        <h4>${conf.name}</h4>
                        <span class="cost-badge">${conf.cost}</span>
                    </div>
                    <div class="event-meta">
                        <span class="location">📍 ${conf.location}</span>
                        <span class="when">📅 ${conf.when}</span>
                    </div>
                    <p class="attendees"><strong>Attendees:</strong> ${conf.attendees}</p>
                    <p class="focus"><strong>Focus:</strong> ${conf.focus}</p>
                    <p class="event-description">${conf.description}</p>
                    <p class="event-why"><strong>Why attend:</strong> ${conf.why}</p>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
            
            <div class="events-section">
                <h3>🏛️ Professional Organizations</h3>
                <div class="orgs-grid">
        `;
        
        cyberPathData.events.organizations.forEach(org => {
            html += `
                <div class="org-card">
                    <h4>${org.name}</h4>
                    <span class="org-type">${org.type}</span>
                    <p><strong>Focus:</strong> ${org.focus}</p>
                    <p><strong>Benefits:</strong> ${org.benefits}</p>
                    <p><strong>How to Join:</strong> ${org.join}</p>
                    <p class="event-why"><strong>Why join:</strong> ${org.why}</p>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        contentDiv.innerHTML = html;
    }
});
