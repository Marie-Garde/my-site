<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import happyOwl from '@/assets/illustration/contact-form/happy-owl.vue';
import sadOwl from '@/assets/illustration/contact-form/sad-owl.vue';
import whatOwl from '@/assets/illustration/contact-form/what-owl.vue';
import happyArmOwl from '@/assets/illustration/contact-form/happy-arm-owl.vue';
import emailjs from 'emailjs-com';
import Title from '@/components/Title.vue';
import { isMobile } from '@/reactives/isMobile';
import { useHead } from '@vueuse/head';

useHead({
  title: "L'envolée numérique | Contactez-moi",
  meta: [
    {
      name: 'description',
      content: "Faites décoller votre présence en ligne par la création d'un site personnalisé.",
    },
    {
      name: 'keywords',
      content:
        'développement web, solution numérique, site web, Marie Garde, création de sites web',
    },
    { property: 'og:title', content: 'Marie Garde | Contactez-moi' },
    {
      property: 'og:description',
      content: "Faites décoller votre présence en ligne par la création d'un site personnalisé.",
    },
    { property: 'og:image', content: '@/public/logo.png' },
    { property: 'og:url', content: 'https://marie-garde.com' },
  ],
});

const mobile = isMobile();

const formValue = ref({
  companyName: '',
  lastName: '',
  firstName: '',
  mail: '',
  phone: '',
  message: '',
});

const error = ref('');
const emailErrorMessage = ref('');
const phoneErrorMessage = ref('');
const nameError = ref(false);
const mailError = ref(false);
const phoneError = ref(false);
const messageError = ref(false);
const messageLenghtError = ref(false);
const messageSend = ref(false);
const messageSendError = ref(false);
const disabled = ref(false);

const isLoading = ref(false);

const imageSrc = computed(() => {
  if (
    nameError.value ||
    (mailError.value && phoneError.value) ||
    messageError.value ||
    messageLenghtError.value
  ) {
    return 'whatOwl';
  }
  if (messageSend.value) {
    return 'happyArmOwl';
  }

  if (messageSendError.value) {
    return 'sadOwl';
  }
  return 'happyOwl';
});

const bubbleText = computed(() => {
  if (nameError.value) {
    return "Si je n'ai aucun nom, je ne saurais pas comment vous appeler...";
  }
  if (mailError.value && phoneError.value) {
    return 'Il va être compliqué de vous contacter si vous ne me donnez aucun moyen de contact...';
  }
  if (messageError.value) {
    return "Essayez de m'expliquer au moins un peu votre projet ;)";
  }
  if (messageLenghtError.value) {
    return "C'est un peu court pour m'expliquer votre projet...";
  }
  if (messageSend.value) {
    return 'Votre message a été envoyé ! Vous aurez bientot de mes nouvelles !';
  }
  if (messageSendError.value) {
    return 'Aïe aïe aïe... Il y a eu un soucis, veuillez réessayer !';
  }
  return "J'ai hâte d'en savoir plus !";
});

function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && !email.includes('yopmail');
}

watch(
  () => formValue.value.mail,
  (newMail) => {
    emailErrorMessage.value = '';

    if (newMail && !validateEmail(newMail)) {
      emailErrorMessage.value = 'Veuillez entrer une adresse email valide (pas de yopmail).';
      mailError.value = true;
      disabled.value = true;
    } else {
      mailError.value = false;
      disabled.value = false;
    }
  },
);

