import project1 from "../assets/img/Project1.png"
import project2 from "../assets/img/Project2.png"
import project3 from "../assets/img/Project3.png"

export default function Projects() {
    return (
        <>
            <section className="projects">
                <h2 className="projects-title">Projects</h2>

                {/* Project 1 */}
                <div className="project-block">
                    <h3>Web Hosting Canada Website Design</h3>
                    <img src={project1} alt="Web Hosting Canada Website Design" />
                    <p>
                       Designed and implemented a fully functional, responsive website inspired by Web Hosting 
                       Canada as part of a college web development course. Created multiple pages including Home, 
                       Web Hosting Plans, Registration, and Login, integrating navigation, hero sections, content 
                       grids, and footers. Focused on cohesive layout, typography, and static data representation for 
                       hosting plans.
                    </p>
                    <p className="outcome">✅ Delivered a polished front-end project that demonstrates strong 
                        understanding of HTML, CSS, and responsive web design principles.</p>
                </div>

                {/* Project 2 */}
                <div className="project-block">
                    <h3>Asset Management System – SRS & Design</h3>
                    <img src={project2} alt="SRS & Design" />
                    <p>
                        Developed a complete Software Requirements Specification (SRS) and system design for an Asset 
                        Management System. Applied Agile development methodology and core software design principles 
                        to create comprehensive UML diagrams, including use case, class, sequence, state, and context 
                        flow diagrams. Gained hands-on experience in translating requirements into structured designs 
                        and documentation.
                    </p>
                    <p className="outcome">✅ Successfully applied theoretical concepts in a practical setting, 
                        earning A+ and recognition from the professor for the quality and completeness of the work.</p>
                </div>

                {/* Project 3 */}
                <div className="project-block">
                    <h3>Online Shoe Store Database Design & Implementation</h3>
                    <img src={project3} alt="Online Shoe Store Database" />
                    <p>
                        Designed and implemented a relational database to manage an online shoe store’s 
                        operations while also enabling data-driven insights. Responsibilities included 
                        requirement analysis, entity-relationship modeling, normalization, SQL table creation, 
                        data population, and query development. Developed SQL queries to analyze sales trends, 
                        customer behavior, product popularity, and vendor performance. Applied constraints and 
                        triggers to ensure data integrity and accurate analytics.
                    </p>
                    <p className="outcome">✅ Created a robust database that not only supports e-commerce 
                        functionality (orders, shipments, returns) but also provides actionable analytics to 
                        inform business decisions. Demonstrated the ability to translate operational data into 
                        insights, bridging database design and analytics.</p>
                </div>
            </section>
        </>
    )
}
