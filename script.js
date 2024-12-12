document.addEventListener('DOMContentLoaded', () => {
    const techniqueItems = document.querySelectorAll('.technique-item');
    const additionalDataDiv = document.getElementById('additional-data');
  
    const detailedContent = {
        "Composting": `
          <h4>Benefits of Composting:</h4>
          <ul>
            <li>Improves soil structure and fertility.</li>
            <li>Enhances water retention in soil.</li>
            <li>Reduces waste sent to landfills.</li>
          </ul>
          <p>Learn how to create a composting system <a href="https://youtu.be/eV6Fl6TJxrM?feature=shared" target="_blank">Click here</a>.</p>
        `,
        "Crop Rotation": `
          <h4>Why Crop Rotation?</h4>
          <ul>
            <li>Reduces pests and diseases.</li>
            <li>Improves soil nutrient availability.</li>
            <li>Minimizes soil erosion.</li>
          </ul>
          <p>Explore crop rotation techniques <a href="https://youtu.be/XeNA6XdMoF8?feature=shared" target="_blank">Click here</a>.</p>
        `,
        "Natural Pest Control": `
          <h4>How Natural Pest Control Works:</h4>
          <ul>
            <li>Uses beneficial insects like ladybugs and lacewings.</li>
            <li>Incorporates organic pesticides from plant extracts.</li>
            <li>Preserves the ecosystem's balance.</li>
          </ul>
          <p>Discover more about natural pest control <a href="https://youtu.be/AsK_4uuayto?feature=shared" target="_blank">Click here</a>.</p>
        `,
        "Mulching": `
          <h4>Advantages of Mulching:</h4>
          <ul>
            <li>Prevents water loss by reducing evaporation.</li>
            <li>Suppresses weed growth naturally.</li>
            <li>Enriches the soil with organic matter as it decomposes.</li>
          </ul>
          <p>Learn how to use mulching effectively <a href="https://youtu.be/M7enfe_4pUU?feature=shared" target="_blank">Click here</a>.</p>
        `,
        "Cover Cropping": `
          <h4>Cover Cropping Benefits:</h4>
          <ul>
            <li>Protects soil from erosion during off-seasons.</li>
            <li>Improves soil organic matter and structure.</li>
            <li>Enhances nitrogen levels through legumes.</li>
          </ul>
          <p>Explore more about cover cropping <a href="https://youtu.be/3j5MRJeCoYs?feature=shared" target="_blank">Click here</a>.</p>
        `,
        "Agroforestry": `
          <h4>What is Agroforestry?</h4>
          <ul>
            <li>Promotes biodiversity by integrating trees and crops.</li>
            <li>Reduces soil erosion and enhances water retention.</li>
            <li>Provides carbon sequestration for climate benefits.</li>
          </ul>
          <p>Discover how agroforestry works <a href="https://youtu.be/rzImtlqjdxo?feature=shared" target="_blank">Click here</a>.</p>
        `
      };      
  
    techniqueItems.forEach(item => {
      item.addEventListener('click', () => {
        const techniqueName = item.querySelector('h3').innerText;
        const info = detailedContent[techniqueName] || 'No additional information available.';
  
        // Update the content and display the additional-data div
        additionalDataDiv.innerHTML = `
          <h3>${techniqueName}</h3>
          <p>${item.getAttribute('data-info')}</p>
          ${info}
        `;
        additionalDataDiv.style.display = 'block';
      });
    });
  });
  