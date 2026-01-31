const statsData = [
    {
        label: 'Игроки',
        value: 'пока нихуя нету'
    },
    {
        label: 'Просмотры уровней',
        value: 'пока нихуя нету'
    },
    {
        label: 'Уровни',
        value: 'пока нихуя нету'
    },
    {
        label: 'Комментарии',
        value: 'пока нихуя нету'
    }
];

function generateStats() {
    const statsContainer = document.querySelector('.stats-container');
    if (!statsContainer) return;

    statsContainer.innerHTML = '';

    statsData.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        
        statItem.innerHTML = `
            <div class="stat-label">${stat.label}</div>
            <div class="stat-value">${stat.value}</div>
        `;
        
        statsContainer.appendChild(statItem);
    });
}

function updateStat(index, newValue) {
    if (statsData[index]) {
        statsData[index].value = newValue;
        generateStats();
    }
}

document.addEventListener('DOMContentLoaded', generateStats);

