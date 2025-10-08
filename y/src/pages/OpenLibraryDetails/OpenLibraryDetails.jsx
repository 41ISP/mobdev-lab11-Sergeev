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
                setMovieDetails(json)
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch()
    }, [])

    return (
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>

            {movieDetails && <div className="movie-detail-card">
                <div className="movie-header">
                    <div className="poster-section">
                        <img
                            src={movieDetails.Poster}
                            className="poster-image" />
                        <div className="rating-badge">{movieDetails.imdbRating}</div>
                    </div>

                    <div className="info-section">
                        <h1 className="movie-title">{movieDetails.Title}</h1>
                        <div className="movie-tagline">
                            <span className="tag">{movieDetails.Year}</span>
                            <span className="tag rated">{movieDetails.Rated}</span>
                            <span className="tag">{movieDetails.Runtime}</span>
                            <span className="tag">{movieDetails.Genre}</span>
                        </div>

                        <div className="movie-meta">
                            <div className="meta-item">
                                <span className="meta-label">Released:</span>
                                <span className="meta-value">{movieDetails.Released}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Language:</span>
                                <span className="meta-value">{movieDetails.Language}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Country:</span>
                                <span className="meta-value">
                                    {movieDetails.Country}
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">IMDb ID:</span>
                                <span className="meta-value">{movieDetails.imdbID}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movie-body">
                    <div className="section">
                        <h2 className="section-title">Plot Summary</h2>
                        <p className="plot-text">
                            {movieDetails.Plot}
                        </p>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Cast & Crew</h2>
                        <div className="info-grid">
                            <div className="info-box">
                                <div className="info-box-title">Director</div>
                                <div className="info-box-content">
                                    {movieDetails.Director}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Writer</div>
                                <div className="info-box-content">
                                      {movieDetails.Writer}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Actors</div>
                                <div className="info-box-content">
                                      {movieDetails.Actors}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Ratings & Reviews</h2>
                        <div className="ratings-container">
                            {movieDetails.Ratings.map((el) => (
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
                                  {movieDetails.Awards}
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Box Office & Statistics</h2>
                        <div className="box-office-section">
                            <div className="box-office-card">
                                <div className="box-office-label">Box Office</div>
                                <div className="box-office-value">{movieDetails.BoxOffice}</div>
                            </div>
                            <div className="box-office-card">
                                <div className="box-office-label">IMDb Votes</div>
                                <div className="box-office-value">{movieDetails.imdbVotes}</div>
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