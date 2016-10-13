var express = require('express');
var router = express.Router();
var request=require('superagent');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/api/getdata', function (req, res, next) {
    var data = [];
    for (var i = 0; i < 10; i++) {
        data.push(1);
    }
    res.send(data);
})
router.get('/api/getTable', function (req, res, next) {
    var data = [{
        "_id": "22b215e867b1aa1d590ca17ca3b71e7a",
        "name": "智慧生活服务平台",
        "address": "河南省济源市",
        "agentID": "90e748909c8a03088271cd05fc29be94",
        "managers": ["5229c1dcdce5f96576237619c3934b34", "b9c4fcee61876f38e91c088ffe42cef0"],
        "location": ["河南", "济源", "济源"],
        "contact": ["1"],
        "scene": ["operator", "community"],
        "scale": {"num": "100000", "type": "person"},
        "devices": ["0bb1f2b4d2de04bae114be6ca9468851", "03199fba56e3bc31190ee200c844632a"],
        "setting": {
            "groupID": "930a1fdda00fb72ac6e55aaa81a3e359",
            "slider": [{
                "root": 0,
                "imgSrc": "http://sq.xiaoyun.com/file/get/b8cfb82eb0eec73c6446f3cfca366747",
                "link": "http://2016.cctv.com/schedule/index.shtml",
                "name": "1"
            }, {
                "name": "最美济源",
                "link": "http://www.jy391.com",
                "imgSrc": "http://sq.xiaoyun.com/file/get/f4e7a1825134060b8e4ace957bbc7ccf",
                "root": 0
            }, {
                "name": "最美济源",
                "link": "http://www.jy391.com",
                "imgSrc": "http://sq.xiaoyun.com/file/get/74ad62ae2ea07357ee355fffdad0fc1f",
                "root": 0
            }, {
                "name": "最美济源",
                "link": "http://www.jy391.com",
                "imgSrc": "http://sq.xiaoyun.com/file/get/213cec8ade1c7a6bd80c79ea47086678",
                "root": 0
            }, {
                "name": "大美济源",
                "link": "http://baike.baidu.com/link?url=TI1kM2lZrzuFSO6PQ3MaboBQkq95PyhKM2Tun3exiff2WwLn7t5CmxoXSGY1toHPMY2TqydyhC-ilU5rnmCX4q",
                "imgSrc": "http://sq.xiaoyun.com/file/get/dbbb631fda664951dfef40097ade7886",
                "root": 0
            }, {
                "root": 1,
                "imgSrc": "http://sq.xiaoyun.com/file/get/6e2968ba27ed79e25bad6aed87ad4fa5",
                "link": "",
                "name": "小云社区成功上线啦"
            }],
            "reddot": 1,
            "topics": [{
                "_id": 13,
                "description": "酒店优选",
                "url": "http://m.ctrip.com/webapp/hotel/",
                "name": "酒店优选",
                "icon": "http://sq.xiaoyun.com/file/get/6551ce70df2aee2513593f7d24c92a81"
            }, {
                "_id": 15,
                "description": "火车票",
                "url": " http://touch.train.qunar.com/?from=touchindex",
                "name": "火车票",
                "icon": "http://sq.xiaoyun.com/file/get/60efe7f737932877ef3e941afd623a99"
            }, {
                "_id": 16,
                "description": "景点门票",
                "url": "http://m.ly.com/scenery/",
                "name": "景点门票",
                "icon": "http://sq.xiaoyun.com/file/get/08da6d5f92cabdc6ec096dd960dea7e8"
            }, {
                "_id": 17,
                "description": "代驾",
                "url": "http://h5.edaijia.cn/app/index.html",
                "name": "代驾",
                "icon": "http://sq.xiaoyun.com/file/get/d0224c99cd3acd44509753b74e9813ce"
            }, {
                "_id": 14,
                "description": "租车",
                "url": "http://m.zuche.com",
                "name": "租车",
                "icon": "http://sq.xiaoyun.com/file/get/d797f74b2dd7aa933c186487ffd0a380"
            }, {
                "_id": 22,
                "description": "电影票",
                "url": "http://m.dianying.baidu.com/info/movie/hot",
                "name": "电影票",
                "icon": "http://sq.xiaoyun.com/file/get/a52d680032fc760fe82d02ef854651f9"
            }, {
                "_id": 24,
                "description": "机票",
                "url": "http://touch.qunar.com/h5/flight/",
                "name": "机票",
                "icon": "http://sq.xiaoyun.com/file/get/0d7a7e3bd091a0b8faff17e52934cf03"
            }, {
                "_id": 25,
                "icon": "http://sq.xiaoyun.com/file/get/7016f144f91fb47edb407213731d0bef",
                "name": "航班查询",
                "url": "http://wx.133.cn/hbrobot/wap?pid=503&channeltype=baidu&bd_source_light=1915466",
                "description": "航班查询"
            }, {
                "_id": 20,
                "icon": "http://sq.xiaoyun.com/file/get/4b9941e417d162e68430de7871537275",
                "name": "违章查询",
                "url": "http://m.weizhang8.cn/",
                "description": "违章查询"
            }, {
                "_id": 19,
                "icon": "http://sq.xiaoyun.com/file/get/7cd6c93af79db7384eb3d77b8d68e953",
                "name": "快递查询",
                "url": "http://m.kuaidi100.com/",
                "description": "快递查询"
            }, {
                "_id": 12,
                "icon": "http://sq.xiaoyun.com/file/get/e0278a03fa0fa4186f63417cc6b8fdd0",
                "name": "打车",
                "url": "http://common.diditaxi.com.cn/general/webEntry?maptype=wgs&fromlat=39.98096907577634&fromlng=116.30000865410719&channel=70791",
                "description": "打车"
            }, {
                "_id": 11,
                "icon": "http://sq.xiaoyun.com/file/get/61c64be99d344fee1c107181d6899718",
                "name": "家电管家",
                "url": " http://m.jdguanjia.com",
                "description": "家电管家"
            }, {
                "_id": 10,
                "icon": "http://sq.xiaoyun.com/file/get/94286d18735f78f0b6d603c64481c580",
                "name": "外卖",
                "url": "http://waimai.baidu.com/mobile/waimai",
                "description": "外卖"
            }, {
                "_id": 9,
                "icon": "http://sq.xiaoyun.com/file/get/6425ccc0aced97eb8c7d07de724b21b5",
                "name": "丽人",
                "url": "http://www.helijia.com/mobile/build/app/home/index.html",
                "description": "丽人"
            }, {
                "_id": 8,
                "icon": "http://sq.xiaoyun.com/file/get/c00ed2a695fd3497069593ac0f0c1184",
                "name": "日常保洁",
                "url": "http://m.1jiajie.com/index.php",
                "description": "日常保洁"
            }, {
                "_id": 18,
                "description": "医院挂号",
                "url": "http://wy.guahao.com/fastorder/hospital",
                "name": "医院挂号",
                "icon": "http://sq.xiaoyun.com/file/get/8eb168c9e69cfcf2788aa8d2944279dc"
            }],
            "calcType": "wifi",
            "miniAd": false,
            "disabled": 1,
            "localService": 0,
            "entry": "",
            "miniStrategy": {"miniPageTimes": 1, "miniPagedelay": 2, "reddotDelay": 3},
            "rate": 21,
            "icon": "http://sq.xiaoyun.com/file/get/a3d0b4d6567c669c58f8d7a11ba1fb4f",
            "miniDisabled": 1,
            "hydropower": {"switch": "on"},
            "level": 1,
            "rankByUserNum": "12"
        },
        "status": 1,
        "number": 100860,
        "createAt": 1465817970420,
        "updateAt": 1475867564119
    }, {
        "_id": "1ce465300e931a3b372bf48460b893bb",
        "name": "畅联本地生活圈",
        "address": "沈阳市大东区",
        "agentID": "2549852b31d0763bb711523cc66b4a85",
        "managers": ["b9c4fcee61876f38e91c088ffe42cef0"],
        "location": ["辽宁", "沈阳", "大东区"],
        "contact": ["4008159080"],
        "scene": ["community", "operator"],
        "scale": {"num": "50000", "type": "households"},
        "devices": ["8c6c6ddabeceb654272abb060c463aeb", "88b8ae1070bf8f8a2d5b9644721d66ff"],
        "setting": {
            "groupID": "1bc8d90c7b71c9459525d02ed6aac036",
            "slider": [{
                "name": "小云社区成功上线啦",
                "link": "",
                "imgSrc": "http://sq.xiaoyun.com/file/get/6e2968ba27ed79e25bad6aed87ad4fa5",
                "root": 1
            }],
            "reddot": 1,
            "topics": [{
                "_id": "05375249506905675",
                "icon": "http://sq.xiaoyun.com/file/get/a7c5fdfccfe5ed0cb7fab2ed7c64f9db",
                "name": "周边服务",
                "url": "http://jump.luna.58.com/i/26Un?city=sy",
                "description": "",
                "root": 1
            }],
            "calcType": "sq",
            "miniAd": false,
            "entry": "",
            "localService": 0,
            "miniStrategy": {"miniPageTimes": 1, "miniPagedelay": 8, "reddotDelay": 8},
            "level": 1,
            "rate": 21,
            "disabled": 1,
            "miniDisabled": 1,
            "rankByUserNum": "11"
        },
        "status": 1,
        "number": 100858,
        "createAt": 1465201308788,
        "updateAt": 1475867564081
    }, {
        "_id": "94e84033903dc3312894ed52f88a4d59",
        "name": "testQd2",
        "address": "朝阳区朝阳门外大街6号新城国际公寓9号楼106-107室本之味",
        "agentID": "b9c4fcee61876f38e91c088ffe42cef0",
        "managers": [],
        "location": ["北京", "北京市", "东城区"],
        "contact": ["12"],
        "scene": ["community"],
        "scale": {"num": "100", "type": "person"},
        "devices": ["8e3fc5d29231714606aaa48f7627eb19"],
        "setting": {
            "123": 123456,
            "groupID": "20cdb8d7b04e343c1040872497ad0d24",
            "slider": [{
                "name": "小云社区成功上线啦",
                "link": "",
                "imgSrc": "http://sq.xiaoyun.com/file/get/6e2968ba27ed79e25bad6aed87ad4fa5",
                "root": 1
            }, {
                "name": "",
                "link": "http://www.baidu.com",
                "imgSrc": "http://life-img.coolfishstudio.com/0c6a08b6ea2ec47c0981619f4861a219"
            }],
            "reddot": 1,
            "topics": [{
                "_id": 11,
                "icon": "http://sq.xiaoyun.com/file/get/61c64be99d344fee1c107181d6899718",
                "name": "家电管家",
                "url": " http://m.jdguanjia.com",
                "description": "家电管家"
            }],
            "calcType": "wifi",
            "miniAd": false,
            "level": 2,
            "rate": 21,
            "mini2Banner": "http://reddot-api.gclick.cn/image/miniPage2/banner.png",
            "mini2BannerLink": "http://www.baidu.com",
            "mini2Pages": [{
                "imgSrc": "http://sq.xiaoyun.com/file/get/0c6a08b6ea2ec47c0981619f4861a219",
                "link": "http://www.baidu.com",
                "name": "test"
            }, {
                "imgSrc": "http://life-img.coolfishstudio.com/e1cb44cb7e8a853ed9687d60f7c17009",
                "link": "http://www.xiaoyun.com",
                "name": "test1"
            }, {
                "imgSrc": "http://life-img.coolfishstudio.com/edde42bc4114cb1497794bc68a182d71",
                "link": "http://www.baidu.com",
                "name": "test2"
            }, {
                "imgSrc": "http://life-img.coolfishstudio.com/12e00887f512c081cd419a6a2d0014fc",
                "link": "http://www.baidu.com",
                "name": "资讯"
            }],
            "disabled": 0,
            "miniDisabled": 1,
            "topicList": [{
                "_id": 9,
                "icon": "http://sq.xiaoyun.com/file/get/6425ccc0aced97eb8c7d07de724b21b5",
                "name": "丽人",
                "url": "http://www.helijia.com/mobile/build/app/home/index.html",
                "description": "丽人"
            }, {
                "_id": 8,
                "icon": "http://sq.xiaoyun.com/file/get/c00ed2a695fd3497069593ac0f0c1184",
                "name": "日常保洁",
                "url": "http://m.1jiajie.com/index.php",
                "description": "日常保洁"
            }, {
                "_id": 10,
                "icon": "http://sq.xiaoyun.com/file/get/94286d18735f78f0b6d603c64481c580",
                "name": "外卖",
                "url": "http://waimai.baidu.com/mobile/waimai",
                "description": "外卖"
            }, {
                "_id": 12,
                "icon": "http://sq.xiaoyun.com/file/get/e0278a03fa0fa4186f63417cc6b8fdd0",
                "name": "打车",
                "url": "http://common.diditaxi.com.cn/general/webEntry?maptype=wgs&fromlat=39.98096907577634&fromlng=116.30000865410719&channel=70791",
                "description": "打车"
            }, {
                "_id": 13,
                "icon": "http://sq.xiaoyun.com/file/get/6551ce70df2aee2513593f7d24c92a81",
                "name": "酒店优选",
                "url": "http://m.ctrip.com/webapp/hotel/",
                "description": "酒店优选"
            }, {
                "_id": 14,
                "icon": "http://sq.xiaoyun.com/file/get/d797f74b2dd7aa933c186487ffd0a380",
                "name": "租车",
                "url": "http://m.zuche.com",
                "description": "租车"
            }, {
                "_id": 15,
                "icon": "http://sq.xiaoyun.com/file/get/60efe7f737932877ef3e941afd623a99",
                "name": "火车票",
                "url": " http://touch.train.qunar.com/?from=touchindex",
                "description": "火车票"
            }, {
                "_id": 16,
                "icon": "http://sq.xiaoyun.com/file/get/08da6d5f92cabdc6ec096dd960dea7e8",
                "name": "景点门票",
                "url": "http://m.ly.com/scenery/",
                "description": "景点门票"
            }, {
                "_id": 17,
                "icon": "http://sq.xiaoyun.com/file/get/d0224c99cd3acd44509753b74e9813ce",
                "name": "代驾",
                "url": "http://h5.edaijia.cn/app/index.html",
                "description": "代驾"
            }, {
                "_id": 18,
                "icon": "http://sq.xiaoyun.com/file/get/8eb168c9e69cfcf2788aa8d2944279dc",
                "name": "医院挂号",
                "url": "http://wy.guahao.com/fastorder/hospital",
                "description": "医院挂号"
            }, {
                "_id": 19,
                "icon": "http://sq.xiaoyun.com/file/get/7cd6c93af79db7384eb3d77b8d68e953",
                "name": "快递查询",
                "url": "http://m.kuaidi100.com/",
                "description": "快递查询"
            }, {
                "_id": 20,
                "icon": "http://sq.xiaoyun.com/file/get/4b9941e417d162e68430de7871537275",
                "name": "违章查询",
                "url": "http://m.weizhang8.cn/",
                "description": "违章查询"
            }, {
                "_id": 21,
                "icon": "http://sq.xiaoyun.com/file/get/254aae515690602b077c6cd93ad9768d",
                "name": "团购",
                "url": "http://i.meituan.com/",
                "description": "团购"
            }, {
                "_id": 22,
                "icon": "http://sq.xiaoyun.com/file/get/a52d680032fc760fe82d02ef854651f9",
                "name": "电影票",
                "url": "http://m.dianying.baidu.com/info/movie/hot",
                "description": "电影票"
            }, {
                "_id": 23,
                "icon": "http://sq.xiaoyun.com/file/get/bd9609d3d1c43276512d04275319cf66",
                "name": "演出票务",
                "url": " http://m.damai.cn/",
                "description": "演出票务"
            }, {
                "_id": 24,
                "icon": "http://sq.xiaoyun.com/file/get/0d7a7e3bd091a0b8faff17e52934cf03",
                "name": "机票",
                "url": "http://touch.qunar.com/h5/flight/",
                "description": "机票"
            }, {
                "_id": 25,
                "icon": "http://sq.xiaoyun.com/file/get/7016f144f91fb47edb407213731d0bef",
                "name": "航班查询",
                "url": "http://wx.133.cn/hbrobot/wap?pid=503&channeltype=baidu&bd_source_light=1915466",
                "description": "航班查询"
            }],
            "deviceType": "js",
            "new": 1,
            "rankByUserNum": "0"
        },
        "status": 1,
        "number": 100832,
        "createAt": 1462441191828,
        "updateAt": 1475867564465
    }, {
        "_id": "6b2f23fea66ad48aace43e8912aa3a99",
        "name": "社区测试",
        "address": "地铁5号线北新桥123",
        "agentID": "b9c4fcee61876f38e91c088ffe42cef0",
        "managers": ["3a2db8b8a781dc141e913f27888a25ec"],
        "location": ["北京", "北京市", "东城区"],
        "contact": ["13366864006"],
        "scene": ["community"],
        "scale": {"num": "1000", "type": "person"},
        "devices": ["41eb8eeea8466fef82a79bc3567a22d0"],
        "setting": {
            "groupID": "eb701b88dbd460da30e2fc7755196499",
            "slider": [{
                "name": "小云社区成功上线啦",
                "link": "",
                "imgSrc": "http://sq.xiaoyun.com/file/get/6e2968ba27ed79e25bad6aed87ad4fa5",
                "root": 1
            }],
            "reddot": 1,
            "topics": [{
                "_id": 12,
                "icon": "http://sq.xiaoyun.com/file/get/e0278a03fa0fa4186f63417cc6b8fdd0",
                "name": "打车",
                "url": "http://common.diditaxi.com.cn/general/webEntry?maptype=wgs&fromlat=39.98096907577634&fromlng=116.30000865410719&channel=70791",
                "description": "打车"
            }, {
                "_id": 14,
                "icon": "http://sq.xiaoyun.com/file/get/d797f74b2dd7aa933c186487ffd0a380",
                "name": "租车",
                "url": "http://m.zuche.com",
                "description": "租车"
            }, {
                "_id": 8,
                "icon": "http://sq.xiaoyun.com/file/get/c00ed2a695fd3497069593ac0f0c1184",
                "name": "日常保洁",
                "url": "http://m.1jiajie.com/index.php",
                "description": "日常保洁"
            }, {
                "_id": 9,
                "icon": "http://sq.xiaoyun.com/file/get/6425ccc0aced97eb8c7d07de724b21b5",
                "name": "丽人",
                "url": "http://www.helijia.com/mobile/build/app/home/index.html",
                "description": "丽人"
            }, {
                "_id": 10,
                "icon": "http://sq.xiaoyun.com/file/get/94286d18735f78f0b6d603c64481c580",
                "name": "外卖",
                "url": "http://waimai.baidu.com/mobile/waimai",
                "description": "外卖"
            }, {
                "_id": 11,
                "icon": "http://sq.xiaoyun.com/file/get/61c64be99d344fee1c107181d6899718",
                "name": "家电管家",
                "url": " http://m.jdguanjia.com",
                "description": "家电管家"
            }, {
                "_id": 13,
                "icon": "http://sq.xiaoyun.com/file/get/6551ce70df2aee2513593f7d24c92a81",
                "name": "酒店优选",
                "url": "http://m.ctrip.com/webapp/hotel/",
                "description": "酒店优选"
            }, {
                "_id": 15,
                "icon": "http://sq.xiaoyun.com/file/get/60efe7f737932877ef3e941afd623a99",
                "name": "火车票",
                "url": " http://touch.train.qunar.com/?from=touchindex",
                "description": "火车票"
            }],
            "calcType": "wifi",
            "miniAd": false,
            "disabled": 0,
            "miniDisabled": 0,
            "mini2Banner": "",
            "mini2Pages": null,
            "miniPageTimes": 1,
            "miniPagedelay": 8,
            "miniStrategy": {"miniPageTimes": 2, "miniPagedelay": 30, "reddotDelay": 99},
            "entry": "",
            "mini2BannerLink": "",
            "localService": 0,
            "icon": "default",
            "rate": 21,
            "rankByUserNum": "0"
        },
        "status": 1,
        "number": 100813,
        "createAt": 1461317038198,
        "updateAt": 1475867564331,
        "icon": "http://life-img.coolfishstudio.com/0c6a08b6ea2ec47c0981619f4861a219"
    }, {
        "_id": "3c4d3802d8d2705d92a0310f14cecc61",
        "name": "智慧临沂",
        "address": "临沂市兰山区",
        "agentID": "d261112f7e2b362537c99457f3ca1856",
        "managers": ["6b4a1f68f1550fdab22a3110a0b82a0f", "b9c4fcee61876f38e91c088ffe42cef0"],
        "location": ["山东", "临沂", "兰山区"],
        "contact": ["05392020004"],
        "scene": ["community"],
        "scale": {"num": "140000", "type": "person"},
        "devices": ["b9173b8ecdec57ca08437c73717d0c6a", "bcfd7149822afdf2d672872f47f72ef4"],
        "setting": {
            "groupID": "6cb7735e1053e7e73f8d799e11fadc28",
            "slider": [{
                "name": "助力l",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NjMxMTgxMQ==&mid=506962132&idx=1&sn=c00f6e4049721d04131d5bf2e4492984&scene=23&srcid=0506WEeX6FApUsowXbyj9Scc#rd",
                "imgSrc": "http://sq.xiaoyun.com/file/get/838a06e4271b653da6c0c0ca44b17fec",
                "root": 0
            }],
            "reddot": 1,
            "topics": [{
                "_id": "05173765479085075",
                "icon": "http://sq.xiaoyun.com/file/get/502d4e0022cd0e849d51e0ebfd8a623c",
                "name": "广电新业务",
                "url": "http://mp.weixin.qq.com/s?__biz=MjM5NjMxMTgxMQ==&mid=2654445701&idx=1&sn=da0e27750b74d2566e634b9357ccb62c&scene=23&srcid=0428Z7auy1iOkOH4GyRVbFlr#rd",
                "description": "",
                "root": 0
            }, {
                "_id": "031026332529134715",
                "icon": "http://sq.xiaoyun.com/file/get/a38a36fd89fb0721dcb099f12592fb1b",
                "name": "快乐学堂",
                "url": "http://mp.weixin.qq.com/s?__biz=MjM5Njg2NDI0Ng==&mid=302470253&idx=1&sn=cc2654040f7ac16a2517e1ff3cb576f2&scene=23&srcid=0428Ys11k2CEJSszgwLvs4Lx#rd",
                "description": "",
                "root": 0
            }, {
                "_id": "014198746520460648",
                "icon": "http://sq.xiaoyun.com/file/get/31fe501b7bca5931e15ace29ee8865a2",
                "name": "服务热线",
                "url": "http://mp.weixin.qq.com/s?__biz=MjM5Njg2NDI0Ng==&mid=302470255&idx=1&sn=65b75cfe9750d084f5cba222655a8959&scene=23&srcid=0428V9VqnQ3Fe4xjfz0XZhTl#rd",
                "description": "",
                "root": 0
            }, {
                "_id": "05413915875894522",
                "icon": "http://sq.xiaoyun.com/file/get/acbf363c521a7e65c71e391edfb5e8e4",
                "name": "业务套餐",
                "url": "http://mp.weixin.qq.com/s?__biz=MjM5Njg2NDI0Ng==&mid=302470249&idx=1&sn=4c9855b4e47ef72fd414fe5a9a51a666&scene=23&srcid=0428l4GweqBH31lEQTU1bSMI#rd",
                "description": "",
                "root": 0
            }],
            "calcType": "sq",
            "miniDisabled": 1,
            "localService": 0,
            "icon": "default",
            "hydropower": {"switch": "on"},
            "minis": [{
                "imgSrc": "http://sq.xiaoyun.com/file/get/75ae89e8ec0f86d0fde16157e2a13dc6",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NjMxMTgxMQ==&mid=506962137&idx=1&sn=4899d2810b5b517a94478f38ae596322&scene=23&srcid=0506RLiMyEdgmrYbKbre2sfe#rd",
                "name": "微信助力"
            }, {
                "imgSrc": "http://sq.xiaoyun.com/file/get/f132a377009b13460d528bfdec05ab5b",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NjMxMTgxMQ==&mid=2654445701&idx=1&sn=da0e27750b74d2566e634b9357ccb62c&scene=23&srcid=0502cifUifh3kSP3Zo7io88o#rd",
                "name": "手机电视"
            }, {
                "imgSrc": "http://sq.xiaoyun.com/file/get/b4511293502f1e4feaa242aaeaf1bfa9",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NjMxMTgxMQ==&mid=2654445689&idx=1&sn=3e58cc04eed24ddcb6fb87115cadfca0&scene=23&srcid=0502TLi2UT2Rco5HmMs8792c#rd",
                "name": "手机电视"
            }, {
                "imgSrc": "http://sq.xiaoyun.com/file/get/3a9b2f7bbf7b05398e3e6f7037bcd66b",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NjMxMTgxMQ==&mid=400964242&idx=1&sn=58a9db4a33cd2287ed3fe0075f34a2a3&scene=23&srcid=0502N762XWUWQPKOuuxD4Ly3#rd",
                "name": "有线电视与IPTV"
            }, {
                "imgSrc": "http://sq.xiaoyun.com/file/get/616ea20d0d462ed756a81a0f305f3993",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5Njg2NDI0Ng==&mid=302470253&idx=1&sn=cc2654040f7ac16a2517e1ff3cb576f2&scene=23&srcid=0502lilto1gpMcAEXvJqkzEe#rd",
                "name": "电视学堂"
            }, {
                "imgSrc": "http://sq.xiaoyun.com/file/get/3f0d98de9a1d600a424c0382f4a3b953",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5Njg2NDI0Ng==&mid=302470255&idx=1&sn=65b75cfe9750d084f5cba222655a8959&scene=23&srcid=0502IY5tDLOY525lUUKNe1fL#rd",
                "name": "咨询热线"
            }],
            "groups": [{
                "userID": "f097098a0d63dbbca2b6e6540440b163",
                "name": "热门圈子",
                "number": 101164,
                "managers": ["f097098a0d63dbbca2b6e6540440b163"],
                "members": ["f097098a0d63dbbca2b6e6540440b163"],
                "description": "热门圈子",
                "interest": [],
                "tags": ["@community"],
                "postsCount": 0,
                "viewsCount": 0,
                "commentsCount": 0,
                "setting": {"icon": "http://sq.xiaoyun.com/file/get/2867e204fccd3c138916a46aa366f18a"},
                "_id": "3dc10b630f548938707e0f0c826a71f6",
                "createAt": 1461811421376,
                "updateAt": 1461811421376
            }],
            "miniAd": false,
            "entry": "",
            "level": 1,
            "rate": 21,
            "disabled": 1,
            "rankByUserNum": "92276"
        },
        "status": 1,
        "number": 100753,
        "createAt": 1458120742766,
        "updateAt": 1475867564197
    }, {
        "_id": "139f34af73567225d07513a3ce08a311",
        "name": "\b兰州联通",
        "address": "甘肃省兰州市城关区城关区",
        "agentID": "d7ae4bd6b5359cc8ceda9a21cf2b0c1c",
        "managers": ["838e34ea73e9be0c036f300cf5fcd6c6", "b9c4fcee61876f38e91c088ffe42cef0"],
        "location": ["甘肃", "兰州", "区(县)"],
        "contact": ["18601387799"],
        "scene": ["operator"],
        "scale": {"num": "30000", "type": "person"},
        "devices": ["3884e1a2ed04f577402fe11732d17abe"],
        "setting": {
            "deviceType": "device",
            "groupID": "cc4ad67a62c7fc8655000ac84caae107",
            "ownerID": "5636f6a8dbcf694d45582b27",
            "slider": [{
                "name": "0001",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NTk0NDY5NQ==&mid=402415547&idx=1&sn=20f10de9a3757ad91dccf3c0658249ea&scene=1&srcid=1218uF3tUG5ST6nwpAPZInNV#wechat_redirect",
                "imgSrc": "http://sq.xiaoyun.com/file/get/38e29aed8e58be90f6d0c19ad021b149",
                "root": 0
            }, {
                "name": "0003",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NTk0NDY5NQ==&mid=402113278&idx=1&sn=b2ca5a96cf26e7be9d633fbda56408ed&scene=1&srcid=1210xAN7QSfdU0WsGJP3sBgB#wechat_redirect",
                "imgSrc": "http://sq.xiaoyun.com/file/get/99752a39ed14f035c8a6067477a35dfd",
                "root": 0
            }, {
                "name": "0004",
                "link": "http://mp.weixin.qq.com/s?__biz=MzA3MjMxODA3OA==&mid=405946363&idx=1&sn=47029df665b360fc9ce140ec0dc4043c&scene=1&srcid=1208ZzKocImWusb0FkFpmtK6#wechat_redirect",
                "imgSrc": "http://sq.xiaoyun.com/file/get/1ee5466590c530bf512638d16a17d4f2",
                "root": 0
            }, {
                "name": "0005",
                "link": "http://mp.weixin.qq.com/s?__biz=MjM5NTk0NDY5NQ==&mid=401440685&idx=1&sn=c92d011103531b8c17db2b1cf12150c8&scene=1&srcid=12082MKtBrSbYHb1IqIvyOsK&from=singlemessage&isappinstalled=0#wechat_redirect",
                "imgSrc": "http://sq.xiaoyun.com/file/get/eed8d377aef6760691c0ca4aa8232b93",
                "root": 0
            }, {
                "name": "0005",
                "link": "http://lm.10010.com/wolm/inviteFriends/inviteFriends3.html?plg_nld=1&plg_uin=1&plg_auth=1&plg_usr=1&myUrl=http%3A%2F%2Fu.10010.cn%2FbhI1M&plg_vkey=1&plg_nld=1&plg_dev=1&from=singlemessage&isappinstalled=0",
                "imgSrc": "http://sq.xiaoyun.com/file/get/6fee8b3e96c1f459fcbdb8725f092382",
                "root": 0
            }],
            "topics": [{
                "_id": "04131990480236709",
                "icon": "http://sq.xiaoyun.com/file/get/5c7bc3ce9fe177227cdb9c2db01699ad",
                "name": "联盟商家",
                "url": "http://decorate.xiaoyun.com/site/56a97c757f963d151a23178d/content/56f4b40236fe594cd7ff",
                "description": "",
                "root": 0
            }, {
                "_id": "003816155134700239",
                "icon": "http://sq.xiaoyun.com/file/get/82b7c0e66022eb490a67ea667373c72f",
                "name": "甘肃新闻",
                "url": "http://www.gscn.com.cn/",
                "description": "",
                "root": 0
            }, {
                "_id": "01863666302524507",
                "icon": "http://sq.xiaoyun.com/file/get/1a5447e209ab35bf3403f605c150c700",
                "name": "政务服务",
                "url": "http://www.gsgs.gov.cn/",
                "description": "",
                "root": 0
            }, {
                "_id": "03763628867454827",
                "icon": "http://sq.xiaoyun.com/file/get/8ddaa853142f3224dff3a24b1430bc9b",
                "name": "微生活",
                "url": "http://www.wo116114.com/",
                "description": "",
                "root": 0
            }, {
                "_id": "04997996995225549",
                "icon": "http://sq.xiaoyun.com/file/get/83f4dbc2d3c455bcc69528daa66fb90c",
                "name": "联通网厅",
                "url": "http://wap.10010.com",
                "description": "",
                "root": 0
            }, {
                "_id": "017628269572742283",
                "icon": "http://sq.xiaoyun.com/file/get/bd9609d3d1c43276512d04275319cf66",
                "name": "吃喝玩乐",
                "url": "http://www.dianping.com/lanzhou",
                "description": "",
                "root": 0
            }, {
                "_id": "044117766502313316",
                "icon": "http://sq.xiaoyun.com/file/get/b398436f9fb257bb0299f2b9397211de",
                "name": "沃支付",
                "url": "https://cellphonefront.unicompayment.com:55352/payFront2/download.html",
                "description": "",
                "root": 0
            }, {
                "_id": "08096391507424414",
                "icon": "http://sq.xiaoyun.com/file/get/21ec63e65630d40ac9255f65a6ae4113",
                "name": "沃易购",
                "url": "http://www.woego.cn/woego/appBaseInfo/app#",
                "description": "",
                "root": 0
            }, {
                "_id": 21,
                "icon": "http://sq.xiaoyun.com/file/get/254aae515690602b077c6cd93ad9768d",
                "name": "团购",
                "url": "http://i.meituan.com/",
                "description": "团购"
            }, {
                "_id": "06030002401676029",
                "icon": "http://sq.xiaoyun.com/file/get/a487b209e232f94674e0232c8236c1b5",
                "name": "便民服务",
                "url": "http://decorate.xiaoyun.com/site/56a97c757f963d151a23178d/menu/56a97db4ebb869b3c2b8",
                "description": "",
                "root": 0
            }, {
                "_id": "027444196213036776",
                "icon": "http://sq.xiaoyun.com/file/get/5713d3a48b64c6748882258ee57957a7",
                "name": "沃商店",
                "url": "http://m.baidu.com/from=1001703e/bd_page_type=1/ssid=0/uid=0/baiduid=649FA740813A5C5051767520D3AB58FD/w=0_10_%E6%B2%83%E5%95%86%E5%BA%97/t=zbios/l=3/tc?pu=sz%401320_480%252Ccuid%40l82paj8MHf_javil_OHoi_OHBigIOSaq0ivQ8laDvtiOaH820aHet_aH28AN37qOC%252Ccua%40_a-qi4aq-ig4NE6lI5me6NNy2IgUI2t6AqqqB%252Ccut%40pa116f5xmC_UC2NpgI2wi4tl1R85A%252Cosname%40baiduboxapp%252Cctv%402%252Ccfrom%401001703e%252Ccen%40cuid_cua_cut%252Ccsrc%40home_box_txt%252Cta%40zbios_2_5.1_6_7.0&m=8&srd=1&dict=30&title=%25u4E2D%25u56FD%25u8054%25u901A%25u6C83%25u5546%25u5E97&tch=124.9.100.935.0.0&eqid=ffc94df3199ad0001000000356a336d6&wd=&src=http%3A%2F%2Fmstore.wo.com.cn%2F",
                "description": "",
                "root": 0
            }, {
                "_id": "013311222242191434",
                "icon": "http://sq.xiaoyun.com/file/get/b2faf285d9cb2723467808e8cd4b5079",
                "name": "好书",
                "url": "http://m.iread.wo.com.cn/index.action?indexType=book&channelid=18000001&null&fromclient=1",
                "description": "",
                "root": 0
            }],
            "calcType": "sq",
            "hydropower": {"switch": "on"},
            "localService": 0,
            "disabled": 1,
            "miniDisabled": 0,
            "miniAd": false,
            "level": 1,
            "rate": 21,
            "rankByUserNum": "7"
        },
        "status": 1,
        "number": 100424,
        "createAt": 1446442664608,
        "updateAt": 1475867564048
    }, {
        "_id": "4dd2db3398cad2536263868f94708441",
        "name": "智慧广州",
        "address": "海珠区江南西路113号石油大厦写字楼5楼互通宽带(江南西路服务中心)",
        "agentID": "25f71b3a70579d7cfdec5d4b3a89e76f",
        "managers": ["540409673cc5c15e9798385b0952d375", "b9c4fcee61876f38e91c088ffe42cef0"],
        "location": ["广东", "广州", "海珠区"],
        "contact": ["4008159080"],
        "scene": ["community"],
        "scale": {"num": "200000", "type": "households"},
        "devices": ["bb3e08047fcbf1ab010689747f3e5e78"],
        "setting": {
            "deviceType": "device",
            "groupID": "9a2b33279ddcf9e2801030b9caa23be6",
            "ownerID": "5628699b863aed7c7a68bfef",
            "slider": [{
                "name": "11",
                "link": "http://life.xiaoyun.com/community/4dd2db3398cad2536263868f94708441",
                "imgSrc": "http://sq.xiaoyun.com/file/get/5c4fa6bf80452e65805585d916ee7f54",
                "root": 0
            }, {
                "name": "2",
                "link": "http://2016.cctv.com/schedule/index.shtml",
                "imgSrc": "http://sq.xiaoyun.com/file/get/b8cfb82eb0eec73c6446f3cfca366747",
                "root": 0
            }, {
                "name": "3",
                "link": "http://match.2016.sina.com.cn/medals/",
                "imgSrc": "http://sq.xiaoyun.com/file/get/00ba588c72b2f461cac4cb4adc12d24f",
                "root": 0
            }],
            "topics": [{
                "_id": 21,
                "icon": "http://sq.xiaoyun.com/file/get/254aae515690602b077c6cd93ad9768d",
                "name": "团购",
                "url": "http://i.meituan.com/",
                "description": "团购"
            }, {
                "_id": 18,
                "icon": "http://sq.xiaoyun.com/file/get/8eb168c9e69cfcf2788aa8d2944279dc",
                "name": "医院挂号",
                "url": "http://wy.guahao.com/fastorder/hospital",
                "description": "医院挂号"
            }, {
                "_id": 20,
                "icon": "http://sq.xiaoyun.com/file/get/4b9941e417d162e68430de7871537275",
                "name": "违章查询",
                "url": "http://m.weizhang8.cn/",
                "description": "违章查询"
            }, {
                "_id": 19,
                "icon": "http://sq.xiaoyun.com/file/get/7cd6c93af79db7384eb3d77b8d68e953",
                "name": "快递查询",
                "url": "http://m.kuaidi100.com/",
                "description": "快递查询"
            }, {
                "_id": 22,
                "icon": "http://sq.xiaoyun.com/file/get/a52d680032fc760fe82d02ef854651f9",
                "name": "电影票",
                "url": "http://m.dianying.baidu.com/info/movie/hot",
                "description": "电影票"
            }, {
                "_id": 8,
                "icon": "http://sq.xiaoyun.com/file/get/c00ed2a695fd3497069593ac0f0c1184",
                "name": "日常保洁",
                "url": "http://m.1jiajie.com/index.php",
                "description": "日常保洁"
            }, {
                "_id": 11,
                "icon": "http://sq.xiaoyun.com/file/get/61c64be99d344fee1c107181d6899718",
                "name": "家电管家",
                "url": " http://m.jdguanjia.com",
                "description": "家电管家"
            }, {
                "_id": "07747208990622312",
                "icon": "http://sq.xiaoyun.com/file/get/709ee85f2fc10e83537162022ae31106",
                "name": "一起游戏",
                "url": "http://www.e8wan.com/s3.php?ac=c&plat=z&sk=wangzong",
                "description": "",
                "root": 0
            }, {
                "_id": "09591382599901408",
                "icon": "http://sq.xiaoyun.com/file/get/9b8e5ae16519b9b67fbf178e9bfe5e33",
                "name": "看直播",
                "url": "http://www.yy.com",
                "description": "",
                "root": 0
            }, {
                "_id": 23,
                "icon": "http://sq.xiaoyun.com/file/get/bd9609d3d1c43276512d04275319cf66",
                "name": "演出票务",
                "url": " http://m.damai.cn/",
                "description": "演出票务"
            }, {
                "_id": 15,
                "icon": "http://sq.xiaoyun.com/file/get/60efe7f737932877ef3e941afd623a99",
                "name": "火车票",
                "url": " http://touch.train.qunar.com/?from=touchindex",
                "description": "火车票"
            }],
            "calcType": "sq",
            "hydropower": {"switch": "on"},
            "szLocation": "565bc38d98d06aba64696077",
            "disabled": 0,
            "icon": "default",
            "localService": 1,
            "reddot": 1,
            "miniAd": false,
            "level": 2,
            "rate": 21,
            "rankByUserNum": "124070"
        },
        "status": 1,
        "number": 100408,
        "createAt": 1445489051924,
        "updateAt": 1475867564241
    }]

    res.send(data);
})


router.get('/api/stats/ads/:sqid/:bdate/:edate', function (req, respon, next) {
    var sqid = req.params.sqid;
    var bdate = req.params.bdate;
    var edate = req.params.edate;
    var url = "http://211.155.94.198:7657/sqinfo/unaudit/" + sqid + "/" + bdate + "/" + edate;
    request.get(url).end(function (err, res) {
        if (err || !res.ok) {
        } else {
            respon.send(JSON.stringify(res.body));
        }
    });

});
module.exports = router;
