const colMain = document.querySelector('.col-main');
const main = document.querySelector('.main');

function createProduct(id, imgUrl, Name, inStock, price, reviews) {
    const item = create('div');
    item.className = 'items';
    item.setAttribute('item-id', id);

    const like = create('img');
    like.className = 'like';
    like.src = 'img/icons/like_empty.svg';
    like.alt = 'like';

    const productImg = create('img');
    productImg.className = 'product_img';
    productImg.src = `img/${imgUrl}`;

    const productName = create('div');
    productName.className = 'product_name';
    productName.innerText = Name

    const remainder = create('div');
    remainder.className = 'remainder';

    const check = create('img');
    check.className = 'check';
    if (inStock <= 0) {
        check.src = 'img/icons/close.svg';
    } else {
        check.src = 'img/icons/check.svg';
    }

    const left = create('span');
    left.className = 'left';
    left.innerText = `${inStock} left in strock`

    const productprice = create('div');
    productprice.className = "price";
    productprice.innerText = `Price:${price} $`

    const btn = create('button');
    btn.className = 'btn';
    btn.innerText = 'Add to cart';
    if (inStock <= 0) {
        btn.classList.add('inactive');
    }

    const productReviews = create('div');
    productReviews.className = 'reviews';

    const reviewsLike = create('img');
    reviewsLike.className = 'reviews__like'
    reviewsLike.src = 'img/icons/like_filled.svg';

    const reviewsHolder = create('div');
    reviewsHolder.className = 'reviews_holder';

    const reviewsSum = create('div');
    reviewsSum.className = 'reviews__sum';
    reviewsSum.innerText = ``

    const span = create('span');
    span.innerText = reviews;

    const reviewsGrade = create('div');
    reviewsGrade.className = 'reviews__grade';
    reviewsGrade.innerText = '% Positive reviews';

    const reviewsPositiv = create('div');
    reviewsPositiv.className = 'reviews__grade';
    reviewsPositiv.innerText = 'Above avarage';

    const order = create('div')
    order.className = 'order';

    const orderSum = create('div');
    orderSum.className = 'order__sum';
    orderSum.innerText = '';

    const orderSpan = create('span');
    orderSpan.innerText = 'orders'

    colMain.append(item);
    item.append(like, productImg, productName, remainder, productprice, btn, productReviews)
    remainder.append(check, left)
    productReviews.append(reviewsLike, reviewsHolder, order)
    reviewsHolder.append(reviewsGrade, reviewsPositiv)
    order.append(orderSum, reviewsSum)
    orderSum.append(orderSpan)
    reviewsGrade.append(span);
}

for (const el of items) {   
    createProduct(el.id, el.imgUrl, el.name, el.orderInfo.inStock, el.price, el.orderInfo.reviews)
}

const filterTitle = document.getElementsByClassName('filter-title')

Array.from(filterTitle, el => el.addEventListener('click', function () {
    console.log(el)
    this.querySelector('.filter-icon').classList.toggle('filter-icon-active')
    this.nextElementSibling.classList.toggle('active')
    this.parentNode.classList.toggle('filter-card-active')
}))

const backgroundModal = document.querySelector('.backgroundModal')
const item = document.getElementsByClassName('items')
Array.from(item, el => el.addEventListener('click', function () {
    const id = this.getAttribute('item-id');
    for (const i of items) {
        if (i.id == id) {
            createModal(i.imgUrl, i.name, i.orderInfo.reviews, i.color, i.os, i.size.height, i.size.weight, i.size.depth, i.size.weight, i.chip.name, i.orderInfo.inStock, i.price)
        }
    }
    console.log(backgroundModal)
    backgroundModal.classList.add('open')
}))
backgroundModal.addEventListener('click', function () {
    backgroundModal.classList.remove('open')
})

function createModal(imgUrl, name, reviews, color, operating, height, width, depth, weight, chip, left, price) {
    const picture = document.getElementsByClassName('modal__img-picture')
    picture[0].src = `img/${imgUrl}`
    const productName = document.getElementsByClassName('modal__name')
    productName[0].innerText = name
    const positiveReviews = document.getElementsByClassName('positive')
    positiveReviews[0].innerText = reviews
    document.getElementById('color').innerText = color.join(', ')
    document.getElementById('operating').innerText = operating
    document.getElementById('height').innerText = height
    document.getElementById('width').innerText = width
    document.getElementById('depth').innerText = depth
    document.getElementById('weight').innerText = weight
    document.getElementById('chip').innerText = chip
    document.getElementById('left').innerText = left
    const modalPrice = document.getElementsByClassName('modal__price')
    modalPrice[0].innerText = `$ ${price}`
}

function create(name) {
    return document.createElement(name)
}