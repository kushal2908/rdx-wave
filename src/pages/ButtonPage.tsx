import Button from "../components/button/Button";

export default function ButtonPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Button</h1>
      <div className="divide-y" />
      <h2 className="font-bold text-gray-600">Size: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button size="sm">Size sm</Button>
        <Button size="md">Size md</Button>
        <Button size="lg">Size lg</Button>
        <Button size="xl">Size xl</Button>
      </div>
    </div>
  );
}
