import React, { useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useRecoilState } from "recoil";
import { setUserAccessTokenState, setUserState } from "../../../store";
import { RootStackParamList } from "../../../../AppInner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "test">;

interface componentNameProps {}

export default function SignUp({ navigation }: SignUpScreenProps) {
  const [userAccessToken, setUserAccessToken] = useRecoilState(
    setUserAccessTokenState
  );
  const [user, setUser] = useRecoilState(setUserState);
  const [show, setShow] = useState("");
  // 로그아웃 함수
  const handleLogout = () => {
    if (userAccessToken) {
      // 로그아웃을 수행하는 API 호출
      axios({
        method: "POST",
        url: "https://kapi.kakao.com/v1/user/logout",
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      })
        .then((response) => {
          setUserAccessToken(""); // Access Token 초기화
          navigation.navigate("Login");
        })
        .catch((error) => {
          console.error("Error logging out from Kakao:", error);
        });
    } else {
      console.log("User is not logged in.");
    }
  };
  const handleUser = () => {
    setShow("User");
  };

  const handleToken = () => {
    setShow("Token");
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        {show === "User" && <Text>{JSON.stringify(user)}</Text>}
        {show === "Token" && <Text>{JSON.stringify(userAccessToken)}</Text>}
      </View>
      <Pressable onPress={handleUser} style={styles.button}>
        <Text>정보확인</Text>
      </Pressable>
      <Pressable onPress={handleToken} style={styles.button}>
        <Text>토큰확인</Text>
      </Pressable>
      <Pressable onPress={handleLogout} style={styles.button}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoView: {
    marginBottom: 20, // 정보가 표시되는 View의 아래에 간격 추가
    padding: 20,
    height: 330,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10, // 버튼 간격을 줄임
    borderRadius: 999,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2, // Android의 경우 elevation을 사용
  },
});
