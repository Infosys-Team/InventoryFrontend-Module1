let alerts=[
{type:"low",msg:"Rice stock is low",status:"Unread"},
{type:"expiry",msg:"Milk expires tomorrow",status:"Unread"},
{type:"critical",msg:"Sugar out of stock",status:"Unread"}
];

document.getElementById("loadBtn").addEventListener("click",loadAlerts);

function loadAlerts(){

let table=document.getElementById("alertTable");
table.innerHTML="";

alerts.forEach((a,index)=>{

let row=document.createElement("tr");

row.innerHTML=`
<td class="${a.type}">${a.type.toUpperCase()}</td>
<td>${a.msg}</td>
<td class="${a.status==='Read'?'read':'unread'}">${a.status}</td>
<td>
${a.status==="Unread"?
`<button onclick="markRead(${index})">Mark Read</button>`:
`<span>✔</span>`}
</td>
`;

table.appendChild(row);
});
}

function markRead(i){
alerts[i].status="Read";
loadAlerts();
}
