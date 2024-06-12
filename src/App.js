// import { useEffect, useState} from "react";

// import { useState } from "react";

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

// // export default App;

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = e => {
//     const data = {
//       username: username,
//       password: password
//     };
//     e.preventDefault();
//     fetch("http://localhost:3000/posts",
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       }
//     ).then(result => {
//       console.log("Result", result.json().then(result => result));
//     });
//   };
//   return (
//     <form action="#" method="post" style={{ margin: "auto", width: 300 }} onSubmit={submitHandler}>
//       <input type="text" value={username} onChange={(e) => { setUsername(e.target.value); } } /><br />
//       <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); } } /><br />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import AddStudent from "./AddStudent";
// import EditStudent from "./EditStudent";


// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isAddStudent, setIsAddStudent] = useState(false);
//   const [isEditStudent, setIsEditStudent] = useState(false);
//   const [editId, setEditId] = useState("");
  
//   useEffect(() => {
//     updateUI();
//   }, []);

//   const updateUI = async () => {
//     setLoading(true);
//     try {
//       const result = await fetch("http://localhost:3000/posts");
//       const resp = await result.json();
//       setData(resp);
//     } catch(error) {
//       alert("error: ", error);
//     } finally {
//       setTimeout(()=>{
//         setLoading(false);
//       }, 2000);
//     }
//   }

//   const deleteUI = async(id) => {
//     try {
//       await fetch(`http://localhost:3000/posts/${id}`, {
//         method: 'DELETE',
//       });
//       updateUI();
//     } catch (error) {
//       alert("error", error);
//     }
//   }

//   const editStudentHandler = (id) => {
//     setIsEditStudent(true);
//     setEditId(id);
    
//   }

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Student Data Table</h1>
//       {loading && <p style={{textAlign:"center"}}>Loading...</p>}
//       <Table variant="dark" striped>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone No</th>
//             <th>Operation</th>
//             <th>Edit</th>
//           </tr> 
//         </thead>
//         <tbody>
//           {
//             data.map((obj, i) => (
//               <tr key={obj.id}>
//                 <td>{i+1}</td>
//                 <td>{obj.name}</td>
//                 <td>{obj.email}</td>
//                 <td>{obj.phone}</td>
//                 <td><button type="button" onClick={()=>{deleteUI(obj.id)}}>Delete</button></td>
//                 <td><button type="button" onClick={()=>{editStudentHandler(obj.id)}}>Edit</button></td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </Table>
//       <button type="button" style={{display: "block", width: "100%", margin: "auto", backgroundColor: "lightgreen"}} onClick={()=>{setIsAddStudent(true)}}>Add Student</button>
//       {isAddStudent && <AddStudent updateUI={updateUI} setIsAddStudent={setIsAddStudent}/>}
//       {isEditStudent && <EditStudent editId={editId} updateUI={updateUI} setIsEditStudent={setIsEditStudent} />}
//       {/* <form>
//             <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} required/>
//             <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
//             <input type="text" value={phone} onChange={(event)=>{setPhone(event.target.value)}} required/>
//             <button type="submit">Update</button>
//       </form> */}

//     </div>
//   );
// };

// export default App;
