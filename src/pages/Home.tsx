import { Link } from "react-router-dom";
import Card from "../components/card/Card";

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
    {
      name: "Form",
      href: "/form",
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
            <Card isElevated>
              <p className="text-xl font-semibold text-gray-600 ">{d?.name}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
