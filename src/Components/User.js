// import { Component } from "react";

// class User extends Component {
//     constructor(props) {
//         super(props);
//     }
    
//     render() {
//        const { namer } = this.props.match.params;

//         return (
//             <h1>This is {namer} Page</h1>
//         );
//     }
// }
// export default User;


import { useParams } from "react-router-dom";


const User = () => {
    const params = useParams();
    const {namer} = params;
    return <h1>this is {namer} page</h1>
}

export default User;


