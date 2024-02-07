"use client"

import { useRouter } from "next/navigation"

export default function User ({data}) {

    const router = useRouter()

    return <ul className="list-group">
        {
            data.slice(0, 4).map((user) => {
                return <>
                    <li className="list-group-item d-flex justify-content-between"
                        key={user.id}
                        onClick={() => { router.push(`/users/${user.id}`) }}
                        style={{cursor: 'pointer'}}
                    >
                        <h6 className="mt-3">{ user.email }</h6>
                        <img src={user.avatar} style={{ width: "50px", borderRadius: "50%"}}/>
                    </li><br/>
                </>
            })
        }
    </ul>
}