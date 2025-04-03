import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  segment: string;
}

const ContactSection: React.FC = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    segment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio
    console.log('Form data:', formData);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-black via-black/98 to-black/95"
      aria-label="Contato"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.05)_0%,transparent_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.02)_0%,transparent_70%)] blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Text content */}
        <div className="relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 max-w-4xl mx-auto">
            <Badge color="green">Contato</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-6 mb-4 sm:mb-6">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nome
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="w-full bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Empresa
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                  required
                  className="w-full bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="segment" className="block text-sm font-medium text-white mb-2">
                Segmento
              </label>
              <Select
                value={formData.segment}
                onValueChange={(value) => setFormData(prev => ({ ...prev, segment: value }))}
              >
                <SelectTrigger className="w-full bg-black/50 border-white/10 text-white">
                  <SelectValue placeholder="Selecione seu segmento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="logistics">Logística</SelectItem>
                  <SelectItem value="education">Educação</SelectItem>
                  <SelectItem value="marketplace">Marketplace</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                color="green"
                className="w-full sm:w-auto"
              >
                Enviar
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
