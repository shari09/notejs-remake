function createCommentBox() {
  const commentStyle = `
    position: absolute;
    display: none;
    left: 0px;
    top: 0px;
    z-index: 100;
  `;

  const commentBox = `
  <div id="notejsCommentBox" style="${commentStyle}">
    <form>
      <input name="comment" type="text" placeholder="Enter a comment"></input>
      <input type="submit" value="Add"/>
    </form>
  </div>
  `;
  return commentBox;
}
console.log('sdfd');


//injecting the box element into the page
const commentBox = createCommentBox();
document.body.innerHTML = commentBox + document.body.innerHTML;
const boxElement = document.getElementById('notejsCommentBox');
const formInput = boxElement.children[0].children[0];
let highlightedText;


async function put(url, data) {
  return await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

//send data to backend
boxElement.children[0].addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    comment: formInput.value,
    highlightedText: highlightedText,
    hostname: location.hostname,
    path: location.href
  };
  const ip = '192.168.1.37';
  // xhr.open('PUT', 'https://192.168.1.37:3000/', true);
  // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  // xhr.send(JSON.stringify(data));
  put(`https://${ip}:3000/comment`, data).then(response => {
    return response.text();
  }).then(message => {
    console.log(message);
  }).catch(err => {
    console.log(err.message);
  });
  resetBox();
});


function comment(sendResponse) {
  const selection = window.getSelection();
  if (!selection.isCollapsed) {
    highlightedText = selection.toString();
    
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    
    //relative position are mostly just (0, 0) but it's for just in case
    const relative = document.body.parentNode.getBoundingClientRect();
    const top = (rect.bottom-relative.top)+'px';
    const left = (rect.left-relative.left)+'px';

    boxElement.style.left = left;
    boxElement.style.top = top;
    boxElement.style.display = 'block';
    formInput.focus();
    
    sendResponse({message: 'success'});
  } else {
    sendResponse({message: 'selection collapsed'});
  }
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === 'comment') {
    comment(sendResponse);
  }
});

function resetBox() {
  boxElement.style.display = 'none';
  formInput.value = '';
}

//ways for the comment box to disappear
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    resetBox();
  }
});

formInput.addEventListener('blur', () => {
  resetBox();
});

// document.addEventListener('scroll', () => {
//   resetBox();
// });


