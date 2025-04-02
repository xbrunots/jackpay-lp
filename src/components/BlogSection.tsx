
import React from 'react';
import { ArrowRight, ArrowUpRight, Calendar, Clock } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: "Como aumentar sua taxa de aprovação",
      excerpt: "Descubra as estratégias e técnicas para otimizar suas transações e aumentar significativamente sua taxa de aprovação.",
      date: "12 Jun 2023",
      readTime: "8 min",
      category: "Estratégia",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Orquestração vs. Agregação",
      excerpt: "Conheça as diferenças entre orquestrar e agregar pagamentos, e por que a liberdade de escolha pode beneficiar seu negócio.",
      date: "28 Mai 2023",
      readTime: "6 min",
      category: "Tecnologia",
      gradient: "from-jockepay-blue/10 to-jockepay-neon/10"
    },
    {
      title: "Diversificação de PSPs",
      excerpt: "Como ter múltiplas opções de processamento pode reduzir custos e aumentar a resiliência da sua operação financeira.",
      date: "05 Mai 2023",
      readTime: "10 min",
      category: "Finanças",
      gradient: "from-green-500/10 to-teal-500/10"
    }
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-jockepay-dark/5 dark:from-jockepay-dark/70 dark:to-jockepay-dark z-0"></div>
      
      {/* Mesh pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10 z-0"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-jockepay-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 -right-32 w-64 h-64 bg-jockepay-neon/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <div className="inline-block mb-4">
              <span className="backdrop-blur-sm bg-jockepay-blue/10 dark:bg-jockepay-blue/10 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-neon border border-jockepay-blue/20">Blog</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-tight">
              Insights para <span className="text-jockepay-blue">pagamentos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Artigos técnicos e estratégicos sobre orquestração, taxas de aprovação e tendências do mercado.
            </p>
          </div>
          <a href="#" className="mt-6 md:mt-0 inline-flex items-center backdrop-blur-sm bg-jockepay-blue/10 hover:bg-jockepay-blue/20 text-jockepay-blue dark:text-jockepay-neon px-6 py-2.5 rounded-full font-medium transition-all duration-300 group border border-jockepay-blue/20">
            Ver todos os artigos 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="group backdrop-blur-sm bg-white/5 dark:bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-jockepay-blue/10 border border-white/10"
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient} p-8 relative overflow-hidden flex items-center justify-center`}>
                {/* Animated preview */}
                <div className="relative w-full h-full backdrop-blur-sm bg-white/5 dark:bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-jockepay-blue dark:text-jockepay-neon font-medium mb-2">Jockepay Blog</div>
                  <div className="text-sm text-foreground/70">{post.excerpt.substring(0, 30)}...</div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-jockepay-blue dark:bg-jockepay-blue/30 text-white dark:text-jockepay-neon">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar size={12} className="mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock size={12} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-jockepay-blue dark:group-hover:text-jockepay-neon transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                
                <div className="pt-3 border-t border-white/5">
                  <a href="#" className="inline-flex items-center text-jockepay-blue dark:text-jockepay-neon text-sm font-medium">
                    Ler artigo
                    <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
