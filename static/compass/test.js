window.onload = function () {
    (function () {
        var addEventHandler = function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        };
        var sheets = document.getElementsByTagName('h2'), tables = document.getElementsByTagName('table');
        var sheetArr = [], tableArr = [];
        for (var i = 0; i < sheets.length; ++i) {
            sheetArr[i] = '<li id="sheet_' + i + '">' + sheets[i].innerHTML + '</li>';
            tableArr[i] = tables[i].outerHTML;
        }
        var tempWrapper = document.createDocumentFragment();
        var resourceWrapper = document.createElement("div");
        resourceWrapper.innerHTML = document.body.innerHTML;
        resourceWrapper.style.display = 'none';
        var excelWrapper = document.createElement("div");
        var hash = location.hash;
        var skin = hash.split('=')[1];
        excelWrapper.setAttribute('class', 'excel clearfix ' + skin);
        var sheetWrapper = document.createElement("ul");
        sheetWrapper.setAttribute('class', 'sheet');
        sheetWrapper.innerHTML = sheetArr.join('');
        sheetWrapper.firstChild.setAttribute('class', 'active');
        var contentWrapper = document.createElement("div");
        contentWrapper.setAttribute('class', 'content');
        contentWrapper.innerHTML = tableArr[0];
        excelWrapper.appendChild(sheetWrapper);
        excelWrapper.appendChild(contentWrapper);
        addEventHandler(excelWrapper, 'click', function (e) {
            if (e.target && e.target.nodeName.toUpperCase() == "LI") {
                var children = sheetWrapper.children, length = children.length;
                for (i = 0; i < length; i++) {
                    if (children[i].nodeType == 1)children[i].setAttribute('class', '');
                }
                e.target.setAttribute('class', 'active');
                contentWrapper.innerHTML = tableArr[e.target.id.replace("sheet_", "")];
            }
            e.stopPropagation()
        });
        tempWrapper.appendChild(resourceWrapper);
        tempWrapper.appendChild(excelWrapper);
        document.body.innerHTML = '';
        document.body.appendChild(tempWrapper);
        document.body.style.display = 'block';
    })();
};