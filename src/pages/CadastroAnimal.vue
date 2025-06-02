<template>
  <section class="cadastro-animal">
    <h2>Cadastrar Novo Animal</h2>
    <form class="form-animal">
      <label>Nome:<input type="text" required /></label>
      <label>Idade:<input type="text" required /></label>
      <label>Porte:
        <select required>
          <option value="">Selecione</option>
          <option>Pequeno</option>
          <option>Médio</option>
          <option>Grande</option>
        </select>
      </label>
      <label>Espécie:<input type="text" required /></label>
      <label>Status:
        <select required>
          <option>Disponível</option>
          <option>Adotado</option>
        </select>
      </label>
      <label>Foto:<input type="file" /></label>
      <button type="submit">Cadastrar</button>
    </form>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cadastro-animal {
  margin: 2.5rem 0;
  text-align: center;
}
.cadastro-animal h2 {
  color: #2d6a4f;
  margin-bottom: 2rem;
}
.form-animal {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 400px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.08);
}
.form-animal label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1b4332;
  font-weight: 500;
}
.form-animal input, .form-animal select {
  margin-top: 0.3rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #b7e4c7;
  width: 100%;
}
.form-animal button {
  background: #40916c;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
}
.form-animal button:hover {
  background: #1b4332;
}
</style> 