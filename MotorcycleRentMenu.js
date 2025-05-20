fetch('motorcycles.json')
  .then(res => res.json())
  .then(data => {
    const select = document.getElementById('bike-select');
    const grouped = {};

    data.forEach(bike => {
      if (!bike.model) return; // skip if it's the name mapping object
      if (!grouped[bike.mark]) grouped[bike.mark] = [];
      grouped[bike.mark].push(bike.model);
    });

    for (const brand in grouped) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = brand + '  ';

      grouped[brand].forEach(model => {
        const option = document.createElement('option');
        option.value = `${brand} ${model}`;
        option.textContent = model;
        optgroup.appendChild(option);
      });

      select.appendChild(optgroup);
    }
  });
