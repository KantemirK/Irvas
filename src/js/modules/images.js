const images = () => {
    const works = document.querySelector('.works'),
          imgPopup = document.createElement('div'),
          bigImage = document.createElement('img');
      
    imgPopup.style.cssText = `
        justify-content: center; 
        align-items: center; 
        display: none; 
    `;
    works.append(imgPopup);

    bigImage.style.cssText = `
        max-height: 70%;
        max-width: 90%;
    `;
    imgPopup.append(bigImage);

    works.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (e.target && e.target.matches('img.preview')) {
            bigImage.src = e.target.parentElement.getAttribute('href');

            imgPopup.style.display = 'flex';
            imgPopup.classList.add('popup');

            document.body.style.overflow = 'hidden';
        }

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            imgPopup.classList.remove('popup');

            document.body.style.overflow = ''; 
        }
    });
};

export default images;