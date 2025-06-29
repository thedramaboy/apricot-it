import Link from "next/link";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function PostsPage() {

    const posts: IPost[] = await getPosts();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6"> All Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="border p-4 rounded-lg shadow hover:shadow-xl transition-shadow">
                        <h2 className="text-xl font-semibold mb-2 truncate">{post.title}</h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            Read More
                        </Link>
                    </div>   
                ))}
            </div> 
        </div>
    );
}