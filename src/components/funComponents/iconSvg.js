export default {
  name:'iconSvg',//图标组件
  functional: true,
  props: {
    icon:{
      type:String,
      required: true
    },
    class: {
      type: String,
    }
  },
  render:  (createElement, context)=> {
   
    return (`<div><svg class="cc-icon ${context.props.class}" aria-hidden="true"><use xlink:href="${context.props.icon}"></use></svg></div>`)
  }
}