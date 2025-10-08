import { createBrowserRouter } from "react-router-dom"
import Search from "../pages/Search/Search"
import MovieDetails from "../pages/MovieDetails/MovieDetails"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />
    },
    {
        path: "Openlibrary/:id",
        element: <OpenlibraryDetails />
    }
])