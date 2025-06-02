<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Pet Vida ONG</h3>
          <p>Cuidando de vidas, promovendo adoção responsável.</p>
        </div>
        <div class="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@petvida.org</p>
          <p>Telefone: (83) 99128-2532</p>
        </div>
        <div class="footer-section">
          <h3>Redes Sociais</h3>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Pet Vida ONG. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: var(--color-white);
  padding: var(--spacing-xl) 0 var(--spacing-md);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section h3 {
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);
}

.footer-section p {
  color: var(--color-primary-light);
  margin-bottom: var(--spacing-xs);
}

.social-links {
  display: flex;
  gap: var(--spacing-sm);
}

.social-link {
  color: var(--color-primary-light);
  text-decoration: none;
  transition: color 0.2s;
}

.social-link:hover {
  color: var(--color-white);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-primary);
}

.footer-bottom p {
  color: var(--color-primary-light);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style> 