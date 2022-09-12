<template>
  <PopupModal id="form-modal" :class-name="`${modalColorClass}`">
    <template #header>
      <h3 class="contact-form-title">Contact Form</h3>
    </template>
    <!--
    Name, Email, Subject, Message
    -->

    <!-- Contact Form Body -->
    <div :class="`contact-form ${modalColorClass}`">
      <!--@submit="onSubmit"-->
      <Form
          method="POST"
          :action="`https://formsubmit.co/${this.email_string}`"
          :validation-schema="simpleSchema"
          class="contact-form-body"
          id="form-body">
        <input type="hidden" name="_subject" :value="`rixi.dev: ${subjectValue}`"/>

        <div class="contact-form-body-field">
          <label for="name"> Your Name </label>
          <Field id="name" name="name" v-model.lazy="nameValue"/>
          <ErrorMessage name="name"/>
        </div>

        <div class="contact-form-body-field">
          <label for="email"> Email Address </label>
          <Field id="email" name="email" type="email" v-model.lazy="emailValue"/>
          <ErrorMessage name="email"/>
        </div>

        <div class="contact-form-body-field">
          <label for="subject"> Subject </label>
          <Field id="subject" name="subject" v-model.lazy="subjectValue"/>
          <ErrorMessage name="subject"/>
        </div>

        <div class="contact-form-body-field">
          <label for="message"> Your Message </label>
          <Field id="message" name="message" as="textarea" placeholder="Enter your message..."
                 v-model.lazy="messageValue"/>
          <ErrorMessage name="message"/>
        </div>
        <!-- Submit Button -->
        <button type="submit" id="submit-button" @click="submit">
          <span v-if="isSubmitting">The form is sending</span>
          <span v-else>Submit</span>
        </button>
      </Form>
    </div>
    <!-- Contact Form Body END -->

  </PopupModal>
</template>

<script>
import PopupModal from "@/components/ui/PopupModal";
import {markRaw} from "vue";
import {Form, Field, ErrorMessage} from 'vee-validate'
import {string, object} from 'yup'

export default {
  name: "ContactForm",
  components: {
    PopupModal,
    Form,
    Field,
    ErrorMessage
  },
  props: {
    modalColorClass: String
  },
  data() {
    const simpleSchema = markRaw(object({
      name: string().required().label('Name'),
      email: string().required().email().label('Email'),
      subject: string().required().label('Subject'),
      message: string().required().label('Message')
    }))
    return {
      simpleSchema,
      email_string: process.env.VUE_APP_FORMSUBMIT_EMAIL_STRING,
      captcha_site_key: process.env.VUE_APP_CAPTCHA_SITE_KEY,
      nameValue: '',
      emailValue: '',
      subjectValue: '',
      messageValue: '',
      isSubmitting: false
    }
  },
  methods: {
    submit() {
      this.simpleSchema
          .isValid({
            name: this.nameValue,
            email: this.emailValue,
            subject: this.subjectValue,
            message: this.messageValue,
            _subject: 'rixi.dev: ' + this.subjectValue
          })
          .then(function (valid) {
            console.log(valid)
            this.isSubmitting = valid
          })
          .catch(function (e) {
            console.log(e)
            console.log("hello error")
          })

      /*
      fetch("https://formsubmit.co/ajax/" + this.email_string, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.nameValue,
          email: this.emailValue,
          subject: this.subjectValue,
          message: this.messageValue,
          _subject: 'rixi.dev: ' + this.subjectValue
        })
      })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      //:action="`https://formsubmit.co/${email_string}`"*/
    }
  }
}
</script>

<style scoped lang="sass">
@use "src/assets/styles/index"

.contact-form-title
  color: index.$black

.contact-form
  width: 25em

.contact-form-body
  display: flex
  flex-direction: column
  text-align: center

  &-field
    display: flex
    flex-direction: column
    margin: 0.5em 0 0 0

    & > label
      color: index.$black
      margin-bottom: 0.2em

      &:after
        content: '*'
        color: red

    & > input
      height: 2em
      border-radius: 20px
      text-align: center
      border: 1px index.$black solid

      &:focus
        outline: 3px index.$black solid

    // Error Message
    & > span
      display: inline-block
      text-align: center
      margin-top: 0.3em
      height: 1em
      padding: 0.5em
      border-radius: 20px
      color: index.$black
      background-color: index.$danger

#message
  resize: none
  height: 15em
  border-radius: 20px
  padding: 1em
  background-color: index.$white
  border: 1px index.$black solid

  &:focus
    outline: 3px index.$black solid

#submit-button
  height: 2em
  margin: 0.5em 0
  border-radius: 20px
  cursor: pointer
  background-color: index.$black
  color: index.$white

.about-view-modal #submit-button:hover
  background-color: index.$green
  color: index.$black

.projects-view-modal #submit-button:hover
  background-color: index.$purple
  color: index.$black

@media screen and (max-width: index.$tablet-screen)
  input
    margin-left: 3em
    margin-right: 3em

  #message
    margin-left: 3em
    margin-right: 3em

  #submit-button
    margin-left: 3em
    margin-right: 3em

  span
    margin-left: 3em
    margin-right: 3em

@media screen and (max-height: index.$smaller-screen-height)
  .contact-form-body-field
    > input
      height: 1.7em

    > span
      padding: 0.2em

  #message
    height: 10em

@media screen and (max-height: index.$smaller-screen-height)
  .contact-form-title
    font-size: index.$s-font

  .contact-form-body-field
    > input
      height: 1.4em

      &:focus
        outline: 1px index.$black solid

    > span
      padding: 0.2em

  #message
    height: 10em

    &:focus
      outline: 1px index.$black solid

  #submit-button
    height: 1.5em

  #form-modal
    padding: 0.2em 1em
</style>