import { Col } from "react-bootstrap";

export const ProjectCard = ({title, descrption,tech,imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{descrption}</span>
                    <br>
                    <span>{tech}</span>
                </div>
            </div>
        </Col>
    )
}
