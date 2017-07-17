'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var GSPreloader = function () {
  function GSPreloader() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$parent = _ref.parent,
      parent = _ref$parent === undefined ? document.body : _ref$parent,
      _ref$element = _ref.element,
      element = _ref$element === undefined ? document.createElement('div') : _ref$element,
      _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? 42 : _ref$radius,
      _ref$dotSize = _ref.dotSize,
      dotSize = _ref$dotSize === undefined ? 15 : _ref$dotSize,
      _ref$animationOffset = _ref.animationOffset,
      animationOffset = _ref$animationOffset === undefined ? 1.8 : _ref$animationOffset,
      _ref$dotCount = _ref.dotCount,
      dotCount = _ref$dotCount === undefined ? 10 : _ref$dotCount,
      _ref$dotClass = _ref.dotClass,
      dotClass = _ref$dotClass === undefined ? 'preloader-dot' : _ref$dotClass,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? ["#61AC27", "black"] : _ref$colors,
      _ref$boxOpacity = _ref.boxOpacity,
      boxOpacity = _ref$boxOpacity === undefined ? 0.3 : _ref$boxOpacity,
      _ref$boxBorder = _ref.boxBorder,
      boxBorder = _ref$boxBorder === undefined ? '1px solid #AAA' : _ref$boxBorder,
      _ref$boxColor = _ref.boxColor,
      boxColor = _ref$boxColor === undefined ? 'white' : _ref$boxColor,
      _ref$boxClass = _ref.boxClass,
      boxClass = _ref$boxClass === undefined ? 'preloader-box' : _ref$boxClass;

    _classCallCheck(this, GSPreloader);

    this.parent = parent;
    this.element = element;
    this.radius = radius;
    this.dotSize = dotSize;
    this.animationOffset = animationOffset;
    this.dotCount = dotCount;
    this.dotClass = dotClass;
    this.colors = colors;
    this.boxOpacity = boxOpacity;
    this.boxBorder = boxBorder;
    this.boxColor = boxColor;
    this.boxClass = boxClass;

    this.i = dotCount;
    this.rotationIncrement = 360 / this.i;
    this.animation = new TimelineLite({paused: true});
    this.dots = [];
    this.isActive = false;
    this.box = document.createElement('div');
    this.colors.push(this.colors.shift());

    this.render();
  }

  _createClass(GSPreloader, [{
    key: 'createDot',
    value: function createDot(rotation) {
      var dot = document.createElement('div');
      dot.className = this.dotClass;
      this.element.appendChild(dot);
      TweenLite.set(dot, {
        width: this.dotSize,
        height: this.dotSize,
        transformOrigin: -this.radius + 'px 0px',
        x: this.radius,
        backgroundColor: this.colors[this.colors.length - 1],
        borderRadius: '50%',
        force3D: true,
        position: 'absolute',
        rotation: rotation
      });
      return dot;
    }
  }, {
    key: 'createBox',
    value: function createBox() {
      TweenLite.set(this.box, {
        width: this.radius * 2 + 70,
        height: this.radius * 2 + 70,
        borderRadius: "14px",
        backgroundColor: this.boxColor,
        border: this.boxBorder,
        position: "absolute",
        xPercent: -50,
        yPercent: -50,
        opacity: this.boxOpacity
      });
      this.box.className = this.boxClass;
      this.element.appendChild(this.box);
    }
  }, {
    key: 'createElement',
    value: function createElement() {
      TweenLite.set(this.element, {
        position: 'fixed',
        top: '45%',
        left: '50%',
        perspective: 600,
        overflow: 'visible',
        zIndex: 2000
      });
      this.parent.appendChild(this.element);
    }
  }, {
    key: 'initAnimation',
    value: function initAnimation() {
      this.animation.from(this.box, 0.1, {opacity: 0, scale: 0.1, ease: Power1.easeOut}, this.animationOffset);
      while (--this.i > -1) {
        var dot = this.createDot(this.i * this.rotationIncrement);
        this.dots.unshift(dot);
        this.animation.from(dot, 0.1, {scale: 0.01, opacity: 0, ease: Power1.easeOut}, this.animationOffset);
        var tl = new TimelineMax({repeat: -1, repeatDelay: 0.25}),
          j = 0;
        for (; j < this.colors.length; j++) {
          tl.to(dot, 2.5, {rotation: '-=360', ease: Power2.easeInOut}, j * 2.9).to(dot, 1.2, {
            skewX: '+=360',
            backgroundColor: this.colors[j],
            ease: Power2.easeInOut
          }, 1.6 + 2.9 * j);
        }
        this.animation.add(tl, this.i * 0.07);
      }
      if (TweenLite.render) {
        TweenLite.render(); //trigger the from() tweens' lazy-rendering (otherwise it'd take one tick to render everything in the beginning state, thus things may flash on the screen for a moment initially). There are other ways around this, but TweenLite.render() is probably the simplest in this case.
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.createBox();
      this.createElement();
      this.initAnimation();
    }
  }, {
    key: 'active',
    value: function active(show) {
      var _this = this;

      console.log('active:', this);
      if (!arguments.length) return this.isActive;
      if (this.isActive != show) {
        this.isActive = show;
        if (this.closingAnimation) {
          this.closingAnimation.kill();
        }
        if (this.isActive) {
          this.element.style.visibility = 'visible';
          TweenLite.set([this.element, this.box], {rotation: 0});
          this.animation.play(this.animationOffset);
        } else {
          this.closingAnimation = new TimelineLite();
          if (this.animation.time() < this.animationOffset + 0.3) {
            this.animation.pause();
            this.closingAnimation.to(this.element, 1, {
              rotation: -360,
              ease: Power1.easeInOut
            }).to(this.box, 1, {rotation: 360, ease: Power1.easeInOut}, 0);
          }
          this.closingAnimation.staggerTo(this.dots, 0.3, {
            scale: 0.01,
            opacity: 0,
            ease: Power1.ease,
            overwrite: false
          }, 0.05, 0).to(this.box, 0.4, {
            opacity: 0,
            scale: 0.2,
            ease: Power2.easeIn,
            overwrite: false
          }, 0).call(function () {
            _this.animation.pause();
            _this.closingAnimation = null;
          }).set(this.element, {visibility: 'hidden'});
        }
      }
      return this;
    }
  }]);

  return GSPreloader;
}();
