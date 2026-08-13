<script>
  export let mainText;
  // On lui donne la valeur undefined (ou null) par défaut pour 
  // indiquer à Svelte que cette prop est optionnelle.
  export let highlightText = undefined; 
  export let className = 'mb-12';
</script>

<h2 class="text-4xl md:text-5xl font-black text-white tracking-tight leading-none {className}">
  {mainText}
  
  <!-- On n'affiche la suite que si highlightText existe -->
  {#if highlightText}
    {' '}
    <br class="hidden md:block" />
    <span class="text-violet-300">{highlightText}</span>
  {/if}
</h2>
