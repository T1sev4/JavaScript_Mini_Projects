const data = [
  {
    title: 'кросы',
    src: 'https://images.shafastatic.net/133058474',
    category: 'обувь',
  },
  {
    title: 'кеды',
    src: 'https://cdnkz.sportmaster.com/upload/mdm/media_content/resize/a18/610_416_90b0/72990010299.jpg',
    category: 'обувь',
  },
  {
    title: 'туфли',
    src: 'https://img.joomcdn.net/de0b6cef2a42d2cab9db6641426b3c26452ac793_original.jpeg',
    category: 'обувь',
  },
  {
    title: 'часы',
    src: 'https://images.satu.kz/59490212_w640_h640_detskie-chasy-smart.jpg',
    category: 'аксессуары',
  },
  {
    title: 'ожерелье',
    src: 'https://img.ltwebstatic.com/images3_pi/2020/08/11/1597128597c1c3707ed95e74af319b6fdffe107fb4_thumbnail_600x.webp',
    category: 'аксессуары',
  },
  {
    title: 'рюкзак',
    src: 'https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/d/s/ryukzak_s_poloskami_413012_sm.jpg',
    category: 'сумки',
  },
];

let topContent = document.querySelector('.top-content');
let items = document.querySelector('.items');
let categories = [];
let output = ``;
for (let i = 0; i < data.length; i++) {
  categories.push(data[i].category);
  output += `

  <div class="item">
    <img src="${data[i].src}" alt="" />
    <div class="portfolio__bg">
        <div class="portfolio__text">
        <p>${data[i].category}</p>
        <h2>${data[i].title}</h2>
        </div>
    </div>
  </div>
    `;
}
items.innerHTML = output;
categories = [...new Set(categories)];
let categ = `<button class="category-btn active-btn" onclick = "filterPost('all')">все</button>`;
for (let i = 0; i < categories.length; i++) {
  categ += `
        <button class="category-btn" onclick = "filterPost('${categories[i]}')"> ${categories[i]}</button>
    `;
}
topContent.innerHTML = categ;

function filterPost(category) {
  output = ``;
  for (let i = 0; i < data.length; i++) {
    if (category == data[i].category) {
      output += `
			<div class="item">
			<img src="${data[i].src}" alt="" />
			<div class="portfolio__bg">
					<div class="portfolio__text">
					<p>${data[i].category}</p>
					<h2>${data[i].title}</h2>
					</div>
			</div>
		</div>
            `;
    }
    if (category == 'all') {
      output += `
			<div class="item">
			<img src="${data[i].src}" alt="" />
			<div class="portfolio__bg">
					<div class="portfolio__text">
					<p>${data[i].category}</p>
					<h2>${data[i].title}</h2>
					</div>
			</div>
		</div>
            `;
    }
  }
  items.innerHTML = output;
}

let buttons = document.querySelectorAll('.category-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    changeActiveBtn(i);
  });
}

function changeActiveBtn(index) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == index) {
      buttons[i].classList.add('active-btn');
    } else {
      buttons[i].classList.remove('active-btn');
    }
  }
}
