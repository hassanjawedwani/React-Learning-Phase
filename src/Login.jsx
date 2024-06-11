import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (

        <div>
            <div><input/></div>
            <div><input/></div>
            <button onClick={()=>{localStorage.setItem('login', true); navigate('/')}}>Login</button>
            <button onClick={()=>{localStorage.setItem('login', false); navigate('/')}}>Logout</button>

        </div>
    );
}

export default Login;