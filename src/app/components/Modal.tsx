import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function ImageModal({ src, isOpen, onClose }: { src: string; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && src && (
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" 
        onClick={onClose}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
          <motion.div
          layoutId={src}
          transition={{ type: "spring", stiffness: 260, damping: 40 }}
          className="relative w-full h-full flex items-center justify-center"
          
          >
            <Image 
            src={src}
            alt="Modal Image"
            width={900}
            height={400}
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
            }}
            className="rounded-lg object-contain"
            />
            </motion.div>
            </motion.div>
            
      )}
      </AnimatePresence>
  
  );
  }    