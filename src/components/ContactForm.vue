<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Nome</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        required
        placeholder="Seu nome completo"
      >
    </div>

    <div class="form-group">
      <label for="email">E-mail</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        required
        placeholder="seu@email.com"
      >
    </div>

    <div class="form-group">
      <label for="phone">Telefone</label>
      <input
        type="tel"
        id="phone"
        v-model="form.phone"
        required
        placeholder="(00) 00000-0000"
      >
    </div>

    <div class="form-group">
      <label for="message">Mensagem</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        placeholder="Digite sua mensagem..."
      ></textarea>
    </div>

    <button type="submit" class="submit-button">
      Enviar Mensagem
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Implementar lógica de envio do formulário
      console.log('Formulário enviado:', this.form)
      // Limpar formulário após envio
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

label {
  color: var(--color-text);
  font-weight: 500;
}

input,
textarea {
  padding: var(--spacing-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.submit-button {
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background: var(--color-primary-dark);
}
</style> 