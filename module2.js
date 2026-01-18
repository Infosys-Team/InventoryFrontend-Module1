let products=[];

document.addEventListener("DOMContentLoaded", function(){

let btn=document.getElementById("addBtn");
btn.addEventListener("click",addProduct);

});

function addProduct(){

let name=document.getElementById("pname").value.trim();
let cat=document.getElementById("pcat").value.trim();
let price=document.getElementById("pprice").value.trim();
let qty=document.getElementById("pqty").value.trim();
let msg=document.getElementById("pmsg");

/* EMPTY CHECK */
if(name=="" || cat=="" || price=="" || qty==""){
msg.style.color="red";
msg.innerHTML="❌ Nothing is added. Please fill all fields!";
return;
}

/* DUPLICATE CHECK (NAME + PRICE) */
let exist = products.find(p =>
p.name.toLowerCase() === name.toLowerCase() &&
p.price === price
);

if(exist){
msg.style.color="red";
msg.innerHTML="⚠ Already product available!";
return;
}

/* ADD PRODUCT */
products.push({name,cat,price,qty});

let table=document.getElementById("ptable");
let row=document.createElement("tr");

row.innerHTML=`
<td>${name}</td>
<td>${cat}</td>
<td>${price}</td>
<td>${qty}</td>
`;

table.appendChild(row);

msg.style.color="green";
msg.innerHTML="✅ Product added successfully!";

/* CLEAR INPUTS */
document.getElementById("pname").value="";
document.getElementById("pcat").value="";
document.getElementById("pprice").value="";
document.getElementById("pqty").value="";
}
