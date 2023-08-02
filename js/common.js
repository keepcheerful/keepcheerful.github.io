window.onload = function () {
    if (!isMobile()) {
        fps();
        setTimeout(() => {
            document.querySelectorAll(".aplayer-icon")[8].addEventListener("click", function () {
                const aplayer = document.querySelectorAll('.aplayer')[0];
                const aplayerLength = aplayer.className.split("aplayer-narrow").length;
                if (aplayerLength == 1) {
                    document.getElementById("fps").style.bottom = '10px'
                    document.getElementById("fps").style.left = '90px'
                } else {
                    document.getElementById("fps").style.bottom = '330px'
                    document.getElementById("fps").style.left = '10px'
                }
            })
        }, 500)
    } else {
        document.getElementById("fps").style.display = 'none';
    }
    snow();
    star();
    show_date_time();
    document.querySelectorAll('.copyright')[0].innerHTML = '<div>©2022 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By 初心 </div>'

}

//本站运行时间，更改自己建立站点的时间
function show_date_time() {
    document.querySelectorAll('.framework-info')[0].style.display = "block"
    document.querySelectorAll('.framework-info')[0].innerHTML = '小破站已经安全运行<span id="span_dt_dt" style="color: #fff;"></span>'
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("2023/7/22 0:0:0");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = Math.floor((e_hrsold - hrsold) * 60);
    seconds = Math.floor((e_minsold - minsold) * 60);
    span_dt_dt.innerHTML = '<font style=color:#afb4db>' + daysold + '</font> 天 <font style=color:#f391a9>' + hrsold + '</font> 时 <font style=color:#fdb933>' + minsold + '</font> 分 <font style=color:#a3cf62>' + seconds + '</font> 秒';
}

// 判断是否是移动端
function isMobile() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let getArr = Agents.filter(i => userAgentInfo.includes(i));
    return getArr.length ? true : false;
}

// fps
function fps() {
    if (window.localStorage.getItem("fpson") == undefined || window.localStorage.getItem("fpson") == "1") {
        var rAF = function () {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                }
            );
        }();
        var frame = 0;
        var allFrameCount = 0;
        var lastTime = Date.now();
        var lastFameTime = Date.now();
        var loop = function () {
            var now = Date.now();
            var fs = (now - lastFameTime);
            var fps = Math.round(1000 / fs);

            lastFameTime = now;
            // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
            allFrameCount++;
            frame++;

            if (now > 1000 + lastTime) {
                var fps = Math.round((frame * 1000) / (now - lastTime));
                if (fps <= 5) {
                    var kd = `<span style="color:#bd0000">卡成ppt🤢</span>`
                } else if (fps <= 15) {
                    var kd = `<span style="color:red">电竞级帧率😖</span>`
                } else if (fps <= 25) {
                    var kd = `<span style="color:orange">有点难受😨</span>`
                } else if (fps < 35) {
                    var kd = `<span style="color:#9338e6">不太流畅🙄</span>`
                } else if (fps <= 45) {
                    var kd = `<span style="color:#08b7e4">还不错哦😁</span>`
                } else {
                    var kd = `<span style="color:#39c5bb">十分流畅🤣</span>`
                }
                document.getElementById("fps").innerHTML = `FPS:${fps} ${kd}`;
                frame = 0;
                lastTime = now;
            };

            rAF(loop);
        }

        loop();
    } else {
        document.getElementById("fps").style = "display:none!important"
    }
}

// star
function star() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var n, e, i, h, t = .05,
        s = document.getElementById("universe"),
        o = !0,
        a = "180,184,240",
        r = "226,225,142",
        d = "226,225,224",
        c = [];

    function f() {
        n = window.innerWidth, e = window.innerHeight, i = .216 * n, s.setAttribute("width", n), s.setAttribute("height", e)
    }

    function u() {
        h.clearRect(0, 0, n, e);
        for (var t = c.length, i = 0; i < t; i++) {
            var s = c[i];
            s.move(), s.fadeIn(), s.fadeOut(), s.draw()
        }
    }

    function y() {
        this.reset = function () {
            this.giant = m(3), this.comet = !this.giant && !o && m(10), this.x = l(0, n - 10), this.y = l(0, e), this.r = l(1.1, 2.6), this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t, this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = l(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = l(5e-4, .002) + .001 * (this.comet + 1 - 1)
        }, this.fadeIn = function () {
            this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
        }, this.fadeOut = function () {
            this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > n || this.y < 0) && (this.fadingOut = !1, this.reset()))
        }, this.draw = function () {
            if (h.beginPath(), this.giant) h.fillStyle = "rgba(" + a + "," + this.opacity + ")", h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
            else if (this.comet) {
                h.fillStyle = "rgba(" + d + "," + this.opacity + ")", h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
                for (var t = 0; t < 30; t++) h.fillStyle = "rgba(" + d + "," + (this.opacity - this.opacity / 20 * t) + ")", h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), h.fill()
            } else h.fillStyle = "rgba(" + r + "," + this.opacity + ")", h.rect(this.x, this.y, this.r, this.r);
            h.closePath(), h.fill()
        }, this.move = function () {
            this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0)
        }, setTimeout(function () {
            o = !1
        }, 50)
    }

    function m(t) {
        return Math.floor(1e3 * Math.random()) + 1 < 10 * t
    }

    function l(t, i) {
        return Math.random() * (i - t) + t
    }
    f(), window.addEventListener("resize", f, !1),
        function () {
            h = s.getContext("2d");
            for (var t = 0; t < i; t++) c[t] = new y, c[t].reset();
            u()
        }(),
        function t() {
            document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark' && u(), window.requestAnimationFrame(t)
        }()
};

function snow() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        // 移动端不显示
    } else {
        // document.write('<canvas id="snow" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;pointer-events:none"></canvas>');
        window && (() => {
            let e = {
                flakeCount: 50, // 雪花数目
                minDist: 150, // 最小距离
                color: "255, 255, 255", // 雪花颜色
                size: 1.5, // 雪花大小
                speed: .5, // 雪花速度
                opacity: .7, // 雪花透明度
                stepsize: .5 // 步距
            };
            const t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            };
            window.requestAnimationFrame = t;
            const i = document.getElementById("snow"),
                n = i.getContext("2d"),
                o = e.flakeCount;
            let a = -100,
                d = -100,
                s = [];
            i.width = window.innerWidth,
                i.height = window.innerHeight;
            const h = () => {
                    n.clearRect(0, 0, i.width, i.height);
                    const r = e.minDist;
                    for (let t = 0; t < o; t++) {
                        let o = s[t];
                        const h = a,
                            w = d,
                            m = o.x,
                            c = o.y,
                            p = Math.sqrt((h - m) * (h - m) + (w - c) * (w - c));
                        if (p < r) {
                            const e = (h - m) / p,
                                t = (w - c) / p,
                                i = r / (p * p) / 2;
                            o.velX -= i * e,
                                o.velY -= i * t
                        } else
                            o.velX *= .98,
                            o.velY < o.speed && o.speed - o.velY > .01 && (o.velY += .01 * (o.speed - o.velY)),
                            o.velX += Math.cos(o.step += .05) * o.stepSize;
                        n.fillStyle = "rgba(" + e.color + ", " + o.opacity + ")",
                            o.y += o.velY,
                            o.x += o.velX,
                            (o.y >= i.height || o.y <= 0) && l(o),
                            (o.x >= i.width || o.x <= 0) && l(o),
                            n.beginPath(),
                            n.arc(o.x, o.y, o.size, 0, 2 * Math.PI),
                            n.fill()
                    }
                    t(h)
                },
                l = e => {
                    e.x = Math.floor(Math.random() * i.width),
                        e.y = 0,
                        e.size = 3 * Math.random() + 2,
                        e.speed = 1 * Math.random() + .5,
                        e.velY = e.speed,
                        e.velX = 0,
                        e.opacity = .5 * Math.random() + .3
                };
            document.addEventListener("mousemove", (e => {
                    a = e.clientX,
                        d = e.clientY
                })),
                window.addEventListener("resize", (() => {
                    i.width = window.innerWidth,
                        i.height = window.innerHeight
                })),
                (() => {
                    for (let t = 0; t < o; t++) {
                        const t = Math.floor(Math.random() * i.width),
                            n = Math.floor(Math.random() * i.height),
                            o = 3 * Math.random() + e.size,
                            a = 1 * Math.random() + e.speed,
                            d = .5 * Math.random() + e.opacity;
                        s.push({
                            speed: a,
                            velX: 0,
                            velY: a,
                            x: t,
                            y: n,
                            size: o,
                            stepSize: Math.random() / 30 * e.stepsize,
                            step: 0,
                            angle: 180,
                            opacity: d
                        })
                    }
                    h()
                })()
        })();
    }
}