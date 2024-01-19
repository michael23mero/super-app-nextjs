import User from "@/components/User"

async function getUsers() {
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json()
    return data.results
}

export default async function Users () {
    const users = await getUsers()
    return <>
        <h1 className="text-center">Users</h1>
        <User data={ users } />
    </>
}