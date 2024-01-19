import Link from "next/link"

async function getUser (id) {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await resp.json()
    return data
}

export default async function UserId ({params}) {

    const resp = await getUser(params.userId)
    return <>
        <div className="text-center">
            <h2 className="card-header py-2 text-center">{resp.name}</h2>
            <img src={resp.image}></img><br/><br/>
            <buttton className="btn btn-warning"><Link className="nav-link" href={'/users'}>Regresar</Link></buttton>
        </div>
    </>
}