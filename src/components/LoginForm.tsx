import { useState, ChangeEvent } from 'react';

type Props = {
    onAdd: (usuario: string, senha: string) => void;
}

export const LoginForm = ({onAdd}: Props) => {

    const [usuario, setUserName] = useState('');
    const [senha, setPassword] = useState('');

    const handleAddUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }
    
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    
    const handleClick = () => {
        if ( usuario && senha ) {
            onAdd(usuario, senha);
        } else {
            alert("Preencha os campos");
        }
    }

    return (
        <div>
			<fieldset className='border-2 mb-3 p-3'>
				<legend>Entrar no sistema</legend>
				
				<label htmlFor="login">Username:</label>
				<input className='block border' type="text" onChange={handleAddUsername}/>

				<label htmlFor="pass">Senha:</label>
				<input className='block border' type="password" onChange={handlePassword}/>

				<button className='block border' onClick={handleClick}>Entrar</button>
			</fieldset>
		</div>
    );
}