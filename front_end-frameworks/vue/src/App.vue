<script setup>
import Header from './components/layout/Header.vue'
import Hero from './components/sections/Hero.vue';
import About from './components/sections/About.vue';
import Features from './components/sections/Features.vue';
import Insights from './components/sections/Insights.vue';
import Contact from './components/sections/Contact.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div class="bg-slate-950 min-h-screen">
    <Header />
    <main>
      <Hero />
      <About />
      <Features />
      <Insights />
      <Contact />
      <Footer />
    </main>
  </div>
</template>
