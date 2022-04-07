// import logo from './logo.svg';
import './App.css';

function App() {
  const comp = ["Services","projects","About"]
  return (
    <div className="App">
    <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4eWLw34cogy7QISUilZcT8foEmn6wW_jQ_8t4TqUaWs0_uFrCrKr8HkSgeCDTSuaOojg&usqp=CAU"></img>
   <div>
     {comp.map((e)=>{
       return <a className="anchor" href="a">{e}</a>
     })}
   </div>
   <button className="btn">Contact</button>
    </div>
  );
}

export default App;
