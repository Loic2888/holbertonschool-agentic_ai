<script lang="ts">
  import { onMount } from 'svelte'; // Le hook de cycle de vie Svelte
  import { getInsights } from '../../services/insightsService';
  import InsightCard from '../cards/InsightCard.svelte';
  import Badge from '../ui/Badge.svelte';
  import SectionTitle from '../ui/SectionTitle.svelte';

  // --- 1. STATE ---
  // Plus besoin de useState ! On déclare juste des variables classiques.
  let insightsList = [];
  let error = null;

  // --- 2. ONMOUNT (équivalent de useEffect avec []) ---
  // Svelte gère nativement les fonctions asynchrones dans onMount
  onMount(async () => {
    try {
      insightsList = await getInsights();
    } catch (err) {
      error = err.message;
    }
  });
</script>

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
    <!-- On remplace le && par le bloc {#if} -->
    {#if error}
      <div class="mb-12 p-4 rounded-xl border border-red-900 bg-red-950/30 text-red-400 text-center">
        <p class="font-semibold">Oops! Something went wrong.</p>
        <p class="text-sm">{error}</p>
      </div>
    {/if}

    <!-- GRILLE D'INSIGHTS -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each insightsList as item, index}
        <!-- Raccourci Svelte : {index} équivaut à index={index} -->
        <InsightCard 
          insight={item}
          {index}
        />
      {/each}
    </div>
    
  </div>
</section>
