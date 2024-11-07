document.addEventListener('DOMContentLoaded', () => {
  const adaptationCircle = document.getElementById('adaptation');

  // Directly navigate to the adaptation page on click
  adaptationCircle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = 'adaptation.html'; // Navigate to the adaptation page
  });
});
