'use client'

import { useState } from "react"

export default function IndexPage () {

    const [ file, setFile ] = useState()

    return <>
        <h1 className="text-center">Hello World, desde NextJs!</h1>
        <div className="row">
            <div className="col-md-5 mx-auto">
                <div className="card p-4 text-center">
                    <form onSubmit={ async (e) => {
                        e.preventDefault(); if(!file) return;

                        const form = new FormData();
                        form.set('file', file);

                        const resp = await fetch('/api/upload', {
                            method: 'POST', body: form
                        })

                        const data = await resp.json()
                        alert(data.msg)
                    }}>
                        <div className="form-group">
                            <input type="file" className="form-control"
                                onChange={(e) => {
                                    setFile(e.target.files[0])
                                }}
                            />
                        </div>

                        { file && <img src={URL.createObjectURL(file)} className="w-50 py-3"/> } <br/>

                        <button className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}