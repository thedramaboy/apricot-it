'use client';

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400"
        >
            {pending ? "Submitting..." : "Submit comment"}
        </button>
    );
}