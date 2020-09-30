import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
   container: {
      flex: 1,
   },
   fundo: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
   },
   logoContainer: {
      alignItems: 'center',
      marginBottom: 30,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   campoContainer: {
      flexDirection: 'row',
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      margin: 10,
      alignItems: 'center',
   },
   campo: {
      fontSize: 18,
      color: "#FFFFFF",
      marginLeft: 40,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: 'white',
    },
   botaoLinearGradient: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 8,
      height: 50,
      paddingLeft: 15,
      paddingRight: 15,
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      paddingLeft: 15,
      backgroundColor: 'transparent',
   },
});

  export default estiloLogin;