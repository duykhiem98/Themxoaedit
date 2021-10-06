import React from 'react'
import styled from 'styled-components/native'
import { Item } from "./Item";
import { Header } from "./Header";

const Container = styled.View`
  flex:1;
  background-color: white;

`;
export const ListScreen=()=>{
  return(
    <Container>
      <Header/>
      <Item/>
    </Container>

  )
}

