const tabs = document.querySelectorAll('.nav-item');
const panes = document.querySelectorAll('.tab-pane');
const menuFull = document.querySelector('.menu-full');
const barBtn = document.querySelector('.fa-bars');

tabs.forEach(function (tab, index) {
    const pane = panes[index];
    tab.onclick = function (e) {
        e.preventDefault();
        document.querySelector('.nav-item.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');

        tab.classList.add('active');
        pane.classList.add('active');

        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
    }
});

barBtn.onclick = () => {
    menuFull.classList.toggle('active');
}