function validatePhone(phone: string) {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

watch(
  () => formValue.value.phone,
  (newPhone) => {
    phoneErrorMessage.value = '';
    if (newPhone && !validatePhone(newPhone)) {
      phoneErrorMessage.value = 'Veuillez entrer un numéro de téléphone valide.';
      phoneError.value = true;
      disabled.value = true;
    } else {
      phoneError.value = false;
      disabled.value = false;
    }
  },
);

function sendEmail() {
  error.value = '';
  nameError.value = false;
  mailError.value = false;
  phoneError.value = false;
  messageError.value = false;
  messageLenghtError.value = false;

  if (!formValue.value.companyName && !formValue.value.lastName && !formValue.value.firstName) {
    error.value = 'Veuillez renseigner au moins le nom de votre entreprise ou votre nom/prénom.';
    nameError.value = true;
    return;
  }

  if (!formValue.value.mail && !formValue.value.phone) {
    error.value = 'Veuillez fournir au moins une adresse mail ou un numéro de téléphone.';
    mailError.value = true;
    phoneError.value = true;
    return;
  }

  if (!formValue.value.message) {
    error.value = 'Veuillez écrire un message.';
    messageError.value = true;
    return;
  }

  if (formValue.value.message.length < 15) {
    error.value = 'Votre message doit contenir au moins 15 caractères.';
    messageLenghtError.value = true;
    return;
  }

  isLoading.value = true;

  console.log('PUBLIC KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name:
          formValue.value.firstName +
          ' ' +
          formValue.value.lastName +
          '/' +
          formValue.value.companyName,
        email: formValue.value.mail,
        phone: formValue.value.phone,
        message: formValue.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(
      (result) => {
        console.log(result);
        messageSend.value = true;

        formValue.value = {
          companyName: '',
          lastName: '',
          firstName: '',
          mail: '',
          phone: '',
          message: '',
        };

        error.value = '';
        emailErrorMessage.value = '';
        phoneErrorMessage.value = '';
      },
      (error) => {
        messageSendError.value = true;
      },
    )
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <div class="container">
    <div class="content">
      <Title title="Parlez moi de vous" id="contact" color="white" />
      <div class="form-content">
        <div class="informations">
          <p>
            N'hésitez pas à m'envoyer un message pour me présenter votre projet, je vous répondrai
            le plus rapidement possible pour caler un rendez-vous !
          </p>
          <p>
            Mon mail : <a href="mailto:contact@marie-garde.com">contact@lenvoleenumerique.com</a>
          </p>
          <p v-if="!mobile" class="bubble">
            {{ bubbleText }}
          </p>
          <sadOwl class="owlImage" v-if="imageSrc === 'sadOwl' && !mobile" />
          <whatOwl class="owlImage" v-if="imageSrc === 'whatOwl' && !mobile" />
          <happyArmOwl class="owlImage" v-if="imageSrc === 'happyArmOwl' && !mobile" />
          <happyOwl class="owlImage" v-if="imageSrc === 'happyOwl' && !mobile" />
        </div>
        <div class="form-container">
          <form @submit.prevent="sendEmail" class="form">
            <div class="form-input">
              <label class="form-input-label" for="companyName">Nom de votre entreprise</label>
              <input
                :class="['form-input-field', { 'input-error': nameError }]"
                id="companyName"
                v-model="formValue.companyName"
                type="text"
                placeholder="Groot"
              />
            </div>
            <p>ou</p>
            <div class="name">
              <div class="form-input">
                <label class="form-input-label" for="lastName">Nom</label>
                <input
                  :class="['form-input-field', { 'input-error': nameError }]"
                  id="lastName"
                  v-model="formValue.lastName"
                  type="text"
                  placeholder="Groot"
                />
              </div>
              <div class="form-input">
                <label class="form-input-label" for="firstName">Prénom</label>
                <input
                  :class="['form-input-field', { 'input-error': nameError }]"
                  id="firstName"
                  v-model="formValue.firstName"
                  type="text"
                  placeholder="Groot"
                />
              </div>
            </div>
            <div class="form-input">
              <label for="mail">Email</label>
              <input
                id="mail"
                v-model="formValue.mail"
                :class="{ 'input-error': mailError }"
                type="email"
                placeholder="Email"
              />
              <p v-show="emailErrorMessage" class="error">{{ emailErrorMessage }}</p>
            </div>

            <div class="form-input">
              <label for="phone">Téléphone</label>
              <input
                id="phone"
                v-model="formValue.phone"
                :class="{ 'input-error': phoneError }"
                type="text"
                placeholder="06..."
              />
              <p v-show="phoneErrorMessage" class="error">{{ phoneErrorMessage }}</p>
            </div>

            <div class="form-input">
              <label for="message">Votre message</label>
              <textarea
                id="message"
                v-model="formValue.message"
                :class="{ 'input-error': messageError || messageLenghtError }"
                placeholder="Bonjour Marie ! J'ai besoin d'un outil numérique pour..."
              ></textarea>
            </div>
            <p v-show="error" class="error">{{ error }}</p>

            <button type="submit" :disabled="disabled || isLoading || error !== ''" class="submit">
              <span v-if="!isLoading">Envoyer</span>
              <span v-else class="loader"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.container {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  background-color: $black-dark;
  overflow-y: hidden;
  .content {
    max-width: 1300px;
    @media (max-width: 1024px) {
      margin: 0 20px;
    }
  }
}

.form-content {
  display: flex;
  flex-direction: row-reverse;
  gap: 40px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .informations {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      color: $white-soft;
    }

    .bubble {
      position: relative;
      background: #000000;
      padding: 10px 20px;
      border-radius: 15px;
      width: fit-content;
      max-width: 100%;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      margin-top: 10px;

      &::before {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 40%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 2px 0 20px;
        border-color: #000000 transparent transparent transparent;
      }
    }

    .owlImage {
      width: 80%;
    }
  }
}
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      margin: 10px 0 0 0;
    }

    .error {
      color: red;
    }

    .name {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .form-input {
      width: 100%;
      display: flex;
      flex-direction: column;
      .input-error {
        border: 1px solid red;
      }
      label {
        margin-top: 20px;
      }
    }

    input {
      height: 40px;
      border-radius: 5px;
      background-color: #494b56;
      color: $grey-soft;
      border: 1px solid #3c3c3c;
      box-shadow: 0px 5px 5px #25262b;
      &::placeholder {
        opacity: 0.5;
        color: $grey-soft;
      }
    }

    textarea {
      height: 150px;
      border-radius: 5px;
      background-color: #494b56;
      color: $grey-soft;
      box-shadow: 0px 5px 5px #25262b;
      border: 1px solid #3c3c3c;
      &::placeholder {
        opacity: 0.5;
        color: $grey-soft;
      }
    }

    .submit {
      background-color: $green;
      color: $black;
      height: 50px;
      padding: 12px;
      border-radius: 5px;
      border: 0;
      width: 30%;
      margin-top: 20px;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 100%;
      }

      &:hover {
        color: $white-soft;
        transition: color 0.2s ease-in-out;
      }

      &:disabled {
        background-color: $grey-soft;
        &:hover {
          color: $black;
          cursor: not-allowed;
        }
      }

      .loader {
        width: 20px;
        height: 20px;
        border: 3px solid #fff;
        border-radius: 50%;
        border-top: 3px solid #3498db;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-left: 10px;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
