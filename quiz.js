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
    }
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
    const feedbackElement = document.getElementById('feedback'); // 正解/不正解を表示するための要素
    
    // 問題番号を更新（Q1, Q2, ...）
    questionNumberElement.textContent = `問題: Q${currentQuestionIndex + 1}`;

    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = function() { checkAnswer(choice); };
        choicesElement.appendChild(button);
    });

    // 「次の問題」ボタンは非表示にしておく
    document.getElementById('next-button').style.display = "none";

    // 正解/不正解の表示用要素を非表示にしておく
    feedbackElement.style.display = "none";
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

function checkAnswer(selectedChoice) {
    const currentQuestion = quizData[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback'); // 正解/不正解を表示するための要素
    
    // 正解を表示
    if (selectedChoice === currentQuestion.correct) {
        score++;  // 正解の場合スコアを加算
        feedbackElement.textContent = `正解！答えは「${currentQuestion.correct}」でした。`;
    } else {
        feedbackElement.textContent = `不正解。正解は「${currentQuestion.correct}」でした。`;
    }
    
    // 正解/不正解を表示
    feedbackElement.style.display = "block";

    // 2秒後に次の問題に進む
    setTimeout(nextQuestion, 2000); // 2秒後に次の問題に進む
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
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
    currentQuestionIndex = 0;
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
