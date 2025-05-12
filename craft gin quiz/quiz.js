// 問題と選択肢のデータ
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

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    // 質問を表示
    questionElement.textContent = currentQuestion.question;

    // 選択肢を表示
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = function() { checkAnswer(choice); };
        choicesElement.appendChild(button);
    });
}

function checkAnswer(selectedChoice) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correct) {
        alert("正解!");
    } else {
        alert("不正解。もう一度試してください。");
    }

    // 次の問題に進む
    document.getElementById('next-button').style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
        document.getElementById('next-button').style.display = "none";
    } else {
        alert("おめでとうございます！すべての問題をクリアしました！");
    }
}

// 最初の質問を表示
displayQuestion();
