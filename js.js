console.log('python web!')
var div1 = document.getElementsByClassName('div_home')[0];
var div2 = document.getElementsByClassName('input_div_on')[0];
var input_div_on = document.getElementById('input_div_on');
var inputAs = document.getElementsByClassName('input_a');
var div_home_2_on = document.getElementsByClassName('div_home_2_on')[0];
var mylike = document.getElementsByClassName('mylike')[0];
var on = document.getElementsByClassName('like_from')[0];
var off = document.getElementsByClassName('off')[0];
var dig = document.getElementsByClassName('dig')[0];
var like_all = document.getElementsByClassName('like_all')[0];
on.addEventListener('click',function(){
    mylike.style.right = '0px';
    my_master.style.height = '0px';
})
off.addEventListener('click',function(){
    mylike.style.right = '-2000px';
})
var digif = false
// var heightinit = window.innerHeight || document.documentElement.clientHeight
// var digh = heightinit
dig.addEventListener('click',function(){
    if(digif == false){
        mylike.style.width = '100%';
        mylike.style.height = '100%';
        mylike.style.top = '0px';
        like_all.style.height = '80%';
        digif = true;
    }else if(digif == true){
        mylike.style.width = '80%';
        mylike.style.height = '400px';
        // console.log(digh)
        // if(digh>600){
        mylike.style.top = '150px';
        // }else if(digh<600){
        //     mylike.style.top = '0px';
        // }
        like_all.style.height = '300px';
        digif = false;
    }
})

// 遍历这些元素，并为每个元素添加点击事件监听器
for (var i = 0; i < inputAs.length; i++) {
    inputAs[i].addEventListener('click', function(event) {
        // 当点击<a>标签时，弹出确认框
        if (!confirm('你确定要跳转到这个页面吗？')) {
            // 如果用户点击了“取消”，阻止默认行为（对于<a>标签是页面跳转
            event.preventDefault();
        }
    });
}
// document.addEventListener('wheel', function(event) {
//     // 使用 requestAnimationFrame 来确保更新在浏览器重绘之前执行
//     requestAnimationFrame(() => {
//         // 在 requestAnimationFrame 的回调中重新计算 sourceRect
//         const sourceRect = div1.getBoundingClientRect();
//         div2.style.marginTop = sourceRect.bottom + "px";
//         console.log(sourceRect);
//     });
// });

var input = document.getElementById('input1')
input.addEventListener('click',function(){
    div2.style.visibility = 'visible';
    div2.style.marginTop = '-13px';
    div2.style.opacity = '1';
    div_home_2_on.style.height = '300px';
})
document.addEventListener('click', function(event) {
    // 检查点击事件的目标元素是否是.from_go或.close-btn
    if (!div2.contains(event.target) && !div1.contains(event.target)) {
        div2.style.marginTop = '0px';
        div2.style.opacity = '0';
        setTimeout(function() {
            div2.style.visibility = 'hidden'; // 隐藏弹出div   // 两秒后执行
            div_home_2_on.style.height = '65px';
        }, 200);
    }
    // if (!mylike.contains(event.target)) {
    //     mylike.style.right = '-1300px';
    // }
  });













var prompt_div = document.getElementById('prompt_div')
var input1 = document.getElementById('seek1')
input1.addEventListener('input', function(event) {
    // event.target 是触发事件的元素（在这个例子中是 input 元素）
    // event.target.value 是 input 元素的值
    var t = event.target.value
    // console.log('Input value:', t);
    // 或者你可以直接在函数内部使用 this，它也会指向触发事件的元素
    // console.log('Input value:', this.value);
        const data = {
            type:'input',
            inputvlaues:t
        };
        const jsonData = JSON.stringify(data); // 将对象转换为JSON字符串
        fetch('/systemctl', { // 发送POST请求到服务器上的某个端点
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // 告诉服务器发送的是JSON数据
            },  
            body: jsonData // 发送JSON字符串
        })
        .then(response => response.json()) // 解析服务器的响应为JSON
        .then(serverData => {
            //  使用 serverData 而不是 data 来避免混淆
            // console.log(serverData); // 在控制台中打印从服务器响应的JSON数据
            var elements2 = document.getElementsByClassName('prompt_div');
            // 遍历这些元素并清除它们的内容
            for (var i = 0; i < elements2.length; i++) {
                // 清空元素内的所有子节点
                while (elements2[i].firstChild) {
                    elements2[i].removeChild(elements2[i].firstChild);
                }
            }
        if (serverData.message != false){
            // 确保 myList 是在此作用域内可访问的
            // myList 应该在之前的某个地方被定义和初始化
            serverData.message.forEach(listItem => {
                var divw = document.createElement('a')
                divw.className = 'prompt_div_a';
                divw.href = listItem;
                var divw1 = document.createElement('div');
                divw1.className = 'prompt_new_text';
                divw.appendChild(divw1);
                var br = document.createElement('br');
                divw1.appendChild(br);
                var h1 = document.createElement('h1');
                h1.style = 'margin-top: -20px;margin-left: 20px;';
                var textNode = document.createTextNode(listItem);
                h1.appendChild(textNode)
                divw1.appendChild(h1);
                var pt = document.createElement('p');
                pt.style = 'margin-left: 20px;';
                var textNode2 = document.createTextNode('暂无描述');
                pt.appendChild(textNode2)
                divw1.appendChild(pt);
                prompt_div.appendChild(divw)
            });
}
})
        .catch((error) => console.error('Error:', error)); // 捕获并打印错误
});























