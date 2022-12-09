import React, { useEffect, useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { Header } from './components/Header'
import {api} from './api';
import {Infos} from './components/Infos';

const App = () => {
	const [loading, setLoading] = useState(false);
	const [dataInfos, setDataInfos] = useState({});

	const handleLogin = async (login: string, senha: string) => {
		
		let json = await api.loginAuth(login, senha);

		if(json.token) {
			await window.localStorage.setItem("token", JSON.stringify(json.token));
			await window.localStorage.setItem("email", JSON.stringify(json.login));
			await getInfo();
			alert("Login realizado com sucesso!");			
		} else {
			alert("Ocorreu algum erro!");
		}
	}

	const getInfo = async () => {
		let email = window.localStorage.getItem("email");
		let json = await api.getDataByEmail(email);
		if (json) {
			setDataInfos(json);
			setLoading(true);
		}
	}

	const changeLoading = () => {
		setLoading(!loading);
	}

	return (
		<>
			<Header />
			{!loading  && < LoginForm onAdd={handleLogin}/>}
			<hr />
			{loading && <Infos data={dataInfos} logout={changeLoading}/>}
		</>
	);
}

export default App;
