import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

/*  */

const AgregarMascota = () => {
  const [nombreMascota, setNombreMascota] = React.useState("");
  const [edadMascota, setEdadMascota] = React.useState("");

  return (
    <ScrollView style={{ padding: 30 }}>
      <View style={styles.container}>
        <TextInput
          value={nombreMascota}
          placeholder="Nombre:"
          onChangeText={(txt) => setNombreMascota(txt)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          value={edadMascota}
          keyboardType="numeric"
          placeholder="Edad"
          onChangeText={(txt) => setEdadMascota(txt)}
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            if (nombreMascota != "" && edadMascota != "") {
              Alert.alert(
                "Se agregó la mascota",
                `
Nombre: ${nombreMascota}
Edad: ${edadMascota}
                `,
                [{ text: "Salir" }]
              );
              setEdadMascota("");
              setNombreMascota("");
            } else {
              Alert.alert("Error", "Ingrese todos los datos", [
                { text: "Salir" },
              ]);
            }
          }}
        >
          <Text style={{ color: "#575757" }}>Subir mascota</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AgregarMascota;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginHorizontal: 15,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#7e7e7e",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 10,
  },
  btns: {
    backgroundColor: "#48c8e8",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
