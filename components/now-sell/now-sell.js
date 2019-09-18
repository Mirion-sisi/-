// components/now-sell/now-sell.js
Component({
  options:{
      // styleIsolation:"isolated",//不写默认isolated，是相互隔离的
      // styleIsolation:"apply-shared"//apply-shared，只是外部样式影响组件内部样式
      // styleIsolation:"shared"//shared 外部样式和内部样式 互相影响
    },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"我是默认的标题",
      observer:function(newVal,oldVal){//监听属性变化
        console.log(newVal,oldVal);
      }
    }
    
  },
externalClasses:["titleclass"],
  /**
   * 组件的初始数据
   */
  data: {
    // title:'我是标题'

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
