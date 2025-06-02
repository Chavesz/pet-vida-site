<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="/images/pets/Borcelle's.png" alt="Pet Vida ONG Logo" class="logo-img" />
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.1);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 0.8rem;
  }

  .nav-link::after {
    display: none;
  }

  .logo-img {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.5rem 0;
  }

  .logo-img {
    height: 40px;
  }
}
</style> 