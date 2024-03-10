'use client'

import { signOut, useSession } from "next-auth/react"

export default function IndexPage () {
    
    const { data: sesion, status } = useSession()

    return <>
        <div className="d-flex justify-content-between py-2">
            <h2 className="mt-2">Hello World, desde NextJs!</h2>
            <button onClick={() => signOut()} className="btn btn-dark">
                Cerrar Sesion
            </button>
        </div><hr/>
        <div className="row">
            <div className="col-md-8 mx-auto">
                <pre>
                    {JSON.stringify({sesion, status}, null, 2 )}
                </pre>
            </div>
        </div>
    </>
}