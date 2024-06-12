// import { useEffect, useState} from "react";

import { useState } from "react";

// function App() {
//   const [quotesArray, setQuotesArray] = useState([]);
//   useEffect(()=>{
//     fetch("https://cat-fact.herokuapp.com/facts")
//     .then((result)=>{
//       result.json()
//       .then(resp =>{
//         setQuotesArray(resp)
//       })
//     })
//   }, []);
  
//   return (  
//     <div>
//     {quotesArray.map((obj, key) => <h1 key={key}>{obj.text}</h1>)}
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState([]);
//     useEffect(()=>{
//       fetch("http://localhost:3000/posts")
//       .then(result=>{
//         result.json()
//         .then(resp=>{
//           setData(resp)
//         })
//       })
//     },[]);
//     data.map(obj=>console.log(obj.id, obj.title))
//     return (
//       <div>
        
//       </div>
//     );
// }

// export default App;

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const submitHandler = e => {
    const data = { 
      username: username,
      password: password
    };
    e.preventDefault();
    fetch("http://localhost:3000/posts", 
          { 
            method: 'POST', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
    ).then(result => {
      console.log("Result", result.json().then(result=>result));
    })
  }
  return (
    <form action="#" method="post" style={{margin: "auto", width: 300}} onSubmit={submitHandler}>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <button type="submit">Login</button>
    </form>
  );
}

export default App;