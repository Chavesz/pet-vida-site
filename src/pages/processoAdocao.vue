<template>
  <section class="processo-adocao">
    <h2>Como Funciona a Adoção</h2>
    <div class="steps-list">
      <ProcessStep v-for="step in steps" :key="step.number" :step="step" />
    </div>
  </section>
</template>

<script setup>
import ProcessStep from '../components/ProcessStep.vue';

const steps = [
  { number: 1, title: 'Cadastro do Interessado', description: 'O interessado preenche um formulário com seus dados e interesse em adotar.' },
  { number: 2, title: 'Avaliação do Perfil', description: 'A ONG avalia o perfil do adotante para garantir o bem-estar do animal.' },
  { number: 3, title: 'Visita e Entrevista', description: 'Pode ser realizada uma visita ou entrevista para conhecer o futuro lar.' },
  { number: 4, title: 'Adoção e Acompanhamento', description: 'Após aprovação, o animal é entregue e a ONG faz acompanhamento inicial.' },
];
</script>

<style scoped>
.processo-adocao {
  margin: 2.5rem 0;
  text-align: center;
}
.processo-adocao h2 {
  color: #2d6a4f;
  margin-bottom: 2rem;
}
.steps-list {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
</style> 