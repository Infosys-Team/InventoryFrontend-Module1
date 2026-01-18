let users=[];

/* ADD USER */
document.getElementById("addBtn").addEventListener("click",addUser);

function addUser(){

let name=uname.value.trim();
let role=urole.value;
let msg=umsg;

if(name=="" || role==""){
msg.style.color="red";
msg.innerHTML="Please fill all fields!";
return;
}

if(users.find(u=>u.name===name)){
msg.style.color="red";
msg.innerHTML="User already exists!";
return;
}

users.push({
name,
role,
status:"Active"
});

loadUsers();

msg.style.color="green";
msg.innerHTML="User added successfully!";

uname.value="";
urole.value="";
}

/* LOAD TABLE */
function loadUsers(){

utable.innerHTML="";

users.forEach((u,i)=>{

let row=document.createElement("tr");

row.innerHTML=`
<td>${u.name}</td>
<td>${u.role}</td>
<td>${u.status}</td>
<td>
<button class="edit" onclick="editUser(${i})">Edit</button>
<button class="block" onclick="toggleBlock(${i})">
${u.status==="Active"?"Block":"Unblock"}
</button>
<button class="delete" onclick="deleteUser(${i})">Delete</button>
</td>
`;

utable.appendChild(row);
});
}

/* DELETE */
function deleteUser(i){
users.splice(i,1);
loadUsers();
}

/* EDIT ROLE */
function editUser(i){
let newRole=prompt("Enter new role (admin / emp):",users[i].role);

if(newRole==="admin" || newRole==="emp"){
users[i].role=newRole;
loadUsers();
}
else{
alert("Invalid role");
}
}

/* BLOCK / UNBLOCK */
function toggleBlock(i){

users[i].status=
users[i].status==="Active"?"Blocked":"Active";

loadUsers();
}
