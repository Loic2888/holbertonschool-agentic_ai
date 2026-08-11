<script setup>
// Définition des props (remplace PropTypes)
defineProps({
  mainText: {
    type: String,
    required: true // Le texte principal (blanc)
  },
  highlightText: {
    type: String,
    default: ''    // Le texte mis en valeur (violet)
  },
  className: {
    type: String,
    default: 'mb-12' // Pour modifier la marge si besoin
  }
});
</script>

<template>
  <h2 :class="['text-4xl md:text-5xl font-black text-white tracking-tight leading-none', className]">
    {{ mainText }}
    
    <!-- v-if sur une balise <template> remplace le fragment <> </> et le && de React -->
    <template v-if="highlightText">
      <!-- Un petit espace pour la version mobile où le <br> est caché -->
      {{ ' ' }}
      <br class="hidden md:block" />
      <span class="text-violet-300">{{ highlightText }}</span>
    </template>
  </h2>
</template>
