import Link from 'next/link';

export default function Header() {
    return (
        <header className='w-full bg-gray-800 text-white p-4 shadow-md'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/" className='text-xl font-bold'>
                    Apricot
                </Link>
                <nav>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link href="/" className="hover:text-blue-400">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-400">About</Link>
                        </li>
                        <li>
                            <Link href="/posts" className="hover:text-blue-400">Posts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}