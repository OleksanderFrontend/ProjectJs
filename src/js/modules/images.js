const images = () => {
    const imagesWork = document.createElement('div'),
          wrapperImg = document.querySelector('.works'),
          bigImg = document.createElement('img');

  
    imagesWork.classList.add('popup');
    imagesWork.style.cssText = 'display: none; justify-content: center; align-items: center;';
    wrapperImg.appendChild(imagesWork);

    imagesWork.appendChild(bigImg);
    bigImg.style.cssText = 'object-fit: contain; width: 70%; height: 70%;';

    wrapperImg.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target;
      console.log(target.classList);
       if (target && target.classList.contains('preview')) {
          imagesWork.style.display = 'flex';
          
          const path = target.closest('a').getAttribute('href');
          console.log(path);
          bigImg.setAttribute('src', path);

          document.body.style.overflow = 'hidden';
       }

       if(target && target.classList.contains('popup') || target.closest('.popup')) {
         console.log(target);
         imagesWork.style.display = 'none';
         document.body.style.overflow = '';
       }
    });

    
}

export default images;