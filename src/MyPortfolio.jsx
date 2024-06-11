import { NavLink, useParams } from "react-router-dom";

const MyPortfolio = () => {
    const params = useParams();
    const {name} = params;
    return (
        <>
            <h1>MyPortfolio Page</h1>
            <ul>
                <li><NavLink to="/myportfolio/anil">Anil Portfolio</NavLink></li>
                <li><NavLink to="/myportfolio/john">John Portfolio</NavLink></li>
                <li><NavLink to="/myportfolio/hassan">Hassan Portfolio</NavLink></li>
                <li><NavLink to="/myportfolio/ali">Ali Portfolio</NavLink></li>
            </ul>
            <h1>Here is {name} data...</h1>
            
            
        </> 
    );

}
export default MyPortfolio;