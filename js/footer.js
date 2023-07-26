// 动态心跳，更改自己的名称
window.onload = function () {
    document.querySelectorAll('.copyright')[0].innerHTML = '<div>©2022 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By 麻雀 </div> <div>本网站由<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"> <img class="cdn" src="./img/youpaiyun.png" /></a>提供CDN加速/云储存服务<div>'
    show_date_time();
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