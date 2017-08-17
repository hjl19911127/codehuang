(function () {
    var svg = document.querySelectorAll('.svg-data'), svgMap = {};
    svg.forEach(function (v, i) {
        v.addEventListener("load", function () {
            var doc = this.getSVGDocument();
            svgMap[i] = {s: ~v.name.indexOf('static'), c: doc.getElementsByTagName('svg')[0].outerHTML};
            if (Object.keys(svgMap).length === svg.length) initPlayer();
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
            var svgArr = Object.keys(svgMap).sort(function (p, n) {
                return p - n;
            }).map(function (v) {
                return svgMap[v];
            });
            svgArr.forEach(function (v) {
                var page = document.createElement('div');
                page.classList.add('page');
                !v.s && page.classList.add('paint');
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