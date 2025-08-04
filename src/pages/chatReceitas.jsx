import {useState} from "react"

const ChatReceitas = () => {
const [mensagens, setMensagens] = useState ([
    {
        id: 1,
        text: "Olá, sou seu assiste de receitas.",
        remetente: 'bot'
    },
    {
        id: 2,
        text: "ingredientes.",
        remetente2: 'usuario'
    },

])



    return (

        <div className="min-h-screen bg-gradient-to-br from-purple-300 via-gray-50 to bg-emerald-200 p-4"> 
            <div className="container mx-auto max-w-4xl" > 
                <header className="text-center mb-8 " >
                    <h1 className="text-5x1 font-bold-gradient-to-r from-purple-600 to bg-emerald-600 text-transparent  bg-clip-text mb-2 " >Dev Chef</h1>
                    <p className="text-gray-600 tesxt-lg" >Seu assistente pessoal para receitas</p>
                </header>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[600px] border border-gray-100 flex-col" >
                    <ListaMensagens mensagen={mensagens}/>
                    <ChatBox></ChatBox>

                </div>

            </div>
        </div>

    )

}