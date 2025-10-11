import { useEffect, useState } from "react"
import "./Search.css"
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
        setBooks(undefined)
        try {
            const trimmedBookName = bookName.trim()
            if (trimmedBookName.length <= 0) return
            const parameters = new URLSearchParams({
                q: bookName
            })
            const res = await fetch(`https://openlibrary.org/search.json?${parameters.toString()}`)
            const json = await res.json()
            if (json.Response === "False") {
                throw new Error("Не удалось получить книги")
            }
            console.log(json);
            
            setBooks(json)
        } catch (err) {
            setError(err.message)
            console.error(err)
        }
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Book Search Results</h1>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for books..."
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
                {error && <p>{error}</p>}
            </div>

            <div className="book-grid">
                {books && books.docs.map((book) => <BookCard bookKey={book.key} key={book.key} {...book} />)}
            </div>
        </div>

    )
}

export default Search