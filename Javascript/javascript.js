//navbar
window.addEventListener('scroll', function(){
    // console.log($(window).scrollTop());
    $(window).scrollTop() >= 20 ? document.getElementById('navigation').classList.remove('bg-dark') : document.getElementById('navigation').classList.add('bg-dark');

    if ($(window).scrollTop() >= 1048){
        document.getElementById('navigation').classList.remove('navbar-dark');
        document.getElementById('navigation').classList.add('navbar-light');
    } else{
        document.getElementById('navigation').classList.add('navbar-dark');
    }
});

//Udemy section

//UW section




