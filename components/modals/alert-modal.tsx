"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  //hydration error kezelés
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Biztos, hogy törölni szeretnéd?"
      description="A művelet nem visszavonható."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-4 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Mégse
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Tovább
        </Button>
      </div>
    </Modal>
  );
};
