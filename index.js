var obox1 = document.getElementsByClassName('box1')[0],
    obox2 = document.getElementsByClassName('box2')[0],
    borderColor = ['#4b4d74', '#5f8383', '#c9ac50', '#249d74', '#c8cfeb', '#c7ab83', '#d09060'],
    master = ['亚瑟', '鬼谷子', '铠', '橘右京', '项羽', '梦奇', '白起', '赵云', '李白', '韩信', '刘备', '鲁班七号', '墨子', '孙膑', '周瑜', '庄周', '廉颇', '程咬金', '典韦', '后羿', '扁鹊', '李元芳', '张飞', '刘禅', '兰陵王', '达摩', '曹操', '钟馗', '高渐离', '宫本武藏', '吕布', '嬴政', '姜子牙', '老夫子', '狄仁杰', '夏侯惇', '关羽', '哪吒', '太乙真人', '干将莫邪', '成吉思汗', '牛魔', '百里守约', '百里玄策', '苏烈', '黄忠', '诸葛亮', '东皇太一', '杨戬', '后羿', '孙悟空', '张良', '韩信', '刘邦', '达摩', '马可波罗',
        '娜可露露', '露娜', '妲己', '甄姬', '虞姬', '大乔', '小乔', '王昭君', '貂蝉', '芈月', '阿珂', '花木兰', '武则天', '不知火舞', '孙尚香', '蔡文姬', '安琪拉', '钟无艳', '女蜗', '雅典娜', '艾琳'
    ],
    //77个英雄
    skill = ['惩击', '终结', '狂暴', '疾跑', '治疗术', '闪现', '弱化'],
    timer = null,
    randomArr = [],
    user1 = document.getElementsByClassName('user1'),
    user2 = document.getElementsByClassName('user2'),
    selectArr='',
    border = '',
    name1 = '',
    name= ['々帅得哭セ','放你去死@','向日葵的阳光','ㄞロ斯啞浪zι','我就是鸟不拉','娱乐你又如何','qìηɡんυǎ','偷瞄你i','一切都似梦','爱你的温','一切只为中考','炸毛老婆子', '■ 黑疙瘩。。','花了芳卿妆ヽ','①抹蓝.','满世界勋找你^','月牙笑眼','┆煙味мī鰻','绝版女爷i','旺仔小凤 -','而川','负二呆','丿神风队灬','载风月','唠甜嗑','山间雾_雨','骑牛撞交警','错过·末班车','红玫瑰。','↗δ欠風不如'],
    odiv;

console.log(master)

//生成随机数

function createRondom(min, max) {
    return parseInt(Math.random() * max + min)
}

//生成界面框

function createBlock(len) {
    for (var i = 0; i < len; i++) {
        odiv = '<div class="1"></div>'
    }
}

//选的英雄

function selectMaster() {
    timer = setInterval(function() {
        var s = createRondom(1, 5);
        randomArr.push(s);
        if (randomArr.length >= 5) {
            var m = uniq(randomArr);
            if (m.length == 5) {
                clearInterval(timer);
                console.log(m)
                shd(m);
            }
        }

    }, 30)
}
//name,level,nickName,skill
selectMaster();

//数组去重
function uniq(array) {
    var temp = []; //一个新的临时数组
    for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
            temp.push(array[i]);
        }
    }
    return temp;
}


function shd(m) {
    for (var i = 0; i < m.length; i++) {
         selectArr = createRondom(0, 77);
         border = createRondom(1,5);
         name1 = createRondom(1,15);
        console.log(master[selectArr])
        var h = m[i];
        user1[i].style.borderColor = borderColor[border];
        user1[i].innerHTML = '<div class="name">'+master[selectArr]+'</div><div class="nickname">'+master[selectArr]+'</div>'
    }
    for (var i = 0; i < m.length; i++) {
         selectArr = createRondom(0, 77);
         border = createRondom(1,5);
         name1 = createRondom(1,15);
        console.log(master[selectArr])
        var h = m[i];
        user2[i].style.borderColor = borderColor[border];
        user2[i].innerHTML = '<div class="name">'+ master[selectArr]+'</div><div class="nickname">'+master[selectArr]+'</div>'    
    }
}
console.log(name)