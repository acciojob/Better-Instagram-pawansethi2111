//your code here
let images = document.querySelectorAll('.image');
images.forEach((image, index) => {
  image.id = `div${index + 1}`;
});

document.addEventListener('DOMContentLoaded', () => {
  //const images = document.querySelectorAll('.image');
  let draggedElement = null;

  images.forEach((image) => {
    // When dragging starts
    image.addEventListener('dragstart', (event) => {
      draggedElement = event.target;
      event.target.style.opacity = '0.5'; // Visual cue
    });

    // When dragging ends
    image.addEventListener('dragend', (event) => {
      event.target.style.opacity = ''; // Reset opacity
    });

    // Allow drop
    image.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    // Handle drop
    image.addEventListener('drop', (event) => {
      event.preventDefault();
      if (draggedElement && draggedElement !== event.target) {
        // Swap content (images or text) between the two elements
        const tempContent = event.target.innerHTML;
        event.target.innerHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = tempContent;
      }
    });
  });
});
