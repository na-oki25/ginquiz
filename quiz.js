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
