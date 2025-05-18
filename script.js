function saveBrowserData() {
    const browserInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        appVersion: navigator.appVersion,
        vendor: navigator.vendor,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        cookiesEnabled: navigator.cookieEnabled
    };

    localStorage.setItem('browserData', JSON.stringify(browserInfo));
}

function displayStorageData() {
    const data = localStorage.getItem('browserData');
    const footerDiv = document.querySelector(".localstorage-content");
    
    if(data) {
        footerDiv.innerText = JSON.stringify(JSON.parse(data), null, 2)
            .replace(/,/g, ",\n")
            .replace(/[{}]/g, "");
    }
}

const variantNumber = 22; 

function loadComments() {
    const commentsContainer = document.getElementById('comments-container');
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
        .then(response => response.json())
        .then(comments => {
            commentsContainer.innerHTML = comments
                .map(comment => `
                    <div class="comment">
                        <h3>${comment.name}</h3>
                        <p class="comment-email">${comment.email}</p>
                        <p>${comment.body}</p>
                    </div>
                `)
                .join('');
        })
        .catch(error => {
            commentsContainer.innerHTML = `<p>Error loading comments: ${error.message}</p>`;
        });
}

window.onload = function() {
    saveBrowserData();
    displayStorageData();

    loadComments();
};
