import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import baanerbkg from "../assets/img/bannerbkg.jpg"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const projects = [
        {
            title: "Sorting Visualizer",
            descrption: "The Sorting Visualizer is a web app that dynamically visualizes sorting algorithms, making it easier to understand their functionality and efficiency",
            tech:"JavaScript",
            imgUrl : projImg1,
        },
        {
            title: "Open Elective Allocation",
            descrption: "Developed a web app to automate the open elective allocation for students in NIT Raipur. Integrated an algorithm to allocate open electives Significantly reduced manual efforts for faculty members previously responsible for manual allocation procedures.",
            tech:"JavaScript, React.js",
            imgUrl : projImg2,
        },
        {
            title: "ChatGpt",
            descrption: "With an elegant user interface that resembles the ChatGPT app, communication with advanced GPT3 model API, and most importantly, the ability to ask the AI for help regarding JavaScript, React, or any other programming language, giving it code and translating it to another programming language, and much more",
            tech:"API, JavaScript",
            imgUrl : projImg3,
        },

    ];
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>This are some of the projects I made during learning the skills. Each of the project is briefly described with links to code repositories and live demos in it.</p>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return(
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                    )   
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image" src={baanerbkg}></img>
        </section>
    )
}
