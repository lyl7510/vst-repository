const {wrapper} = require('webpack-mocker-api')

const mockerApis = {
    'POST /api/admin/depart/select': {
        returnCode: 0,
        returnMessage: "操作成功",
        bean: {},
        beans: [
            {
                id: 1,
                name: "技术部",
                children: [
                    {
                        id: 11,
                        name: "技术一部"
                    },
                    {
                        id: 12,
                        name: "技术二部"
                    }
                ]
            },
            {
                id: 2,
                name: "市场部",
                children: [
                    {
                        id: 21,
                        name: "市场一部"
                    },
                    {
                        id: 22,
                        name: "市场二部"
                    }
                ]
            }
        ]
    },
    "POST /api/admin/organ/list": {
        returnCode: 0,
        returnMessage: "操作成功",
        bean: {},
        beans: [
            {
                id: 1,
                name: "南京亚信",
                children:[
                    {
                        id: 11,
                        name: "南京亚信移动事业部"
                    },
                    {
                        id: 12,
                        name: "南京亚信联通事业部"
                    }
                ]
            }, {
                id: 2,
                name: "北京亚信",
                children:[
                    {
                        id: 21,
                        name: "北京亚信移动事业部"
                    },
                    {
                        id: 22,
                        name: "北京亚信联通事业部"
                    }
                ]
            }
        ]
    }
}

module.exports = wrapper(mockerApis)