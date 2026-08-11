<script setup>
// En Vue, on ne déclare pas "children" dans les props, le système de <slot> s'en charge !
defineProps({
  href: {
    type: String,
    required: true
  },
  ariaLabel: {
    type: String,
    required: true
  }
});
</script>

<template>
  <a 
    :href="href" 
    target="_blank" 
    rel="noopener noreferrer" 
    :aria-label="ariaLabel" 
    class="p-2 bg-black text-white border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-slate-400 transition-all group"
  >
    <!-- C'est ici que le contenu (comme le SVG) sera injecté ! -->
    <slot />
  </a>
</template>
