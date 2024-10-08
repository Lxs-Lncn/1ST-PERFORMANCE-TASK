function computeQuizzes() {
    const rangeQ1 = parseInt(document.getElementById("qRange1").value);
    const rangeQ2 = parseInt(document.getElementById("qRange2").value);
    const rangeQ3 = parseInt(document.getElementById("qRange3").value); 

    // To get the total number of items for each quiz
    const totalItemsQ1 = parseInt(document.getElementById("totalItemsQ1").value);
    const totalItemsQ2 = parseInt(document.getElementById("totalItemsQ2").value);
    const totalItemsQ3 = parseInt(document.getElementById("totalItemsQ3").value);

    // To calculate the sum of quiz scores and total items
    const sumOfTotalScore = rangeQ1 + rangeQ2 + rangeQ3;
    const sumOfTotalNumberOfItems = totalItemsQ1 + totalItemsQ2 + totalItemsQ3;

    // To compute the quizzes percentage
    const totalQuizzes = (sumOfTotalScore / sumOfTotalNumberOfItems) * 100;

    // Display the result with Id 'totalQuizzes'
    document.getElementById("totalQuizzes").textContent = `Total Quizzes Percentage: ${totalQuizzes.toFixed(2)}%`;
} // End of computeQuizzes function

function computeExam() {
    // 11. Assign variables to store exam score and total items
    const exam = parseInt(document.getElementById("textPExam").value); // Score in the exam
    const item = parseInt(document.getElementById("prExam").value); // Total number of items in the exam

    // 12. Compute the exam percentage
    const examTotal = (exam / item) * 100;

    // Display the exam equivalent in the text field with id 'eEqv'
    document.getElementById("eEqv").value = examTotal.toFixed(2);
} // End of computeExam function

function getExam() {
    // Get the checkbox element
    const chkE = document.getElementById("chkExam");

    //22. If the checkbox is checked, compute and display 20% of the exam score
    if (chkE.checked) {
        // Calculate the exam percentage and display it
        const examTotal = parseFloat(document.getElementById("eEqv").value); // Retrieve exam equivalent from text field
        const examPercentage = examTotal * 0.20; // 20% of exam
        document.getElementById("txtPercentage").value = examPercentage.toFixed(2);
    } else {
        //23. If the checkbox is unchecked, clear the percentage field
        document.getElementById("txtPercentage").value = "";
    }
} // End of getExam function

function computeGrade() {
    // Retrieve values for quizzes and exam percentages
    const quizPercentage = parseFloat(document.getElementById("totalQuizzes").textContent.split(": ")[1].replace("%", "")) * 0.20; // 20% of quizzes
    const examPercentage = parseFloat(document.getElementById("txtPercentage").value) || 0; // 20% of exam

    // Retrieve performance task percentage (assuming a similar function computes this)
    const performanceTaskPercentage = parseFloat(document.getElementById("performancePercentage").value) || 0;

    // 16. Compute the final grade (quizzes = 20%, performance tasks = 60%, exam = 20%)
    const grade = quizPercentage + performanceTaskPercentage + examPercentage;

    // Display the final grade in the text field with id 'txtGrade'
    document.getElementById("txtGrade").value = grade.toFixed(2);
} // End of computeGrade function

// 17-20. Add event listeners for the buttons
document.getElementById("btnComputeQuizzes").addEventListener("click", computeQuizzes);
document.getElementById("btnComputeExam").addEventListener("click", computeExam);
document.getElementById("chkExam").addEventListener("change", getExam);
document.getElementById("btnComputeGrade").addEventListener("click", computeGrade);


