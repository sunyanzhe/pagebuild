export default [
    {
        comId: 0,
        type: 'p',
        comType: 'Paragraph',
        desc: '文本',
        title: '文本',
        content: '这是默认的段落',
        "config": [{
            "paramKey": "text",
            "formType": "formInput",
            "value": "这是默认的段落"
        }, {
            "paramKey": "color",
            "formType": "formInput",
            "value": "#000"
        }]
    },
    {
        comId: 1,
        type: 'img',
        comType: 'Pic',
        desc: '图片',
        title: '图片',
        src: '../../assets/pic/default.png',
        "config": [{
            "id": 9674,
            "templateId": 1134,
            "elementId": 1174,
            "paramKey": "imgUrl",
            "paramKeyCh": "图片",
            "dictType": 1,
            "compType": "formPic",
            "compTypeUrl": null,
            "compTypeData": null,
            "orderNum": 1,
            "defaultValue": "",
            "isDisplay": 1
        }]
    },
    {
        comId: 2,
        type: 'space',
        comType: 'Space',
        desc: '间隔',
        title: '间隔',
        content: '这是间隔楼层',
        "config": [{
            "paramKey": "background",
            "formType": "formInput",
            "value": "transparent"
        }, {
            "paramKey": "height",
            "formType": "formInput",
            "value": "30px"
        }]
    },
    // {
    //     comId: 3,
    //     type: 'list',
    //     comType: 'list',
    //     desc: '列表',
    //     title: '列表',
    //     "config": [{
    //         "paramKey": "text1",
    //         "formType": "formInput"
    //     }, {
    //         "paramKey": "text2",
    //         "formType": "formInput"
    //     }, {
    //         "paramKey": "text3",
    //         "formType": "formInput"
    //     }]
    // }
]