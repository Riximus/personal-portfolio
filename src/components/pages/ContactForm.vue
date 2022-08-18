<template>
  <PopupModal id="form-modal" :class-name="`${className}`">
    <template #header>
      <h3 class="contact-form-title">Contact Form</h3>
    </template>
    <!--
    Name, Email, Subject, Message
    -->

    <!-- Contact Form Body -->
    <div class="contact-form">
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
    className: String
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

    & > input
      background-color: index.$white
      height: 2em

#submit-button
  height: 2em
  margin: 0.5em 0
  background-color: index.$black
  color: index.$white

#message
  resize: none
  height: 20em
  background-color: index.$white

</style>