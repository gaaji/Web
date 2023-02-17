import {Provider} from "react-redux";
import {store} from "./store";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ENROLL_TOWN, MAIN, MY_TOWN, TOKEN, TOWN_AUTH} from "./util/Url";
import {getCookie} from "./util/Cookie";
import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage";
import Token from "./pages/Token";
import MyTown from "./pages/MyTown";
import TownEnroll from "./component/town/TownEnroll";
import TownAddPage from "./pages/TownAddPage";
import TownAuthentication from "./pages/TownAuthentication";

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
                    <Route path={MAIN} element={startPage()}></Route>
                    <Route path={TOKEN} element={<Token/>}></Route>
                    <Route path={MY_TOWN} element={<MyTown/>}></Route>
                    <Route path={ENROLL_TOWN} element={<TownAddPage/>}></Route>
                    <Route path={TOWN_AUTH} element={<TownAuthentication/>}></Route>
                </Routes>
            </BrowserRouter>


        </ThemeProvider>
      </Provider>


  )
}

export default App
