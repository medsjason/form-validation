let form1 = document.getElementById('form1');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let text3 = document.getElementById('text3');
let name = document.getElementById('name');
let uplode = document.getElementById('uplode');
let text4 = document.getElementById('text4');
let saime= ('090','091','080','070','+234');
let text6 = document.getElementById('text6')

let text7 = document.getElementById('text7')
let text71 = document.getElementById('text71')
let text8 = document.getElementById('text8')
let text81 = document.getElementById('text81')
let text9 = document.getElementById('text9')
let text91 = document.getElementById('text91')
let imageid = document.getElementById('div22')

form1.addEventListener("submit", function (e) {
    e.preventDefault();
   if(phone.value ==""){
       text3.innerText = "oops, this space is required";
       text3.style.color = "#da3400";
   }
   else if(phone.value.startsWith('090')
   || phone.value.startsWith('080')
   || phone.value.startsWith('070')
   || phone.value.startsWith('081')
   || phone.value.startsWith('091')
   || phone.value.startsWith('+234')){
        text3.innerText = "Congrats! you have entered a valid number";
        text3.style.color = "rgba(4,125,9,1)";
        text91.innerText = phone.value
   }
   else
   {
    text3.innerText ="sorry! you have an invalid number";
    text3.style.color = "#da3400";
}
 if(phone.length == 12)
   {
       text3.innerText ="sorry! you have an invalid number";
       text3.style.color = "#da3400";
   }

if(email.value == ""){
    text2.innerText = "oops, this space is required";
    text2.style.color = "#da3400";
}
else if(email.value.includes('@') && email.value.includes('.')){
    text2.innerText = "Congrats! you have entered a valid e-mail";
    text2.style.color = "rgba(4,125,9,1)";
    text81.innerText = email.value
}
else {
    text2.innerText ="sorry! you have an invalid email";
    text2.style.color = "#da3400";
}
if(name.value== ""){
    text1.innerText = "oops, this space is required";
    text1.style.color = "#da3400";
}
else {
    text1.innerText = "Congrats! you have entered a valid name";
    text1.style.color = "rgba(4,125,9,1)";
    text71.innerText = title.value + (' ') + name.value
}
if(title.value== ""){
    text5.innerText = "oops, this space is required";
    text5.style.color = "#da3400";
    text4.innerHTML = " oops, this space is required"
    text4.style.color = "#da3400";
}
else {
    text5.innerText = "Congrats! you have entered a valid name";
    text5.style.color = "rgba(4,125,9,1)";
}
if (uplode == ""){
    
}
/*
if(uplode['size'].value > 1024){
    text4.innerText = "Congrats! you have entered a valid name";
    text4.style.color = "rgba(4,125,9,1)";
}
else{
    text4.innerText = "Sorry, invalid file size";
    text4.style.color = "#da3400";
}
*/
let imagea = document.getElementById('uplode');
    let size = parseFloat(imagea.files[0].size / (1024 * 1024)).toFixed(2);

let image = document.getElementById('uplode').value;
if (image !=''){
    let checkimg = image.toLowerCase();
    if(!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)){
        text4.innerText = "please select jpg,png File/ file lesser than 2MB";
        text4.style.color = "#da3400";
    } 
    else{
        text4.innerText ="Valid File"
        text4.style.color = "rgba(4,125,9,1)";
        imageid.value = uplode.value
    }
}







})