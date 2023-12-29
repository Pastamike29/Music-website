let popupMenu = document.getElementById('popup-menu');
let home = document.getElementById('Home');
let list = document.getElementById('list');

function showPopupMenu(){
    


    if(popupMenu.style.display === "none"){
        popupMenu.style.display == "block";
    }
    else {
        popupMenu.style.display == "none";
    }
} 
function contacts(){
    home.style.color = "red";
    list.style.color = "red";
}