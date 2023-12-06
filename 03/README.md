> :star: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e04-react-modern` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._
>
> &nbsp;

# `#03` React: Nowoczesny

Tym razem w pliku `./context.js` znajdziesz dwa konteksty. Jeden dotyczy tekstu, drugi koloru.

Obie wartości masz wykorzystać w komponencie `<Div>`: pierwszą jako tytuł w `<h1>`, drugą – jako kolor obramowania dla `<div>`.

Zadanie wykonaj w taki sposób, aby:

-   `<Div>` będący dzieckiem `<Box>` otrzymał wartości domyślne
-   `<Div>`, który jest rodzeństwem `<Box>`, otrzymał przez `TextContext` wartość `sibling`.

Efekt końcowy:

```
<section>
    <div style="border: 1px solid red"><h1>nested</h1> ... </div> // wyrenderowany przez <Box />
    <div style="border: 1px solid red"><h1>sibling</h1> ...</div> // wyrenderowany przez <Div />
</section>
```

&nbsp;

> :arrow_left: [_poprzednie zadanie_](./../02) | [_następne zadanie_](./../04) :arrow_right:
