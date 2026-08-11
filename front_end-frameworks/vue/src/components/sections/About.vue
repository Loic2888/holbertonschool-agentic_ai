<script setup>
import Badge from '../ui/Badge.vue';
import SectionTitle from '../ui/SectionTitle.vue';
import { steps } from '../../data/steps';
</script>

<template>
  <section id="about-section" class="py-24 border-t border-slate-950/50 relative bg-black">
    
    <!-- badge -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <div class="flex justify-center mb-12">
        <Badge text="What is agentic AI?" />
      </div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <SectionTitle 
        mainText="AI that does more than answer" 
        highlightText="It acts with purpose" 
      />

      <p class="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-20">
        Agentic AI refers to artificial intelligence systems designed to pursue goals, make decisions, use tools, and adapt their actions across multiple steps. Instead of only responding to a single prompt, an AI agent can break down a task, plan a strategy, execute actions, evaluate result, and continue until the objective is reached.
      </p>
    </div>

    <!-- --- CONTENU PRINCIPAL EN 2 COLONNES --- -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <!-- COLONNE GAUCHE -->
      <div class="p-12 rounded-3xl border border-slate-800 bg-slate-950 md:ml-8 lg:ml-12 shadow-xl shadow-slate-950/40">
        <!-- 1ère section -->
        <h3 class="text-2xl font-bold text-white mb-4">
          Traditional AI
        </h3>
        <p class="text-slate-500 leading-relaxed">
          Responds to direct instructions, generates content, answers questions, or analyse information within a limited interaction.
        </p>
        
        <!-- Le trait de séparation -->
        <div class="w-full h-px bg-slate-800 my-8"></div>
        
        <!-- 2ème section -->
        <h3 class="text-xl font-bold text-violet-300 mb-4">
          Agentic AI
        </h3>
        <p class="text-slate-500 leading-relaxed">
          Understands a goal, chooses actions, uses external tools, follows a plan, and adjusts its behavior based on feedback.
        </p>
      </div>

      <!-- COLONNE DROITE steps -->
      <div>
        <!-- La boucle map() de React devient un v-for en Vue -->
        <div v-for="(step, index) in steps" :key="index" class="flex gap-6 md:gap-8">
          
          <!-- Cercle + Ligne -->
          <div class="flex flex-col items-center">
            <!-- Cercle violet -->
            <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/40 relative z-10">
              {{ index + 1 }}
            </div>
            
            <!-- Le && de React devient un v-if -->
            <div 
              v-if="index !== steps.length - 1" 
              class="w-[2px] grow bg-gradient-to-b from-violet-500 to-violet-500/10"
            ></div>
          </div>

          <!-- Le contenu de l'étape -->
          <div :class="['pt-2 md:pt-3', { 'pb-8': index !== steps.length - 1 }]">
            <h3 class="text-2xl font-bold text-white mb-3">
              {{ step.title }}
            </h3>
            <p class="text-base text-slate-300 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
          
        </div>
      </div>

    </div>
  </section>
</template>
