dwfis.define("cookie", function (e, n) {
    function t(e, n) {
        var t = {};
        if (r(e) && e.length > 0)for (var o, i, a, f = n ? u : c, s = e.split(/;\s/g), p = 0, m = s.length; m > p; p++) {
            if (a = s[p].match(/([^=]+)=/i), a instanceof Array)try {
                o = u(a[1]), i = f(s[p].substring(a[1].length + 1))
            } catch (g) {
            } else o = u(s[p]), i = "";
            o && (t[o] = i)
        }
        return t
    }

    function r(e) {
        return "string" == typeof e
    }

    function o(e) {
        return r(e) && "" !== e
    }

    function i(e) {
        if (!o(e))throw new TypeError("Cookie name must be a non-empty string")
    }

    function c(e) {
        return e
    }

    var a = n, u = decodeURIComponent, f = encodeURIComponent;
    a.get = function (e, n) {
        i(e), n = "function" == typeof n ? {converter: n} : n || {};
        var r = t(document.cookie, !n.raw);
        return (n.converter || c)(r[e])
    }, a.set = function (e, n, t) {
        i(e), t = t || {};
        var r = t.expires, c = t.domain, a = t.path;
        t.raw || (n = f(String(n)));
        var u = e + "=" + n, s = r;
        return "number" == typeof s && (s = new Date, s.setDate(s.getDate() + r)), s instanceof Date && (u += "; expires=" + s.toUTCString()), o(c) && (u += "; domain=" + c), o(a) && (u += "; path=" + a), t.secure && (u += "; secure"), document.cookie = u, u
    }, a.remove = function (e, n) {
        return n = n || {}, n.expires = new Date(0), this.set(e, "", n)
    }
});
;dwfis.define("common", function (i, e, o) {
    function t() {
        var i = navigator.userAgent.toLowerCase(), e = {};
        return e.isAndroid = /android/g.test(i), e.isIphone = /ipod|iphone/g.test(i), e.isAnChrome = e.isAndroid && /chrome/g.test(i) ? !0 : !1, e.isAnWx = e.isAndroid && /micromessenger/g.test(i) ? !0 : !1, e.isIpWx = e.isIphone && /micromessenger/g.test(i) ? !0 : !1, e.isWx = /micromessenger/g.test(i) ? !0 : !1, e.isUc = /ucbrowser/g.test(i) ? !0 : !1, e.isQQBrowser = /qqbrowser/g.test(i) && !e.isWx ? !0 : !1, e.isWeibo = /weibo/g.test(i) ? !0 : !1, e.isIpad = /ipad/g.test(i) ? !0 : !1, e.isAndroidPad = document.documentElement.clientWidth > 440 && e.isAndroid ? !0 : !1, e.isIos9 = e.isIphone && /iphone os 9/g.test(i) ? !0 : !1, e
    }

    function n(i) {
        var e, o, n, s = navigator.userAgent, d = i ? i.getAttribute("data-chTopId") || window.TOPSID : window.TOPSID || "", a = i ? i.getAttribute("data-subChId") || window.SUBSID : window.SUBSID || "", r = window.SCREENTYPE || "", c = window.LIVESOURCETYPE || "", p = i ? i.getAttribute("data-gameId") || "" : window.STATINFO.gameid || "", w = i ? i.getAttribute("data-vid") : "", u = t();
        if (n = d ? "yykiwi://channel?sid=" + d + "&subSid=" + a + "&gameId=" + p : w ? "yykiwi://recordedVideo?cid=&vid=" + w : "yykiwi://homepage", u.isWeibo)return void $(".weibo_down_tips").show();
        if (/android/i.test(s)) {
            if (u.isAnWx)return void(location.href = "http://fusion.qq.com/cgi-bin/qzapps/unified_jump?appid=10328082&isTimeline=false&actionFlag=0&params=pname%3Dcom.duowan.kiwi%26versioncode%3D1700%26channelid%3D%26actionflag%3D0&from=singlemessage&isappinstalled=0");
            if (u.isAndroidPad)return void(location.href = "http://kiwi.pad.yy.com/apk/kiwipad.apk");
            e = new Date, setTimeout(function () {
                o = new Date, 100 > o - e && (location.href = "http://kiwi.pad.yy.com/c?key=" + (getQueryString("channel") || "wap001"))
            }, 25), document.getElementById("android_open").src = n
        } else if (/ipad|iphone|mac/i.test(s)) {
            if (u.isIos9) {
                var f = "https://secstatic.yy.com/huya/?sid=" + d + "&subsid=" + a + "&screenType=" + r + "&liveSourceType=" + c;
                return location.href = f, void(u.isIpWx && setTimeout(function () {
                    $("#wxTips").show(), setTimeout(function () {
                        $("#wxTips").hide()
                    }, 3e3)
                }, 2e3))
            }
            if (u.isIpWx)return void(location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.duowan.kiwi");
            if (u.isIpad)return void(location.href = "https://itunes.apple.com/app/id886103288");
            e = new Date, setTimeout(function () {
                o = new Date, 100 > o - e && (location.href = "https://itunes.apple.com/cn/app/wei/id871095743")
            }, 25), location.href = n
        }
    }

    var s = $(document);
    window.getQueryString = function (i) {
        for (var e = location.search.slice(1), o = e.split("&"), t = 0, n = o.length; n > t; t++) {
            var s = o[t].split("=");
            if (s[0] === i)return s[1]
        }
    };
    var d = getQueryString("offdown");
    if (window.isIndex && !d && localStorage.removeItem("offdown"), d || localStorage.getItem("offdown")) {
        localStorage.setItem("offdown", 1), $(document.body).addClass("offdown");
        var a = document.querySelector(".huya-header .menu a");
        a && (a.href += "?offdown=1");
        var r = document.querySelector(".huya-header .logo");
        r && (r.href += "?offdown=1")
    }
    window.isIndex || $("#down_div").show(), $("#wxTips").on("click", function () {
        $(this).hide()
    }), s.on("click", ".u-btn-down", function () {
        n(this)
    }), $(".weibo_down_tips").click(function () {
        $(this).hide()
    }), o.exports.browerInfo = t, o.exports.downLoadApp = n
});
;dwfis.define("backtotop", function () {
    !function (o) {
        o.BackToTop = {
            defaults: {text: "", timeEffect: "500", effectScroll: "linear", autoShow: !0},
            init: function (t) {
                opts = o.extend({}, o.BackToTop.defaults, t), o.BackToTop._renderLink(), $w = o(window).on("scrollTop scroll", function () {
                    var o = document.body.scrollTop || document.documentElement.scrollTop;
                    o > 0 ? dTop.fadeIn("fast") : dTop.fadeOut("fast")
                }), o("#totop").on("click", function (t) {
                    t.preventDefault(), o("body,html").animate({scrollTop: 0}, opts.timeEffect, opts.effectScroll)
                })
            },
            _renderLink: function () {
                dTop = o("<a/>", {
                    id: "totop",
                    href: "#body",
                    html: "<i>" + opts.text + "</i>"
                }).prependTo("body"), opts.autoShow || dTop.show()
            }
        }, BackToTop = function (t) {
            o.BackToTop.init(t)
        }
    }(jQuery)
});
;dwfis.define("header", function () {
    function e() {
        $(window).scrollTop() < 50 && ($(".huya-header").css({position: "absolute"}), $(".huya-header").show(), t = !0)
    }

    $(".m-header").on("click", ".menu--toggle", function () {
        $(this).toggleClass("menu--toggle--close");
        var e = $(".menu");
        e.hasClass("nav-toggle") ? (e.removeClass("nav-toggle"), setTimeout(function () {
            e.hide()
        }, 300), $("#m-container").css("padding-top", "50px")) : (e.show(), setTimeout(function () {
            e.addClass("nav-toggle")
        }, 20), $("#m-container").css("padding-top", "100px"))
    });
    var t = !0;
    $.getScript("http://assets.dwstatic.com/project/boxgame/1.0.0/js/hiido_stat.js", function () {
        var e = {act: "webevent", eventid: null, value: 1, eventype: 1};
        $("#linkHiido").click(function (t) {
            t.preventDefault(), e.eventid = 10006635, window.appHiido.stat(e), setTimeout(function () {
                window.location.href = "http://www.duowan.com/m"
            }, 200)
        })
    }), window.touchendTimeOut = e
});
;dwfis.define("hiido_static", function (e, i, t) {
    var n = window, o = (n._hiidoDebug || !1, {
        domain: "ylog.hiido.com",
        ipPrefix: "183.61.2.",
        ips: [91, 92, 94, 95, 96, 97, 98],
        getServerUrl: function (e) {
            e = e || this.domain;
            var i = location.protocol, t = "j.gif?";
            return i + "//" + e + "/" + t
        },
        randomIp: function () {
            var e = Math.random(), i = Math.round(e * (this.ips.length - 1)), t = this.ips[i];
            return this.ipPrefix + t
        },
        getParam: function (e) {
            var i = e, t = [];
            i.time = parseInt(1 * new Date / 1e3), i.ui = this.getCookie("hiido_ui"), i.username = this.getCookie("username");
            for (h in i)i.hasOwnProperty(h) && t.push(encodeURIComponent(h) + "=" + (void 0 === i[h] || null === i[h] ? "" : encodeURIComponent(i[h])));
            return t.join("&")
        },
        send: function (e) {
            var i = new Image;
            i.src = e
        },
        getCookie: function (e) {
            var i, t = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (i = document.cookie.match(t)) ? unescape(i[2]) : null
        }
    }), r = {
        stat: function (e) {
            if (!e)return !1;
            var i = o.getServerUrl(), t = o.getParam(e), n = i + t, r = o.getServerUrl(o.randomIp()) + t;
            o.send(n, r)
        }
    };
    "object" == typeof t && (t.exports = r), window.appHiido = r;
    $("body").on("click", ".hiido_stat", function () {
        var e = {
            act: "webevent",
            eventid: $(this).attr("hiido_code"),
            value: 1,
            class1: "live",
            class2: $(this).attr("hiido_class2"),
            eventype: 1,
            uid: ""
        };
        window.appHiido.stat(e)
    })
});
;dwfis.define("chatlive", function (o, n, t) {
    function e() {
        this.init()
    }

    var s = function (o, n) {
        this._option = $.extend({
            topsid: "99425467",
            subsid: "2337216815",
            yyuid: "73274903",
            ISDEBUG: !1
        }, o), this.init(n)
    };
    s.prototype = {
        init: function (o) {
            var n = this, t = n._option;
            console.log(t), n.$chatOuter = $("#chatArea"), n.$chatMask = $(".chat_mask"), n.common = o;
            var s = document.documentElement.clientHeight - 50 - $(".video0").height() - 45;
            n.$chatOuter.css("height", s), n.$chatMask.css("height", s - 45), $(".chat_banner").show(), n.tanmu = new e, n.bindEvent(), n.broadcast(t)
        }, bindEvent: function () {
            var o = this;
            $(".chat_banner")[0].addEventListener("touchstart", function () {
            }), $(".subcribe_btn").on("touchend", function () {
                o.showPop("chat_pop_sub", "\u4e3b\u64ad\u9080\u7ea6\uff0c\u8ba2\u9605\u8d70\u4e00\u6ce2\uff01", "1"), $(".anchor_info_mask").show()
            }), $(".chat_pop_close").on("touchstart", function (n) {
                n.stopPropagation(), $(".chat_pop").attr("class", "chat_pop").hide(), $(".anchor_info_mask").hide(), o.$chatMask.hide()
            }), $(".chat_pop").on("touchend", function () {
                o.common.downLoadApp()
            }), $(".chat_show_pop_speak").on("touchend", function () {
                o.showPop("chat_pop_speak", "\u4e0e\u89c2\u4f17\u4e00\u8d77\u5237\u7206\u5f39\u5e55\uff01")
            }), $(".chat_show_pop_gift").on("touchend", function () {
                o.showPop("chat_pop_gift", "\u9001\u793c\u7ed9\u4e3b\u64ad\uff0c\u5f70\u663e\u4f60\u9738\u6c14\uff01")
            }), $(".chat_pop_open")[0].addEventListener("touchend", function (n) {
                n.stopPropagation(), o.common.downLoadApp()
            }), $(".chat_btn")[0].addEventListener("touchend", function () {
                o.common.downLoadApp()
            })
        }, showPop: function (o, n, t) {
            var e = this;
            e.$chatMask.show(), "1" == t ? $(".chat_pop").addClass(o).show() : ($(".chat_pop").attr("class", "chat_pop").hide(), $(".anchor_info_mask").hide(), $(".chat_pop").eq(0).addClass(o).show(), $(".chat_pop").eq(1).hide()), $(".chat_pop_txt").html(n), e.common.downLoadApp()
        }, broadcast: function (o) {
            function n() {
                var o = new HUYA.LiveLaunchReq;
                o.tId = a, o.tLiveUB.eSource = HUYA.ELiveSource.WEB_HUYA, i.sendWup("liveui", "doLaunch", o)
            }

            function t() {
                var o = new HUYA.WSUserInfo;
                o.lUid = G.yyuid, o.bAnonymous = 0 == G.yyuid, o.sGuid = a.sGuid, o.sToken = "", o.lTid = G.topsid, o.lSid = G.subsid, o.lGroupId = 0, o.lGroupType = 0, i.sendRegister(o)
            }

            function e() {
                var o = new HUYA.UserChannelReq;
                o.tId = a, o.lTopcid = G.topsid, o.lSubcid = G.subsid, o.sSendContent = "", console.log("\u8ba2\u9605\u9891\u9053\uff1a", G.topsid, G.subsid), i.sendWup("liveui", "userIn", o)
            }

            function s() {
                var o = new HUYA.GetPropsListReq;
                o.tUserId = a, o.sMd5 = "", o.iTemplateType = HUYA.EClientTemplateType.TPL_PC, o.sVersion = "", console.log("send_init"), i.sendWup("PropsUIServer", "getPropsList", o)
            }

            G = o;
            var i = new TafHandler, a = new HUYA.UserId, c = this;
            i.addListener("WEBSOCKET_CONNECTED", function () {
                a.lUid = G.yyuid, a.sGuid = "", a.sToken = "", a.sHuYaUA = "webh5&1.0.0&websocket", a.sCookie = document.cookie, n(), s()
            }), i.addListener("doLaunch", function (o) {
                a.sGuid = o.sGuid, t(), e()
            }), i.addListener("WSRegisterRsp", function () {
            }), i.addListener("userIn", function (o) {
                console.log("<<< \u6210\u529f\u8fdb\u5165\u9891\u9053 ", o)
            }), i.addListener("1003", function (o) {
                var n = {type: 0, nick: o.tSender.sSenderNick, msg: o.sMsg};
                c.tanmu.receive(n)
            }), i.addListener("6501", function (o) {
                console.log("6501", o);
                var n = o.iItemType.toString(), t = {
                    type: 1,
                    nick: o.sSenderNick,
                    propName: c.tanmu.propsInfo[n].propName,
                    icon: c.tanmu.propsInfo[n].propIcon,
                    count: o.iItemCount
                };
                c.tanmu.receive(t)
            }), i.addListener("6502", function (o) {
                console.log("6502", o)
            }), i.addListener("getPropsList", function (o) {
                console.log("daoju-", o);
                var n = o.vPropsItemList.value;
                $.each(n, function (o, n) {
                    c.tanmu.propsInfo[n.iPropsId] = {
                        propId: n.iPropsId,
                        propName: n.sPropsName,
                        propIcon: n.vPropsIdentity.value[0].sPropsPic24.split("&")[0]
                    }
                })
            })
        }
    }, e.prototype = {
        init: function () {
            var o = this;
            o.tanmuUl = $("#chatArea ul"), o.isGotoBottom = !0, o.msgCount = 0, o.propsInfo = {}, o.tanmuScroll = new IScroll("#chatArea", {
                scrollbars: !1,
                mouseWheel: !0,
                interactiveScrollbars: !0,
                shrinkScrollbars: "scale",
                fadeScrollbars: !0
            }), o.bindEvent()
        }, bindEvent: function () {
            var o = this;
            o.tanmuScroll.on("scrollStart", function () {
                o.isGotoBottom = !1
            }), o.tanmuScroll.on("scrollEnd", function () {
                o.isGotoBottom = this.y > this.maxScrollY + 60 ? !1 : !0
            })
        }, isGoToBottom: function () {
        }, receive: function (o) {
            var n = this, t = "";
            0 == o.type ? t = '<li class="normal"><span class="nick">' + o.nick + '</span><span class="fuhao">\uff1a</span> ' + o.msg + "</li>" : 1 == o.type && (t = '<li class="prop"><span class="nick">' + o.nick + '</span> \u9001\u51fa <img  src="' + o.icon + '"/> <span class="nick">' + o.count + "</span></li>"), n.appendList(t)
        }, appendList: function (o) {
            var n = this;
            n.blankHtml += o, n.msgCount++, n.timer || (n.timer = setTimeout(function () {
                n.tanmuUl.append(n.blankHtml), n.timer = null, n.blankHtml = "", n.msgCount >= 100 && (n.tanmuUl.find("li").slice(0, 50).remove(), n.msgCount = n.msgCount - 50, n.isGotoBottom = !0), n.tanmuScroll.refresh(), n.isGotoBottom && n.tanmuScroll.scrollTo(0, n.tanmuScroll.maxScrollY, 0, null)
            }, 100))
        }, blankHtml: "", timer: null
    }, t.exports = s
});
;dwfis.define("uadetector", function (e, o) {
    var n = function (e) {
        var o = e.navigator.userAgent, n = o.match(/iPad.*OS\s([\d_]+)/), i = o.match(/iPod(.*OS\s([\d_]+))?/), t = !n && o.match(/iPhone\sOS\s([\d_]+)/), r = -1 !== o.indexOf("Macintosh"), s = o.match(/Kindle\/([\d.]+)/), a = -1 !== o.indexOf("PlayBook"), c = o.match(/BlackBerry.*Version\/([\d.]+)/), d = o.match(/BB10.*Version\/([\d.]+)/), h = /nokia/i.test(o), l = o.match(/Web[kK]it[\/]{0,1}([\d.]+)/), m = o.match(/Chrome\/([\d.]+)/) || o.match(/CriOS\/([\d.]+)/), u = o.match(/Firefox\/([\d.]+)/), p = o.match(/MSIE\s([\d.]+)/) || o.match(/Trident\/.*;\srv:([\d.]+)/), f = o.match(/Opera\sMini\/([\d.]+)/), v = o.match(/Windows\sNT\s([\d.]+)/), w = /Windows\sCE/.test(o), b = /Windows\sMobile/.test(o), O = o.match(/Windows\sPhone\s([\d.]+)/), S = o.match(/Android;?[\s\/]+([\d.]+)?/), g = -1 !== o.indexOf("Linux"), M = o.match(/Mac\sOS\sX\s([\d_.]+)/), k = o.match(/Symbian(OS)?\/([\d.]+)/), x = {}, B = {}, P = {}, _ = {};
        return t && !i && (x.ios = P.iphone = !0, x.version = t[1].replace(/_/g, ".")), n && (x.ios = P.ipad = !0, x.version = n[1].replace(/_/g, ".")), i && (x.ios = P.ipod = !0, x.version = i[2] ? i[2].replace(/_/g, ".") : null), r && (P.mac = !0), s && (x.kindle = P.kindle = !0, x.version = s[1]), a && (P.playbook = !0), c && (x.blackberry = !0, x.version = c[1]), d && (x.bb10 = !0, x.version = d[1]), l && (B.webkit = !0, B.version = l[1]), m && (B.chrome = !0, B.version = m[1]), u && (B.firefox = !0, B.version = u[1]), p && (B.ie = !0, B.version = p[1]), f && (B.operamini = !0, B.version = f[1]), v && (x.windows = !0, x.version = v[1]), w && (x.windowsce = !0), b && (x.windowsmobile = !0), O && (x.windowsphone = !0, x.version = O[1]), S && (x.android = !0, x.version = S[1]), g && !x.android && (x.linux = !0), M && (x.macosx = !0, x.version = M[1] ? M[1].replace(/_/g, ".") : null), k && (x.symbian = !0, x.version = k[2]), _.touch = "ontouchstart" in document, P.tablet = !x.windows && !!(n || a || S && !o.match(/Mobile/) || /iPad/.test(o) || u && /Tablet/.test(o) || p && !/Phone/.test(o) && /Touch/.test(o)), P.phone = !x.windows && !(P.tablet || !(S || t || i || c || d || w || b || O || m && /Android/.test(o) || m && /CriOS\/([\d.]+)/.test(o) || u && /Mobile/.test(o) || p && /Touch/.test(o))), P.tablet || P.phone || (h || k || -1 !== o.indexOf("MIDP")) && (P.phone = !0), P.mobile = !x.windows && (P.tablet || P.phone || /mobile/i.test(o) || /tablet/i.test(o) || /phone/i.test(o)), P.pc = !P.mobile, {
            isDevice: function (e) {
                return !!P[e]
            }, isOS: function (e) {
                return !!x[e]
            }, isBrowser: function (e) {
                return !!B[e]
            }, osVer: function () {
                return x.version || ""
            }, browserVer: function () {
                return B.version || ""
            }, hasFeature: function (e) {
                return !!_[e]
            }, print: function (e) {
                var n, i = o;
                i += "<h1>Device</h1>";
                for (n in P)i += "<p>" + n + ": " + P[n] + "</p>";
                i += "<h1>OS</h1>";
                for (n in x)i += "<p>" + n + ": " + x[n] + "</p>";
                i += "<h1>Browser</h1>";
                for (n in B)i += "<p>" + n + ": " + B[n] + "</p>";
                i += "<h1>Feature</h1>";
                for (n in _)i += "<p>" + n + ": " + _[n] + "</p>";
                return e && ("innerHTML" in e ? e.innerHTML = i : "function" == typeof e.html && e.html(i)), i
            }, info: function () {
                e.console && (console.log("Device: %o", P), console.log("OS: %o", x), console.log("Browser: %o", B), console.log("Feature: %o", _))
            }
        }
    }(window);
    n = o
});
;dwfis.define("huyawap-report", function (t, a, e) {
    function r(t, a) {
        var t = t || {}, e = {
            pro: "huyawap",
            pas: YA.cookie.get("username") || "",
            yyuid: YA.cookie.get("yyuid") || "",
            pageType: "root",
            rso: "",
            rso_desc: "",
            eid: "",
            eid_desc: "",
            hasvedio: "0",
            wap_domain: "wap",
            wid: window._hiido_wid
        };
        for (var r in t)e[r] = t[r];
        if (window.ya = new YA(e.pro, e.pas, {
                pageType: e.pageType,
                yyuid: e.yyuid
            }), "string" == typeof a)ya.setExtParam(a); else if ("object" == typeof a)for (var i = 0; i < a.length; i++)ya.setExtParam(a[i]);
        ya.setExtParam("watchvedio=0"), ya.reportProductStartUp(e), ya.startProductHeartbeat(e), ya.reportProductEvent(e), $("body").on("click", ".clickstat", function () {
            var t = $(this).attr("stat-ext-parma-hasvedio") || "hasvedio=0", a = $(this).attr("stat-ext-parma-watchvedio") || "watchvedio=0", e = $(this).attr("data-uid"), r = $(this).attr("eid"), i = $(this).attr("eid_desc");
            e = e ? "/" + e : "";
            var o = e ? "/\u4e3b\u64aduid" : "";
            e && window.localStorage.setItem("live_room_stat_ref", (r + e).split("k/")[1]), ya.setExtParam(t + "&" + a), ya.reportProductEvent({
                eid: r + e,
                eid_desc: i + o
            })
        })
    }

    function i(t) {
        var a, e = {};
        if (-1 != (a = t.indexOf("?")))for (var r = t.substring(a + 1, t.length), i = r.split("&"), o = [], d = 0, s = i.length; s > d; d++)o = i[d].split("="), e[o[0]] = o[1];
        return e
    }

    e.exports = {report: r, parseQueryString: i}
});
;dwfis.define("weixinShare", function (n, e, i) {
    function t(n, e, i) {
        return $.ajax({url: n, dataType: "jsonp", jsonpCallback: i})
    }

    function a(n, e) {
        this.data = $.extend({
            title: "", desc: "", link: "", imgUrl: "", type: "", dataUrl: "", success: function () {
            }, cancel: function () {
            }
        }, n), this.isDebug = e || !1, this.init()
    }

    $.extend(a.prototype, {
        init: function () {
            var n = this;
            t("http://m.huya.com/index.php?m=WechatJsApi&do=getSignature", {}, "getSign").done(function (e) {
                var i = e;
                n.getWeixinJs(i)
            })
        }, getWeixinJs: function (n) {
            var e = this;
            $.getScript("http://res.wx.qq.com/open/js/jweixin-1.0.0.js", function () {
                e.weixinInit(n)
            })
        }, weixinInit: function (n) {
            var e = this;
            wx.config({
                debug: e.isDebug,
                appId: n.appId,
                timestamp: n.timestamp,
                nonceStr: n.nonceStr,
                signature: n.signature,
                jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
            }), console.log(n), wx.ready(function () {
                wx.onMenuShareTimeline(e.data), wx.onMenuShareAppMessage(e.data), wx.onMenuShareQQ(e.data), wx.onMenuShareWeibo(e.data), wx.onMenuShareQZone(e.data)
            }), wx.error(function () {
            })
        }
    }), window.WeixinShare = a, i.exports = a
});
;dwfis.define("videoUI", function (e, t, i) {
    var o = function (e, t) {
        this.init(e, t)
    };
    o.prototype = {
        init: function (e, t) {
            var i = this;
            i.$video = $("#html5player-video"), 0 != i.$video.length && (i.$playBtn = $(".new_play_btn"), i.statInfo = e, i.browerInfo = t, i.$videoLoading = $(".video-loading"), i.statInfo.eid = "click/liveroom/play", i.statInfo.eid_desc = "\u76f4\u64ad\u64ad\u653e\u6309\u94ae", i.$videoBar = $("#videoBottomBar"), i.$controlBtn = $("#videoControl"), i.$fullScreenBtn = $("#videoFS"), i.$videoUiOuter = $(".video_ui"), i.isPlaying = !1, i.useUI = !1, i.isShowedBar = !1, i.barTimmer = null, t.isAndroid && (t.isWeixin || t.isQQ) ? (i.useUI = !0, i.$videoUiOuter.show()) : (i.$videoUiOuter.remove(), i.$video.attr("controls", "controls")), i.bindEvent())
        }, bindEvent: function () {
            var e = this;
            e.$video[0].addEventListener("play", function () {
                if (!e.browerInfo.isUc) {
                    $(".clickstat").attr("stat-ext-parma-watchvedio", "watchvedio=1"), ya.setExtParam("watchvedio=1"), ya.reportProductEvent(e.statInfo);
                    var t, i = this, o = i.currentTime;
                    e.$videoLoading.show(), t = setInterval(function () {
                        if (i.currentTime > o) {
                            if (e.$videoLoading.hide(), clearInterval(t), !e.useUI)return;
                            e.$videoBar.show(), e.isPlaying = !0, e.isShowedBar = !0, e.$controlBtn.removeClass("stop_it"), e.barTimmer = setTimeout(function () {
                                e.$videoBar.css("-webkit-transform", "translate(0, 100%)"), e.isShowedBar = !1
                            }, 5e3)
                        }
                    }, 10)
                }
            }), e.useUI && (e.$videoUiOuter.on("touchstart", function () {
                e.isPlaying && (e.isShowedBar ? (clearTimeout(e.barTimmer), e.$videoBar.css("-webkit-transform", "translate(0, 100%)"), e.isShowedBar = !1) : (e.$videoBar.css("-webkit-transform", "translate(0, 0)"), e.isShowedBar = !0, e.barTimmer = setTimeout(function () {
                    e.$videoBar.css("-webkit-transform", "translate(0, 100%)"), e.isShowedBar = !1
                }, 5e3)))
            }), e.$playBtn.on("touchstart", function (t) {
                t.stopPropagation(), e.$video[0].play(), $(this).hide()
            }), e.$controlBtn.on("touchstart", function (t) {
                t.stopPropagation(), e.isPlaying ? (e.$video[0].pause(), clearTimeout(e.barTimmer)) : (e.$video[0].play(), e.barTimmer = setTimeout(function () {
                    e.$videoBar.css("-webkit-transform", "translate(0, 100%)"), e.isShowedBar = !1
                }, 5e3))
            }), e.$video[0].addEventListener("pause", function () {
                e.isPlaying = !1, e.$videoBar.css("-webkit-transform", "translate(0, 0)"), e.isShowedBar = !0, e.$controlBtn.addClass("stop_it")
            }), e.$fullScreenBtn.click(function () {
                e.$video[0].requestFullscreen ? e.$video[0].requestFullscreen() : e.$video[0].webkitRequestFullscreen ? e.$video[0].webkitRequestFullscreen() : e.$video[0].webkitEnterFullscreen && e.$video[0].webkitEnterFullscreen()
            }))
        }
    }, i.exports = o
});
;dwfis.define("app/live", function (e, o) {
    function i(e) {
        var o = navigator.userAgent.toLowerCase(), i = o.substr(o.indexOf("android") + 8, 3);
        return o.indexOf("android") && parseFloat(i) < e ? !0 : !1
    }

    function t() {
        var e = navigator.userAgent.toLowerCase(), o = {};
        return o.isAndroid = /android/g.test(e), o.isIphone = /ipod|iphone|ipad/g.test(e), o.isAnChrome = o.isAndroid && /chrome/g.test(e) ? !0 : !1, o.isWeixin = /micromessenger/g.test(e), o.isUc = /ucbrowser/g.test(e) ? !0 : !1, o.isQQ = /qq\//g.test(e), o
    }

    function n() {
        var e = location.href;
        return e.indexOf("wcs") > -1 || e.indexOf("1486578378") > -1 ? !0 : !1
    }

    function a() {
        var e;
        e = document.documentElement.clientWidth / 640, y = liveTotalCount, n() ? $(".live_online_txt").html('<span>\u864e\u7259APP\u5df2\u9001\u51fa\u5956\u54c1 <span id="live_online_span"  style="color: #ff2400">' + liveTotalCount + "</span> \u4ef6</span>") : $.ajax("http://api.m.huya.com/Config/get?key=live_install_tips", {
            type: "get",
            dataType: "jsonp",
            jsonp: "jsonp",
            jsonpCallback: "barTips",
            success: function (e) {
                0 == e.code && $("#live_online_span0").text(e.data.content)
            }
        }), $("#video").css("height", "" + 360 * e + "px"), $("#live_online_btn").css("width", "" + 130 * e + "px"), $("#live_online_btn").css("height", "" + 54 * e + "px"), $("#live_online_btn").css("top", "" + (85 * e - 54 * e) / 2 + "px"), $("#live_online_btn_img").css("width", "" + 130 * e + "px"), $("#live_online_btn_img").css("height", "" + 54 * e + "px"), $("#live_online").css("display", "block");
        var o = window.STATINFO;
        switch ($(".clickstat").attr("stat-ext-parma-hasvedio", "hasvedio=" + o.hasvedio), $(".clickstat").attr("stat-ext-parma-watchvedio", "watchvedio=0"), window.gameName) {
            case"\u82f1\u96c4\u8054\u76df":
                o.eid = "pageview/lol_room", o.eid_desc = "pageview/\u82f1\u96c4\u8054\u76df\u76f4\u64ad\u9875", x.report(o, "watchvedio=0");
                break;
            case"dota 2":
                o.eid = "pageview/dota2_room", o.eid_desc = "pageview/dota2\u76f4\u64ad\u9875", x.report(o, "watchvedio=0");
                break;
            case"\u5730\u4e0b\u57ce\u4e0e\u52c7\u58eb":
                o.eid = "pageview/DNF_room", o.eid_desc = "pageview/\u5730\u4e0b\u57ce\u4e0e\u52c7\u58eb\u76f4\u64ad\u9875", x.report(o, "watchvedio=0");
                break;
            case"\u7a7f\u8d8a\u706b\u7ebf":
                o.eid = "pageview/cf_room", o.eid_desc = "pageview/\u7a7f\u8d8a\u706b\u7ebf\u76f4\u64ad\u9875", x.report(o, "watchvedio=0");
                break;
            default:
                o.eid = "pageview/other_room", o.eid_desc = "pageview/\u5176\u4f59\u6e38\u620f\u7684\u76f4\u64ad\u95f4", x.report(o, "watchvedio=0")
        }
        n() && ($(".wcs_down").show(), $(".wrapper").css("padding-bottom", "31.25%"), $(".recom-list h2").text("\u864e\u7259\u76f4\u64ad\u5176\u4ed6\u7cbe\u5f69\u5185\u5bb9")), C.init(), t().isWeixin || $("#weixinShareBtn").hide();
        var i = window.liveRoomName ? window.liveRoomName + "\u9080\u60a8\u901f\u6765\u89c2\u770b\u864e\u7259\u76f4\u64ad" : window.videoTitle + "\u9080\u60a8\u901f\u6765\u89c2\u770b\u864e\u7259\u76f4\u64ad", a = {
            title: i,
            desc: "\u864e\u7259\u76f4\u64ad-\u4e2d\u56fd\u9886\u5148\u7684\u4e92\u52a8\u76f4\u64ad\u5e73\u53f0\u3002\u70ed\u95e8\u8d5b\u4e8b\u3001\u9876\u5c16\u6218\u961f\u3001\u5927\u795e\u7f8e\u5973\u966a\u4f60\u4e00\u8d77\u73a9\u3002",
            link: location.href,
            imgUrl: window.picURL,
            success: function () {
            }
        };
        new k(a, !1);
        var s = $(".more_nav li");
        s.on("click", function () {
            var e;
            if (e = s.length > 2 ? [window.mainHost + "g/" + window.gameHostName, window.mainHost + "g/100023", window.mainHost + "g/100022"] : [window.mainHost + "g/100023", window.mainHost + "g/100022"], !$(this).hasClass("on")) {
                s.removeClass("on"), $(this).addClass("on");
                var o = $(this).index().toString();
                $(".more_content").find(".g-list-main").hide(), $(".more_content").find("[data-recnum=" + o + "]").show(), $(".show_more").attr("href", e[$(this).index()])
            }
        }), window.ISLIVE && new _({topsid: window.TOPSID, subsid: window.SUBSID, yyuid: window.STATINFO.ayyuid}, u);
        var c = !1;
        $(".live_tab li").click(function () {
            if (!$(this).hasClass("on")) {
                var e = $(this).index();
                switch ($(".live_tab li").removeClass("on"), $(this).addClass("on"), e) {
                    case 0:
                        $("#chatArea").show(), $(".anchor_info").hide(), $(".subcribe_btn").attr("type", "0"), $(window).scrollTop(0);
                        break;
                    case 1:
                        if ($("#chatArea").hide(), $(".anchor_info").show(), $(".subcribe_btn").attr("type", "1"), c)return;
                        $(".notice_content").height() > 45 && ($(".notice_content").addClass("notice_hidden"), $(".show_notice_btn_bar").show())
                }
            }
        }), $(".notice_content").height() > 45 && ($(".notice_content").addClass("notice_hidden"), $(".show_notice_btn_bar").show()), $(".show_notice_btn").click(function () {
            $(".notice_content").hasClass("show_all") ? ($(".notice_content").removeClass("show_all"), $(this).removeClass("close")) : ($(".notice_content").addClass("show_all"), $(this).addClass("close"))
        }), $("#wxTips").click(function () {
            $(this).hide()
        }), new T(o, t()), setTimeout(function () {
            $(window).scrollTop(1)
        }, 1)
    }

    function s() {
        var e = new Date;
        $('<img src="http://ylog.hiido.com/j.gif?act=webhuyawap2&uid=&time=' + e.getTime() + "&ui=0.9597643008455634&lt=" + f + '&type=2">'), f++
    }

    function c() {
        0 != b && $("#live_online_span").text("" + parseInt(y - b / 2 + Math.random() * b))
    }

    function r() {
        $("#share").css("display", "block")
    }

    function d() {
        $("#share").css("display", "none")
    }

    function l() {
        title = "" + videoTitle + "-\u864e\u7259\u76f4\u64ad", rLink = "http://" + window.location.host + "/" + g, setTimeout(function () {
            window.open("http://service.weibo.com/share/share.php?pic=&title=" + encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " ")) + "&url=" + encodeURIComponent(rLink) + "&pic=" + encodeURIComponent(picURL))
        }, 0)
    }

    function h() {
        $("#share").css("display", "none"), $("#wx_share").css("display", "block"), $("#html5player-video").css("display", "none")
    }

    function p() {
        title = "" + videoTitle, rLink = "http://" + window.location.host + "/" + g, setTimeout(function () {
            window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=" + title + "&url=" + rLink + "&desc=" + encodeURIComponent("\u8fd9\u64cd\u4f5c\u4e5f\u592a\u70ab\u4e86\u5427\uff01\u5feb\u6765\u770b\u770b\uff01") + "&title=" + encodeURIComponent("\u864e\u7259\u76f4\u64ad") + "&site=" + encodeURIComponent(rLink) + "&pics=" + encodeURIComponent(picURL))
        }, 0)
    }

    function w() {
        var e = {
            url: "http://" + window.location.host + "/" + g,
            desc: "",
            title: "",
            summary: "",
            pics: "",
            flash: "",
            site: "",
            style: "201",
            width: 32,
            height: 32
        }, o = [];
        for (var i in e)o.push(i + "=" + encodeURIComponent(e[i] || ""));
        setTimeout(function () {
            window.open("http://connect.qq.com/widget/shareqq/index.html?" + o.join("&"))
        }, 0)
    }

    function v() {
        $("#wx_share").css("display", "none"), $("#html5player-video").css("display", "block")
    }

    var m = e("cookie"), u = e("common");
    e("backtotop"), e("header"), e("hiido_static");
    var _ = e("chatlive");
    uadetector = e("uadetector");
    var g, f = 0, b = 0, y = 0, x = (getQueryString("from"), e("huyawap-report")), k = e("weixinShare"), T = e("videoUI");
    $(function () {
        i(4) && ($(".video-con video").remove(), $(".video-con .toload-app").show());
        var e = document.location.href.split("/");
        g = e[e.length - 1], setTimeout(a, 100), setInterval(s, 6e4), setInterval(c, 5e3), s()
    });
    var C = {
        init: function () {
            var e, o = this;
            $("#downLoadPopBtn").click(function () {
                o.cancelPop()
            }), $.ajax("http://api.m.huya.com/Config/get?key=app_install_tips", {
                type: "get",
                dataType: "jsonp",
                jsonp: "jsonp",
                jsonpCallback: "downLoadTips",
                success: function (e) {
                    0 == e.code && ($("#downLoadPop h1").html(e.data.title), $("#downLoadPop p").html(e.data.content))
                }
            });
            var i = $("#html5player-video");
            i.length > 0 && i[0].addEventListener("play", function () {
                e = setInterval(function () {
                    o.open(), clearInterval(e)
                }, 3e4)
            })
        }, open: function () {
            var e = this;
            e.isOver() ? $("#downLoadPop").show() : console.log("\u6ca1\u53cd\u5e94")
        }, isOver: function () {
            for (var e, o = (new Date).getTime(), i = [], t = 0; 4 > t; t++)e = m.get("overTime" + t), e && i.push(e);
            var n = i.length, a = !1;
            if (0 == n)a = !0; else if (n > 0 && 4 > n) {
                var s = n - 1;
                console.log(o, n), a = o - parseInt(i[s], 10) > 0 ? !0 : !1
            } else a = !1;
            return this.OverTimeArr = i, a
        }, cancelPop: function () {
            var e = 864e5, o = this.OverTimeArr, i = o.length, t = new Date((new Date).toDateString()).getTime();
            switch (i) {
                case 0:
                    m.set("overTime0", t + e, {expires: 40});
                    break;
                case 1:
                    m.set("overTime1", t + 7 * e, {expires: 40});
                    break;
                case 2:
                    m.set("overTime2", t + 30 * e, {expires: 40});
                    break;
                case 3:
                    m.set("overTime3", t + 40 * e, {expires: 40})
            }
            $("#downLoadPop").hide()
        }
    };
    o.onShare = r, o.onHideShare = d, o.onShareWB = l, o.onShareWX = h, o.onShareQQSpace = p, o.onShareQQ = w, o.onHideWXShare = v
});