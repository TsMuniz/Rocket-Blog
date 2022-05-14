import post_1 from './post_1.png';
import post_2 from './post_2.png';
import post_3 from './post_3.png';
import post_4 from './post_4.png';

const POST_DATE = 'janeiro 04, 2022';
const LARGE_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae ex doloribus beatae? Quisquam beatae consequuntur deserunt quos commodi corporis velit amet error nostrum adipisci reprehenderit ex, nesciunt magni voluptatem.';

const MEDIUM_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae ex doloribus beatae? Quisquam beatae consequuntur deserunt quos commodi.';

export const SMALL_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae ex doloribus beatae.';

const posts = [
    {image: post_1, date: POST_DATE, text: LARGE_TEXT, title: 'Começando no ReactJS em 2022'},
    {image: post_2, date: POST_DATE, text: MEDIUM_TEXT, title: '10 dicas para conseguir a vaga desejada'},
    {image: post_3, date: POST_DATE, text: MEDIUM_TEXT, title: 'Deixe Seu codigo mais semântico com essas dicas'},
    {image: post_4, date: POST_DATE, text: MEDIUM_TEXT, title: 'Use essas dicas nas suas aplicações mobile'},
    {date: POST_DATE, text: MEDIUM_TEXT, title: 'Conheça as principais técnicas para conseguir uma va internacional ba programação'},
    {date: POST_DATE, text: SMALL_TEXT, title: 'Veja a evolução do Front-end na prática'}

]

export default posts;