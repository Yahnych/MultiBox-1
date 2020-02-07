// ==UserScript==
// @name         MultiBox | XLX - 2020
// @namespace    XLX - 2020
// @version      v4
// @description  Full MultiBox Tool  , Agar.io , 3rb.be MultiBox Tools!
// @author       XLX - 2020
// @include      /^http://(?:3rb)(?:\.be).+?/
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@9
// @require      http://www.3rblx.ga/Cyper_WriterPlus.js
// @require      http://jscolor.com/release/2.0/jscolor-2.0.5/jscolor.js
// @require      http://3rblx.ga/ReaderPlus.js
// @require      http://3rblx.ga/beta2.rotate.min.js
// @run-at       document-end
// @grant        none
// ==/UserScript==
/**
 * @name (MultiBox | XLX 2020)
 * @author  (XLX - 2020)
 * @copyright (c) (XLX - 2020)
 * @Discord (Cyper#8941)
 * @version (v4)
 * @LAST_UPDATED (2020-1-31)
 * @see <https://github.com/Cyper-New>
 */

var global , {postMessage} = (window);

if (typeof CanvasRenderingContext2D.prototype.strokeRect !== "function" || typeof window.DataView !== "function" || typeof ArrayBuffer !== "function" || typeof window.cells != "object" || typeof Uint8Array != "function") {
    Swal.fire({
        icon: "error",
        title: (`الاداة لا تعمل مع متصفحك الحالي! \n Cannot Run MultiBox`),
        text: (`الرجاء تغير متصفح او تحديثة! | \n Install Another Browser Or Update it!`)
    });
    console.error("Can\'t not run MultiBox .!");
    stop();
};

addEventListener("load" ,  () => {

if (navigator.userAgent.match(/firefox/i)) stop() | alert("MultiBox Tool Cannot Support FireFox \n أداة لا تدعم متصفح فاير فوكس!"); // cannot support firefox
if (grecaptcha.getResponse() == []) stop() | confirm("The MultiBox Tool Cannot Run With reCaptcha , Solve it and Reload The Page! \n هناك كابتشا تحقق يرجى أكمال مرحلة تحقق وعند أنتهاء تحديث الصفحة !");

} , false)

window.MultiBoxKeys = {
    "MultiBoxSwitch": ("TAB"), // Switch MultiBox Key \  زر ملتي بوكس
    "Split": ("Q"), // Spliting Key \  زر أنقسام
    "Feed": ("R") // feeding Key  \ اخراج كتلة زر!
}

// https://htmlcolorcodes.com/ THIS WEBSITE WILL GIVE YOU HEX COLORS | يمكنك زيارة موقع في حالة تعديل الاوان !

var USE_DESGIEN = (true), // true = change mass or food and virus colors \ true = تغير الوان الخلايا والفيروس الى لون محدد

    BotSideColor = ("red"), // الوان حدود البوت

    BackGroundColor = ("#153C3D"), // لون خلفية

    BorderColor = ("blue"), // Border Color \ لون حدود

    Follow_ME_When_Switch_MultiBox_Key = (false) , // يتبع أشارة الماوس اذا ضغطت على زر ملتي | the bot follows the mouse when u switch to multibox bot

    NodesSidesColor = ("#9830914f"), // لون  حدود جميع الخلايا والفيروس

    NodesColor = ("#36f20529"), // لون جميع الاخلايا والفيروس

    DEBUGALERT = (true); // alert as debug method , أشعارك عن حالة اداة ملتي بوكس


