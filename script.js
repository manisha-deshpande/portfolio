document.addEventListener('DOMContentLoaded', function() {
    const simpleBtn = document.getElementById('simple-btn');
    const colorfulBtn = document.getElementById('colorful-btn');
    const simpleResume = document.getElementById('simple-resume');
    const colorfulResume = document.getElementById('colorful-resume');

    simpleBtn.addEventListener('click', () => {
        simpleResume.style.display = 'block';
        colorfulResume.style.display = 'none';
        simpleBtn.classList.add('active');
        colorfulBtn.classList.remove('active');
    });

    colorfulBtn.addEventListener('click', () => {
        simpleResume.style.display = 'none';
        colorfulResume.style.display = 'block';
        colorfulBtn.classList.add('active');
        simpleBtn.classList.remove('active');
    });

    fetch('resumeData.json')
        .then(response => response.json())
        .then(data => {
          // Update contact info
          document.getElementById('name').textContent = data.contact.name;
          //document.getElementById('contact-info').textContent = `${data.contact.location} ${data.contact.phone} ${data.contact.email}`;

          // Update education
          const educationList = document.getElementById('education-list');
          data.education.forEach(entry => {
            let card = document.createElement('div');
            card.classList.add('card', 'mt-3');
            card.innerHTML = `
              <div class="card-body">
                <h3 class="card-title">${entry.degree}</h3>
                <p>${entry.school} (${entry.graduation})</p>
                <p>GPA: ${entry.gpa}</p>
              </div>
            `;
            educationList.appendChild(card);
          });

          // Similarly update other sections (experience, skills)
        })
        .catch(error => console.error('Error fetching data:', error));

        // Decrypt phone number
          const decryptedPhone = 6027687074;
          //const decryptedPhone = CryptoJS.AES.decrypt(encryptedPhone, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

          const phoneDisplay = document.getElementById('phone-display');
          const revealIcon = document.getElementById('reveal-phone');

          // Event listeners for hover effect
          revealIcon.addEventListener('mouseover', () => {
            phoneDisplay.textContent = decryptedPhone;
            phoneDisplay.classList.remove('blurred');
          });

          revealIcon.addEventListener('mouseout', () => {
            phoneDisplay.textContent = 'XXX-XXX-XXXX';
            phoneDisplay.classList.add('blurred');
          });
});
