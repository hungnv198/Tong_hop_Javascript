// DropMenu
/*{
    let getParent = (element, selector) =>{
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            } else {
                element = element.parentElement;
            }
        }
    }
    let menuElement = document.querySelectorAll('.menu__title');
    menuElement = Array.from(menuElement);
    for(var i = 1; i < menuElement.length; i++) {
        let menuItem = menuElement[i];
        let isShow = false;
        menuItem.onclick = () => {
            isShow = !isShow;
            let select = '.menu';
            let subMenu = getParent(menuItem, select);
            let subMenuItem = subMenu.querySelector('.sub__menu');
            if(isShow){
                subMenuItem.style.display = 'block';
            } else {
                subMenuItem.style.display = 'none';
            }
        }
    }
}*/