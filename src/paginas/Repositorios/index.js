import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { pegarRepositorioDoUsuarios } from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';
import { useIsFocused } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();


    useEffect(() => {
        async function pegarRepos(){
            const resultados = await pegarRepositorioDoUsuarios(route.params.id);
            setRepo(resultados);
        }
        pegarRepos();
    }, [estaNaTela]);

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio')}
                >

                <FlatList
                    data={repo}
                    style={{width: '100%'}}
                    keyExtractor={repo => repo.name}
                    renderItem={({item}) => (
                        <TouchableOpacity style={estilos.repositorio} onPress={()=>navigation.navigate('InfoRepositorio', {item})}>
                            <Text style={estilos.repositorioNome}> {item.name}</Text>
                            <Text style={estilos.repositorioData}>{item.data}</Text>
                        </TouchableOpacity>
                    )}
                />

                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>


        </View>
    );
}
