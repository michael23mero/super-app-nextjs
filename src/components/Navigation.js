import Link from "next/link"

export default function Navigation () {
    return <>
        <nav className="py-2 bg-light fixed-top shadow font-weigth">
            <div className="container d-flex justify-content-between">
                <h6 className="mt-2">
                    <Link className="nav-link" href={'/'}>App</Link>
                </h6>
                <ul className="nav">
                    <li className="nav-item"> <Link className="nav-link" href={'/'}>Home</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" href={'/users'}>Users</Link> </li>
                </ul> 
            </div>
        </nav>
    </>
}