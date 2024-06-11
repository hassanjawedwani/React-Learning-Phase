import { useEffect, useState} from "react";

function App() {
  const [quotesArray, setQuotesArray] = useState([]);
  useEffect(()=>{
    fetch("https://cat-fact.herokuapp.com/facts")
    .then((result)=>{
      result.json()
      .then(resp =>{
        setQuotesArray(resp)
      })
    })
  }, []);
  
  return (
    <div>
    {quotesArray.map((obj, key) => <h1 key={key}>{obj.text}</h1>)}
    </div>
  );
}

export default App;