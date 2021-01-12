# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React modern #01

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Pierwszym Twoim zadaniem będzie konfiguracja [ESLint](https://eslint.org/)a oraz [Prettier](https://prettier.io/)a tak, aby ze soba współpracowały.

Konfiguracja powinna być wykonana w taki sposób, aby każdy z potencjalnych członków Twojego zespołu pisał kod zgodnie z ustalonymi regułami oraz był on w ten sam sposób formatowany.

To oznacza, że musisz stworzyć odpowiednie pliki konfiguracyjne w katalogu głównym, które będą wykorzystywane przez członków zespołu (konfiguracja tylko IDE się nie sprawdza, bo każdy może posiadać inną).

Twoja konfguracja ma mieć określone zasady:

- kod pisany zgodnie z regułami AirBnB ([JavaScript](https://github.com/airbnb/javascript), [React](https://airbnb.io/javascript/react/))
- pliki JS mogą zawierać kod JSX
- liczba spaci w odstępach to 4
- maksymalna długość wiersza to 100 znaków
- znak używany do oznaczania ciągu znaków to [apostrof](https://pl.wikipedia.org/wiki/Apostrof)

Dodatkowo skonfiguruj swój IDE w taki sposób, aby podczas pisania kodu od razu były podkreślane błędy związane z odpowiednią strukturą kodu (w [VS Code](https://code.visualstudio.com/) rozwiązuje to rozszerzenie o nazwie `ESLint`).

Niech wszystkie możliwe błędy są korygowane przez ESLinta, a odpowiednio formatowane przez Prettiera (w [VS Code](https://code.visualstudio.com/) to rozszerzenie o nazwie `Prettier - Code formater`).

Pamiętaj, aby dodać do konfiguracji webpack-a [odpowiedni loader](https://github.com/webpack-contrib/eslint-loader), który będzie uruchamiał ESLinta przy każdej zmianie pliku o rozszerzeniu `.js`.

W przedstawionym rozwiązaniu korzystamy z inicjalizatora właściwości, dzięki któremu definujemy `state` poza konstruktorem dlatego musisz jeszcze użyć [babel-eslint](https://github.com/babel/babel-eslint) jako parsera z odpowiednią konfiguracją.

Jak już to wszystko zrobisz i uruchomisz kod to postaraj sie naprawić błędy zgodnie z informacją z terminala.

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) znajdziesz gotową konfigurację Webpack-a dla React. Znajduje się tam zmienna `taskNumber`, która przechwowuje informacje o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej i ponownie uruchamiać tryb developerski. Pamiętasz jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, że musimy mieć pobrane paczki z npm, które będziemy wykorzystywać podczas pracy z React. Wiesz jak je zainstalować?

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie :books: [devmentor.pl](https://devmentor.pl)
