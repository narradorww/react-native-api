import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { criarRepositorioDoUsuarios } from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');


        async function criarRepo(){
            const resultados = await criarRepositorioDoUsuarios(route.params.postId, nome, data);
            if(resultados === 'sucesso'){
                Alert.alert('Repositório criado com sucesso!');
                navigation.goBack();
            }else{
                Alert.alert('Erro ao criar repositório!');
            }
        
            }
   


    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={estilos.botao} onPress={criarRepo}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
