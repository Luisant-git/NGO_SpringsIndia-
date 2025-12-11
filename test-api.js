fetch('http://localhost:3050/reports/published')
  .then(res => res.json())
  .then(data => console.log('Reports:', JSON.stringify(data, null, 2)))
  .catch(err => console.error('Error:', err));
