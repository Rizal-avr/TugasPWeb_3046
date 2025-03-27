function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function saveProfile() {
    document.getElementById('output-name').textContent = document.getElementById('name').value;
    document.getElementById('output-email').textContent = document.getElementById('email').value;
    document.getElementById('output-phone').textContent = document.getElementById('phone').value;
    document.getElementById('output-bio').textContent = document.getElementById('bio').value;
    document.getElementById('output-skills').textContent = document.getElementById('skills').value;
    
    const social = document.getElementById('social').value;
    document.getElementById('output-social').href = social;
    document.getElementById('output-social').textContent = social;
    
    const file = document.getElementById('profile-pic').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('output-pic').src = event.target.result;
            document.getElementById('output-pic').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function addProject() {
    const projectName = document.getElementById('project-name').value;
    const projectDesc = document.getElementById('project-desc').value;
    const file = document.getElementById('project-img').files[0];
    
    if (projectName && projectDesc) {
        const projectList = document.getElementById('project-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${projectName}</strong>: ${projectDesc}`;
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                listItem.innerHTML += `<br><img src="${event.target.result}" style="max-width:200px;">`;
            };
            reader.readAsDataURL(file);
        }
        projectList.appendChild(listItem);
    }
}
