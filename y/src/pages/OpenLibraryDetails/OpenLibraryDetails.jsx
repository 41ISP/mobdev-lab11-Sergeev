import { Link, useParams } from "react-router-dom"
import "./OpenLibraryDetails.css"
import { useEffect, useState } from "react"

const OpenLibraryDetails = () => {
    const { id } = useParams()
    const [OpenLibraryDetails, setOpenLibraryDetails] = useState(undefined)

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const parameters = new URLSearchParams({
                    apikey: import.meta.env.VITE_OMDB_APIKEY, i: id
                })
                const res = await fetch(`https://www.omdbapi.com/?${parameters.toString()}`)
                const json = await res.json()
                console.log(json);
                setBookDetails(json)
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch()
    }, [])

    return (
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>

            {bookDetails && <div className="book-detail-card">
                <div className="book-header">
                    <div className="poster-section">
                        <img
                            src={bookDetails.Poster}
                            className="poster-image" />
                        <div className="rating-badge">{bookDetails.imdbRating}</div>
                    </div>

                    <div className="info-section">
                        <h1 className="book-title">{bookDetails.Title}</h1>
                        <div className="book-tagline">
                            <span className="tag">{bookDetails.Year}</span>
                            <span className="tag rated">{bookDetails.Rated}</span>
                            <span className="tag">{bookDetails.Runtime}</span>
                            <span className="tag">{bookDetails.Genre}</span>
                        </div>

                        <div className="book-meta">
                            <div className="meta-item">
                                <span className="meta-label">Released:</span>
                                <span className="meta-value">{bookDetails.Released}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Language:</span>
                                <span className="meta-value">{bookDetails.Language}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Country:</span>
                                <span className="meta-value">
                                    {bookDetails.Country}
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">IMDb ID:</span>
                                <span className="meta-value">{bookDetails.imdbID}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movie-body">
                    <div className="section">
                        <h2 className="section-title">Plot Summary</h2>
                        <p className="plot-text">
                            {bookDetails.Plot}
                        </p>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Cast & Crew</h2>
                        <div className="info-grid">
                            <div className="info-box">
                                <div className="info-box-title">Director</div>
                                <div className="info-box-content">
                                    {bookDetails.Director}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Writer</div>
                                <div className="info-box-content">
                                      {bookDetails.Writer}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Actors</div>
                                <div className="info-box-content">
                                      {bookDetails.Actors}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Ratings & Reviews</h2>
                        <div className="ratings-container">
                            {bookDetails.Ratings.map((el) => (
                            <div className="rating-box">
                                <div className="rating-source">
                                    {el.Source}
                                </div>
                                <div className="rating-value">{el.Value}</div>
                                </div>
                                ))}
                            </div>

                        <div className="awards-box">
                            <div className="awards-icon">🏆</div>
                            <div className="awards-text">
                                  {bookDetails.Awards}
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Box Office & Statistics</h2>
                        <div className="box-office-section">
                            <div className="box-office-card">
                                <div className="box-office-label">Box Office</div>
                                <div className="box-office-value">{bookDetails.BoxOffice}</div>
                            </div>
                            <div className="box-office-card">
                                <div className="box-office-label">IMDb Votes</div>
                                <div className="box-office-value">{bookDetails.imdbVotes}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}
        </div>

    )
}

export default OpenLibraryDetails