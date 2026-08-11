<script setup>
import { ref, reactive, computed } from 'vue';
import { Sparkles, FolderCode, UsersRound, User, Mail, AtSign } from 'lucide-vue-next';
import Button from '../ui/Button.vue';
import Badge from '../ui/Badge.vue';
import SectionTitle from '../ui/SectionTitle.vue';

// --- 1. STATE ---
// On utilise `reactive` pour les objets (comme les données de formulaire).
// C'est l'équivalent d'un ref, mais sans avoir besoin d'utiliser `.value` pour ses propriétés.
const formData = reactive({
  fullName: '',
  email: '',
  message: ''
});

const isSending = ref(false);
const feedback = ref(null);

// --- 2. COMPUTED (Dérivation d'état) ---
// Remplace votre constante isFormValid. Il se mettra à jour automatiquement.
const isFormValid = computed(() => {
  return formData.fullName.trim().length > 0 && 
         formData.email.trim().length > 0 && 
         formData.message.trim().length >= 10;
});

// --- 3. METHODS ---
// Plus besoin de handleChange ! Vue s'en occupe tout seul avec v-model.
const handleSubmit = () => {
  isSending.value = true;
  feedback.value = null;

  // Simulation d'envoi
  setTimeout(() => {
    isSending.value = false;
    feedback.value = "Message sent successfully! We'll be in touch soon.";
    
    // On réinitialise le formulaire directement
    formData.fullName = '';
    formData.email = '';
    formData.message = '';
  }, 1500);
};
</script>

<template>
  <section id="contact-section" class="py-24 border-t relative">

    <!-- 1. LE FOND LUMINEUX -->
    <div class="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
      <!-- Lueur Violette -->
      <div class="absolute -top-10 -left-80 md:-top-10 md:-left-80 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-violet-500/20 rounded-full blur-[150px] md:blur-[250px]"></div>
      <div class="absolute top-0 left-40 md:top-0 md:left-50 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-violet-500/30 rounded-full blur-[60px] md:blur-[90px]"></div>

      <!-- Lueur Bleue -->
      <div class="absolute -bottom-100 -right-20 md:-bottom-100 md:-right-40 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-blue-800/20 rounded-full blur-[150px] md:blur-[250px]"></div>
      <div class="absolute bottom-50 right-10 md:bottom-60 md:right-20 w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-blue-500/30 rounded-full blur-[60px] md:blur-[90px]"></div>

      <!-- Grille -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <!-- Fond degradé -->
      <div class="absolute bottom-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-t from-black to-transparent"></div>
    </div>

    <!-- badge -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12">
      <div class="flex justify-center mb-12">
        <Badge text="Start your AI journey" />
      </div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center mb-24">
      <SectionTitle 
        mainText="Ready to Explore" 
        highlightText="Agentic AI?" 
      />
    </div>

    <!-- Boutons -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 relative z-10">
      <Button 
        text="Enroll at Holberton School" 
        href="#Started" 
        variant="primary" 
        :showIcon="true" 
      />
      <Button 
        text="Need more information?" 
        href="#Methodology" 
        variant="secondary" 
        :showIcon="false"
      />
    </div>

    <!-- --- SHORT LIST OF HIGHLIGHTS --- -->
    <div class="flex flex-col sm:flex-row items-center justify-center mb-20 gap-6 sm:gap-8 text-sm text-slate-400">
      <!-- Highlight 1 -->
      <div class="flex items-center gap-2">
        <FolderCode class="w-4 h-4 text-violet-500" />
        <span>Project-based learning</span>
      </div>
      <!-- Highlight 2 -->
      <div class="flex items-center gap-2">
        <UsersRound class="w-4 h-4 text-violet-500" />
        <span>Peer learning environnement</span>
      </div>
      <!-- Highlight 3 -->
      <div class="flex items-center gap-2">
        <Sparkles class="w-4 h-4 text-violet-500" />
        <span>AI-powered workflows</span>
      </div>
    </div>

    <!-- --- FORMULAIRE --- -->
    <div class="max-w-xl mx-auto relative z-10 p-8 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
      
      <!-- Message de succès (Feedback) -->
      <div v-if="feedback" class="mb-6 p-4 rounded-xl border border-green-900 bg-green-950/30 text-green-400 text-center font-medium">
        {{ feedback }}
      </div>

      <!-- Le modificateur @submit.prevent remplace e.preventDefault() -->
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
        
        <!-- Champ : Full Name -->
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <User class="w-5 h-5 text-violet-500" />
            <label class="text-white font-semibold">Full name</label>
          </div>
          <!-- v-model remplace "value" et "onChange" ! -->
          <input
            v-model="formData.fullName"
            type="text"
            placeholder="Your full name..."
            autocomplete="off"
            required
            class="w-full px-4 py-3 bg-black border border-slate-800 rounded-md text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </div>

        <!-- Champ : Email -->
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <AtSign class="w-5 h-5 text-violet-500" />
            <label class="text-white font-semibold">Email</label>
          </div>
          <input
            v-model="formData.email"
            type="email"
            placeholder="you@example.com"
            autocomplete="off"
            required
            class="w-full px-4 py-3 bg-black border border-slate-800 rounded-md text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </div>

        <!-- Champ : Message -->
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <Mail class="w-5 h-5 text-violet-500" />
            <label class="text-white font-semibold">Message</label>
          </div>
          <textarea
            v-model="formData.message"
            placeholder="Tell us about your project or learning goals!"
            autocomplete="off"
            required
            rows="4"
            class="w-full px-4 py-3 bg-black border border-slate-800 rounded-md text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
          ></textarea>
        </div>

        <!-- Bouton de Soumission -->
        <button
          type="submit"
          :disabled="isSending || !isFormValid"
          class="w-full mt-2 flex justify-center items-center gap-2 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg shadow-lg shadow-violet-500/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isSending">Sending...</span>
          <span v-else>Send message</span>
        </button>
        
        <!-- Description Slate 500 -->
        <p class="text-slate-500 text-sm text-center">
          Please fill all required fields.
        </p>
      </form>
    </div>

  </section>
</template>
