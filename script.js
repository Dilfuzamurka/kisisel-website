const blobs = document.querySelectorAll('.blob');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blobs.forEach((blob, index) => {
    const movement = (index + 1) * 20;

    blob.style.transform = `translate(
      ${x * movement}px,
      ${y * movement}px
    )`;
  });
});