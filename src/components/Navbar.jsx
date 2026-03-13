import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Theme from "../audio/Theme.mp3";
import CineHub from "../../public/CineHub.jpg";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const [search_value, set_search_value] = useState("");
    const theme = new Audio(Theme);

    useEffect(() => {
        const searched_query = location.pathname.match(/\/search\/query\/([^/]+)/);
        if (searched_query) {
            set_search_value(searched_query[1]);
        } else {
            set_search_value("");
        }
    }, [location]);

    function play_theme() {
        theme.play();
    };

    function search_movie(event) {
        event.preventDefault();
        navigate(`/search/query/${search_value}`);
    };

    return (

        <div className="navbar h-auto w-full flex items-center justify-between gap-4 p-3">

            <div className="cinehub-icon-box h-full w-auto flex items-center justify-center">

                <Link to="/" onClick={play_theme}>

                    <img className="cinehub-icon h-[2.5rem] w-auto cursor-pointer" src={CineHub} alt="CineHub" />

                </Link>

            </div>

            <div className="search-box h-full w-[50%]">

                <form className="search-form h-full w-full flex items-center justify-center gap-2.5" onSubmit={search_movie}>

                    <input className="search-input outline-none rounded-[50px] h-full w-full px-3 py-2 text-[0.8rem] bg-gray-700" type="text" placeholder="Search CineHub" value={search_value} onChange={(event) => set_search_value(event.target.value)} />

                    <input className="search-button rounded-[50px] h-full w-auto px-2 py-1 text-[0.8rem] bg-[#F4951D] text-black font-bold cursor-pointer" type="button" value={"SEARCH"} onClick={search_movie} />

                </form>

            </div>

            <div className="cinehub-icon-box h-full w-auto flex items-center justify-center">

                <Link to="/" onClick={play_theme}>

                    <img className="cinehub-icon h-[2.5rem] w-auto cursor-pointer" src={CineHub} alt="CineHub" />

                </Link>

            </div>

        </div>

    );

};

export default Navbar;