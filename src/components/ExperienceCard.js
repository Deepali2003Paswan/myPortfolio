import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {fadeIn} from '../components/Motion'

export const ExperienceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="experience-card-container">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="experience-card-wrapper"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="experience-card-content"
                >
                    <img src={icon} alt={title} className="experience-card-image" />
                    <h3 className='experience-card-title'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}