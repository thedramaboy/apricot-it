'use client';

export default function Error( {
    error, 
    reset
} : {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="container mx-auto p-8 text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <h2 className="text-2xl font-bold">Something went wrong!</h2>
                <p className="mt-2">
                    Sorry, we couldn&apos;t load the post you requested
                </p>

                <button
                    onClick={ () => reset()}
                    className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}