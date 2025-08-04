import { useState } from "react"


const ChatBox = (onEnviarMensagem, desabilitado) => {
const [mensagem, setMensagem] = useState('')

const handleSubmit = (event) => {
    event.preventDefault();

    onEnviarMensagem(mensagem)
    setMensagem('')
    
}

 
    return (
        <div className="border-t border-gray-200 bg-gray-50/80 p-4">
            <form className="flex space-x-3" onSubmit>
                <input 
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite o ingrediente"
                    disabled={desabilitado}
                className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sn  focus:ring-2 outline-none focus-ring-purple-500" >
                <button
                    type="submit"
                    disabled={desabilitado}
                 className="px-8 py-3 bg-gradient-to-r from-purple-400 to-emerald-400 hover:from-purple-600 hover:to-emerald-700 cursor-pointer text-white rounded-lg disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed" > Enviar </button>
                 </input>
            </form>
        </div>
    )




}

export default ChatBox