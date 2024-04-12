import React, { useEffect , useState} from 'react';
import './Home.css'
import Card from '/src/pages/Card/Card.jsx'
import'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const [key,setKey] = useState([])
  useEffect(()=> {
    let key="Artificial Intelligence"
    fetch(`http://localhost:5555/api/book?Category=${key}`)
    .then(res => res.json())
    .then(data => {
        setData(data);
    })
    .catch(err => console.log(err));
  },[])
  const [data, setData] = useState([])
  return (
    <>
    <div className="home">
      <div id="iframeContainer">
        <iframe src="http://127.0.0.1:8050/" scrolling="no"></iframe>
      </div>
      <h1>{key}</h1>
      <div className="container-fluid book-app">
        <div className="row">
          <Card data={data} />
        </div>
      </div>
      <h1 value= {key}>Iot</h1>
      <div className="container-fluid book-app">
        <div className="row">
          <Card data={data} />
        </div>
      </div>
      <h1 value= {key}>Programming Languages</h1>
      <div className="container-fluid book-app">
        <div className="row">
          <Card data={data} />
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Home;
