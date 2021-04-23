
var lang = location.href.split("/")[4];
var local = location.href.split("/")[3]+"/"+location.href.split("/")[4];
if(lang.length > 2) {
    lang = "en";
    local = "";
}
var h_title_lang = lang;
if(lang == "eg" || lang == "my" || lang == "pr" || lang == "th" || lang == "cn") h_title_lang = "en";
var title_lang = lang;
if(lang == "eg" || lang == "cn") title_lang = "en";
if(lang == "eg") lang = "en";
// namespace.
window.resource = window.resource || {};
// preload.jsで読み込んだ素材を保持する変数。
window.resource.assets = {};
//読み込む画像ファイル一覧
var manifest = [
    {id:"_mbg0", src:"pic/BG01.png"},//背景画像
    {id:"_haeder", src:"pic/game_header_title_"+h_title_lang+".png"},//タイトル
    {id:"_IndicatorBack", src:"pic/Indicator_800.png"},//インジケータ
    {id:"_IndicatorBar", src:"pic/Indicator_802.png"},//インジケータのバー
    {id:"_timerCover", src:"pic/game_watch.png"},//時計
    {id:"_gameover", src:"pic/GAME_OVER_"+lang+".png"},//ゲームオーバー画像
    {id:"_gameclear", src:"pic/GAME_clear.png"},//ゲームクリア画像
    {id:"_pokoStay", src:"pic/Poko_swell01.png"},//最初のぽこちゃん
    {id:"_pokocorrect", src:"pic/Poko_swell02.png"},//正答時のぽこちゃん
    {id:"_poko_onemiss", src:"pic/Poko_swell03.png"},//1ミス後のぽこちゃん
    {id:"_poko_twomiss", src:"pic/Poko_swell04.png"},//2ミス後のぽこちゃん
    {id:"_poko_threemiss", src:"pic/Poko_swell05.png"},//３ミス後のぽこちゃん
    {id:"_poko_clear", src:"pic/Poko_swell06.png"},//クリア時のぽこちゃん
    //バルーン各種ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    {id:"_ballon00", src:"pic/ballon_00.png"},
    {id:"_ballon1", src:"pic/ballon_01.png"},
    {id:"_ballon2", src:"pic/ballon_02.png"},
    {id:"_ballon3", src:"pic/ballon_03.png"},
    {id:"_ballon4", src:"pic/ballon_04.png"},
    {id:"_ballon5", src:"pic/ballon_05.png"},
    {id:"_ballon6", src:"pic/ballon_06.png"},
    {id:"_ballon7", src:"pic/ballon_07.png"},
    {id:"_ballon8", src:"pic/ballon_08.png"},
    {id:"_ballon9", src:"pic/ballon_09.png"},
    {id:"_ballon10", src:"pic/ballon_10.png"},
    {id:"_ballon11", src:"pic/ballon_11.png"},
    {id:"_ballon12", src:"pic/ballon_12.png"},
    {id:"_ballon13", src:"pic/ballon_13.png"},
    {id:"_ballon14", src:"pic/ballon_14.png"},
    //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    {id:"_title", src:"pic/title01_"+title_lang+".png"},
    //ボタン各種ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    {id:"_startU", src:"pic/title_start_button.png"},
    {id:"_startD", src:"pic/title_start_button_Down.png"},
    {id:"_nextU", src:"pic/quiz_NEXT_btn.png"},
    {id:"_nextD", src:"pic/quiz_NEXT_btn_down.png"},
    {id:"_batsuU", src:"pic/ans_batsu_btn.png"},
    {id:"_batsuD", src:"pic/ans_batsu_btn_down.png"},
    {id:"_maruU", src:"pic/ans_maru_btn.png"},
    {id:"_maruD", src:"pic/ans_maru_btn_down.png"},
    {id:"_topU", src:"pic/title_home_button.png"},
    {id:"_topD", src:"pic/title_home_button_down.png"},
    {id:"_replayU", src:"pic/title_replay_button.png"},
    {id:"_replayD", src:"pic/title_replay_button_Down.png"},
    //―――――――――――――――――――――――――――――――――――――――――――――――――――――――――
    //アニメーション各種------------------------------------------------------  
    {id:"_AnimationBg", src:"pic/Animation_bg.png"},
    //-------------------------------------------------------------------
    //ゲームBGM各種―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
    {id:"_bg_sound", src:"ucbgm8swellB_bgm.mp3"},//ゲーム中のBGM
    {id:"_question_sound", src:"ucbgm8swell_se1.mp3"},//制限時間BGM
    {id:"_Prequestion_sound", src:"ucbgm8swell_se2.mp3"},//出題BGM
    {id:"_correct_sound", src:"ucSE1seikai.mp3"},//正解BGM
    {id:"_misstake_sound", src:"ucSE2fuseikai.mp3"},//不正解BGM
    {id:"_clear_sound", src:"ucSE5_game_clear.mp3"},//クリアBGM
    {id:"_over_sound", src:"ucSE6_game_over.mp3"},//ゲームオーバ―BGM
    {id:"_btn_sound", src:"ucSE4_btn_sel.mp3"},//ボタンのBGM
    {id:"_balloon_a", src:"ucbgm8_balloon_a.mp3"},
    {id:"_balloon_b", src:"ucbgm8_balloon_b.mp3"},
    {id:"_title_sound", src:"ucbgm1(title)loop0711.mp3"},
    {id:"_se_sel", src:"ucSE4_btn_sel.mp3"},
　　//――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
    //モザイク画像各種―――――――――――――――――――――――――――――――――――――――――――――――
    {id:"_mosaic101", src:"pic/mosaic_01_01.png"},
    {id:"_mosaic102", src:"pic/mosaic_01_02.png"},
    {id:"_mosaic103", src:"pic/mosaic_01_03.png"},
    {id:"_mosaic104", src:"pic/mosaic_01_04.png"},
    {id:"_mosaic201", src:"pic/mosaic_02_01.png"},
    {id:"_mosaic202", src:"pic/mosaic_02_02.png"},
    {id:"_mosaic203", src:"pic/mosaic_02_03.png"},
    {id:"_mosaic204", src:"pic/mosaic_02_04.png"},
    {id:"_mosaic301", src:"pic/mosaic_03_01.png"},
    {id:"_mosaic302", src:"pic/mosaic_03_02.png"},
    {id:"_mosaic303", src:"pic/mosaic_03_03.png"},
    {id:"_mosaic304", src:"pic/mosaic_03_04.png"},
    {id:"_mosaic401", src:"pic/mosaic_04_01.png"},
    {id:"_mosaic402", src:"pic/mosaic_04_02.png"},
    {id:"_mosaic403", src:"pic/mosaic_04_03.png"},
    {id:"_mosaic404", src:"pic/mosaic_04_04.png"},
    {id:"_mosaic501", src:"pic/mosaic_05_01.png"},
    {id:"_mosaic502", src:"pic/mosaic_05_02.png"},
    {id:"_mosaic503", src:"pic/mosaic_05_03.png"},
    {id:"_mosaic504", src:"pic/mosaic_05_04.png"},
    {id:"_mosaic601", src:"pic/mosaic_06_01.png"},
    {id:"_mosaic602", src:"pic/mosaic_06_02.png"},
    {id:"_mosaic603", src:"pic/mosaic_06_03.png"},
    {id:"_mosaic604", src:"pic/mosaic_06_04.png"},
    {id:"_mosaic701", src:"pic/mosaic_07_01.png"},
    {id:"_mosaic702", src:"pic/mosaic_07_02.png"},
    {id:"_mosaic703", src:"pic/mosaic_07_03.png"},
    {id:"_mosaic704", src:"pic/mosaic_07_04.png"},
    {id:"_mosaic801", src:"pic/mosaic_08_01.png"},
    {id:"_mosaic802", src:"pic/mosaic_08_02.png"},
    {id:"_mosaic803", src:"pic/mosaic_08_03.png"},
    {id:"_mosaic804", src:"pic/mosaic_08_04.png"},
    {id:"_mosaic901", src:"pic/mosaic_09_01.png"},
    {id:"_mosaic902", src:"pic/mosaic_09_02.png"},
    {id:"_mosaic903", src:"pic/mosaic_09_03.png"},
    {id:"_mosaic904", src:"pic/mosaic_09_04.png"},
    {id:"_mosaic1001", src:"pic/mosaic_10_01.png"},
    {id:"_mosaic1002", src:"pic/mosaic_10_02.png"},
    {id:"_mosaic1003", src:"pic/mosaic_10_03.png"},
    {id:"_mosaic1004", src:"pic/mosaic_10_04.png"},
    {id:"_mosaic1101", src:"pic/mosaic_11_01.png"},
    {id:"_mosaic1102", src:"pic/mosaic_11_02.png"},
    {id:"_mosaic1103", src:"pic/mosaic_11_03.png"},
    {id:"_mosaic1104", src:"pic/mosaic_11_04.png"},
    {id:"_mosaic1201", src:"pic/mosaic_12_01.png"},
    {id:"_mosaic1202", src:"pic/mosaic_12_02.png"},
    {id:"_mosaic1203", src:"pic/mosaic_12_03.png"},
    {id:"_mosaic1204", src:"pic/mosaic_12_04.png"},
    {id:"_mosaic1301", src:"pic/mosaic_13_01.png"},
    {id:"_mosaic1302", src:"pic/mosaic_13_02.png"},
    {id:"_mosaic1303", src:"pic/mosaic_13_03.png"},
    {id:"_mosaic1304", src:"pic/mosaic_13_04.png"},
    {id:"_mosaic1401", src:"pic/mosaic_14_01.png"},
    {id:"_mosaic1402", src:"pic/mosaic_14_02.png"},
    {id:"_mosaic1403", src:"pic/mosaic_14_03.png"},
    {id:"_mosaic1404", src:"pic/mosaic_14_04.png"},
    {id:"_mosaic1501", src:"pic/mosaic_15_01.png"},
    {id:"_mosaic1502", src:"pic/mosaic_15_02.png"},
    {id:"_mosaic1503", src:"pic/mosaic_15_03.png"},
    {id:"_mosaic1504", src:"pic/mosaic_15_04.png"},
    {id:"_mosaic1601", src:"pic/mosaic_16_01.png"},
    {id:"_mosaic1602", src:"pic/mosaic_16_02.png"},
    {id:"_mosaic1603", src:"pic/mosaic_16_03.png"},
    {id:"_mosaic1604", src:"pic/mosaic_16_04.png"},
    {id:"_mosaic1701", src:"pic/mosaic_17_01.png"},
    {id:"_mosaic1702", src:"pic/mosaic_17_02.png"},
    {id:"_mosaic1703", src:"pic/mosaic_17_03.png"},
    {id:"_mosaic1704", src:"pic/mosaic_17_04.png"},
    {id:"_mosaic1801", src:"pic/mosaic_18_01.png"},
    {id:"_mosaic1802", src:"pic/mosaic_18_02.png"},
    {id:"_mosaic1803", src:"pic/mosaic_18_03.png"},
    {id:"_mosaic1804", src:"pic/mosaic_18_04.png"},
    {id:"_mosaic1901", src:"pic/mosaic_19_01.png"},
    {id:"_mosaic1902", src:"pic/mosaic_19_02.png"},
    {id:"_mosaic1903", src:"pic/mosaic_19_03.png"},
    {id:"_mosaic1904", src:"pic/mosaic_19_04.png"},
    {id:"_mosaic2001", src:"pic/mosaic_20_01.png"},
    {id:"_mosaic2002", src:"pic/mosaic_20_02.png"},
    {id:"_mosaic2003", src:"pic/mosaic_20_03.png"},
    {id:"_mosaic2004", src:"pic/mosaic_20_04.png"},
    //――――――――――――――――――――――――――――――――――――――――――――――
];
//
window.resource2 = window.resource2 || {};
window.resource2.assets = {};
//読み込む画像ファイル一覧
var manifest2 = [
    {id:"_anime1", src:"pic/Balloon_animation_mysg_1.png"},
    {id:"_anime2", src:"pic/Balloon_animation_mysg_2.png"},
    {id:"_anime3", src:"pic/Balloon_animation_mysg_3.png"},
    {id:"_nextU", src:"pic/quiz_NEXT_btn.png"},
    {id:"_nextD", src:"pic/quiz_NEXT_btn_down.png"},
    {id:"_bg_sound2", src:"ucbgm3(result)loop0711.mp3"}
];
//
var stage;//ステージ
var ballonContainer;//バルーンのコンテナ
var board;//ステージの子
var mbg = [];//背景
var mosaicMax = [];//モザイク強
var mosaicMidium = [];//モザイク中
var mosaicMin = [];//モザイク小
var mosaicNone = [];//モザイクなし
var IndicatorArray = [];//インジケータの図形を格納
var g2Array = [];//真ん中の円を格納
var haeder;//左上のゲームのマーク
var IndicatorBar;

var IndicatorBack;//正解数を入れる図形
var IndicatorArrayNum;//インジケータの図形の要素番号
var IndicatorNumText;//インジケータの正答数テキスト
var IndicatorNum;//正解数
var TimerText;//残り時間テキスト
var Timer;//残り時間
var circle1;//最も後ろの円
var arc;//弧を描く
var circle2;//2番目に後ろの円
var circle3;//3番目に後ろの円
var picture;//モザイク写真を入れる
var TimerCover;//タイマー画像を格納
var random;//モザイク画像をランダムに選択する変数
var batsuU;//バツボタンのUP
var batsuD;//バツボタンのDown
var maruU;//丸ボタンのUP
var maruD;//丸ボタンのDown
var maruFlag;//丸ボタンが押されたか
var batsuFlag;//バツボタンが押されたか
var angle;//円の角度指定する変数
var QuestionNum;//現在の質問数
var IndicatorMass;//インジケータのマス
var currentImage;//現在の問題の画像
var Imagecount;//ぼかしを和らげるタイミングを指示する変数
var timercheck;//countdown関数を管理する変数
var ImageMovecount;//ぼかしを和らげる関数を管理する変数
var missCnt;//現在のミス数を計る変数
var circleContainer;//円の図形のコンテナ
var clearboard;//クリア画像の変数
var currentPoko;//現在のぽこちゃん
var currentBallon;//現在のバルーン
var outCircleContainer;//一番外側にある円のコンテナ
var questionSound;//カウントダウンの音
var prequestionSound;//問題出題時の音
var correctSound;//正解時の音
var random_str; //random変数を格納する変数
var shape1;//最も外側の円
var UpFlag;//ボタンが上がっているか
var firstballon;
var Flash;
var balloon_a;
var balloon_b;
var missBool;

var misstakeSound;//不正解時のサウンド
var clearSound;//クリア時のサウンド
var overSound;//ゲームオーバ時のサウンド
var btnSound;//ボタンタップ時のサウンド
var ButtonFlag;//ボタンが押されたか
var pokoStay;//開始時のぽこちゃんを格納
var title;//タイトル画像を格納
var startU,startD;//スタートボタンの格納
var nextU,nextD;//ネクストボタンの格納
var topU,topD;//トップボタンの格納
var replayU,replayD;//リプレイボタンの格納
var gameOver;//ゲームオーバ画面の変数
var bg_sound;//ゲーム中のサウンド
var bg_sound2;//最後のアニメ中のサウンド
var title_sound;
var title_sound_f = false;
//円各種ーーーーーーーーーーーーー
var g1;
var g2;
var g3;
var shape2;
var shape3;
//-----------------------------

var mode;//ゲームのモード変更（円のモードを変更する）
var swellCnt;//風船の膨らみを変数化
var BallonCnt;//現在の風船の膨らみを格納
var game_f;//trueなら操作可能、falseなら操作できなくなる。
var over_text//ゲームオーバ時のテキストメッセージ

//画像を読み込む--------------------------------
var queue = new createjs.LoadQueue();
queue.addEventListener('fileload', function(event){
	resource.assets[event.item.id] = event.result;
});
queue.addEventListener('complete', function(event){
	createjs.Ticker.framerate = 12;
	createjs.Ticker.addEventListener("tick",handleTick);
	$('#loading').css("visibility","hidden");
    init();
});
queue.installPlugin(createjs.Sound);
queue.loadManifest(manifest);
//
var queue2 = new createjs.LoadQueue();
queue2.addEventListener('fileload', function(event){
	resource2.assets[event.item.id] = event.result;
});
queue2.addEventListener('complete', function(event){
    $('#loading').css("visibility","hidden");
    $('#canvas_area').css("visibility","visible");
    window.resource.assets = {};    //ゲームのメモリー開放
    queue = null;   //ゲームのメモリー開放
    poko_anime();
});
queue2.installPlugin(createjs.Sound);
//-------------------------------------
//Tickをゲーム中に回す------------------------
function handleTick(event){
    if(game_f && ButtonFlag) buttonAction();
    
    stage.update(event);
}
//-------------------------------------------
//全体の初期化---------------------------------------------------------------------------------------
function init(){
    
    //ステージやコンテナの作成--------------------------------
    stage = new createjs.Stage("canvas_area");
    createjs.Touch.enable(stage);

    
    board = new createjs.Container();
    stage.addChild(board);

    IndicatorContainer = new createjs.Container();
    board.addChild(IndicatorContainer);

    ballonContainer = new createjs.Container();
    IndicatorContainer.addChild(ballonContainer);

    circleContainer = new createjs.Container();
    board.addChild(circleContainer);

    outCircleContainer = new createjs.Container();
    circleContainer.addChild(outCircleContainer);
    //---------------------------------------------------

   
    //モザイク画像を格納------------------------------------------------------------------
    for(var i = 1; i <= 20; i++){
        mosaicMax[i-1] = new createjs.Bitmap(resource.assets["_mosaic"+String(i)+"01"]);
        mosaicMidium[i-1] = new createjs.Bitmap(resource.assets["_mosaic"+String(i)+"02"]);
        mosaicMin[i-1] = new createjs.Bitmap(resource.assets["_mosaic"+String(i)+"03"]);
        mosaicNone[i-1] = new createjs.Bitmap(resource.assets["_mosaic"+String(i)+"04"]);
    }
    //-----------------------------------------------------------------------------------


    //スタート画面の構成-------------------------------------------------
    mbg[0] = new createjs.Bitmap(resource.assets["_mbg0"]);
    mbg[0].x = 0;
    mbg[0].y = 0;
    ballonContainer.addChild(mbg[0]);

    title = new createjs.Bitmap(resource.assets["_title"]);
    title.x = 0;
    title.y = 0;
    board.addChild(title);
    //
    startU = new createjs.Bitmap(resource.assets["_startU"]);
    startU.x = (mbg[0].getBounds().width - startU.getBounds().width)/2;
    startU.y = 750;
    board.addChild(startU);
    //
    
    firstballon = new createjs.Bitmap(resource.assets["_ballon00"]);
    firstballon.x = stage.canvas.width/2 - firstballon.getBounds().width/2;
    firstballon.y = stage.canvas.height - firstballon.getBounds().height;
    board.addChild(firstballon);

    startU.addEventListener("mousedown", start_down);
    startU.addEventListener("pressup", start_up);
    board.addEventListener("mousedown", click_title_down);
    if(local != "") sendStartPageTraking(local);
    //------------------------------------------------------------------
}
//------------------------------------------------------------------------------------------------------------------------------
function click_title_down() {
    if(title_sound_f) return;
    title_sound_f = true;
    title_sound = createjs.Sound.play("_title_sound", {loop:-1});
}
function start_down() {
    if(title_sound_f) title_sound.stop();
    createjs.Sound.play("_se_sel");
    title_sound_f = true;
    startU.removeEventListener("mousedown", start_down);
    startD = new createjs.Bitmap(resource.assets["_startD"]);
    startD.x = startU.x;
    startD.y = startU.y;
    board.removeChild(startU);
    board.addChild(startD);
    if(local != "") sendStartSceneStartActionEvent(local);
}
function start_up() {
    //mbg[4].y = -500;
    startU.removeEventListener("pressup", start_up);
    board.removeChild(title);
    board.removeChild(startD);
    board.removeChild(firstballon);
    start();
}
//ゲーム開始時の初期化------------------------------------------------------------------------------------------
function start() {
    game_f = true;
    maruFlag=false;
    batsuFlag=false;
    ButtonFlag = true;
    missBool = false;
    mode = false;
    UpFlag = true;
    swellCnt = 0;
    BallonCnt=0;
    IndicatorArray = [];
    g2Array = [];
    IndicatorArrayNum = 0;
    angle=0;
    random_str = 0;
    missCnt=0;
    

    //真ん中の円とモザイク画像の構成------------------------------------------------------

    //1番後ろにある円を描く
    circle1 = new createjs.Shape();
    circle1.graphics.beginFill("#CCCCCC");
    circle1.graphics.drawCircle(stage.canvas.width/2,stage.canvas.height/2-83,242);
    outCircleContainer.addChild(circle1);

    //2番後ろにある円を描く
    circle2 = new createjs.Shape();
    circle2.graphics.beginFill("beige");
    circle2.graphics.drawCircle(stage.canvas.width/2,stage.canvas.height/2-83,222);
    board.addChild(circle2);

    //3番後ろにある円を描く
    circle3 = new createjs.Shape();
    circle3.graphics.beginFill("white");
    circle3.graphics.drawCircle(stage.canvas.width/2,stage.canvas.height/2-83,145);
    board.addChild(circle3);

    header = new createjs.Bitmap(resource.assets["_haeder"]);
    header.x = 0;
    header.y = 0;
    board.addChild(header);

    

    IndicatorBack = new createjs.Bitmap(resource.assets["_IndicatorBack"]);
    IndicatorBack.x = 40;
    IndicatorBack.y = 65;
    IndicatorBack.scaleX = 0.9;
    IndicatorContainer.addChild(IndicatorBack);

    IndicatorBar = new createjs.Bitmap(resource.assets["_IndicatorBar"]);
    IndicatorBar.x = 22;
    IndicatorBar.y = 65;
    board.addChild(IndicatorBar);

    IndicatorNum = 0;
    IndicatorNumText = new createjs.Text(IndicatorNum,"40px NotoSans-Bold","#666666");
    IndicatorNumText.textAlign = "center";
    IndicatorNumText.textBaseline = "middle";
    IndicatorNumText.x = 300;
    IndicatorNumText.y = 100;
    IndicatorContainer.addChild(IndicatorNumText);

    TimerCover  = new createjs.Bitmap(resource.assets["_timerCover"]);
    TimerCover.x = stage.canvas.width -140;
    TimerCover.y = 10;
    board.addChild(TimerCover);

    Timer = 6;
    TimerText = new createjs.Text(Timer,"40px NotoSans-Bold","#666666");
    TimerText.textAlign = "center";
    TimerText.textBaseline = "middle";
    TimerText.x = stage.canvas.width - 83;
    TimerText.y = IndicatorNumText.y-15 ;
    board.addChild(TimerText);

    QuestionNum = 1;
    currentBallon = new createjs.Bitmap(resource.assets["_ballon00"]);
    currentBallon.x = stage.canvas.width/2 - currentBallon.getBounds().width/2;
    currentBallon.y = stage.canvas.height - currentBallon.getBounds().height;
    ballonContainer.addChild(currentBallon);
    
    maruU = new createjs.Bitmap(resource.assets["_maruU"]);
    maruU.x = stage.canvas.width/2 - maruU.getBounds().width - 30;
    maruU.y = 760;
    board.addChild(maruU);

    batsuU = new createjs.Bitmap(resource.assets["_batsuU"]);
    batsuU.x = stage.canvas.width/2 + 30 ;
    batsuU.y = 760;
    board.addChild(batsuU);

    currentPoko = new createjs.Bitmap(resource.assets["_pokoStay"]);
    currentPoko.x = 0;
    currentPoko.y = 866;
    board.addChild(currentPoko);

    setTimeout(function(){
    //ランダムにモザイクのかかった画像を貼る
    random =  parseInt(Math.random()*20);
    Imagecount = 0;
    mosaicMax[random].x = stage.canvas.width/2-150;
    mosaicMax[random].y = stage.canvas.height/2-230;
    currentImage = mosaicMax[random];
    stage.addChild(currentImage);
    //------------------------------------------------------------------------------------
    prequestionSound = createjs.Sound.play("_Prequestion_sound");
    countstart();
    MoveImage();
    //他の素材の構成---------------------------------------------------------------------------
    maruU.addEventListener("mousedown", maru_down);
    maruU.addEventListener("pressup", maru_up);
    batsuU.addEventListener("mousedown", batsu_down);
    batsuU.addEventListener("pressup", batsu_up);
    //----------------------------------------------------------------------------------------
    bg_sound = createjs.Sound.play("_bg_sound");
    },500);
    if(local != "") sendStagePageTraking(local);
}
//------------------------------------------------------------------------------------------------------------------------------
//マルバツボタンの動作--------------------------------------------------------
function maru_down(){
    if(UpFlag){
    //maruU.removeEventListener("mousedown", maru_down);
    maruD = new createjs.Bitmap(resource.assets["_maruD"]);
    maruD.x = maruU.x;
    maruD.y = maruU.y;
    board.removeChild(maruU);
    board.addChild(maruD);
    UpFlag = false;
    if(ButtonFlag)maruFlag = true;
    btnSound = createjs.Sound.play("_btn_sound");
    }
}
function maru_up(){
    if(UpFlag){
    maruU = new createjs.Bitmap(resource.assets["_maruU"]);
    maruU.addEventListener("mousedown", maru_down);
    maruU.addEventListener("pressup", maru_up);
    maruU.x = maruD.x;
    maruU.y = maruD.y;
    board.removeChild(maruD);
    board.addChild(maruU);
    }
}
function batsu_down(){
    if(UpFlag){
    batsuD = new createjs.Bitmap(resource.assets["_batsuD"]);
    batsuD.x = batsuU.x;
    batsuD.y = batsuU.y;
    board.removeChild(batsuU);
    board.addChild(batsuD);
    UpFlag = false;
    if(ButtonFlag)batsuFlag = true;
    btnSound = createjs.Sound.play("_btn_sound");
    }
}
function batsu_up(){
    if(UpFlag){
    batsuU = new createjs.Bitmap(resource.assets["_batsuU"]);
    batsuU.addEventListener("mousedown", batsu_down);
    batsuU.addEventListener("pressup", batsu_up);
    batsuU.x = batsuD.x;
    batsuU.y = batsuD.y;
    board.removeChild(batsuD);
    board.addChild(batsuU);
    }  
}
//-----------------------------------------------------------------------------------
//カウントダウンを管理-----------------------------------------------------------------------------------
function countstart(){
    if(game_f) timercheck = setInterval('countdown()',1000);
}
function countdown(){
    if(Timer>0 && game_f){
    Timer--;
    board.removeChild(TimerText);
    TimerText = new createjs.Text(Timer,"40px NotoSans-Bold","#666666");
    TimerText.textAlign = "center";
    TimerText.textBaseline = "middle";
    TimerText.x = stage.canvas.width - 83;
    TimerText.y = IndicatorNumText.y-15;
    board.addChild(TimerText);
    }

    if(game_f){  
        angle+=(Math.PI*2)/6;
        createArc("white",stage.canvas.width/2,stage.canvas.height/2-83,242,-Math.PI/2,angle-Math.PI/2); 
    }
    if(game_f && Timer==0 && !maruFlag && !batsuFlag){
        UpFlag = false;
        Misstake();
    } 
}
//------------------------------------------------------------------------------------------------------
//円を作成する関数---------------------------------------------------------------------------------------
function createArc(color,width,height,radius,start,new_angle){  
    board.removeChild(circle3);
    if(radius == 242){
    g1 = new createjs.Graphics();
    g1.beginFill(color);
    g1.moveTo(width,height);
    g1.arc(width,height,radius,start,new_angle);
    
    shape1 = new createjs.Shape(g1);

    outCircleContainer.addChild(shape1);
    }
    if(!mode){
     //2番後ろにある円を描く
     g3 = new createjs.Graphics();
     g3.beginFill("beige");
     g3.moveTo(width,height);
     g3.arc(width,height,222,-Math.PI/2,Math.PI*2);
     var shape3 = new createjs.Shape(g3);
     circleContainer.addChild(shape3);
    }else{
        if(radius == 222){
        g2 = new createjs.Graphics();
        g2.beginFill(color);
        g2.moveTo(width,height);
        g2.arc(width,height,radius,start,new_angle);
        shape2 = new createjs.Shape(g2);
        g2Array[QuestionNum] = shape2;
        board.addChild(g2Array[QuestionNum]);
        }
    }
     //3番後ろにある円を描く
     circle3 = new createjs.Shape();
     circle3.graphics.beginFill("white");
     circle3.graphics.drawCircle(stage.canvas.width/2,stage.canvas.height/2-83,145);
     board.addChild(circle3);
}
//-------------------------------------------------------------------------------------------------------
//押したボタンに対して、正解不正解に分岐させる関数------------------------------------------------------------
function buttonAction(){
    if(maruFlag || batsuFlag){
        ButtonFlag = false;
        if(random>=0 && random<8){
            if(maruFlag){
                Correct();          
            }else{
                Misstake();
            }
        }else{
            if(batsuFlag){
                Correct();
            }else{
                Misstake();
            }
        }
    }
}
//---------------------------------------------------------------------------------------------------------
//正答時の動作関数----------------------------------------------------------------------------------------------------------------------------------------------------------------
function Correct(){
    mode = true;//円の描画方法を変える

    createArc("#FDD000",stage.canvas.width/2,stage.canvas.height/2-83,222,(QuestionNum-1)*((Math.PI*2)/5)-Math.PI/2+Math.PI/360,QuestionNum*((Math.PI*2)/5)-Math.PI/2);
    ChangeIndigator("#FDD000");

    IndicatorNum++;
    IndicatorContainer.removeChild(IndicatorNumText);

    if(IndicatorNum<3){
        IndicatorNumText = new createjs.Text(IndicatorNum,"40px NotoSans-Bold","#666666");
    }else{
        IndicatorNumText = new createjs.Text(IndicatorNum,"40px NotoSans-Bold","#FE7448");
    }
    IndicatorNumText.textAlign = "center";
    IndicatorNumText.textBaseline = "middle";
    IndicatorNumText.x = 300;
    IndicatorNumText.y = 100;
    IndicatorContainer.addChild(IndicatorNumText);
    angle = Math.PI * 2;
    createArc("white",stage.canvas.width/2,stage.canvas.height/2-83,242,-Math.PI/2,angle-Math.PI/2);
    QuestionNum++;

    board.removeChild(currentPoko);
    currentPoko = new createjs.Bitmap(resource.assets["_pokocorrect"]);
    currentPoko.x = 0;
    currentPoko.y = 866;
    board.addChild(currentPoko);

    setTimeout(function(){correctSound = createjs.Sound.play("_correct_sound")},500);//正解時のサウンドを500ms後にならす

    Flash = setInterval(function(){
         Flashing("#FFF200");
    },500);
    DisplayAnswer();
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//不正解時の動作関数-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function Misstake(){
    missCnt++;
    mode =true;
    missBool = true;

    createArc("#CCCCCC",stage.canvas.width/2,stage.canvas.height/2-83,222,(QuestionNum-1)*((Math.PI*2)/5)-Math.PI/2+Math.PI/360,QuestionNum*((Math.PI*2)/5)-Math.PI/2);
    angle = Math.PI*2;
    createArc("white",stage.canvas.width/2,stage.canvas.height/2-83,242,-Math.PI/2,angle-Math.PI/2);
    QuestionNum++;
    
    setTimeout(function(){misstakeSound = createjs.Sound.play("_misstake_sound")},500);//不正解時のサウンドを0.5ms後にならす
    Flash = setInterval(function(){
       Flashing("#ADADAD");
    },500);  
    DisplayAnswer();
}   
//------------------------------------------------------------------------------------------------------------------------------
//正解時にインジケータに図形を出す関数-----------------------------------
function ChangeIndigator(color){
    IndicatorMass = new createjs.Shape();
    IndicatorMass.graphics.beginFill(color);
    IndicatorMass.graphics.drawRect(0,0,37,56);

    IndicatorMass.x = 53 +(IndicatorNum)*37+ IndicatorBack.x;
    IndicatorMass.y = IndicatorBack.y+1;
    IndicatorArray[IndicatorArrayNum] = IndicatorMass;
    IndicatorContainer.addChild(IndicatorArray[IndicatorArrayNum]);
    IndicatorArrayNum++;
}
//----------------------------------------------------------------
//答えを表示する関数-------------------------------------------------------------------------------------
function DisplayAnswer(){
    if(game_f){
    stage.removeChild(currentImage);
    mosaicNone[random].x = stage.canvas.width/2-150;
    mosaicNone[random].y = stage.canvas.height/2-230;
    currentImage = mosaicNone[random];
    stage.addChild(currentImage);
    clearInterval(timercheck);
    clearInterval(imageMovecount);
    createArc("#CCCCCC",stage.canvas.width/2,stage.canvas.height/2-83,242,-Math.PI/2,angle-Math.PI/2);
    angle = 0;
    questionSound.stop();
    //ここで中割りを入れる
    swellCntOperate();
    if(missBool)setTimeout("MiddleDivided();",2000);
    setTimeout("ChangeImage()",3000);
    }
}
//-----------------------------------------------------------------------------------------------------
//点滅をさせる関数-----------------------------------------------------------------------------------------
var i = 0;
function Flashing(color){
 
    board.removeChild(circle3);
     
     if(i%2==0){
        circle3 = new createjs.Shape();
        circle3.graphics.beginFill(color);
        circle3.graphics.drawCircle(stage.canvas.width/2,stage.canvas.height/2-83,145);
        board.addChild(circle3);
     }else{
        circle3 = new createjs.Shape();
        circle3.graphics.beginFill("white");
        circle3.graphics.drawCircle(stage.canvas.width/2,stage.canvas.height/2-83,145);
        board.addChild(circle3);
     }
     i++;    
}

//風船の関数----------------------------------------------------------------------------------------------------------------------
//風船の膨らみを表現する関数（中割り）--------------------------------------------------------------------
function MiddleDivided(){
    var middle = setInterval(function(){  
        if(BallonCnt>=swellCnt){
            clearInterval(middle);
        }else{
        swellBallon();
        }   
    },83);

    if(missCnt == 1){
        balloon_a = createjs.Sound.play("_balloon_a");
    }else
    if(missCnt == 2 || missCnt == 3){
        balloon_b = createjs.Sound.play("_balloon_b");
    }
    missBool = false;
}
//-----------------------------------------------------------------------------------------------------
//風船を膨らます関数-----------------------------------------------------------------------------------
function swellBallon(){
    BallonCnt++;
    ballonContainer.removeChild(currentBallon);
    if(missCnt != 3){
        currentBallon = new createjs.Bitmap(resource.assets["_ballon"+String(BallonCnt)]);
        currentBallon.x = stage.canvas.width/2 - currentBallon.getBounds().width/2;
        currentBallon.y = stage.canvas.height - currentBallon.getBounds().height;
        ballonContainer.addChild(currentBallon);
    }else{
        stage.removeChild(currentBallon);
        currentBallon = new createjs.Bitmap(resource.assets["_ballon"+String(BallonCnt)]);
        currentBallon.x = stage.canvas.width/2 - currentBallon.getBounds().width/2;
        currentBallon.y = stage.canvas.height - currentBallon.getBounds().height;
        stage.addChild(currentBallon); 
    }
}
//---------------------------------------------------------------------------------------------------
//風船がどこまで膨らむかを管理する関数-------------------------------------------------------------------
function swellCntOperate(){
    if(missCnt==1){
        swellCnt = 3;
    }else
    if(missCnt==2){
        swellCnt = 6;
    }else
    if(missCnt==3){
        swellCnt = 14;
    }
}
//----------------------------------------------------------------------------------------------------
//画像を変更する関数--------------------------------------------------------------------------------------
function changePoko(){
    board.removeChild(currentPoko);
    if(missCnt==1){  
        currentPoko = new createjs.Bitmap(resource.assets["_poko_onemiss"]);
        currentPoko.x = 0;
        currentPoko.y = 866;
        board.addChild(currentPoko);
    }else
    if(missCnt==2){
        
        currentPoko = new createjs.Bitmap(resource.assets["_poko_twomiss"]);
        currentPoko.x = 0;
        currentPoko.y = 866;
        board.addChild(currentPoko);  
    }else
    if(missCnt==3){  
        currentPoko = new createjs.Bitmap(resource.assets["_poko_threemiss"]);
        currentPoko.x =0;
        currentPoko.y = 866;
        board.addChild(currentPoko); 
        game_f = false;
        ButtonFlag = false;
        game_over();
    }else{
        board.removeChild(currentPoko);
        currentPoko = new createjs.Bitmap(resource.assets["_pokoStay"]);
        currentPoko.x = 0;
        currentPoko.y = 866;
        board.addChild(currentPoko);    
    }

}
//----------------------------------------------------------------------------------------------------
//現在出している画像を除いた他の画像を問題に出す----------------------------------------------------------
function ChangeImage(){
    //下がったままのボタンを直す---------------------
    UpFlag = true;
    clearInterval(Flash);
    if(maruFlag){
        maru_up();
        maruFlag = false;
    }else
    if(batsuFlag){
        batsu_up();
        batsuFlag = false;
    }
    if(QuestionNum==6 && IndicatorNum>=3){
        game_f = false;
       
        clearInterval(timercheck);
        game_clear();
    }else{
        Timer = 6;
        countstart();
        Imagecount = 0;
        changePoko(game_f);
    }
    //----------------------------------------------  
   random_str = random;
   while(random_str == random){
       random = parseInt(Math.random()*20);
   }
    stage.removeChild(currentImage);
    mosaicMax[random].x = stage.canvas.width/2-150;
    mosaicMax[random].y = stage.canvas.height/2-230;
    currentImage = mosaicMax[random];
    if(game_f)stage.addChild(currentImage);
    prequestionSound = createjs.Sound.play("_Prequestion_sound");

    MoveImage();
    ButtonFlag = true;
}
//----------------------------------------------------------------------------------------------------
//2sごとに画像のモザイクを弱める関数----------------------------------------------------------------------
function MoveImage(){
    if(game_f)questionSound = createjs.Sound.play("_question_sound");
    imageMovecount = setInterval(function(){
        if(game_f){
            if(Imagecount==0){
                mosaicMidium[random].x = currentImage.x;
                mosaicMidium[random].y = currentImage.y;
                stage.removeChild(currentImage);
                stage.addChild(mosaicMidium[random]);
                currentImage = mosaicMidium[random];
                Imagecount++;
            }else
            if(Imagecount==1){
                mosaicMin[random].x = currentImage.x;
                mosaicMin[random].y = currentImage.y;
                stage.removeChild(currentImage);
                stage.addChild(mosaicMin[random]);
                currentImage = mosaicMin[random];
                Imagecount++;
            }else
            if(Imagecount==2){
                Imagecount = 0;
            }
        }
    },2000);
}
//----------------------------------------------------------------------------------------------------
//クリア時の関数-------------------------------------------------------------------------------------------
function game_clear(){
    bg_sound.stop();
    questionSound.stop();

    circleContainer.removeChild(g2.g2Array);
    outCircleContainer.removeChild(shape1);
    circleContainer.removeChild(shape2);
    circleContainer.removeChild(shape3);
    clearSound = createjs.Sound.play("_clear_sound");
    maruU.removeEventListener("mousedown", maru_down);
    maruU.removeEventListener("pressup", maru_up);
    batsuU.removeEventListener("mousedown", batsu_down);
    batsuU.removeEventListener("pressup", batsu_up);
    board.removeChild(currentPoko);
    currentPoko = new createjs.Bitmap(resource.assets["_poko_clear"]);
    currentPoko.x = 0;
    currentPoko.y = 866;
    board.addChild(currentPoko); 

    clearboard = new createjs.Bitmap(resource.assets["_gameclear"]);
    clearboard.x = stage.getBounds().width/2 - clearboard.getBounds().width/2;
    clearboard.y = 340;
    stage.addChild(clearboard);

    nextU = new createjs.Bitmap(resource.assets["_nextU"]);
    nextU.x = stage.getBounds().width/2 - nextU.getBounds().width/2;
    nextU.y = 640;
    stage.addChild(nextU);
	
    nextU.addEventListener("mousedown", next_down);
    nextU.addEventListener("pressup", next_up);
    if(local != "") sendClearPageTraking(local);
}

function next_down() {
    createjs.Sound.play("_se_sel");
    nextU.removeEventListener("mousedown", next_down);
    nextD = new createjs.Bitmap(resource.assets["_nextD"]);
    nextD.x = nextU.x;
    nextD.y = nextU.y;
    stage.removeChild(nextU);
    stage.addChild(nextD);
    if(local != "") sendClearSceneNextActionEvent(local);
}

function next_up() {
    nextU.removeEventListener("pressup", next_up);
    stage.removeChild(nextD);
    stage.removeChild(clearboard);
    AnimationBg = new createjs.Bitmap(resource.assets["_AnimationBg"]);
    AnimationBg.x = 0;
    AnimationBg.y = 0;
    board.addChild(AnimationBg);
    haeder = new createjs.Bitmap(resource.assets["_haeder"]);
    haeder.x = 0;
    haeder.y = 0;
    board.addChild(haeder);
    stage.removeChild(currentImage);
    stage.removeChild(circleContainer);
    stage.removeChild(outCircleContainer);
    $('#canvas_area').css("visibility","hidden");
    $('#loading').css("visibility","visible");
    queue2.loadManifest(manifest2); //load complete poko_anime
}
//----------------------------------------------------------------------------------------------------
//ゲームオーバ時の関数---------------------------------------------------------------------------------
function game_over(){
    bg_sound.stop();
    questionSound.stop();
    overSound = createjs.Sound.play("_over_sound");

    createArc("beige",stage.canvas.width/2,stage.canvas.height/2-83,222,-Math.PI/2,(Math.PI*2)-Math.PI/2);
    circleContainer.removeChild(g2.g2Array);
    outCircleContainer.removeChild(shape1);
    circleContainer.removeChild(shape2);
    circleContainer.removeChild(shape3);

    stage.removeChild(currentImage);
    maruU.removeEventListener("mousedown", maru_down);
    maruU.removeEventListener("pressup", maru_up);
    batsuU.removeEventListener("mousedown", batsu_down);
    batsuU.removeEventListener("pressup", batsu_up);

    stage.removeChild(currentBallon);
    gameOver = new createjs.Bitmap(resource.assets["_gameover"]);
    gameOver.x = 42;
    gameOver.y = 330;
    stage.addChild(gameOver);

    topU = new createjs.Bitmap(resource.assets["_topU"]);
    topU.x = 450;
    topU.y = 980;
    board.addChild(topU);
    replayU = new createjs.Bitmap(resource.assets["_replayU"]);
    replayU.x = 270;
    replayU.y = 980;
    board.addChild(replayU);

    topU.addEventListener("mousedown", top_down);
    topU.addEventListener("pressup", top_up);
    replayU.addEventListener("mousedown", replay_down);
    replayU.addEventListener("pressup", replay_up);
    if(local != "") sendGameOverPageTraking(local);
}
//topボタンの処理----------------------------------------------
function top_down() {
    createjs.Sound.play("_se_sel");
    topU.removeEventListener("mousedown", top_down);
    topD = new createjs.Bitmap(resource.assets["_topD"]);
    topD.x = topU.x;
    topD.y = topU.y;
    board.removeChild(topU);
    board.addChild(topD);
    if(local != "") sendGameOverSceneTopActionEvent(local);
}
function top_up() {
    topU.removeEventListener("pressup", top_up);
    board.removeChild(topD);
    board.removeChild(replayU);
    stage.removeChild(gameOver);
    window.location.href = "/"+local+"/";
}
//-------------------------------------------------------------
//replayボタンの処理---------------------------------------------
function replay_down() {
    createjs.Sound.play("_se_sel");
    replayU.removeEventListener("mousedown", replay_down);
    replayD = new createjs.Bitmap(resource.assets["_replayD"]);
    replayD.x = replayU.x;
    replayD.y = replayU.y;
    board.removeChild(replayU);
    board.addChild(replayD);
    if(local != "") sendGameOverSceneTryAgainActionEvent(local);
}
function replay_up() {
    replayU.removeEventListener("pressup", replay_up);
    board.removeChild(replayD);
    board.removeChild(topU);
    stage.removeChild(gameOver);
    
    board.removeChild(IndicatorMass);
    board.removeChild(IndicatorBack);
    board.removeChild(TimerCover);
    board.removeChild(TimerText);
    stage.removeChild(over_text);
    IndicatorContainer.removeChild(IndicatorArray);
    board.removeChild(currentPoko);
    board.removeChild(maruU);
    board.removeChild(batsuU);
   
    ballonContainer.removeChild(currentBallon);
   
    clearInterval(timercheck);
    clearInterval(imageMovecount);
    start();   
}
//--------------------------------------------------------------
//アニメーション--------------------------------------------------------------------------------------------------------
function poko_anime() {
    var sp = new createjs.SpriteSheet({
        framerate: 12,
        "images": [queue2.getResult("_anime1"),queue2.getResult("_anime2"),queue2.getResult("_anime3")],
        "frames": {"width": 640,"height": 640,"regX": 0, "regY": 0,"count": 75},
        "animations": {
            "set":0,
            "stop":74,
            "anime":[0,74,"stop"]
        }
    });
    anime = new createjs.Sprite(sp, "set");
    anime.x = 0;
    anime.y = 180;
    board.addChild(anime);    
    setTimeout("start_anime()", 500);
    nextU = new createjs.Bitmap(resource2.assets["_nextU"]);
    nextU.x = (AnimationBg.getBounds().width - nextU.getBounds().width)/2;
    nextU.y = 850;
    board.addChild(nextU);
    nextU.addEventListener("mousedown", next_down2);
    nextU.addEventListener("pressup", next_up2);
    if(local != "") sendAnimePageTraking(local);
}

function start_anime() {
    anime.gotoAndPlay("anime");
    bg_sound2 = createjs.Sound.play("_bg_sound2", {loop:-1});
}
function next_down2() {
    createjs.Sound.play("_se_sel");
    nextU.removeEventListener("mousedown", next_down2);
    nextD = new createjs.Bitmap(resource2.assets["_nextD"]);
    nextD.x = nextU.x;
    nextD.y = nextU.y;
    board.removeChild(nextU);
    board.addChild(nextD);
    if(local != "") sendAnimeSceneNextActionEvent(local);
}
function next_up2() {
    nextU.removeEventListener("pressup", next_up2);
    board.removeChild(nextD);
    if(local != "") setTransitionKey();
    window.location.href = "photo_frame/";
}
//---------------------------------------------------------------------------------------------------------

