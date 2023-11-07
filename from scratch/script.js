var btn_collapse = document.getElementById('colapse_button');
btn_collapse.addEventListener('click', () => {
    var menu = document.getElementById('menu');
    var menu_ul = document.getElementById('menu_ul');
    menu_ul.classList.toggle('vertical_menu');
    menu.classList.toggle('vertical_menu_top');
});

window.addEventListener('resize', () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 775) {
        var menu = document.getElementById('menu');
        var menu_ul = document.getElementById('menu_ul');
        menu_ul.classList.remove('vertical_menu'); // Remove the class 'vertical_menu'
        menu.classList.remove('vertical_menu'); // Remove the class 'vertical_menu'
    }
});
