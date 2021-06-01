import '@scss/style';
// setTimeout(() => {
//     import('@scss/style');
// }, 2000);

document.addEventListener('DOMContentLoaded', function() {
    const main = new Main();
});

class Main {
    constructor() {
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }
    get observers() {
        return this._observers;
    }
    
    _init() {
        new MobileMenu();
        this._scrollInit();
        // Pace.on('done', this._paceDone.bind(this));
    }

    // _paceDone() {
    //     this._scrollInit();
    // }

    _inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('is-inview');
        } else {
            el.classList.remove('is-inview');
        }
    }

    _destroyObservers() {
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.slide', this._inviewAnimation);
    }
}

/* mobil-menu */
class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.toggle');
        this.DOM.cover = document.querySelector('.header__menu');
        this.DOM.container = document.querySelector('.header__inner');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('is-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

/* scroll */
class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }

    _init() {
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };

        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.io.POLL_INTERVAL = 100;
        this.els.forEach(el => this.io.observe(el));
    }

    destory() {
        this.io.disconnect();
    }

}

/* smooth-scroll */
const smoothScroll = document.querySelectorAll('a[href^="#"]');

for(let i = 0; i < smoothScroll.length; i++) {
    smoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScroll[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 60;
        const target = rect + offset - gap;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}


/* to page top */
const px_change = 200;
window.addEventListener('scroll', function(e) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > px_change) {
        document.querySelector('.toPageTop').classList.add('fadein');
    } else {
        document.querySelector('.toPageTop').classList.remove('fadein');
    }
});

const toPageTop = document.querySelector('.toPageTop');
toPageTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});