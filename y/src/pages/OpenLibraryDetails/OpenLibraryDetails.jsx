import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const OpenLibraryDetails = () => {
    const { id } = useParams()
    const [OpenLibraryDetails, setOpenLibraryDetails] = useState(undefined)

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    i: id   
                })
                const res = await fetch(`https://openlibrary.org/works/${id}.json`)
                const json = await res.json()
                console.log(json);
                setOpenLibraryDetails(json)
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch()
    }, [])

    return (
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>

            {OpenLibraryDetails && <div className="book-detail-card">
                <div className="book-header">
                    <div className="poster-section">
                        <img
                            src={OpenLibraryDetails.Poster}
                            className="poster-image" />
                        <div className="rating-badge">{OpenLibraryDetails.subjects}</div>
                    </div>

                    <div className="info-section">
                        <h1 className="book-title">{OpenLibraryDetails.title}</h1>
                        <div className="book-tagline">
                            <span className="tag">{OpenLibraryDetails.first_publish_year}</span>
                            <span className="tag rated">{OpenLibraryDetails.edition_count}</span>
                        </div>
                        </div>
                    </div>
                    </div>
}
        </div>

    )
}

export default OpenLibraryDetails