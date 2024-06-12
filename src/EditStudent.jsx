import { useEffect, useState } from "react";

const EditStudent = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [data, setData] = useState("");
    useEffect(()=>{
        try {
            fetch(`http://localhost:3000/posts/${props.editId}`)
           .then(result => {result.json()
             .then(resp => {
               setName(resp.name)
               setEmail(resp.email)
               setPhone(resp.phone)
               
             })
           })
       } catch(error) {
           alert("error in editing", error);
       } 
    },[]);




    
      
    const formStyle = {
        width: "500px",
        margin: "50px auto",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
    const submitHandler = (event) => {
       const data = {name, email, phone};
        event.preventDefault();
        props.setIsEditStudent(false);
        fetch(`http://localhost:3000/posts/${props.editId}`, {
            method: "PUT",
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        props.updateUI();
        props.setIsEditStudent(false);
    }
    return (
        <form style={formStyle} onSubmit={submitHandler}>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} required/>
            <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
            <input type="text" value={phone} onChange={(event)=>{setPhone(event.target.value)}} required/>
            <button type="submit">Update</button>
        </form>
    );
}

export default EditStudent;