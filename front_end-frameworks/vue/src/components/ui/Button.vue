<script setup>
import { ArrowRight } from 'lucide-vue-next';

// Définition des props (remplace PropTypes)
defineProps({
  text: {
    type: String,
    required: true // Le texte du bouton
  },
  href: {
    type: String,
    required: true // Le lien (#Started, etc.)
  },
  variant: {
    type: String,
    default: 'primary',
    // Le validator remplace le PropTypes.oneOf()
    validator(value) {
      return ['primary', 'secondary'].includes(value);
    }
  },
  showIcon: {
    type: Boolean,
    default: false // Afficher la flèche ou non
  }
});

// Styles de base communs aux deux boutons
const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white rounded-md transition-all duration-200";

// Styles spécifiques
const primaryStyle = "bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40";
const secondaryStyle = "border border-slate-800 bg-slate-950 hover:bg-slate-900";
</script>

<template>
  <!-- Le :href permet de lier dynamiquement la variable href -->
  <a 
    :href="href" 
    :class="[baseStyle, variant === 'primary' ? primaryStyle : secondaryStyle]"
  >
    {{ text }}
    
    <!-- v-if remplace le "showIcon &&" de React -->
    <ArrowRight v-if="showIcon" class="w-5 h-5" />
  </a>
</template>
