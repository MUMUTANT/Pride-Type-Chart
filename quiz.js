
let inputName = "";
const nameInput = document.getElementById("nameInput");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const startBtn = document.getElementById("startBtn");
const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backBtn = document.getElementById("backBtn");
const COLS = 4;
const ROWS = 4;
const GRID = 5;


const questions={
 "1-1":"Q.目的のためなら倫理に反することも厭わない",
 "1-2":"Q.自分に圧倒的自信を持ち、謙遜もしない",
 "1-3":"Q.気まぐれな自由人で何を考えているのかよく分からない",
 "1-4":"Q.喋り方や仕草が胡散臭かったりいちいち大げさで芝居がかっている",
 
 "2-1":"Q.無知や無能、弱いということはそれ自体が罪だ",
 "2-2":"Q.他者の痛みに寄り添ったり心を痛めたりすることはない",
 "2-3":"Q.感情が昂ると冷静さを失い、短慮な行動に出がちだ",
 "2-4":"Q.自分の行動が周囲からどう見られるかは気にしない",
 
 "3-1":"Q.無関係な他人のために命を張ろうとは思わない",
 "3-2":"Q.己の利のために人を騙すことに後ろめたさや抵抗は感じない",
 "3-3":"Q.最後に勝つためならば負けを演じたり下手にでることもできる",
 "3-4":"Q.決して自分の立場が悪くならないよう上手く立ち回る",
 
 "4-1":"Q.一般論では悪事とされることでも状況によっては正当化される",
 "4-2":"Q.他人を支えるよりも自身の成功に向かって生きている",
 "4-3":"Q.大勢の上に立って責任を負ったり面倒を見るのはごめんだ",
 "4-4":"Q.自分自身やその生き方を肯定し、矜持を誇れる",
}

const results = {
  "right-1": {
    title: "快楽主義のサイコパス",
    description: `自己愛が強く他人を人と思わないサイコパス。
    野望の実現のために動くが、何よりも争いや刺激的なものが
    好きな気まぐれで計画より面白いと思うものへ向かう。
    サディズム傾向があり支配や暴力に充足を感じるが、
    独特の美学を持ち普段の振る舞いは上品であることが多い。
    強者とは積極的に争いたがりライバル関係にある相手には
    執着や愛憎等、強い感情を抱きがち。`,
    example: "例)アラスター(ハズビンホテル)、パリストン(HUNTER×HUNTER)"
  },

  "right-2":{
    title: "傲慢な独裁者",
    description: `傲慢で尊大、他者を見下す傾向が強く
    軽んじられることを決して許さない。非常に感情的で
    決めつけや思い込みの激しい一面もある排他的な思考の持ち主。
    差別主義者であることも多い。自分の能力や権力に誇りを持ち、
    王者として振る舞い他人を屈服させようとする。
    敵と味方を明確に区別し、味方にとっては過激ではあるが頼れる強者であることも。`,
    example:"例)爆豪勝己(僕のヒーローアカデミア)、ハンコック(ONEPIECE)"
  },
  "right-3":{
     title: "悪のフィクサー",
    description: `二面性が強く、社会的な善人の外面を保ちながらも
    裏では己の利に物事が運ぶよう糸を引く。人心掌握を得意とし
    周りの印象を操作して自分に有利な環境作りを徹底する。
    協力者がいたとしても仲間とは思わず駒として使い捨てるなど
    非道で狡猾。計画的で理性の元に行動するが、
    人一倍負けん気が強くプライドが邪魔をし失敗することも。`,
    example: "例）夜神月(DEATHNOTE)、藍染惣右介(BLEACH)"
  },
  "right-4": {
    title: "冷徹なリアリスト",
    description: `他人に決して期待せず興味もない。
    邪魔されることを1番に嫌い有用でない者は即座に
    切り捨てる冷酷さを持つ。完璧主義で神経質だが
    能力があるため権力者である場合も多い。
    他者の力量不足に苛立つこともあるが期待した自分の間違いだと
    結論付ける。ちくちく腐してきたり、嫌味っぽい言動あり。
    非情に徹するが、共に過ごすうちに情が湧き
    責任感や罪悪感は人知れず心の内に抱えることも。`,
    example:"例)ジェイド(テイルズオブジアビス)、スネイプ(ハリー・ポッター)"
  },

  "down-1": {
    title: "正義のヒーロー",
    description: `理想に燃えるヒーロー。
    弱きを助け人々の力になりたいと強く願う。
    確固たる信念を持って義憤に燃え、理不尽や悪行を許さない。
    仲間内には素直で柔らかい態度であることが多いが、
    悪には絶対に屈しない！という一点特化のプライド。
    正義を貫く反面、白黒思考の熱意が暴走しがちな危うさもある。`,
    example: "例）炭治郎(鬼滅の刃)、ゴン(HUNTER×HUNTER)"
  },
  "down-2": {
    title: "忠義を貫く守護者",
    description: `気難しい一面も目立つが誠実で義理堅い。
    誇り高く自分にも他者にも厳しいストイックな気質で、
    信頼し認めた相手は自己犠牲も厭わず守り通す。
    リーダーシップを発揮するよりも信頼を置く相手の右腕や守護者として活躍する。
    コミュニケーションにおいては不器用なこともしばしば。`,
    example:"例)へし切長谷部(刀剣乱舞)、エルザ(FAIRYTAIL)"
  },
  "down-3": {
    title: "カリスマ野心家",
    description: `野心に燃える理想家。
    圧倒的な自信と能力で他者の心を掴み牽引する。情に厚く
    集団のリーダーとして責任を背負い上に立つ度胸と自信があるため
    部下にも信頼され慕われる。面倒見も良いが秩序を守らないものや
    道理に反するものなど、集団の輪を乱すものには厳しく厳格。
    仲間思いな一面が弱点になることも。`,
    example:"例)跡部景吾(テニスの王子様)、マスタング大佐(鋼の錬金術師)"
  },
  "down-4": {
    title: "厭世的な捻くれ者",
    description: `諦観と捨てきれない期待に挟まれ、達観したようで幼い精神の残る捻くれ者。
    支配や束縛を嫌い自由であることを望む。軽薄かつ生意気な態度で
    他者を馬鹿にしたりするが、同じように自分を決めつけられたり
    軽んじられることを酷く嫌う。自分が嫌いで自己肯定感が低いのに
    プライドばかり尊大な難儀な性格。
    愛情や承認を欲する反面、厭世的で他者を信用しようとしない。`,
    example: "例)アスカ(エヴァンゲリオン)、スカラマシュ(原神)"
  }
};




//Start画面
startBtn.addEventListener("click", () => {
  inputName = nameInput.value.trim() || "あなた";

  startScreen.style.display = "none";
  quizScreen.style.display = "flex";
  showQuestion();
});

let row =1;
let col =1;
let path=[];

//質問画面
function showQuestion() {
  path.push({ row, col });
  questionEl.textContent = questions[`${row}-${col}`];
}

function answer(yes) {
  path.push({
    row,
    col,
    move: yes ? "yes" : "no"
  });

  if (yes) col++;
  else row++;

  if (!questions[`${row}-${col}`]) {
    path.push({ row, col });
    showResult();
  } else {
    showQuestion();
  }
}


backBtn.addEventListener("click", goBack);//１問前に戻る
function goBack() {
  if (path.length > 1) {
    // 現在の質問を削除
    path.pop();
    
    // 一つ前の質問を取得
    const last = path[path.length - 1];
    row = last.row;
    col = last.col;

    // 質問を表示
    questionEl.style.display = "block";
    questionEl.textContent = questions[`${row}-${col}`];

    // YES/NOボタン表示
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";

    // 結果エリア非表示
    //resultArea.style.display = "none";

    // 戻るボタンの表示/非表示
    backBtn.style.display = path.length > 1 ? "inline-block" : "none";
  }
}

// 質問表示関数内でも表示制御
function showQuestion() {
  path.push({ row, col });
  questionEl.textContent = questions[`${row}-${col}`];

  // 一問目なら戻るボタン非表示
  backBtn.style.display = path.length > 1 ? "inline-block" : "none";
}





//診断結果表示(html遷移)＿GoResult
function showResult() {
  const params = new URLSearchParams({
    row,
    col,
    path: JSON.stringify(path),
    name: inputName
  });
  
  

  location.href = `result.html?${params.toString()}`;
  let resultKey;

if (col === 5) {
  resultKey = `right-${row}`;
} else {
  resultKey = `down-${col}`;
}

location.href =
  `result.html?` +
  `resultKey=${resultKey}` +
  `&name=${encodeURIComponent(inputName)}` +
  `&path=${encodeURIComponent(JSON.stringify(path))}`;
}



//ここまで結果、以下リセット

function resetQuiz() {
  row = 1;
  col = 1;
  path = [];
  inputName = "";



  // 名前初期化
  const nameInput = document.getElementById("nameInput");
  nameInput.value = "";

  // TOP画面遷移
  //resultArea.style.display = "none";
  quizScreen.style.display = "none";
  startScreen.style.display = "block";

  // 質問とボタン表示状態を戻す
  questionEl.style.display = "block";
  questionEl.textContent = "";  
  yesBtn.style.display = "inline-block";
  noBtn.style.display = "inline-block";
  backBtn.style.display = "inline-block";

  // 結果表初期化
  //routeSvg.innerHTML = "";
}


// ボタンに動きをつける
yesBtn.addEventListener("click", () => answer(true));
noBtn.addEventListener("click", () => answer(false));


