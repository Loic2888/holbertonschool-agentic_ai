<script setup>
import { Sparkle } from 'lucide-vue-next';

// Définition des props (remplace PropTypes)
defineProps({
  text: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <span :class="['inline-flex items-center gap-2 px-4 py-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10', className]">
    <Sparkle class="w-1.5 h-1.5 fill-current" />
    {{ text }}
    <Sparkle class="w-1.5 h-1.5 fill-current" />
  </span>
</template>
