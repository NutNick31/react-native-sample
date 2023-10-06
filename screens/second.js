import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Pressable
  } from "react-native";
  import React from "react";
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  import { useNavigation } from "@react-navigation/native";
  
  const Onboading = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Pressable onPress={()=>{navigation.navigate("First")}}>
          <Text>Hello2</Text>
        </Pressable>
      </View>
    );
  };
  
  export default Onboading;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  