
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        volume: '',
      });
      
      // Show success message
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
        duration: 5000
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-jockepay-dark to-black">
      {/* Background elements */}
      <div className="absolute inset-0 jockepay-pattern-grid opacity-5 z-0"></div>
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-jockepay-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-jockepay-neon/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para escalar seus pagamentos?</h2>
            <p className="text-lg text-white/80 mb-8">
              Fale com um de nossos especialistas e descubra como a Jockepay pode ajudar a otimizar sua operação.
            </p>
            
            <div className="space-y-4 mb-6">
              {[
                "Integração rápida e assistida",
                "Sem lock-in contratual",
                "Suporte técnico dedicado"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-jockepay-blue/20 flex items-center justify-center">
                      <Check size={12} className="text-jockepay-neon" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-white">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-5 text-white">Fale com um especialista</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-jockepay-blue/50"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email corporativo"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-jockepay-blue/50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Empresa"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-jockepay-blue/50"
                    />
                  </div>
                  
                  <div>
                    <select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white appearance-none focus:outline-none focus:border-jockepay-blue/50"
                    >
                      <option value="" className="bg-jockepay-dark text-white">Volume mensal</option>
                      <option value="Até R$ 50 mil" className="bg-jockepay-dark text-white">Até R$ 50 mil</option>
                      <option value="R$ 50 mil a R$ 200 mil" className="bg-jockepay-dark text-white">R$ 50 mil a R$ 200 mil</option>
                      <option value="R$ 200 mil a R$ 1 milhão" className="bg-jockepay-dark text-white">R$ 200 mil a R$ 1 milhão</option>
                      <option value="R$ 1 milhão a R$ 5 milhões" className="bg-jockepay-dark text-white">R$ 1 milhão a R$ 5 milhões</option>
                      <option value="Acima de R$ 5 milhões" className="bg-jockepay-dark text-white">Acima de R$ 5 milhões</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-jockepay-blue to-jockepay-neon text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-jockepay-blue/20 disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Falar com um especialista <ArrowRight size={16} />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-white/60 text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
