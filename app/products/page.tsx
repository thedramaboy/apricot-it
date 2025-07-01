import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';



interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    features: string[];
    category: string;
    popular?: boolean;
}

const products: Product[] = [
    {
        id: 1,
        name: "Project Manager Pro",
        description: "Complete project management solution for teams of all sizes",
        price: "$29/month",
        category: "Project Management",
        popular: true,
        features: [
            "Task Management & Tracking",
            "Team Collaboration Tools",
            "Gantt Charts & Timeline",
            "Real-time Reporting",
            "File Sharing & Storage"
        ]
    }, 
    {
        id: 2,
        name: "CRM Excellence",
        description: "Customer relationship management system to boost your sales",
        price: "$49/month",
        category: "Customer Management",
        features: [
            "Contact Management",
            "Sales Pipeline Tracking",
            "Email Integration",
            "Analytics & Reports",
            "Mobile App Access"
        ]
    },
    {
        id: 3,
        name: "Inventory Master",
        description: "Smart inventory management with automated tracking",
        price: "$39/month",
        category: "Inventory Management",
        features: [
            "Real-time Stock Tracking",
            "Automated Reorder Alerts",
            "Barcode Scanning",
            "Multi-location Support",
            "Integration with POS"
        ]
    },
    {
        id: 4,
        name : "HR Hub",
        description: "Human resources management made simple and efficient",
        price: "$35/month",
        category: "Human Resources",
        features: [
            "Employee Database",
            "Payroll Management",
            "Leave Tracking",
            "Performance Reviews",
            "Document Management"
        ]
    }
];

export default function ProductPage() {
    return (
        <main className='min-h-screen bg-gray-50'>

            {/* Header section */}
            <section className='bg-white py-16'>
                <div className='container mx-auto px-6'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                            Our Management Solutions
                        </h1>
                        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                            Professional software solutions designed to streamline your business operations
                            and boost productivity across all departments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products grid */}
            <section className='py-16'>
                <div className='container mx-auto py-6'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap8'>
                        {products.map((product) => (
                            <div 
                                key={product.id}
                                className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative'
                            >
                                {/* Popular badge */}
                                {product.popular && (
                                    <div className='absolute -top-3 left-6 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                                        Most Popular
                                    </div>
                                )}
                                
                                {/* Category */}
                                <div className='text-sm text-blue-600 font-semibold mb-2'>
                                    {product.category}
                                </div>

                                {/* Product name & Price */}
                                <div className='flext justify-between items-start mb-4'>
                                    <h3 className='text-2xl font-bold text-gray-900'>
                                        {product.name}
                                    </h3>
                                    <div className='text-right'>
                                        <div className='text-2xl font-bold text-blue-600'>
                                            {product.price}
                                        </div>
                                        <div className='text-sm text-gray-500'>per user</div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className='text-gray-600 mb-6'>
                                    {product.description}
                                </p>

                                {/* Features list */}
                                <div className='mb-8'>
                                    <h4 className='font-semibold text-gray-900 mb-3'>Key Features</h4>
                                    <ul className='space-y-2'>
                                        {product.features.map((feature, index) => (
                                            <li key={index} className='flex items-center text-gray-600'>
                                                <CheckIcon className='size-6 text-purple-600 mx-3'/>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}