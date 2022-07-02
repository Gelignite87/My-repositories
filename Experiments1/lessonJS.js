const products = [
    { id: 1, title: 'Notebook', img: 'Notebook', price: 20000 },
    { id: 2, title: 'Mouse', img: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', img: 'Keyboard', price: 5000 },
    { id: 4, title: 'Gamepad', img: 'Gamepad', price: 4500 },
    { id: 5, title: 'Microphone', img: 'Microphone', price: 5000 },
];

const renderProduct = (title, img, price) =>
    `<div class="block_product">
        <div>
            <img class="img" src="imagesForBasket/${img}.png" alt="${img}">
        </div>
        <div class="block_text_product">
            <h3 class="block_text_product1">${title}</h3>
            <p class="block_text_product1">${price}</p>
            <button class="by-btn">Добавить в корзину</button>
        </div>
    </div>`;

const renderProducts = list => {
    const productList = list.map(item => {
        return renderProduct(item.title, item.img, item.price)
    });
    document.querySelector('.product').innerHTML = productList.join('');
}

renderProducts(products);



document.querySelector('.fon_menu').addEventListener(`click`, btnHenler);
function btnHenler() {
    console.log(`Вы нажали на корзину`);
}