(function () {
    window.onload = function () {
        var svg = document.querySelectorAll('object'), svgMap = {}, version = +new Date();
        var hint = document.querySelector('.hint');
        var audio = document.getElementById('audio'), ready = {svg: false, audio: false};

        function scanSVGLoading() {
            svg.forEach(function (v, i) {
                var doc = v.getSVGDocument && v.getSVGDocument();
                if (doc && doc.readyState === 'complete' && !svgMap[i]) {
                    svgMap[i] = {
                        s: ~v.name.indexOf('static'),
                        c: doc.getElementsByTagName('svg')[0].outerHTML
                    };
                }
            });
            if (Object.keys(svgMap).length === svg.length) {
                ready.svg = true;
                hint.innerHTML = '加载音频中......';
                if (ready.audio) initPlayer();
            } else {
                setTimeout(scanSVGLoading, 0);
            }
        }

        function initPlayer() {
            var pages = [],
                i = -1,
                timerId = 0,
                pageIndexDom = document.querySelector('.page-index'),
                playBtn = document.getElementById('play'),
                controlPanelDom = document.querySelector('.control-panel');

            function init() {
                initScene();
                createPages();
                bindEvent();
            }

            function handleClick() {
                play();
                audio.play();
                playBtn.style.display = 'none';
                document.querySelector('.play-controls').style.display = 'block';
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
                playBtn.addEventListener('click', handleClick, false);
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

        audio.src = audio.getAttribute('data-origin');
        audio.addEventListener("canplay", function () {
            ready.audio = true;
            hint.innerHTML = '加载资源中......';
            if (ready.svg) initPlayer();
        });
        svg.forEach(function (v, i) {
            v.setAttribute('data', v.getAttribute('data-origin') + '?v=' + version);
        });
        scanSVGLoading();
    }
})();