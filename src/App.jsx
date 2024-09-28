import "./App.css";
import { Button } from "@/components/ui/button";
import Main from "./containers/Main";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {isMobile} from "react-device-detect"

function App() {
  let navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user===null) {
            navigate("/login")
        }
        });
    },[])
    // if(isMobile){
    //   return (
    //     <>
    //       <div>
    //         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    //           <h1 className="text-7xl font-semibold">Mobile Not Supported</h1>
    //         </ThemeProvider>
    //       </div>
    //     </>
    //   );
    // }
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Main />
        {/* <Login/> */}
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
