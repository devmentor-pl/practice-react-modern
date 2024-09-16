export const welshWordsWithMeanings = [
    {
        id: 1,
        name: 'Cwtch',
        meaning: 'A term of endearment or a cozy nook',
    },
    {
        id: 2,
        name: 'Hiraeth',
        meaning: 'A feeling of longing or nostalgia',
    },
    {
        id: 3,
        name: 'Pili-pala',
        meaning: 'Butterfly',
    },
    {
        id: 4,
        name: 'Lleuad',
        meaning: 'Moon',
    },
    {
        id: 5,
        name: 'Twt',
        meaning: 'Small or tiny',
    },
    {
        id: 6,
        name: 'Gwdihw',
        meaning: 'Owl',
    },
    {
        id: 7,
        name: 'Tylwyth',
        meaning: 'Fairy or supernatural being',
    },
    {
        id: 8,
        name: 'Eira',
        meaning: 'Snow',
    },
    {
        id: 9,
        name: 'Cacen',
        meaning: 'Cake',
    },
    {
        id: 10,
        name: 'Crai',
        meaning: 'Cliff',
    },
];

function getNamesFromObjects(objectsArray) {
    return objectsArray.map((obj) => obj.name);
}

export const welshWords = getNamesFromObjects(welshWordsWithMeanings);
