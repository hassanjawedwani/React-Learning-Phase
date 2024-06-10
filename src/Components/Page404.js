import { Component } from "react";
import { Link } from "react-router-dom";

class Page404 extends Component {
    render() {
        return <h1>Page 404 (Page not found) to return home <Link to="/">click here</Link></h1>;   
    }
}

export default Page404;