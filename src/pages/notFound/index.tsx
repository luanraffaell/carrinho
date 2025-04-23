import { Link } from "react-router";


export function NotFound(){
    return (
        <div className="flex w-full min-h-screen justify-center items-center flex-col">
            <h1 className="text-8xl font-extrabold">404</h1>
            <h2 className="font-bold text-4xl mb-4">pagina não encontrada!</h2>
            <Link className='bg-black text-white py-1 px-4 rounded-md' to="/">
                Voltar para home
            </Link>
        </div>
    )
}