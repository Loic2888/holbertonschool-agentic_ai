<script>
  import Header from './components/layout/Header.svelte'
  import Footer from './components/layout/Footer.svelte'
  import Hero from './components/sections/Hero.svelte';
  import About from './components/sections/About.svelte'
  import Feature from './components/sections/Feature.svelte';
  import Insights from './components/sections/Insights.svelte';
  import Contact from './components/sections/Contact.svelte';
</script>

<section id="center" class="min-h-screen bg-slate-950 flex flex-col text-white">
  <Header />
  <main class="flex-1">
    <Hero />
    <About />
    <Feature />
    <Insights />
    <Contact />
    <Footer />
  </main>

</section>
