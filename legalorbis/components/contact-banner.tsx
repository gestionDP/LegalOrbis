'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BottomSheet, BottomSheetContent } from '@/components/ui/bottom-sheet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from '@/components/ui/animated-section';

const ContactBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        setIsOpen(false);
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          asunto: '',
          mensaje: '',
        });
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

  return (
    <>
      <section id="contacto" className="relative h-auto overflow-hidden py-32">
        <div className="absolute inset-0">
          <img
            src="/images/jpg/hero-carousel-2.jpg"
            alt="Contacto Legal Orbis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container-max px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-auto">
              <AnimatedSection
                animation="fadeInRight"
                delay={0.1}
                duration={0.5}
              >
                <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-8">
                  ¿Listo para hacer un impacto?
                </h2>
              </AnimatedSection>

              <AnimatedSection
                animation="fadeInRight"
                delay={0.15}
                duration={0.5}
              >
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  Colabora con Legal Orbis para impulsar cambios significativos
                  y lograr tus objetivos jurídicos.
                </p>
              </AnimatedSection>

              <AnimatedSection
                animation="fadeInScale"
                delay={0.2}
                duration={0.5}
              >
                <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
                  <Button
                    onClick={() => setIsOpen(true)}
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4"
                  >
                    ENVIAR CONSULTA
                  </Button>

                  <BottomSheetContent className="bg-white">
                    <div className="mb-8 pt-4">
                      <h2 className="text-2xl font-semibold text-start mb-3 text-gray-900">
                        Contacta con Nosotros
                      </h2>
                      <p className="text-start text-gray-600">
                        Completa el formulario y nos pondremos en contacto
                        contigo
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 ">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="nombre"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Nombre
                          </label>
                          <Input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="telefono"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            N° de Teléfono
                          </label>
                          <Input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            required
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Correo electrónico
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="asunto"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Asunto
                        </label>
                        <Input
                          id="asunto"
                          name="asunto"
                          type="text"
                          value={formData.asunto}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Mensaje
                        </label>
                        <Textarea
                          id="mensaje"
                          name="mensaje"
                          rows={4}
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>

                      <div className="flex justify-center pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="bg-[#1a5f5f] text-white hover:bg-[#1a5f5f]/90 rounded-full px-8 py-4 text-lg disabled:opacity-50"
                        >
                          {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                        </Button>
                      </div>
                    </form>
                  </BottomSheetContent>
                </BottomSheet>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
