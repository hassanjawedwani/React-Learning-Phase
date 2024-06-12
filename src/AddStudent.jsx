// import { useState } from "react";

// const AddStudent = (props) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");

//     const formStyle = {
//         width: "500px",
//         margin: "50px auto",
//         backgroundColor: "lightblue",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center"
//     }

//     const updateAPI = () => {
//         const data = {
//             name: name,
//             email: email,
//             phone: phone
//         };
//         fetch("http://localhost:3000/posts", {
//             method: "POST",
//             headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         props.updateUI();
//     }
    

//     console.log(name,email,phone); // remove
//     const submitHandler = (event) => {
//         event.preventDefault();
//         updateAPI();
//     }
//     return (
//         <form style={formStyle} onSubmit={submitHandler}>
//             <input type="text" placeholder="Enter Name" onChange={(event)=>{setName(event.target.value)}} />
//             <input type="email" placeholder="Enter Email" onChange={(event)=>{setEmail(event.target.value)}} />
//             <input type="text" placeholder="Enter Number" onChange={(event)=>{setPhone(event.target.value)}} />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default AddStudent;

import { useState } from "react";

const AddStudent = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const formStyle = {
        width: "500px",
        margin: "50px auto",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
  
    const updateAPI = async() => {
        const data = { name, email, phone };
        try {
          const response = await fetch("http://localhost:3000/posts", {
              method: "POST",
              headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });
  
          if(response.ok) {
            props.updateUI();
            setName("");
            setEmail("");
            setPhone("");
          }
          else {
            alert("fuck error")
          }
  
        } catch(error) {
          alert("Add Student Error: ", error);
        }
  
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        updateAPI();
        props.setIsAddStudent(false);
    }
  
    return (
        <form style={formStyle} onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Name" value={name} onChange={(event)=>{setName(event.target.value)}} required/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
            <input type="text" placeholder="Enter Number" value={phone} onChange={(event)=>{setPhone(event.target.value)}} required/>
            <button type="submit">Submit</button>
        </form>
    ); 
}

export default AddStudent;