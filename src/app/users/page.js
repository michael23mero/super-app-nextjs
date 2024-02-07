import User from "@/components/User"

async function getUsers() {
    const resp = await fetch('https://reqres.in/api/users')
    const data = await resp.json()
    return data.data
}

export default async function Users () {
    const user = await getUsers()
    return <>
        <h1 className="text-center">Users</h1>
        <User data={ user }/>
    </>
}