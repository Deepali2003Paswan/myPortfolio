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
            descrption: "Data Structure and Algorithm",
            tech:"dsa",
            imgUrl : projImg1,
        },
        {
            title: "ChatGpt",
            descrption: "React, Node.js",
            tech:"dsa",
            imgUrl : projImg2,
        },
        {
            title: "ChatGpfkgot",
            descrption: "Reamgct, Node.js",
            tech:"dsa",
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