import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="flex text-lg gap-4 m-18 -ml-6">
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/Countries">
                    Countries
                    </Link>
                </li>
                <li>
                    <Link to="/About">
                    About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default  Navbar;