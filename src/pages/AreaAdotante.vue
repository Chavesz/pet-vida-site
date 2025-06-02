<template>
  <section class="area-adotante">
    <h2>Área do Adotante</h2>
    <div class="status-box">
      <h3>Status do Processo de Adoção</h3>
      <ul>
        <li><span class="done">✔</span> Cadastro realizado</li>
        <li><span class="done">✔</span> Avaliação do perfil</li>
        <li><span class="pending">⏳</span> Visita agendada</li>
        <li><span class="pending">⏳</span> Adoção em andamento</li>
      </ul>
      <p class="info">* Esta é uma simulação de acompanhamento. Para informações reais, entre em contato com a ONG.</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.area-adotante {
  margin: 2.5rem 0;
  text-align: center;
}
.area-adotante h2 {
  color: #2d6a4f;
  margin-bottom: 2rem;
}
.status-box {
  background: #fff;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.08);
}
.status-box h3 {
  color: #1b4332;
  margin-bottom: 1rem;
}
.status-box ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  text-align: left;
}
.status-box li {
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.done {
  color: #40916c;
  font-weight: bold;
}
.pending {
  color: #b7e4c7;
  font-weight: bold;
}
.info {
  color: #888;
  font-size: 0.95rem;
  margin-top: 1rem;
}
</style> 