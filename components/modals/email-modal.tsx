"use client";

import { useEffect, useState } from "react";
import { sendEmail } from "@/lib/sendEmail";

import toast from "react-hot-toast";
import { Modal } from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function Contact() {
  const storeModal = useStoreModal();
  const [sent, setSent] = useState(false);

  return (
    <Modal
      title="E-mail küldése az eladónak"
      description="Érdeklődj a termékkel kapcsolatban az eladónál."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <section
        id="contact"
        className="mt-12 mb-20 sm:mb-28 w-full sm:w-[70%] xl:w-[40%] scroll-mt-16"
      >
        <div>
          <form
            className="mt-10 flex flex-col"
            action={async (formData) => {
              if (!sent) {
                try {
                  await sendEmail(formData);
                  toast.success("E-mail sikeresen elküldve!");
                  setSent(true);
                } catch (error) {
                  toast.error("Hiba történt!");
                }
              } else if (sent) {
                toast.error("Egyszerre csak egy e-mailt küldhet.");
              }
            }}
          >
            <input
              type="email"
              className="h-14 rounded-md border border-black/15 px-2 !focus:outline-none"
              name="senderEmail"
              placeholder="Az e-mail címed"
              maxLength={300}
              required
            />
            <textarea
              className="h-32 my-3 px-2 py-2 rounded-md border border-black/15 resize-none outline-slate-900"
              name="senderMsg"
              placeholder="Üzenet"
              maxLength={2000}
              required
            />
            <button className="py-2 px-3 bg-blue-600 text-white rounded-md transition duration-300 w-[8rem] h-[3rem] flex justify-center items-center gap-2 hover:scale-110 text-md hover:bg-white hover:text-blue-600 hover:border-2 hover:border-black/10 ">
              Küldés
            </button>
          </form>
        </div>
      </section>
    </Modal>
  );
}
