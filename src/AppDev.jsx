import { useLocation } from "react-router-dom";

const AppDev = () => {
    const location = useLocation();
    console.log(location);
    return <h1>AppDev Jobs Page</h1>
}

export default AppDev;