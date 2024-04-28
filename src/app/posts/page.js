import Link from "next/link"
import PostCard from "@/res/components/PostCard";

async function loadPosts () {
    const resp = await fetch(`${process.env.API_URL}/post`, { cache: "no-store" })
    const data = await resp.json()
    return data
}

export default async function Post () {

    const posts = await loadPosts()

    return <>
        <div className="d-flex justify-content-end">
            <button className="btn btn-primary">
                <Link className="nav-link" href={'/posts/save'}>Nuevo Post</Link>
            </button>
        </div><hr/>
        <div className="row">
            {
                posts.map((post) => {       
                    return <div className="col-4" key={ post.id }>
                        <PostCard data={ post }/>
                    </div>
                })
            }
        </div>
    </>
}