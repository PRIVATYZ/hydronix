const featuresData = [
    {
        title: 'Уровни',
        description: 'Эксклюзивные и приватные уровни'
    },
    {
        title: 'Модерация',
        description: 'Быстрая и честная проверка'
    },
    {
        title: 'Кастом',
        description: 'Иконки, цвета, эффекты'
    }
];

function generateFeatures() {
    const featuresContainer = document.querySelector('.features');
    if (!featuresContainer) return;

    featuresContainer.innerHTML = '';

    featuresData.forEach((feature, index) => {
        const featureElement = document.createElement('div');
        featureElement.className = `feature animate delay-${index + 1}`;
        
        featureElement.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        
        featuresContainer.appendChild(featureElement);
    });
}

document.addEventListener('DOMContentLoaded', generateFeatures);