setInterval(() => {
    try {
        BackGroundColor = "#" + document.querySelector('#backgroundColorZ').value
        NodesColor = "#" + document.querySelector('#CellsColors').value
        NodesSidesColor = "#" + document.querySelector('#PlayerSidesColors').value
        BotSideColor = "#" + document.querySelector('#PlayerSidesColors').value
    } catch (e) {}
    const {
        info: {
            name: LeaderBoardName
        }
    } = (stats);
    settings.darkTheme = true
    window.stats = stats
  var Timer  = new Date().toLocaleString('en-SA', { hour: 'numeric', hour12: !0x0 , "OPEN_xnxx.com":true }).replace(/(?=(\w+){2})/ , `:${new Date().getMinutes()}:${new Date().getSeconds()} `).replace(/( )/g , ``);
    stats.info.name = (Timer);
}, {})
//checker for core loading in cigar2 only!
if(document.readyState != 'loading') {
document.querySelector('#XLX-Skins').value = '';
    try {
        eval(document.documentElement.innerHTML.match(/\<script src=\"assets\/js\/main\_out\.js\"><\/script\>/gi))
    } catch (t) {
        location.reload(t.stack)
    }
};
var Link=document.createElement('link');Link.href='https://fonts.googleapis.com/css?family=Oswald&display=swap';document.head.append(Link);
setInterval(()=>{if(!(window.screenTop&&window.screenY)){drawMinimap=function drawMinimap(){if(border['centerX']!==0x0||border[_0x14f1('0x47')]!==0x0||!settings['showMinimap'])return;mainCtx[_0x14f1('0x99')]();var _0x1ba7fd=0xc8;var _0x3fa19d=_0x1ba7fd*(border[_0x14f1('0x73')]/border['height']);var _0x5e5940=_0x1ba7fd*(border[_0x14f1('0x44')]/border[_0x14f1('0x73')]);var _0x5c19a5=mainCanvas[_0x14f1('0x73')]/viewMult-_0x3fa19d;var _0x1e73f2=mainCanvas[_0x14f1('0x44')]/viewMult-_0x5e5940;mainCtx['fillStyle']="white";mainCtx[_0x14f1('0x87')]=0.8;mainCtx[_0x14f1('0x88')](_0x5c19a5,_0x1e73f2,_0x3fa19d,_0x5e5940);mainCtx['globalAlpha']=0x1;var _0x2349fb=0x5;var _0x366c6c=['ABCDE',_0x14f1('0xad')];var _0xc002af=_0x3fa19d/_0x2349fb;var _0x16c9ee=_0x5e5940/_0x2349fb;var _0xdd5964=Math[_0x14f1('0x86')](_0xc002af,_0x16c9ee)/0x3;mainCtx[_0x14f1('0x80')]='red';mainCtx[_0x14f1('0xae')]='middle';mainCtx['textAlign']=_0x14f1('0xaf');mainCtx[_0x14f1('0x7f')]=_0xdd5964+_0x14f1('0xb0');for(var _0x2af574=0x0;_0x2af574<_0x2349fb;_0x2af574++){var _0x3dc90b=_0xc002af/0x2+_0x2af574*_0xc002af;for(var _0x623012=0x0;_0x623012<_0x2349fb;_0x623012++){var _0x65f00d=_0x16c9ee/0x2+_0x623012*_0x16c9ee;mainCtx['fillText'](''+_0x366c6c[0x0][_0x2af574]+_0x366c6c[0x1][_0x623012],_0x5c19a5+_0x3dc90b,_0x1e73f2+_0x65f00d)}}var _0xce4000=_0x3fa19d/border[_0x14f1('0x73')];var _0x31a303=_0x5e5940/border['height'];var _0xc27362=border[_0x14f1('0x73')]/0x2;var _0x5590d9=border[_0x14f1('0x44')]/0x2;var _0x2baebf=_0x5c19a5+(cameraX+_0xc27362)*_0xce4000;var _0x225a76=_0x1e73f2+(cameraY+_0x5590d9)*_0x31a303;mainCtx['beginPath']();if(cells['mine'][_0x14f1('0x6')]){for(var _0x2af574=0x0;_0x2af574<cells[_0x14f1('0x3d')][_0x14f1('0x6')];_0x2af574++){var _0x1d67ff=cells[_0x14f1('0x32')][cells[_0x14f1('0x3d')][_0x2af574]];if(_0x1d67ff){mainCtx[_0x14f1('0x80')]="red";var _0x3dc90b=_0x5c19a5+(_0x1d67ff['x']+_0xc27362)*_0xce4000;var _0x65f00d=_0x1e73f2+(_0x1d67ff['y']+_0x5590d9)*_0x31a303;var _0x216a2d=_0x1d67ff['s']*_0xce4000+0x1;mainCtx[_0x14f1('0x9d')](_0x3dc90b+_0x216a2d,_0x65f00d);mainCtx[_0x14f1('0x8d')](_0x3dc90b,_0x65f00d,_0x216a2d,0x0,PI_2)}}}if(cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]]){mainCtx[_0x14f1('0x80')]="black";var _0x3dc90b=_0x5c19a5+(cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]].x+_0xc27362)*_0xce4000;var _0x65f00d=_0x1e73f2+(cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]].y+_0x5590d9)*_0x31a303;var _0x216a2d=cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]].s*_0xce4000+0x1;mainCtx[_0x14f1('0x9d')](_0x3dc90b+_0x216a2d,_0x65f00d);mainCtx[_0x14f1('0x8d')](_0x3dc90b,_0x65f00d,_0x216a2d,0x0,PI_2)}mainCtx[_0x14f1('0x8f')]();mainCtx[_0x14f1('0xa0')]();if(MultiBoxMode==true){mainCtx.save();mainCtx.font="25px Oswald";mainCtx.textAlign="center";mainCtx.fillStyle="blue";mainCtx.fillText(`You are Controlling The Bot! \n أنت تتحكم في بوت الان!`,mainCanvas.width/2+200,10);mainCtx.restore()}mainCtx.save();mainCtx.font="25px Oswald";mainCtx.textAlign="center";mainCtx.fillStyle="red";if(cells.mine.length==0)mainCtx.fillText('There is no Cells!',mainCanvas.width/2+150,790);else mainCtx.fillText(`CELLS : ${cells.mine.length}`,mainCanvas.width/2+170,790);mainCtx.restore()}}else{drawMinimap=function drawMinimap(){if(border['centerX']!==0x0||border[_0x14f1('0x47')]!==0x0||!settings['showMinimap'])return;mainCtx[_0x14f1('0x99')]();var _0x1ba7fd=0xc8;var _0x3fa19d=_0x1ba7fd*(border[_0x14f1('0x73')]/border['height']);var _0x5e5940=_0x1ba7fd*(border[_0x14f1('0x44')]/border[_0x14f1('0x73')]);var _0x5c19a5=mainCanvas[_0x14f1('0x73')]/viewMult-_0x3fa19d;var _0x1e73f2=mainCanvas[_0x14f1('0x44')]/viewMult-_0x5e5940;mainCtx['fillStyle']="white";mainCtx[_0x14f1('0x87')]=0.8;mainCtx[_0x14f1('0x88')](_0x5c19a5,_0x1e73f2,_0x3fa19d,_0x5e5940);mainCtx['globalAlpha']=0x1;var _0x2349fb=0x5;var _0x366c6c=['ABCDE',_0x14f1('0xad')];var _0xc002af=_0x3fa19d/_0x2349fb;var _0x16c9ee=_0x5e5940/_0x2349fb;var _0xdd5964=Math[_0x14f1('0x86')](_0xc002af,_0x16c9ee)/0x3;mainCtx[_0x14f1('0x80')]='red';mainCtx[_0x14f1('0xae')]='middle';mainCtx['textAlign']=_0x14f1('0xaf');mainCtx[_0x14f1('0x7f')]=_0xdd5964+_0x14f1('0xb0');for(var _0x2af574=0x0;_0x2af574<_0x2349fb;_0x2af574++){var _0x3dc90b=_0xc002af/0x2+_0x2af574*_0xc002af;for(var _0x623012=0x0;_0x623012<_0x2349fb;_0x623012++){var _0x65f00d=_0x16c9ee/0x2+_0x623012*_0x16c9ee;mainCtx['fillText'](''+_0x366c6c[0x0][_0x2af574]+_0x366c6c[0x1][_0x623012],_0x5c19a5+_0x3dc90b,_0x1e73f2+_0x65f00d)}}var _0xce4000=_0x3fa19d/border[_0x14f1('0x73')];var _0x31a303=_0x5e5940/border['height'];var _0xc27362=border[_0x14f1('0x73')]/0x2;var _0x5590d9=border[_0x14f1('0x44')]/0x2;var _0x2baebf=_0x5c19a5+(cameraX+_0xc27362)*_0xce4000;var _0x225a76=_0x1e73f2+(cameraY+_0x5590d9)*_0x31a303;mainCtx['beginPath']();if(cells['mine'][_0x14f1('0x6')]){for(var _0x2af574=0x0;_0x2af574<cells[_0x14f1('0x3d')][_0x14f1('0x6')];_0x2af574++){var _0x1d67ff=cells[_0x14f1('0x32')][cells[_0x14f1('0x3d')][_0x2af574]];if(_0x1d67ff){mainCtx[_0x14f1('0x80')]="red";var _0x3dc90b=_0x5c19a5+(_0x1d67ff['x']+_0xc27362)*_0xce4000;var _0x65f00d=_0x1e73f2+(_0x1d67ff['y']+_0x5590d9)*_0x31a303;var _0x216a2d=_0x1d67ff['s']*_0xce4000+0x1;mainCtx[_0x14f1('0x9d')](_0x3dc90b+_0x216a2d,_0x65f00d);mainCtx[_0x14f1('0x8d')](_0x3dc90b,_0x65f00d,_0x216a2d,0x0,PI_2)}}}if(cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]]){mainCtx[_0x14f1('0x80')]="black";var _0x3dc90b=_0x5c19a5+(cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]].x+_0xc27362)*_0xce4000;var _0x65f00d=_0x1e73f2+(cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]].y+_0x5590d9)*_0x31a303;var _0x216a2d=cells.byId[MultiBoxStatus.MyId[MultiBoxStatus.MyId.length-1]].s*_0xce4000+0x1;mainCtx[_0x14f1('0x9d')](_0x3dc90b+_0x216a2d,_0x65f00d);mainCtx[_0x14f1('0x8d')](_0x3dc90b,_0x65f00d,_0x216a2d,0x0,PI_2)}mainCtx[_0x14f1('0x8f')]();mainCtx[_0x14f1('0xa0')]();if(MultiBoxMode==true){mainCtx.save();mainCtx.font="25px Oswald";mainCtx.textAlign="center";mainCtx.fillStyle="blue";mainCtx.fillText(`You are Controlling The Bot! \n أنت تتحكم في بوت الان!`,mainCanvas.width/2+140,10);mainCtx.restore()}mainCtx.save();mainCtx.font="25px Oswald";mainCtx.textAlign="center";mainCtx.fillStyle="red";if(cells.mine.length==0)mainCtx.fillText('There is no Cells!',mainCanvas.width/2+120,790);else mainCtx.fillText(`CELLS : ${cells.mine.length}`,mainCanvas.width/2+120,880);mainCtx.restore()}}},!!{});
if (BackGroundColor == "false") null;
else drawBorders = function drawBorders() {
   mainCtx[_0x14f1("0xab")] = BackGroundColor, mainCtx.lineWidth = 268435455, mainCtx[_0x14f1("0xac")] = _0x14f1("0xa8"), mainCtx.lineJoin = _0x14f1("0xa8"), mainCtx[_0x14f1("0x8c")](), mainCtx[_0x14f1("0x9d")](border[_0x14f1("0x41")], border.top), mainCtx[_0x14f1("0x9e")](border[_0x14f1("0x42")], border[_0x14f1("0x45")]), mainCtx[_0x14f1("0x9e")](border.right, border[_0x14f1("0x43")]), mainCtx[_0x14f1("0x9e")](border[_0x14f1("0x41")], border.bottom), mainCtx.closePath(), mainCtx[_0x14f1("0x9f")]();mainCtx.strokeStyle=BorderColor;mainCtx.lineWidth=20;mainCtx.lineCap="round";mainCtx.lineJoin="round";mainCtx.beginPath();mainCtx.moveTo(border.left,border.top);mainCtx.lineTo(border.right,border.top);mainCtx.lineTo(border.right,border.bottom);mainCtx.lineTo(border.left,border.bottom);mainCtx.closePath();mainCtx.stroke();
};
const MultiBoxStatus = {
    MyId: [],
    X: NaN,
    Y: NaN,
    Score: NaN,
    Name: PLAYER_NAME,
    isAlive: false,
};
setInterval(async () => {
    if (USE_DESGIEN == true) {
        for (var allNodes of cells.list)
            if (allNodes.name === null) {
                allNodes.color = NodesColor;
                allNodes.sColor = NodesSidesColor
            }
        for (var AllUp = 0o0; AllUp < MultiBoxStatus.MyId.length; AllUp++) {
            for (var MyMultiBoxBot of cells.list)
                if (MyMultiBoxBot.id == MultiBoxStatus.MyId[AllUp]) {
                    if (MultiBoxMode == true) {
                        MyMultiBoxBot.sColor = BotSideColor
                        for (AllUp_ = 0o0; AllUp_ < cells.mine.length; AllUp_++) cells.byId[cells.mine].sColor = cells.byId[cells.mine[AllUp_]].color;
                    } else {
                        MyMultiBoxBot.sColor = MyMultiBoxBot.color;
                        for (AllUp_ = 0o0; AllUp_ < cells.mine.length; AllUp_++) cells.byId[cells.mine[AllUp_]].sColor = BotSideColor;
                    }
                }
        }
    };
    window.MultiBoxSwitchKey = (MultiBoxKeys.MultiBoxSwitch.match(/TAB/i) ? 0x9 : MultiBoxKeys.MultiBoxSwitch.toLocaleUpperCase().charCodeAt());
}, {});



