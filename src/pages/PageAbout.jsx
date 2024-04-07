import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Collapsible from 'react-collapsible';

const About = ( {restBase} ) => {
    const restPath = restBase;
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <>
        { isLoaded ?
            <div className="wrapper">
            <h2>About</h2>
            <Collapsible trigger="Start here">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default About
