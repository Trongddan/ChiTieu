import { useEffect,useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Noel from "./component/noel/noel";
import AppRouter from "./config/appRouter";
import { getThemePage } from "./utils/storage";

function App() {
  const theme = getThemePage();
  const {themePage}= useSelector((state) => state.appSlice);
  console.log(themePage);
  const noelTheme = useMemo(()=>{
    switch(theme){
      case "noel":
        return <Noel/>
      default:
        return ""  
    }
  },[themePage])
  return (
    <>
     {noelTheme}
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
