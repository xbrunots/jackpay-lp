import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Shield, Clock, Headphones } from 'lucide-react';
import DashboardPreview from './ui/DashboardPreview';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-black/98 to-black/95"
      aria-label="Hero"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.05)_0%,transparent_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.02)_0%,transparent_70%)] blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Badge color="green">Infraestrutura de Pagamentos</Badge>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Orquestre seus pagamentos com a <span className="text-jockepay-green">JockPay</span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A plataforma que conecta sua operação aos principais PSPs do mercado. Escolha, combine e escale — com total liberdade e controle.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                href="#simulator"
                color="green"
                showArrow
                className="w-full sm:w-auto text-white"
              >
                Simular ganhos
              </Button>
              <Button
                href="#contact"
                variant="outline"
                color="green"
                showArrow
                className="w-full sm:w-auto text-white"
              >
                Agende uma demonstração
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 sm:gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-jockepay-green/20">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Uptime</p>
                  <p className="text-lg sm:text-xl font-semibold text-white">99.9%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-jockepay-green/20">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Segurança</p>
                  <p className="text-lg sm:text-xl font-semibold text-white">PCI DSS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-jockepay-green/20">
                  <Headphones className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Suporte</p>
                  <p className="text-lg sm:text-xl font-semibold text-white">24/7</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <DashboardPreview className="w-full max-w-2xl mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent" aria-hidden="true"></div>
    </section>
  );
};

export default HeroSection;
