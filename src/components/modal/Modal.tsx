import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  isStatic?: boolean;
};

export default function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  onClose,
  onConfirm,
  isStatic,
}: Props) {
  const handleStaticBackDrop = (e: Event) => {
    !isStatic ? null : e.preventDefault();
  };
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow"
          onInteractOutside={handleStaticBackDrop}
          onEscapeKeyDown={handleStaticBackDrop}
        >
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">{title}</Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
            {description}
          </Dialog.Description>
          {children}
          {onConfirm && (
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 ">
                  Save changes
                </button>
              </Dialog.Close>
            </div>
          )}
          {onClose && (
            <Dialog.Close asChild>
              <button
                className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-mauve12  hover:bg-gray-200  focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
