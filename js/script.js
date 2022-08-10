
function createProduct(imgUrl, Name, inStock, price, reviews) {
    const main = document.querySelector('.col-main');

    const item = document.createElement('div');
    item.className = 'items';

    const like = document.createElement('img');
    like.className = 'like';
    like.src = 'img/icons/like_empty.svg';
    like.alt = 'like';

    like.addEventListener('click', function(){
        this.src = 'img/icons/like_filled.svg';
    })

    const productImg = document.createElement('img');
    productImg.className = 'product_img';
    productImg.src = `img/${imgUrl}`;

    const productName = document.createElement('div');
    productName.className = 'product_name';
    productName.innerText = Name

    const remainder = document.createElement('div');
    remainder.className = 'remainder';

    const check = document.createElement('img')
    check.className = 'check';
    if (inStock <= 0 ){
    check.src = 'img/icons/close.svg';
    }else {
        check.src = 'img/icons/check.svg';
    }

    const left = document.createElement('span');
    left.className = 'left';
    left.innerText = `${inStock} left in strock`

    const productprice = document.createElement('div');
    productprice.className = "price";
    productprice.innerText = `Price:${price} $`

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = 'Add to cart';
    if (inStock <= 0 ){
        btn.classList.add('inactive');
    }

    const productReviews = document.createElement('div');
    productReviews.className = 'reviews';

    const reviewsLike = document.createElement('img');
    reviewsLike.className = 'reviews__like'
    reviewsLike.src = 'img/icons/like_filled.svg';

    const reviewsHolder = document.createElement('div');
    reviewsHolder.className = 'reviews_holder';

    const reviewsSum = document.createElement('div');
    reviewsSum.className = 'reviews__sum';
    reviewsSum.innerText = ``

    const span = document.createElement('span');
    span.innerText = reviews;

    const reviewsGrade = document.createElement('div');
    reviewsGrade.className = 'reviews__grade';
    reviewsGrade.innerText = '% Positive reviews';

    const reviewsPositiv = document.createElement('div');
    reviewsPositiv.className = 'reviews__grade';
    reviewsPositiv.classList.add('reviews__bottom');
    reviewsPositiv.innerText = 'Above avarage';

    const order = document.createElement('div')
    order.className = 'order';

    const orderSum = document.createElement('div');
    orderSum.className = 'order__sum';
    orderSum.innerText = '';

    const orderSpan = document.createElement('span');
    orderSpan.innerText = 'orders'

    main.append(item);
    item.append(like, productImg, productName, remainder, productprice, btn, productReviews)
    remainder.append(check, left)
    productReviews.append(reviewsLike, reviewsHolder, order)
    reviewsHolder.append(reviewsGrade, reviewsPositiv)
    order.append(orderSum, reviewsSum)
    orderSum.append(orderSpan)
    reviewsGrade.append(span);
}

for (const el of items) {
    createProduct(el.imgUrl, el.name, el.orderInfo.inStock, el.price, el.orderInfo.reviews)
} 