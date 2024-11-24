import * as Dialog from "@radix-ui/react-dialog";
import Button from "../button/Button";
import CrossIcon from "./CrossIcon";
import { Cross2Icon } from "@radix-ui/react-icons";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  body?: string | React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  onConfirmText?: string;
  isStatic?: boolean;
};

export default function Modal({
  open,
  onOpenChange,
  title,
  body,
  children,
  onClose,
  onConfirm,
  onConfirmText,
  isStatic,
}: Props) {
  const handleStaticBackDrop = (e: Event) => {
    !isStatic ? null : e.preventDefault();
  };
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.4)] data-[state=open]:animate-overlayShow" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white py-[16px] px-[24px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow"
          onInteractOutside={handleStaticBackDrop}
          onEscapeKeyDown={handleStaticBackDrop}
        >
          <Dialog.Title className="flex items-center justify-between">
            <p className="mb-0 text-lg font-semibold text-gray-800">{title}</p>
            <button
              className="bg-transparent hover:bg-gray-200 p-1 rounded-full text-gray-800"
              aria-label="Close"
              onClick={onClose}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} width={20} height={20}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-gray-800">
            {body}
          </Dialog.Description>
          {children}
          <div className="mt-[25px] flex justify-end gap-2">
            {onClose && (
              <Dialog.Close asChild>
                <Button onClick={onClose} variant="light">
                  Close
                </Button>
              </Dialog.Close>
            )}
            {onConfirm && (
              <Dialog.Close asChild>
                <Button onClick={onConfirm}>{onConfirmText ?? "Confirm"}</Button>
              </Dialog.Close>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
