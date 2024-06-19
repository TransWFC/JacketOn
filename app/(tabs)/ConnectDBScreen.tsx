import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ConnectDBScreen = () => {
  const [message, setMessage] = useState('');

  const connectToDB = async () => {
    try {
      const res = await axios.get('http://192.168.3.15:3000/connect-db');
      setMessage(res.data);
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      setMessage('No hay Conexión');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={connectToDB}>
        <Text style={styles.buttonText}>Conectar a BD</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Color de fondo claro
    padding: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Color verde del botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff', // Color del texto blanco
    fontSize: 16,
  },
  message: {
    fontSize: 18,
    color: '#333', // Color del texto oscuro
    marginTop: 20,
  },
});

export default ConnectDBScreen;
