var HUYA = require("./HUYA.js");
/**
 * Created by dg on 2016/8/9.
 */
var TafMx = TafMx || {};
TafMx.UriMapping = {
    1002: HUYA.NobleEnterNotice,
    1003: HUYA.NobleSpeakBrst,
    1005: HUYA.NobleEnterNotice,
    6501: HUYA.SendItemSubBroadcastPacket,
    6052: HUYA.SendItemNoticeWordBroadcastPacket,
    6200: HUYA.EnterPushInfo,
    6210: HUYA.VipBarListRsp,
    6220: HUYA.WeekRankListRsp,
    6221: HUYA.WeekRankEnterBanner,
    6230: HUYA.FansRankListRsp,
    6231: HUYA.BadgeInfo,
    6232: HUYA.BadgeScoreChanged,
    6233: HUYA.FansInfoNotice,
    6234: HUYA.UserGiftNotice,
    6250: HUYA.GiftBarRsp
}, TafMx.WupMapping = {doLaunch: HUYA.LiveLaunchRsp, speak: HUYA.NobleSpeakResp, getPropsList: HUYA.GetPropsListRsp};
module.exports=TafMx;