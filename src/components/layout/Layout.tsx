import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center py-2 border-b">
        <div className="container mx-auto">
          <Link to={"/"}>
            <p className="text-xl font-bold">Home</p>
          </Link>
        </div>
      </nav>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
