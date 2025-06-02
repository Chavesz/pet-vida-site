<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="/images/pets/logo.png" alt="Pet Vida ONG Logo" class="logo-img" />
      </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/adocao" class="nav-link">Adoção</router-link>
        <router-link to="/processo" class="nav-link">Como Adotar</router-link>
        <router-link to="/area-adotante" class="nav-link">Área do Adotante</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-md) 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--color-primary);
}

.logo-img {
  height: 70px; /* Ajuste a altura conforme necessário */
  width: auto;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
}
</style> 