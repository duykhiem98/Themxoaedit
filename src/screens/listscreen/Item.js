import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { IC_CANCER } from "../../icon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { delete_item } from "../../store/Item/types";

const ViewIem = styled.View`
  background-color: papayawhip;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: black;

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
  color: white;
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
export const Item = () => {
  const mapStateToProps = useSelector(state => state.ListReducer.items);
  console.log(mapStateToProps);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      <FlatList data={mapStateToProps}
                renderItem={({ item, index }) =>
                  <ViewIem>
                    <ViewRight>
                      <TextIem>Name:{item.name}</TextIem>
                      <TextIem>Age:{item.age}</TextIem>
                      <TextIem>Class:{item.class}</TextIem>
                    </ViewRight>
                    <ViewLeft>
                      <Bnt>
                        <BntText
                          onPress={() => navigation.navigate("EditScreen",{
                            value: item,
                            currentIndex: index
                          })}
                        >Edit</BntText>
                      </Bnt>
                      <Bnt onPress={()=>dispatch(delete_item(index))}>
                        <Icon source={IC_CANCER} />
                      </Bnt>
                    </ViewLeft>
                  </ViewIem>

                }
                keyExtractor={(item, index) => index.toString()}
      />

    </Container>
  );


};
