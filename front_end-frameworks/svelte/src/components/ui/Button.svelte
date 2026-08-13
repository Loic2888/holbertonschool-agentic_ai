<script>
  import { ArrowRight } from 'lucide-svelte';

  // Props
  export let text;
  export let href;
  export let variant = 'primary';
  export let showIcon = false;

  // Styles de base et spécifiques
  const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white rounded-md transition-all duration-200";
  const primaryStyle = "bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40";
  const secondaryStyle = "border border-slate-800 bg-slate-950 hover:bg-slate-900";

  // Valeur dérivée/calculée grâce à la syntaxe $:
  $: variantStyle = variant === 'primary' ? primaryStyle : secondaryStyle;
</script>

<a href={href} class="{baseStyle} {variantStyle}">
  {text}

  {#if showIcon}
    <ArrowRight class="w-5 h-5" />
  {/if}
</a>
