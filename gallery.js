document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = [
        {
            full: 'images/flowers-pink-large.jpg',
            thumb: 'images/flowers-pink-small.jpg',
            caption: 'Market in Münster'
        },
        {
            full: 'images/flowers-purple-large.jpg',
            thumb: 'images/flowers-purple-small.jpg',
            caption: 'Poppies in cornfield'
        },
        {
            full: 'images/flowers-red-large.jpg',
            thumb: 'images/flowers-red-small.jpg',
            caption: 'Daffodils in Sentmaring park'
        },
        {
            full: 'images/flowers-white-large.jpg',
            thumb: 'images/flowers-white-small.jpg',
            caption: 'Sentmaring Park'
        },
        {
            full: 'images/flowers-yellow-large.jpg',
            thumb: 'images/flowers-yellow-small.jpg',
            caption: 'Sunflowers in the hamlet Dernekamp'
        }
    ];

    const thumbnailsContainer = document.getElementById('thumbnails');
    const featuredImage = document.getElementById('featured');
    const figcaption = document.querySelector('figure figcaption');

    // Function to create thumbnail elements
    galleryItems.forEach((item, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.thumb;
        img.alt = item.caption;
        img.width = 240;
        img.height = 160;
        img.dataset.full = item.full;
        img.dataset.caption = item.caption;

        // Set the first thumbnail as active
        if (index === 0) {
            img.classList.add('active');
        }

        li.appendChild(img);
        thumbnailsContainer.appendChild(li);
    });

    // Function to update the featured image
    const updateFeaturedImage = (fullSrc, captionText) => {
        featuredImage.src = fullSrc;
        figcaption.textContent = captionText;

        // Scroll to the featured image
        featuredImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Add event listeners to thumbnails
    const thumbnails = document.querySelectorAll('#thumbnails img');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Add active class to the clicked thumbnail
            thumbnail.classList.add('active');

            // Update the featured image
            const fullSrc = thumbnail.dataset.full;
            const captionText = thumbnail.dataset.caption;
            updateFeaturedImage(fullSrc, captionText);
        });
    });

    // Initialize the gallery with the first item
    updateFeaturedImage(galleryItems[0].full, galleryItems[0].caption);
});
