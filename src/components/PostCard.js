"use client"

import { useRouter } from "next/navigation"

export default function PostCard ({data}) {

    const route = useRouter()
    
    return <>
        <div className="card p-4 text-center text-white"
            key={data.id}
            onClick={() => route.push('/posts/save/' + data.id) }
            style={{cursor: 'pointer'}}
        >
            <h5>{data.title}</h5>
            <h6>{data.description}</h6>
            <div className="text-center">
                <img src={data.image} style={{ width: "100px", borderRadius: "50%"}}/>
            </div>
        </div>
    </>
}