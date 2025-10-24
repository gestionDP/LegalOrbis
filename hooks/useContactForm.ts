import { useState } from 'react';

export interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent, onSuccess?: () => void) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  nombre: '',
  telefono: '',
  email: '',
  asunto: '',
  mensaje: '',
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (
    e: React.FormEvent,
    onSuccess?: () => void
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xovkznor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(
          '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.'
        );
        resetForm();
        onSuccess?.();
      } else {
        alert(
          'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert(
        'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
