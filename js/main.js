let item = document.querySelector('div.items');


let counter = 0;
for (let i of items) {
    let div = document.createElement('div');
    div.classList.add('card');
    let span = document.createElement('span');
    span.classList.add('icon-like_empty');
    let img = document.createElement('img');
    img.classList.add('card-img');
    let h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.innerHTML = i.name;
    let stock = document.createElement('div');
    stock.classList.add('stock');
    let add = document.createElement('button');
    add.innerHTML = 'Add to cart'
    if (i.orderInfo.inStock == 0) {
        let cross = document.createElement('span');
        cross.classList.add('icon-close');
        let left = document.createElement('span');
        left.classList.add('left');
        left.innerHTML = ' ' + i.orderInfo.inStock + ' left in stock';
        stock.append(cross, left);
        add.classList.add('but_disabled');
    } else {
        let noCross = document.createElement('span');
        noCross.classList.add('icon-check');
        let left = document.createElement('span');
        left.classList.add('left');
        left.innerHTML = ' ' + i.orderInfo.inStock + ' left in stock';
        stock.append(noCross, left);
        add.classList.add('but_add');
    }
    let price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = 'Price: ' + i.price + ' $'
    img.setAttribute('src', i.imgUrl);


    let greyDiv = document.createElement('div');
    greyDiv.classList.add('grey');
    let firstDiv = document.createElement('div');
    firstDiv.classList.add('first');
    let secondDiv = document.createElement('div');
    secondDiv.classList.add('second');
    let icon_span = document.createElement('span');
    icon_span.classList.add('icon-like_filled');
    let divInDiv = document.createElement('div');
    divInDiv.classList.add('leftSide');
    let secondfirstDiv = document.createElement('div');
    secondfirstDiv.classList.add('firstSecond');
    let secondsecondDiv = document.createElement('div');
    secondsecondDiv.classList.add('secondSecond');
    secondfirstDiv.innerHTML = '1000';
    secondsecondDiv.innerHTML = 'Orders';

    let firstfirstDiv = document.createElement('div');
    firstfirstDiv.classList.add('firstFirst');
    let firstsecondDiv = document.createElement('div');
    firstsecondDiv.classList.add('secondFirst');
    let spanDiv = document.createElement('span');
    spanDiv.classList.add('spanDiv');
    spanDiv.innerHTML = i.orderInfo.reviews + '%';
    firstfirstDiv.innerHTML = '  ' + 'Positive reviews';
    firstsecondDiv.innerHTML = 'Above average';
    firstfirstDiv.append(spanDiv);
    firstfirstDiv.prepend(spanDiv);
    divInDiv.append(firstfirstDiv, firstsecondDiv);

    secondDiv.append(secondfirstDiv, secondsecondDiv);
    firstDiv.append(icon_span, divInDiv);
    greyDiv.append(firstDiv, secondDiv);


    div.append(span, img, h3, stock, price, add, greyDiv);
    item.append(div);
    counter++;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const popup = document.querySelector('.popup');
const popupDescribeDiv = document.querySelector('div.popup-describe-div');

for (let i = 0; i < counter; i++) {
    item.childNodes[i].addEventListener('click', function (e) {
        if (e) {
            popup.style.display = 'block';
            popupImg = document.querySelector('img.popup-img');
            popupImg.setAttribute('src', items[i].imgUrl);

            popupDescribeDivTitle = document.querySelector('h2.describe-title');
            popupDescribeDivTitle.innerHTML = items[i].name;

            // describer
            let describeItemsColor = document.querySelector('.describeItemsColor');
            describeItemsColor.innerHTML = items[i].color.join(', ');
            let describeItemsOS = document.querySelector('.describeItemsOS');
            describeItemsOS.innerHTML = items[i].os;
            let describeItemsChip = document.querySelector('.describeItemsChip');
            describeItemsChip.innerHTML = items[i].chip.name;
            let describeItemsHeight = document.querySelector('.describeItemsHeight');
            describeItemsHeight.innerHTML = `${items[i].size.height} cm`;
            let describeItemsWidth = document.querySelector('.describeItemsWidth');
            describeItemsWidth.innerHTML = `${items[i].size.width} cm`;
            let describeItemsDepth = document.querySelector('.describeItemsDepth');
            describeItemsDepth.innerHTML = `${items[i].size.depth} cm`;
            let describeItemsWeigth = document.querySelector('.describeItemsWeigth');
            describeItemsWeigth.innerHTML = `${items[i].size.weight} cm`;

            let spanDiv = document.querySelector('.spanDiv');
            spanDiv.innerHTML = `${items[i].orderInfo.reviews} %`

            priceTitleInPopupPriceDiv = document.querySelector('h2.price-title');
            priceTitleInPopupPriceDiv.innerHTML = `$ ${items[i].price}`;
            priceStockInPopupPriceDiv = document.querySelector('div.price-stock');
            priceStockInPopupPriceDiv.innerHTML = `Stock: ${items[i].orderInfo.inStock} pcs.`
        }
    })
};

const popupBody = document.querySelector('.popupBody');

popup.addEventListener('click', function (e) {
    if (e.target == popupBody) {
        popup.style.display = 'none';
    };
});



//*filter

document.querySelectorAll('.filter-span').forEach(el => el.addEventListener('click', function (el) {
    this.parentNode.classList.toggle('filter-active')
    this.parentNode.querySelector('.secondLevel').classList.toggle('active')
    this.parentNode.querySelector('.icon-arrow_left').classList.toggle('icon-active')
}))