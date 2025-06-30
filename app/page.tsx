import Link from 'next/link'
import { BoltIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

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

      {/* Features section */}
      <section className='py-16 bg-gray-50'>

        <div className='container mx-auto px-6'>

          <h2 className='text-4xl font-bold text-center mb-12'>
            Why choose our solutions?
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <BoltIcon className='w-12 h-12 text-blue-600 mx-auto mb-4'/>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">
                Streamline your workflow with our optimized management tools
              </p>
            </div>

            <div className='text-center p-6'>
              <ShieldCheckIcon className='w-12 h-12 text-green-600 mx-auto mb-4'/>
              <h3 className="text-xl font-semibold mb-2">Reliable</h3>
              <p className="text-gray-600">
                99.9% uptime guarantee with enterprise-grade security
              </p>
            </div>

            <div className='text-center p-6'>
              <UsersIcon className='w-12 h-12 text-purple-600 mx-auto mb-4'/>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Built for teams of all sizes with real-time collaboration features
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-blue-600 text-white'>

        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl mb-8'>
            Join thousands of companies already using our solutions
          </p>
          <Link
            href='/contact'
            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block'
          >
            Get Started Today!
          </Link>
        </div>

      </section>

    </main>
  );
}