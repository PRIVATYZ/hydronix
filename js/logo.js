const logoConfig = {
    src: 'img/HYDRONIX.png',
    alt: 'Hydronix Logo',
    className: 'logo-img'
};

function insertLogo() {
    const logoContainers = document.querySelectorAll('.footer-logo');
    
    logoContainers.forEach(container => {
        let logoImg = container.querySelector('.logo-img');
        
        if (!logoImg) {
            logoImg = document.createElement('img');
            logoImg.src = logoConfig.src;
            logoImg.alt = logoConfig.alt;
            logoImg.className = logoConfig.className;
            
            const logoText = container.querySelector('.logo-text');
            if (logoText) {
                container.insertBefore(logoImg, logoText);
            } else {
                container.appendChild(logoImg);
            }
        } else {
            logoImg.src = logoConfig.src;
            logoImg.alt = logoConfig.alt;
        }
    });
}

document.addEventListener('DOMContentLoaded', insertLogo);

