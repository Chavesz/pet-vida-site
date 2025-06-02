<template>
  <div class="card animal-card" @click="$emit('click')">
    <img :src="animal.foto" :alt="animal.nome" class="animal-img" />
    <div class="animal-info">
      <h3>{{ animal.nome }}</h3>
      <p><strong>Idade:</strong> {{ animal.idade }}</p>
      <p><strong>Porte:</strong> {{ animal.porte }}</p>
      <p><strong>Raça:</strong> {{ animal.raca }}</p>
      <p><strong>Status:</strong> {{ animal.status }}</p>
      <button class="btn">Quero Adotar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimalCard',
  props: {
    animal: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.animal-card {
  width: 300px;
  overflow: hidden;
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.animal-card:hover {
  transform: translateY(-5px);
}

.animal-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
}

.animal-info {
  padding: var(--spacing-md);
}

.animal-info h3 {
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-sm);
}

.animal-info p {
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.animal-info strong {
  color: var(--color-primary);
}

.btn {
  width: 100%;
  margin-top: var(--spacing-md);
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-sm);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background: var(--color-primary-dark);
}
</style> 