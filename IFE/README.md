# 内容简要
  这里是百度前端技术学院的任务，通过做任务来学习更多。
# 学习心得
## Task_1_1
  了解HTML5的标签 <header>　<aside>　<footer>　<nav>
## Task_1_2
  导航栏
  <pre><code>
  ul{position:absolute;} 
  li{display:block;
     float:left;}
  </code></pre>
  输入框的对齐效果
  <pre><code>
  width:35%;
  </code></pre>
  利用width进行调节
## Task_1_3
  float属性与html中位置顺序的关系
  left和right宽度固定，middle的宽度自适应，那么在html中right想对应的html文件应该放在middle前面，再利用float属性进行定位，margin属性进行middle这个栏目的宽度变化，在container属性中添加overflow：auto属性进行container的高度变化。
  <pre><code>
  position:absolute; 文档脱离文档流，没有占位，它的位置是相对于副元素的位置；
  position：relative；文档没有脱离文档流，它的位置是相对于原来的位置；
  position：fixed；相当于absolute定位中的一种；
  float：left；right；
  clear：both；清除浮动</code></pre>
## Task_1_4
  垂直水平居中(知道height和width）：
  　<pre><code>
  　div{
  　width:50%;
  　left:50%;
  　margin-top:-1/2height;
  　margin-left:-1/2width;
  　}</code></pre>
  垂直水平居中(不知道height和width) :
    <pre><code>
    .parent{
    position:relative}
    .child{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%>
    }</pre></code>
  了解了border-radius的属性
  <code>
    border-radius:10px 11px 12px 13px;　//这四个参数分别代表左上，右上，右下，左下角的圆半径
  </code>
## Task_1_5
    再次强调了float属性与其所对应的和html文件在文档中的位置。
## Task_1_6
    熟悉p:first-letter属性。
  
  　
  
