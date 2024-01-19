"use client"

import { useRouter } from "next/navigation"

export default function User ({data}) {

    const router = useRouter()
    return <>
        <p>{data.name}</p>
        <img src={data.image}></img>

        <ul className="list-group">
            {
                data.map((user) => {
                    return <>
                        <li className="list-group-item d-flex justify-content-between"
                            onClick={() => { router.push(`/users/${user.id}`) }}
                            key={user.id} style={{cursor: 'pointer'}}>
                                <h6 className="mt-3">{ user.name }</h6>
                                <img src={user.image} style={{ width: "50px", borderRadius: "50%"}}/>
                        </li><br/>
                    </>
                })
            }
        </ul>
    </>
}