import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View } from "react-native";
import Login from "./src/screen/authentication/login/login.screen";
import test from "./src/screen/authentication/test/test.screen";
import KakaoLogin from "./src/screen/authentication/login/login.kakaoLogin";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: any;
  test: any;
  KakaoLogin: any;
};

export default function AppInner() {
  const [TemporaryLoginBranch, setTemporaryLoginBranch] = useState(false);
  return (
    <>
      <NavigationContainer>
        {!TemporaryLoginBranch ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "로그인", headerShown: false }}
            />
            <Stack.Screen
              name="test"
              component={test}
              options={{ title: "테스트", headerShown: false }}
            />
            <Stack.Screen
              name="KakaoLogin"
              component={KakaoLogin}
              options={{ title: "KakaoLogin", headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <View>
            <Text>로그인 이후</Text>
          </View>
        )}
      </NavigationContainer>
    </>
  );
}
