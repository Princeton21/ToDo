import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Loading from "./pages/Loading/Loading";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 350);
  },[]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <>
            <Home/>
        </>
      )}
    </>
  );
}

export default App;
