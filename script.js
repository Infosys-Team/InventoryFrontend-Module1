let users = JSON.parse(localStorage.getItem("users")) || [];
let generatedOTP="";

document.addEventListener("DOMContentLoaded",()=>{

let regBtn=document.getElementById("regBtn");
let loginBtn=document.getElementById("loginBtn");
let otpBtn=document.getElementById("otpBtn");
let verifyBtn=document.getElementById("verifyBtn");

if(regBtn) regBtn.addEventListener("click",registerUser);
if(loginBtn) loginBtn.addEventListener("click",loginUser);
if(otpBtn) otpBtn.addEventListener("click",sendOTP);
if(verifyBtn) verifyBtn.addEventListener("click",verifyOTP);

});

// REGISTER
function registerUser(){

let u = ruser.value;
let p = rpass.value;
let r = rrole.value;
let msg = rmsg;

// Password pattern
let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(u=="" || p=="" || r==""){
msg.style.color="red";
msg.innerHTML="All fields are required";
return;
}

// PASSWORD VALIDATION
if(!pattern.test(p)){
msg.style.color="red";
msg.innerHTML="Password must be minimum 8 characters and include uppercase, number & special symbol";
return;
}

if(users.find(x=>x.u===u)){
msg.style.color="red";
msg.innerHTML="User already exists";
return;
}

users.push({u,p,r});
localStorage.setItem("users",JSON.stringify(users));

msg.style.color="green";
msg.innerHTML="✅ Registration Successful!";
}


// LOGIN
function loginUser(){

let u=username.value;
let p=password.value;
let role=loginRole.value;
let msg=document.getElementById("msg");

if(u==""||p==""||role==""){
msg.style.color="red";
msg.innerHTML="All fields are required";
return;
}

let found=users.find(x=>
x.u===u &&
x.p===p &&
x.r===role
);

if(found){

localStorage.setItem("currentUser",JSON.stringify(found));

role==="admin"?
window.location="admin.html":
window.location="employee.html";
}
else{
msg.style.color="red";
msg.innerHTML="Invalid credentials or role mismatch";
}
}

// SEND OTP
function sendOTP(){

let u=fuser.value;
let info=document.getElementById("info");

if(u==""){
info.style.color="red";
info.innerHTML="Enter username";
return;
}

generatedOTP=Math.floor(100000+Math.random()*900000);

info.style.color="green";
info.innerHTML="📩 If registered, check your inbox";

document.getElementById("otpBox").style.display="block";

console.log("OTP:",generatedOTP);
}

// VERIFY OTP
function verifyOTP(){

let u=fuser.value;
let o=otp.value;
let np=newpass.value;
let cp=confpass.value;
let msg=fmsg;

if(o!=generatedOTP){
msg.style.color="red";
msg.innerHTML="Invalid OTP";
return;
}

if(np!=cp){
msg.style.color="red";
msg.innerHTML="Passwords do not match";
return;
}

let user=users.find(x=>x.u===u);

if(!user){
msg.style.color="red";
msg.innerHTML="User not found";
return;
}

user.p=np;
localStorage.setItem("users",JSON.stringify(users));

msg.style.color="green";
msg.innerHTML="✅ Password reset successful!";
}

// LOGOUT
function logout(){
localStorage.removeItem("currentUser");
window.location="login.html";
}
