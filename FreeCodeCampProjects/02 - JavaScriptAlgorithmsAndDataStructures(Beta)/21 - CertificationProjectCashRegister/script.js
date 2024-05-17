const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const currentChange = document.getElementById("current-change");
const priceField = document.getElementById("price");
const totalField = document.getElementById("total")

let total = 0;


let price = 1.87;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];
let cidNumbers = [
    ["0.01", 1.01],
    ["0.05", 2.05],
    ["0.1", 3.1],
    ["0.25", 4.25],
    ["1", 90],
    ["5", 55],
    ["10", 20],
    ["20", 60],
    ["100", 100]
];

window.onload = ()=>{
    updateCurrentChange();
    updateTotal();
    updatePrice();
}

const updateCurrentChange = ()=>{
    let stringHtml= "<table><thead><tr><th>Different Coins</th><th>Amount</th></tr></thead><tbody>";
    for(const money of cid){
        stringHtml += `<tr><td>${money[0]}</td><td>${money[1]}</td></tr>`
    }
    stringHtml += "</tbody></table>"
    currentChange.innerHTML = stringHtml;
}

const updateTotal = ()=>{
    total = 0;
    for(const money of cid){
        total += money[1];
    }
    total = Number(total.toFixed(2));
    totalField.textContent = `$${total}`;
}

const updatePrice = () =>{
    priceField.textContent = `$${price}`;
}

const buying = ()=> {
    let paid = parseFloat(cash.value);

    if(paid < price) {
        alert("Customer does not have enough money to purchase the item");
        updateCurrentChange();
        updateTotal();
        updatePrice();
        return;
    }
    if(paid === price){
        changeDue.textContent = "No change due - customer paid with exact cash";
        price = 0;
        updateCurrentChange();
        updateTotal();
        updatePrice();
    }else if(parseFloat((paid - price).toFixed(2)) === total){
        changeDue.textContent = "Status: CLOSED"
        for(let value of cid){
            if(value[1] !== 0){
                changeDue.textContent += ` ${value[0]}: $${value[1].toFixed(2)}`;
                value[1] = 0;
            }
        }
        updateCurrentChange();
        updateTotal();
        updatePrice();
    }
    else if(paid - price  > total){
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
    }else{
        const copyArray = cid.slice();
        const changeMoney = Number((paid - price).toFixed(2));

        paid = changeMoney;
        console.log(paid)
        const potentialChange = {}
        const potentialArr = []
        for(let i = cid.length - 1; i>= 0; i--){
            while(paid >= Number(cidNumbers[i][0]) && parseFloat((copyArray[i][1] - Number(cidNumbers[i][0] )).toFixed(2))>= 0){
                paid = Number((paid-Number(cidNumbers[i][0])).toFixed(2));
                console.log(paid)
                if(potentialChange[cid[i][0]]){
                    potentialChange[cid[i][0]] = parseFloat((potentialChange[cid[i][0]] + Number(cidNumbers[i][0])).toFixed(2));
                }else{
                    potentialChange[cid[i][0]] = Number(cidNumbers[i][0])
                }
                copyArray[i][1] =Number((copyArray[i][1]-Number(cidNumbers[i][0])).toFixed(2));
            }
        }

        for(let value of Object.keys(potentialChange)){
            const arrEntry = [value,parseFloat(potentialChange[value].toFixed(2))];
            potentialArr.push(arrEntry)
            console.log(arrEntry)
        }

        let potentialTotal = 0;
        for(let value of potentialArr){
            potentialTotal += value[1];
        }
        potentialTotal = Number(potentialTotal.toFixed(2))

        if(potentialTotal !== changeMoney ){
            changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
            return;
        }
        cid = copyArray;

        changeDue.textContent = `Status: OPEN`;
        for(let value of potentialArr){
            changeDue.textContent += ` ${value[0]}: $${value[1]}`;
        }
        updateCurrentChange();
        updateTotal();
        updatePrice();

    }
}

purchaseBtn.addEventListener("click", updateCurrentChange)
purchaseBtn.addEventListener("click", updateTotal)
purchaseBtn.addEventListener("click", updatePrice)
purchaseBtn.addEventListener("click", buying)