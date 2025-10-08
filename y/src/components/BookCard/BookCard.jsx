import { useNavigate } from "react-router-dom"

const MovieCard = ({ Poster, Type, imdbID, Year, Title }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`movie/${imdbID}`)
    }

    return (
        <div onClick={handleClick} className="movie-card">
            <div className="poster-container">
                <img src={Poster} alt={Title} />
            </div>
            <div className="movie-info">
                <div className="movie-title">{Title}</div>
                <div className="movie-meta">
                    <span className="movie-year">{Year}</span>
                    <span className="movie-type">{Type}</span>
                </div>
                <div className="movie-id">IMDb: {imdbID}</div>
            </div>
        </div>


    )
}

export default MovieCard