import React from 'react';
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado(props) {
    return (
        <DrawerContentScrollView {...props}>
            
            <View style={estiloRotasDrawer.fotoContainer}>
                <Image
                style={estiloRotasDrawer.foto}
                source={require('../../../assets/imagens/imagemPerfil.png')}
                />
                <Text style={estiloRotasDrawer.nome}>Administrador</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default DrawerPersonalizado;