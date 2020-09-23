class Koteyka {
    constructor() {
        this.cards = [...document.querySelectorAll('.js-card')];

        this.applyBtn = document.querySelector('.js-apply');
        this.dropBtn = document.querySelector('.js-drop');

        this.applyBtn.addEventListener('click', this.applyFilters.bind(this));
        this.dropBtn.addEventListener('click', this.dropFilters.bind(this));

        this.sortingProps = [...document.querySelectorAll('.js-sort')];
        this.sortingProps.forEach((prop) => prop.addEventListener('click', this.sortCards.bind(this)));

        // console.log(this.cards);
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
            // else {
            //     card.classList.add('m-hidden');
            // }
        })

        costed.forEach((card) => {
            this.areas.forEach((item) => {
                if (card.dataset.area == item.value) {
                    sized.push(card);
                    // card.classList.remove('m-hidden');
                }
            })
        })

        console.log(sized);

        sized.forEach((card) => {
            this.items.forEach((item) => {
                if (card.dataset.area == item.value) {
                    complected.push(card);
                }
            })
        })
    }

    dropFilters() {
        this.fromCost = '';
        this.toCost = '';
        console.log(this.fromCost);
        this.dropBtn.classList.add('m-hidden');
    }

    sortCards(evt) {
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
        console.log(this.cards);
        // let cardsWrap = document.querySelector('.js-content');
        // cardsWrap.innerHTML = '';
        // this.cards.forEach((card) => {
        //     cardsWrap.insertAdjacentHTML('beforeend', card);
        // })
    }
}

new Koteyka();
