"use client";

import axios from "axios";

export default function Register () {

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', {
                email: e.target.elements.email.value,
                password: e.target.elements.password.value
            })
            alert(response.data.msg)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return <>
        <h1 className="text-center">Register</h1>
        <div className="col-md-5 mx-auto">
            <div className="card p-4">
                <form onSubmit={ handleSubmit }>
                    <div className="form-group mb-2">
                        <input name="email" className="form-control" placeholder="Enter email" type="email"/>
                    </div>
                    <div className="form-group mb-4">
                        <input name="password" className="form-control" placeholder="Enter password" type="password"/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}