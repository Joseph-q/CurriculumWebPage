import { type ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ComponentChildren;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


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
        <div className="flex flex-col max-h-[80vh]  items-start gap-5 h-auto mt-10 md:mt-0 md:flex-row md:h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
