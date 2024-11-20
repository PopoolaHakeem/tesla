
var menuicon = document.querySelector('#onclick')
var mobilenav = document.querySelector('.mobile-nav')
var cancelicon = document.querySelector('.cancel-icon')
var cancel = document.querySelector('.cancel')

menuicon.onclick = function() {
    menuicon.style.display = 'none'
    mobilenav.style.display = 'block'
    cancelicon.style.display = 'block'
}
cancelicon.onclick = function () {
    mobilenav.style.display = 'none'
    cancelicon.style.display = 'none'
    menuicon.style.display = 'block'
} 

cancel.onclick = function() {
    mobilenav.style.display = 'none'
    cancel.style.display = 'cancel'
    menuicon.style.display = 'block'
}