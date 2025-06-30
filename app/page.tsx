import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* Hero section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-5xl font-bold mb-6'>
            Welcome to Apricot Solutions
          </h1>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
              Professional management software that streamlines your business operations. 
              From project management to customer relations - we&apos;ve got you covered.
          </p>
          <div className='flex gap-4 justify-center'>
            <Link
              href='/products'
              className='border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
            >
              View Products
            </Link>
            <Link
              href='/about'
              className='border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}