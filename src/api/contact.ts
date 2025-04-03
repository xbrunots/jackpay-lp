interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  segment: string;
}

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;

if (!BREVO_API_KEY) {
  console.error('A chave API do Brevo não está configurada. Verifique o arquivo .env.local');
}

export const sendContactForm = async (formData: ContactFormData) => {
  if (!BREVO_API_KEY) {
    throw new Error('Configuração da API do Brevo não encontrada');
  }

  try {
    // Validação básica dos dados
    if (!formData.email || !formData.name) {
      throw new Error('Email e nome são obrigatórios');
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'JockPay',
          email: 'noreply@jockbase.com'
        },
        to: [
          {
            email: "joao@mazul.solutions",
            name: "João da JockPay"
          }
        ],
        cc: [
          {
            email: "xbrunots@gmail.com",
            name: "Bruno da JockPay"
          }
        ],
        replyTo: {
          email: formData.email
        },
        subject: "Novo contato do site JockPay",
        htmlContent: `
          <h2>Novo contato recebido</h2>
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefone:</strong> ${formData.phone}</p>
          <p><strong>Empresa:</strong> ${formData.company}</p>
          <p><strong>Segmento:</strong> ${formData.segment}</p>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Erro ao enviar email: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log('Email enviado com sucesso:', data);
    return data;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
}; 