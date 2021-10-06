import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { edit } from "../../store/Item/types";
import { edit_category } from "../../store/category/types";

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
export const EditCategory = ({ route }) => {
  const params = route?.params || {};
  const dispatch = useDispatch();
  console.log("params ", params);
  const [itemUpdated, setItemUpdated] = useState({
    id:params.value?.id,
    title: params.value?.title
  });
  const update = () => {
    // cái hàm update này mình sẽ truyền vào vị trí hiện tại và giá trị mới
    // đang bị bug ko update đc
    // nhìn kỹ cách a debug
    // thấy bug chưa, action update mà nó lại thành clean list kia đi
    dispatch(edit_category({ indexUpdate:params.currentId, newValue: itemUpdated }));
    // giờ mình phải vào reducer để handle cái hàm này UpdateItems
    // navigation.goBack();
    // ok nhấn edit để nó lỗi đi
  };
  return (
    <Container>
      <ViewInput>
        <Input
          onChangeText={value => {
            setItemUpdated({
              ...itemUpdated,
              title: value,
            });
          }
          }
          value={itemUpdated.title}
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
