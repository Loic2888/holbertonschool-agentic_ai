<script>
  // N'oublie pas les .svelte !
  import Badge from '../ui/Badge.svelte';
  import SectionTitle from '../ui/SectionTitle.svelte';
  import { features } from '../../data/features';
</script>

<section id="features-section" class="py-24 border-t bg-black border-slate-950/50 relative">
  
  <!-- badge -->
  <div class="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12">
    <!-- Badge -->
    <div class="flex justify-center mb-12">
      <Badge text="Features" />
    </div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-6 text-center mb-24">
    <SectionTitle 
      mainText="Everything You Need to Build" 
      highlightText="With powerful AI agents" 
    />
  </div>

  <!-- GRILLE GRID -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-6">
    
    <!-- On boucle sur nos features. Plus besoin de "index" puisqu'on ne s'en sert pas ! -->
    {#each features as item}
      <div class="p-8 rounded-3xl border md:mx-8 lg:mx-12 border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
        
        <!-- On vérifie si l'icône existe -->
        {#if item.icon}
          <div class="w-12 h-12 rounded-xl bg-violet-500 border border-violet-500/20 flex items-center justify-center mb-6">
            
            <!-- C'est ici que la magie opère pour le composant dynamique 👇 -->
            <svelte:component this={item.icon} class="w-6 h-6 text-white" />
            
          </div>
        {/if}
        
        <h3 class="text-xl font-bold text-white mb-3">
          {item.title}
        </h3>
        <p class="text-sm text-slate-500">
          {item.description}
        </p>
      </div>
    {/each}
    
  </div>
</section>
