import Header from "./component/Header";
import {Provider} from "react-redux";
import {store} from "./store";
import styled, {ThemeProvider} from "styled-components";
import theme from "./theme";
import NavBar from "./component/NavBar";

function App() {

    const Test = styled.div`
      //background-color: black;
      height: 2000px;
    `

  return (

      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div>
              <Header/>
                <Test/>
              <NavBar/>
            </div>
        </ThemeProvider>
      </Provider>


  )
}

export default App
