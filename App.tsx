import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            API SOCIAL GENIUS IA
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl text-gray-700 mb-8">
          Sistema Inteligente de Monetização Social
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-6 rounded-2xl">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-bold text-gray-800 mb-2">Rápido</h3>
            <p className="text-sm text-gray-600">Deploy instantâneo</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="font-bold text-gray-800 mb-2">Inteligente</h3>
            <p className="text-sm text-gray-600">IA integrada</p>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-2xl">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-bold text-gray-800 mb-2">Monetização</h3>
            <p className="text-sm text-gray-600">Stripe + APIs</p>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Começar Agora
          </button>
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
}