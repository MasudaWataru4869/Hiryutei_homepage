window.onload = function() {
    //  読み込みが完了したら実行したい処理を記述
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    // ハンバーガーアイコンをクリックしたら
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
    // 黒背景をクリックしたら
    blackBg.addEventListener('click', function() {
        nav.classList.remove('open');
    });
};