// 添加 input 事件监听器
input.addEventListener('input', function(event) {
    // event.target 是触发事件的元素（在这个例子中是 input 元素）
    // event.target.value 是 input 元素的值
    var t = event.target.value
    // console.log('Input value:', t);
    // 或者你可以直接在函数内部使用 this，它也会指向触发事件的元素
    // console.log('Input value:', this.value);
        const data = {
            type:'input',
            inputvlaues:t
        };
        const jsonData = JSON.stringify(data); // 将对象转换为JSON字符串
        fetch('/systemctl', { // 发送POST请求到服务器上的某个端点
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // 告诉服务器发送的是JSON数据
            },  
            body: jsonData // 发送JSON字符串
        })
        .then(response => response.json()) // 解析服务器的响应为JSON
        .then(serverData => { // 使用 serverData 而不是 data 来避免混淆
            // console.log(serverData); // 在控制台中打印从服务器响应的JSON数据
            var elements = document.getElementsByClassName('input_div_on');
            // 遍历这些元素并清除它们的内容
            for (var i = 0; i < elements.length; i++) {
                // 清空元素内的所有子节点
                while (elements[i].firstChild) {
                    elements[i].removeChild(elements[i].firstChild);
                }
            }
        if (serverData.message != false){
            // 确保 myList 是在此作用域内可访问的
            // myList 应该在之前的某个地方被定义和初始化
            serverData.message.forEach(listItem => {
                var div = document.createElement("div");
                // 设置div的class属性
                div.className = "input_div_on_p";
                // 创建一个p元素
                var a = document.createElement("a");
                a.href = listItem;
                a.className = "input_a";
                var p = document.createElement("p");
                // 设置p的class属性
                p.className = "input_div_on_text";
                // 创建一个文本节点
                var textNode = document.createTextNode(listItem);
                // 将文本节点添加到p元素中
                p.appendChild(textNode);
                // 将p元素添加到div元素中
                a.appendChild(p);
                div.appendChild(a);
                // 最后，将div元素添加到文档中的某个位置，比如body
                input_div_on.appendChild(div);
                // console.log(listItem); // 打印列表中的每个元素
            });
}})
        .catch((error) => console.error('Error:', error)); // 捕获并打印错误
}); 



function updateDistances() {
    // 获取元素
    var divall_left = document.querySelector('.div_home_1'); // 注意这里的类名可能与你的HTML不匹配
    var divall_bomoot = document.querySelector('.divall_bomoot');
    var div1Elements = document.getElementsByClassName('divall_left');
    var div2Elements = document.getElementsByClassName('divall_right');
    // 获取元素的位置和大小信息
    var divall_leftRect = divall_left.getBoundingClientRect();
    var divall_bomootRect = divall_bomoot.getBoundingClientRect();

    // 计算.divall_left距离浏览器底部的距离
    var distanceToBottom = window.innerHeight - divall_leftRect.bottom;

    // 计算.divall_left和.divall_bomoot之间的距离
    var distanceBetween = Math.abs(divall_bomootRect.top - divall_leftRect.bottom);

    // 遍历div1Elements并更新它们的height（假设你想要统一更新它们的高度）
    // for (var i = 0; i < div1Elements.length; i++) {
        // 这里你需要决定是基于哪个距离来更新高度
        // 例如，如果你想要基于距离底部的距离来更新，你可以这样做：
        // if (distanceToBottom <= 1000) {
        //     div1Elements[i].style.height = distanceToBottom + 'px';
        // } else if(distanceBetween <= 1000){
            // 如果不是基于距离底部，你可能想要使用其他逻辑或默认值
            div1Elements[0].style.height = distanceBetween + 'px';
            div2Elements[0].style.height = distanceBetween + 'px'; // 或者其他默认值
        // }  
    // }  

    // console.log('Distance of .div_home_1 to bottom of viewport:', distanceToBottom); // 注意这里可能应该使用.div_home_1或.divall_left，取决于你的意图
    // console.log('Distance between .div_home_1 and .divall_bomoot:', distanceBetween); // 同上
}

