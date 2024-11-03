function totaalPrice(potol, alu, peyaj, begun){
    const potolPerKg = 80;
    const aluPerKg = 60;
    const peyajPerKg = 120;
    const begunPerKg = 80;

    const potolTotal = potol * potolPerKg;
    const aluTotal = alu * aluPerKg;
    const peyajTotal = peyaj * peyajPerKg;
    const begunTotal = begun * begunPerKg;

    const totalBazarPrice = potolTotal + aluTotal + peyajTotal + begunTotal;

    return totalBazarPrice
}

const nededPerKg = totaalPrice(1, 5, 3, 2);
console.log(nededPerKg);