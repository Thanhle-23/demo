function createCard() {
  const name = document.getElementById('nameInp').value;
  const birth = document.getElementById('birthInp').value; 
  const ID = document.getElementById('idInp').value; 
  const Class = document.getElementById('classInp').value; 

  if(name.trim() === "") {
    alert("You haven't entered your name yet!!");
    return;
  }

  const card = document.createElement('div');
  card.className = 'profile-card';
            
  card.innerHTML = `
  <div class="profile-info">
    <h3>${name}</h3>
    <p>Birth: ${birth}</p>
    <p>ID: ${ID}</p>
    <p>Class: ${Class}</p>
  </div>
  `;
            
  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.innerText = 'Delete';
            
  delBtn.onclick = function() {
    card.remove(); 
  };
            
  card.appendChild(delBtn);
  document.getElementById('cardDisplay').appendChild(card);

  document.getElementById('nameInp').value = "";
  document.getElementById('birthInp').value = "";
  document.getElementById('idInp').value = "";
  document.getElementById('classInp').value = "";
}