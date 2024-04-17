import React from "react";
import { Link } from "react-router-dom";

const ErrorPage =() => {
    return(
        <section className="errorpage">
            <div className="center" style={{display:"flex",height:'400px',justifyContent:'center'}}>
                <h2 >Page Not Found</h2>
            </div>
        </section>
    )
}
export default ErrorPage