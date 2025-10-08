import { createBrowserRouter } from "react-router-dom"
import Search from "../pages/Search/Search"
import OpenLibraryDetails from "../pages/OpenLibraryDetails/OpenLibraryDetails"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />
    },
    {
        path: "Openlibrary/:id",
        element: <OpenLibraryDetails />
    }
])