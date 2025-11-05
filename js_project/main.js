let countMap = {}; // To store quantity for each product

const show_products = async () => {
    console.log("Products loaded");

    let all_pro = null;

    try {
        all_pro = await fetch("https://fakestoreapi.com/products").then(res => res.json());
    } catch (err) {
        console.log("Error fetching products:", err);
        return;
    }

    console.log(all_pro);

    let div_ele = document.getElementById("pro_div");

    all_pro.forEach(product => {
        let single_item = document.createElement("div");
        single_item.classList = "card";

        let pro_img = document.createElement("img");
        pro_img.src = product.image;
        pro_img.width = 250;

        let pro_price = document.createElement("h3");
        pro_price.innerText = "$" + product.price;

        let pro_cate = document.createElement("p");
        pro_cate.innerText = product.category;

        let pro_desc = document.createElement("strong");
        pro_desc.textContent = product.title;

        let cart_button = document.createElement("button");
        cart_button.textContent = "Add to Cart";
        
        cart_button.onclick = function () {
            let tbody = document.getElementById("cartbody");

            // check if product already added
            let existingRow = document.getElementById(`row-${product.id}`);
            let res=0
            if (existingRow) {
                // increase quantity if exists
                countMap[product.id]++;
                existingRow.querySelector(".qty").innerText = countMap[product.id];
                existingRow.querySelector(".tot").innerText = countMap[product.id]*product.price;
        
               

            } else {
                // first time add
                countMap[product.id] = 1;

                let row = document.createElement("tr");
                // let row1 = document.createElement("tr");
                row.id = `row-${product.id}`;
                row.innerHTML = `
                    <td>${product.title}</td>
                    <td>$${product.price}</td>
                
                    <td class="qty">${countMap[product.id]}</td>
                    <td class="tot">${countMap[product.id]*product.price}</td>
                    <td><button onclick="this.closest('tr').remove()">Remove</button></td>
                    
                `;
                
                tbody.appendChild(row);
            }
        };

        single_item.append(pro_img, pro_price, pro_cate, pro_desc, cart_button);
        div_ele.append(single_item);
    });
};