var MultiBoxMode = false;
addEventListener('keydown', keys_ => {
    if (keys_.keyCode == MultiBoxSwitchKey && MultiBoxMode == false) return MultiBoxMode = true;
    else if (keys_.keyCode == MultiBoxSwitchKey && MultiBoxMode == true) return MultiBoxMode = false;
})
setInterval(() => {
    if (MultiBoxMode == true) return UINT8_CACHE = [];
    else UINT8_CACHE = {
        1: new Uint8Array([1]),
        17: new Uint8Array([17]),
        21: new Uint8Array([21]),
        18: new Uint8Array([18]),
        19: new Uint8Array([19]),
        22: new Uint8Array([22]),
        23: new Uint8Array([23]),
        24: new Uint8Array([24]),
        25: new Uint8Array([25]),
        254: new Uint8Array([254])
    };
}, !![])
addEventListener('keydown', k => {
    if (k.keyCode == 0x9) {
        //document.querySelector('canvas').focus() for fireFox and old browser  \ لأاجل فاير فوكس ,متصفح القديم
        document.querySelector('#chat_textbox').disabled = true
    }
})
addEventListener('keyup', k => {
    if (k.keyCode == 0x9) return document.querySelector('#chat_textbox').disabled = false
})
const ClientStatus = {
    MyId: [],
    Name: null,
    MouseX: NaN,
    MouseY: NaN,
    Score: stats.score,
    isAlive: !!(cells.mine | [])
};
window.ClientStatus = ClientStatus
var SKIN_NAME,
    SPAM_MSG,
    PLAYER_NAME = (null);
window.addEventListener('load', () => {
    if(!DEBUGALERT)return;
    setTimeout(() => {
        Swal.mixin({
            input: 'text',
            backdrop: `
rgba(28, 45, 95, 0.79)
    left top
    no-repeat
  `,
            confirmButtonText: 'التالي &rarr;',
            progressSteps: ['1', '2', '3']
        }).queue([{
                icon: "warning",
                title: 'ضع نص السبام هنا ! \n Put Spam Message Here!',
                text: "أذا كانت جودة الانترنت بطيئة من ممكن ضعف أستجابة الاداة \n      اذا كنت لاتريد تفعيل خاصية سبام اضغط التالي بدون كتابة اي  شيء!",
                confirmButtonColor: "red",
                cancelButtonColor: "green",
            },
            'ضع أسم السكن هنا ! \n Put The Player Skin Here!',
            'ضع اسم اللاعب هنا ! \n Put The Player Name Here'
        ]).then((result) => {
            if (result.value) {
                var Res = (result.value)
                SPAM_MSG = (Res[0o0]);
                SKIN_NAME = (Res[0o1]);
                PLAYER_NAME = (Res[0o2] ==  ( null || [] ) ? Res[0o2]  = "بدون اسم" : Res[0o2]);
                new MultiBox(InjectionSettings.URL, atob(Protocol), null); // connection
                Swal.fire({
                        icon: "question",
                        title: "هل تريد أشعارك بحالة الاداة؟",
                        showCancelButton: true,
                        cancelButtonColor: "red",
                        confirmButtonText: "أشعرني بحالة الاداة !",
                        confirmButtonColor: "green",
                        cancelButtonText: "الغاء أشعاري بحالة الاداة",
                    })
                    .then(ONCLICK => {
                        if (ONCLICK.value) DEBUGALERT == true
                        else DEBUGALERT == false
                    })

            }
        })
    }, 0o3001)
})
const PACKET255 = new Uint8Array([255, 1, 0, 0, 0]),
PACKET254 = new Uint8Array([254, 6, 0, 0, 0]);
var MultiBoxSetup = {

}

