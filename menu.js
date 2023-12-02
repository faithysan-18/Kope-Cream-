window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);

        });
        
    }
}   

function SwitchPage (page_id) {
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page= document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}


/*
function allCoffee() {
    document.getElementById("table-one").style.display = "block";
    document.getElementById("table-two").style.display = "block";
    document.getElementById("table-three").style.display = "block";
    document.getElementById("table-four").style.display = "block";
}

function smoothieCoffee() {
    document.getElementById("table-one").style.display = "block";
    document.getElementById("table-two").style.display = "none";
    document.getElementById("table-three").style.display = "none";
    document.getElementById("table-four").style.display = "none";
}
function icedCoffee() {
    document.getElementById("table-one").style.display = 'none';
    document.getElementById("table-two").style.display = 'block';
    document.getElementById("table-three").style.display = "none";
    document.getElementById("table-four").style.display = "none";
}

function hotCoffee() {
    document.getElementById("table-one").style.display = 'none';
    document.getElementById("table-two").style.display = 'none';
    document.getElementById("table-three").style.display = "block";
    document.getElementById("table-four").style.display = "none";
}

function desserts() {
    document.getElementById("table-one").style.display = 'none';
    document.getElementById("table-two").style.display = 'none';
    document.getElementById("table-three").style.display = 'none';
    document.getElementById("table-four").style.display = "block";
} */