import { useState } from "react";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";

type Props = {};

export default function ModalPage({}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Modal Title"
        body={
          <>
            <p>Modal Description</p>
            <p>Modal Description</p>
            <p>Modal Description</p>
          </>
        }
        isStatic
        onClose={() => setModalOpen(false)}
        onConfirm={() => setModalOpen(false)}
      />
    </div>
  );
}
