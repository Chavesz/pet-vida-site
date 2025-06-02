<template>
  <div class="process-step">
    <div class="step-number">{{ step.number }}</div>
    <div class="step-content">
      <h3>{{ step.title }}</h3>
      <p>{{ step.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProcessStep',
  props: {
    step: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.process-step {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
}

.step-number {
  background: var(--color-primary);
  color: var(--color-white);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h3 {
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-xs);
}

.step-content p {
  color: var(--color-text);
  line-height: 1.5;
}
</style> 