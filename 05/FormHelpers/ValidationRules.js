export default class ValidationRules {
  firstName = {
      type: 'Name',
      options: { min: 2 },
      errMsg: 'Wpisz prawidłowe imię'
  };

  lastName = {
      type: 'Name',
      options: { min: 2 },
      errMsg: 'Wpisz prawidłowe nazwisko'
  };

  email = {
      type: 'Email',
      errMsg: 'Wpisz prawidłowy adres e-mail',
  };

  phone= {
      type: 'Phone',
      options: { min: 2 },
      errMsg: 'Wpisz prawidłowy numer telefonu'
  };

  title= {
      type: 'Title',
      options: { min: 3 },
      errMsg: 'Tytuł musi zawierać minimum 3 znaki'
  };

  message= {
      type: 'Message',
      options: { min: 30 },
      errMsg: 'Wiadomość musi zawierać minimum 30 znaków'
  };

}