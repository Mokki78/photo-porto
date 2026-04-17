"use client";

import MasonryGrid from "./MasonryGrid";
import { useState } from 'react';
import ImageModal from "./Modal";


export default function Portfolio() {
  const [selectedImg, setSelectedImg ] = useState<string  | null>(null);
  return (
    <>
    <MasonryGrid onSelect={setSelectedImg}/>
    
     <ImageModal 
    src={selectedImg || ''} 
    isOpen={!!selectedImg} 
    onClose={() => setSelectedImg(null)} />
    </>
  );
}
