<template>
  <div class="adocao-page">
    <div class="container">
      <h1>Animais Disponíveis para Adoção</h1>
      
      <div class="filtros">
        <div class="filtro-grupo">
          <label for="porte">Porte:</label>
          <select id="porte" v-model="filtros.porte">
            <option value="">Todos</option>
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>

        <div class="filtro-grupo">
          <label for="sexo">Sexo:</label>
          <select id="sexo" v-model="filtros.sexo">
            <option value="">Todos</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>
      </div>

      <div class="pets-grid">
        <AnimalCard
          v-for="pet in petsFiltrados"
          :key="pet.id"
          :animal="pet"
          @click="mostrarDetalhes(pet)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { pets } from '@/data/pets'
import AnimalCard from '@/components/AnimalCard.vue'

export default {
  name: 'AdocaoPet',
  components: {
    AnimalCard
  },
  data() {
    return {
      pets,
      filtros: {
        porte: '',
        sexo: ''
      }
    }
  },
  computed: {
    petsFiltrados() {
      return this.pets.filter(pet => {
        if (this.filtros.porte && pet.porte !== this.filtros.porte) return false
        if (this.filtros.sexo && pet.sexo !== this.filtros.sexo) return false
        return true
      })
    }
  },
  methods: {
    mostrarDetalhes(pet) {
      // Implementar lógica para mostrar detalhes do pet
      console.log('Detalhes do pet:', pet)
    }
  }
}
</script>

<style scoped>
.adocao-page {
  padding: var(--spacing-xl) 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

h1 {
  color: var(--color-primary-dark);
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.filtros {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  justify-content: center;
}

.filtro-grupo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

label {
  color: var(--color-text);
  font-weight: 500;
}

select {
  padding: var(--spacing-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  background: var(--color-white);
  color: var(--color-text);
  cursor: pointer;
}

.pets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  justify-items: center;
}

@media (max-width: 768px) {
  .filtros {
    flex-direction: column;
    align-items: stretch;
  }

  .pets-grid {
    grid-template-columns: 1fr;
  }
}
</style> 