'use client';
import SubmitButton from "./SubmitButton";

export default function CommentForm({ action } : { action: (formData: FormData) => void }) {
    return (
        <form action= { action } className="mt-8 border-t pt-8">
            <h3 className="text-2xl font-bold mb-4">Leave a comment</h3>
            <div className="mb-4">
                <textarea
                    name="comment"
                    rows={4}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your comment here..."
                    required
                    >
                </textarea>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
                >
                    Submit comment
                </button>
            </div>
            <SubmitButton/>
        </form>
    );
}