// 设置定时器，每隔一段时间更新一次距离
updateDistances()
setInterval(updateDistances, 500);

var cent_text = document.getElementsByClassName('cent_text')[0];
var svg_botem = document.getElementsByClassName('svg_botem')[0];
var window_top = document.getElementsByClassName('window_top')[0];
var div_Window_all = document.getElementsByClassName('div_Window_all')[0];
svg_botem.addEventListener('click',function(){
    // div_Window_all.style.visibility = 'visible';
    div_Window_all.style.marginTop = '0px';
    // div_Window_all.style.opacity = '1';
    // div_Window_all.style.animation = 'radius 1.5s ease-in-out forwards'
    // window_top.style.display = 'none';
})


var svg_out = document.getElementById('svg1');
// var div_Window_all_out = document.getElementsByClassName('div_Window_all')[0];
svg_out.addEventListener('click',function(){
    div_Window_all.style.marginTop = '-1000px';
    // div_Window_all.style.opacity = '0';
    // div_Window_all.style.animation = 'radiusout 1.5s ease-in-out forwards'
    // setTimeout(function() {
    //     div_Window_all.style.visibility = 'hidden'; // 隐藏弹出div   // 两秒后执行
    // }, 1000);
})

document.getElementsByClassName('input_seek')[0].addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为
    event.preventDefault();})
var home_all_centen = document.getElementsByClassName('div_left_home')[0];
var home_div_centen = document.getElementsByClassName('div_home_all')[0];
var div_left_home_text = document.getElementsByClassName('div_left_home_text')[0];
home_div_centen.addEventListener('click',function(){
    home_all_centen.style.visibility = 'visible';
    div_left_home_text.style.marginLeft = '0px';
    home_all_centen.style.animation = "backgroundson 1s ease-in-out forwards";
})
home_all_centen.addEventListener('click',function(){
    div_left_home_text.style.marginLeft = '-240px';
    home_all_centen.style.animation = "backgroundout 1s ease-in-out forwards";
    setTimeout(function() {
        home_all_centen.style.visibility = 'hidden'; // 两秒后执行
    }, 800);
})
window.addEventListener('resize', function(event) {
    var width = window.innerWidth || document.documentElement.clientWidth; // 兼容旧浏览器
    var height = window.innerHeight || document.documentElement.clientHeight
    // 在这里，你可以根据新的宽度值来执行其他操作，如改变样式、调整布局等
    if (width > 1300){
        div_left_home_text.style.marginLeft = '-240px';
        home_all_centen.style.animation = "backgroundout 1s ease-in-out forwards"
        setTimeout(function() {
            home_all_centen.style.visibility = 'hidden'; // 两秒后执行
        }, 800);
    }
    if(width > 1150){
        div_Window_all.style.marginTop = '-1000px';
    }
    if(width < 910){
        cent_text.style.animation = 'txtb 0.5s ease-in-out forwards';
    }
    else if(width>910){
        cent_text.style.animation = 'txtd 0.5s ease-in-out forwards';
    }
    if(width < 910){
        mylike.style.right = '-1900px';
    }
    // if(height < 600 && dig == false){
    //     mylike.style.top = '0px';
    // }else if(height > 600 && dig == false){
    //     mylike.style.top = '200px';
    // }
});
// var widthxp = window.innerWidth;
// if (widthxp < 910){
//     cent_text.style.animation = 'txtb 1s ease-in-out forwards';
// }

var div_home_right = document.getElementsByClassName('div_home_3')[0];
var my_master = document.getElementsByClassName('my_log')[0];
div_home_right.addEventListener('mouseenter',function(){
    my_master.style.height = '500px'
    // my_master.style.display = 'flex';
    div_home_right.addEventListener('mouseleave',function(){
        my_master.style.height = '0px'
        // my_master.style.display = 'none';
    })
})


var div = document.getElementById('myDiv');

// 获取div的计算后样式高度（包括padding, border等）
var computedHeightStr = window.getComputedStyle(div).height;

// 去除单位（假设单位是px），并转换为数字
var computedHeight = parseFloat(computedHeightStr);

// 检查计算后的高度是否小于700（假设单位是px）
if (!isNaN(computedHeight) && computedHeight < 700) {
    // 如果高度小于700，则设置div的高度为700px
    div.style.height = '700px';
}

// 打印结果
console.log('Computed Height:', computedHeightStr); // 打印原始字符串，包括单位
console.log('Computed Height (numeric):', computedHeight); // 打印转换后的数字


function submitForm(action){  
    // 设置隐藏字段的值
    document.getElementById('action').value = action;
    // 提交表单
    document.getElementById('myForm').submit();
    document.getElementById('logp').value = '';
}