'use client';

import { BottomSheet, BottomSheetContent } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ValorDialogProps {
  valor: {
    palabra: string;
    titulo: string;
    descripcion: string;
    imagen: string;
  };
  children: React.ReactNode;
}

export default function ValorDialog({ valor, children }: ValorDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {children}
      </div>
      <BottomSheetContent className="max-h-[85vh] overflow-y-auto">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {valor.titulo}
            </h2>
          </div>

          <div className="aspect-4/3 overflow-hidden rounded-lg">
            <img
              src={valor.imagen}
              alt={valor.titulo}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              {valor.descripcion}
            </p>
          </div>
        </div>
      </BottomSheetContent>
    </BottomSheet>
  );
}
