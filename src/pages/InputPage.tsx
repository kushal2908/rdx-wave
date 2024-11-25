import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Select from "../components/select/Select";

type Props = {};

export default function InputPage({}: Props) {
  return (
    <>
      <div className="mb-14">
        <h1 className="text-xl font-bold text-gray-600 mb-4">Input</h1>
        <div className="flex justify-start items-center gap-1 mb-2">
          <Input placeholder="Input sm" size="sm" />
          <Button size="sm">Submit</Button>
        </div>
        <div className="flex justify-start items-center gap-1 mb-2 ">
          <Input placeholder="Input md" size="md" />
          <Button>Submit</Button>
        </div>
        <div className="flex justify-start items-center gap-1 mb-2 ">
          <Input type="password" placeholder="Input lg" size="lg" />
          <Button size="lg">Login</Button>
        </div>
        <div className="flex justify-start items-center gap-1 mb-2 ">
          <Input placeholder="Input xl" size="xl" />
          <Button size="xl">Submit</Button>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-gray-600 mb-4">Select</h1>
        <Select />
      </div>
    </>
  );
}
