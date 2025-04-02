
import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: "Como aumentar sua taxa de aprovação com orquestração de pagamentos",
      excerpt: "Descubra as estratégias e técnicas para otimizar suas transações e aumentar significativamente sua taxa de aprovação.",
      date: "12 Jun 2023",
      readTime: "8 min",
      category: "Estratégia"
    },
    {
      title: "Orquestração vs. Agregação: Entenda as diferenças fundamentais",
      excerpt: "Conheça as diferenças entre orquestrar e agregar pagamentos, e por que a liberdade de escolha pode beneficiar seu negócio.",
      date: "28 Mai 2023",
      readTime: "6 min",
      category: "Tecnologia"
    },
    {
      title: "O impacto da diversificação de PSPs na saúde financeira do seu negócio",
      excerpt: "Como ter múltiplas opções de processamento pode reduzir custos e aumentar a resiliência da sua operação financeira.",
      date: "05 Mai 2023",
      readTime: "10 min",
      category: "Finanças"
    }
  ];

  return (
    <section className="section-padding bg-secondary dark:bg-jockepay-dark/70">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Insights para quem leva pagamentos a sério</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Artigos técnicos e estratégicos sobre orquestração de pagamentos, taxas de aprovação e tendências do mercado.
            </p>
          </div>
          <a href="#" className="mt-4 md:mt-0 btn-secondary">
            <div className="flex items-center gap-1">
              Ver todos os artigos <ArrowRight size={16} />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-jockepay-dark/50 rounded-xl border border-border overflow-hidden shadow-sm card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-jockepay-blue/20 to-jockepay-neon/20 flex items-center justify-center p-8">
                <div className="w-full h-full bg-jockepay-blue/10 rounded-md flex items-center justify-center">
                  <div className="text-jockepay-blue font-medium">Jockepay Blog</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-jockepay-blue/10 text-jockepay-blue">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.date} • {post.readTime} leitura
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                
                <a href="#" className="text-jockepay-blue font-medium flex items-center gap-1 hover:gap-2 transition-all group">
                  Ler artigo
                  <ArrowUpRight size={16} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
