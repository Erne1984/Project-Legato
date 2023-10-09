import React from "react";

import './ModalLogin.css'

const ModalLogin = () => {
    return (
        <>
            <div className="container-modal">
                <div className="modal">
                    <div className="topo-modal">
                        <h2>Entrar</h2>
                    </div>
                    <div>
                        <div>
                            <label>Email ou nome do usuário</label>
                            <input type="text" />
                        </div>
                        <div>
                            <span><label>Senha</label><span>Esqueceu a senha</span></span>
                            <input type="text" />
                        </div>
                        <div>
                            <button>Entrar</button>
                        </div>
                        <div>
                            <span>Não tem uma conta?</span>
                            <span>Cadastra-se</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLogin;