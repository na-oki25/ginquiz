const quizData = [
    {
        question: "ジンに必ず使われる原料はどれ？",
        choices: ["ジュニパーベリー", "リンゴ", "シナモン", "ミント"],
        correct: "ジュニパーベリー"
    },
    {
        question: "ジンの製造で最も重要な工程は何ですか？",
        choices: ["蒸留", "発酵", "熟成", "冷却"],
        correct: "蒸留"
    },
    {
        question: "ジンの名前の由来とされる言語は？",
        choices: ["フランス語", "ラテン語", "オランダ語", "英語"],
        correct: "オランダ語(jenever)"
    },
    {
        question: "1720年ごろからイギリスでジンが大流行した時代をなんと呼ぶ？",
        choices: ["ジン・ブーム", "スピリッツ革命", "Gin Craze/狂気のジン時代", "ジン・ウェーブ"],
        correct: "Gin Craze/狂気のジン時代"
    },
    {
        question: "ジンがイギリスで広まるきっかけになった出来事は？",
        choices: ["女王の結婚式", "ウィリアムス3世の即位", "東インド会社の設立", "フランス革命"],
        correct: "ウィリアムス3世の即位"
    },
    {
        question: "1回目のGin Act(ジン取締法)を公布したのは何年？",
        choices: ["1727年", "1729年", "1733年", "1736年"],
        correct: "1729年"
    },
    {
        question: "6月の第2土曜日は世界中でジンを楽しむ「ジンの日」ですが、「ジントニックの日」はいつでしょう？",
        choices: ["7月14日", "9月4日", "10月19日", "12月25日"],
        correct: "10月19日"
    },
    {
        question: "ジントニックの「トニック」とはどんな飲み物？",
        choices: ["苦味のある薬草炭酸飲料", "甘いレモネード", "白ワインを炭酸で割ったもの", "炭酸水に砂糖を加えたもの"],
        correct: "苦味のある薬草炭酸飲料"
    },
    {
        question: "トニックウォーターの苦味のもとである「キニーネ」は、どんな植物から採れる？",
        choices: ["セイロンシナモン", "キナノキ", "ニガヨモギ", "カラミンサ"],
        correct: "キナノキ"
    },
    {
        question: "トニックウォーターに含まれている成分「キニーネ」の効果は？",
        choices: ["苦味を加える", "アルコールを中和する", "炭酸を強くする", "マラリアの予防"],
        correct: "マラリアの予防"
    },
    {
        question: "次のうちジンの香づけに最も一般的に使われるジュニパー属の種は？",
        choices: ["Juniperus Chinensis", "Juniperus virginiana", "Juniperus communis", "Juniperus phoenicea"],
        correct: "Juniperus communis"
    },
    {
        question: "大和蒸溜所の英語表記が正しいのはどれ？",
        choices: ["YAMOTO DISTILLERY", "YAMATO DISTILLERY", "TOMATO DISTILLERY", "YAMATO DISTILERY"],
        correct: "YAMATO DISTILLERY"
    },
    {
        question: "「やまとじょうりゅうじょ」の漢字表記が正しいのどれ？",
        choices: ["倭蒸留所", "大和蒸留所", "大和蒸溜所", "大和蒸溜場"],
        correct: "大和蒸溜所"
    },
    {
        question: "大和蒸溜所の設立はいつ？",
        choices: ["2016", "2017", "2018", "2019"],
        correct: "2018"
    },
    {
        question: "「きっかじん」の正しい表記はどれ？",
        choices: ["橘花KIKKA ジン", "橘花ジン", "橘花　KIKKAGIN", "橘花KIKKA GIN"],
        correct: "橘花KIKKA GIN"
    },
    {
        question: "橘花KIKKA GINのアルコール度数は？",
        choices: ["47%", "51%", "59%", "61%"],
        correct: "59%"
    },
    {
        question: "不老不死の薬を探してこいと命じたの何代天皇？",
        choices: ["11代", "12代", "13代", "14代"],
        correct: "11代"
    },
    {
        question: "田道間守は何の神様と言われている？",
        choices: ["薬", "お菓子", "短歌", "冒険"],
        correct: "お菓子"
    },
    {
        question: "橘花KIKKA GIN朱華のアルコール度数は？",
        choices: ["37%", "41%", "43%", "44%"],
        correct: "43%"
    },
    {
        question: "橘花KIKKA GIN朱華に使っている苺の品種は？",
        choices: ["古都華", "あすかルビー", "飛鳥ルビー", "アスカルビー"],
        correct: "あすかルビー"
    },
    {
        question: "橘花KIKKA GINの３つ目の定番品として昨年リリースされたのは？",
        choices: ["流川", "流転", "逆転", "輪廻"],
        correct: "流転"
    },
    {
        question: "橘花KIKKA GIN流転のアルコール度数は？",
        choices: ["45%", "47%", "49%", "50%"],
        correct: "47%"
    },
    {
        question: "橘花KIKKA GIN流転に使われている木の種類は杉と何？",
        choices: ["檜", "櫟", "欅", "楡"],
        correct: "檜"
    },
    {
        question: "今までリリースしていないのは？",
        choices: ["橘花KIKKA GIN夢現", "橘花KIKKA GIN彼誰時", "橘花KIKKA GIN澪標", "橘花KIKKA GIN無為"],
        correct: "橘花KIKKA GIN無為"
    },
    {
        question: "シニアアンバサダーの「わたなべたくみ」の「わたなべ」の字はどれでしょう？",
        choices: ["渡邉", "渡辺", "渡邊", "渡部"],
        correct: "渡邉"
    },
    {
        question: "橘花KIKKA GINのベーススピリッツは何でしょう？",
        choices: ["米焼酎", "ライススピリッツ", "モラセス", "ウィートスピリッツ"],
        correct: "ライススピリッツ"
    },
    {
        question: "大和蒸溜所は今ままで何種類のジンを造ったでしょう？",
        choices: ["10", "15", "20", "25"],
        correct: "25"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 180; // 3分（180秒）
let timerInterval;
let timerStarted = false; // タイマーが始まっているかのフラグ

// 最初の問題を表示
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const questionNumberElement = document.getElementById('question-number'); // 問題番号を表示する要素
    
    // 問題番号を更新（Q1, Q2, ...）
    questionNumberElement.textContent = `問題: Q${currentQuestionIndex + 1}`;

    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice-button"); // ボタンにクラスを追加
        button.onclick = function() { checkAnswer(choice, button); };
        choicesElement.appendChild(button);
    });

    // タイマーが最初の問題解答後にスタートする
    // タイマーは最初の問題の答えを選んだ時にスタート
}

