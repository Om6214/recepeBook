import React , {useState,useEffect} from 'react'

const Resize = () => {
    const [width, setWidth] = useState(window.screen.width)
    const [height, setHeight] = useState(window.screen.height)

    const actualWidth = ()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect( ()=>{
        window.addEventListener("resize",actualWidth);
        return ()=>{
            window.removeEventListener("resize",actualWidth)
        }
    } )
    return (
        <>
            <h3>{width}</h3>
            <h3>{height}</h3>
            <h5>Resize it</h5>
        </>
    )
}

export default Resize