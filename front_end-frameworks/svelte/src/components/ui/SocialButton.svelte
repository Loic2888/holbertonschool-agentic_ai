<script>
  export let href;
  export let ariaLabel;
</script>

<a 
  {href} 
  target="_blank" 
  rel="noopener noreferrer" 
  aria-label={ariaLabel} 
  class="p-2 bg-black text-white border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-slate-400 transition-all group"
>
  <!-- Les "children" s'appellent des "slots" en Svelte -->
  <slot />
</a>
