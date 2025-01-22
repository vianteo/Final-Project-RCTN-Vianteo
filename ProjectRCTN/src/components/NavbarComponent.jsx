import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { apiGetMoviesNowPlaying, apiGetMoviesSearch } from "../store/Action"

export default function NavbarComponent() {
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");

    const options = ['popular', 'now_playing', 'top_rated'];

    const handleSelectChange = (event) => {
        // const selectedOption = event.target.value;
        // dispatch(apiGetMoviesNowPlaying(selectedOption));
        console.log(event.target.value);
        dispatch (apiGetMoviesNowPlaying(event.target.value))
        
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim() !== "") {
            dispatch(apiGetMoviesSearch(searchQuery));
        } else {
            alert("Please enter a movie name to search.");
        }
    };


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <select 
                                className="form-select" 
                                onChange={handleSelectChange} 
                                defaultValue=""
                            >
                                <option value="" disabled>Pilih Kategori</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option.replace('_', ' ').toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
