const form = document.getElementById('bookmarkForm');
const bookmarkList = document.getElementById('bookmarkList');


function showPopup() {
  
  const popup = document.createElement('div');
  popup.className = 'popup'; 


  popup.innerHTML = `
    <div class="popup-header">
      <span>Site Name or Url is not valid</span>
      <button onclick="this.parentElement.parentElement.remove()">&times;</button>
    </div>
    <div class="popup-body">
      <p>Please follow the rules below:</p>
      <ul>
        <li>Site name must contain at least 3 characters</li>
        <li>Site URL must be a valid one</li>
      </ul>
    </div>
  `;

  
  document.body.appendChild(popup);
}


form.addEventListener('submit', function (e) {
  e.preventDefault(); 

 
  const siteName = document.getElementById('siteName').value.trim();
  const siteURL = document.getElementById('siteURL').value.trim();

 
  if (siteName.length < 3 || !isValidURL(siteURL)) {
    showPopup();
    return;
  }


  addBookmark(siteName, siteURL);


  form.reset();
});


function addBookmark(name, url) {
 
  const row = document.createElement('tr');

  
  const indexCell = document.createElement('td');
  indexCell.textContent = bookmarkList.rows.length + 1;

  const nameCell = document.createElement('td');
  nameCell.textContent = name;

  const visitCell = document.createElement('td');
  const visitButton = document.createElement('a');
  visitButton.textContent = 'Visit';
  visitButton.href = url;
  visitButton.target = '_blank';
  visitButton.style.color = 'blue';
  visitCell.appendChild(visitButton);

  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.style.color = 'red';
  deleteButton.addEventListener('click', function () {
    row.remove(); 
  });
  deleteCell.appendChild(deleteButton);

  
  row.appendChild(indexCell);
  row.appendChild(nameCell);
  row.appendChild(visitCell);
  row.appendChild(deleteCell);

 
  bookmarkList.appendChild(row);
}

function isValidURL(url) {
  try {
    new URL(url); 
    return true; 
  } catch (e) {
    return false; 
  }
}
