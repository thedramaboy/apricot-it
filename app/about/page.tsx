import { LightBulbIcon } from "@heroicons/react/24/solid";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
          
            {/* Hero section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            About Apricot Solutions
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are passionate about creating powerful, user-friendly management software
                            that transforms how business operate. Since 2020, we&apos;ve helped over 1,000
                            companies streamline their processes and achive remarkable growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-gray-600">
                                    <p> 
                                        Apricot Solutions was founded with a simple mission: to make business 
                                        management software that actually works for real people. We noticed that 
                                        most management tools were either too complicated or too basic.
                                    </p>
                                    <p>
                                        Our team of experienced developers and business analysts came together 
                                        to create solutions that strike the perfect balance between powerful 
                                        functionality and intuitive design.
                                    </p>
                                    <p>
                                        Today, we&apos;re proud to serve businesses of all sizes, from small startups 
                                        to large enterprises, helping them save time, reduce costs, and focus on 
                                        what they do best.
                                    </p>
                                </div>
                            </div>    
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-4xl font-bold mb-2">1000+</div>
                                        <div className="text-blue-100">Happy Clients</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold mb-2">5</div>
                                        <div className="text-blue-100">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold mb-2">99.9%</div>
                                        <div className="text-blue-100">Uptime</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold mb-2">24/7</div>
                                        <div className="text-blue-100">Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Our Core Values
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                                <p className="text-gray-600">
                                    We constantly push the boundaries of what&apos;s possible in business 
                                    software, always looking for better ways to solve complex problems.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
                                <p className="text-gray-600">
                                    Every decision we make is guided by what&apos;s best for our customers. 
                                    Your success is our success, and we&apos;re committed to your growth.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                                <p className="text-gray-600">
                                    We believe in building software that lasts. Every line of code is 
                                    crafted with attention to detail and tested to ensure reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Our diverse team brings together expertise from software development, 
                            business analysis, and customer success to create exceptional solutions.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">

                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">JS</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">John Smith</h3>
                                <p className="text-blue-600 font-medium">CEO & Founder</p>
                                <p className="text-gray-600 mt-2">
                                    15+ years in enterprise software development
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">SD</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Sarah Davis</h3>
                                <p className="text-green-600 font-medium">CTO</p>
                                <p className="text-gray-600 mt-2">
                                    Expert in cloud architecture and security
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">MJ</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Mike Johnson</h3>
                                <p className="text-purple-600 font-medium">Head of Customer Success</p>
                                <p className="text-gray-600 mt-2">
                                    Passionate about helping clients achieve their goals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to join our growing community?
                    </h2>
                    <p className="text-xl mb-8">
                        Let&apos;s discuss how we can help transform your business oprations.
                    </p>
                    <a 
                        href="/contact"
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                        Get in touch
                    </a>
                </div>
            </section>

        </main>
    );
}