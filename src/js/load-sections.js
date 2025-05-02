function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');
loadHTML('ourphil', 'partials/ourphil.html');
loadHTML('signature', 'partials/signature.html');
loadHTML('spa', 'partials/spa.html');
loadHTML('holistic', 'partials/holistic.html');
loadHTML('client', 'partials/client.html');
loadHTML('ourspec', 'partials/ourspec.html');
loadHTML('luxury', 'partials/luxury.html');
loadHTML('how', 'partials/how.html');
loadHTML('footer', 'partials/footer.html');
