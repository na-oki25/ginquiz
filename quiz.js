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
        question: "1回目のGin Act(ジン取締法)を公布したのは何年？",
        choices: ["1727年", "1729年", "1733年", "1736年"],
        correct: "1729年"
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
    
    if (selectedChoice === currentQuestion.correct) {
        score++;  // 正解の場合スコアを加算
    }

    // 最初の問題を答えたらタイマーをスタート
    if (!timerStarted) {
        startTimer(); // タイマーを開始
    }

    // 次の問題に進む
    nextQuestion();
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
