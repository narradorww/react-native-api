import api from "../api";


export async function pegarRepositorioDoUsuarios(id){
    try {
        const resultado = await api.get(`/repos?postID=${id}`);
        return resultado.data;
        
    }
    catch (error) {
        console.log(error);
    }
}


export async function salvarRepositorioDoUsuarios(postId, nome, data, id){
    try {
         await api.put(`/repos?repos=${id}`, {
            name: nome,
            data: data,
            postId: postId,
            
        });
        return 'sucesso'
        
    }
    catch (error) {
        console.log(error);
        return 'erro'
    }
}

export async function criarRepositorioDoUsuarios(postId, nome, data, id){
    try {
         await api.post(`/repos?repos=${id}`, {
            name: nome,
            data: data,
            postId: postId,
            
        });
        return 'sucesso'
        
    }
    catch (error) {
        console.log(error);
        return 'erro'
    }
}

export async function deletarRepositorioDoUsuarios(id){
    try {
        await api.delete(`/repos/${id}`);
        return 'sucesso'
        
    }
    catch (error) {
        return 'erro'
    }
}
