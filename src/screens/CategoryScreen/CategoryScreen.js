import React, { useEffect } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { HeaderCategory } from "./HeaderCategory";

const ViewIem = styled.View`
  background-color: papayawhip;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: black;
  height:200px

`;
const ViewRight = styled.View`
  flex: 8;
`;
const ViewLeft = styled.View`
  flex-direction: row;
  flex: 2;
`;
const Bnt = styled.TouchableOpacity`
  width: 40px;
  background-color: red;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: black;
`;
const BntText = styled.Text`
  font-size: 16px;
  color: red;
  font-weight: bold;
`;
const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
const TextIem = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const Container = styled.View`
  flex: 1;
  border-top-width: 1px;
`;

const Input = styled.TextInput`
  width: 100%;
  height:44px;
  background-color:#eee

`;
const BntCategory=styled.TouchableOpacity`
  
`;
export const CategoryScreen = () => {
  const navigation=useNavigation()
  const Datas = useSelector(state => state.CategoryReducer.Data);
  const [input, setInput] = React.useState("");

  console.log('datass ', Datas, 'kia là trường name ko phải trường title ')
  const filteredDatas = React.useMemo(() => {
    // hàm này bị lỗi thì mình phải in cái thằng trước đó dữ liệu thô là cái thằng Datas
    // nên mới ko có thằng này _data.title.
    return Datas.filter(_data => _data.title.includes(input));
  }, [Datas, input]);

  return (
    <Container>
      {/*<HeaderCategory/>*/}
      <Input onChangeText={setInput}
             value={input}
             placeholder="Search"
      />
      <FlatList data={filteredDatas}
                renderItem={({ item, index }) =>
                  <ViewIem>
                      <TextIem>{item.title}</TextIem>
                    <BntCategory onPress={()=>navigation.navigate('EditCategory',{
                      value: item,
                      currentId:index
                    })}>
                      <BntText>EditCate</BntText>
                    </BntCategory>

                  </ViewIem>
                }
                keyExtractor={(item, index) => item.id}
      />
    </Container>
  );


};