var InjectionSettings = {
    URL: null,
    buffer: NaN,
    target: new Proxy(WebSocket.prototype, {}),
    manager: NaN,
    isClientConnected: false
};
const Protocol = window[window['\x61\x74\x6F\x62']('YXRvYg')]('\124\124\116\113\141\125\170\164\123\155\170\154\121\121');
const Joseph = "JSpe";
const Injector = InjectionSettings.target;
Injector.Requests = (Injector.send);
Injector.send = function(packets) {
    this.Requests(packets);
    InjectionSettings.buffer = (new Uint8Array(packets.buffer));
    InjectionSettings.URL = (this.url["toString"]()["split"]("?")[0o0]); // with filter
    var viewbuffer = new DataView(packets.buffer);
    InjectionSettings.isClientConnected = this.readyState;
    /**
     *
     * @param {?buffer}
     *
     */
    const id_ = 0o0;
    switch (viewbuffer.getUint8(id_, !!0xFFC00558)) {
        case 0o20:
            InjectionSettings.manager = new Uint8Array(viewbuffer.buffer);
            ClientStatus.MouseX = (viewbuffer.getInt32(1, true))
            ClientStatus.MouseY = (viewbuffer.getInt32(5, true))
            ClientStatus.MyId = (cells.mine[cells.mine.length - 0x1]);
            ClientStatus.Name = localStorage.getItem('checkbox-0');
            break;
    };
}
/**
 * @class {function} (MultiBox)
 * @version (v4)
 * @param {String} WebSocket URL
 * @param {?String} protocol
 * @param {Number} Soon Will be Add .
 * @copyright (c)  Made By XLX - 2020
 */
