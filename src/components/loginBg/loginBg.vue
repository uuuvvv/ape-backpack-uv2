<template>
  <div class="lbg-wrapper">
    <canvas id="canvasDom" class="canvas-dom"
      >您的浏览器不支持canvas标签。</canvas
    >
  </div>
</template>

<script>
export default {
  name: "loginBg",
  data() {
    return {
      canWidth: "",
      canHeight: "",
      canvasDom: "",
      contextObj: "",
      styleOptions: {},
      curMouseXY: { typeAX: null, typeAY: null, max: 40000 },
      randomPointList: [],
      randomOptions: [],
    };
  },
  mounted() {
    this.canvasDom = this.getEleByIdFn("canvasDom");
    // 获取线条的配置参数
    this.styleOptions = this.setOptionsFn();
    // 获取context对象
    this.contextObj = this.canvasDom.getContext("2d");
    // 为canvas设置id
    this.canvasDom.id = `canvas${this.styleOptions.tagLength}`;
    // 为canvas设置style
    this.canvasDom.style.cssText = `position:fixed;top:0;left:0;z-index:${this.styleOptions.zIndex};opacity:${this.styleOptions.opacity}`;
    // 获取canvas的宽高同时为canvas设置宽高
    this.getWidthOrHeight();

    // 窗户变化重新获取宽高
    window.onresize = this.getWidthOrHeight();
    // 鼠标移动事件
    window.onmousemove =  (event)=> {
      event = event ? event : window.event;
      this.curMouseXY.typeAX = event.clientX;
      this.curMouseXY.typeAY = event.clientY;
    };
    // 鼠标移出事件
    window.onmouseout =  ()=> {
      this.curMouseXY.typeAX = null;
      this.curMouseXY.typeAY = null;
    };

    // 随机组合点坐标

    for (let f = 0; f < this.styleOptions.count; f++) {
      this.randomPointList.push({
        typeAX: Math.random() * this.canWidth,
        typeAY: Math.random() * this.canHeight,
        typeBX: 2 * Math.random() - 1,
        typeBY: 2 * Math.random() - 1,
        max: 20000, // 用来控制线段的长度
      });
    }

    this.randomOptions = this.randomPointList.concat([this.curMouseXY]);
    this.drawLineFn();
    // setTimeout( ()=> {
    //   this.drawLineFn();
    // }, 100);
  },
  methods: {
    // 根据ID获取dom元素
    getEleByIdFn(str) {
      return document.getElementById(str);
    },
    // 获取指定元素的属性值
    getEleAttrFn(dom, key, val) {
      if (key === "color") {
        return val;
      }
      return dom.getAttribute(key) || val;
    },
    // 设置配置项
    setOptionsFn() {
      return {
        id: 1,
        zIndex: 1, //层级
        opacity: 1, //透明度
        color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)})`, //颜色
        count: 100, //线条数量
      };
    },
    // 获取屏幕宽高
    getWidthOrHeight() {
      this.canWidth = this.canvasDom.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.canHeight = this.canvasDom.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    },
    //  获取requestAnimationFrame方法
    // 浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果
    getRequestAnimationFrameFn() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        ((callBack) => {
          window.setTimeout(callBack, 1000 / 45);
        })
      );
    },
    drawLineFn() {
      this.clearCanvas();
      this.randomPointList.forEach((item, index) => {
        item.typeAX += item.typeBX;
        item.typeAY += item.typeBY;
        item.typeBX *= item.typeAX > this.canWidth || item.typeAX < 0 ? -1 : 1;
        item.typeBY *= item.typeAY > this.canHeight || item.typeAY < 0 ? -1 : 1;
        // 线段连接点
        // this.contextObj.fillRect(item.typeAX - 2.5, item.typeAY - 2.5, 5, 5)
        // 线段圆形连接点绘制
        this.contextObj.fillStyle = this.styleOptions.color;
        this.contextObj.beginPath();
        this.contextObj.arc(
          item.typeAX - 0.5,
          item.typeAY - 0.5,
          2.5,
          0,
          Math.PI * 2,
          true
        );
        this.contextObj.closePath();
        this.contextObj.fill();
        for (let e = index + 1; e < this.randomOptions.length; e++) {
          let randomOpItem = this.randomOptions[e];
          if (randomOpItem.typeAX !== null && randomOpItem.typeAY !== null) {
            // 两点横坐标差值
            let diffX = item.typeAX - randomOpItem.typeAX;
            // 两点纵坐标差值
            let diffY = item.typeAY - randomOpItem.typeAY;
            // 计算两点间线段的距离
            let pointDis = diffX * diffX + diffY * diffY;
            if (pointDis < randomOpItem.max) {
              if (
                randomOpItem == this.curMouseXY &&
                pointDis >= randomOpItem.max / 2
              ) {
                item.typeAX -= 0.03 * diffX;
                item.typeAY -= 0.03 * diffY;
              }
              let lineW =
                ((randomOpItem.max - pointDis) / randomOpItem.max) * 1;
              this.contextObj.beginPath();
              // 线宽
              this.contextObj.lineWidth = lineW;
              this.contextObj.strokeStyle = this.styleOptions.color;
              this.contextObj.moveTo(item.typeAX, item.typeAY);
              this.contextObj.lineTo(randomOpItem.typeAX, randomOpItem.typeAY);
              this.contextObj.stroke();
            }
          }
        }
      });
      var animationFn = this.getRequestAnimationFrameFn();
      animationFn(this.drawLineFn);
    },
    // 清空画布
    clearCanvas() {
      this.contextObj.clearRect(0, 0, this.canWidth, this.canHeight);
    },
  },
};
</script>

<style lang="scss" scoped>
.lbg-wrapper{
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
}</style>
