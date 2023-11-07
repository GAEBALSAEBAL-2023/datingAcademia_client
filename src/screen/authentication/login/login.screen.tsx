import * as React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { RootStackParamList } from "../../../../AppInner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
const kakao = "../../../assets/icon/kakao.png";
const apple = "../../../assets/icon/apple.png";

export default function Login({ navigation }: SignInScreenProps) {
  const toSignUp = async () => {
    await navigation.navigate("test");
  };

  const toKakaoLogin = async () => {
    await navigation.navigate("KakaoLogin");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.kakaoButton} onPress={toKakaoLogin}>
        <Image source={require(kakao)} style={styles.Icon} />
        <Text style={styles.kakaoButtonText}>카카오톡으로 시작하기</Text>
      </Pressable>
      <Pressable style={styles.appleButton}>
        <Image source={require(apple)} style={styles.Icon} />
        <Text style={styles.appleButtonText}>Apple로 시작하기</Text>
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
  kakaoButton: {
    backgroundColor: "#FEE500",
    padding: 10,
    margin: 10,
    borderRadius: 999,
    width: 351,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2, // Android의 경우 elevation을 사용
    display: "flex",
    flexDirection: "row",
  },
  kakaoButtonText: {
    color: "#191919",
    fontWeight: "500",
    fontSize: 16, // 텍스트 크기 설정
  },
  Icon: {
    position: "absolute", // 절대 위치 지정
    left: 20,
  },
  appleButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 999,
    width: 351,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2, // Android의 경우 elevation을 사용
    display: "flex",
    flexDirection: "row",
  },
  appleButtonText: {
    color: "#fff", // 텍스트 색상 설정
    fontWeight: "500",
    fontSize: 16, // 텍스트 크기 설정
  },
});
