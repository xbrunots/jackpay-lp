import React from 'react';
import { CheckCircle2, ArrowLeft, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="bg-[#0A0A0A] rounded-2xl p-8 max-w-xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[#111111] rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3" style={{color: 'white'}}>Parabéns!</h1>
          <p className="text-xl text-gray-400">Transação concluída com sucesso!</p>
        </div>

        {/* Transaction Details */}
        <div className="bg-[#111111] rounded-xl p-6 mb-8">
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">ID da Transação</span>
              <span className="font-mono">TX-2024-0123</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Valor</span>
              <span className="text-green-500 font-bold">R$ 1.234,56</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Data</span>
              <span>{new Date().toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Status</span>
              <span className="flex items-center text-green-500">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Aprovado
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] transition-colors text-green-500">
            <Download className="w-4 h-4" />
            Comprovante
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;