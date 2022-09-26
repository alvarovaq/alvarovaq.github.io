var items = document.getElementsByClassName('project');
Object.values(items).forEach(item => {
    item.classList += " active";
});