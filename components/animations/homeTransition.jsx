import { motion } from "framer-motion"

export const HomeTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{
                opacity: 0,
                transition: { delay: .3 }
            }}
            transition={{ duration: .5 }}
        >
            {children}
        </motion.div>
    )
}