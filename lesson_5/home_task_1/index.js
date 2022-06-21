function getSum(firstNum, secondNum) {
    let sum = 0;
    for (firstNum; firstNum <= secondNum; firstNum++) {
        if (firstNum % 2 == 0) sum += firstNum;
    }
    return sum;
}
// examples
sum(11, 11); // ==> 22
sum(-2, 10); // ==> 8