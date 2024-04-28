'use client'

import { useSession } from "next-auth/react"
import Link from "next/link" // Link, next/link para cambiar de pagina

export default function Navigation () {

    const { data: session } = useSession()
    
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top shadow">
            <div className="container">
                <Link className="nav-link text-white" href={'/'}>APP</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#bs-menu-option">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="bs-menu-option">
                    <div className="navbar-nav ml-auto">
                    { session ? (
                        <>
                            <Link className="nav-link text-white" href={'/'}>Home</Link>
                            <Link className="nav-link text-white" href={'/posts'}>Posts</Link>
                            <span className="nav-link text-white">{session.user.email}</span>
                        </>
                        ) : (
                            <>
                                <Link className="nav-link text-white" href={'/users'}>Users</Link>
                                <Link className="nav-link text-white" href={'/register'}>Register</Link>
                                <Link className="nav-link text-white" href={'/login'}>Login</Link>
                            </>
                        )
                    }
                    </div>
                </div>
            </div>
        </nav>
    </>
}