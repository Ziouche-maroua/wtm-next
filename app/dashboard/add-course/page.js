export default function AddCoursePage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Course title"
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Course description"
          className="border p-2 w-full"
        />
        <button className="bg-pink-400 text-white px-4 py-2 rounded">
          Add Course
        </button>
      </form>
    </div>
  );
}
