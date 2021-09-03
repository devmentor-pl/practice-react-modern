> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e04-react-modern` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*
> 
&nbsp;

# `#01` React: Nowoczesny


Pierwszym Twoim zadaniem będzie konfiguracja [ESLint](https://eslint.org/)a oraz [Prettier](https://prettier.io/)a tak, aby ze soba współpracowały.

Konfiguracja powinna być wykonana w taki sposób, aby każdy z potencjalnych członków Twojego zespołu pisał kod zgodnie z ustalonymi regułami oraz był on w ten sam sposób formatowany.

To oznacza, że musisz stworzyć odpowiednie pliki konfiguracyjne w katalogu głównym, które będą wykorzystywane przez członków zespołu (konfiguracja tylko IDE się nie sprawdza, bo każdy może posiadać inną).

Twoja konfguracja ma mieć określone zasady:

- kod pisany zgodnie z regułami AirBnB ([JavaScript](https://github.com/airbnb/javascript), [React](https://airbnb.io/javascript/react/))
- pliki JS mogą zawierać kod JSX
- liczba spacji w odstępach to 4
- maksymalna długość wiersza to 100 znaków
- znak używany do oznaczania ciągu znaków to [apostrof](https://pl.wikipedia.org/wiki/Apostrof)

Dodatkowo skonfiguruj swój IDE w taki sposób, aby podczas pisania kodu były podkreślane od razu błędy związane z odpowiednią strukturą kodu (w [VS Code](https://code.visualstudio.com/) rozwiązuje to rozszerzenie o nazwie `ESLint`).

Równocześnie przy zapisie pliku, wszystkie możliwe błędy były korygowane przez ESLint-a, a przez Prettier-a (w [VS Code](https://code.visualstudio.com/) to rozszerzenie o nazwie `Prettier - Code formater`) odpowiednio formatowane.

Pamiętaj, aby dodać do konfiguracji webpack-a [odpowiedni loader](https://github.com/webpack-contrib/eslint-loader), który będzie uruchamiał ESLint-a przy każdej zmianie pliku o rozszerzeniu `.js`.

W przedstawionym rozwiązaniu korzystamy z inicjalizatora właściwości, dzięki któremu definujemy `state` poza konstruktorem dlatego musisz jeszcze użyć [babel-eslint](https://github.com/babel/babel-eslint) jako parsera z odpowiednią konfiguracją.

Jak już to wszystko zrobisz i uruchomisz kod to postaraj się naprawić błędy zgodnie z informacją z terminala.

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) znajdziesz gotową konfigurację Webpacka dla React. Znajduje się tam zmienna `taskNumber`, która przechowuje informacje o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej i ponownie uruchamiać tryb developerski. Pamiętasz jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, że musimy mieć pobrane paczki z npm, które będziemy wykorzystywać podczas pracy z React. Wiesz jak je zainstalować?

&nbsp;

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
