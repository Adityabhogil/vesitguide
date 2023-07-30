import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image } from "react-native";

export default function welcome() {
  return (
    <View className="flex-1 items-center justify-center bg-orange-200">
      <Image
        source={require("/Users/adityabhogil/vesitguide/assets/logo.png")}
        className="w-1/3 h-1/6 rounded-3xl "
      ></Image>

      <Text className="text--500 font-bold text-3xl">
        Welcome to the vestguide
      </Text>
      <Pressable>
        <Text className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded text-2xl mt-20">
          Login using Vesid
        </Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}
