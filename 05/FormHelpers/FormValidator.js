/* eslint-disable no-console */
/* eslint-disable no-debugger */
import RegExpSet from './RegExpSet'

export default class FormValidator {
  regExpSet = new RegExpSet();

  isName = (name, options) => {
      return name.length >= options.min
  }

  isEmail = (email) => {
      return this.regExpSet.expEmail.test(email)
  }

  isPhone = (phone) => {
      return this.regExpSet.expPhone.test(phone)
  }

  isTitle = (title, options) => {
      return title.length >= options.min
  }

  isMessage = (message, options) => {
      return message.length >= options.min
  }
}