<script setup>
import { computed } from 'vue';

// Définition des props (remplace PropTypes)
const props = defineProps({
  insight: {
    type: Object,
    required: true
    // En Vue (sans TypeScript), on ne valide pas précisément la "shape" de l'objet nativement, 
    // on vérifie juste que c'est bien un Object requis.
  },
  index: {
    type: Number,
    required: true
  }
});

// L'équivalent de votre constante "isFeatured" utilisant la réactivité de Vue
const isFeatured = computed(() => props.index === 0);
</script>

<template>
  <div 
    :class="[
      'group relative rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden hover:border-violet-500/30 transition-all duration-300 min-h-[350px] md:min-h-[400px] flex flex-col justify-end',
      { 'md:col-span-2': isFeatured }
    ]"
  >
    <!-- 1. L'IMAGE EN ARRIÈRE-PLAN -->
    <img 
      :src="insight.image" 
      :alt="insight.title" 
      class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
    />

    <!-- 2. LE DÉGRADÉ SOMBRE (Pour que le texte blanc soit lisible sur l'image) -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

    <!-- 3. LE TEXTE -->
    <div class="relative z-20 p-8 flex flex-col items-start mt-auto">
      
      <!-- Category -->
      <span class="px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs tracking-wider mb-4 backdrop-blur-sm">
        {{ insight.category }}
      </span>
      
      <!-- Titre -->
      <h3 class="text-xl md:text-2xl font-bold text-white mb-3">
        {{ insight.title }}
      </h3>
      
      <!-- Description -->
      <p class="text-slate-500 text-sm leading-relaxed">
        {{ insight.description }}
      </p>
    </div>
    
  </div>
</template>
