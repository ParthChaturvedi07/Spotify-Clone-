document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var link = this.getAttribute('data-link');
            window.location.href = link;
        });
    });
});

document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector('.browse');
    button.addEventListener('click', function(){
        var link2 = this.getAttribute('data-link2');
        window.location.href = link2;
    });
});

document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector('.search');
    button.addEventListener('click', function(){
        var link3 = this.getAttribute('data-link3');
        window.location.href = link3;
    });
});

