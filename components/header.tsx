import Link from 'next/link';

export default function Header() {
    return (
        <header className='w-full bg-gray-800 text-white p-4 shadow-md'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/" className='text-2xl font-bold hover:text-blue-400 transition-colors'>
                    🍑 Apricot
                </Link>
                <nav>
                    <ul className='flex space-x-6'>
                        <li>
                            <Link href="/" className="hover:text-blue-400 transition-colors font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/products' className="hover:text-blue-400 transition-colors font-medium">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-400 transition-colors font-medium">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-400 transition-colors font-medium">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts" className="hover:text-blue-400 transition-colors font-medium">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}