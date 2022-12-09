type Props = {
    data: any,
    logout: any
}




export const Infos = ({data, logout}: Props ) => {
    
    const removeToken = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("email");
        alert('Logout realizado com sucesso!');
        logout();
    }

    console.log(data);
    
    let albuns = data.albunsPessoais;
    console.log(albuns);

    return (
        <>
            <h1>Seja Bem-vindo {data.nome} {data.sobrenome}</h1>
            <h2>Ponto de troca: {data.pontoTroca.nome} </h2>
            <h2>{data.contato.descricao}: {data.contato.numeroOuEmail}</h2>
            <h2>Meus albuns:</h2>
            <ul>
                {albuns.map((item: any, index: number)=>(
                    <li key={index}>{item.albumTipo.nome}</li>
                ))}
            </ul>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={removeToken} >Logout</button>

        </>

    );
}

/*

{
	"id": 1,
	"nome": "Joao",
	"sobrenome": "Souza",
	"email": "admin@teste",
	"senha": "$2a$10$0t101SmjvSI3xOnylkAsL.KUwr.CThEc7nOk31O1ORdAfuayBKQZi",
	"pontoTroca": {
		"id": 1,
		"nome": "Natal Shopping"
	},
	"contato": {
		"id": 1,
		"numeroOuEmail": "84991266475",
		"descricao": "telefone"
	},
	"roles": [
		{
			"id": 1,
			"name": "Admin"
		}
	],
	"reputacaoColecionador": null,
	"albunsPessoais": [
		{
			"id": 2,
			"albumTipo": {
				"id": 2,
				"nome": "Cavaleiros do Zodiaco",
				"descricao": "Esse e um album de teste"
			},
			"figurinhasAdquiridas": [],
			"figurinhasDesejadas": []
		},
		{
			"id": 1,
			"albumTipo": {
				"id": 1,
				"nome": "Copa do Mundo 2022",
				"descricao": "Esse e um album de teste"
			},
			"figurinhasAdquiridas": [],
			"figurinhasDesejadas": []
		}
	]
}

*/