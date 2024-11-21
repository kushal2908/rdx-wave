import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Button from "../components/button/Button";

export default function ButtonPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Button</h1>
      <h2 className="font-bold text-gray-600 mt-4">Size: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button size="sm">Size sm</Button>
        <Button size="md">Size md</Button>
        <Button size="lg">Size lg</Button>
        <Button size="xl">Size xl</Button>
      </div>
      <h2 className="font-bold text-gray-600 mt-4">Color: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button color="blue">Blue Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="gray">Gray Button</Button>
      </div>
      <h2 className="font-bold text-gray-600 mt-4">Variant: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button variant="solid">Solid Button</Button>
        <Button variant="light">Light Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
      <h2 className="font-bold text-gray-600 mt-4"> Disabled: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button disabled={true}>Disabled Button</Button>
      </div>
      <h2 className="font-bold text-gray-600 mt-4"> Loading: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button loading={true}>Loading Button</Button>
      </div>
      <h2 className="font-bold text-gray-600 mt-4"> Icon button: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button startIcon={<PaperPlaneIcon className="rotate-0" />} />
      </div>

      <h2 className="font-bold text-gray-600 mt-4"> Full width button: </h2>
      <div className="flex justify-start items-center gap-4">
        <Button fullWidth> Full width Button</Button>
      </div>
    </div>
  );
}
