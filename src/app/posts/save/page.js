"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostSave ({params}) {

    const route = useRouter()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState()

    useEffect(() => {
        if(params.postId){
            fetch(`/api/post/${params.postId}`)
                .then(resp => resp.json())
                .then(data => {
                    setTitle(data.title), setDescription(data.description)
                })
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = { title, description }

        const form = new FormData();
        form.set('image', image);
        form.set('title', title);
        form.set('description', description);

        if(params.postId){
            await fetch(`/api/post/${params.postId}`,{
                method: 'PUT', body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
        }else{
            const response = await fetch('/api/post',{
                method: 'POST', body: form
            });
        }
        route.refresh(); route.push('/posts')
    }

    return <div className="col-md-5 mx-auto">
        <form onSubmit={onSubmit} className="card p-4">
            <div className="form-group mb-2">
                <input type="text" className="form-control" placeholder="Enter title" name="title"
                    onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className="form-group mb-2">
                <input type="text" className="form-control" placeholder="Enter description" name="description"
                    onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <div className="form-group">
                <input type="file" className="form-control"
                    onChange={(e) => {
                        setImage(e.target.files[0])
                    }}
                />
            </div>
            { image && <img src={URL.createObjectURL(image)} className="mx-auto w-50 py-3"/> } <br/>
            <div className="text-center">
                <button className="btn btn btn-primary" type="submit">Save</button>
                {
                    params.postId && (
                        <button className="btn btn-danger m-2"
                            onClick={async () =>{
                                await fetch(`/api/post/${params.postId}`, {
                                    method: 'DELETE'
                                });
                                route.refresh(); route.push('/posts')
                            }}>Remove
                        </button>
                    )
                }
            </div>
        </form>
    </div>
}