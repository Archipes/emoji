let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// 获取当前 URL 的 hash 部分（#user1，#user2）
const hash = window.location.hash.substring(1);  // 去掉 # 符号
const contentDiv = document.getElementById('question');

// No 按钮的文字变化
let noTexts;
if (hash === 'doudou'){
    noTexts = [
        "真的不要吗", 
        "真的要结束吗", 
        "回个消息", 
        "好不好", 
        "呜呜呜~"
    ];
} else {
    noTexts = [
        "对不起，我知道错了", 
        "零花钱都给你", 
        "欲擒故纵，我懂！", 
        "能不能给个台阶嘛", 
        "原谅我嘛，对不起"
    ];   
}

if (hash === 'sanye') mainImage.src = "images1/0.gif";
else mainImage.src = "images/baituo.png";

// 根据 hash 显示不同内容
if (hash === 'xiaoyi') {
    contentDiv.innerHTML = '<h2>可以和小怡宝宝和好吗？</h2>';
} else if (hash === 'yangde') {
    contentDiv.innerHTML = '<h2>可以跟羊羊和好吗？</h2>';
} else if (hash === 'qiqi') {
    contentDiv.innerHTML = '<h2>可以跟淇淇和好吗？</h2>';
} else if (hash === 'koumiao') {
    contentDiv.innerHTML = '<h2>HJM, 可以跟我和好吗？</h2>';
} else if (hash === 'xiaobo') {
    contentDiv.innerHTML = '<h2>小博, 可以跟我和好吗？</h2>';
} else if (hash === 'ququ') {
    contentDiv.innerHTML = '<h2>渠渠, 可以跟我和好吗？</h2>';
} else if (hash === 'lulu') {
    contentDiv.innerHTML = '<h2>可以跟璐璐和好吗？</h2>';
} else if (hash === 'weiwei') {
    contentDiv.innerHTML = '<h2>微微, 可以跟我和好吗？</h2>';
} else if (hash === 'qingyue') {
    contentDiv.innerHTML = '<h2>瓦达西爱不爱我~</h2>';
    yesButton.innerText = "爱";
    noButton.innerText = "不爱";
} else if (hash === 'shaozuoyouwo') {
    contentDiv.innerHTML = '<h2>可以跟呆毛和好吗？</h2>';
} else if (hash === 'xiaolv') {
    contentDiv.innerHTML = '<h2>给不给钱？</h2>';
    yesButton.innerText = "给";
    noButton.innerText = "不给";
} else if (hash === 'doudou') {
    contentDiv.innerHTML = '<h2>可以理理我嘛？</h2>';
    yesButton.innerText = "可以";
    noButton.innerText = "不要";
} else if (hash === 'zh1') {
    contentDiv.innerHTML = '<h2>可以跟豪豪酱和好嘛？</h2>';
} else {
    contentDiv.innerHTML = '<h2>可以跟我和好吗？</h2>';
}

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) {
        if (hash === 'sanye') mainImage.src = "images1/1.gif";
        else mainImage.src = "images/rencuo.png"; // 震惊
    } 
    if (clickCount === 2) {
        if (hash === 'sanye') mainImage.src = "images1/2.gif";
        else mainImage.src = "images/geiqian.png";   // 思考
    }
    if (clickCount === 3) {
        if (hash === 'sanye') mainImage.src = "images1/3.gif";
        else mainImage.src = "images/duoqilai.png";   // 生气
    }
    if (clickCount === 4) {
        if (hash === 'sanye') mainImage.src = "images1/4.gif";
        else mainImage.src = "images/weiqu.png";  // 哭
    }
    if (clickCount >= 5) {
        if (hash === 'sanye') mainImage.src = "images1/5.gif";
        else mainImage.src = "images/crying.png";  // 之后一直是哭
    }
});

if (hash === 'lexieee') {
    yesTextContent = '呆呆信是大坏蛋';
    yesImageSrc  = "images/hug1.jpg"
} else if (hash === 'sanye') {
    yesTextContent = '!!!喜欢你!! ( >᎑<)♡︎ᐝ';
    yesImageSrc = "images1/6.gif"
}else { 
    yesTextContent = '!!!喜欢你!! ( >᎑<)♡︎ᐝ';
    yesImageSrc  = "images/hug.png"
}
// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">${yesTextContent}</h1>
            <img src=${yesImageSrc} alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});
