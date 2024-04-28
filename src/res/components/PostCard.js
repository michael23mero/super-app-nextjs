"use client"

import { useRouter } from "next/navigation"

export default function PostCard ({data}) {

    const router = useRouter()
    
    return <>
        <div className="card p-4 text-center"
            key={data.id}
            onClick={() => router.push('/posts/save/' + data.id) }
            style={{cursor: 'pointer'}}
        >
            <h5 className="card-header py-2">{data.title}</h5>
            
            <div className="mt-2 text-center">
                <h6>{data.description}</h6>
                <img src={data.image} style={{ width: "100px", borderRadius: "50%"}}/>
            </div>
        </div>
    </>
}