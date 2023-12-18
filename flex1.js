// script.js

function createMasonry() {
    document.querySelector('.placeholder-image').style.display = 'none';

    var itemCount = parseInt(document.getElementById('item-count').value);
    var selectedColor = document.getElementById('color-selector').value;

    var masonryContainer = document.getElementById('masonry-container');
    masonryContainer.innerHTML = '';

    for (var i = 1; i <= itemCount; i++) {
        var itemContent = prompt('Enter content for item ' + i);
        var itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.textContent = itemContent;
        itemElement.style.backgroundColor = selectedColor;
        masonryContainer.appendChild(itemElement);
    }

    var masonry = new Masonry('#masonry-container', {
        itemSelector: '.item',
        columnWidth: 30,
        gutter: 0
    });
}
