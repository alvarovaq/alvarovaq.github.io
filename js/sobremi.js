var items = document.getElementsByClassName('part_item');
Object.values(items).forEach(item => {
    item.classList += " active";
});