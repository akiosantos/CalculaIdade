function calculateAge() {
    var birthDate = new Date(document.getElementById("year").value, document.getElementById("month").value - 1, document.getElementById("date").value);
    var currentDate = new Date();

    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    var dayDiff = currentDate.getDate() - birthDate.getDate();
    
    // Verifica se o mês atual é menor que o mês de nascimento
    // ou se é o mesmo mês, mas o dia atual é menor que o dia de nascimento
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12; // Adiciona 12 meses para compensar
    }

    // Calcula a diferença de dias
    if (dayDiff < 0) {
        var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        dayDiff += lastDayOfMonth; // Adiciona os dias do último mês
        monthDiff--; // Reduz o mês
    }

    // Calcula o próximo aniversário
    var nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }
    var timeUntilNextBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));

    document.getElementById("age").innerHTML = "Sua idade é " + age + " anos, " + monthDiff + " meses e " + dayDiff + " dias.";
    document.getElementById("next-birthday").innerHTML = "Faltam " + timeUntilNextBirthday + " dias para o seu próximo aniversário.";
}
