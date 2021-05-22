function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
};

for (nr = 60; nr <= 100; nr++) {
    grade = assignGrade(nr);
    console.log("Voor " + nr + " punten, krijg je een " + grade);
};