var back = document.getElementById("back")
var pixaldata = [] //定义数组存放每个span的信息
var pixallife = 300 //设置每个粒子的生命周期
window.addEventListener("mousemove", function (evt) { //当鼠标移动时创建粒子
    var span = document.createElement("span") //新建span作为粒子
    span.className = "pixal" //使用pixal作为class设置
    back.appendChild(span) //将span作为子元素添加至#back层
    pixaldata.push({ //插入对应的span信息
        age: 0, //初始生命值
        color: "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) +"," + parseInt(Math.random() * 255)+ ")", //粒子颜色
        vx: Math.random()*0.5, //x轴位移速度
        vy: Math.random()*0.75, //y轴位移速度，高于x轴以便使粒子移动方向更偏向下方
        sx: evt.x, //根据鼠标坐标设置粒子的起始坐标
        sy: evt.y
    })

})
function draw() { //绘制粒子
    for (var i = 0; i < pixaldata.length; i++) {
        pixal = pixaldata[i] //指定当前粒子属性
        children = back.children[i] //指定当前子元素
        pixal.age++ //增加生命值
        pixal.sx += pixal.vx * 2 //设置位移距离
        pixal.sy += pixal.vy * 2
        children.style.background = pixal.color //设置背景颜色
        children.style.left = pixal.sx + "px" //根据位移值设置坐标
        children.style.top = pixal.sy + "px"
        if (pixal.age >= pixallife) { //判断生命值是否超过生命周期
            pixaldata.splice(i, 1) //删除数组元素
            back.removeChild(back.childNodes[i]) //删除子元素
        }
        
    }
}
setInterval(draw, 1)