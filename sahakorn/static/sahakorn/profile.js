import { universalFetcher } from "./utils.js";

const profileModal = document.getElementById('profileModal');
const updateProfileForm = document.getElementById('updateProfileForm');
const produceSelect = document.getElementById('produce_type');
const profileName = document.getElementById('profileName');

document.addEventListener("DOMContentLoaded", async () => {
  const produceTypeData = await universalFetcher('producer_type/');
  produceTypeData.forEach((data) => {
    const option = document.createElement('option');
    option.value = data.id;
    option.innerHTML = data.name;
    produceSelect.appendChild(option);
  });

  updateProfileForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(updateProfileForm);
    const data = {
      name: formData.get('name'),
      produce_type: formData.getAll('produce_type')
    };

    const response = await fetch('/api/member/420/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      profileModal.close();
      profileName.textContent = result.profile.name;
      const produceContainer = document.querySelector('.flex');
      produceContainer.innerHTML = '';
      result.profile.produce_type.forEach(id => {
        const badge = document.createElement('div');
        const tag = produceTypeData.find(tag => tag.id === id)
        badge.className = 'badge';
        badge.style.backgroundColor = tag.color;
        badge.style.color = 'white';
        badge.style.padding = '10px 15px';
        badge.style.borderRadius = '12px';
        badge.textContent = tag.name;
        produceContainer.appendChild(badge);
      });
    } else {
      alert('Error updating profile.');
    }
  });
});