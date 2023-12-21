> :star: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e04-react-modern` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._
>
> &nbsp;

# `#04` React: Nowoczesny

Twoim zdaniem jest napisanie komponentu `<SpeedTest />`, który będzie obliczać szybkość pisania na klawiaturze.

Ma to działać w następujący sposób:

-   pokazujemy użytkownikowi wyraz, który ma zostać wpisany do pola formularza
-   zliczanie czasu rozpoczynamy w momencie, w którym użytkownik ustawia kursor w inpucie
-   jeśli wyraz został wpisany poprawnie, to:
    -   zapisujemy jego długość
    -   wyświetlamy kolejny wyraz (pamiętajmy o wyczyszczeniu pola `<input />`).

`<SpeedTest />` ma być komponentem funkcyjnym, więc musisz użyć hooków do utworzenia logiki działania.

Zacznij od zapoznania się z plikiem `./hook.js` – jest tam customowy hook, które pozwoli Ci losować ciągi znaków spośród tych podanych przez parametr w formie tablicy, np.

```
const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
```

Pierwszy element zwróconej tablicy (`[state,  randomItem]`) to zmienna, która przechowuje wylosowany wyraz. Drugi to funkcja, którą wywołasz, aby wylosować wyraz z przekazanej przez parametr tablicy z ciągami znaków.

Zauważ, że w przypadku destrukturyzacji tablic możemy nadawać zmiennym własne nazwy, ponieważ liczy się tu kolejność elementów, a nie nazwa (jak w przypadku nazwy klucza w obiektach). W tym rozwiązaniu zdecydowałem się więc na `[word, regenerateWord]`.

W stanie (`useState()`) będziemy musieli przechowywać co najmniej kilka elementów:

-   tekst wpisywany w `<input />`
-   odliczany czas
-   łączną liczbę znaków wszystkich poprawnie wpisanych słów.

Odliczanie czasu uruchomimy w momencie, w którym pole `<input />` zostanie aktywowane i zatrzymamy, kiedy przestanie być aktywne. Oznacza to, że `setInterval()` powinien być uruchamiany w momencie wydarzenia `onFocus`, a czyszczony na `onBlur`. Aby przechowywać identyfikator interwału, użyj referencji, tj. `useRef()`.

W momencie zamontowania komponentu (`useEffect()`), wygeneruj pierwsze słowo. Za każdym razem, gdy do pola `<input />` zostanie wprowadzony jakiś tekst, sprawdzaj, czy jest on równy wylosowanemu wyrazowi (`useEffect(() => {...}, [text])`).

Jeśli chodzi o pozostałe funkcjonalności i sposób interakcji z użytkownikiem – masz dowolność. Możesz np. zdecydować o wyświetlaniu wyniku danej rundy, sposobie resetowania „rozgrywki” lub umożliwić użytkownikowi wprowadzanie czasu rundy czy ilości słów, które się wyświetlą.

### Uwaga: ESLint – exhaustive-deps

W tym zadaniu możesz napotkać problem ze strony ESLinta: `exhaustive-deps`. Nie musisz się w tej chwili nim przehmować. O tym, skąd biorą się błędy związane z tą regułą i jak sobie z nimi radzić przeczytasz w artykule [„Understanding the exhaustive-deps Eslint rule in React”](https://bobbyhadz.com/blog/react-hooks-exhaustive-deps).

&nbsp;

> :arrow_left: [_poprzednie zadanie_](./../03) | [_następne zadanie_](./../05) :arrow_right:
