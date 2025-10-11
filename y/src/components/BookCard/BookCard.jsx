import { useNavigate } from "react-router-dom"

const BookCard = ({ author_name, bookKey, title, first_publish_year, edition_count, cover_i, key }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`Openlibrary/${bookKey.split("/")[2]}`)
    }

    return (
        <div onClick={handleClick} className="movie-card">
            <div className="poster-container">
                <img src={`https://covers.openlibrary.org/b/ID/${cover_i}-M.jpg`} alt={title} />
            </div>
            <div className="movie-info">
                <div className="movie-title">{title}</div>
                <div className="movie-meta">
                    <span className="movie-year">{first_publish_year}</span>
                    <span className="movie-type">{author_name}</span>
                </div>
                <div className="movie-id">Count edition: {edition_count}</div>
            </div>
        </div>


    )
}

export default BookCard