document.addEventListener('DOMContentLoaded', function() {
    const consonantContainer = document.getElementById('consonant-cards');
    const vowelContainer = document.getElementById('vowel-cards');

    // Data
    const alphabetData = [
        { letter: 'ក', type: 'consonant', animal: 'កង្កែប', image: 'https://vvebpage.github.io/kh/images/frog.png', sound: 'sounds/1.mp3', translation: 'សត្វកង្កែបពណ៌បៃតង' },
        { letter: 'ខ', type: 'consonant', animal: 'ខ្នើយ', image: 'https://vvebpage.github.io/kh/images/pillow.png', sound: 'sounds/2.mp3', translation: 'សំរាប់កើយក្បាល' },
        { letter: 'គ', type: 'consonant', animal: 'គោម', image: 'https://vvebpage.github.io/kh/images/lamp.png', sound: 'sounds/3.mp3', translation: 'ចង្កៀងដាក់បំភ្លឺ' },
        { letter: 'ឃ', type: 'consonant', animal: 'ឃ្លោក ', image: 'https://vvebpage.github.io/kh/images/gourd.png', sound: 'sounds/4.mp3', translation: 'ផ្លែឃ្លោកសំរាប់ដាំស្ល' },
        { letter: 'ង', type: 'consonant', animal: 'ងាវ', image: 'https://vvebpage.github.io/kh/images/Elephant.png', sound: 'sounds/5.mp3', translation: 'សត្វងាវ' },
        { letter: 'ច', type: 'consonant', animal: 'ចាន', image: 'https://vvebpage.github.io/kh/images/plate.png', sound: 'sounds/6.mp3', translation: 'ចានសំរាប់ញ៉ាំបាយ' },
        { letter: 'ឆ', type: 'consonant', animal: 'ឆ្នាំង', image: 'https://vvebpage.github.io/kh/images/pot.png', sound: 'sounds/7.mp3', translation: 'សំរាប់ដាំបាយ' },
        { letter: 'ជ', type: 'consonant', animal: 'ជើង', image: 'https://vvebpage.github.io/kh/images/foot.png', sound: 'sounds/8.mp3', translation: ' ជើងសំរាប់ដើរ' },
        { letter: 'ឈ', type: 'consonant', animal: 'ឈើ', image: 'https://vvebpage.github.io/kh/images/wood.png', sound: 'sounds/9.mp3', translation: 'សំរាប់សាងសង់' },
        { letter: 'ញ', type: 'consonant', animal: 'ញញួរ', image: 'https://vvebpage.github.io/kh/images/hammer.png', sound: 'sounds/10.mp3', translation: 'សំរាប់វាយដែក' },
        { letter: 'ដ', type: 'consonant', animal: 'ដប', image: 'https://vvebpage.github.io/kh/images/bottle.png', sound: 'sounds/11.mp3', translation: 'ដបសំរាប់ដាក់ទឹក' },
        { letter: 'ឋ', type: 'consonant', animal: 'ឋានីយ', image: 'https://vvebpage.github.io/kh/images/maxresdefault.png', sound: 'sounds/12.mp3', translation: 'ឋានីយរថភ្លើង' },
        { letter: 'ឌ', type: 'consonant', animal: 'ឌុយ', image: 'https://vvebpage.github.io/kh/images/Electricalplug.png', sound: 'sounds/13.mp3', translation: 'ឌុយដោតអគ្គិសនី' },
        { letter: 'ឍ', type: 'consonant', animal: 'ឍាមរា', image: 'https://vvebpage.github.io/kh/images/DodoTodo.png', sound: 'sounds/14.mp3', translation: 'សត្វស្លាបឍាមរា' },
        { letter: 'ណ', type: 'consonant', animal: 'ណឺរ', image: 'https://vvebpage.github.io/kh/images/bowtie.png', sound: 'sounds/15.mp3', translation: 'សំរាប់ពាក់នឹងក' },
        { letter: 'ត', type: 'consonant', animal: 'តុក្កតា ', image: 'https://vvebpage.github.io/kh/images/doll.png', sound: 'sounds/16.mp3', translation: 'ប្រដាប់លេង' },
        { letter: 'ថ', type: 'consonant', animal: 'ថូ', image: 'https://vvebpage.github.io/kh/images/vase.png', sound: 'sounds/17.mp3', translation: 'ថូផ្កា' },
        { letter: 'ទ', type: 'consonant', animal: 'ទូ', image: 'https://vvebpage.github.io/kh/images/Wardrobe.png', sound: 'sounds/18.mp3', translation: 'ទូដាក់សំលៀកបំពាក់' },
        { letter: 'ធ', type: 'consonant', animal: 'ធូប', image: 'https://vvebpage.github.io/kh/images/Incense.png', sound: 'sounds/18.mp3', translation: 'សំរាប់គោរព' },
        { letter: 'ន', type: 'consonant', animal: 'នាឡិកា', image: 'https://vvebpage.github.io/kh/images/Clock.png', sound: 'sounds/20.mp3', translation: 'សំរាប់មើលម៉ោង' },
        { letter: 'ប', type: 'consonant', animal: 'បាល់', image: 'https://vvebpage.github.io/kh/images/footBall.png', sound: 'sounds/21.mp3', translation: 'បាល់សំរាប់លេង' },
        { letter: 'ផ', type: 'consonant', animal: 'ផែនទី', image: 'https://vvebpage.github.io/kh/images/Map.png', sound: 'sounds/22.mp3', translation: 'សំរាប់មើលទិសដៅ' },
        { letter: 'ព', type: 'consonant', animal: 'ពែង', image: 'https://vvebpage.github.io/kh/images/Cup.png', sound: 'sounds/23.mp3', translation: 'ពែងសំរាប់ផឹកកាហ្វេ' },
        { letter: 'ភ', type: 'consonant', animal: 'ភួយ', image: 'https://vvebpage.github.io/kh/images/Blanket.png', sound: 'sounds/24.mp3', translation: 'សំរាប់ដណ្តប់ខ្លួន' },
        { letter: 'ម', type: 'consonant', animal: 'មួក', image: 'https://vvebpage.github.io/kh/images/Hat.png', sound: 'sounds/25.mp3', translation: 'សំរាប់ពាក់ក្បាល' },
        { letter: 'យ', type: 'consonant', animal: 'យន្តហោះ', image: 'https://vvebpage.github.io/kh/images/Airplane.png', sound: 'sounds/26.mp3', translation: 'យន្តហោះសំរាប់ជិះ' },
        { letter: 'រ', type: 'consonant', animal: 'រទេះ', image: 'https://vvebpage.github.io/kh/images/cart.png', sound: 'sounds/27.mp3', translation: 'រទេះសំរាប់អូស' },
        { letter: 'ល', type: 'consonant', animal: 'លំពែង', image: 'https://vvebpage.github.io/kh/images/pigeon.png', sound: 'sounds/28.mp3', translation: 'អាវុធបុរាណ' },
        { letter: 'វ', type: 'consonant', animal: 'វ៉ែនតា', image: 'https://vvebpage.github.io/kh/images/Glasses.png', sound: 'sounds/29.mp3', translation: 'វ៉ែនតាសំរាប់ពាក់ភ្នែក' },
        { letter: 'ស', type: 'consonant', animal: 'សៀវភៅ', image: 'https://vvebpage.github.io/kh/images/Book.png', sound: 'sounds/30.mp3', translation: 'សំរាប់អាន' },
        { letter: 'ហ', type: 'consonant', animal: 'ហិប', image: 'https://vvebpage.github.io/kh/images/Chest.png', sound: 'sounds/31.mp3', translation: 'ហឹបសំរាប់ដាក់ឥវ៉ាន់' },
        { letter: 'ឡ', type: 'consonant', animal: 'ឡាន', image: 'https://vvebpage.github.io/kh/images/Car.png', sound: 'sounds/32.mp3', translation: 'ឡានសំរាប់ធ្វើដំណើរ' },
        { letter: 'អ', type: 'consonant', animal: 'អង្រុត', image: 'https://vvebpage.github.io/kh/images/Angrot.png', sound: 'sounds/33.mp3', translation: 'អង្រុតសម្រាប់​រុត​ឬ​ក្រុង​ត្រី' },
    ];

    const VowelData = [
        { letter: 'ា', type: 'vowel', animal: 'កា', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/1.png', sound: 'sounds/33.mp3', translation: 'កាញាំទឹក' },
        { letter: 'ិ', type: 'vowel', animal: 'ផ្សិត', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/2.png', sound: 'sounds/33.mp3', translation: 'ផ្សិតចំបើង' },
        { letter: 'ី', type: 'vowel', animal: 'សី', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/3.png', sound: 'sounds/33.mp3', translation: 'របស់ទាត់លេង' },
        { letter: 'ឹ', type: 'vowel', animal: 'ផឹក', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/4.png', sound: 'sounds/33.mp3', translation: 'ក្មេងប្រុសផឹកទឹក' },
        { letter: 'ឺ', type: 'vowel', animal: 'ឈឺ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/5.png', sound: 'sounds/33.mp3', translation: 'ក្មេងស្រីឈឺ' },
        { letter: 'ុ', type: 'vowel', animal: 'តុ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/6.png', sound: 'sounds/33.mp3', translation: 'តុញាំបាយ' },
        { letter: 'ូ', type: 'vowel', animal: 'ថូ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/7.png', sound: 'sounds/33.mp3', translation: 'ថូដាក់ផ្កា' },
        { letter: 'ួ', type: 'vowel', animal: 'ជួង', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/8.png', sound: 'sounds/33.mp3', translation: 'ជួងពណ៌មាស' },
        { letter: 'ើ', type: 'vowel', animal: 'ផើង', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/9.png', sound: 'sounds/33.mp3', translation: 'ជើងរបស់យើង' },
        { letter: 'ឿ', type: 'vowel', animal: 'តឿ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/10.png', sound: 'sounds/33.mp3', translation: 'មនុស្សតឿ៧នាក់' },
        { letter: 'ៀ', type: 'vowel', animal: 'ទៀប', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/11.png', sound: 'sounds/33.mp3', translation: 'ផ្លែទៀបជាច្រើន' },
        { letter: 'េ', type: 'vowel', animal: 'ចេក', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/12.png', sound: 'sounds/33.mp3', translation: 'ផ្លែចេកណាំវ់ា១ស្និត' },
        { letter: 'ែ', type: 'vowel', animal: 'ខែ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/13.png', sound: 'sounds/33.mp3', translation: 'ខែមួយចំណិត' },
        { letter: 'ៃ', type: 'vowel', animal: 'ដៃ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/14.png', sound: 'sounds/33.mp3', translation: 'ដៃកាន់ខ្មៅដៃ' },
        { letter: 'ោ', type: 'vowel', animal: 'ខោ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/15.png', sound: 'sounds/33.mp3', translation: 'ខោជើងវែង' },
        { letter: 'ៅ', type: 'vowel', animal: 'តៅ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/16.png', sound: 'sounds/33.mp3', translation: 'តៅឬស្សី' },
        { letter: 'ុំ', type: 'vowel', animal: 'ឃ្មុំ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/17.png', sound: 'sounds/33.mp3', translation: 'នំខួបកំណើត' },
        { letter: 'ំ', type: 'vowel', animal: 'នំ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/18.png', sound: 'sounds/33.mp3', translation: 'ឃ្មុំពណ៌លឿង' },
        { letter: 'ាំ', type: 'vowel', animal: 'ដាំ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/19.png', sound: 'sounds/33.mp3', translation: 'ក្មេងប្រុសដាំដើមឈើ' },
        { letter: 'ះ', type: 'vowel', animal: 'ស្រះ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/20.png', sound: 'sounds/33.mp3', translation: 'ស្រះទឹកក្បែរដើមឈើ' },
        { letter: 'ុះ', type: 'vowel', animal: 'ចុះ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/21.png', sound: 'sounds/33.mp3', translation: 'ដើរចុះជណ្តើរ' },
        { letter: 'េះ', type: 'vowel', animal: 'សេះ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/22.png', sound: 'sounds/33.mp3', translation: 'សត្វសេះពណ៌ត្នោត' },
        { letter: 'ោះ', type: 'vowel', animal: 'កោះ', image: 'https://vvebpage.github.io/kh/images/KH_Vowels/23.png', sound: 'sounds/33.mp3', translation: 'កោះនៅកណ្តាលសមុទ្រ' },

    ];

     // Create a separate div for the image preview (only create it once)
     const imagePreview = document.createElement('div');
     imagePreview.style.position = 'absolute';
     imagePreview.style.width = '250px';
     imagePreview.style.height = '250px';
     imagePreview.style.display = 'none';
     imagePreview.style.zIndex = '1000';
     imagePreview.style.overflow = 'hidden';
     imagePreview.style.borderRadius = '15px';
     document.body.appendChild(imagePreview);

     const previewImageElement = document.createElement('img');
     previewImageElement.style.maxWidth = '100%';
     previewImageElement.style.maxHeight = '100%';
     imagePreview.appendChild(previewImageElement);

    function createLetterCards(data, container) {
        data.forEach(item => {
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

                // Set the src of the preview image element
                previewImageElement.src = item.image;
                previewImageElement.alt = item.animal;

                 // Find the alphabet container element *on every mouseover* because it's needed for the positioning
                const alphabetContainer = document.getElementById('consonant-cards').parentNode;

                // Position the preview image (adjust as needed)
                imagePreview.style.left = alphabetContainer.offsetLeft - imagePreview.offsetWidth + 90 + 'px';
                imagePreview.style.top = card.offsetTop + 'px';

                // Additional positioning adjustments (if needed)
                const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; // for horizontal
                imagePreview.style.left = (alphabetContainer.offsetLeft - imagePreview.offsetWidth + 90 - scrollLeft) + 'px';

            });

            // Mouseout event to hide image
            card.addEventListener('mouseout', function() {
                imagePreview.style.display = 'none';
            });

            container.appendChild(card);
        });
    }

    // Create and append the consonant cards
    createLetterCards(alphabetData, consonantContainer);

    // Create and append the vowel cards
    createLetterCards(VowelData, vowelContainer);

});
