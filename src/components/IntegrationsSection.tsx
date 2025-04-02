
import React from 'react';

const IntegrationsSection = () => {
  const integrations = [
    { name: "PicPay", id: "picpay" },
    { name: "Pagar.me", id: "pagarme" },
    { name: "Vindi", id: "vindi" },
    { name: "PagBank", id: "pagbank" },
    { name: "Stripe", id: "stripe" },
    { name: "Asaas", id: "asaas" },
    { name: "Iugu", id: "iugu" },
    { name: "Lastlink", id: "lastlink" },
    { name: "Mercado Pago", id: "mercadopago" },
    { name: "Adyen", id: "adyen" },
  ];

  return (
    <section id="integrations" className="section-padding bg-white dark:bg-jockepay-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integre com os principais PSPs do mercado</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Jockepay se conecta com os principais provedores de pagamento, oferecendo a você liberdade para escolher as melhores opções para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {integrations.map((integration) => (
            <div 
              key={integration.id}
              className="flex flex-col items-center justify-center h-32 bg-secondary/50 dark:bg-jockepay-dark/50 rounded-lg border border-border card-hover"
            >
              <div className="h-12 w-24 bg-gray-300/30 rounded-md mb-3 flex items-center justify-center">
                <div className="text-xl font-bold text-jockepay-blue">{integration.name.substring(0, 1)}</div>
              </div>
              <span className="font-medium">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
