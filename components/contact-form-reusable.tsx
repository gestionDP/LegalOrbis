import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/useContactForm';

interface ContactFormProps {
  onSuccess?: () => void;
  showTitle?: boolean;
  title?: string;
  description?: string;
  className?: string;
}

const ContactForm = ({
  onSuccess,
  showTitle = true,
  title = 'Contacta con Nosotros',
  description = 'Completa el formulario y nos pondremos en contacto contigo',
  className = '',
}: ContactFormProps) => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  return (
    <div className={className}>
      {showTitle && (
        <div className="mb-8 pt-4">
          <h2 className="text-2xl font-semibold text-start mb-3 text-gray-900">
            {title}
          </h2>
          <p className="text-start text-gray-600">{description}</p>
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e, onSuccess)} className="space-y-6">
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
    </div>
  );
};

export default ContactForm;
