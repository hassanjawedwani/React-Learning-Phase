import { Link, Outlet } from "react-router-dom";

const Career = () => {
    return (
        <>
            <h1><Link to="datascience">Data Science</Link></h1>
            <h1><Link to="appdev" state={{name: "hassan"}}>App Dev</Link></h1>
            <h1><Link to="webdev">Web Dev</Link></h1>
            <Outlet/>
        </>
    );
}

export default Career;