import { CheckCircle2 } from 'lucide-react'
import './global.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
        <div className="flex justify-center mb-4 text-emerald-400">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Hello world !
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          My application React, Tailwind et Lucide sont bien configurés.
        </p>

        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-xl transition duration-200">
          Hola !
        </button>
      </div>
    </div>
  );
}

export default App
