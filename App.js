import React from "react";
import styled from "styled-components/native";
import Route from "./src/navigation/Route";
import { Provider } from "react-redux";
import configStore from "./src/store";
const Container = styled.View`
  flex:1;
  background-color: white;
`;
const store = configStore()
 const App=()=>{
  return(
    <Provider store={store}>
      <Container>
        <Route/>
      </Container>
    </Provider>


  )
}
export default App;
