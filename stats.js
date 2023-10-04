const songsArr = [
    {
        artist: 'Snatam Kaur',
        song: 'Guru Ram Das Lullaby',
    },
    {
        artist: 'The Mamas & The Papas',
        song: 'Strange Young Girls',
    },
    {
        song: 'Ashar',
        artist: 'Fairouz',
    },
    {
        song: 'Deep in the Heart of Uncertain Texas',
        artist: 'Rodney Crowell',
    },
    {
        song: 'Miss Sarajevo',
        artist: 'U2',
    },
    {
        song: 'Above and Beyond',
        artist: 'Buck Owens',
    },
    {
        song: 'Blueberry Rhyme',
        artist: 'James P. Johnson',
    },
    {
        song: 'Afro Blue - Live in Stockholm / 1963',
        artist: 'John Coltrane',
    },
    {
        song: 'Broken Harbors',
        artist: 'Stars of the Lid',
    },
    {
        song: '3',
        artist: 'Pita',
    },
    {
        song: 'Kemayoran',
        artist: 'Grup Bamba Puang',
    },
    {
        song: 'Country Feedback',
        artist: 'R.E.M.',
    },
    {
        song: 'Pauline',
        artist: 'Docteur Nico',
    },
    {
        song: 'Touch',
        artist: 'Divine Styler',
    },
    {
        song: "If You Think You're Lonely Now",
        artist: 'Bobby Womack',
    },
    {
        song: 'E-Bow the Letter',
        artist: 'R.E.M.',
    },
    {
        song: 'I Wish I Knew How It Would Feel to Be Free',
        artist: 'Nina Simone',
    },
    {
        song: 'Tha Spaso Koupes',
        artist: 'Marika Papagika',
    },
    {
        song: '22nd Century',
        artist: 'Nina Simone',
    },
    {
        song: 'Half a Person',
        artist: 'The Smiths',
    },
    {
        song: 'Jonathan David',
        artist: 'Belle and Sebastian',
    },
    {
        song: 'Journey in Satchidananda',
        artist: 'Alice Coltrane',
    },
    {
        song: 'Scatterbrain',
        artist: 'Radiohead',
    },
    {
        song: 'Angeles',
        artist: 'Elliott Smith',
    },
    {
        song: 'Midnight Wheels',
        artist: 'Jessica Pratt',
    },
    {
        song: 'Pressure Drop',
        artist: 'Toots & The Maytals',
    },
    {
        song: 'Shadow',
        artist: 'Thee Headcoatees',
    },
    {
        song: 'As',
        artist: 'Stevie Wonder',
    },
    {
        song: 'Beginnings (The First Minute of a New Day)',
        artist: 'Gil Scott-Heron',
    },
    {
        song: "Noah's Dove",
        artist: '10,000 Maniacs',
    },
    {
        song: 'Murder Most Foul',
        artist: 'Bob Dylan',
    },
    {
        song: 'Clarinet Concerto in A Major K 622 ii. Adagio',
        artist: 'Wolfgang Mozart',
    },
    {
        song: 'Dinner Bell',
        artist: 'They Might Be Giants',
    },
    {
        song: 'Half a Million Miles From Home',
        artist: 'Diane Cluck',
    },
    {
        song: 'Lion in Winter',
        artist: 'Hoyt Axton & Linda Ronstadt',
    },
    {
        song: 'My Elusive Dreams',
        artist: 'Tammy Wynette',
    },
    {
        song: 'Fire and Brimstone',
        artist: 'Link Wray',
    },
    {
        song: 'Improvisation Ajoutée',
        artist: 'Sonic Youth',
    },
    {
        song: 'Ghlana',
        artist: 'Noura Mint Seymali',
    },
    {
        song: '',
        artist: '',
    },
    {
        song: '',
        artist: '',
    },
]

const songNamesArr = [
    '2/15',
    '22nd Century',
    '3',
    'Above and Beyond',
    'Afro Blue - Live in Stockholm / 1963',
    'Angeles',
    'As',
    'Ashar',
    'Beginnings (The First Minute of a New Day)',
    'Blueberry Rhyme',
    'Broken Harbors',
    'Clarinet Concerto in A Major K 622 ii. Adagio',
    'Country Feedback',
    'Deep in the Heart of Uncertain Texas',
    'Dinner Bell',
    'E-Bow the Letter',
    'Fire and Brimstone',
    'Ghlana',
    'Guru Ram Das Lullaby',
    'Half a Million Miles From Home',
    'Half a Person',
    'I Wish I Knew How It Would Feel to Be Free',
    "If You Think You're Lonely Now",
    'Improvisation Ajoutée',
    'I Watched the Film The Song Remains The Same',
    'Jonathan David',
    'Journey in Satchidananda',
    'Kemayoran',
    'Lion in Winter',
    'Midnight Wheels',
    'Miss Sarajevo',
    'Murder Most Foul',
    'My Elusive Dreams',
    "Noah's Dove",
    'Pauline',
    'Pressure Drop',
    'Scatterbrain',
    'Shadow',
    'Strange Young Girls',
    'Tha Spaso Koupes',
    'Touch',
]

console.log(songsArr.map(file => file.song).sort())
