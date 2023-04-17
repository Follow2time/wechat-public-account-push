/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx666666186a77b1d1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7477f6e6e9198c98e6f5f9373186b3da',

  PROVINCE: '四川',
  CITY: '自贡',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆，宝贝老婆，乖乖，思思',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJm0J6gbGKgToxSWH_79-UEKQFS4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'rgzRsqNhVr1kX8T3sxs08Lcorlbud-Nfwgesqc3_GnM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝老婆', year: '2003', date: '06-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '思思乖乖', year: '2003', date: '07-28',
        },
        {
          type: '节日', name: '纪念日', year: '2022', date: '08-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-15' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'rgzRsqNhVr1kX8T3sxs08Lcorlbud-Nfwgesqc3_GnM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJm0J6ikSBixRDGxudEsjQj1_nAA',
    }
  ],

}

module.exports = USER_CONFIG

