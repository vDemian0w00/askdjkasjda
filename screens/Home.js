
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React from "react";

const MostrarMascota = ({
  onPress,
  nombreMascota,
  edadMascota,
  rutaImagen,
}) => {
  return (
    <View style={styles.container}>
      <Image source={rutaImagen} style={styles.imagen}></Image>
      <Text style={styles.txt}>Nombre: {nombreMascota+'\n'} Edad: {edadMascota}</Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnTxt}>Lo quiero</Text>
      </TouchableOpacity>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{marginTop:10}} fadingEdgeLength={10} >
      <MostrarMascota
        onPress={() => Alert.alert("Se obtuvo la mascota", "Pronto estará junto a ti!", [{ text: "Salir" }],)}
        rutaImagen={require("../assets/imagenes/firulais.jpg")}
        nombreMascota="Firulais"
        edadMascota="3 años"
      />
      <MostrarMascota
        onPress={() => Alert.alert("Se obtuvo la mascota", "Pronto estará junto a ti!", [{ text: "Salir" }],)}
        rutaImagen={require("../assets/imagenes/esquite.png")}
        nombreMascota="Esquite"
        edadMascota="7 años"
      />
      <MostrarMascota
        onPress={() => Alert.alert("Se obtuvo la mascota", "Pronto estará junto a ti!", [{ text: "Salir" }],)}
        rutaImagen={require("../assets/imagenes/solovino.png")}
        nombreMascota="Solovino"
        edadMascota="12 años"
      />
      <MostrarMascota
        onPress={() => Alert.alert("Se obtuvo la mascota", "Pronto estará junto a ti!", [{ text: "Salir" }],)}
        rutaImagen={require("../assets/imagenes/boladepelos.jpg")}
        nombreMascota="Bola de pelos"
        edadMascota="3 años"
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical:5,
    marginHorizontal:15,
    borderWidth:2,
    borderColor:'#7e7e7e',
    borderRadius:10,
    padding:10,
    justifyContent: "space-evenly",
  },
  imagen: {
    width: 40,
    height: 40,
  },
  txt:{
    fontSize: 15,
    alignItems: "center",
  },
  btnTxt:{
    fontSize: 20,
    color: '#0c3a8d',
  },
  btn:{
    borderWidth:1,
    borderColor:'#0c3a8d',
    padding:10,
    borderRadius:10,
  }
});
