<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email"/>

    <label>Password:</label>
    <input type="password" required v-model="password"/>
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
      <option value="manager">Project Manager</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill"/>
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="removeSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>I agree to the terms and conditions</label>
    </div>

    <div class="submit">
      <button type="submit">Create Account</button>
    </div>

    <!-- <div>
      <input type="checkbox" value="Sebastian" v-model="names">
      <label>Sebastian</label>
    </div>
    <div>
      <input type="checkbox" value="Karol"  v-model="names">
      <label>Karol</label>
    </div>
    <div>
      <input type="checkbox" value="Artur" v-model="names">
      <label>Artur</label>
    </div> -->
  </form>
  <p>{{ email }} - {{ password }} - {{ role }} - {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: '',
      // names: []
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === ' ' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = '';
      }
    },
    removeSkill(e) {
      this.skills = this.skills.filter(skill => skill !== e);
    },
    handleSubmit() {
      //validate the password
      this.passwordError = this.password.length > 5 ?
        '' : 'Password must be at least 6 characters long.'
      if (!this.passwordError) {
        console.log('email:', this.email);
        console.log('password:', this.password);
        console.log('role:', this.role);
        console.log('skills:', this.skills);
        console.log('terms accepted:', this.terms);
        //submit the form
      }

    }

  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    width: 100%;
    padding: 10px 6px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #eee;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>