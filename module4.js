let reportData=[
{name:"Rice",qty:5},
{name:"Milk",qty:50},
{name:"Sugar",qty:2}
];

function generateReport(){

let table=document.getElementById("rtable");
table.innerHTML="";

reportData.forEach(p=>{

let status=p.qty<10?"Reorder":"Sufficient";

let row=document.createElement("tr");
row.innerHTML=`
<td>${p.name}</td>
<td>${p.qty}</td>
<td class="${status==="Reorder"?"reorder":"sufficient"}">
${status}
</td>
`;

table.appendChild(row);
});
}
