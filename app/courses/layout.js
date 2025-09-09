export default function CoursesLayout({ children }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-pink-400">Courses Section</h1>
      <nav className=" justify-center flex gap-4 mb-6">
        <a href="/courses" className="text-pink-300 hover:underline">All Courses</a>
        <a href="/courses/teachers" className="text-pink-300 hover:underline">Teachers</a>
      </nav>
      <body className="bg-white p-4 rounded shadow">{children}</body>
    </div>
  );
}
