<template>
  <section class="adocao-lista">
    <h2>Animais para Adoção</h2>
    <div class="animais-grid">
      <AnimalCard v-for="animal in pets" :key="animal.id" :animal="animal" />
    </div>
  </section>
</template>

<script setup>
import AnimalCard from '../components/AnimalCard.vue';
import { pets } from '@/data/pets';
</script>

<style scoped>
.adocao-lista {
  margin: 2.5rem 0;
  text-align: center;
}
.adocao-lista h2 {
  color: #2d6a4f;
  margin-bottom: 2rem;
}
.animais-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style> 