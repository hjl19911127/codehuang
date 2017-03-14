import { TweenLite, TimelineLite, TimelineMax,Power1,Power2 } from './TweenMax-latest-beta'
class GSPreloader {
  constructor({
    parent = document.body,
    element = document.createElement('div'),
    radius = 42,
    dotSize = 15,
    animationOffset = 1.8,
    dotCount = 10,
    dotClass = 'preloader-dot',
    colors=["#61AC27", "black"],
    boxOpacity = 0.3,
    boxBorder = '1px solid #AAA',
    boxColor = 'white',
    boxClass = 'preloader-box'} = {}) {
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
    this.rotationIncrement = 360 / this.i
    this.animation = new TimelineLite({paused: true})
    this.dots = []
    this.isActive = false
    this.box = document.createElement('div')
    this.colors.push(this.colors.shift())

    this.initAnimation()
  }

  createDot(rotation) {
    let dot = document.createElement('div');
    dot.className = this.dotClass
    this.element.appendChild(dot)
    TweenLite.set(dot, {
      width: this.dotSize,
      height: this.dotSize,
      transformOrigin: (-this.radius + 'px 0px'),
      x: this.radius,
      backgroundColor: this.colors[this.colors.length - 1],
      borderRadius: '50%',
      force3D: true,
      position: 'absolute',
      rotation: rotation
    })
    return dot;
  }

  createBox() {
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
    })
    this.box.className = this.boxClass;
    this.element.appendChild(this.box)
  }

  createElement() {
    TweenLite.set(this.element, {
      position: 'fixed',
      top: '45%',
      left: '50%',
      perspective: 600,
      overflow: visible,
      zIndex: 2000
    })
    this.parent.appendChild(this.element)
  }

  initAnimation() {
    this.animation.from(this.box, 0.1, {opacity: 0, scale: 0.1, ease: Power1.easeOut}, this.animationOffset)
    while (--this.i > -1) {
      let dot = this.createDot(this.i * this.rotationIncrement)
      this.dots.unshift(dot)
      this.animation.from(dot, 0.1, {scale: 0.01, opacity: 0, ease: Power1.easeOut}, this.animationOffset)
      let tl = new TimelineMax({repeat: -1, repeatDelay: 0.25}), j = 0;
      for (; j < this.colors.length; j++) {
        tl.to(dot, 2.5, {rotation: '-=360', ease: Power2.easeInOut}, j * 2.9)
          .to(dot, 1.2, {skewX: '+=360', backgroundColor: this.colors[j], ease: Power2.easeInOut}, 1.6 + 2.9 * j)
      }
      this.animation.add(tl, this.i * 0.07)
    }
    if (TweenLite.render) {
      TweenLite.render()
    }
  }

  render() {
    this.createBox()
    this.createElement()
    this.initAnimation()
  }

  active(show) {
    if (!arguments.length) return this.isActive;
    if (this.isActive != show) {
      this.isActive = show;
      if (this.closingAnimation) {
        this.closingAnimation.kill()
      }
      if (this.isActive) {
        this.element.style.visibility = 'visible'
        TweenLite.set([this.element, this.box], {rotation: 0});
        this.animation.play(this.animationOffset)
      } else {
        this.closingAnimation = new TimelineLite()
        if (this.animation.time() < this.animationOffset + 0.3) {
          this.animation.pause()
          this.closingAnimation
            .to(this.element, 1, {rotation: -360, ease: Power1.easeInOut})
            .to(this.box, 1, {rotation: 360, ease: Power1.easeInOut}, 0)
        }
        this.closingAnimation
          .staggerTo(this.dots, 0.3, {
            scale: 0.01,
            opacity: 0,
            ease: Power1.ease,
            overwrite: false
          }, 0.05, 0)
          .to(this.box, 0.4, {opacity: 0, scale: 0.2, ease: Power2.easeIn, overwrite: false}, 0)
          .call(()=> {
            this.animation.pause()
            this.closingAnimation = null
          })
          .set(this.element, {visibility: 'hidden'})
      }
    }
    return this;
  }
}

export default GSPreloader;