// タイマーの開始（最初の問題に答えたらスタート）
function startTimer() {
    if (!timerStarted) {
        timerInterval = setInterval(function() {
            timeLeft--;
            document.getElementById('time-left').textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert("時間切れ！あなたのスコアは " + score + " 点です！");
                endGame();
            }
        }, 1000);
        timerStarted = true; // タイマー開始フラグを立てる
    }
}

function checkAnswer(selectedChoice, selectedButton) {
    const currentQuestion = quizData[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback'); // 正解/不正解を表示するための要素
    
    // 正解を表示
    if (selectedChoice === currentQuestion.correct) {
        score++;  // 正解の場合スコアを加算
        feedbackElement.textContent = `正解！答えは「${currentQuestion.correct}」でした。`;

        // 正解の選択肢を緑色に変更
        selectedButton.style.backgroundColor = 'green'; // 正解の選択肢を緑色に変更
    } else {
        feedbackElement.textContent = `不正解。正解は「${currentQuestion.correct}」でした。`;

        // 不正解の選択肢を赤色に変更
        selectedButton.style.backgroundColor = 'red'; // 不正解の選択肢を赤色に変更

        // 正解の選択肢も緑色に変更
        const buttons = document.getElementById('choices').getElementsByTagName('button');
        for (let btn of buttons) {
            if (btn.textContent === currentQuestion.correct) {
                btn.style.backgroundColor = 'green';
            }
        }
    }
        // 最初の問題を答えたらタイマーをスタート
    if (!timerStarted) {
        startTimer(); // タイマーを開始
    }

    // 正解/不正解を表示
    feedbackElement.style.display = "block";

    // 1秒後に次の問題に進む
    setTimeout(nextQuestion, 1000); // 1秒後に次の問題に進む
}

function nextQuestion() {
    currentQuestionIndex++; // 次の問題に進むためにインデックスをインクリメント

    if (currentQuestionIndex < quizData.length) {
        displayQuestion(); // 次の問題を表示
    } else {
        endGame();  // ゲーム終了
    }
}

// ゲーム終了
function endGame() {
    // クイズ部分を非表示にして、結果画面を表示
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('end-container').style.display = "block";
    document.getElementById('score-display').textContent = "あなたのスコアは " + score + " 点です。";
}

// 最初からボタンを押した時に確認ダイアログを表示
function confirmRestart() {
    document.getElementById('confirm-dialog').style.display = "block";
}

// 「はい」を押した場合
function restartGame() {
    // ゲームをリセットして再スタート
    score = 0;
    currentQuestionIndex = 0; // 最初の問題に戻す
    timeLeft = 180; // タイマーをリセット
    document.getElementById('time-left').textContent = timeLeft;

    // クイズ部分を再表示
    document.getElementById('quiz-container').style.display = "block";
    document.getElementById('end-container').style.display = "none";
    document.getElementById('confirm-dialog').style.display = "none"; // ダイアログを非表示に

    // 最初の問題を表示
    displayQuestion();
}

// 「いいえ」を押した場合
function cancelRestart() {
    document.getElementById('confirm-dialog').style.display = "none"; // ダイアログを非表示に
}

// 最初の質問を表示
displayQuestion();
