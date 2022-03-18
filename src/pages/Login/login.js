import Input from "../../components/input";
import Button from "../../components/button";
import './login.css'
import {useState} from "react";

function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const onClick = () => {
        console.log(login)
        console.log(password)

        console.log(JSON.stringify({login, password}))

        fetch('http://127.0.0.1:4000/login', {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({login, password})
        }).then((response) => {
            return console.log(response.body)
        }).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className="login">

            <Input value={login} className={"input"} onChange={e => {
                setLogin(e.target.value)
            }}/>
            <Input value={password} className={"input"} onChange={e => {
                setPassword(e.target.value)
            }}/>

            <Button data={{login, password}} className={"button"} text={"login"}
                    onClick={onClick}
            />
        </div>
    );
}

export default Login;
