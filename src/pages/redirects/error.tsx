import React from 'react';
import { CheckCircle2, CircleX } from 'lucide-react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="bg-[#0A0A0A] rounded-2xl p-8 max-w-xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[#111111] rounded-full flex items-center justify-center">
            <CircleX  className="w-12 h-12 text-red-500" />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3" style={{color: 'white'}}>Ops!</h1>
          <p className="text-xl text-gray-400">Sua transação falhou!</p>
        </div>

        {/* Transaction Details */}
        <div className="bg-[#111111] rounded-xl p-6 mb-8">
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Status</span>
              <span className="flex items-center text-red-500">
                <CircleX className="w-4 h-4 mr-2" />
                Falha
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">    <Link to="/">
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg  transition-colors" style={{
                    color: '#c0c0c073',   width: '100%'}}>
            {/*<ArrowLeft className="w-4 h-4" />*/}
            Fechar
          </button>
          </Link>
          <Link to="/">
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] transition-colors text-white"
          style={{                    width: '100%'}}
          >
            {/*<Download className="w-4 h-4" />*/}
            OK
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;