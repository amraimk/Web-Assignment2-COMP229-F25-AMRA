import databaseImg from "../assets/img/services/Database.jpg";
import dataAnalyticsImg from "../assets/img/services/Data-Analytics.jpg";
import webDevelopmentImg from "../assets/img/services/Web-Development.jpg";
import technicalSupportImg from "../assets/img/services/Technical-Support.jpg";
import systemDesignImg from "../assets/img/services/System-Design.jpg";


export default function Services() {
    return (
        <>
            <section className="services-section" id="services">
                <h2 className="services-title">My Services</h2>

                <div className="services-grid">
                    <div className="service-item">
                        <img src={dataAnalyticsImg} alt="Data Analytics" className="service-img" />
                        <div className="service-text">
                            <h3>Data Analytics & Visualization</h3>
                            <p>
                               Collecting, cleaning, and analyzing datasets using SQL, Python, Power BI, and 
                               Excel. Creating dashboards, reports, and visualizations to support data-driven 
                               decision making. 
                            </p>
                        </div>
                    </div>

                    <div className="service-item">
                        <img src={databaseImg} alt="Database Management" className="service-img" />
                        <div className="service-text">
                            <h3>Database Management</h3>
                            <p>
                                Designing and optimizing SQL, MySQL, and MongoDB databases. Writing
                                queries, ensuring data accuracy, and improving performance.
                            </p>
                        </div>
                    </div>

                    <div className="service-item">
                        <img src={webDevelopmentImg} alt="Web & Software Development" className="service-img" />
                        <div className="service-text">
                            <h3>Web & Software Development</h3>
                            <p>
                                Building responsive web apps with React, JavaScript, PHP, ASP.NET,
                                and backend development with C#, Java, and Python.
                            </p>
                        </div>
                    </div>
        
                    <div className="service-item">
                        <img src={technicalSupportImg}  alt="Technical Support" className="service-img" />
                        <div className="service-text">
                            <h3>Technical Support & IT Solutions</h3>
                            <p>
                                5+ years of experience in troubleshooting, system support, CRM
                                solutions, and delivering excellent customer-facing technical
                                support.
                            </p>
                        </div>
                    </div>

                    <div className="service-item">
                        <img src={systemDesignImg}  alt="Project & System Design" className="service-img" />
                        <div className="service-text">
                            <h3>Project & System Design</h3>
                            <p>
                                Creating SRS, ERD, UML diagrams, and process optimization workflows.
                                Skilled in Agile, Kanban, Jira, Trello, and cloud solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

