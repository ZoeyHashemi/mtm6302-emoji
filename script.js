const emojis = [
    { name: 'Running', dec: '🏃🏻‍♀️', hex: '#0x1F3C3' },
    { name: 'Yoga', dec: '🧘🏻‍♀️', hex: '#1F9D8' },
    { name: 'Biking', dec: '🚴🏻‍♀️', hex: '#1F6B4' },
    { name: 'Walking', dec: '🚶🏻‍♀️', hex: '#1F6B6' },
    { name: 'Climbing', dec: '🧗🏻‍♀️', hex: '#1F9D7' },
    { name: 'Swimming', dec: '🏊🏻‍♀️', hex: '#1F3CA' },
    { name: 'strength', dec: '🏋🏻‍♀️', hex:'#1F3CB' },
    { name: 'Cartwheeling', dec:'🤸🏻‍♀️', hex:'1F938'},
    { name: 'Painting', dec: '🎨', hex: '#1F3A8' },
    { name: 'movie', dec: '🎞️', hex: '#1F383'},
    { name: 'Music', dec: '🎵', hex: '1F3B5' },
    { name: 'Video Games', dec: '🎮', hex: '#1F3AE' },
    { name: 'Coding', dec: '👩🏻‍💻', hex: '1F4D6' },
    { name: 'Reading', dec: '📚', hex: '#1F4DA' },
    { name: 'cooking', dec: '👩🏻‍🍳', hex: '#1F341'  },
    { name: 'podcast', dec: '🎙️', hex: '#1F680' },
   ];
   const emojiGallery = document.getElementById('emoji-gallery');

   emojis.forEach(emoji => {
       const emojiCard = document.createElement('div');
       emojiCard.classList.add('emoji-card');

       const emojiName = document.createElement('p');
       emojiName.textContent = emoji.name;
       emojiName.classList.add('emoji-name');

       const emojiElement = document.createElement('div');
       emojiElement.classList.add('emoji');
       emojiElement.innerHTML = emoji.dec;

       const emojiCode = document.createElement('p');
       emojiCode.classList.add('emoji-code');
       emojiCode.textContent = `${emoji.hex}`;

       emojiCard.appendChild(emojiName);
       emojiCard.appendChild(emojiElement);
       emojiCard.appendChild(emojiCode);

       emojiGallery.appendChild(emojiCard);
   });
