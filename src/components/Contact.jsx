import { useState, useEffect } from 'react'
import Loading from './Loading'

const Contact = ( {restBase} ) => {
    const restPath = restBase + 'pages/6'
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
            <article id={`post-${restData.id}`}>
                <h1>{restData.title.rendered}</h1>
                <div className="entry-content">
                    <section className='contact'>
                            <p>{restData.acf.address}</p>
                            <p>
                                {restData.acf.email}
                            </p>
                    </section>
                </div>
            </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Contact
