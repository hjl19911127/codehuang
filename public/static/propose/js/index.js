(function () {
    window.onload = function () {
        var svg = document.querySelectorAll('.svg-data'), svgMap = {};
        svg.forEach(function (v, i) {
            v.setAttribute('data', v.getAttribute('data-origin'));
            v.addEventListener("load", function () {
                var doc = this.getSVGDocument();
                svgMap[i] = {s: ~v.name.indexOf('static'), c: doc.getElementsByTagName('svg')[0].outerHTML};
                if (Object.keys(svgMap).length === svg.length) initPlayer();
            });
        });

        function initPlayer() {
            var pages = [],
                i = -1,
                timerId = 0,
                pageIndexDom = document.querySelector('.page-index'),
                controlPanelDom = document.querySelector('.control-panel'),
                audio = document.getElementById('audio');

            function init() {
                initScene();
                createPages();
                bindEvent();
                play();
                audio.play();
            }

            function initScene() {
                document.body.removeChild(document.getElementById('svg_source'));
                document.querySelector('.user-interface').style.display = 'block';
                document.querySelector('.loading').style.display = 'none';
            }

            function syncPageIndex() {
                pageIndexDom.innerHTML = i + 1;
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
                    page.firstChild.setAttribute('width', '100%');
                    page.firstChild.setAttribute('height', '100%');
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
                document.getElementById('repeat').addEventListener('click', repeat, false);
                document.getElementById('next').addEventListener('click', function () {
                    stop();
                    next();
                }, false);
                document.getElementById('toggle').addEventListener('click', toggle, false);
            }

            function next() {
                if (pages[i + 1]) {
                    pages[i] && (pages[i].style.display = 'none');
                    pages[i + 1].style.display = 'block';
                    i++;
                    syncPageIndex();
                }
            }

            function prev() {
                if (pages[i - 1]) {
                    pages[i] && (pages[i].style.display = 'none');
                    pages[i - 1].style.display = 'block';
                    i--;
                    syncPageIndex();
                }
            }

            function repeat() {
                pages[i] && (pages[i].style.display = 'none');
                i = -1;
                play();
                audio.currentTime = 0;
                audio.play();
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

            function toggle() {
                controlPanelDom.classList.toggle("active");
            }

            init();
        }
    }
})();