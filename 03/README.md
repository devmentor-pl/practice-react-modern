# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React modern #03

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Tym razem znajdziesz w pliku `./context.js` utworzone dwa konteksty. Jeden dotyczy tekstu, drugi koloru.

Obie wartości masz wykorzystać w komponencie `<Div>` jako tytułu dla `<h1>` oraz kolor obramowania dla `<div>`.

Jednak musisz zrobić to w taki sposób, aby wartości domyślne były zaczytane przy zagnieżdzonym elemencie w `<Box>`. Natomiast dla komponentu `<Div>`, który jest renderowany przy `<Box>` (jako rodzeństwo) została nastawiona treść dla `TextContext` na `sibling`.

Efekt końcowy:
```
<section>
    <Box /> // => <div style="border: 1px solid red"><h1>nested</h1> ... </div>
    <Div /> // => <div style="border: 1px solid red"><h1>sibling</h1> ...</div>
</section>
```

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie :books: [devmentor.pl](https://devmentor.pl)
