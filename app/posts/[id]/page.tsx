import Link from "next/link";

interface IPost {
    userId: string;
    id: number;
    title: string;
    body: string;
}

async function getPostById(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store"
    });

    if(!res.ok) {
        throw new Error("Failed to fetch post");
    }

    return res.json();
}

export default async function PostDetailPage ({ params } : {params: {id: string}}) {
    const { id } = params;

    // if (id === '13') {
    // throw new Error('Oh no! Failed to fetch post 13!');
    // }

    const post: IPost = await getPostById(id);

    return (
        <div className="container mx-auto p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-800">{post.title}</h1>
                <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
                
                <div className="mt-8 border-t pt-4">
                    <Link href="/posts" className="text-blue-600 hover:text-blue-800 transition-colors">
                        Back to All Posts
                    </Link>
                </div>
            </div>
        </div>
    );

}

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: IPost[] = await res.json();

    return posts.map((post) => ({
        id: post.id.toString()
    }))
}

// async function addComment(formData: FormData) {
//     'use server';

//     const comment = formData.get('comment');

//     console.log("New comment received: ", comment);
//     console.log("---")

// }