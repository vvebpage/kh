document.addEventListener('DOMContentLoaded', function() {
    const alphabetContainer = document.getElementById('alphabet-container');

    // Data (same as before, with translations)
    const alphabetData = [
        { letter: 'ក', animal: 'កែវ', image: 'https://vvebpage.github.io/kh/images/kaew.png', sound: 'sounds/1.mp3', translation: 'កែវសំរាប់ផឹកទឹក' },
        { letter: 'ខ', animal: 'ខ្នើយ', image: 'https://vvebpage.github.io/kh/images/pillow.png', sound: 'sounds/2.mp3', translation: 'សំរាប់កើយក្បាល' },
        { letter: 'គ', animal: 'គោម', image: 'https://vvebpage.github.io/kh/images/lamp.png', sound: 'sounds/3.mp3', translation: 'ចង្កៀងដាក់បំភ្លឺ' },
        { letter: 'ឃ', animal: 'ឃ្លោក ', image: 'https://vvebpage.github.io/kh/images/gourd.png', sound: 'sounds/4.mp3', translation: 'ផ្លែឃ្លោកសំរាប់ដាំស្ល' },
        { letter: 'ង', animal: 'ងាវ', image: 'https://vvebpage.github.io/kh/images/Elephant.png', sound: 'sounds/5.mp3', translation: 'សត្វងាវ' },
        { letter: 'ច', animal: 'ចាន', image: 'https://vvebpage.github.io/kh/images/plate.png', sound: 'sounds/6.mp3', translation: 'ចានសំរាប់ញ៉ាំបាយ' },
        { letter: 'ឆ', animal: 'ឆ្នាំង', image: 'https://vvebpage.github.io/kh/images/pot.png', sound: 'sounds/7.mp3', translation: 'សំរាប់ដាំបាយ' },
        { letter: 'ជ', animal: 'ជើង', image: 'https://vvebpage.github.io/kh/images/foot.png', sound: 'sounds/8.mp3', translation: ' ជើងសំរាប់ដើរ' },
        { letter: 'ឈ', animal: 'ឈើ', image: 'https://vvebpage.github.io/kh/images/wood.png', sound: 'sounds/9.mp3', translation: 'សំរាប់សាងសង់' },
        { letter: 'ញ', animal: 'ញញួរ', image: 'https://vvebpage.github.io/kh/images/hammer.png', sound: 'sounds/10.mp3', translation: 'សំរាប់វាយដែក' },
        { letter: 'ដ', animal: 'ដប', image: 'https://vvebpage.github.io/kh/images/bottle.png', sound: 'sounds/11.mp3', translation: 'ដបសំរាប់ដាក់ទឹក' },
        { letter: 'ឋ', animal: 'ឋានីយ', image: 'https://vvebpage.github.io/kh/images/maxresdefault.png', sound: 'sounds/12.mp3', translation: 'ឋានីយរថភ្លើង' },
        { letter: 'ឌ', animal: 'ឌុយ', image: 'https://vvebpage.github.io/kh/images/Electricalplug.png', sound: 'sounds/13.mp3', translation: 'ឌុយដោតអគ្គិសនី' },
        { letter: 'ឍ', animal: 'ឍាមរា', image: 'https://vvebpage.github.io/kh/images/DodoTodo.png', sound: 'sounds/14.mp3', translation: 'សត្វស្លាបឍាមរា' },
        { letter: 'ណ', animal: 'ណឺរ', image: 'https://vvebpage.github.io/kh/images/bowtie.png', sound: 'sounds/15.mp3', translation: 'សំរាប់ពាក់នឹងក' },
        { letter: 'ត', animal: 'តុក្កតា ', image: 'https://vvebpage.github.io/kh/images/doll.png', sound: 'sounds/16.mp3', translation: 'ប្រដាប់លេង' },
        { letter: 'ថ', animal: 'ថូ', image: 'https://vvebpage.github.io/kh/images/vase.png', sound: 'sounds/17.mp3', translation: 'ថូផ្កា' },
        { letter: 'ទ', animal: 'ទូ', image: 'https://vvebpage.github.io/kh/images/Wardrobe.png', sound: 'sounds/18.mp3', translation: 'ទូដាក់សំលៀកបំពាក់' },
        { letter: 'ធ', animal: 'ធូប', image: 'https://vvebpage.github.io/kh/images/Incense.png', sound: 'sounds/18.mp3', translation: 'ធូបសំរាប់គោរព' },
        { letter: 'ន', animal: 'នាឡិកា', image: 'https://vvebpage.github.io/kh/images/Clock.png', sound: 'sounds/20.mp3', translation: 'សំរាប់មើលម៉ោង' },
        { letter: 'ប', animal: 'បាល់', image: 'https://vvebpage.github.io/kh/images/footBall.png', sound: 'sounds/21.mp3', translation: 'បាល់សំរាប់លេង' },
        { letter: 'ផ', animal: 'ផែនទី', image: 'https://vvebpage.github.io/kh/images/Map.png', sound: 'sounds/22.mp3', translation: 'សំរាប់មើលទិសដៅ' },
        { letter: 'ព', animal: 'ពែង', image: 'https://vvebpage.github.io/kh/images/Cup.png', sound: 'sounds/23.mp3', translation: 'ពែងសំរាប់ផឹកកាហ្វេ' },
        { letter: 'ភ', animal: 'ភួយ', image: 'https://vvebpage.github.io/kh/images/Blanket.png', sound: 'sounds/24.mp3', translation: 'សំរាប់ដណ្តប់ខ្លួន' },
        { letter: 'ម', animal: 'មួក', image: 'https://vvebpage.github.io/kh/images/Hat.png', sound: 'sounds/25.mp3', translation: 'សំរាប់ពាក់ក្បាល' },
        { letter: 'យ', animal: 'យន្តហោះ', image: 'https://vvebpage.github.io/kh/images/Airplane.png', sound: 'sounds/26.mp3', translation: 'យន្តហោះសំរាប់ជិះ' },
        { letter: 'រ', animal: 'រទេះ', image: 'https://vvebpage.github.io/kh/images/cart.png', sound: 'sounds/27.mp3', translation: 'រទេះសំរាប់អូស' },
        { letter: 'ល', animal: 'លំពែង', image: 'https://vvebpage.github.io/kh/images/pigeon.png', sound: 'sounds/28.mp3', translation: 'អាវុធបុរាណ' },
        { letter: 'វ', animal: 'វ៉ែនតា', image: 'https://vvebpage.github.io/kh/images/Glasses.png', sound: 'sounds/29.mp3', translation: 'វ៉ែនតាសំរាប់ពាក់ភ្នែក' },
        { letter: 'ស', animal: 'សៀវភៅ', image: 'https://vvebpage.github.io/kh/images/Book.png', sound: 'sounds/30.mp3', translation: 'សំរាប់អាន' },
        { letter: 'ហ', animal: 'ហិប', image: 'https://vvebpage.github.io/kh/images/Chest.png', sound: 'sounds/31.mp3', translation: 'ហឹបសំរាប់ដាក់ឥវ៉ាន់' },
        { letter: 'ឡ', animal: 'ឡាន', image: 'https://vvebpage.github.io/kh/images/Car.png', sound: 'sounds/32.mp3', translation: 'ឡានសំរាប់ធ្វើដំណើរ' },
        { letter: 'អ', animal: 'អង្រុត', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'អង្រុតសម្រាប់​រុត​ឬ​ក្រុង​ត្រី' },
    ];
    const VowelData = [
        { letter: 'ា', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ិ', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ី', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ឹ', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ឺ', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ុ', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ូ', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ួ', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ើ', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },

    ]; 
    
    





    // Create a separate div for the image preview
    const imagePreview = document.createElement('div');
    imagePreview.style.position = 'absolute';
    imagePreview.style.top = '0';
    imagePreview.style.left = '0';
    imagePreview.style.width = '250px'; // Adjust as needed
    imagePreview.style.height = '250px'; // Adjust as needed
    imagePreview.style.display = 'none'; // Initially hidden
    imagePreview.style.zIndex = '1000'; // Ensure it's on top
    document.body.appendChild(imagePreview);

    alphabetData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('letter-card');

        const letterHeading = document.createElement('h2');
        letterHeading.textContent = item.letter;
        card.appendChild(letterHeading);

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = `${item.letter} - ${item.animal}`;
        card.appendChild(image);

        // Container for English and Khmer text
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const animalName = document.createElement('p');
        animalName.textContent = item.animal;
        animalName.classList.add('english-name'); // Add a class for styling
        textContainer.appendChild(animalName);

        const translationText = document.createElement('p');
        translationText.textContent = item.translation;
        translationText.classList.add('khmer-translation'); // Add a class
        translationText.style.display = 'none'; // Initially hidden
        textContainer.appendChild(translationText);

        card.appendChild(textContainer); // Add the container to the card

        const audio = new Audio(item.sound);

        card.addEventListener('click', function() {
            audio.play();

            // Toggle visibility of English and Khmer text
            if (animalName.style.display === 'none') {
                animalName.style.display = 'block';
                translationText.style.display = 'none';
            } else {
                animalName.style.display = 'none';
                translationText.style.display = 'block';
            }
        });

        // Mouseover event to show image
        card.addEventListener('mouseover', function(event) {
            imagePreview.style.display = 'block';
            imagePreview.innerHTML = `<img src="${item.image}" alt="${item.animal}" style="max-width: 100%; max-height: 100%;">`;

            // Position the preview image
            imagePreview.style.left = alphabetContainer.offsetLeft - imagePreview.offsetWidth + 90 + 'px';  // Position to the left
            imagePreview.style.top = card.offsetTop + 'px'; // Position to the top of the card
        });

        // Mouseout event to hide image
        card.addEventListener('mouseout', function() {
            imagePreview.style.display = 'none';
        });

        alphabetContainer.appendChild(card);
    });
});
