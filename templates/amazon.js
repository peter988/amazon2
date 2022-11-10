let title = [];
let price = [];

function add(object,price1) {
    title.push(object);
    price.push(price1);
    console.log(title);
    console.log(price);
}
function cart() {   
    let mar = 0;
    let pr = 0;

    let cart = document.createElement('div');
    cart.style.backgroundColor = '#232f3e';
    cart.style.width = '300px';
    cart.style.height = '3000px';
    cart.style.position = 'absolute';
    cart.style.top = '50px';

    function frame() {
        if (pr == 1212) {
            mar = clearInterval();
        }
        else {
            pr = pr + 3;
            cart.style.left = pr + 'px';
        }  
    }
    mar = setInterval(frame,1);
    

    document.body.appendChild(cart);



    let clear = document.createElement('button');
    clear.innerText = 'Clear All';
    clear.style.display = 'block';
    clear.onclick = function(){
        document.body.removeChild(cart);
        title = []
        price = []
    }
    cart.appendChild(clear);

    let bb = document.createElement('br');
    cart.appendChild(bb);



    title.forEach( (i , k) => {
            j = price[k];

            let product = document.createElement('p');
            product.innerText = i;
            product.style.display = 'inline';
            product.style.color = 'white';
            product.style.fontSize = '15px'
            cart.appendChild(product);

            
            let amount = document.createElement('p');
            amount.innerText = j;
            amount.style.display = 'inline';
            amount.style.color = 'lightblue';
            amount.style.marginLeft = '5px'
            cart.appendChild(amount);

            let remove = document.createElement('button');
            remove.innerText = 'X';
            remove.style.marginLeft = '5px';
            remove.onclick = function(){
                cart.removeChild(product);
                cart.removeChild(amount);
                cart.removeChild(remove);
                cart.removeChild(br)
                title.pop(product)
                price.pop(amount)
            }
            cart.appendChild(remove);

            let br = document.createElement('hr');
            cart.appendChild(br);



        });

        let sum = 0
price.forEach(tot => {
        let po = tot.replace('$','');
        console.log(po);
        sum = sum + parseInt(po);
        console.log(sum);
});

let pag = document.createElement('p');
pag.innerText = 'Total: ' + ' ' + sum;
pag.style.color = 'lightblue';
pag.style.fontSize = '25px';
pag.style.textAlign = 'center';
cart.appendChild(pag);










}


