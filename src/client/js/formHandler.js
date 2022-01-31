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
    .then((res) => {
      console.log(res);
      document.getElementById('results').innerHTML = `
     
          <h3>Article Analysis</h3>
          <p>Polarity: ${res.score_tag}</p>
          <p>Agreement: ${res.agreement}</p>
          <p>Subjectivity: ${res.subjectivity}</p>
          <p>Confidence: ${res.confidence}</p>
          <p>Irony: ${res.irony}</p>
    
      `;
    });
}

export { handleSubmit };
