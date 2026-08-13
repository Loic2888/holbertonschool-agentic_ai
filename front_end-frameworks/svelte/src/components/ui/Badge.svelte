<script>
  import { Sparkle } from 'lucide-svelte';

  // "text" n'a pas de valeur par défaut, elle est donc attendue (requise)
  export let text;
  
  // "className" a une valeur par défaut, elle est optionnelle
  export let className = '';
</script>

<span class="inline-flex items-center gap-2 px-4 py-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10 {className}">
  <Sparkle class="w-1.5 h-1.5 fill-current" />
  {text}
  <Sparkle class="w-1.5 h-1.5 fill-current" />
</span>
