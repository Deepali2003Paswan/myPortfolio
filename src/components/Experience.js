import amazon from "../assets/img/amazon.png"
import iNeuron from "../assets/img/ineuronlogo.png"
import tech from "../assets/img/engineering-website.png"
import em from "../assets/img/time-management.png"
import { ExperienceCard } from './ExperienceCard';


export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const experiences = [
    {
      title: "Intern at Amazon '24",
      icon: amazon,
    },
    {
      title: "Intern at iNeuron '23",
      icon: iNeuron,
    },
    {
      title: "Web Developer at TedxNITRR",
      icon: tech,
    },
    {
      title: "Event Manager at Technocracy",
      icon: em,
    },
  ]

  return (
    <section className="experience" id="experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx">
                        <p>WHAT I HAVE DONE SO FAR</p>
                        <h2>Highlights</h2>
                          <div className="experience-card-container">
                          {
                            experiences.map((experience, index) => (
                              <ExperienceCard key={experience.title} index = {index}
                              {...experience}
                              />
                            ))
                          }
                        </div>
                      </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
