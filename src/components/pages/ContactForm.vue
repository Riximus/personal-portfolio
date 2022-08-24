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
      <Form @submit="submit" :validation-schema="simpleSchema" class="contact-form-body">

        <div class="contact-form-body-field">
          <label for="name"> Your Name </label>
          <Field id="name" name="name"/>
          <ErrorMessage name="name"/>
        </div>

        <div class="contact-form-body-field">
          <label for="email"> Email Address </label>
          <Field id="email" name="email" type="email"/>
          <ErrorMessage name="email"/>
        </div>

        <div class="contact-form-body-field">
          <label for="subject"> Subject </label>
          <Field id="subject" name="subject"/>
          <ErrorMessage name="subject"/>
        </div>

        <div class="contact-form-body-field">
          <label for="message"> Your Message </label>
          <Field id="message" name="message" as="textarea" placeholder="Enter your message..."/>
          <ErrorMessage name="message"/>
        </div>

        <button id="submit-button">Submit</button>
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
      simpleSchema
    }
  },
  methods: {
    submit() {
      event.preventDefault()
      console.log('Form sent')
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

</style>