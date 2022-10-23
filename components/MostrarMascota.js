import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MostrarMascota = ({
  navigation,
  onPress,
  nombreMascota,
  edadMascota,
  idMascota,
  rutaImagen,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: rutaImagen }} style={styles.imagen}></Image>
      <Text>Nombre: {nombreMascota}</Text>
      <Text>Edad: {edadMascota}</Text>
      <TouchableOpacity
        onPress={onPress
        }
      >
        <Text>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MostrarMascota;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
