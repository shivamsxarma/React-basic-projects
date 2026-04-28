import Header , {Second, UserKey} from "./Header";

function App(){
  return(
   <div>
    <Header />
     <h1>helloww shivam</h1>
    <h2>kya ho raha haii</h2>
    <Second />
    <h1>{UserKey}</h1>
    <button onClick={()=>alert("hellow")}>Click</button>
   </div>
  )
}

export default App ;
