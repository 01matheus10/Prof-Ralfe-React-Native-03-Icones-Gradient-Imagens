import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
   },
   header:{
       height: 40,
       width: '100%',
       backgroundColor: '#14417b',
       flexDirection: 'row',
       alignItems: "flex-end",
       padding: 5,
   },
   fundo: {     
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoBackground: {
      width: 140,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: "#14417b",
   },
   botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
   },
});

  export default estiloInicial;