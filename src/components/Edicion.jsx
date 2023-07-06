import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Edicion = ({ id, edicion, tematica, ano, lugar, delay }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const delay2 = delay + 0.2
    const delay3 = delay2 + 0.2

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return <>
        <motion.div  
            id={id}
            className="edicion"
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: delay}}
        >
            <motion.p 
                ref={ref} 
                className="nome-edicion"
                variants={{
                    hidden: {opacity: 0,  x: 175},
                    visible: {opacity: 1, x: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay2}}

            >{edicion}</motion.p>
            <motion.p 
                ref={ref} 
                className="tematica"
                variants={{
                    hidden: {opacity:0.2, filter:"blur(3px)"},
                    visible: {opacity:1, filter:"blur(0)"},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay3}}
            >
                {tematica}</motion.p>
            <motion.div 
                ref={ref} 
                className="ano-lugar"
                variants={{
                    hidden: {opacity:0.2, filter:"blur(3px)"},
                    visible: {opacity:1, filter:"blur(0)"},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay3}}
            >
                <p className="ano">{ano}</p>
                <p className="lugar">{lugar}</p>
            </motion.div>
            <motion.div 
                ref={ref}
                className="cover"
                variants={{
                    hidden: {transform: "scaleX(1)"},
                    visible: {transform: "scaleX(0)"},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay2}}
            ></motion.div>
        </motion.div>
    </>
}

export default Edicion