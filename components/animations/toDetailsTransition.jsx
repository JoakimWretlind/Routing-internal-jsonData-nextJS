import { motion } from 'framer-motion'
import { MotionOverlay, Panel } from '../../styles/slug.style';

// How many panels we want
const articles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
]

export const ToDetailsTransition = () => {
    return (
        <MotionOverlay>
            {articles.map((article, i) => (
                <Panel
                    as={motion.li}
                    key={article.id}
                    initial={{ translateY: i % 2 === 0 ? "-100vh" : "100vh" }}
                    animate={{ translateY: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: [0.5, .11, 0.45, 0.15]
                    }}
                />
            ))}
        </MotionOverlay>
    )
}