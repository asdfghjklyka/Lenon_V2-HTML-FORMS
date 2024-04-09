document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dropdown-toggle').addEventListener('click', function() {
        this.nextElementSibling.style.display = 'block';
    });
  
    document.querySelectorAll('.submenu-toggle').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            let submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });
  });
