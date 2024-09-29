import { useRouteError } from "react-router-dom"

const ErrorPages = ()=>{
    const error = useRouteError()
    return (
        <div className="w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500 grid place-content-center">
            <h1 className="text-5xl font-light tracking-wide text-cyan-300">OOps!</h1>
            <p className="text-xl font-normal tracking-wide">Seems you&apos;ve got yourself into a trouble</p>
            <p className="text-rose-500">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPages