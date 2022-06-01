import { motion } from "framer-motion"

export const HomeTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{
                opacity: 0,
                transition: { delay: .5 } // important so that the image doesn't come in too soon
            }}
            transition={{ duration: .7 }}
        >
            {children}
        </motion.div>
    )
}