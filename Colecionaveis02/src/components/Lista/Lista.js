import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {
    const [item, setItem] = useState(data);

    return(
        <View>  
            <LinearGradient colors={['#11417b', '#92afd7', '#92afd7']}>
                <Text style={estiloLista.itemTitulo}> {item.titulo}</Text>
                <Text style={estiloLista.itemSubTitulo}> {item.desenvolvedora} ({item.anoPublicacao})</Text>
            </LinearGradient>
            
            <LinearGradient colors={['#92afd7', '#92afd7', '#11417b']}>
                <Image source={item.foto} style={estiloLista.itemFoto} resizeMode='contain'/>
            </LinearGradient>
        </View>
    );
}

export default Lista;