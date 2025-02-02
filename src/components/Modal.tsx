import { type ComponentChildren } from "preact";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ComponentChildren;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div
      id="modal"
      role="dialog"
      aria-hidden={!isOpen}
      className="fixed z-10 left-0 top-0 w-full h-full bg-black/50 flex justify-center items-center"
    >
      <div className="relative bg-[rgba(17,35,54,0.9)] border border-gray-500 w-4/5 p-5">
        <button
          className="absolute top-5 right-5 text-2xl font-bold text-gray-600 hover:text-red-600 cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="flex flex-col items-start gap-5 h-auto md:flex-row md:h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
