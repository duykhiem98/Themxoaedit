import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { edit } from "../../store/Item/types";

const Container = styled.View`
  flex: 1

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
const Title = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
export const EditScreen = ({ route }) => {
  const params = route?.params || {};
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log("params ", params);
  const [itemUpdated, setItemUpdated] = useState({
    name: params.value?.name,
    age: params.value?.age,
    class: params.value?.class,
  });

  const update = () => {
    // cái hàm update này mình sẽ truyền vào vị trí hiện tại và giá trị mới
    // đang bị bug ko update đc
    // nhìn kỹ cách a debug
    // thấy bug chưa, action update mà nó lại thành clean list kia đi
    dispatch(edit({ indexUpdate: params.currentIndex, newValue: itemUpdated }));
    // giờ mình phải vào reducer để handle cái hàm này UpdateItems
    // navigation.goBack();
  };

  return (
    <Container>
      <ViewInput>
        <Input
          onChangeText={value => {
            setItemUpdated({
            ...itemUpdated,
            name: value,
          });
          }
          }
          value={itemUpdated.name}
        />
        <Input
          onChangeText={value => {
            setItemUpdated({
            ...itemUpdated,
            age: value,
          });
          }
          }
          value={itemUpdated.age}
        />
        <Input
          onChangeText={value => {
            setItemUpdated({
            ...itemUpdated,
            class: value,
          });
          }
          }
          value={itemUpdated.class}
        />
      </ViewInput>
      <ViewBnt>
        <BntAdd onPress={update}>
          <Title>Save</Title>
        </BntAdd>
      </ViewBnt>
    </Container>

  );
};
