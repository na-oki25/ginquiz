const quizData = [
    {
        question: "クラフトジンの主成分は何ですか？",
        choices: ["ジュニパーベリー", "リンゴ", "オレンジ", "レモン"],
        correct: "ジュニパーベリー"
    },
    {
        question: "ジンの製造で最も重要な工程は何ですか？",
        choices: ["蒸留", "発酵", "熟成", "冷却"],
        correct: "蒸留"
    },
    {
        question: "最初にクラフトジンが登場した国はどこですか？",
        choices: ["イギリス", "アメリカ", "オランダ", "日本"],
        correct: "イギリス"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300; // 5分（300秒）
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
    timeLeft = 300; // タイマーをリセット
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
