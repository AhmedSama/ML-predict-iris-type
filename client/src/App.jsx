import { useState } from "react";

function App() {
  const [features,setFeatures] = useState({slength : "",swidth : "",plength : "",pwidth:""})
  const [answer,setAnswer] = useState(null)
  const handleChange = (e) => {
    setFeatures(prev=>{
      return {...prev,[e.target.name] : e.target.value}
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(features.slength.length <= 0 || features.swidth.length <= 0 ||features.plength.length <= 0 ||features.pwidth.length <= 0)
    {
      return
    }
    const url = "http://localhost:5000/"
    const response = await fetch(url,{
      method : "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(features)
    })
    const result = await response.json()

    setAnswer(result?.result)

  }
  const styleTheAnswer = (answer) => {
    switch(answer){
      case "Iris-Setosa":
        return <div style={{color : "rgb(59, 215, 243)", backgroundColor : "rgba(59, 215, 243, 0.06)"}} className="answer">{answer}</div>
      case "Iris-Versicolour":
        return <div style={{color : "rgb(255, 0, 136)", backgroundColor : "rgba(255, 0, 136, 0.06)"}} className="answer">{answer}</div>
      case "Iris-Virginica":
        return <div style={{color : "rgb(144, 0, 255)", backgroundColor : "rgba(144, 0, 255, 0.06)"}} className="answer">{answer}</div>
      default:
        return <div style={{color : "rgb(59, 215, 243)", backgroundColor : "rgba(59, 215, 243, 0.06)"}} className="answer">{answer}</div>

    }
  }
  return (
    <div className="container">

      <h1 className="title">Predict the Iris type</h1>
      <form className="form" >
        <div className="form-controle">
          <label htmlFor="">Sepal length in cm</label>
          <input min="4.3" max ="7.9" placeholder="min(4.3) max(7.9)" onChange={handleChange} name="slength" type="number" />
        </div>
        <div className="form-controle">
          <label htmlFor="">Sepal width in cm</label>
          <input min="2.0" max ="4.4" placeholder="min(2.0) max(4.4)" onChange={handleChange} name="swidth" type="number" />
        </div>
        <div className="form-controle">
          <label htmlFor="">Petal length in cm</label>
          <input min="1.0" max ="6.9" placeholder="min(1.0) max(6.9)" onChange={handleChange} name="plength" type="number" />
        </div>
        <div className="form-controle">
          <label htmlFor="">Petal width in cm</label>
          <input min="0.1" max ="2.5" placeholder="min(0.1) max(2.5)" onChange={handleChange} name="pwidth" type="number" />
        </div>
        <button onClick={handleSubmit} className="btn">Predict</button>
        {
          answer &&
          styleTheAnswer(answer)
        }
          
      </form>
    </div>
  );
}

export default App;
