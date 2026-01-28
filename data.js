// Comprehensive Cybersecurity Career Data

const cyberPathData = {
    overview: {
        title: "Welcome to Your Cybersecurity Journey",
        content: `
            <div class="welcome-section">
                <h2>Start Your Cybersecurity Career Here</h2>
                <p>This interactive guide will help you navigate from complete beginner to cybersecurity professional. Whether you're a student, career changer, or tech enthusiast, this roadmap covers everything you need.</p>
                
                <div class="journey-stages">
                    <div class="stage">
                        <div class="stage-icon">📚</div>
                        <h3>Foundation (0-6 months)</h3>
                        <p>Learn IT basics, networking, and programming fundamentals</p>
                    </div>
                    <div class="stage">
                        <div class="stage-icon">🎯</div>
                        <h3>Specialization (6-12 months)</h3>
                        <p>Choose your path and gain hands-on skills</p>
                    </div>
                    <div class="stage">
                        <div class="stage-icon">🏆</div>
                        <h3>Professional (12+ months)</h3>
                        <p>Get certified, build portfolio, land your dream job</p>
                    </div>
                </div>

                <div class="quick-start">
                    <h3>Quick Start Guide</h3>
                    <ol>
                        <li><strong>Choose Your Education Path:</strong> Bachelor's, Master's, or Self-taught</li>
                        <li><strong>Build Core Skills:</strong> Networking, Linux, Python, Security Fundamentals</li>
                        <li><strong>Get Hands-On:</strong> Practice on labs like HackTheBox, TryHackMe</li>
                        <li><strong>Earn Certifications:</strong> Start with CompTIA Security+</li>
                        <li><strong>Specialize:</strong> Pick a career role and master it</li>
                        <li><strong>Network & Compete:</strong> Join CTFs, attend conferences</li>
                    </ol>
                </div>
            </div>
        `
    },

    education: {
        title: "Education Paths",
        paths: [
            {
                level: "Bachelor's Degree",
                duration: "4 years",
                recommended: [
                    "Computer Science with Cybersecurity specialization",
                    "Information Security",
                    "Computer Engineering",
                    "Information Technology"
                ],
                keySubjects: [
                    "Data Structures & Algorithms",
                    "Computer Networks",
                    "Operating Systems",
                    "Database Systems",
                    "Cryptography",
                    "Network Security",
                    "Ethical Hacking",
                    "Digital Forensics",
                    "Secure Software Development",
                    "Security Risk Management"
                ],
                pros: "Strong theoretical foundation, comprehensive curriculum, better job prospects",
                cons: "Time-intensive, expensive, may lack cutting-edge practical skills",
                outcome: "Entry-level positions: Security Analyst, SOC Analyst, Junior Penetration Tester"
            },
            {
                level: "Master's Degree",
                duration: "2 years",
                recommended: [
                    "Master's in Cybersecurity",
                    "MS in Information Security",
                    "MS in Computer Science (Security focus)",
                    "Master's in Digital Forensics"
                ],
                keySubjects: [
                    "Advanced Network Security",
                    "Malware Analysis",
                    "Cloud Security",
                    "AI/ML in Cybersecurity",
                    "Incident Response & Forensics",
                    "Security Architecture",
                    "Vulnerability Research",
                    "Threat Intelligence",
                    "Security Governance",
                    "Research Thesis/Project"
                ],
                pros: "Advanced knowledge, research opportunities, leadership roles, higher salary potential",
                cons: "Requires bachelor's degree, expensive, may be theoretical",
                outcome: "Mid-senior roles: Security Engineer, Security Architect, Researcher, Manager"
            },
            {
                level: "Self-Taught / Bootcamp",
                duration: "6-18 months",
                recommended: [
                    "Online platforms: Cybrary, Coursera, Udemy",
                    "Bootcamps: Fullstack Academy, Springboard, SANS",
                    "Free resources: YouTube, FreeCodeCamp, OWASP"
                ],
                keySubjects: [
                    "Linux fundamentals",
                    "Networking (TCP/IP, DNS, HTTP)",
                    "Python/Bash scripting",
                    "Web application security",
                    "Penetration testing basics",
                    "Security tools (Wireshark, Metasploit, Burp Suite)",
                    "CTF challenges",
                    "Industry certifications prep"
                ],
                pros: "Flexible, cost-effective, hands-on focused, fast-paced",
                cons: "Requires discipline, gaps in theory, competitive job market without degree",
                outcome: "Entry-level with strong portfolio: SOC Analyst, Security Technician, Bug Bounty Hunter"
            }
        ]
    },

    skills: {
        title: "Essential Skills & Tools",
        categories: [
            {
                category: "Core IT Fundamentals",
                level: "Foundation",
                skills: [
                    {
                        name: "Networking",
                        details: "TCP/IP, OSI Model, DNS, DHCP, Routing, Switching, Firewalls",
                        resources: ["CCNA study materials", "Professor Messer videos", "Practical Networking"],
                        time: "2-3 months"
                    },
                    {
                        name: "Operating Systems",
                        details: "Linux (Ubuntu, Kali), Windows Server, Command Line, Shell Scripting",
                        resources: ["Linux Journey", "OverTheWire Bandit", "Linux Foundation courses"],
                        time: "2-3 months"
                    },
                    {
                        name: "Programming",
                        details: "Python (primary), Bash/PowerShell, JavaScript basics",
                        resources: ["Automate the Boring Stuff", "Python for Cybersecurity", "Codecademy"],
                        time: "3-4 months"
                    }
                ]
            },
            {
                category: "Security Fundamentals",
                level: "Intermediate",
                skills: [
                    {
                        name: "Security Concepts",
                        details: "CIA Triad, Authentication, Authorization, Encryption, Hashing, PKI",
                        resources: ["CompTIA Security+ course", "Cybrary Security+ path"],
                        time: "1-2 months"
                    },
                    {
                        name: "Web Application Security",
                        details: "OWASP Top 10, SQL Injection, XSS, CSRF, Security Headers",
                        resources: ["OWASP WebGoat", "PortSwigger Web Security Academy", "PentesterLab"],
                        time: "2-3 months"
                    },
                    {
                        name: "Network Security",
                        details: "Firewalls, IDS/IPS, VPNs, Network Segmentation, Packet Analysis",
                        resources: ["Wireshark tutorials", "Security Onion", "SANS SEC401"],
                        time: "2-3 months"
                    }
                ]
            },
            {
                category: "Specialized Skills",
                level: "Advanced",
                skills: [
                    {
                        name: "Penetration Testing",
                        details: "Reconnaissance, Enumeration, Exploitation, Privilege Escalation, Reporting",
                        resources: ["HackTheBox", "TryHackMe", "PentesterAcademy", "OSCP labs"],
                        time: "4-6 months"
                    },
                    {
                        name: "Digital Forensics",
                        details: "Disk forensics, Memory analysis, Network forensics, Mobile forensics, Chain of custody",
                        resources: ["Autopsy tutorials", "Volatility Framework", "SANS FOR500"],
                        time: "3-4 months"
                    },
                    {
                        name: "Malware Analysis",
                        details: "Static analysis, Dynamic analysis, Reverse engineering, Debugging",
                        resources: ["Practical Malware Analysis book", "malware-traffic-analysis.net", "SANS FOR610"],
                        time: "4-6 months"
                    },
                    {
                        name: "Cloud Security",
                        details: "AWS/Azure/GCP security, IAM, Container security, Serverless security",
                        resources: ["Cloud Academy", "A Cloud Guru", "AWS Security Specialty"],
                        time: "3-4 months"
                    }
                ]
            },
            {
                category: "Essential Tools",
                level: "All Levels",
                skills: [
                    {
                        name: "Reconnaissance",
                        details: "Nmap, Masscan, Shodan, theHarvester, Recon-ng, OSINT Framework",
                        resources: ["Nmap documentation", "TryHackMe OSINT room"],
                        time: "1 month"
                    },
                    {
                        name: "Vulnerability Scanning",
                        details: "Nessus, OpenVAS, Qualys, Nikto, OWASP ZAP",
                        resources: ["Nessus Essentials", "OpenVAS tutorials"],
                        time: "1 month"
                    },
                    {
                        name: "Exploitation",
                        details: "Metasploit, Burp Suite, SQLmap, Hashcat, John the Ripper",
                        resources: ["Metasploit Unleashed", "PortSwigger Academy"],
                        time: "2-3 months"
                    },
                    {
                        name: "Monitoring & Analysis",
                        details: "Wireshark, tcpdump, Splunk, ELK Stack, Snort, Suricata",
                        resources: ["Wireshark certification", "Splunk Fundamentals"],
                        time: "2 months"
                    }
                ]
            }
        ]
    },

    certifications: {
        title: "Cybersecurity Certifications Roadmap",
        levels: [
            {
                level: "Entry Level",
                description: "Perfect for beginners and career changers",
                certs: [
                    {
                        name: "CompTIA Security+",
                        cost: "$392",
                        duration: "2-3 months prep",
                        difficulty: "Beginner",
                        topics: "Threats, attacks, vulnerabilities, architecture, operations, governance",
                        jobs: "SOC Analyst, Security Administrator, Help Desk",
                        why: "Industry standard entry certification, vendor-neutral, great foundation",
                        prerequisites: "Recommended: Network+ or equivalent knowledge"
                    },
                    {
                        name: "CompTIA Network+",
                        cost: "$358",
                        duration: "2 months prep",
                        difficulty: "Beginner",
                        topics: "Networking concepts, infrastructure, operations, security, troubleshooting",
                        jobs: "Network Administrator, Help Desk, Junior Security Analyst",
                        why: "Essential networking foundation for security careers",
                        prerequisites: "Basic IT knowledge"
                    },
                    {
                        name: "(ISC)² CC (Certified in Cybersecurity)",
                        cost: "Free exam + $50/year membership",
                        duration: "1-2 months prep",
                        difficulty: "Beginner",
                        topics: "Security principles, business continuity, access controls, network security",
                        jobs: "Entry-level security positions",
                        why: "Free entry-level certification from respected organization",
                        prerequisites: "None"
                    }
                ]
            },
            {
                level: "Intermediate",
                description: "For those with 1-3 years experience",
                certs: [
                    {
                        name: "CEH (Certified Ethical Hacker)",
                        cost: "$1,199",
                        duration: "3-4 months prep",
                        difficulty: "Intermediate",
                        topics: "Footprinting, scanning, enumeration, system hacking, malware, social engineering",
                        jobs: "Penetration Tester, Security Analyst, Security Consultant",
                        why: "Widely recognized, covers ethical hacking fundamentals",
                        prerequisites: "2 years security experience or training"
                    },
                    {
                        name: "CompTIA CySA+ (Cybersecurity Analyst)",
                        cost: "$392",
                        duration: "3 months prep",
                        difficulty: "Intermediate",
                        topics: "Threat detection, data analysis, incident response, compliance",
                        jobs: "SOC Analyst, Threat Intelligence Analyst, Security Operations",
                        why: "Hands-on, analytics-focused, behavioral approach",
                        prerequisites: "Security+ and 3-4 years experience recommended"
                    },
                    {
                        name: "(ISC)² SSCP",
                        cost: "$249",
                        duration: "2-3 months prep",
                        difficulty: "Intermediate",
                        topics: "Access controls, security operations, risk management, cryptography",
                        jobs: "Security Administrator, Security Analyst, Systems Analyst",
                        why: "Technical, hands-on certification from (ISC)²",
                        prerequisites: "1 year experience in security"
                    }
                ]
            },
            {
                level: "Advanced",
                description: "For experienced professionals (3+ years)",
                certs: [
                    {
                        name: "OSCP (Offensive Security Certified Professional)",
                        cost: "$1,649",
                        duration: "3-6 months prep",
                        difficulty: "Advanced/Expert",
                        topics: "Penetration testing methodology, exploitation, privilege escalation, buffer overflows",
                        jobs: "Penetration Tester, Red Team Operator, Security Researcher",
                        why: "Highly respected, 24-hour hands-on exam, proves practical skills",
                        prerequisites: "Strong Linux, networking, scripting knowledge"
                    },
                    {
                        name: "(ISC)² CISSP",
                        cost: "$749",
                        duration: "4-6 months prep",
                        difficulty: "Advanced",
                        topics: "8 domains: Security, Asset Security, Architecture, Communication, IAM, Security Assessment, Security Operations, Software Security",
                        jobs: "Security Manager, CISO, Security Consultant, Security Architect",
                        why: "Gold standard for security leadership, required for many senior roles",
                        prerequisites: "5 years paid security experience"
                    },
                    {
                        name: "GIAC GPEN (Penetration Tester)",
                        cost: "$2,499",
                        duration: "3-4 months prep",
                        difficulty: "Advanced",
                        topics: "Penetration testing, exploit development, wireless attacks, web app testing",
                        jobs: "Senior Penetration Tester, Red Team Lead",
                        why: "SANS-backed, extremely technical, industry respected",
                        prerequisites: "Strong pentesting background"
                    }
                ]
            },
            {
                level: "Specialist",
                description: "Specialized certifications for niche areas",
                certs: [
                    {
                        name: "GIAC GCIH (Incident Handler)",
                        cost: "$2,499",
                        duration: "3 months prep",
                        difficulty: "Advanced",
                        topics: "Incident handling, computer crime investigation, malware analysis",
                        jobs: "Incident Responder, SOC Manager, Forensics Analyst",
                        why: "Premier incident response certification",
                        prerequisites: "Security experience"
                    },
                    {
                        name: "AWS Certified Security Specialty",
                        cost: "$300",
                        duration: "2-3 months prep",
                        difficulty: "Intermediate-Advanced",
                        topics: "AWS security services, incident response, logging, encryption, compliance",
                        jobs: "Cloud Security Engineer, Cloud Security Architect, DevSecOps",
                        why: "Essential for cloud security roles, AWS is market leader",
                        prerequisites: "AWS experience, Associate-level cert recommended"
                    },
                    {
                        name: "OSWE (Web Expert)",
                        cost: "$1,649",
                        duration: "4-6 months prep",
                        difficulty: "Expert",
                        topics: "Web application security, source code review, exploit development",
                        jobs: "Application Security Engineer, Security Researcher",
                        why: "Advanced web security, white-box testing focus",
                        prerequisites: "Strong programming, OSCP recommended"
                    },
                    {
                        name: "CREST CRT (Registered Tester)",
                        cost: "Varies by region",
                        duration: "3-4 months prep",
                        difficulty: "Advanced",
                        topics: "Infrastructure testing, web application testing, soft skills",
                        jobs: "Penetration Tester (UK/EU focused)",
                        why: "Required for government penetration testing in UK",
                        prerequisites: "Penetration testing experience"
                    }
                ]
            }
        ],
        certPath: {
            title: "Recommended Certification Path",
            beginner: ["CompTIA A+", "CompTIA Network+", "CompTIA Security+"],
            intermediate: ["CEH or CySA+", "SSCP"],
            advanced: ["OSCP", "CISSP", "Specialist certs based on role"]
        }
    },

    labs: {
        title: "Hands-On Practice Platforms",
        platforms: [
            {
                name: "HackTheBox",
                type: "CTF Platform",
                cost: "Free + VIP $14/month",
                difficulty: "Beginner to Expert",
                focus: "Penetration testing, real-world machines, CTF challenges",
                features: [
                    "200+ vulnerable machines",
                    "Capture The Flag challenges",
                    "Competitive rankings",
                    "Academy learning path",
                    "Pro Labs for enterprise scenarios",
                    "Active community forums"
                ],
                bestFor: "Aspiring penetration testers, OSCP prep",
                url: "hackthebox.com"
            },
            {
                name: "TryHackMe",
                type: "Learning Platform",
                cost: "Free + Premium $12/month",
                difficulty: "Beginner to Advanced",
                focus: "Guided learning paths, security fundamentals, practical skills",
                features: [
                    "Structured learning paths",
                    "500+ rooms (challenges)",
                    "Browser-based Kali Linux",
                    "Certification prep paths",
                    "Defensive & offensive security",
                    "King of the Hill competitions"
                ],
                bestFor: "Complete beginners, structured learning, certification prep",
                url: "tryhackme.com"
            },
            {
                name: "OverTheWire",
                type: "Wargames",
                cost: "Free",
                difficulty: "Beginner to Advanced",
                focus: "Linux, command line, programming, exploitation",
                features: [
                    "Bandit (Linux basics)",
                    "Natas (web security)",
                    "Leviathan (privilege escalation)",
                    "Krypton (cryptography)",
                    "Progressive difficulty",
                    "SSH-based challenges"
                ],
                bestFor: "Learning Linux and command line fundamentals",
                url: "overthewire.org"
            },
            {
                name: "PentesterLab",
                type: "Web Security Training",
                cost: "Free + PRO $20/month",
                difficulty: "Beginner to Advanced",
                focus: "Web application security, code review",
                features: [
                    "100+ exercises",
                    "Web security focus",
                    "OWASP Top 10 coverage",
                    "Code review exercises",
                    "Badge system",
                    "Vulnerable VMs"
                ],
                bestFor: "Web application security specialists",
                url: "pentesterlab.com"
            },
            {
                name: "Cybrary",
                type: "Learning Platform",
                cost: "Free + Insider Pro $39/month",
                difficulty: "Beginner to Advanced",
                focus: "Video courses, career paths, certification prep",
                features: [
                    "600+ courses",
                    "Virtual labs",
                    "Career paths",
                    "Certification preparation",
                    "Practice tests",
                    "Hands-on labs"
                ],
                bestFor: "Comprehensive learning, certification prep",
                url: "cybrary.it"
            },
            {
                name: "PortSwigger Web Security Academy",
                type: "Web Security Training",
                cost: "Free",
                difficulty: "Beginner to Advanced",
                focus: "Web application security, Burp Suite",
                features: [
                    "200+ labs",
                    "Learning paths",
                    "Burp Suite integration",
                    "Mystery lab challenges",
                    "Free certification",
                    "Excellent documentation"
                ],
                bestFor: "Web application security, Burp Suite mastery",
                url: "portswigger.net/web-security"
            },
            {
                name: "VulnHub",
                type: "Vulnerable VMs",
                cost: "Free",
                difficulty: "Beginner to Expert",
                focus: "Offline vulnerable machines, penetration testing practice",
                features: [
                    "600+ vulnerable VMs",
                    "Download and run locally",
                    "Community walkthroughs",
                    "Various difficulty levels",
                    "No time limits",
                    "Diverse scenarios"
                ],
                bestFor: "Offline practice, OSCP preparation",
                url: "vulnhub.com"
            },
            {
                name: "PicoCTF",
                type: "Educational CTF",
                cost: "Free",
                difficulty: "Beginner to Intermediate",
                focus: "Student-focused, fundamental skills",
                features: [
                    "Beginner-friendly",
                    "Educational focus",
                    "Progressive challenges",
                    "Multiple categories",
                    "Annual competition",
                    "Practice mode year-round"
                ],
                bestFor: "Students, absolute beginners, CTF introduction",
                url: "picoctf.org"
            },
            {
                name: "Hack The Box Academy",
                type: "Structured Learning",
                cost: "Free tier + Paid modules",
                difficulty: "Beginner to Advanced",
                focus: "Guided learning paths, hands-on labs",
                features: [
                    "Structured curriculum",
                    "Interactive modules",
                    "Hands-on exercises",
                    "Cubes (currency) system",
                    "Career paths",
                    "Certification paths"
                ],
                bestFor: "Structured penetration testing education",
                url: "academy.hackthebox.com"
            },
            {
                name: "Blue Team Labs Online",
                type: "Defensive Security",
                cost: "Free + Premium $10/month",
                difficulty: "Beginner to Advanced",
                focus: "Defensive security, SOC analyst skills, incident response",
                features: [
                    "SOC challenges",
                    "Incident response scenarios",
                    "Digital forensics",
                    "Threat hunting",
                    "SIEM practice",
                    "Reverse engineering"
                ],
                bestFor: "SOC analysts, blue team professionals, defensive security",
                url: "blueteamlabs.online"
            }
        ],
        recommendedPath: [
            "Start with TryHackMe for structured learning",
            "Move to OverTheWire Bandit for Linux skills",
            "Practice web security on PortSwigger Academy",
            "Challenge yourself with HackTheBox machines",
            "Prepare for OSCP with VulnHub and HTB Pro Labs"
        ]
    },

    careers: {
        title: "Cybersecurity Career Roles",
        roles: [
            {
                title: "SOC Analyst (Security Operations Center)",
                level: "Entry-Mid",
                salary: "$55k-$95k",
                description: "Monitor security alerts, investigate incidents, respond to threats in real-time",
                responsibilities: [
                    "Monitor SIEM for security events",
                    "Investigate security alerts and anomalies",
                    "Perform initial incident triage",
                    "Document incidents and create reports",
                    "Collaborate with incident response team",
                    "Maintain security monitoring tools"
                ],
                requiredSkills: [
                    "SIEM platforms (Splunk, QRadar, ELK)",
                    "Log analysis",
                    "Network protocols and traffic analysis",
                    "Incident detection and response",
                    "Threat intelligence",
                    "Security tools (IDS/IPS, EDR)"
                ],
                certifications: ["Security+", "CySA+", "GCIH"],
                education: "Bachelor's in IT/Cybersecurity or equivalent experience",
                careerPath: "SOC Analyst → Senior SOC Analyst → SOC Lead → Security Engineer/Manager"
            },
            {
                title: "Penetration Tester / Ethical Hacker",
                level: "Mid-Senior",
                salary: "$80k-$150k",
                description: "Simulate cyber attacks to find vulnerabilities before malicious hackers do",
                responsibilities: [
                    "Conduct penetration tests on systems, networks, and applications",
                    "Perform vulnerability assessments",
                    "Exploit discovered vulnerabilities ethically",
                    "Write detailed security reports",
                    "Recommend remediation strategies",
                    "Stay current with attack techniques"
                ],
                requiredSkills: [
                    "Network and web application testing",
                    "Exploitation frameworks (Metasploit)",
                    "Programming (Python, Bash, PowerShell)",
                    "Linux and Windows systems",
                    "Burp Suite, Nmap, Wireshark",
                    "Report writing and communication"
                ],
                certifications: ["OSCP", "CEH", "GPEN", "CREST CRT"],
                education: "Bachelor's preferred, strong portfolio essential",
                careerPath: "Junior Pentester → Penetration Tester → Senior Pentester → Red Team Lead"
            },
            {
                title: "Security Engineer",
                level: "Mid-Senior",
                salary: "$90k-$160k",
                description: "Design, implement, and maintain security systems and infrastructure",
                responsibilities: [
                    "Design and implement security solutions",
                    "Configure firewalls, IDS/IPS, SIEM",
                    "Conduct security assessments",
                    "Automate security processes",
                    "Integrate security into DevOps",
                    "Troubleshoot security issues"
                ],
                requiredSkills: [
                    "Network security architecture",
                    "Cloud security (AWS, Azure, GCP)",
                    "Security tools implementation",
                    "Scripting and automation",
                    "Infrastructure as Code",
                    "Security frameworks (NIST, ISO 27001)"
                ],
                certifications: ["Security+", "CISSP", "AWS Security Specialty", "CCSP"],
                education: "Bachelor's in Computer Science/Engineering",
                careerPath: "Junior Security Engineer → Security Engineer → Senior Security Engineer → Security Architect"
            },
            {
                title: "Security Analyst",
                level: "Entry-Mid",
                salary: "$60k-$100k",
                description: "Analyze security threats, vulnerabilities, and recommend protective measures",
                responsibilities: [
                    "Perform vulnerability scans and assessments",
                    "Analyze security logs and events",
                    "Research emerging threats",
                    "Assess security risks",
                    "Recommend security improvements",
                    "Create security documentation"
                ],
                requiredSkills: [
                    "Risk assessment methodologies",
                    "Vulnerability scanning tools",
                    "Security frameworks and compliance",
                    "Threat intelligence analysis",
                    "Data analysis",
                    "Communication skills"
                ],
                certifications: ["Security+", "CySA+", "SSCP"],
                education: "Bachelor's in IT/Cybersecurity",
                careerPath: "Security Analyst → Senior Security Analyst → Security Consultant/Manager"
            },
            {
                title: "Incident Responder",
                level: "Mid-Senior",
                salary: "$85k-$140k",
                description: "Respond to and manage cybersecurity incidents and breaches",
                responsibilities: [
                    "Lead incident response efforts",
                    "Perform forensic analysis",
                    "Contain and eradicate threats",
                    "Coordinate with stakeholders",
                    "Develop incident response procedures",
                    "Post-incident analysis and reporting"
                ],
                requiredSkills: [
                    "Incident response frameworks (NIST, SANS)",
                    "Digital forensics",
                    "Malware analysis",
                    "Memory and disk forensics",
                    "Threat hunting",
                    "Crisis management"
                ],
                certifications: ["GCIH", "GCFA", "GREM", "ECIH"],
                education: "Bachelor's + experience in security",
                careerPath: "SOC Analyst → Incident Responder → Senior IR → IR Team Lead/Manager"
            },
            {
                title: "Security Architect",
                level: "Senior",
                salary: "$120k-$200k",
                description: "Design comprehensive security architecture for organizations",
                responsibilities: [
                    "Design enterprise security architecture",
                    "Create security blueprints and standards",
                    "Evaluate security technologies",
                    "Ensure compliance with regulations",
                    "Guide security engineering teams",
                    "Strategic security planning"
                ],
                requiredSkills: [
                    "Enterprise architecture",
                    "Security frameworks (TOGAF, SABSA)",
                    "Cloud and on-prem security",
                    "Zero trust architecture",
                    "Security strategy",
                    "Leadership and communication"
                ],
                certifications: ["CISSP", "CCSP", "TOGAF", "SABSA"],
                education: "Bachelor's/Master's + 7-10 years experience",
                careerPath: "Security Engineer → Senior Security Engineer → Security Architect → Chief Security Architect"
            },
            {
                title: "Application Security Engineer",
                level: "Mid-Senior",
                salary: "$95k-$160k",
                description: "Ensure applications are built securely and identify code vulnerabilities",
                responsibilities: [
                    "Perform code reviews for security",
                    "Conduct application penetration testing",
                    "Implement secure SDLC practices",
                    "Develop security libraries and frameworks",
                    "Train developers on secure coding",
                    "Integrate security into CI/CD"
                ],
                requiredSkills: [
                    "Programming (Java, Python, JavaScript, C#)",
                    "OWASP Top 10",
                    "SAST/DAST tools",
                    "Secure coding practices",
                    "Web application security",
                    "DevSecOps"
                ],
                certifications: ["OSWE", "CSSLP", "CEH", "GWAPT"],
                education: "Bachelor's in Computer Science",
                careerPath: "Developer → AppSec Engineer → Senior AppSec Engineer → AppSec Architect/Lead"
            },
            {
                title: "Cloud Security Engineer",
                level: "Mid-Senior",
                salary: "$100k-$170k",
                description: "Secure cloud infrastructure and services (AWS, Azure, GCP)",
                responsibilities: [
                    "Design cloud security architecture",
                    "Implement IAM and access controls",
                    "Secure containers and serverless",
                    "Monitor cloud environments",
                    "Ensure compliance in cloud",
                    "Automate cloud security"
                ],
                requiredSkills: [
                    "AWS/Azure/GCP platforms",
                    "Cloud-native security services",
                    "Infrastructure as Code (Terraform, CloudFormation)",
                    "Container security (Docker, Kubernetes)",
                    "CI/CD security",
                    "Cloud compliance"
                ],
                certifications: ["AWS Security Specialty", "Azure Security Engineer", "CCSP"],
                education: "Bachelor's in IT/CS",
                careerPath: "Cloud Engineer → Cloud Security Engineer → Senior Cloud Security Engineer → Cloud Security Architect"
            },
            {
                title: "Malware Analyst / Reverse Engineer",
                level: "Mid-Senior",
                salary: "$90k-$150k",
                description: "Analyze malicious software to understand behavior and develop countermeasures",
                responsibilities: [
                    "Perform static and dynamic malware analysis",
                    "Reverse engineer malware samples",
                    "Identify indicators of compromise (IOCs)",
                    "Develop detection signatures",
                    "Create malware analysis reports",
                    "Support incident response"
                ],
                requiredSkills: [
                    "Assembly language (x86, x64)",
                    "Debugging tools (IDA Pro, Ghidra, x64dbg)",
                    "Malware analysis tools",
                    "Operating system internals",
                    "Network protocols",
                    "Programming (Python, C, C++)"
                ],
                certifications: ["GREM", "GCFA", "GIAC Reverse Engineering"],
                education: "Bachelor's/Master's in CS or related field",
                careerPath: "Security Analyst → Malware Analyst → Senior Malware Analyst → Principal Researcher"
            },
            {
                title: "Threat Intelligence Analyst",
                level: "Mid",
                salary: "$75k-$130k",
                description: "Gather and analyze threat data to predict and prevent attacks",
                responsibilities: [
                    "Monitor threat landscape",
                    "Collect threat intelligence from various sources",
                    "Analyze TTPs of threat actors",
                    "Produce threat intelligence reports",
                    "Share intelligence with security teams",
                    "Track emerging threats"
                ],
                requiredSkills: [
                    "Threat intelligence platforms (MISP, ThreatConnect)",
                    "OSINT techniques",
                    "MITRE ATT&CK framework",
                    "Data analysis",
                    "Malware families knowledge",
                    "Geopolitical awareness"
                ],
                certifications: ["GIAC GCTI", "CySA+", "Certified Threat Intelligence Analyst"],
                education: "Bachelor's in Cybersecurity/Intelligence",
                careerPath: "Security Analyst → Threat Intelligence Analyst → Senior TI Analyst → TI Manager"
            },
            {
                title: "Governance, Risk, and Compliance (GRC) Analyst",
                level: "Entry-Mid",
                salary: "$65k-$110k",
                description: "Ensure organizational compliance with security regulations and standards",
                responsibilities: [
                    "Conduct risk assessments",
                    "Ensure compliance with regulations (GDPR, HIPAA, PCI-DSS)",
                    "Develop security policies and procedures",
                    "Perform security audits",
                    "Manage security frameworks",
                    "Report to management on compliance"
                ],
                requiredSkills: [
                    "Risk management frameworks",
                    "Compliance standards (ISO 27001, NIST, SOC 2)",
                    "Policy development",
                    "Audit processes",
                    "Documentation",
                    "Communication with stakeholders"
                ],
                certifications: ["CISSP", "CISM", "CRISC", "ISO 27001 Lead Auditor"],
                education: "Bachelor's in IT/Business",
                careerPath: "GRC Analyst → Senior GRC Analyst → GRC Manager → Chief Compliance Officer"
            },
            {
                title: "Chief Information Security Officer (CISO)",
                level: "Executive",
                salary: "$150k-$400k+",
                description: "Lead organization's cybersecurity strategy and programs",
                responsibilities: [
                    "Define security vision and strategy",
                    "Build and manage security teams",
                    "Manage security budget",
                    "Board and executive reporting",
                    "Ensure regulatory compliance",
                    "Crisis management and leadership"
                ],
                requiredSkills: [
                    "Strategic leadership",
                    "Risk management",
                    "Business acumen",
                    "Communication and presentation",
                    "Security technologies (broad knowledge)",
                    "Vendor management"
                ],
                certifications: ["CISSP", "CISM", "CGEIT"],
                education: "Bachelor's/Master's + 15+ years experience",
                careerPath: "Various security roles → Security Manager → Security Director → CISO"
            }
        ]
    },

    events: {
        title: "Cybersecurity Events, CTFs & Conferences",
        ctfs: [
            {
                name: "DEF CON CTF",
                type: "Jeopardy/Attack-Defense CTF",
                frequency: "Annual (August)",
                difficulty: "Expert",
                description: "The most prestigious hacking competition, held at DEF CON in Las Vegas. Teams compete in intense attack-defense challenges.",
                why: "Ultimate challenge, networking, prestige"
            },
            {
                name: "PicoCTF",
                type: "Jeopardy CTF",
                frequency: "Annual (March-April)",
                difficulty: "Beginner-Intermediate",
                description: "Student-focused CTF by Carnegie Mellon. Perfect for beginners with learning-oriented challenges.",
                why: "Beginner-friendly, educational, free"
            },
            {
                name: "Google CTF",
                type: "Jeopardy CTF",
                frequency: "Annual (June)",
                difficulty: "Intermediate-Expert",
                description: "High-quality challenges from Google's security team covering web, crypto, reversing, pwn.",
                why: "Quality challenges, Google recognition, prizes"
            },
            {
                name: "HackTheBox Cyber Apocalypse",
                type: "Jeopardy CTF",
                frequency: "Annual (March-April)",
                difficulty: "Beginner-Advanced",
                description: "Large-scale CTF with thousands of participants, various difficulty levels, excellent for teams.",
                why: "Large community, quality challenges, beginner-friendly tracks"
            },
            {
                name: "SANS Holiday Hack Challenge",
                type: "Story-driven CTF",
                frequency: "Annual (December-January)",
                difficulty: "All levels",
                description: "Free, festive CTF with a story theme. Great for learning with comprehensive solutions published.",
                why: "Free, fun narrative, learning-focused, detailed writeups"
            },
            {
                name: "CSAW CTF",
                type: "Jeopardy CTF",
                frequency: "Annual (September)",
                difficulty: "Intermediate-Advanced",
                description: "NYU Tandon's Cyber Security Awareness Week CTF, one of the largest student-run CTFs.",
                why: "Academic recognition, student-focused, various tracks"
            },
            {
                name: "NahamCon CTF",
                type: "Jeopardy CTF",
                frequency: "Annual (May-June)",
                difficulty: "Beginner-Intermediate",
                description: "Community-driven CTF by John Hammond and NahamSec, very beginner-friendly.",
                why: "Community-focused, beginner tracks, excellent learning"
            },
            {
                name: "DEFCON CTF Quals",
                type: "Jeopardy CTF",
                frequency: "Annual (May)",
                difficulty: "Expert",
                description: "Qualification round for DEF CON CTF finals. Extremely challenging, elite competition.",
                why: "Path to DEF CON finals, elite competition"
            },
            {
                name: "Pwn2Own",
                type: "Exploitation Competition",
                frequency: "Multiple per year",
                difficulty: "Expert",
                description: "Zero-day exploitation contest with large cash prizes for finding vulnerabilities in major software.",
                why: "Huge prizes ($100k+), industry recognition, impact"
            }
        ],
        conferences: [
            {
                name: "DEF CON",
                location: "Las Vegas, USA",
                when: "August (Annual)",
                cost: "$440 (at door)",
                focus: "Hacking, security research, CTFs, villages, talks",
                description: "The world's largest hacking conference. 30+ years of tradition, dozens of villages, talks, workshops, and networking.",
                attendees: "~30,000",
                why: "Legendary, networking, hands-on learning, CTFs, career opportunities"
            },
            {
                name: "Black Hat USA",
                location: "Las Vegas, USA",
                when: "August (Annual)",
                cost: "$2,795+",
                focus: "Professional security research, trainings, business",
                description: "Premier professional security conference. High-quality research presentations, trainings, and business expo.",
                attendees: "~20,000",
                why: "Professional, cutting-edge research, excellent training, corporate networking"
            },
            {
                name: "RSA Conference",
                location: "San Francisco, USA",
                when: "April-May (Annual)",
                cost: "$2,395+",
                focus: "Enterprise security, vendors, business networking",
                description: "Largest cybersecurity conference focused on business and enterprise security. Massive expo.",
                attendees: "~40,000",
                why: "Business focus, vendor expo, job opportunities, enterprise security"
            },
            {
                name: "BSides (Various)",
                location: "Global - 100+ cities",
                when: "Year-round",
                cost: "Free - $50",
                focus: "Community-driven, talks, workshops, local networking",
                description: "Community-run security conferences worldwide. Intimate, accessible, beginner-friendly.",
                attendees: "100-1,000 per event",
                why: "Free/cheap, local, beginner-friendly, networking, speaking opportunities"
            },
            {
                name: "SANS Summits",
                location: "Various",
                when: "Year-round",
                cost: "Free - $1,000",
                focus: "Training, specific security topics",
                description: "Focused training events on specific topics like cloud security, ICS, threat hunting.",
                attendees: "Varies",
                why: "High-quality training, certifications, focused topics"
            },
            {
                name: "ShmooCon",
                location: "Washington DC, USA",
                when: "January (Annual)",
                cost: "$150",
                focus: "Technical talks, hacker culture, discussions",
                description: "Mid-size technical conference. Competitive tickets (sell out fast), quality talks.",
                attendees: "~3,000",
                why: "Technical depth, hacker culture, intimate, DC location"
            },
            {
                name: "CanSecWest",
                location: "Vancouver, Canada",
                when: "March (Annual)",
                cost: "$2,500+",
                focus: "Advanced security research, Pwn2Own",
                description: "Technical security conference, home of Pwn2Own competition.",
                attendees: "~1,000",
                why: "Technical excellence, Pwn2Own, researcher community"
            },
            {
                name: "OWASP Global AppSec",
                location: "Rotating (US, EU, Asia)",
                when: "Multiple per year",
                cost: "$500-$1,200",
                focus: "Application security, web security, OWASP projects",
                description: "Application security conference by OWASP foundation. Web security focus.",
                attendees: "~2,000",
                why: "AppSec focus, OWASP community, trainings"
            },
            {
                name: "Hack in the Box (HITB)",
                location: "Amsterdam, Dubai, Singapore",
                when: "Multiple per year",
                cost: "$1,000+",
                focus: "Technical talks, workshops, CTF",
                description: "International hacker conferences with technical content, trainings, and CTF.",
                attendees: "~1,500",
                why: "International, technical, Asia-Pacific focus"
            },
            {
                name: "DerbyCon",
                location: "Louisville, USA (ended 2019, but similar events exist)",
                when: "Historical",
                cost: "N/A",
                focus: "Community, technical talks",
                description: "Community favorite (now ended), but inspired many regional cons.",
                attendees: "Historical",
                why: "Community spirit (inspired similar events)"
            }
        ],
        organizations: [
            {
                name: "OWASP (Open Web Application Security Project)",
                type: "Non-profit",
                focus: "Web application security",
                benefits: "Local chapters, free resources, projects, conferences, community",
                join: "Free membership, local chapter meetings",
                why: "Web security focus, free resources, global community"
            },
            {
                name: "(ISC)²",
                type: "Professional Certification Body",
                focus: "Professional certifications, networking",
                benefits: "CISSP and other certs, webinars, chapters, career resources",
                join: "Certification required for full membership",
                why: "Professional development, CISSP gold standard"
            },
            {
                name: "ISACA",
                type: "Professional Association",
                focus: "IT governance, audit, security",
                benefits: "CISM certification, conferences, local chapters, resources",
                join: "Membership fee, certifications",
                why: "Governance focus, audit, risk management"
            },
            {
                name: "SANS Institute",
                type: "Training & Certification",
                focus: "Training, GIAC certifications, research",
                benefits: "World-class training, GIAC certs, SANS Internet Storm Center",
                join: "Pay for courses/certifications",
                why: "Best training, highly respected certs"
            },
            {
                name: "InfraGard",
                type: "FBI Partnership",
                focus: "Public-private partnership, threat intelligence",
                benefits: "FBI collaboration, threat briefings, networking",
                join: "Application process, background check",
                why: "Government collaboration, threat intelligence"
            }
        ],
        howToStart: [
            "Join local BSides or OWASP chapter meetings (often free)",
            "Participate in beginner CTFs: PicoCTF, NahamCon CTF",
            "Practice year-round on HackTheBox, TryHackMe",
            "Attend DEF CON (save up, plan ahead, amazing experience)",
            "Follow security researchers on Twitter/X for CTF announcements",
            "Join Discord/Slack communities for CTF teams",
            "Start a study group or CTF team with peers"
        ]
    }
};
