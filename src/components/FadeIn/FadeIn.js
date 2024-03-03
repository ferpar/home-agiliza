'use client'
import React from "react"
import styles from "./FadeIn.module.css"

// component that fades in children as they are scrolled into view
// extend controls how high above the fold the children are 100% visible
// if extend is 2, 
// then the children will be 100% visible when the domRef is 200% above the fold

function FadeIn({ extend = 1, children, ...delegated}) {
    const [opacity, setOpacity] = React.useState(1) // ratio between 0 and 1
    const domRef = React.useRef()
    const handleScroll = () => {
        if (!domRef.current) return
        const { top, height } = domRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        // proportion of the domRef that is visible
        const visibleProportion =  ((windowHeight - top) / height) / extend
        const opacityRatio = () => {
            if (visibleProportion > 1) return 1
            if (visibleProportion < 0) return 0
            return visibleProportion
        }
        setOpacity(opacityRatio())
    }
    React.useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={styles["fade-wrapper"]}
            ref={domRef}
            style={{ opacity }}
            {...delegated}
        >
            {children}
        </div>
    )
}

export default FadeIn