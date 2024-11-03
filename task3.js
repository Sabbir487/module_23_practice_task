function findAveragePhonePrice(phones) {
    if (phones.length === 0) {
        return 0;
    }

    let totalPrice = 0;
    let count = 0;

    for (const phone of phones) {
        totalPrice += phone.price;
        count++;
    }

    const averagePrice = totalPrice / count;

    return averagePrice;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice = findAveragePhonePrice(phones);
console.log("Average Phone Price:", averagePrice);
