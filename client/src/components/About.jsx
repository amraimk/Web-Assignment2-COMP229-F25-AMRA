import me from "../assets/img/me.jpg";
import resume from "../assets/documents/Resume-Amra.pdf";

export default function About() {
    return (
        <>
            <section className="about-me">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Me</h2>
                            <p>
                                Hi, I’m Amra, a versatile Software Engineer with over 5 years of combined
                                experience in IT, technical support, customer service, and software development.
                                My background spans programming in .NET, C#, Java, Python, and SQL, as well as
                                hands-on expertise in database management, troubleshooting, and user-focused
                                software solutions.
                            </p>
                            <p>
                                Currently, I’m expanding into Data Analytics and Data Science, building expertise
                                in Excel, Power BI, SQL queries, Python for data analysis, and data visualization.
                                I have a deep passion for databases and uncovering insights from data, and
                                I enjoy turning complex information into solutions that make a measurable impact.
                            </p>
                            <p>
                                I see myself as a logical, adaptable, and all-rounder professional who thrives
                                in dynamic environments. My mission is to bring together software engineering,
                                data analytics, and problem-solving skills to deliver solutions that are both
                                innovative and practical.
                            </p>
                            <a href={resume} target="_blank" rel="noopener noreferrer"
                                className="link-resume">View My Resume</a>
                        </div>
                        <img src={me} alt="Amra Profile" className="profile-img" />
                    </div>
                </div>
            </section>
        </>
    )
}