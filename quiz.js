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
    },
    // 追加の問題をここに挿入できます
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300; // 5分（300秒）
let timerInterval;

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

function checkAnswer(selectedChoice) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    if (selectedChoice === currentQuestion.correct) {
        alert("正解!");
        score++;  // スコアを1点加算
    } else {
        alert("不正解。正しい答えは「" + currentQuestion.correct + "」です。");
    }

    // 回答後に次の問題ボタンを表示
    document.getElementById('next-button').style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        alert("おめでとうございます！すべての問題をクリアしました！あなたのスコアは " + score + " 点です！");
        // ゲームをリセットする場合は、スコアをリセットして最初から始める
        score = 0;
        currentQuestionIndex = 0;
        displayQuestion();
    }
}

// タイマー関数
function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("時間切れ！あなたのスコアは " + score + " 点です！");
            // ゲーム終了時の処理（リセットや終了）
        }
    }, 1000);
}

// ゲーム開始時にタイマーをスタート
startTimer();
displayQuestion();
