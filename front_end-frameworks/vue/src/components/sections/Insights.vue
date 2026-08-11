<script setup>
import { ref, onMounted } from 'vue';
import { getInsights } from '../../services/insightsService'; // Pas besoin de .vue pour un .js
import InsightCard from '../cards/InsightCard.vue';
import Badge from '../ui/Badge.vue';
import SectionTitle from '../ui/SectionTitle.vue';

// --- 1. STATE ---
// ref() remplace useState(). 
const insightsList = ref([]);
const error = ref(null);

// --- 2. ONMOUNTED (équivalent de useEffect avec un tableau de dépendances vide []) ---
onMounted(async () => {
  try {
    const data = await getInsights();
    // En Vue, on modifie la valeur d'une ref en assignant sa propriété .value
    insightsList.value = data; 
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<template>
  <section id="insights-section" class="py-24 bg-black relative">
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      
      <!-- EN-TÊTE -->
      <div class="text-center mb-16">
        <!-- Badge -->
        <div class="flex justify-center mb-12">
          <Badge text="Insights" />
        </div>

        <SectionTitle 
          mainText="Explore Agentic AI" 
          highlightText="Through real-world scenes" 
        />
      </div>

      <!-- ZONE DE MESSAGE D'ERREUR -->
      <!-- Le && de React devient un simple v-if -->
      <div v-if="error" class="mb-12 p-4 rounded-xl border border-red-900 bg-red-950/30 text-red-400 text-center">
        <p class="font-semibold">Oops! Something went wrong.</p>
        <p class="text-sm">{{ error }}</p>
      </div>

      <!-- GRILLE D'INSIGHTS -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Le map() devient v-for, et on lie les props avec les deux-points (:) -->
        <InsightCard 
          v-for="(item, index) in insightsList" 
          :key="index"
          :insight="item"
          :index="index"
        />
      </div>
      
    </div>
  </section>
</template>
