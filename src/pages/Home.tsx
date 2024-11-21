import { Link } from "react-router-dom";

export default function Home() {
  const links = [
    {
      name: "Button",
      href: "/button",
    },
    {
      name: "Modal",
      href: "/modal",
    },
  ];
  return (
    <div className="">
      <p className="text-3xl font-semibold bg-gradient-to-r from-teal-600 to-red-900 bg-clip-text text-transparent">
        Radix Primitives
      </p>
      <p className="text-gray-800">Components using Radix/primitives</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 ">
        {links?.map((d: any) => (
          <Link key={d?.href} to={d?.href}>
            <div className="bg-white p-4 rounded-md hover:shadow-md border border-gray-300 transition-all duration-100">
              <p className="text-xl font-semibold text-gray-600 ">{d?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
