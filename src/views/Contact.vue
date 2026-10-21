<template>
  <div class="contact-page">
    <header class="contact-header">
      <h1>Contact Us</h1>
      <p>Get in touch with the Central Philippine University College of Computer Studies.</p>
    </header>

    <div class="contact-container">
      <div class="contact-info">
        <h2>Office Location</h2>
        <p><strong>Address:</strong> Henry Luce III Library Building / CCS Department, Central Philippine University, Jaro, Iloilo City, Philippines</p>
        <p><strong>Email:</strong> ccs@cpu.edu.ph</p>
        <p><strong>Phone:</strong> (033) 329-1971</p>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <h2>Send Us a Message</h2>
        
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="form.name" required placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email5" id="email" v-model="form.email" required placeholder="Enter your email" />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="4" required placeholder="Write your message here..."></textarea>
        </div>

        <button type="submit" class="submit-btn">Submit Message</button>
        <p v-if="feedback" class="feedback-msg">{{ feedback }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const feedback = ref('')

const handleSubmit = () => {
  if (!form.name || !form.email || !form.message) {
    feedback.value = 'Please fill out all fields before submitting.'
    return
  }
  feedback.value = 'Thank you! Your message has been sent successfully (Demonstration Mode).'
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.contact-page {
  background: #0d2326;
  padding: 10rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.contact-header {
  border-bottom: 2px solid #f59e0b;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  text-align: center; /* Center aligns header text */
}
.contact-header h1 {
  color: #f59e0b;
  margin-bottom: 0.5rem;
}
.contact-header p {
  color: #f8f8f7;
  font-size: 1.1rem;
}
.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  color: #c2c218;
}
.contact-info h2, .contact-form h2 {
  color: #fd9a05;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.contact-info p {
  color: #fdfdfd;
  line-height: 1.5;
  margin-bottom: 0.8rem;
}

.contact-form {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.3rem;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #000000;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
}
.submit-btn {
  background: #003366;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
.submit-btn:hover {
  background: #002244;
}
</style>