import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions, Image, View } from "react-native";
import { IC_LOUPE } from "../../icon";
import { useSelector } from "react-redux";
import { SearchBar } from "react-native-screens";
const windowWidth = Dimensions.get('window').width;
const Container = styled.View`
  border-bottom-width: 1px;
`;
const Input = styled.TextInput`
width: ${windowWidth-24}px;
`;
const Icon=styled.Image`
  width: 24px;
  height: 24px;
`;
export const HeaderCategory = () => {
  const Datas = useSelector(state => state.L.Data);
  // mục đích của mình là tìm trên listItem

  console.log('ABC:',Datas);
  const [input,setInput]=useState('')
  const filteredDatas = React.useMemo(() => {
    // toang quá
    // cái hàm filter nó sẽ chạy 1 vòng từ đầu đến cuối
    // sau đó nó lấy cái item đó ra rồi mình cần trường gì thì mình so sánh
    // phải làm như này chứ
    return Datas.filter(_data => _data.title.includes(input));
  }, [Datas, input]);
  // filter bên này để làm gì đâu
  // mình cần hiển thị cái lít sau khi đã filter mà

  console.log('filteredDatas ', input, filteredDatas?.length);
// à
  return (
    <Container>
      <View style={{flexDirection:'row'}}>
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <Icon source={IC_LOUPE}/>
        </View>
        <Input onChangeText={setInput}
               value={input}
               placeholder="Search"
        />
      </View>



    </Container>

  );
};