class MultiBox extends WebSocket {
    static Status() {
        this.ip = window.MainMultiBoxServer.url;
        this.StatsCode = window.MainMultiBoxServer.readyState;
        this.isConnected = !!(window.MainMultiBoxServer.readyState != 0x2 || 0x3);
        return ({
            ip: window.MainMultiBoxServer.url,
            StatsCode: window.MainMultiBoxServer.readyState,
            isConnected: !!(window.MainMultiBoxServer.readyState),
        })
    };
    constructor(uri, CIA , key, ...isGay) {
        window.MainMultiBoxServer = super(uri, CIA);
        window.MainMultiBoxServer.binaryType = ('arraybuffer');
        this.uri = uri;
        this.CIA = CIA;
        this.key = key;
        if(isGay)stop();
        this.MultiBoxSettings = {
            onopen() {
                if (window.MainMultiBoxServer.readyState == 0o1) {
                    this.sendPacket(PACKET254);
                    this.sendPacket(PACKET255);
                    console.info("%c[MultiBox] : Connected", "color:green;background:#000;font-family:fantasy;font-size:25px;");
                    if (DEBUGALERT == true) {
                        Swal.fire({
                            icon: "success",
                            title: (`[MutliBox] : CONNECTED!`),
                            text: (`تم اتصال أداة ملتي بوكس في خادم`)
                        });
                    }
                }
            },
            onclose(reason) {
                if (reason) {
                    if (DEBUGALERT == true) {
                        Swal.fire({
                            icon: "error",
                            title: (`[MutliBox] : DISSCONNECTED!`),
                            text: (`تم أنفصال اداة ملتي بوكس عن الخادم! \n | السبب : ${reason.reason}`)
                        });
                    }
                    console.error(`[MutliBox] : DISSCONNECTED! | Reason : ${reason.reason}`);
                }
            },
            /**
             *@see <https://github/Cyper-New>
             *@copyright (c) XLX - 2020
             *@param {Number} interger bytes
             *@?param {?string} type of values
             */
            OnMessage(buffer) {
                var ViewPacket = new ReaderPlus(new DataView(buffer.data), 0, true)
                var ByteOffSet = ViewPacket.getUint8()
                var viewbuf = new DataView(buffer.data)
                switch (ByteOffSet) {
                    case 16:
                        var ClosePlayersId, size;
                        while (true) {
                            ClosePlayersId = ViewPacket.getUint32();
                            if (ClosePlayersId === 0) break;
                            MultiBoxStatus.ClosePlayers = (ClosePlayersId);
                            //   MultiBoxStatus.X = ViewPacket.getInt32()
                            //   MultiBoxStatus.Y = ViewPacket.getInt32()
                            //   size = ViewPacket.getUint16();   //i will fix it ASAP
                            //   MultiBoxStatus.Score = (~~(size * size / 100)); //i will fix it ASAP
                        }
                        break
                    case 32:
                        MultiBoxStatus.isAlive = false;
                        MultiBoxStatus.MyId.push(~~(ViewPacket.getUint32()))
                        break
                    case 20:
                        MultiBoxStatus.isAlive = (true);
                        MultiBoxStatus.MyId = ([]);
                }
            }
        }
        window.MainMultiBoxServer.onmessage = this.MultiBoxSettings.OnMessage
        window.MainMultiBoxServer.onclose = this.MultiBoxSettings.onclose
        window.MainMultiBoxServer.onopen = this.MultiBoxSettings.onopen
        this.sendPacket = window.MainMultiBoxServer.send.bind(this);
    }
   static Spawn(str) {
        this.str = str;
        MultiBoxStatus.Name = (this.str);
        var SpawnPacket = new WriterPlus(!!0xFB8C4CAD5);
        SpawnPacket.setUint8(0o0);
        SpawnPacket.setStringUTF8(str.concat(atob(Joseph)));
        return window.MainMultiBoxServer.sendPacket(new Uint8Array(SpawnPacket._b));
    }
   static sendPacket(Bytes) {}

