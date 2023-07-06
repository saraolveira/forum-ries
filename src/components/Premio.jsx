import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import ReactPlayer from 'react-player/youtube'

const Premio = ({premio, proyecto, entidad, web, video}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (<motion.div
        className="premio"
        variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25}}
    >
        <motion.p 
                ref={ref} 
                className="nome-premio"
                variants={{
                    hidden: {opacity: 0,  y: -50},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.45}}

        >{premio}</motion.p>

        <ReactPlayer url={video} />

        <motion.div 
                ref={ref} 
                className="proyecto-entidad"
                variants={{
                    hidden: {opacity:0.2, filter:"blur(3px)"},
                    visible: {opacity:1, filter:"blur(0)"},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.45}}
            >
            <p className="proyecto">{proyecto}</p>
            <a href={web} target="_blank" className="entidad">{entidad}</a>
        </motion.div>
    </motion.div>)
}

export default Premio