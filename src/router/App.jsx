import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";



import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Fetching from "../components/Fetching"
import { useSelector } from "react-redux";

function App() {
 
  const fetchState = useSelector((state) => state.fetching);
  console.log(fetchState);
  
 


  return (
    <>
      <Header></Header>

      
      <main className="MAIN"> 
        <Fetching/>
        {fetchState.fetching ? <Loader /> : <Outlet />}
    
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
