export default function Loading() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 h-12 w-1/3 bg-gray-200 rounded animate-pulse"></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({length: 6}).map((_, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow">
                        <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                        <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                        <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}