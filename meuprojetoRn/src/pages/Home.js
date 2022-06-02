import React from "react";
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorDarkFontGithub = '#4F565E'
const colorFontGithub = '#C9D1D9';
const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/102269672?s=400&u=f93e6c093bee82dca02c246cd88475cbd98359b4&v=4';
const urlToMyGithub = 'https://github.com/Walt1397';


export function Home( ){
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };
  
  
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image accessibilityLabel="Foto de perfil de walter " style={style.avatar} source={{uri: imageProfileGithub}} />
        <Text accessibilityLabel="Nome: Walte Ebbers" style={[style.defaultText, style.name]}>Walter Ebbers</Text>
        <Text accessibilityLabel="Usuário de github: Walt1397" style={[style.defaultText, style.nickname]}>Walt1397</Text>
        <Text accessibilityLabel="Resumo do perfil: Estudante de Análise e Desenvolvimento de Sistemas. Atualmente foco no estudo da linguagem Java Script. " style={[style.defaultText, style.description]}>Estudante de Análise e Desenvolvimento de Sistemas. Atualmente foco no estudo da linguagem Java Script.
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
          <Text style={[style.defaultText, style.textButto]}>Open in Github</Text>
        </View>
        </Pressable>

      
      
      </View>

     
    </SafeAreaView>


  );
};


const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  button : {
    marginTop: 10,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textbutto: {
    fontSize: 16,
    fontWeight: 'bold',
  },


});
