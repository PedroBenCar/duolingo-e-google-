import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import coruja from './assets/coruja.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={coruja} style={styles.logo} />
        <Text style={styles.logoText}>duolingo</Text>
        <View style={styles.contentTextContainer}>
          <Text style={styles.contentText}>Learn a language for free. Forever.</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.startedButton}>
            <Text style={styles.startedText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountText}>I ALREADY HAVE AN ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1cb53a',
    marginTop: 10,
  },
  contentTextContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#2f2f2f',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  startedButton: {
    backgroundColor: '#1cb53a',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  startedText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountButton: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#1cb53a',
  },
  accountText: {
    color: '#1cb53a',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
