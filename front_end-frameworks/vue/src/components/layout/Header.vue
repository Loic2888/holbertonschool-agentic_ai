<script setup>
import Logo from '../ui/brandLogo.vue';
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-slate-950 border-b border-slate-950 text-white py-4">
    <div class="w-full mx-auto px-6 md:px-12 lg:px-20 h-4 flex items-center justify-between">
      <div>
        <Logo />
      </div>
      
      <div class="flex items-center gap-8">
        <nav class="hidden md:block">
          <ul class="flex space-x-8 font-medium">
            <li>
              <a href="#about-section" class="text-sm text-slate-500 hover:text-violet-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#features-section" class="text-sm text-slate-500 hover:text-violet-400 transition-colors">Features</a>
            </li>
            <li>
              <a href="#insights-section" class="text-sm text-slate-500 hover:text-violet-400 transition-colors">Insights</a>
            </li>
            <li>
              <a href="#contact-section" class="text-sm text-slate-500 hover:text-violet-400 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        <div>
          <a 
            href="#signup" 
            class="px-3 py-1.5 font-semibold rounded-md text-sm text-white bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40"
          >
            Enroll now
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
