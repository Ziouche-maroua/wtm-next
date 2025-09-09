export default function CourseDetail({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Course: {params.id}</h1>
      <p className="text-gray-700">
        Welcome to course <span className="font-semibold">{params.id}</span> !
      </p>
    </div>
  );
}
