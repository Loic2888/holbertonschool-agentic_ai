<script>
  import { BrainCircuit } from 'lucide-svelte';

  // "export let" indique que cette variable est une prop (propriété) 
  // qui peut être passée par le composant parent.
  export let className = '';
</script>

<a href="/" class="flex items-center gap-3 text-slate-50 hover:opacity-80 transition-opacity {className}">
  <div class="p-1.5 font-semibold rounded-lg bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/40">
    <BrainCircuit class="w-5 h-5 text-white" />
  </div>
  <span class="text-base font-bold">Agentic AI</span>
</a>
