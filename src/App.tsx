import {Provider} from "react-redux";
import {store} from "./store";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {main, token} from "./util/Url";
import {getCookie} from "./util/Cookie";
import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage";
import Token from "./pages/Token";

function App() {

    const [login,setLogin] = useState<boolean>(false)

    useEffect(() => {
        if(getCookie("access_token"))
            setLogin(true)
    },[])


    const startPage = () : JSX.Element => {
        if(login)
            return <Main/>
        return <LoginPage/>
    }


  return (

      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={main} element={startPage()}></Route>
                    <Route path={token} element={<Token/>}></Route>
                </Routes>
            </BrowserRouter>


        </ThemeProvider>
      </Provider>


  )
}

export default App
