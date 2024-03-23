import React from "react";
import { Link } from "react-router-dom";

function Home () {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <main>
            <header>
                <div>
                    <Link to ="/" className="logo">cs-books</Link>
                    <nav>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </nav>
                </div>
            </header>
        </main>
    );
}
export default Home;
