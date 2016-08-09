var Taf = require("./model/Taf.js");
var HUYA = require("./model/HUYA.js");
var TafMx = require("./model/TafMx.js");
/**
 * Created by dg on 2016/8/1.
 */
var WebSocketClient = require('websocket').client;
G = {topsid: "85068257", subsid: "85068257", yyuid: "1271256459", ISDEBUG: false};

function TafHandler() {
    function e() {
        var e = "ws://ws.api.huya.com:80";
        // G.ISDEBUG && (e = "ws://183.60.218.225:16258"), console.info("%cconnecting " + e+c("#0000E3"));
        // s.onopen = t,
        // s.onclose = a,
        // s.onerror = o,
        // s.onmessage = r;
        s = new WebSocketClient();
        s.on('connect', function (connection) {
            n=function (e) {
                connection.send(e)
            };
            s.on('error', function (e) {
                console.warn("%c=== WebSocket Error ===" + e)
            });
            s.on('close', function (n) {
                i.connected = !1, console.warn(n), 10 > f ? (f++, console.warn("%c=== WebSocket 重连" + f), setTimeout(e, 1e3)) : console.warn("%c=== WebSocket重连次数超标 ===");
            });
            s.on('message', function (e) {
                var n = new FileReader;
                n.onload = function () {
                    var e = this.result, n = new Taf.JceInputStream(e), t = new HUYA.WebSocketCommand;
                    switch (t.readFrom(n), t.iCmdType) {
                        case HUYA.EWebSocketCommandType.EWSCmd_RegisterRsp:
                            n = new Taf.JceInputStream(t.vData.buffer);
                            var a = new HUYA.WSRegisterRsp;
                            a.readFrom(n), console.log("%c<<<<<<< %crspRegister" + a), i.dispatch("WSRegisterRsp", a);
                            break;
                        case HUYA.EWebSocketCommandType.EWSCmd_WupRsp:
                            var o = new Taf.Wup;
                            o.decode(t.vData.buffer);
                            var r = TafMx.WupMapping[o.sFuncName];
                            if (r) {
                                r = new r;
                                var s = o.newdata.get("tRsp") ? "tRsp" : "tResp";
                                o.readStruct(s, r, TafMx.WupMapping[o.sFuncName]), console.log("%c<<<<<<< %crspWup:%c " + r), i.dispatch(o.sFuncName, r)
                            } else i.dispatch(o.sFuncName);
                            break;
                        case HUYA.EWebSocketCommandType.EWSCmdS2C_MsgPushReq:
                            n = new Taf.JceInputStream(t.vData.buffer);
                            var f = new HUYA.WSPushMessage;
                            f.readFrom(n), n = new Taf.JceInputStream(f.sMsg.buffer);
                            var u = TafMx.UriMapping[f.iUri];
                            u && (u = new u, u.readFrom(n), console.log("%c<<<<<<< %crspMsgPush, %ciUri=" + f.iUri + u), i.dispatch(f.iUri, u));
                            break;
                        case HUYA.EWebSocketCommandType.EWSCmdS2C_HeartBeatAck:
                            console.log("%c<<<<<<< rspHeartBeat: " + (new Date).getTime());
                            break;
                        case HUYA.EWebSocketCommandType.EWSCmdS2C_VerifyCookieRsp:
                            n = new Taf.JceInputStream(t.vData.buffer);
                            var p = new HUYA.WSVerifyCookieRsp;
                            p.readFrom(n);
                            var d = 0 == p.iValidate;
                            console.log("%c<<<<<<< %cVerifyCookie" + (d ? "通过！" : "失败！") + p);
                            break;
                        default:
                            console.warn("%c<<<<<<< Not matched CmdType: " + t.iCmdType)
                    }
                }, n.readAsArrayBuffer(e.data)
            });
            console.log("=== WebSocket Connected ==="), f = 0, i.connected = !0, i.dispatch("WEBSOCKET_CONNECTED");

        });

        s.connect(e);
    }






    this.connected = !1;
    var s, i = this, f = 0, n;
    e(), this.sendWup = function (e, t, a) {
        var o = new Taf.Wup;
        o.setServant(e), o.setFunc(t), o.writeStruct("tReq", a);
        var r = new HUYA.WebSocketCommand;
        r.iCmdType = HUYA.EWebSocketCommandType.EWSCmd_WupReq, r.vData = o.encode();
        var s = new Taf.JceOutputStream;
        r.writeTo(s);
        n(s.getBuffer());
        console.log("%c>>>>>>> %creqWup: %c" + t+ a)
    }, this.sendRegister = function (e) {
        var t = new Taf.JceOutputStream;
        e.writeTo(t);
        var a = new HUYA.WebSocketCommand;
        a.iCmdType = HUYA.EWebSocketCommandType.EWSCmd_RegisterReq, a.vData = t.getBinBuffer(), t = new Taf.JceOutputStream, a.writeTo(t), n(t.getBuffer()), console.log("%c>>>>>>> %creqRegister:"  + e)
    };
    var u = {};
    this.addListener = function (e, n) {
        return "undefined" == typeof u[e] && (u[e] = []), "function" == typeof n && u[e].push(n), this
    }, this.dispatch = function (e, n) {
        var t = u[e];
        if (t instanceof Array) {
            for (var a = 0, o = t.length; o > a; a += 1)"function" == typeof t[a] && t[a](n);
            0 == t.length
        }
        return this
    }, this.removeListener = function (e, n) {
        var t = u[e];
        if ("string" == typeof e && t instanceof Array)if ("function" == typeof n) {
            for (var a = 0, o = t.length; o > a; a += 1)if (t[a].fn === n) {
                u[e].splice(a, 1);
                break
            }
        } else delete u[e];
        return this
    }


}

