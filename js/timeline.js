const timelineData = [
    {
        icon: '🚫',
        date: 'Февраль, 2077',
        text: 'Тестовое описание'
    },
    {
        icon: '📱',
        date: 'Апрель, 2077',
        text: 'Тестовое описание'
    },
    {
        icon: '📱',
        date: 'Апрель, 2077',
        text: 'Тестовое описание'
    },
    {
        icon: '📱',
        date: 'Апрель, 2077',
        text: 'Тестовое описание'
    },
    {
        icon: '📱',
        date: 'Апрель, 2077',
        text: 'Тестовое описание'
    },
    {
        icon: '📱',
        date: 'Апрель, 2077',
        text: 'Тестовое описание'
    }
];

function generateTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const timelineLine = timeline.querySelector('.timeline-line');
    timeline.innerHTML = '';
    if (timelineLine) {
        timeline.appendChild(timelineLine);
    }

    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-card">
                <div class="timeline-icon">${item.icon}</div>
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-text">${item.text}</div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

document.addEventListener('DOMContentLoaded', generateTimeline);

