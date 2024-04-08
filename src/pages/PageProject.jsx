import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

const Project = ( {restBase} ) => {
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
            <h2>Project</h2>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
