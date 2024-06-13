> :star: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e04-react-modern` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._
>
> &nbsp;

# `#01` React: Nowoczesny

Pierwszym Twoim zadaniem będzie konfiguracja [ESLinta](https://eslint.org/) oraz [Prettiera](https://prettier.io/) tak, aby ze sobą współpracowały.

Konfiguracja powinna umożliwiać potencjalnym członkom Twojego zespołu pisanie kodu zgodnie z ustalonymi regułami i automatyczne formatowanie go w ten sam sposób.

To oznacza, że musisz stworzyć odpowiednie pliki konfiguracyjne w katalogu głównym, które będą wykorzystywane przez członków zespołu (konfiguracja samego IDE się nie sprawdza, bo każdy może mieć inną).

Twoja konfiguracja ma mieć określone zasady:

-   kod jest pisany zgodnie z regułami AirBnB ([JavaScript](https://github.com/airbnb/javascript), [React](https://airbnb.io/javascript/react/))
-   pliki JS mogą zawierać kod JSX
-   liczba spacji w odstępach to 4
-   maksymalna długość wiersza to 100 znaków
-   znak używany do oznaczania ciągu znaków to [apostrof](https://pl.wikipedia.org/wiki/Apostrof).

Dodatkowo skonfiguruj swoje IDE w taki sposób, aby podczas pisania kodu od razu były podkreślane błędy związane z odpowiednią strukturą kodu (w VS Code rozwiązuje to [rozszerzenie ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)).

Natomiast przy zapisie pliku wszystkie możliwe błędy powinny być korygowane przez ESLinta, a kod odpowiednio formatowany przez Prettiera (w VS Code to [rozszerzenie Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)).

Pamiętaj, aby dodać do konfiguracji webpacka [odpowiedni plugin](https://webpack.js.org/plugins/eslint-webpack-plugin/), który będzie uruchamiał ESLinta przy każdej zmianie w pliku.

W przedstawionym rozwiązaniu korzystamy z inicjalizatora właściwości, dzięki któremu definiujemy `state` poza konstruktorem, dlatego jako parsera musisz jeszcze użyć [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) z odpowiednią konfiguracją.

Jak już to wszystko zrobisz i uruchomisz kod, postaraj się naprawić błędy zgodnie z informacją z terminala.

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) mieści się gotowa konfiguracja webpacka dla Reacta. Znajduje się tam zmienna `taskNumber` przechowująca informację o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej (np. `const  taskNumber  =  '01';`) i ponownie uruchamiać tryb developerski. Pamiętasz, jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, żeby pobrać paczki z npm, które będziemy wykorzystywać podczas pracy z Reactem. Wiesz, jak je zainstalować?

&nbsp;

> :arrow_left: ~~_poprzednie zadanie_~~ | [_następne zadanie_](./../02) :arrow_right:
