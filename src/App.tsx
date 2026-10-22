import { useEffect } from "react";

/** Thiệp cưới Vũ Minh & Thu Trang — chỉ cần thay src/App.tsx. */
const INVITATION_HTML = String.raw`<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#f8fbfd">
<title>Thiệp cưới Vũ Minh & Thu Trang | 28.10.2026</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500&family=Montserrat:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&family=Allura&display=swap" rel="stylesheet">
<style>
:root{--navy:#183c6a;--blue:#527d9e;--pale:#e9f1f7;--line:#cbdbe8;--gold:#bb9a5b;--white:#fff}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--navy);font-family:'Be Vietnam Pro',sans-serif;background:#fafcfe;overflow-x:hidden}button,input,textarea{font:inherit}button{cursor:pointer}a{color:inherit;text-decoration:none}p{line-height:1.85}.stage{width:min(100%,700px);margin:auto;background:#fff;border-left:1px solid #e3eaf0;border-right:1px solid #e3eaf0;min-height:100vh;position:relative;overflow:hidden;box-shadow:0 0 65px #d5e3ed28}.petal-layer{position:fixed;inset:0;pointer-events:none;z-index:12;overflow:hidden}.petal{position:absolute;top:-30px;width:11px;height:7px;border-radius:70% 3% 70% 4%;background:linear-gradient(130deg,#f6cfde,#e9aebd);opacity:.65;animation:fall linear infinite}@keyframes fall{0%{transform:translate(0,-15px) rotate(0)}50%{transform:translate(40px,52vh) rotate(190deg)}100%{transform:translate(-20px,105vh) rotate(390deg)}}.eyebrow{letter-spacing:.25em;text-transform:uppercase;font-size:11px;font-weight:600}.orn{font-family:'Cormorant Garamond',serif;font-size:31px;color:#728faf;line-height:1}.serif{font-family:'Cormorant Garamond',serif}.headline{font-family:'Cormorant Garamond',serif;font-size:clamp(40px,8vw,57px);line-height:1.03;font-weight:500;margin:12px 0}.section-title{font-size:18px;letter-spacing:.045em;font-weight:700;margin:0 0 25px;text-align:center}.center{text-align:center}.small{font-size:12px}.soft{color:#657f9d}.section{padding:75px 44px;position:relative}.section:before{content:'';position:absolute;width:300px;height:300px;background:radial-gradient(circle,#e6f1f8bb,transparent 68%);z-index:0;pointer-events:none;top:10%;right:-210px}.section>*{position:relative}.hero{height:min(900px,100svh);min-height:720px;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;isolation:isolate;padding:65px 16px 0;background:linear-gradient(#fff 0%,#fff 49%,#f5fafd 94%)}.hero:before{content:'';position:absolute;z-index:-1;width:105%;height:64%;top:8%;left:-3%;background:radial-gradient(ellipse at 49% 47%,#d8eafa 0%,#eaf3f9 35%,transparent 69%);opacity:.82;filter:blur(16px)}.hero .welcome{display:flex;align-items:center;gap:18px;margin:10px auto 27px;font-size:11px;letter-spacing:.27em;font-weight:500}.hero .welcome:before,.hero .welcome:after{content:'';width:47px;height:1px;background:#87a2b8}.hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(53px,11.2vw,84px);font-weight:500;line-height:.9;letter-spacing:-.045em;margin:15px 0 0}.hero .and{font-family:'Cormorant Garamond',serif;font-size:44px;font-style:italic;color:#7795aa;height:43px}.hero .date{letter-spacing:.37em;font-size:12px;font-weight:600;margin-top:25px}.castle{width:min(100%,655px);height:auto;position:absolute;bottom:15px;left:50%;transform:translateX(-50%);filter:drop-shadow(0 7px 4px #b8ccd955)}.scroll-cue{position:absolute;bottom:10px;right:22px;z-index:2;font-size:9px;letter-spacing:.16em;writing-mode:vertical-rl;opacity:.7}.scroll-cue:after{content:'↓';margin-top:10px}.divider-illustration{width:290px;height:auto;display:block;margin:18px auto 0}.intro{text-align:center;padding-top:88px;padding-bottom:70px}.intro .quote{font-size:19px;font-family:'Cormorant Garamond',serif;font-style:italic;line-height:1.7;max-width:470px;margin:16px auto 0}.parents{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:28px auto 58px}.parents strong{display:block;font-weight:700;font-size:13px;margin:7px 0}.parents span{font-size:10px;line-height:1.8;display:block}.invite-lines{font-size:14px;line-height:2.05;letter-spacing:.025em}.names{font-family:'Cormorant Garamond',serif;font-size:clamp(42px,8vw,60px);margin:22px 0 4px;line-height:1.02}.names i{font-size:32px;display:block;color:#7899b4;font-weight:400;padding:6px}.tag{font-size:10px;letter-spacing:.2em;color:#748caa}.event{padding-top:70px;text-align:center;background:linear-gradient(#fff,#fafdff)}.event .big-time{font-family:'Cormorant Garamond',serif;font-size:61px;line-height:1;margin:20px 0 0}.event .date-words{font-size:14px;letter-spacing:.13em;font-weight:700;margin-top:15px}.event .date-year{font-family:'Cormorant Garamond',serif;font-size:37px;margin:8px}.calendar{width:315px;max-width:100%;border:1px solid #a9c2d7;outline:5px double #e2ecf4;padding:15px 14px 19px;margin:36px auto 22px;background:#fff;position:relative}.calendar:before,.calendar:after{position:absolute;content:'❧';font:43px 'Cormorant Garamond';color:#7192ad}.calendar:before{left:-20px;top:-28px}.calendar:after{right:-20px;bottom:-28px;transform:rotate(180deg)}.calendar .month{font-size:11px;letter-spacing:.11em;font-weight:700;margin-bottom:15px}.calendar .days{display:grid;grid-template-columns:repeat(7,1fr);gap:7px 0;font-size:11px;align-items:center}.calendar .days span{height:30px;display:grid;place-items:center}.calendar .days .dow{font-size:9px;color:#6c8aa5;height:20px}.calendar .days .active{background:var(--navy);color:white;border-radius:50%;font-weight:700}.btn{border:1px solid var(--navy);color:var(--navy);background:white;padding:11px 22px;border-radius:50px;font-size:11px;font-weight:600;display:inline-flex;align-items:center;gap:7px;transition:.25s}.btn:hover{background:var(--navy);color:#fff;transform:translateY(-2px)}.btn.dark{background:var(--navy);color:white}.btn.dark:hover{background:#365b84}.floral-border{display:flex;justify-content:center;align-items:center;gap:14px;margin:34px auto;color:#9bb3c8}.floral-border:before,.floral-border:after{content:'';width:100px;height:1px;background:#cbdde9}.banquet{padding-top:45px}.table-art{height:250px;position:relative;margin:5px auto 40px;max-width:520px;background:radial-gradient(ellipse at 48% 82%,#c1dcec62 0%,transparent 62%)}.table-art .dish{position:absolute;border:2px solid #a4bfd1;border-radius:50%;width:130px;height:40px;bottom:32px;box-shadow:0 0 0 8px #ffffffa0,0 0 0 10px #d2dfeb}.table-art .dish.left{left:5%}.table-art .dish.right{right:5%}.table-art .vase{position:absolute;width:88px;height:96px;left:50%;transform:translateX(-50%);bottom:26px;border-radius:8px 8px 42% 42%;background:linear-gradient(90deg,#cfdfed,#fafcfd 55%,#caddeb);border:1px solid #a0bfd1}.table-art .vase:after{content:'✿  ❀  ✿';font-size:36px;color:#8eb2d0;position:absolute;width:250px;left:-82px;top:-53px;text-shadow:-18px 17px #d5e4ef,16px 7px #7fa3c6,24px -19px #c4d7e6,-30px -18px #9dbed5}.candlestick{position:absolute;width:2px;height:96px;background:#bba36c;bottom:25px;left:11%;box-shadow:15px 16px #bba36c,30px 1px #bba36c}.candlestick:before{content:'♨  ♨  ♨';font-size:18px;white-space:pre;letter-spacing:1px;color:#e4c16e;position:absolute;bottom:90px;left:-7px}.candlestick.right{left:auto;right:15%}.venue{font-weight:700;font-size:16px;margin:24px 0 9px}.map{height:220px;width:100%;border-radius:12px;border:1px solid var(--line);background:#f0f4f5;margin:22px auto 15px;overflow:hidden}.map iframe{height:100%;width:100%;border:0}.timeline{margin:45px auto 0;max-width:350px}.timeline-item{display:grid;grid-template-columns:60px 1px 1fr;gap:20px;text-align:left;min-height:72px;font-size:12px}.timeline-item time{font-weight:700}.timeline-item .bar{background:#adc6d6;position:relative}.timeline-item .bar:before{content:'';width:9px;height:9px;background:#769fbc;border:2px solid #fff;border-radius:50%;position:absolute;left:50%;transform:translateX(-50%);top:0}.timeline-item strong{font-weight:600}.guestbook{background:linear-gradient(160deg,#f4f8fc,#fff 80%)}.guestbook .form{max-width:450px;margin:auto;display:grid;gap:12px}.guestbook input,.guestbook textarea{width:100%;background:#fff;border:1px solid #bfcfe1;padding:15px 16px;border-radius:5px;color:var(--navy);outline:none;font-size:12px}.guestbook textarea{height:112px;resize:vertical}.guestbook input:focus,.guestbook textarea:focus{border-color:var(--navy);box-shadow:0 0 0 3px #9fbad62a}.guestbook .form .btn{justify-self:end}.wish-list{max-width:450px;margin:25px auto}.wish{padding:15px;background:#fff;border:1px solid #dce6ee;border-radius:6px;margin-bottom:10px;text-align:left}.wish strong{font-size:12px}.wish p{font-size:12px;margin:6px 0 0;color:#5d7592;line-height:1.6}.envelope{margin:10px auto 0;display:block;border:none;background:transparent;position:relative;width:185px;height:125px;filter:drop-shadow(0 10px 13px #7896aa45);transition:transform .25s}.envelope:hover{transform:translateY(-5px)}.envelope .back{position:absolute;inset:0;background:#e8f1f7;border:1px solid #b8cbd8;border-radius:4px}.envelope .left{position:absolute;inset:0;background:#f9fcff;clip-path:polygon(0 0,50% 56%,0 100%);border-radius:4px}.envelope .right{position:absolute;inset:0;background:#f0f7fc;clip-path:polygon(100% 0,50% 56%,100% 100%);border-radius:4px}.envelope .front{position:absolute;inset:0;background:linear-gradient(#f0f7fc,#dcebf5);clip-path:polygon(0 100%,50% 40%,100% 100%);border-radius:4px}.envelope .flap{position:absolute;inset:0;background:#dbe9f5;clip-path:polygon(0 0,50% 65%,100% 0);transform-origin:top;transition:transform .6s}.envelope:hover .flap{transform:rotateX(45deg)}.envelope .seal{position:absolute;left:50%;top:47%;transform:translate(-50%,-50%);background:#b8c9d8;color:var(--navy);width:29px;height:29px;border-radius:50%;display:grid;place-items:center;font:italic 19px 'Cormorant Garamond'}.closing{height:460px;display:flex;align-items:center;flex-direction:column;justify-content:center;text-align:center;background:radial-gradient(ellipse at center,#ebf4fa,#fff 68%)}.closing .title{font:500 58px 'Cormorant Garamond',serif;line-height:.95;margin:19px 0}.closing .heart{color:#8cacbf;font:italic 39px 'Cormorant Garamond'}.modal-back{position:fixed;inset:0;background:#142a44aa;z-index:30;display:none;align-items:center;justify-content:center;padding:22px}.modal-back.show{display:flex}.modal{background:#fbfdff;border-radius:14px;max-width:420px;width:100%;padding:30px;text-align:center;position:relative;box-shadow:0 15px 60px #001c3d38}.modal h3{margin:0;font-size:19px}.modal p{font-size:12px;color:#5d7895}.close{position:absolute;right:13px;top:9px;border:none;background:transparent;font-size:25px;color:var(--navy)}.float{position:fixed;bottom:22px;right:20px;z-index:14;border:0;border-radius:50%;background:var(--navy);color:white;width:42px;height:42px;display:grid;place-items:center;box-shadow:0 5px 16px #1e4c7e44}.countdown{display:flex;justify-content:center;gap:10px;margin:22px auto 25px}.countdown div{min-width:67px;padding:11px 5px;border:1px solid #d7e6f0;background:#fff}.countdown b{font:500 31px 'Cormorant Garamond',serif;display:block}.countdown small{font-size:9px;letter-spacing:.12em}.note{font-size:10px;color:#7890a6}.fade{opacity:0;transform:translateY(22px);transition:opacity .8s,transform .8s}.fade.in{opacity:1;transform:none}@media(max-width:500px){.section{padding:63px 25px}.hero{height:780px;min-height:670px;padding-top:60px}.hero .welcome{font-size:9px;gap:8px}.hero .welcome:before,.hero .welcome:after{width:27px}.hero h1{font-size:62px}.castle{width:115%;bottom:31px}.parents{gap:12px}.parents strong{font-size:11px}.parents span{font-size:9px}.section-title{font-size:16px}.table-art{transform:scale(.9);margin-left:-10px;margin-right:-10px}.venue{font-size:14px}.closing .title{font-size:50px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;scroll-behavior:auto!important}.fade{opacity:1;transform:none}}
@media(min-width:501px){.hero{height:900px;min-height:900px}}
.hero svg.castle{display:none}.hero img.real-castle{height:690px;max-width:110%;object-fit:contain;object-position:center bottom;z-index:0;pointer-events:none;bottom:-20px}.hero h1,.hero .and,.hero .welcome,.hero .date,.hero .orn{position:relative;z-index:2}
@media(max-width:500px){.hero img.real-castle{height:580px;max-width:135%;width:135%;bottom:-10px}}
.table-art{display:none}.table-watercolor{display:block;width:112%;max-width:none;height:auto;position:relative;left:50%;transform:translateX(-50%);margin:24px 0 -45px;filter:drop-shadow(0 5px 8px #b5c4ce22)}
@media(max-width:500px){.table-watercolor{width:130%;margin-top:32px;margin-bottom:-25px}}
/* French château typography: refined Didone display + understated geometric body. */
body{font-family:'Montserrat',Arial,sans-serif;font-weight:400;font-size:12px;letter-spacing:.005em}
.hero{padding-top:71px}
.hero .welcome{font-family:'Montserrat',sans-serif;font-size:10px;letter-spacing:.29em;font-weight:500;margin:16px auto 30px}
.hero h1{font-family:'Bodoni Moda','Times New Roman',serif;font-size:clamp(43px,7vw,61px);font-weight:400;letter-spacing:-.065em;line-height:1.36;margin:7px 0 0}
.hero .and{font-family:'Allura',cursive;font-size:46px;font-style:normal;line-height:1.1;height:43px;color:#7895b1}
.hero .date{font-family:'Montserrat',sans-serif;font-size:10px;letter-spacing:.35em;font-weight:500;margin-top:24px}
.section-title{font-family:'Montserrat',sans-serif;font-size:15px;letter-spacing:.12em;font-weight:600;line-height:1.6;margin-bottom:27px}
.eyebrow{font-family:'Montserrat',sans-serif;font-weight:500;font-size:10px;letter-spacing:.27em}
.intro .quote{font-family:'Cormorant Garamond',serif;font-size:23px;line-height:1.48;font-weight:400}
.parents strong{font-family:'Montserrat',sans-serif;font-size:12px;font-weight:600;letter-spacing:.015em}
.invite-lines{font-family:'Montserrat',sans-serif;font-size:12px;letter-spacing:.025em;line-height:2.25}
.names{font-family:'Bodoni Moda','Times New Roman',serif;font-size:42px;font-weight:400;line-height:1.26;letter-spacing:-.055em;margin:30px 0 15px}
.names i{font-family:'Allura',cursive;font-size:34px;font-style:normal;padding:7px 0 5px;line-height:1}
.event .big-time{font-family:'Bodoni Moda','Times New Roman',serif;font-size:51px;font-weight:400;letter-spacing:-.07em;line-height:1.4;margin:14px 0 0}
.event .date-words{font-family:'Montserrat',sans-serif;font-size:12px;font-weight:600;letter-spacing:.1em}
.event .date-year{font-family:'Bodoni Moda','Times New Roman',serif;font-size:27px;line-height:1.6}
.closing .title{font-family:'Bodoni Moda','Times New Roman',serif;font-size:44px;line-height:1.26;font-weight:400;letter-spacing:-.055em}
.closing .heart{font-family:'Cormorant Garamond',serif;font-size:29px;font-style:italic}
.countdown b{font-family:'Bodoni Moda','Times New Roman',serif;font-size:26px;font-weight:400}
.btn{font-family:'Montserrat',sans-serif;font-size:10px;letter-spacing:.03em;font-weight:600}
@media(max-width:500px){.hero{padding-top:66px}.hero h1{font-size:49px;line-height:1.34}.hero .and{font-size:42px;height:35px}.hero .welcome{font-size:9px;letter-spacing:.2em}.section-title{font-size:14px}.names{font-size:36px}.event .big-time{font-size:49px}.closing .title{font-size:36px}}
.guest-status{max-width:450px;margin:17px auto 4px;text-align:center;color:#597792;font-size:11px;line-height:1.8;min-height:20px}.guest-status.error{color:#a23b43}.guest-status.success{color:#316e5a}.wish-list:empty{margin:0}.wish{box-shadow:0 5px 21px #b2c6d61c}.wish-date{font-size:9px;color:#9aafc2;display:block;margin-top:8px}.guestbook .btn:disabled{opacity:.5;cursor:not-allowed;transform:none}.guestbook .honeypot{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}.qr-image{display:block;width:min(265px,100%);max-height:330px;object-fit:contain;margin:16px auto 20px;border:1px solid #e0e8ee;border-radius:10px;background:white;padding:8px}.gift-description{line-height:1.8}
/* Màn mở thiệp với hoa nhẹ, lấy cảm hứng từ mẫu tham chiếu. */
body.cover-active{height:100dvh;overflow:hidden}
.invitation-cover{position:fixed;inset:0;z-index:90;display:grid;place-items:center;isolation:isolate;overflow:hidden;padding:20px;background:radial-gradient(ellipse at 69% 82%,#5b7440 0%,transparent 65%),radial-gradient(ellipse at 25% 15%,#233e23 0%,transparent 63%),linear-gradient(145deg,#213f25,#486637);color:#294c2d}
.invitation-cover:before{content:'';position:absolute;inset:-20%;background:radial-gradient(circle at 20% 74%,#ffffff0c,transparent 25%),radial-gradient(circle at 80% 22%,#ffffff0b,transparent 27%);animation:coverGlow 12s ease-in-out infinite alternate;pointer-events:none}
.cover-flakes{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.cover-flake{position:absolute;top:-30px;display:block;color:#e7ecd5;line-height:1;opacity:.42;font-size:14px;animation:coverFloat linear infinite;user-select:none}
.cover-card{width:min(600px,100%);min-height:430px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;isolation:isolate;padding:36px 30px 30px;background:radial-gradient(circle at 50% 30%,#ffffff 10%,#fffefb 46%,#f2f2e9 100%);border-radius:8px;box-shadow:0 20px 65px #0c220b72,0 0 0 1px #ffffff9a inset;animation:coverArrive .85s cubic-bezier(.2,.8,.2,1) both;text-align:center}
.cover-card:before{content:'';position:absolute;inset:10px;border:1px solid #b9c5a44c;border-radius:3px;pointer-events:none}
.cover-bouquet{position:absolute;z-index:-1;width:48%;height:103%;left:-6%;bottom:-8%;opacity:.63;filter:blur(.2px);pointer-events:none}
.cover-bouquet.right{left:auto;right:-7%;transform:scaleX(-1);opacity:.70}
.cover-seal{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;margin:-8px 0 17px;background:#285225;color:#fff;font-size:26px;box-shadow:0 6px 19px #203c2860;flex-shrink:0}
.cover-label{font-family:'Montserrat',sans-serif;font-size:9px;letter-spacing:.36em;color:#70876e;margin:0 0 7px;font-weight:500}
.cover-names{font-family:'Cormorant Garamond',serif;font-weight:400;font-size:clamp(38px,6vw,48px);line-height:1.02;margin:0;color:#2a542b;text-shadow:0 1px 1px #fff}
.cover-names em{display:block;font-family:'Allura',cursive;font-size:32px;font-style:normal;line-height:1.05;margin:3px 0;color:#6a906d}
.cover-rule{height:1px;width:110px;background:linear-gradient(90deg,transparent,#6f9567,transparent);margin:17px 0 13px}
.cover-date{font-family:'Cormorant Garamond',serif;font-size:21px;letter-spacing:.025em;color:#557455;margin:0}
.cover-invite{font-family:'Cormorant Garamond',serif;font-size:23px;color:#638061;margin:14px 0 18px}
.cover-open{position:relative;background:#315c2d;border:1px solid #315c2d;color:#fff;border-radius:999px;padding:13px 36px;font-family:'Cormorant Garamond',serif;font-size:20px;line-height:1.05;box-shadow:0 6px 17px #1c431e42;transition:transform .3s,box-shadow .3s}
.cover-open:hover{transform:translateY(-3px);box-shadow:0 10px 20px #1c431e55}
.cover-open:focus-visible{outline:3px solid #a4c69b;outline-offset:4px}
.cover-burst{position:absolute;z-index:8;pointer-events:none;color:var(--flower-color,#c5d9aa);font-size:var(--flower-size,19px);left:0;top:0;animation:flowerBurst 1.15s ease-out forwards}
.invitation-cover.opening .cover-card{animation:coverCardAway .85s .17s ease-in forwards}
.invitation-cover.opening{animation:coverAway .65s .65s ease-in forwards}
@keyframes coverArrive{from{opacity:0;transform:translateY(26px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes coverFloat{0%{transform:translate3d(0,-20px,0) rotate(0)}100%{transform:translate3d(32px,110vh,0) rotate(420deg)}}
@keyframes coverGlow{from{transform:scale(1)}to{transform:scale(1.12) rotate(4deg)}}
@keyframes flowerBurst{0%{opacity:1;transform:translate(-50%,-50%) scale(.45) rotate(0)}70%{opacity:1}100%{opacity:0;transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(1.15) rotate(var(--rot))}}
@keyframes coverCardAway{to{opacity:0;transform:translateY(-60px) scale(1.1);filter:blur(12px)}}
@keyframes coverAway{to{opacity:0;visibility:hidden}}
@media(max-width:600px){.invitation-cover{padding:20px}.cover-card{min-height:430px;padding:32px 12px}.cover-bouquet{width:61%;left:-21%;opacity:.4}.cover-bouquet.right{right:-21%;opacity:.44}.cover-names{font-size:40px}.cover-seal{width:51px;height:51px}}
@media(prefers-reduced-motion:reduce){.cover-card,.cover-flake,.invitation-cover:before{animation:none!important}.invitation-cover.opening,.invitation-cover.opening .cover-card{animation:none!important}.cover-burst{display:none}}
</style>
</head>
<body>
<div class="invitation-cover" id="invitationCover" role="dialog" aria-modal="true" aria-label="Mời mở thiệp cưới">
  <div class="cover-flakes" id="coverFlakes" aria-hidden="true"></div>
  <div class="cover-card">
    <svg class="cover-bouquet" viewBox="0 0 260 420" aria-hidden="true"><defs>
      <g id="leafspray" fill="none" stroke="#819d83" stroke-width="3" stroke-linecap="round"><path d="M7 414Q35 250 113 88M20 348Q113 268 167 160M37 296Q21 178 38 92M65 241Q141 195 195 72"/><g fill="#aebd9c" stroke="none" opacity=".7"><ellipse cx="76" cy="176" rx="11" ry="26" transform="rotate(40 76 176)"/><ellipse cx="91" cy="198" rx="10" ry="27" transform="rotate(-52 91 198)"/><ellipse cx="115" cy="139" rx="10" ry="26" transform="rotate(39 115 139)"/><ellipse cx="50" cy="257" rx="12" ry="29" transform="rotate(-45 50 257)"/><ellipse cx="133" cy="244" rx="12" ry="28" transform="rotate(44 133 244)"/><ellipse cx="35" cy="137" rx="10" ry="29" transform="rotate(-41 35 137)"/><ellipse cx="143" cy="110" rx="10" ry="27" transform="rotate(60 143 110)"/></g></g>
      <g id="coverDaisy"><g fill="#fffdf3" stroke="#e6e6d9" stroke-width=".7"><ellipse cy="-19" rx="8" ry="18"/><ellipse cy="19" rx="8" ry="18"/><ellipse cx="-19" rx="18" ry="8"/><ellipse cx="19" rx="18" ry="8"/><ellipse cx="-14" cy="-14" rx="9" ry="17" transform="rotate(-45 -14 -14)"/><ellipse cx="14" cy="-14" rx="9" ry="17" transform="rotate(45 14 -14)"/><ellipse cx="-14" cy="14" rx="9" ry="17" transform="rotate(45 -14 14)"/><ellipse cx="14" cy="14" rx="9" ry="17" transform="rotate(-45 14 14)"/></g><circle r="9" fill="#e2c78e"/><circle r="5" fill="#c5ae74"/></g>
      <g id="coverBlue"><g fill="#b7c8d6" opacity=".9"><circle cx="0" cy="-13" r="11"/><circle cx="13" cy="-5" r="11"/><circle cx="8" cy="12" r="11"/><circle cx="-9" cy="11" r="11"/><circle cx="-13" cy="-6" r="11"/></g><circle r="6" fill="#d8bd78"/></g>
    </defs><use href="#leafspray"/><use href="#coverDaisy" transform="translate(107 137) scale(.95)"/><use href="#coverDaisy" transform="translate(47 247) scale(.86)"/><use href="#coverDaisy" transform="translate(169 161) scale(.72)"/><use href="#coverBlue" transform="translate(42 110) scale(1.05)"/><use href="#coverBlue" transform="translate(151 263) scale(.8)"/><use href="#coverBlue" transform="translate(201 79) scale(.72)"/></svg>
    <svg class="cover-bouquet right" viewBox="0 0 260 420" aria-hidden="true"><use href="#leafspray"/><use href="#coverDaisy" transform="translate(107 137) scale(.95)"/><use href="#coverDaisy" transform="translate(47 247) scale(.86)"/><use href="#coverDaisy" transform="translate(169 161) scale(.72)"/><use href="#coverBlue" transform="translate(42 110) scale(1.05)"/><use href="#coverBlue" transform="translate(151 263) scale(.8)"/><use href="#coverBlue" transform="translate(201 79) scale(.72)"/></svg>
    <div class="cover-seal" aria-hidden="true">♥</div>
    <p class="cover-label">THE WEDDING OF</p>
    <h2 class="cover-names">Vũ Minh <em>&</em> Thu Trang</h2>
    <div class="cover-rule"></div>
    <p class="cover-date">28 tháng 10, 2026</p>
    <p class="cover-invite">Thân Mời</p>
    <button type="button" class="cover-open" id="openInvitation">Mở thiệp</button>
  </div>
</div>
<svg style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true"><defs>
<linearGradient id="wall" x1="0" x2=".9" y1="0" y2="1"><stop stop-color="#fcfdff"/><stop offset=".52" stop-color="#d4e3ec"/><stop offset="1" stop-color="#a5bfce"/></linearGradient>
<linearGradient id="slate" x1="0" x2="1"><stop stop-color="#829cb4"/><stop offset=".5" stop-color="#e1ecf2"/><stop offset="1" stop-color="#6e8aa3"/></linearGradient>
<linearGradient id="tree" x1="0" x2="1"><stop stop-color="#60827b"/><stop offset=".5" stop-color="#9bb0a6"/><stop offset="1" stop-color="#4c746c"/></linearGradient>
<radialGradient id="water"><stop stop-color="#f1f8ff"/><stop offset=".75" stop-color="#c5dce9"/><stop offset="1" stop-color="#9bbacd"/></radialGradient>
<g id="blossom"><path d="M0 0 C-20 -28 -17 -45 -8 -68 M0 -10 C8 -37 26 -46 46 -54 M-6 -35 Q-28 -48 -24 -56 Q-8 -56 -6 -35 M15 -35 Q18 -57 33 -56 Q34 -41 15 -35" fill="none" stroke="#91aaa8" stroke-width="1.8"/><g fill="#edf4fa" stroke="#95b2cb" stroke-width="1.1"><ellipse cx="-9" cy="-69" rx="12" ry="21" transform="rotate(-18 -9 -69)"/><ellipse cx="-21" cy="-81" rx="12" ry="21" transform="rotate(-50 -21 -81)"/><ellipse cx="0" cy="-90" rx="12" ry="21" transform="rotate(12 0 -90)"/><ellipse cx="16" cy="-78" rx="12" ry="21" transform="rotate(49 16 -78)"/><ellipse cx="7" cy="-64" rx="13" ry="18" transform="rotate(100 7 -64)"/></g><circle cx="-2" cy="-78" r="10" fill="#d3bc7f"/><circle cx="-2" cy="-78" r="5" fill="#f6f0d8"/><g fill="#c6ddeb" stroke="#81a6c6"><circle cx="40" cy="-55" r="12"/><circle cx="55" cy="-57" r="10"/><circle cx="46" cy="-43" r="10"/></g></g>
</defs></svg>
<div class="petal-layer" id="petals" aria-hidden="true"></div>
<main class="stage">
  <section class="hero" id="top">
    <div class="orn">❦</div>
    <div class="welcome">WELCOME TO OUR WEDDING</div>
    <h1>Vũ Minh</h1><div class="and">&</div><h1>Thu Trang</h1>
    <div class="date">28 · 10 · 2026</div>
    <img class="castle real-castle" src="/Lâu đài Pháp giữa vườn hoa.png" alt="Tranh màu nước lâu đài Pháp với mây xanh, hoa trắng và đài phun nước">
    <svg class="castle" viewBox="0 0 650 500" role="img" aria-label="Minh họa lâu đài màu nước xanh trắng, hàng cây và đài phun nước">
      <g opacity=".35" fill="#b4d3e8"><ellipse cx="350" cy="60" rx="185" ry="48"/><ellipse cx="200" cy="112" rx="160" ry="42"/><ellipse cx="476" cy="110" rx="160" ry="39"/><ellipse cx="320" cy="160" rx="260" ry="55"/></g>
      <g opacity=".9"><path d="M10 405 L610 405 L650 455 L0 455Z" fill="#dbe9ec"/><path d="M0 455 Q325 429 650 455 L650 500 L0 500Z" fill="#e2eff4"/></g>
      <g fill="url(#tree)"><path d="M55 420 Q28 338 56 184 Q92 305 84 420Z"/><path d="M95 420 Q82 319 110 140 Q140 302 133 420Z"/><path d="M560 420 Q543 308 570 175 Q604 323 589 420Z"/><path d="M604 420 Q592 340 619 225 Q642 332 633 420Z"/></g>
      <g stroke="#708ca6" stroke-width="1.5"><path fill="url(#wall)" d="M162 242 H489 V409 H162Z"/><path fill="url(#slate)" d="M150 243L170 215H480L500 243Z"/><path fill="url(#wall)" d="M198 205 H285 V244 H198Z M366 205H456V244H366Z"/><path fill="url(#slate)" d="M187 205L207 168H274L295 205Z M355 205L375 168H447L466 205Z"/><path fill="url(#wall)" d="M306 203H348V242H306Z"/><path fill="url(#slate)" d="M299 203L325 160L356 203Z"/><path fill="#c6d9e4" d="M164 268H487V276H164Z M164 345H487V351H164Z"/></g>
      <g fill="#d8ebf3" stroke="#6d8cab" stroke-width="2"><path d="M215 257v55h31v-55q-16 -24 -31 0 M405 257v55h31v-55q-16 -24 -31 0 M215 353v47h31v-47q-16 -18 -31 0 M405 353v47h31v-47q-16 -18 -31 0 M312 213v33h27v-33q-13 -18 -27 0"/><path d="M284 346V408h81v-62q-40 -55 -81 0" fill="#b1c9d8"/><path d="M307 355V408h35v-53q-18 -27 -35 0" fill="#b6a476"/></g>
      <g stroke="#819eb6" stroke-width="1.4"><path d="M231 258v53M216 282h30M420 257v53M406 283h29M231 354v46M216 375h30M420 354v46M406 375h29"/><path d="M312 225h27"/></g>
      <g fill="#f7fcff" stroke="#a9bdc4"><ellipse cx="134" cy="417" rx="100" ry="25"/><ellipse cx="518" cy="417" rx="105" ry="25"/></g>
      <g fill="#dbe8e7" stroke="#91adae" opacity=".9"><circle cx="76" cy="399" r="15"/><circle cx="99" cy="388" r="19"/><circle cx="129" cy="395" r="19"/><circle cx="155" cy="387" r="15"/><circle cx="494" cy="391" r="20"/><circle cx="520" cy="391" r="22"/><circle cx="545" cy="397" r="20"/><circle cx="575" cy="396" r="16"/></g>
      <g fill="#fefefc" stroke="#a9c3ce"><circle cx="93" cy="400" r="12"/><circle cx="151" cy="403" r="11"/><circle cx="497" cy="399" r="12"/><circle cx="560" cy="400" r="12"/></g>
      <g><ellipse cx="325" cy="460" rx="146" ry="32" fill="url(#water)" stroke="#92b3c7" stroke-width="4"/><ellipse cx="325" cy="446" rx="77" ry="13" fill="#d5eaf3" stroke="#8dacc4" stroke-width="3"/><path d="M295 449L308 416H341L355 449Z" fill="#b3c9d6" stroke="#94acbb" stroke-width="2"/><ellipse cx="325" cy="417" rx="42" ry="9" fill="#e3f1f8" stroke="#91b2c9" stroke-width="3"/><path d="M326 419V364 M310 398Q289 386 286 407 M341 398Q360 379 367 407" fill="none" stroke="#a5c6d9" stroke-width="3"/><ellipse cx="326" cy="370" rx="8" ry="12" fill="#d3e7f2"/></g>
      <g fill="none" stroke="#b1cbdc" opacity=".7"><path d="M245 466Q325 434 400 466 M180 458Q325 493 471 458"/></g>
    </svg>
    <div class="scroll-cue">CUỘN ĐỂ XEM</div>
  </section>
  <section class="section intro fade">
    <div class="orn">❦</div><p class="eyebrow">THE CELEBRATION OF LOVE</p>
    <p class="quote">“Giữa muôn vàn cuộc gặp gỡ,<br>chúng mình chọn cùng nhau đi hết một đời.”</p>
    <svg class="divider-illustration" viewBox="0 0 340 125" aria-hidden="true"><g transform="translate(110 113) scale(.75)"><use href="#blossom"/></g><g transform="translate(223 113) scale(-.75 .75)"><use href="#blossom"/></g><path d="M120 105Q170 118 218 105" fill="none" stroke="#bdcfd9"/></svg>
    <h2 class="section-title" style="margin-top:35px">THÔNG TIN LỄ CƯỚI</h2>
    <div class="parents"><div><span>NHÀ TRAI</span><strong>Bà Cao Thị Xuân Thảo</strong></div><div><span>NHÀ GÁI</span><strong>Bà Chu Thị Huấn</strong></div></div>
    <div class="invite-lines">Trân trọng kính mời quý khách<br>đến chung vui trong ngày thành hôn của hai con chúng tôi</div>
    <div class="names">Vũ Minh <i>&</i> Thu Trang</div>
    <div class="floral-border">✿</div>
    <p class="small soft">Sự hiện diện của quý khách là niềm vinh hạnh<br>và hạnh phúc lớn lao của hai gia đình.</p>
  </section>
  <section class="section event fade" id="details">
    <h2 class="section-title">THÔNG TIN TIỆC CƯỚI</h2><div class="small">TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC</div>
    <div class="big-time">11:30</div><div class="date-words">THỨ TƯ &nbsp; | &nbsp; 28 &nbsp; | &nbsp; THÁNG 10</div><div class="date-year">2026</div>
    <div class="tag">TỨC NGÀY 19/09 NĂM BÍNH NGỌ ÂM LỊCH</div>
    <div class="calendar"><div class="month">THÁNG 10 / 2026</div><div class="days" id="calendar"></div></div>
    <button class="btn" id="calendarBtn">✧ &nbsp; Thêm vào lịch</button>
    <img class="table-watercolor" src="/Bàn tiệc cưới Pháp sang trọng.png" alt="Tranh màu nước bàn tiệc cưới với hoa hồng trắng, hoa xanh, nến và ly pha lê">
  </section>
  <section class="section banquet center fade" id="venue">
    <h2 class="section-title">TIỆC CƯỚI SẼ TỔ CHỨC TẠI</h2>
    <div class="venue">TRỐNG ĐỒNG PALACE CẢNH HỒ</div>
    <p class="small soft">173B Trường Chinh, Phương Liệt, Hà Nội</p>
    <div class="map"><iframe title="Bản đồ địa điểm tổ chức tiệc cưới" src="https://maps.google.com/maps?q=Tr%E1%BB%91ng%20%C4%90%E1%BB%93ng%20Palace%20C%E1%BA%A3nh%20H%E1%BB%93%20173B%20Tr%C6%B0%E1%BB%9Dng%20Chinh%20H%C3%A0%20N%E1%BB%99i&output=embed" loading="lazy"></iframe></div>
    <a class="btn" href="https://www.google.com/maps/search/?api=1&query=Tr%E1%BB%91ng%20%C4%90%E1%BB%93ng%20Palace%20C%E1%BA%A3nh%20H%E1%BB%93%20173B%20Tr%C6%B0%E1%BB%9Dng%20Chinh%20H%C3%A0%20N%E1%BB%99i" target="_blank" rel="noopener">⌾ &nbsp; Chỉ đường</a>
    <div class="floral-border">❦</div><h2 class="section-title">HẸN GẶP BẠN TẠI NGÀY VUI</h2>
    <div class="countdown" id="countdown"><div><b>--</b><small>NGÀY</small></div><div><b>--</b><small>GIỜ</small></div><div><b>--</b><small>PHÚT</small></div><div><b>--</b><small>GIÂY</small></div></div>
  </section>
  <section class="section fade" id="gift">
    <div class="floral-border">✿</div>
    <h2 class="section-title">PHONG BAO MỪNG CƯỚI</h2>
    <button class="envelope" id="giftBtn" aria-label="Mở phong bao mừng cưới">
      <span class="back"></span>
      <span class="left"></span>
      <span class="right"></span>
      <span class="front"></span>
      <span class="flap"></span>
      <span class="seal">M&T</span>
    </button>
    <p class="note center">Nhấn để mở</p>
  </section>
  <section class="closing fade"><div class="orn">❦</div><div class="title">Thank you<br>for being here</div><div class="heart">Vũ Minh & Thu Trang</div><p class="small soft">Hẹn gặp bạn vào ngày 28 tháng 10 năm 2026</p><div class="tag" style="margin-top:25px">WITH LOVE, ALWAYS.</div></section>
</main>
<button class="float" id="upBtn" aria-label="Lên đầu trang">↑</button>
<div class="modal-back" id="giftModal" role="dialog" aria-modal="true" aria-label="Phong bao mừng cưới"><div class="modal"><button class="close" id="closeModal" aria-label="Đóng">×</button><div class="orn">✿</div><h3>PHONG BAO MỪNG CƯỚI</h3><p class="gift-description">Minh & Trang rất trân quý tình cảm của bạn.</p><img class="qr-image" src="/ảnh_QR.jpg" alt="Mã QR mừng cưới của Minh và Trang" loading="lazy"><button class="btn" id="closeGift">Đóng</button></div></div>
<script>
(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const petals = $('#petals');

  // Hiệu ứng mở thiệp: hoa bay nhẹ và bung hoa khi nhấn nút.
  const invitationCover = $('#invitationCover');
  const coverFlakes = $('#coverFlakes');
  const openInvitation = $('#openInvitation');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('cover-active');
  if (!reduceMotion) {
    for (let i = 0; i < 20; i++) {
      const flake = document.createElement('span');
      flake.className = 'cover-flake';
      flake.textContent = i % 3 === 0 ? '✻' : '✿';
      flake.style.left = ((i * 47 + 9) % 100) + '%';
      flake.style.fontSize = (9 + (i % 4) * 3) + 'px';
      flake.style.animationDuration = (13 + i % 8) + 's';
      flake.style.animationDelay = (-i * 1.15) + 's';
      coverFlakes.append(flake);
    }
  }
  openInvitation.onclick = () => {
    if (openInvitation.disabled) return;
    openInvitation.disabled = true;
    if (!reduceMotion) {
      const box = openInvitation.getBoundingClientRect();
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height / 2;
      for (let i = 0; i < 45; i++) {
        const flower = document.createElement('span');
        const angle = Math.random() * Math.PI * 2;
        const distance = 65 + Math.random() * 330;
        flower.className = 'cover-burst';
        flower.textContent = i % 3 === 0 ? '❀' : '✿';
        flower.style.left = cx + 'px';
        flower.style.top = cy + 'px';
        flower.style.setProperty('--dx', Math.round(Math.cos(angle) * distance) + 'px');
        flower.style.setProperty('--dy', Math.round(Math.sin(angle) * distance - 80) + 'px');
        flower.style.setProperty('--rot', (Math.random() * 800 - 400) + 'deg');
        flower.style.setProperty('--flower-size', (12 + Math.random() * 20) + 'px');
        flower.style.setProperty('--flower-color', ['#f5f2e6','#c6d9b4','#b6cbd9','#f0d9a4'][i % 4]);
        invitationCover.append(flower);
      }
    }
    invitationCover.classList.add('opening');
    window.setTimeout(() => {
      invitationCover.remove();
      document.body.classList.remove('cover-active');
      window.scrollTo(0, 0);
    }, reduceMotion ? 80 : 1380);
  };

  for (let i = 0; i < 19; i++) {
    const petal = document.createElement('i');
    petal.className = 'petal';
    petal.style.left = (i * 41 + Math.random() * 13) % 100 + '%';
    petal.style.animationDuration = (10 + Math.random() * 15) + 's';
    petal.style.animationDelay = (-Math.random() * 25) + 's';
    petal.style.opacity = .25 + Math.random() * .43;
    petals.append(petal);
  }

  const calendar = $('#calendar');
  ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].forEach(day => {
    const cell = document.createElement('span');
    cell.className = 'dow';
    cell.textContent = day;
    calendar.append(cell);
  });
  for (let i = 0; i < 3; i++) calendar.append(document.createElement('span'));
  for (let day = 1; day <= 31; day++) {
    const cell = document.createElement('span');
    cell.textContent = day;
    if (day === 28) cell.className = 'active';
    calendar.append(cell);
  }

  const deadline = new Date('2026-10-28T11:30:00+07:00').getTime();
  function tick() {
    const remaining = Math.max(0, deadline - Date.now());
    const values = [
      Math.floor(remaining / 864e5),
      Math.floor(remaining / 36e5) % 24,
      Math.floor(remaining / 6e4) % 60,
      Math.floor(remaining / 1e3) % 60
    ];
    $('#countdown').querySelectorAll('b').forEach((el, i) => {
      el.textContent = String(values[i]).padStart(2, '0');
    });
  }
  tick();
  setInterval(tick, 1000);

  $('#calendarBtn').onclick = () => {
    const lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Minh Trang Wedding//VI',
      'BEGIN:VEVENT', 'DTSTART:20261028T043000Z', 'DTEND:20261028T063000Z',
      'SUMMARY:Tiệc cưới Vũ Minh & Thu Trang',
      'LOCATION:Trống Đồng Palace Cảnh Hồ, 173B Trường Chinh, Hà Nội',
      'DESCRIPTION:Hân hạnh chào đón quý khách đến chung vui cùng Minh và Trang.',
      'END:VEVENT', 'END:VCALENDAR'
    ];
    const link = document.createElement('a');
    link.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(lines.join('\r\n'));
    link.download = 'thiep-cuoi-minh-trang.ics';
    document.body.append(link);
    link.click();
    link.remove();
  };

 

  const modal = $('#giftModal');
  $('#giftBtn').onclick = () => modal.classList.add('show');
  function close() { modal.classList.remove('show'); }
  $('#closeModal').onclick = close;
  $('#closeGift').onclick = close;
  modal.onclick = event => { if (event.target === modal) close(); };
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  $('#upBtn').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 });
    document.querySelectorAll('.fade').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.fade').forEach(el => el.classList.add('in'));
  }
})();
</script>
</body>
</html>
`;

const PAGE_RESET = `
  :root, html, body, #root {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    min-height: 0 !important;
    max-width: none !important;
    box-sizing: border-box !important;
  }
  html, body { overflow: hidden !important; }
  body { display: block !important; min-width: 320px !important; }
  #root { display: block !important; text-align: left !important; }
`;

export default function App() {
  useEffect(() => {
    document.title = "Thiệp cưới Vũ Minh & Thu Trang | 28.10.2026";
  }, []);

  return (
    <>
      <style>{PAGE_RESET}</style>
      <iframe
        title="Thiệp cưới Vũ Minh và Thu Trang"
        srcDoc={INVITATION_HTML}
        style={{
          display: "block",
          width: "100%",
          height: "100dvh",
          border: 0,
          background: "#fff",
        }}
      />
    </>
  );
}
