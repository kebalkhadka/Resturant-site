document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.mobile-navbar-icon .fa-bars');
    const closeIcon = document.querySelector('.mobile-navbar-icon .fa-xmark');
    const sidebar = document.getElementById('sidebar');

    // Open sidebar when clicking the menu icon
    menuIcon.addEventListener('click', function () {
        sidebar.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    });
    // Close sidebar when clicking the close icon
    closeIcon.addEventListener('click', function () {
        sidebar.classList.remove('open');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'inline-block';
    });
});
