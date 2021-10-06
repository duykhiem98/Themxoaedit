import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTolist, clear_list } from "../../store/Item/types";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex-direction: column;

`;
const ViewInput = styled.View`
  padding-bottom: 10px;

`;
const Input = styled.TextInput`
  border-width: 1px;
  border-color: black;
`;
const ViewBnt = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const BntAdd = styled.TouchableOpacity`
  height: 40px;
  background-color: red;
  width: 60px;
  align-items: center;
  justify-content: center
`;
const BntCategory = styled.TouchableOpacity`
  height: 40px;
  background-color: red;
  align-items: center;
  justify-content: center
`;
const Title = styled.Text`
  font-size:16px;
  color:white;
  font-weight:bold;
`;
export const Header = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const mapStateToProps = useSelector(state => state.ListReducer.items);
  const [params, setParams] = useState({
    name: mapStateToProps?.name,
    age: mapStateToProps?.age,
    class: mapStateToProps?.class,
  });
  const addItem = () => {
    dispatch(addTolist(params));
    setParams({
      name: mapStateToProps?.name,
      age: mapStateToProps?.age,
      class: mapStateToProps?.class,
    });
  };
  const clearItem = () => {
    dispatch(clear_list())
  }
  return (
    <Container>
      <ViewInput>
        <Input
          placeholder="Nhập họ tên"
          onChangeText={value => {
            setParams({
              ...params,
              name: value,
            });

          }}
          value={params.name}
        />
      </ViewInput>
      <ViewInput>
        <Input
          placeholder="Nhập tuổi"
          onChangeText={value => {
            setParams({
              ...params,
              age: value,
            });

          }}
          value={params.age}
        />
      </ViewInput>
      <ViewInput>
        <Input
          placeholder="Nhập lớp"
          onChangeText={value => {
            setParams({
              ...params,
              class: value,
            });

          }}
          value={params.class}
        />
      </ViewInput>
      <ViewBnt>
        <BntAdd onPress={addItem}>
         <Title>Add</Title>
        </BntAdd>
        <BntCategory onPress={()=>{navigation.navigate('CategoryScreen')}}>
          <Title>Category</Title>
        </BntCategory>
        <BntAdd onPress={clearItem}>
          <Title>Clear</Title>
        </BntAdd>
      </ViewBnt>
    </Container>

  );
};
