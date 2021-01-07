# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React modern #05

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Stwórz formularz kontaktowy w pliku `./ContactForm.js`, który będzie można wykorzystać w wielu projektach. Komponent ten ma być tworzony przy pomocy funkcji, a pola formularza mają być kontrolowane przez `state`.

Formularz powinien mieć przynajmniej kilka pól:

- Imię i nazwisko (wymagane)
- Edres email (wymagane)
- Numer telefonu
- Temat (wymagane)
- Wiadomość (wymagane)

Każde z pól powinno posiadać odpowiednią walidację, a użytkownik powinien zostać poinformowany o błędach.

Postaraj się użyć `useReducer()` do zarządzania polami formularza.

## Zadanie dodatkowe

Jeśli cały formularz został prawidłowo wypełniony to możesz wykorzystać jedno z API do wysłania wiadomości, które zostały opisane w [tym artykule](https://blog.mailtrap.io/javascript-send-email/).
> **Uwaga!** Od jakiegoś czasu SmtpJS ma problemy i nie zawsze działa prawidłowo. Dlatego rekomenduję narzędzie EmialJS w darmowym planie.

Nie ufałbym jednak do końca tym rozwiązaniom ponieważ przesyłamy tam hasło do naszej skrzynki. Do celów edukacyjnych proponuję utworzyć testowe konto pocztowe i próbować je skonfigurować.

Wszelkie dane wrażliwe umieść w pliku `./account.js`, który został dodany do pliku `.gitignore` dzięki czemu nie zostanie on przesłany do repozytoirum. To zapobiegnie przechwyceniu Twojej skrzynki pocztowej ;)

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie :books: [devmentor.pl](https://devmentor.pl)
