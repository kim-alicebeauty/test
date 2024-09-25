let num1, num2, correctOnesAnswer, correctTensAnswer, correctTotalAnswer;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 90) + 10; // 生成10-99的隨機數
    num2 = Math.floor(Math.random() * 900) + 100; // 生成100-999的隨機數
    
    const ones = num1 % 10;
    const tens = Math.floor(num1 / 10);
    
    correctOnesAnswer = ones * num2;
    correctTensAnswer = tens * num2 * 10; // 乘以10以顯示完整的十位數乘積
    correctTotalAnswer = num1 * num2;
    
    document.getElementById('question').textContent = `${num1} × ${num2} = ?`;
}

function checkAnswer() {
    const tensAnswer = parseInt(document.getElementById('tens-answer').value);
    const onesAnswer = parseInt(document.getElementById('ones-answer').value);
    const totalAnswer = parseInt(document.getElementById('total-answer').value);
    
    const resultElement = document.getElementById('result');
    let message = '';
    
    if (onesAnswer === correctOnesAnswer && tensAnswer === correctTensAnswer && totalAnswer === correctTotalAnswer) {
        message = '太棒了！所有答案都正確！';
        resultElement.style.color = 'green';
    } else {
        message = '有些地方需要改進：\n';
        if (tensAnswer !== correctTensAnswer) {
            message += `十位數乘積應為 ${correctTensAnswer}。\n`;
        }
        if (onesAnswer !== correctOnesAnswer) {
            message += `個位數乘積應為 ${correctOnesAnswer}。\n`;
        }
        if (totalAnswer !== correctTotalAnswer) {
            message += `總和應為 ${correctTotalAnswer}。\n`;
        }
        resultElement.style.color = 'red';
    }
    
    resultElement.textContent = message;
}

function newQuestion() {
    generateQuestion();
    document.getElementById('tens-answer').value = '';
    document.getElementById('ones-answer').value = '';
    document.getElementById('total-answer').value = '';
    document.getElementById('result').textContent = '';
}

// 頁面加載時生成第一個問題
generateQuestion();