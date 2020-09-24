class Koteyka {
    constructor() {
        this.cards = [...document.querySelectorAll('.js-card')];

        this.applyBtn = document.querySelector('.js-apply');
        this.dropBtn = document.querySelector('.js-drop');

        this.checked = document.querySelector('.js-checked');

        this.applyBtn.addEventListener('click', this.applyFilters.bind(this));

        this.checked.addEventListener('click', this.dropdown.bind(this));

        this.sortingProps = [...document.querySelectorAll('.js-sort')];
        this.sortingProps.forEach((prop) => prop.addEventListener('click', this.sortCards.bind(this)));
    }

    dropdown() {
        this.dropdownList = document.querySelector('.js-dropdown');

        this.dropdownList.classList.toggle('visually-hidden');
        this.checked.classList.toggle('m-open');
    }

    applyFilters() {
        this.fromCost = document.querySelector('.js-from').value;
        this.toCost = document.querySelector('.js-to').value;
        let costed = [];
        let sized = [];
        let complected = [];

        this.areas = [...document.querySelectorAll('.js-area:checked')];
        this.items = [...document.querySelectorAll('.js-item:checked')];

        this.cards.forEach((card) => {
            card.classList.remove('m-hidden');
            if (card.dataset.cost >= parseInt(this.fromCost) && card.dataset.cost <= parseInt(this.toCost)) {
                costed.push(card);
            }
        })

        costed.forEach((card) => {
            this.areas.forEach((area) => {
                if (card.dataset.area == area.value) {
                    sized.push(card);
                }
            })
        })

        this.items.forEach((item) => {
            sized.forEach((card) => {
                if (card.hasAttribute('data-' + item.id)) {
                    complected.push(card);
                }
            })
        })
        let result = Array.from(new Set(complected));
        this.cards.forEach((card) => {
            card.classList.add('m-hidden');
            result.forEach((item) => {
                if (card == item) {
                    card.classList.remove('m-hidden');
                    console.log(card);
                }
            })
        })
    }

    sortCards(evt) {
        this.dropdownList.classList.toggle('visually-hidden');
        let checked = evt.target.innerHTML;
        this.checked.innerHTML = checked;

        switch (evt.target.dataset.sort) {
            case 'cost-up':
            this.cards.sort((a,b) => {
                if (a.dataset.cost > b.dataset.cost) {
                    return 1;
                }
                if (a.dataset.cost < b.dataset.cost) {
                    return -1;
                }
                return 0;
            })
            break;

            case 'cost-down':
            this.cards.sort((a,b) => {
                if (a.dataset.cost < b.dataset.cost) {
                    return 1;
                }
                if (a.dataset.cost > b.dataset.cost) {
                    return -1;
                }
                return 0;
            })
            break;

            case 'area-up':
            this.cards.sort((a,b) => {
                if (a.dataset.area > b.dataset.area) {
                    return 1;
                }
                if (a.dataset.area < b.dataset.area) {
                    return -1;
                }
                return 0;
            })
            break;

            case 'area-down':
            this.cards.sort((a,b) => {
                if (a.dataset.area < b.dataset.area) {
                    return 1;
                }
                if (a.dataset.area > b.dataset.area) {
                    return -1;
                }
                return 0;
            })
            break;

            default:
            this.cards.sort((a,b) => {
                if (a.dataset.cost > b.dataset.cost) {
                    return 1;
                }
                if (a.dataset.cost < b.dataset.cost) {
                    return -1;
                }
                return 0;
            })
            break;
        }
        // console.log(this.cards);
        let cardsWrap = document.querySelector('.js-content');
        // cardsWrap.innerHTML = '';
        this.cards.forEach((card) => {
            // console.log(card);
            cardsWrap.insertAdjacentHTML('beforeend', card);
        })
    }
}

new Koteyka();
