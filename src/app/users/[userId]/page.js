import Link from "next/link"

async function getUser (id) {
    const resp = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await resp.json()
    return data.data
}

export default async function UserId ({params}) {

    const resp = await getUser(params.userId)
    
    return <>
        <div className="text-center">
            <h2 className="card-header py-2 text-center">{resp.email}</h2>
            <img src={resp.avatar}></img><br/><br/>
            <buttton className="btn btn-info">
                <Link className="nav-link" href={'/users'}>Regresar</Link>
            </buttton>
        </div>
    </>
}