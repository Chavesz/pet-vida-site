<template>
  <div class="testimonial-card">
    <div class="testimonial-content">
      <p class="quote">{{ testimonial.quote }}</p>
      <div class="author">
        <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar">
        <div class="author-info">
          <h4>{{ testimonial.name }}</h4>
          <p class="role">{{ testimonial.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.testimonial-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.quote {
  color: var(--color-text);
  font-style: italic;
  line-height: 1.6;
  margin: 0;
}

.author {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  color: var(--color-primary-dark);
  margin: 0;
  font-size: 1.1rem;
}

.role {
  color: var(--color-text-light);
  margin: 0;
  font-size: 0.9rem;
}
</style> 