   static get getURI() {
        return window.MainMultiBoxServer.url;
    }
    static Feed() {
        setTimeout(() => {
            if (MultiBoxMode == true) return window.MainMultiBoxServer.sendPacket(new Uint8Array([0x15]));
        }, {})
    }
    static Split() {
        setTimeout(() => {
            if (MultiBoxMode == true) return window.MainMultiBoxServer.sendPacket(new Uint8Array([0x11]));
        }, {})
    }
}



const Main = {
    keepAlive(val) {
        if (val) {
            setInterval(() => {
                if (MultiBoxMode == true) return window.MainMultiBoxServer.sendPacket(InjectionSettings.manager);
                else if(Follow_ME_When_Switch_MultiBox_Key == false) return window.MainMultiBoxServer.sendPacket(InjectionSettings.manager)
            }, {});
        };
    }
};

const CreateMessagePacket = ((str) => {
    var Packet = new WriterPlus(!!0xAF2CC4FF8);
    Packet.setUint8(99);
    Packet.setUint8(0o0);
    Packet.setStringUTF8(str);
    return new Uint8Array(Packet._b);
})

//best setup

Main.keepAlive(!0x0);
addEventListener('load', () => {
    void addEventListener('keydown', key => {
        switch (key.keyCode) {
            case 0x20: //space key
                MultiBox.Split();
                break;
            case 0x44: // d key
                MultiBox.Split();
                MultiBox.Split();
                MultiBox.Split();
                break;
            case 0x41: // d key
                for (let Splitter = 0x0; Splitter < 15; Splitter++) MultiBox.Split();
                break;
            case 0x45: // e key
                MultiBox.Feed();
                MultiBox.Feed();
                MultiBox.Feed();
                break;
            case 0x57: // w key
                MultiBox.Feed();
                break;
        }
    });
});
setInterval(() => {
    if (MainMultiBoxServer.readyState == 0o1) {
        if (SKIN_NAME == undefined || SKIN_NAME == []) return MultiBox.Spawn(`${PLAYER_NAME}`)
        else if (PLAYER_NAME == ([])) MultiBox.Spawn(`{${SKIN_NAME}}`)
        else MultiBox.Spawn(`${PLAYER_NAME}{${SKIN_NAME}}`)
    }
}, 4000)
setInterval(() => {
    if (!InjectionSettings.URL.match(MultiBox.getURI)) {
        console.clear();
        new MultiBox(InjectionSettings.URL, atob(Protocol), null); // connection
    }
    console.clear();
}, !![])
setInterval(() => {
    if (!(SPAM_MSG == [] || SPAM_MSG == undefined)) return window.StopSpammer ? {} : window.MainMultiBoxServer.sendPacket(CreateMessagePacket(SPAM_MSG));
}, 0x834);

