import React, { useState } from "react";
import Header from "@components/Header";

function App() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (cardType: string) => {
    setActiveCard(activeCard === cardType ? null : cardType);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            🚀 NexusPay Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div 
              className={`bg-slate-800 rounded-lg p-6 border cursor-pointer transition-all hover:border-blue-500/50 hover:bg-slate-700/50 ${
                activeCard === 'transactions' ? 'border-blue-500 bg-slate-700/50' : 'border-slate-700'
              }`}
              onClick={() => handleCardClick('transactions')}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">💳 Transações</h3>
              <p className="text-slate-300 mb-4">Visualize suas transações em tempo real</p>
              {activeCard === 'transactions' && (
                <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-blue-300 font-semibold mb-2">📈 Transações Recentes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Pagamento Cliente A</span>
                      <span className="text-green-400">+R$ 150,00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Pagamento Cliente B</span>
                      <span className="text-green-400">+R$ 89,50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Taxa de Processamento</span>
                      <span className="text-red-400">-R$ 2,40</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div 
              className={`bg-slate-800 rounded-lg p-6 border cursor-pointer transition-all hover:border-green-500/50 hover:bg-slate-700/50 ${
                activeCard === 'reports' ? 'border-green-500 bg-slate-700/50' : 'border-slate-700'
              }`}
              onClick={() => handleCardClick('reports')}
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">📊 Relatórios</h3>
              <p className="text-slate-300 mb-4">Analise o desempenho do seu negócio</p>
              {activeCard === 'reports' && (
                <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                  <h4 className="text-green-300 font-semibold mb-2">📊 Métricas do Mês</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Total de Vendas</span>
                      <span className="text-green-400">R$ 12.450,00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Taxa de Conversão</span>
                      <span className="text-green-400">68.5%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Crescimento</span>
                      <span className="text-green-400">+15.2%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div 
              className={`bg-slate-800 rounded-lg p-6 border cursor-pointer transition-all hover:border-purple-500/50 hover:bg-slate-700/50 ${
                activeCard === 'settings' ? 'border-purple-500 bg-slate-700/50' : 'border-slate-700'
              }`}
              onClick={() => handleCardClick('settings')}
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">⚙️ Configurações</h3>
              <p className="text-slate-300 mb-4">Gerencie suas preferências e integrações</p>
              {activeCard === 'settings' && (
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="text-purple-300 font-semibold mb-2">⚙️ Configurações Ativas</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Notificações</span>
                      <span className="text-green-400">Ativadas</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Integração API</span>
                      <span className="text-green-400">Conectada</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Backup Automático</span>
                      <span className="text-green-400">Ativo</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              🎉 Aplicação NexusPay Online!
            </h2>
            <p className="text-slate-300 mb-6">
              Sua aplicação está funcionando perfeitamente na Vercel com React + TypeScript!
            </p>
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              ✅ Status: Online e Funcionando
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
