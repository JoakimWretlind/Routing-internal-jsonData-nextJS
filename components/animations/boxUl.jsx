import { motion } from "framer-motion"
import { UL } from "../../styles/common.style"


export const BoxUL = (props) => {
    const boxVariant = {
        hidden: {
            x: 0
        },
        visible: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: .15
            }
        }
    }

    return (
        < UL
            as={motion.ul}
            variants={boxVariant}
            initial="hidden"
            animate="visible"
        >
            {props.children}
        </UL>
    )
}

