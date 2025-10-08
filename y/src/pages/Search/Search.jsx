import { useEffect, useState } from "react"
import "./Search.css"
import Stats from "../../components/Stats/Stats"
import BookCard from "../../components/BookCard/BookCard"

const Search = () => {
    const [bookName, setBookName] = useState("")
    const [books, setBooks] = useState(undefined)
    const [error, setError] = useState("")

    useEffect(() => {
        console.log(books)
    }, [books])

    const handleSearch = async () => {
        setError("")
        setMovies(undefined)
        try {
            const trimmedBookName = bookName.trim()
            if (trimmedBookName.length <= 0) return

            const parameters = new URLSearchParams({
                apikey: import.meta.env.VITE_OMDB_APIKEY, s: bookName, page: 1
            })
            const res = await fetch(`https://www.omdbapi.com/?${parameters.toString()}`)
            const json = await res.json()
            if (json.Response === "False") {
                throw new Error("Не удалось получить книги")
            }
            setBooks(json)
        } catch (err) {
            setError(err.message)
            console.error(err)
        }
    }

    return (
        <div className="container">
            <div className="header">
                <h1>🎬 Book Search Results</h1>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for books..."
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
                {error && <p>{error}</p>}
                {books && <Stats {...books} />}
            </div>

            <div className="movie-grid">
                {books && books.Search.map((book) => <BookCard key={book.imdbID} {...book} />)}

            </div>
        </div>

    )
}

export default Search