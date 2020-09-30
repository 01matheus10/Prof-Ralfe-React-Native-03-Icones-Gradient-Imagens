import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([
        {
            id: '1',
            titulo: 'Bloodborne',
            descricao: 'Enfrente seus pesadelos enquanto busca respostas na antiga cidade de Yharnam, agora amaldiçoada com uma estranha doença endêmica que se espalha pelas ruas como fogo. Perigo, morte e loucura estão em cada canto deste sombrio e horroroso mundo, e você deve descobrir seus segredos mais sombrios para sobreviver.',
            desenvolvedora: 'FromSoftware.',
            anoPublicacao: '2015',
            foto: require('../../../assets/itens/bloodborne.png'),
        },
        {
            id: '2',
            titulo: 'God of War',
            descricao: 'Vivendo como um homem, fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e a uma segunda oportunidade de ser pai. Junto ao seu filho, Atreus, os dois vão se aventurar pelas selvagens florestas nórdicas e lutar para cumprir uma missão profundamente pessoal.',
            desenvolvedora: 'SIE Santa Monica Studio',
            anoPublicacao: '2018',
            foto: require('../../../assets/itens/god.jpg'),
        },
        {
            id: '3',
            titulo: 'Grand Theft Auto V',
            descricao: 'O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas',
            desenvolvedora: 'Rockstar Games',
            anoPublicacao: '2013',
            foto: require('../../../assets/itens/gtaV.png'),
        },
        {
            id: '4',
            titulo: 'Forza Horizon 4',
            descricao: 'é um jogo de corrida em mundo aberto, é um dos primeiros jogos a apresentar um sistema dinâmico das quatro estações do ano; Verão, Primavera, Outono e Inverno.[3] Cada estação dentro do jogo durará um semana do nosso calendário real, ou seja a cada uma semana a estação é alterada subsequente, caso o jogador entre em modo cooperativo ou multiplayer de outros jogadores, a estação será sincronizada de acordo com o host.',
            desenvolvedora: 'Playground Games',
            anoPublicacao: '2018',
            foto: require('../../../assets/itens/fh4.jpg'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name='arrow-back' size={24} color='white'/>
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name='add' size={24} color='white' /> 
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista data={item} />}
            />
            
        </View>
    );
}

export default Colecao;