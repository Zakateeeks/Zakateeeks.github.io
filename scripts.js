// Функция для создания снежинок
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 50; // Количество снежинок

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';

        // Случайная позиция и скорость
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = Math.random() * 1.5 + 1 + 'rem';

        // Анимация падения снежинок
        snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;

        snowContainer.appendChild(snowflake);
    }
}

// Функция для показа снеговиков при наведении на кнопки
document.querySelectorAll('.more-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        // Находим снеговика, связанного с кнопкой
        const snowman = button.nextElementSibling; // Снеговик идет сразу после кнопки
        snowman.classList.remove('hidden'); // Показать снеговика
    });

    button.addEventListener('mouseleave', () => {
        // Находим снеговика, связанного с кнопкой
        const snowman = button.nextElementSibling;
        snowman.classList.add('hidden'); // Скрыть снеговика
    });
});
// Функция для отображения выбранного навыка
function showSkill(skill) {
    const allSkills = document.querySelectorAll('.skill-item');
    allSkills.forEach(item => item.classList.remove('active')); // Убираем активность у всех
    document.getElementById(skill).classList.add('active'); // Добавляем активность к выбранному
}


// Запуск функции для создания снежинок
createSnowflakes();