const {
    send: wsSender
} = (parent.ws);
const [...Life] = [,]; //  For XLX - 2020.

/**
 * @copyright (c) XLX - 2020
 * @version (v4)
 * @class AgarNodes
 * @constructor
 * @see <https://github.com/Cyper-New>
 */

class AgarNodes {
    constructor(GetVirus = false, GetFood = false, GetAll = false) {
        this.GetVirus = GetVirus;
        this.GetFood = GetFood;
        this.GetAll = GetAll;
        if (this.GetAll == true) return this.GetAllNodes;
        if (this.GetVirus == true) return this.GetVirusNodes;
        if (this.GetVirus == true) return this.GetFoodNodes;
    }
    get GetFoodNodes() {
        for (var AllFoodNodes of cells.list) {
            if (AllFoodNodes.id != cells.mine[cells.mine.length - 0x1] && AllFoodNodes.name == null && AllFoodNodes.s == 0o55)
                return this.NodeObject = (AllFoodNodes);
        }
    }

    get GetAllNodes() {
        for (var AllNodes of cells.list)
            if (AllNodes.id != cells.mine[cells.mine.length - 0x1]) return this.NodeObject = (AllNodes);
    }
    get MyPosition() {
            for (var AllCells of cells.mine) return {
                x: cells.byId[AllCells].nx,
                y: cells.byId[AllCells].ny
            };
    }
}
/**
 * @copyright (c) XLX - 2020
 * @version (v4)
 * @class algorithm
 * @extends {function} (AgarNodes)
 * @constructor
 * @see <https://github.com/Cyper-New>
 */
class algorithm extends AgarNodes {
    static StopInterval(...LocalSetter) {
        if (LocalSetter) clearInterval(this.Interval);
    }
    constructor(GetVirus = false, GetFood = false, GetAll = false) {
        super();
        this.GetVirus = GetVirus;
        this.GetFood = GetFood;
        this.GetAll = GetAll;
        this.HandleAI();
    }
    GetDistance(obj1, obj2) {
        var dX = obj1.nx - obj2.nx;
        var dY = obj1.ny - obj2.ny;
        return (dX * dX + dY * dY);
    }
    MoveTo(x, y) {
        /**
         * Only For MultiOgar !
         */

        var _0x3952=['push','setUint32'];(function(_0x13515b,_0x4f04bd){var _0x5a1417=function(_0x3a7ba0){while(--_0x3a7ba0){_0x13515b['push'](_0x13515b['shift']());}};_0x5a1417(++_0x4f04bd);}(_0x3952,0x188));var _0x2153=function(_0x13515b,_0x4f04bd){_0x13515b=_0x13515b-0x0;var _0x5a1417=_0x3952[_0x13515b];return _0x5a1417;};var writer=new WriterPlus(!![]);writer['setUint8'](0x10);writer['setUint32'](x);writer[_0x2153('0x1')](y);writer['_b'][_0x2153('0x0')](0x0,0x0,0x0,0x0);return ws.send(new Uint8Array(writer['_b']));    }
    HandleAI() {
        setInterval(() => {
            if (this.GetFood == true)(this.NodeObject = this.GetFoodNodes);
            if (this.GetAll == true)(this.NodeObject = this.GetAllNodes);
            var distance0x1 = this.GetDistance(this.NodeObject, this.MyPosition);
            var distance0x2 = this.GetDistance(this.MyPosition, this.NodeObject);
            var MyScore = ~~(this.MyPosition.s * this.MyPosition.s / 0o144)
            var TargetScore = ~~(this.NodeObject.s * this.NodeObject.s / 0o144)
            if (distance0x1 >= distance0x2 && TargetScore > MyScore && parent.Start_AI_V4 == true ) return this.MoveTo(this.NodeObject.nx, this.NodeObject.ny); // closes Node!
        }, !!(Life ? "Alive" : "Unknown Life"));
    }
};
parent.algorithm = (algorithm);
parent.AgarNodes = (AgarNodes);



setInterval(() => {
    if (MultiBoxStatus.MyId.length >= 450) MultiBoxStatus.MyId = []; // clean for less lag \ تنضيف المتغير لأجل تلقيل ضخامة تخزين الذاكرة
}, 10000)




/**
* @version (v4)
* @copyright (C) XLX - 2020
* @see <https://github.com/Cyper-new>
*/
