import React, { useState } from "react";

type Props = {};

export default function Modal({}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Modal Title"
        description="Modal Description"
        closeWhenClickedOutside={false}
        onClose={() => setModalOpen(false)}
        onConfirm={() => setModalOpen(false)}
      />
    </div>
  );
}
