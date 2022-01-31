function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById('name').value;
  Client.checkForName(url);

  console.log('::: Form Submitted :::');
  fetch('/api', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ url }),
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit };
