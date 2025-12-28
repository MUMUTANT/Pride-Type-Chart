// 結果データ
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
    example: `example>>
    アラスター(ハズビンホテル)、パリストン(HUNTER×HUNTER)`
  },

  "right-2":{
    title: "傲慢な独裁者",
    description: `傲慢で尊大、他者を見下す傾向が強く軽んじられることを
    決して許さない。非常に感情的で決めつけや思い込みの激しい一面もある
    排他的な思考の持ち主。差別主義者であることも多い。
    自分の能力や権力に誇りを持ち、王者として振る舞い他人を屈服させようとする。
    敵と味方を明確に区別し、味方にとっては過激ではあるが頼れる強者であることも。`,
    example:`example>>
    爆豪勝己(僕のヒーローアカデミア)、ハンコック(ONEPIECE)`
  },
  "right-3":{
     title: "悪のフィクサー",
    description: `二面性が強く、社会的な善人の外面を保ちながらも
    裏では己の利に物事が運ぶよう糸を引く。人心掌握を得意とし
    周りの印象を操作して自分に有利な環境作りを徹底する。
    協力者がいたとしても仲間とは思わず駒として使い捨てるなど
    非道で狡猾。計画的で理性の元に行動するが、
    人一倍負けん気が強くプライドが邪魔をし失敗することも。`,
    example: `example>>
    夜神月(DEATHNOTE)、藍染惣右介(BLEACH)`
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
    example:`example>>
    ジェイド(テイルズオブジアビス)、スネイプ(ハリー・ポッター)`
  },

  "down-1": {
    title: "正義のヒーロー",
    description: `理想に燃えるヒーロー。
    弱きを助け人々の力になりたいと強く願う。
    確固たる信念を持って義憤に燃え、理不尽や悪行を許さない。
    仲間内には素直で柔らかい態度であることが多いが、
    悪には絶対に屈しない！という一点特化のプライド。
    正義を貫く反面、白黒思考の熱意が暴走しがちな危うさもある。`,
    example: `example>>
    炭治郎(鬼滅の刃)、ゴン(HUNTER×HUNTER)`
  },
  "down-2": {
    title: "忠義を貫く守護者",
    description: `気難しい一面も目立つが誠実で義理堅い。
    誇り高く自分にも他者にも厳しいストイックな気質で、
    信頼し認めた相手は自己犠牲も厭わず守り通す。
    リーダーシップを発揮するよりも信頼を置く相手の右腕や守護者として活躍する。
    コミュニケーションにおいては不器用なこともしばしば。`,
    example:`example>>
    へし切長谷部(刀剣乱舞)、リヴァイ(進撃の巨人)`
  },
  "down-3": {
    title: "カリスマ野心家",
    description: `野心に燃える理想家。
    圧倒的な自信と能力で他者の心を掴み牽引する。情に厚く
    集団のリーダーとして責任を背負い上に立つ度胸と自信があるため
    部下にも信頼され慕われる。面倒見も良いが秩序を守らないものや
    道理に反するものなど、集団の輪を乱すものには厳しく厳格。
    仲間思いな一面が弱点になることも。`,
    example:`example>>
    跡部景吾(テニスの王子様)、マスタング大佐(鋼の錬金術師)`
  },
  "down-4": {
    title: "厭世的な捻くれ者",
    description: `諦観と捨てきれない期待に挟まれ、達観したようで幼い精神の残る捻くれ者。
    支配や束縛を嫌い自由であることを望む。軽薄かつ生意気な態度で
    他者を馬鹿にしたりするが、同じように自分を決めつけられたり
    軽んじられることを酷く嫌う。自分が嫌いで自己肯定感が低いのに
    プライドばかり尊大な難儀な性格。
    愛情や承認を欲する反面、厭世的で他者を信用しようとしない。`,
    example: `example>>
    アスカ(エヴァンゲリオン)、スカラマシュ(原神)`
  }
};

// キー取得
const params = new URLSearchParams(location.search);
const name = params.get("name") || "あなた";
const path = JSON.parse(params.get("path"));
const resultKey = params.get("resultKey");
let resultObj = null;


// 要素取得
const resultText = document.getElementById("resulttext");
const chartImage = document.getElementById("chartimage");

// 保険処理
if (!resultKey || !results[resultKey]) {
  resultText.textContent = "診断結果が見つかりません";
} else {
  resultObj = results[resultKey]; 

  resultText.innerHTML = `
    <h2>Result</h2>
    <h3>${resultObj.title}</h3>
    <p1>${resultObj.description}</p1>
    <p2>${resultObj.example}</p2>
  `;
}



function tileCenter(row, col, img) {
  const w = img.clientWidth;
  const h = img.clientHeight;
  const cellW = w / 5;
  const cellH = h / 5;

  return {
    x: (col - 0.5) * cellW,
    y: (row - 0.5) * cellH
  };
}

function buildPathD(path, img) {
  return path
    .map((p, i) => {
      const { x, y } = tileCenter(p.row, p.col, img);
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(" ");
}

function drawAnimatedBasePath(path) {
  const svg = document.getElementById("chartline");
  const img = document.getElementById("chartimage");

  svg.innerHTML = "";

  const w = img.clientWidth;
  const h = img.clientHeight;
  svg.setAttribute("width", w);
  svg.setAttribute("height", h);
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

  const d = buildPathD(path, img);

  const basePath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  basePath.setAttribute("d", d);
  basePath.setAttribute("fill", "none");
  basePath.setAttribute("stroke", "#999"); // 仮色
  basePath.setAttribute("stroke-width", Math.max(2, w / 200));
  basePath.setAttribute("stroke-linecap", "round");
  basePath.setAttribute("stroke-linejoin", "round");

  svg.appendChild(basePath);

  const length = basePath.getTotalLength();

  basePath.style.strokeDasharray = length;
  basePath.style.strokeDashoffset = length;

  //reflow
  basePath.getBoundingClientRect();

  basePath.style.transition =
    "stroke-dashoffset 4.5s cubic-bezier(0.3, 0.4, 0.5, 1)";
  basePath.style.strokeDashoffset = 0;

  return basePath;
}

function drawColoredSegments(path) {
  const svg = document.getElementById("chartline");
  const img = document.getElementById("chartimage");

  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i];
    const to = path[i + 1];

    if (!from.move) continue;

    const p1 = tileCenter(from.row, from.col, img);
    const p2 = tileCenter(to.row, to.col, img);

    const line = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    line.setAttribute("x1", p1.x);
    line.setAttribute("y1", p1.y);
    line.setAttribute("x2", p2.x);
    line.setAttribute("y2", p2.y);

    line.setAttribute(
      "stroke",
      from.move === "yes" ? "#A6FF4C" : "#E4AAFF"
    );
    line.setAttribute("stroke-width", Math.max(3, img.clientWidth / 150));
    line.setAttribute("stroke-linecap", "round");

    // アニメ後に表示
    line.style.opacity = 0;
    line.style.transition = "opacity 0.4s ease";
    setTimeout(() => (line.style.opacity = 1), 4200);

    svg.appendChild(line);
  }
}

if (chartImage.complete) {
  drawAnimatedBasePath(path);
  drawColoredSegments(path);
} else {
  chartImage.onload = () => {
    drawAnimatedBasePath(path);
    drawColoredSegments(path);
  };
}


//Retryボタン
const retryBtn = document.getElementById("retryBtn");

retryBtn.addEventListener("click", () => {
  location.href = "index.html";
});

//共有ボタン
const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {
  const text =
    `${name}の診断結果は「${resultObj.title}」でした。\n` +
    `#プライドタイプ診断`;

  const url = location.href;

  const shareUrl =
    "https://twitter.com/intent/tweet" +
    `?text=${encodeURIComponent(text)}` +
    `&url=${encodeURIComponent(url)}`;

  window.open(shareUrl, "https://mumutant.github.io/Pride-Type-Chart/");
});


//Typesボタン
const typesBtn = document.getElementById("typesBtn");
typesBtn.addEventListener("click", () => {
  location.href = "othertypes.html";

});

