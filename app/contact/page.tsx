'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
    return (
        <main className='min-h-screen bg-gray-50'>
            
            {/* Hero section */}
            <section className='bg-white py-16'>
                <div className='container mx-auto px-6'>
                    <h1 className='text-5xl font-bold text-gray-900 mb-6'>
                        Get in touch
                    </h1>
                    <p className='text-xl text-gray-600 leading-relaxed'>
                        Ready to transform your business? We&apos;d love to hear from you. 
                        Contact us today for a free consultation and discover how our 
                        solutions can drive your success.
                    </p>
                </div>
            </section>

            {/* Contact section */}
            <section className='py-16'>
                <div className='container mx-auto px-6'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='grid lg:grid-cols-2 gap-12'>

                            {/* Contact form */}
                            <div className='bg-white rounded-lg shadow-lg p-8'>
                                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                    Send us a message
                                </h2>
                                {/* <ContactForm/> */}
                            </div>

                            {/* Contact info */}
                            <div className='space-y-8'>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                                        Contact Information
                                    </h3>
                                    <div className='space-y-6'>

                                        <div className='flex items-start space-x-4'>
                                            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                                                <PhoneIcon className='w-6 h-6 text-blue-600'/>
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-gray-900'>Phone</h4>
                                                <p className='text-gray-600'>+1 (555) 123-4567</p>
                                                <p className='text-gray-600'>+1 (555) 765-4321</p>
                                            </div>
                                        </div>

                                        <div className='flex items-start space-x-4'>
                                            <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                                                <EnvelopeIcon className='w-6 h-6 text-green-600'/>
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-gray-900'>Email</h4>
                                                <p className='text-gray-600'>hello@apricotsolutions.com</p>
                                                <p className='text-gray-600'>support@apricotsolutions.com</p>
                                            </div>
                                        </div>

                                        <div className='flex items-start space-x-4'>
                                            <div className='w-12 h-12 b-purple-100 rounded-full flex items-center justify-center'>
                                                <MapPinIcon className='w-6 h-6 text-purple-600'/>
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-gray-900'>Address</h4>
                                                <p className='text-gray-600'>
                                                    123 Business Boulevard<br />
                                                    Suite 456<br />
                                                    Calgary, AB T2P 1N6<br />
                                                    Canada
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex items-start space-x-4'>
                                            <div className='w-12 h-12 bg-orage-100 rounded-full flex  items-center justify-center'>
                                                <ClockIcon className='w-6 h-6 text-orange-600'/>
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-gray-900'>Business Hours</h4>
                                                <p className='text-gray-600'>
                                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                    Saturday: 10:00 AM - 4:00 PM<br />
                                                    Sunday: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick stats */}
                                <div className='bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white'>
                                    <h3 className='text-xl font-bold mb-4'>Why Choose Us?</h3>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='text-center'>
                                            <div className='text-2xl font-bold'>24/7</div>
                                            <div className='text-sm text-blue-100'>Support Available</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='text-2xl font-bold'>&lt;1hr</div>
                                            <div className='text-sm text-blue-100'>Response Time</div>
                                        </div>
                                         <div className='text-center'>
                                            <div className='text-2xl font-bold'>1000+</div>
                                            <div className='text-sm text-blue-100'>Happy Clients</div>
                                        </div>
                                         <div className='text-center'>
                                            <div className='text-2xl font-bold'>5 Stars</div>
                                            <div className='text-sm text-blue-100'>Average Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className='py-16 bg-white'>
                <div className='container mx-auto px-6'>
                    <div className='max-w-4xl mx-auto'>
                        <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                            Frequently Asked Questions
                        </h2>

                        <div className='space-y-8'>
                            <div className='border-b border-gray-200 pb-6'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                                    How quickly can we get started?
                                </h3>
                                <p className='text-gray-600'>
                                    Most implementations can begin within 1-2 weeks of signing up. 
                                    Our team will work with you to create a customized timeline 
                                    that fits your business needs.
                                </p>
                            </div>

                            <div className='border-b border-gray-200 pb-6'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                                    do you offer training for our team?
                                </h3>
                                <p className='text-gray-600'>
                                    Yes! We provide comprehensive training sessions for all our 
                                    solutions. This includes both initial setup training and 
                                    ongoing support to ensure your team gets the most out of our tools.
                                </p>
                            </div>

                            <div className='border-b border-gray-200 pb-6'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                                    Can I customize the software for my specific needs?
                                </h3>
                                <p className='text-gray-600'>
                                    Absolutely! All our solutions are highly customizable. 
                                    We can work with you to tailor the software to match your 
                                    specific business processes and requirements.
                                </p>
                            </div>

                            <div className='pb-6'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                                    What kind of support do you provide?
                                </h3>
                                <p className='text-gray-600'>
                                    We offer 24/7 technical support through multiple channels 
                                    including email, phone, and live chat. Our average response 
                                    time is less than 1 hour for critical issues.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Map section placeholder */}
            <section className='py-16'>
                <div className='container mx-autp px-6'>
                    <div className='max-w-4xl mx-auto'>
                        <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
                            Visit Our Office
                        </h2>
                        <div className='bg-gray-300 rounded-lg h-64 flex items-center justify-center'>
                            <div className='text-center'>
                                <MapPinIcon className='w-16 h-16 text-gray-500 mx-auto mb-4'/>
                                <p className='text-gray-600'>interactive Map coming</p>
                                <p className='text-sm text-gray-500'>123 Business Boulevard, Calgary, AB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}