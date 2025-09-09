import Link from "next/link";

export default function DashboardHome() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <p className="text-gray-700">Manage your courses here.</p>
      <Link href="/dashboard/add-course" className="text-pink-400 hover:underline">
      Add a new course
      </Link>
    </div>
  );
}
