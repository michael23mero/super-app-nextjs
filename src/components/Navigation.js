import { getServerSession } from "next-auth"
import Link from "next/link"

export default async function Navigation () {

    const session = await getServerSession()
    return <>
        <nav className="py-2 bg-primary fixed-top shadow font-weigth">
            <div className="container d-flex justify-content-between">
                <h6 className="mt-2 text-white">
                    <Link className="nav-link" href={'/'}>App</Link>
                </h6>
                <ul className="nav">
                    { session ? (
                        <>
                            <li className="nav-item"> <Link className="nav-link" href={'/'}>Home</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" href={'/posts'}>Posts</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" href={'/users'}>Users</Link> </li>
                        </>
                        ) : (
                            <li className="nav-item"> <Link className="nav-link" href={'/login'}>Login</Link> </li>
                        )
                    }
                </ul> 
            </div>
        </nav>
    </>
}