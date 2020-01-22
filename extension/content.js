
function createCommentBox(top, left) {
  const commentStyle = `
    position: absolute;
    display: block;
    left: ${left};
    top: ${top};
  `;

  const commentBox = `
  <div id="notejsCommentBox" style="${commentStyle}">
    <form action="" onsubmit="postData()" method="POST">
      <input type="text" placeholder="Enter a comment" autofocus></input>
      <input type="submit" value="Add"/>
    </form>
  </div>
  `;
  return commentBox;
}

let highlightedText;

function postData() {
  console.log(highlightedText);
}


function comment(sendResponse) {
  const selection = window.getSelection();
  if (!selection.isCollapsed) {
    highlightedText = selection.toString();
    
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    
    //relative position are mostly just (0, 0) but it's for just in case
    const relative = document.body.parentNode.getBoundingClientRect();
    const top = (rect.bottom-relative.top)+'px';
    const left = (rect.left-relative.left)+'px';

    const boxElement = document.getElementById('notejsCommentBox');

    if (boxElement) {
      boxElement.style.left = left;
      boxElement.style.top = top;
    } else {
      const commentBox = createCommentBox(top, left);
      document.body.innerHTML += commentBox;
      // const boxElement = new DOMParser().parseFromString(commentBox, 'text/xml');
      // document.body.appendChild(boxElement);
    }
    
    // console.log(rect.toJSON(), relative.toJSON());

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