function broadcast() {
    function n() {
        var o = new HUYA.LiveLaunchReq;
        o.tId = a,
            o.tLiveUB.eSource = HUYA.ELiveSource.WEB_HUYA,
            i.sendWup("liveui", "doLaunch", o)
    }

    function t() {
        var o = new HUYA.WSUserInfo;
        o.lUid = G.yyuid,
            o.bAnonymous = 0 == G.yyuid,
            o.sGuid = a.sGuid,
            o.sToken = "",
            o.lTid = G.topsid,
            o.lSid = G.subsid,
            o.lGroupId = 0,
            o.lGroupType = 0,
            i.sendRegister(o)
    }

    function e() {
        var o = new HUYA.UserChannelReq;
        o.tId = a,
            o.lTopcid = G.topsid,
            o.lSubcid = G.subsid,
            o.sSendContent = "",
            console.log("\u8ba2\u9605\u9891\u9053\uff1a", G.topsid, G.subsid),
            i.sendWup("liveui", "userIn", o)
    }

    function s() {
        var o = new HUYA.GetPropsListReq;
        o.tUserId = a,
            o.sMd5 = "",
            o.iTemplateType = HUYA.EClientTemplateType.TPL_PC,
            o.sVersion = "",
            console.log("send_init"),
            i.sendWup("PropsUIServer", "getPropsList", o)
    }

//        G = o;
    var i = new TafHandler
        , a = new HUYA.UserId
        , c = this;
    i.addListener("WEBSOCKET_CONNECTED", function () {
        a.lUid = G.yyuid,
            a.sGuid = "",
            a.sToken = "",
            a.sHuYaUA = "webh5&1.0.0&websocket",
            a.sCookie = "", n(),
            s()
    });
    i.addListener("doLaunch", function (o) {
        a.sGuid = o.sGuid,
            t(),
            e()
    });
    i.addListener("WSRegisterRsp", function () {
    });
    i.addListener("userIn", function (o) {
        console.log("<<< \u6210\u529f\u8fdb\u5165\u9891\u9053 ", o)
    });
    i.addListener("1003", function (o) {
        /**
         * {"tUserId":{"lUid":928671229,"sGuid":"","sToken":"","sHuYaUA":"","sCookie":""},"lTid":77259038,"lSid":2535706816,"lPid":0,"sMsg":"66666666","tSender":{"lSenderUid":928671229,"lYYid":892739619,"iSenderRole":0,"iSenderGender":1,"sSenderNick":"丶凹凸曼*"},"tNoble":{"iNobleLevel":0,"lDeadLine":0},"tFans":{"iFansLevel":0,"sFansNick":"","sFansPresenterNick":""},"tVipSimle":{"sVipSmileKey":"","sVipSmilePath":""},"tStamp":{"sSealIconPath":"","sKeyImg":"","lStampTime":0,"lStampEndTime":0,"iValidity":0,"sStampUserNick":""},"tMass":{"iGoldHostLevel":-1,"iSuperPupleLevel":0,"iVipLevel":0,"iUserLevel":0,"iIsVipRed":0,"iAtSomebody":0,"sAtSomebodyNick":"","ibarrageColor":0,"sDevSourceType":"adr"},"mReserver":{"kproto":{},"vproto":{},"value":{}},"iChatCache":0,"iRoomAuditLevel":4}
         * @type {{type: number, nick: *, msg: *}}
         */
        var n = {
            type: 0,
            nick: o.tSender.sSenderNick,
            msg: o.sMsg
        };
        var lSenderUid = o.tSender.lSenderUid;
        var lYYid = o.tSender.lYYid;
        var lUid = o.tUserId.lUid;
        var lTid = o.lTid;
        var lSid = o.lSid;


        // var tr = "<tr><td>" +
        //     "</td><td>0</td><td>" + o.tSender.sSenderNick +
        //     "</td><td>" + o.sMsg +
        //     "</td><td>" + lSenderUid +
        //     "</td><td>" + lYYid +
        //     "</td><td>" + lTid +
        //     "</td><td>" + lUid +
        //     "</td><td>" + lSid +
        //     "</td>></tr>";
        // $("#table1").append(tr);
        window.scrollTo(0, document.body.scrollHeight)
//            testdiv.innerHTML="<p>" +0+
//                    " <em>" +o.tSender.sSenderNick+
//                    "</em> " +o.sMsg+
//                    "</p>";

        c.tanmu.receive(n)
    });
    i.addListener("6501", function (o) {
        console.log("6501", o);
        var n = o.iItemType.toString()
            , t = {
            type: 1,
            nick: o.sSenderNick,
            propName: c.tanmu.propsInfo[n].propName,
            icon: c.tanmu.propsInfo[n].propIcon,
            count: o.iItemCount
        };

        c.tanmu.receive(t)
    });
    i.addListener("6502", function (o) {
        console.log("6502", o)
    });
}
broadcast();