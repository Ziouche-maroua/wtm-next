const courses = [
  { id: "react", title: "React Basics" },
  { id: "nextjs", title: "Intro to Next.js" },
];

export default function CoursesPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li key={course.id}>
            <a
              href={`/courses/${course.id}`}
              className="text-pink-400 hover:underline"
            >
              {course.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
