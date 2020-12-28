// 在建项目
var building = {
    "B0001": {
        "pName": "中山大学·深圳建设工程项目施工总承包（1标)",
        "pIcon": "/images/main_img.jpg", //图片路径
        "swiper_img_list": ["/images/lb1.jpg", "/images/lb2.jpg", "/images/lb3.jpg"], //轮播图中的图片路径
        "projectId":"B0001"
    }
}
// 准备中项目
var prepare = {
    // "P0001": {
    //     "pName": "中山大学·深圳建设工程项目施工总承包（1标）准备",
    //         "pIcon": "/images/main_img.jpg"   //图片路径
    // },
    // "P0002": {
    //     "pName": "中山大学·深圳建设工程项目施工总承包（Ⅱ标）准备",
    //         "pIcon": "/images/main_img.jpg"   //图片路径
    // },
    // "P0003": {
    //     "pName": "中山大学·深圳建设工程项目施工总承包（3标）准备",
    //         "pIcon": "/images/main_img.jpg"   //图片路径
    // }
}
// 已完成项目
var complate = {
    // "C0001": {
    //     "pName": "中山大学·深圳建设工程项目施工总承包（1标）完成",
    //         "pIcon": "/images/main_img.jpg"   //图片路径
    // },
    // "C0002": {
    //     "pName": "中山大学·深圳建设工程项目施工总承包（Ⅱ标）完成",
    //         "pIcon": "/images/main_img.jpg"   //图片路径
    // },
    // "C0003": {
    //     "pName": "中山大学·深圳建设工程项目施工总承包（3标）完成",
    //         "pIcon": "/images/main_img.jpg"   //图片路径
    // }
}
// 所有项目列表
var project_list = {
    "B0001": { //项目名称
        "baseInfo":{  //基础信息，在计划管理中也有用到
            "pFormats": "住宅、商业、学校", //所属业态 char
            "con_comm_date": "2020年8月20日", //合同开工日期
            "con_comp": "2021年6月20日", //合同竣工日期
            "awar_date": "2018年8月15日", //中标通知书日期
            "comm_date": "2018年8月23日", //开工令日期
            "barea": "42", //建筑面积 int
            "carea": "62", //占地面积 int
            "amount": "24.79", //合同额 int
            "duration": "963", //合同工期 date 2020.11.10
        },

        "survey": { //项目概况
            "pcharge": {
                "con_unit": //建设单位
                {
                    "name": "深圳市住宅工程管理站",
                    "contact": "王鑫",
                    "phone": "15979005263"
                },
                "sup_unit": //监理单位
                {
                    "name": "浙江江南工程管理股份有限公司",
                    "contact": "许建华",
                    "phone": "13336051039"
                },
                "adv_unit": //咨询单位
                {
                    "name": "浙江江南工程管理股份有限公司",
                    "contact": "李冬",
                    "phone": "13456903636"
                },
                "sur_unit": //勘察单位
                {
                    "name": "深圳市工勘岩土集团有限公司",
                    "contact": "陈强",
                    "phone": "13760306585"
                },
                "des_unit": //设计单位
                {
                    "name": "深圳市华阳国际工程设计有限公司",
                    "contact": "李祥柱",
                    "phone": "13425157699"
                }
            }
        },

        "organization": { //组织架构
            "project_manager": {  //项目经理
                "manager":{
                    "name": "栗升卫", 
                    "wid": "001" 
                },
            }, 
            "production_manager": { //生产经理
                "manager":{
                    "name": "熊均", 
                    "wid": "002",                     
                },
                "people": ["彭万里","高大山","谢大海","马宏宇"] 
            }, 
            "security":{  //安全总监
                "manager":{
                    "name": "陈芝文", 
                    "wid": "003",  
                },
                "people": ["黄志斌","陈彪","王刚","官珊瑚"] 
            },
            "technology":{  //技术部
                "manager":{
                    "name": "陈元均", 
                    "wid": "004",  
                },  
                "people": ["曾谋","刘伟","黄元威"] 
            },
            "business":{  //商务部
                "manager":{
                    "name": "赵鹏", 
                    "wid": "005",  
                }, 
                "people": ["丘善章","谢扉","文峰盛","肖志坤"] 
            },
            "party":{  //党群部
                "manager":{
                    "name": "阎登鑫", 
                    "wid": "006",  
                },  
                "people": ["马继祖","程孝先","宗敬先","年广嗣","汤绍箕","吕显祖"] 
            },
        },

        "partModule": { //单体模块信息，也可以用于大事件中的选择
            "bid": { //标段
                "0":{"bId":"bi2","name":"二标"},
                "1":{"bId":"bi3","name":"三标"},
                "2":{"bId":"bi4","name":"四标"},
            },
            "plots": { //地块
                "0": { "name": "地块A", "bId": "bi2", "plotsId":"pl1"},
                "1": { "name": "地块B", "bId": "bi2", "plotsId":"pl2"},
                "2": { "name": "地块C", "bId": "bi2", "plotsId":"pl3"},
                "3": { "name": "地块D", "bId": "bi3", "plotsId":"pl4"},
                "4": { "name": "地块E", "bId": "bi3", "plotsId":"pl5"},
                "5": { "name": "地块F", "bId": "bi4", "plotsId":"pl6"},
            },
            "paname": { //单体名称
                "0": {"name": "图书馆", "plotsId": "pl1","panameId":"pa1" },
                "1": {"name": "学生服务中心", "plotsId": "pl1","panameId":"pa2" },
                "2": {"name": "医科组团", "plotsId": "pl2","panameId":"pa3" },
                "3": {"name": "西区组团", "plotsId": "pl3","panameId":"pa4" },
                "4": {"name": "高级住宅", "plotsId": "pl4","panameId":"pa5" },
                "5": {"name": "西区公寓", "plotsId": "pl4","panameId":"pa6" },
                "6": {"name": "科研楼", "plotsId": "pl5","panameId":"pa7" },
                "7": {"name": "档案楼", "plotsId": "pl6","panameId":"pa8" },
            },
            "build_id": { // 栋号 楼层量 责任人
                "0":{"name": "5#", "floor": "-1~10", "resp": "黄志斌", "wid": "", "panameId":"pa1", "buId":"bu1"},
                "1":{"name": "2#", "floor": "1-3", "resp": "陈彪", "wid": "", "panameId":"pa2", "buId":"bu2"},
                "2":{"name": "20#", "floor": "-1~9", "resp": "王刚", "wid": "", "panameId":"pa3", "buId":"bu3"},
                "3":{"name": "21#", "floor": "1~8", "resp": "官珊瑚", "wid": "", "panameId":"pa3", "buId":"bu4"},
                "4":{"name": "22#", "floor": "1~1", "resp": "曾谋", "wid": "", "panameId":"pa3", "buId":"bu5"},
                "5":{"name": "23#", "floor": "1~1", "resp": "刘伟", "wid": "", "panameId":"pa3", "buId":"bu6"},
                "6":{"name": "A栋", "floor": "1~1", "resp": "黄元威", "wid": "", "panameId":"pa4", "buId":"bu7"},
                "7":{"name": "B栋", "floor": "1~1", "resp": "丘善章", "wid": "", "panameId":"pa4", "buId":"bu8"},
                "8":{"name": "C栋", "floor": "1~1", "resp": "谢扉", "wid": "", "panameId":"pa4", "buId":"bu9"},
                "9":{"name": "D栋", "floor": "1~1", "resp": "文峰盛", "wid": "", "panameId":"pa4", "buId":"bu10"},
                "10":{"name": "E栋", "floor": "1~2", "resp": "肖志坤", "wid": "", "panameId":"pa4", "buId":"bu11"},
                "11":{"name": "1#", "floor": "-1~3", "resp": "杨勇", "wid": "", "panameId":"pa5", "buId":"bu12"},
                "12":{"name": "6#", "floor": "1~2", "resp": "高尚德", "wid": "", "panameId":"pa6", "buId":"bu13"},
                "13":{"name": "Z栋", "floor": "1~2", "resp": "刁富贵", "wid": "", "panameId":"pa7", "buId":"bu14"},
                "14":{"name": "X栋", "floor": "-1~2", "resp": "汤念祖", "wid": "", "panameId":"pa8", "buId":"bu15"},
            }   
        },

        "plan_manager": { //计划管理中项目基础信息从最上边获取，下拉选框从单体模块中获取,该项目下的图片用于大事件
            "bu1":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1", "event_img_msg": { "name": "张三", "wid": "001", "img_list": ["/images/bigevent01.png"] } },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1", "event_img_msg": { "name": "张三", "wid": "001", "img_list": ["/images/bigevent01.png", "/images/bigevent02.png"] } },
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu2":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu3":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu4":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu5":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu6":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu7":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu8":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu9":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu10":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu11":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu12":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu13":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu14":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            "bu15":{
                "prepare":{
                    "e01":{"event":"办公区临设工程完成", "needtime": "2018.8.5", "complate_time":"2018.8.4", "buId": "bu1" },
                    "e02":{"event":"工友村临设工程完成", "needtime": "2018.8.6", "complate_time":"", "buId": "bu1"},
                    "e03":{"event":"围挡封闭完成", "needtime": "2018.8.10", "complate_time":"", "buId": "bu1"},
                    "e04":{"event":"现场三通一平完成", "needtime": "2018.8.20", "complate_time":"", "buId": "bu1"},
                    "e05":{"event":"基坑支护完成", "needtime": "2018.12.1", "complate_time":"2018.12.2", "buId": "bu1"},
                },
                "onBuild":{
                    "e06":{"event":"基坑开挖完成", "needtime": "2019.1.20", "complate_time":"", "buId": "bu1"},
                    "e07":{"event":"基础施工完成", "needtime": "2019.3.15", "complate_time":"", "buId": "bu1"},
                    "e08":{"event":"底板浇筑完成", "needtime": "2019.4.1", "complate_time":"", "buId": "bu1"},
                    "e09":{"event":"地下室封顶", "needtime": "2019.10.11", "complate_time":"", "buId": "bu1"},
                    "e10":{"event":"主体封顶", "needtime": "2019.12.29", "complate_time":"", "buId": "bu1"},
                    "e11":{"event":"屋面构筑物完成", "needtime": "2020.1.13", "complate_time":"", "buId": "bu1"},
                    "e12":{"event":"二次结构完成", "needtime": "2020.5.20", "complate_time":"", "buId": "bu1"},
                },
                "accept":{
                    "e13":{"event":"高低压通电", "needtime": "2020.7.2", "complate_time":"", "buId": "bu1"},
                    "e14":{"event":"排水验收", "needtime": "2020.7.10", "complate_time":"", "buId": "bu1"},
                    "e15":{"event":"给水接驳", "needtime": "2020.7.12", "complate_time":"", "buId": "bu1"},
                    "e16":{"event":"人防验收", "needtime": "2020.8.5", "complate_time":"", "buId": "bu1"},
                    "e17":{"event":"电梯验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e18":{"event":"燃气验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e19":{"event":"消防验收", "needtime": "2020.8.31", "complate_time":"", "buId": "bu1"},
                    "e20":{"event":"防雷验收", "needtime": "2020.8.9", "complate_time":"", "buId": "bu1"},
                    "e21":{"event":"节能验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e22":{"event":"环保验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e23":{"event":"水土保持验收", "needtime": "2020.8.14", "complate_time":"", "buId": "bu1"},
                    "e24":{"event":"规划验收", "needtime": "2020.8.6", "complate_time":"", "buId": "bu1"},
                    "e25":{"event":"档案验收", "needtime": "2020.8.30", "complate_time":"", "buId": "bu1"},
                    "e26":{"event":"竣工验收", "needtime": "2020.9.1", "complate_time":"", "buId": "bu1"},
                    "e27":{"event":"竣工备案", "needtime": "2020.9.20", "complate_time":"", "buId": "bu1"},
                    
                }
            },
            
        },
        "graph_schedule": { //形象进度 下拉选框从单体模块中获取，图片中的列表用于工程简报
            "schedule_info":{ //形象进度
                "0": {"floor": -1,"cur_sch": 2, "sch_msg":["架体搭设完成","钢筋绑扎完成"], "scId": "sc0","buId": "bu1"},
                "1": {"floor": 1,"cur_sch": 2, "sch_msg":["模板安装完成","混凝土浇筑完成"], "scId": "sc1","buId": "bu1"},
                "2": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc2","buId": "bu1"},
                "3": {"floor": 3,"cur_sch": 0, "sch_msg":[], "scId": "sc3","buId": "bu1"},
                "4": {"floor": 4,"cur_sch": 0, "sch_msg":[], "scId": "sc4","buId": "bu1"},
                "5": {"floor": 5,"cur_sch": 0, "sch_msg":[], "scId": "sc5","buId": "bu1"},
                "6": {"floor": 6,"cur_sch": 0, "sch_msg":[], "scId": "sc6","buId": "bu1"},
                "7": {"floor": 7,"cur_sch": 0, "sch_msg":[], "scId": "sc7","buId": "bu1"},
                "8": {"floor": 8,"cur_sch": 0, "sch_msg":[], "scId": "sc8","buId": "bu1"},
                "9": {"floor": 9,"cur_sch": 0, "sch_msg":[], "scId": "sc9","buId": "bu1"},
                "10": {"floor": 10,"cur_sch": 0, "sch_msg":[], "scId": "sc10","buId": "bu1"},
                "11": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc11","buId": "bu2"},
                "12": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc12","buId": "bu2"},
                "13": {"floor": 3,"cur_sch": 0, "sch_msg":[], "scId": "sc13","buId": "bu2"},
                "14": {"floor": -1,"cur_sch": 0, "sch_msg":[], "scId": "sc14","buId": "bu3"},
                "15": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc15","buId": "bu3"},
                "16": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc16","buId": "bu3"},
                "17": {"floor": 3,"cur_sch": 0, "sch_msg":[], "scId": "sc17","buId": "bu3"},
                "18": {"floor": 4,"cur_sch": 0, "sch_msg":[], "scId": "sc18","buId": "bu3"},
                "19": {"floor": 5,"cur_sch": 0, "sch_msg":[], "scId": "sc19","buId": "bu3"},
                "20": {"floor": 6,"cur_sch": 0, "sch_msg":[], "scId": "sc20","buId": "bu3"},
                "21": {"floor": 7,"cur_sch": 0, "sch_msg":[], "scId": "sc21","buId": "bu3"},
                "22": {"floor": 8,"cur_sch": 0, "sch_msg":[], "scId": "sc22","buId": "bu3"},
                "23": {"floor": 9,"cur_sch": 0, "sch_msg":[], "scId": "sc23","buId": "bu3"},
                "24": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc24","buId": "bu4"},
                "25": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc25","buId": "bu4"},
                "26": {"floor": 3,"cur_sch": 0, "sch_msg":[], "scId": "sc26","buId": "bu4"},
                "27": {"floor": 4,"cur_sch": 0, "sch_msg":[], "scId": "sc27","buId": "bu4"},
                "28": {"floor": 5,"cur_sch": 0, "sch_msg":[], "scId": "sc28","buId": "bu4"},
                "29": {"floor": 6,"cur_sch": 0, "sch_msg":[], "scId": "sc29","buId": "bu4"},
                "30": {"floor": 7,"cur_sch": 0, "sch_msg":[], "scId": "sc30","buId": "bu4"},
                "31": {"floor": 8,"cur_sch": 0, "sch_msg":[], "scId": "sc31","buId": "bu4"},
                "32": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc32","buId": "bu5"},
                "33": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc33","buId": "bu6"},
                "34": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc34","buId": "bu7"},
                "35": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc35","buId": "bu8"},
                "36": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc36","buId": "bu9"},
                "37": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc37","buId": "bu10"},
                "38": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc38","buId": "bu11"},
                "39": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc39","buId": "bu11"},
                "40": {"floor": -1,"cur_sch": 0, "sch_msg":[], "scId": "sc40","buId": "bu12"},
                "41": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc41","buId": "bu12"},
                "42": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc42","buId": "bu12"},
                "43": {"floor": 3,"cur_sch": 0, "sch_msg":[], "scId": "sc43","buId": "bu12"},
                "44": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc44","buId": "bu13"},
                "45": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc45","buId": "bu13"},
                "46": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc46","buId": "bu14"},
                "47": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc47","buId": "bu14"},
                "48": {"floor": -1,"cur_sch": 0, "sch_msg":[], "scId": "sc48","buId": "bu15"},
                "49": {"floor": 1,"cur_sch": 0, "sch_msg":[], "scId": "sc49","buId": "bu15"},
                "50": {"floor": 2,"cur_sch": 0, "sch_msg":[], "scId": "sc50","buId": "bu15"},
            },
            "schedule_msg":{
                "01": {"bull": "架体搭设完成","name": "张三","wid": "001","complate_time": "2018.8.4","bull_img_list": ["/icons/acceptance.png", "/icons/work.png"],"scId":"sc0"},
                "02": {"bull": "钢筋绑扎完成","name": "张三","wid": "001","complate_time": "2018.8.4","bull_img_list": ["/icons/work.png", "/icons/work.png"],"scId":"sc0"},
                "03": {"bull": "模板安装完成","name": "张三","wid": "001","complate_time": "2018.8.4","bull_img_list": ["/icons/work.png"],"scId":"sc1"},
                "04": {"bull": "混凝土浇筑完成","name": "张三","wid": "001","complate_time": "2018.8.4","bull_img_list": ["/icons/acceptance.png"],"scId":"sc1"},
            }
        }
    }
}
module.exports = {
    building: building,
    prepare: prepare,
    complate: complate,
    project_list: project_list

}