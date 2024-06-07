const jsdom = require("jsdom");
const fetch = require("node-fetch");
const { JSDOM } = jsdom;


async function listStories() {
  const url = "https://metruyen.net.vn/";
  const response = await fetch(url);
  const htmlData = await response.text();
  const dom = new JSDOM(htmlData);
  const document = dom.window.document;
  const stories = [];
  document.querySelectorAll(".page-item-detail.text").forEach(function (p) {
    const img = p.querySelector("img").dataset.src;

    const tagTitle = p.querySelector(".item-summary .h5  a")
    const title = tagTitle.text
    const slug = tagTitle.href.split("/").at(-1)

    stories.push({ img, title, slug });
  });
  return stories;
}

async function getStory(storySlug) {
  const url = `https://metruyen.net.vn/truyen/${storySlug}`;
  const response = await fetch(url);
  const data = response.text().replace(new RegExp('<script type=\'application/ld+json\'>.*?</script>'), '')
  const dom = new JSDOM(data);
  const document = dom.window.document;
  const coverImage = document.querySelector('.summary_image img').dataset.src;
  const title = document.querySelector('h1').innerHTML.trim();
  const author = document.querySelector('.author - content a').innerHTML;
  const category = Array.from(document.querySelectorAll('.genres a')).map(tag => tag.innerHTML) ?? 'Đang cập nhật';
  const descriptions = Array.from(document.querySelectorAll('.summary_content.more p')).map(tag => tag.innerHTML)
  const isFull = document.querySelector('.full').innerHTML.toLowerCase() == 'full';
  const slug = document.querySelector('.summary_image a').href.split(' / ').at(-1);
  const maxChapterSource = document.querySelector('.chapter - count').innerHTML;
  const maxChapter = maxChapterSource.substring(1, maxChapterSource.length - 1);
  return { coverImage, title, author, category, descriptions, isFull, slug, maxChapter };
}


async function categoryList() {
  const url = 'https://metruyen.net.vn/';
  const response = await fetch(url);
  const htmlData = await response.text();

  const regex = /<div class='row genres'>.+?<ul class='list-unstyled'>(.+?)<\/ul>.+?<\/div>/s;

  const match = htmlData.match(regex);

  const dom = new JSDOM(match[1]);
  const document = dom.window.document;

  return Array.from(document.querySelectorAll('a')).map(row => {
    return { name: row.innerHTML.trim(), slug: row.href.split('/').at(-1) }
  });
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
      img: inner.querySelector('img').dataset.src,
      title: inner.querySelector('h3 a').innerHTML,
      slug: inner.querySelector('h3 a').href.split('/').at(-1),
      isFull: document.querySelector('.manga-title-badges.custom.full').innerHTML === 'Full'
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

  const stories = [];
  const entry = document.querySelectorAll('.row.c-tabs-item__content');

  entry.forEach(inner => {
    stories.push({
      title: inner.querySelector('h3 a').innerHTML,
      slug: inner.querySelector('h3 a').href.split('/').at(-1),
      banner: inner.querySelector('img').dataset.src,
      author: inner.querySelector('.mg_author .summary-content a').innerHTML,
      isFull: inner.querySelector('.mg_status .summary-content').innerHTML.trim() === 'Hoàn Thành',
      genres: Array.from(inner.querySelectorAll('.mg_genres .summary-content a')).map(tag => tag.innerHTML)
    });
  });

  return stories;
}
