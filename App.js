// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//https://aboutreact.com/image-icon-inside-the-react-native-button/
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
} from "react-native";
//import Spinner from 'react-native-loading-spinner-overlay';

const App = () => {
  const handlerLongClick = () => {
    //handler for Long Click
    alert("Button Long Pressed");
  };

  const handlerClick = () => {
    //handler for Long Click
    alert("Button Pressed");
  };

  //const [loading, setLoading] = useState(false);

  /* const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };*/
  return (
    <View style={styles.container}>
      {/* <View activeOpacity={0.6} style = {styles.text} onPress={handlerClick} onLongPress={handlerLongClick}
      onStartShouldSetResponder={() => alert('View Click')}>
        Example of Click on a View!!
     
      </View> */}

      <TouchableOpacity
        onLongPress={handlerLongClick}
        onPress={handlerClick}
        activeOpacity={0.6}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>LONG PRESS THE BUTTON</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Numeric Values Only"
        placeholderTextColor="#60605e"
        numeric
        keyboardType={"numeric"}
      />

      <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png",
          }}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png",
          }}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60BFC1",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "gold",
    padding: 10,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  buttonStyle: {
    color: "maroom",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "100",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  buttonGPlusStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#BADFD7",
    borderWidth: 1.5,
    borderColor: "#FDB7B9",
    height: 40,
    borderRadius: 5,
    width: 250,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#BADFD7",
    borderWidth: 1.5,
    borderColor: "#FDB7B9",
    height: 40,
    width: 250,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#284647",
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 2,
    height: 40,
  },
  textInputStyle: {
    width: 370,
    backgroundColor: "#fff",
    padding: 16,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
