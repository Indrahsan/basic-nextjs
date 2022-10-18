import { useEffect } from "react"
import { useRouter } from "next/router"

export default function custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
           router.push('/')
        }, 2000)
    }, [])
    return (
        <div>
            <h1 className="tittle-not-found">Oooopppsss....</h1>
            <h1 className="tittle-not-found">Not Found!!</h1>
        </div>
    )
}