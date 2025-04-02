
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    volume: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        company: '',
        email: '',
        role: '',
        volume: '',
        message: ''
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
    <section id="contact" className="section-padding bg-white dark:bg-jockepay-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para escalar seus pagamentos com autonomia?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fale com um de nossos especialistas e descubra como a Jockepay pode ajudar a otimizar sua operação de pagamentos.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-jockepay-blue/10 flex items-center justify-center">
                    <Check size={14} className="text-jockepay-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Integração rápida e assistida</h3>
                  <p className="text-muted-foreground">Nossa equipe técnica oferece suporte completo durante todo o processo de implementação.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-jockepay-blue/10 flex items-center justify-center">
                    <Check size={14} className="text-jockepay-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Sem lock-in contratual</h3>
                  <p className="text-muted-foreground">Você tem liberdade para escalar seu uso conforme suas necessidades, sem amarras contratuais.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-jockepay-blue/10 flex items-center justify-center">
                    <Check size={14} className="text-jockepay-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Suporte técnico dedicado</h3>
                  <p className="text-muted-foreground">Tenha acesso a uma equipe especializada para resolver dúvidas e problemas com rapidez.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-secondary dark:bg-jockepay-dark/50 rounded-xl border border-border">
              <div className="text-lg font-medium mb-2">Números que comprovam nossa eficiência</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-jockepay-blue">+7.5%</div>
                  <div className="text-sm text-muted-foreground">Aumento médio nas taxas de aprovação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jockepay-blue">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime da plataforma</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jockepay-blue">+12%</div>
                  <div className="text-sm text-muted-foreground">Aumento médio na receita</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jockepay-blue">-30%</div>
                  <div className="text-sm text-muted-foreground">Redução nos custos de processamento</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-jockepay-dark/30 rounded-xl p-6 md:p-8 border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Fale com um especialista</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="role" className="block mb-2 text-sm font-medium">
                      Cargo *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                    >
                      <option value="">Selecione</option>
                      <option value="CTO">CTO</option>
                      <option value="CEO">CEO</option>
                      <option value="CFO">CFO</option>
                      <option value="Head de Produto">Head de Produto</option>
                      <option value="Head de Tecnologia">Head de Tecnologia</option>
                      <option value="Desenvolvedor">Desenvolvedor</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="volume" className="block mb-2 text-sm font-medium">
                      Volume mensal (R$) *
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                    >
                      <option value="">Selecione</option>
                      <option value="Até R$ 50 mil">Até R$ 50 mil</option>
                      <option value="R$ 50 mil a R$ 200 mil">R$ 50 mil a R$ 200 mil</option>
                      <option value="R$ 200 mil a R$ 1 milhão">R$ 200 mil a R$ 1 milhão</option>
                      <option value="R$ 1 milhão a R$ 5 milhões">R$ 1 milhão a R$ 5 milhões</option>
                      <option value="Acima de R$ 5 milhões">Acima de R$ 5 milhões</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Falar com um especialista <ArrowRight size={16} />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ao enviar este formulário, você concorda com nossa política de privacidade e termos de uso.
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
