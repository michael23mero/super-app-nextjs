"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login () {

    const router = useRouter()

    const handleSubmit =async (e) => {
        e.preventDefault();

        const response = await signIn('credentials', {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
            redirect: false
        })

        if(response.error) alert(response.error)

        if(response.ok) return router.push('/')
    }

    return <>
        <h1 className="text-center">Login</h1>
        <div className="col-md-5 mx-auto">
            <div className="card p-4">
                <form onSubmit={ handleSubmit }>
                    <div className="form-group mb-2">
                        <input
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"/>
                    </div>
                    <div className="form-group mb-4">
                        <input
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            type="password"/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}