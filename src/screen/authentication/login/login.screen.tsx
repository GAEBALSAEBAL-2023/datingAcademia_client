import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { RootStackParamList } from "../../../../AppInner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

interface componentNameProps {}

export default function Login({ navigation }: SignInScreenProps) {
  const toSignUp = async () => {
    await navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Pressable>
        <Text>카카오톡으로 시작</Text>
      </Pressable>
      <Pressable>
        <Text>Apple로 시작하기</Text>
      </Pressable>
      <Pressable onPress={toSignUp}>
        <Text>테스트용 화원가입</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
