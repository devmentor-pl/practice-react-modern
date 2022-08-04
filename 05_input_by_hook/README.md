> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e04-react-modern` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*
> 
&nbsp;

# `#05` React: Nowoczesny


W pliku `./ContactForm.js` stwórz formularz kontaktowy, który będzie można wykorzystać w wielu projektach. Komponent napisz przy pomocy funkcji. Pola formularza mają być kontrolowane przez `state`.

Formularz powinien mieć przynajmniej kilka pól:

- imię i nazwisko (wymagane)
- adres e-mail (wymagane)
- numer telefonu
- temat (wymagane)
- wiadomość (wymagane)

Każde z pól ma być walidowane, a użytkownik powinien zostać poinformowany o błędach.

Postaraj się użyć `useReduce()` do zarządzania polami formularza.

## Zadanie dodatkowe

Jeśli cały formularz został prawidłowo wypełniony, możesz wykorzystać [jedno z API](https://blog.mailtrap.io/javascript-send-email/) do wysłania wiadomości.
> **Uwaga!** Od jakiegoś czasu SmtpJS ma problemy i nie zawsze działa prawidłowo. Dlatego rekomenduję narzędzie EmailJS w darmowym planie.

Nie ufałbym jednak do końca tym rozwiązaniom, ponieważ przesyłamy tam hasło do swojej skrzynki. Do celów edukacyjnych proponuję utworzyć testowe konto pocztowe i spróbować je skonfigurować.

Wszelkie dane wrażliwe umieść w pliku `./account.js` i dodaj ten plik do `.gitignore`. Dzięki temu nie zostanie on przesłany do repozytorium, a Twoja skrzynka pocztowa – przechwycona.

&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
