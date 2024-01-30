// Task 1

const musicAlbums = [
    {
        title: "Название альбома1",
        artist: "Исполнитель1",
        year: "Год выпуска1"
    },
    {
        title: "Название альбома2",
        artist: "Исполнитель2",
        year: "Год выпуска2"
    },
    {
        title: "Название альбома3",
        artist: "Исполнитель3",
        year: "Год выпуска3"
    }
]

const musicCollection = {
    musicAlbums: [...musicAlbums],
    [Symbol.iterator]: function () {
        let countMusic = 0;
        return {
            next: (() => {
                if (countMusic >= this.musicAlbums.length) {
                    return { done: true }
                } else {
                    return {
                        value: this.musicAlbums[countMusic++],
                        done: false
                    }
                }
            })
        }
    }
}
for (const musicAlbum of musicCollection) {
    console.log(musicAlbum);
}
for (const musicAlbum of musicCollection) {
    console.log(`${musicAlbum.title} - ${musicAlbum.artist} (${musicAlbum.year})`);
}

// Task 2

let cooks = new Map();
cooks.set('Виктор', 'Пицца')
    .set('Ольга', 'Суши')
    .set('Дмитрий', 'Десерты');

let dishes = new Map();
dishes.set('Пицца "Маргарита"', 'повар: Виктор')
    .set('Пицца "Пепперони"', 'повар: Виктор')
    .set('Суши "Филадельфия"', 'повар: Ольга')
    .set('Суши "Калифорния"', 'повар: Ольга')
    .set('Тирамису', 'повар: Дмитрий')
    .set('Чизкейк', 'повар: Дмитрий');

let firstClient = { name: 'Алесей' };
let firstClientOrder = new Set();
firstClientOrder.add('Пицца "Пепперони"')
    .add(' Тирамису');

let secondClient = { name: 'Мария' };
let secondClientOrder = new Set();
secondClientOrder.add('Суши "Калифорния"')
    .add(' Пиццу "Маргарита"');

let tirdClient = { name: 'Ирина' };
let tirdClientOrder = new Set();
tirdClientOrder.add('Чизкейк');

let orders = new Map();
orders.set(firstClient, firstClientOrder)
    .set(secondClient, secondClientOrder)
    .set(tirdClient, tirdClientOrder);

console.log(`Client ${firstClient.name} ordered ${[...orders.get(firstClient)]}`);
console.log(`Client ${secondClient.name} ordered ${[...orders.get(secondClient)]}`);
console.log(`Client ${tirdClient.name} ordered ${[...orders.get(tirdClient)]}`);