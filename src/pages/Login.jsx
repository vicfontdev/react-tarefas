import { useContext, useRef } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";

const Login = () => {

    const emailImput = useRef();
    const senhaImput = useRef();
    const { setLogado } = useContext(LoginContext);
    const navigate = useNavigate();

    function logar(event){
        event.preventDefault();

        let dados = {
            email: emailImput.current.value,
            senha: senhaImput.current.value
        }
        
        if(dados.email == "fcovcfn@gmail.com" && dados.senha == "1234"){
            setLogado(true);
            navigate("/");
        }else{
            alert("Email ou senha incorretos!")
        }
        
    }

    return (
        <div className="h-screen flex justify-center items-center bg-slate-100">
            <form onSubmit={logar} className="w-[350px] p-4 rounded-lg bg-white">
                <h3 className="text-lg text-slate-500 font-bold">Seja bem-vindo</h3>
                <label className="block text-slate-700 font-bold mb-1">E-mail</label>
                <input
                    ref={emailImput}
                    type="text"
                    placeholder="Digite seu e-mail"
                    className="w-full pl-4 rounded border border-slate-300 h-[40px] mb-4"
                />
                <label className="block text-slate-700 font-bold mb-1">Senha</label>
                <input
                    ref={senhaImput}
                    type="password"
                    placeholder="********"
                    className="w-full pl-4 rounded border border-slate-300 h-[40px] mb-4"
                />
                <button className="leading-[46px] bg-slate-500 text-white px-4 rounded font-semibold">Entrar</button>
            </form>
        </div>
    );
}

export default Login;