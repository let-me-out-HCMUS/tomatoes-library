const jsdom = require("jsdom");
const fetch = require("node-fetch");
const {JSDOM} = jsdom;


async function listStories() {
    const url = "https://metruyen.net.vn/";
    const response = await fetch(url);
    const htmlData = await response.text();
    const dom = new JSDOM(htmlData);
    const document = dom.window.document;
    return Array.from(document.querySelectorAll(".page-item-detail.text")).map(function (p) {
        const tagTitle = p.querySelector(".item-summary .h5  a")
        return {
            coverImage: p.querySelector("img").dataset.src,
            name: tagTitle.text,
            slug: tagTitle.href.split("/").at(-1),
            author: "Đang cập nhật"
        }
    })
}

// listStories().then(data => console.log(data))

async function getStory(storySlug) {
    const url = `https://metruyen.net.vn/truyen/${storySlug}`;
    const response = await fetch(url);
    const data = await response.text();
    const parsed = data.replace(new RegExp('<script type=\'application/ld+json\'>.*?</script>'), '');
    const dom = new JSDOM(parsed);
    const document = dom.window.document;
    const coverImage = document.querySelector('.summary_image img').dataset.src;
    const name = document.querySelector('h1').innerHTML.trim();
    const author = document.querySelector('.author-content a').innerHTML;
    const category = Array.from(document.querySelectorAll('.genres a')).map(tag => tag.innerHTML).join(', ') ?? 'Đang cập nhật';
    const description = Array.from(document.querySelectorAll('.summary_content.more p')).map(tag => tag.innerHTML).join(', ');
    const isFull = document.querySelector('.full').innerHTML.toLowerCase() === 'full';
    const slug = document.querySelector('.summary_image a').href.split('/').at(-1);
    const maxChapterSource = document.querySelector('.chapter-count').innerHTML;
    const totalChapter = parseInt(maxChapterSource.substring(1, maxChapterSource.length - 1));
    return {coverImage, name, author, category, description: description ? description : 'Đang câp nhật', isFull, slug, totalChapter};
}

// getStory("ve-phia-mat-troi").then(data => console.log(data))

async function categoryList() {
    const url = 'https://metruyen.net.vn/';
    const response = await fetch(url);
    const htmlData = await response.text();
    const regex = /<div class='row genres'>.+?<ul class='list-unstyled'>(.+?)<\/ul>.+?<\/div>/s;
    const dom = new JSDOM(htmlData.match(regex)[1]);
    const document = dom.window.document;
    return Array.from(document.querySelectorAll('a')).map(row => ({name: row.innerHTML.trim(), slug: row.href.split('/').at(-1)}));
}

// categoryList().then(data => console.log(data))

async function categoryListDetail(categorySlug) {
    const url = `https://metruyen.net.vn/the-loai/${categorySlug}`;
    const response = await fetch(url);
    const htmlData = await response.text();

    const dom = new JSDOM(htmlData);
    const document = dom.window.document;

    const stories = [];
    const tag = document.querySelectorAll('.page-item-detail.text');
    tag.forEach(inner => {
        stories.push({
            coverImage: inner.querySelector('img').dataset.src,
            name: inner.querySelector('h3 a').innerHTML,
            slug: inner.querySelector('h3 a').href.split('/').at(-1),
            isFull: document.querySelector('.manga-name-badges.custom.full').innerHTML === 'Full'
        })
    });

    return stories;
}

// categoryListDetail("kinh-di").then(data => console.log(data))

async function search(searchString) {
    const url = `https://metruyen.net.vn/?s=${searchString.replace(' ', '+')}&post_type=wp-manga`;
    const response = await fetch(url);
    const htmlData = await response.text();

    const dom = new JSDOM(htmlData);
    const document = dom.window.document;

    return Array.from(document.querySelectorAll('.row.c-tabs-item__content')).map((inner) => ({
        name: inner.querySelector('h3 a').innerHTML,
        slug: inner.querySelector('h3 a').href.split('/').at(-1),
        banner: inner.querySelector('img').dataset.src,
        author: inner.querySelector('.mg_author .summary-content a').innerHTML,
        isFull: inner.querySelector('.mg_status .summary-content').innerHTML.trim() === 'Hoàn Thành',
        genres: Array.from(inner.querySelectorAll('.mg_genres .summary-content a')).map(tag => tag.innerHTML)
    }))
}

// search("về phía").then(data => console.log(data))


async function getContent(storySlug, chapter) {
    const url = `https://metruyen.net.vn/truyen/${storySlug}/chuong-${chapter}`;
    const response = await fetch(url);
    const htmlData = await response.text();
    const dom = new JSDOM(htmlData);
    const document = dom.window.document;
    return Array.from(document.querySelector('.text-left').querySelectorAll('p')).map(p => p.textContent).join('\n')
}

// getContent("ve-phia-mat-troi", 1).then(data => console.log(data))

async function hehe() {
    let url = `https://truyen.tangthuvien.vn/tong-hop`;
    let response = await fetch(url);
    const htmlData = await response.text();
    const dom = new JSDOM(htmlData);
    const document = dom.window.document;
    let stories = Array.from(document.querySelector('.book-img-text').querySelectorAll('li')).map(li => {
        const a = li.querySelectorAll('a');
        return {coverImage: a[0].querySelector('img').src, name: a[1].innerHTML, author: a[2].innerHTML, slug: document.querySelector('.book-img-box a').href.split('/').at(-1)};
    });
    return stories;
}
