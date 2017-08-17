(function () {
    var svg = document.querySelectorAll('.svg-data'), svgArr = [];
    svg.forEach(function (v, i) {
        v.addEventListener("load", function () {
            var doc = this.getSVGDocument();
            svgArr[i] = {s: ~v.name.indexOf('static'), c: doc.getElementsByTagName('svg')[0].outerHTML};
            console.log(svgArr[i]);
            if (svgArr.length === svg.length) initPlayer();
        });
    });

    function initPlayer() {
        var pages = [], i = -1, timerId = 0;

        function init() {
            createPages();
            bindEvent();
            play();
        }

        function createPages() {
            var container = document.getElementById('container');
            var fragment = document.createDocumentFragment();
            svgArr.forEach(function (v) {
                var page = document.createElement('div');
                page.classList.push('page');
                v.s && page.classList.push('paint');
                page.innerHTML = v.c;
                fragment.appendChild(page);
                pages.push(page);
            });
            container.appendChild(fragment);
        }

        function bindEvent() {
            document.getElementById('prev').addEventListener('click', function () {
                stop();
                prev();
            }, false);
            document.getElementById('play').addEventListener('click', function () {
                play();
            }, false);
            document.getElementById('next').addEventListener('click', function () {
                stop();
                next();
            }, false);
        }

        function next() {
            if (pages[i + 1]) {
                pages[i] && (pages[i].style.display = 'none');
                pages[i + 1].style.display = 'block';
                i++;
            }
        }

        function prev() {
            if (pages[i - 1]) {
                pages[i] && (pages[i].style.display = 'none');
                pages[i - 1].style.display = 'block';
                i--;
            }
        }

        function stop() {
            clearTimeout(timerId);
        }

        function play() {
            next();
            stop();
            timerId = setTimeout(function () {
                play();
            }, 5000)
        }

        init();
    }
})();