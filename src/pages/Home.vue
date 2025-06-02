<template>
  <div>
    <section class="home-banner">
      <div class="banner-content">
        <h1>Bem-vindo à Pet Vida ONG</h1>
        <p>Cuidando de vidas, promovendo adoção responsável.</p>
        <router-link to="/adocao" class="btn">Quero Adotar</router-link>
      </div>
      <img src="/images/pets/animaisFelizes.jpg" alt="Animais felizes" class="banner-img" />
    </section>
    <section class="home-missao">
      <h2>Nossa Missão</h2>
      <p>Organizar e facilitar a adoção de animais por meio de um sistema centralizado, garantindo que os animais disponíveis sejam devidamente cadastrados, divulgados e acompanhados até a adoção, promovendo transparência e agilidade no processo.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-primary-light);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-xl) var(--spacing-lg);
  margin: var(--spacing-lg) 0 var(--spacing-xl) 0;
  gap: var(--spacing-lg);
}

.banner-content {
  max-width: 500px;
}

.banner-content h1 {
  color: var(--color-primary-dark);
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xs);
}

.banner-content p {
  color: var(--color-primary-dark);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
}

.banner-img {
  width: 320px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}

.home-missao {
  text-align: center;
  margin: var(--spacing-xl) 0;
}

.home-missao h2 {
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-xs);
}

.home-missao p {
  color: var(--color-text);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .home-banner {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .banner-img {
    width: 90vw;
    max-width: 320px;
  }
}
</style> 