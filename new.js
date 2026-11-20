function showPage(pageId){
    let pages = document.querySelectorAll(".page");
    pages.forEach(function(page){
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}
function postTweet(){
    let input = document.getElementById("tweetInput");
    let text = input.value.trim();
    if(text==""){
        alert("Write something...");
        return;
    }
    let tweet = document.createElement("div");
    tweet.className = "tweet";
    tweet.innerHTML = `
        <img src="https://i.pravatar.cc/50?img=12">
        <div class="content">
            <h3>You <i class="fa-solid fa-circle-check verify"></i></h3>
            <p>${text}</p>
            <div class="actions">
                <span onclick="like(this)">❤️ 0</span>
                <span onclick="commentTweet()">💬 Comment</span>
                <span onclick="repostTweet()">🔁 Repost</span>
                <span onclick="bookmarkTweet()">🔖 Save</span>
                <span onclick="deleteTweet(this)">🗑 Delete</span>
            </div>
        </div>
    `;
    document.getElementById("tweetContainer").prepend(tweet);
    input.value="";
}
function like(btn){
    let count = parseInt(btn.innerHTML.replace(/[^\d]/g,""));
    count++;
    btn.innerHTML = "❤️ " + count;
}
function commentTweet(){
    let c = prompt("Enter your comment");
    if(c){
        alert("Comment Added:\n"+c);
    }
}
function repostTweet(){
    alert("Tweet Reposted!");
}
function bookmarkTweet(){
    alert("Tweet Saved!");
}
function deleteTweet(btn){
    btn.closest(".tweet").remove();
}
function sendMessage(){
    let input = document.getElementById("message");
    let msg = input.value.trim();
    if(msg=="") return;
    let box = document.querySelector(".chatBox");
    let div = document.createElement("div");
    div.className="chat me";
    div.innerHTML=`
        <strong>You</strong>
        <p>${msg}</p>
    `;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
    input.value="";
}
let buttons = document.querySelectorAll(".user button");
buttons.forEach(function(btn){
    btn.onclick = function(){
        if(btn.innerHTML=="Follow"){
            btn.innerHTML="Following";
            btn.style.background="green";
        }else{
            btn.innerHTML="Follow";
            btn.style.background="black";
        }
    }
});
document.querySelector(".tweet-btn").onclick=function(){
    showPage("home");
    document.getElementById("tweetInput").focus();
}
document.getElementById("message").addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        sendMessage();
    }
});
setInterval(function(){
    let names=["Alex","Emma","David","Sophia","John"];
    let actions=[
        "liked your Tweet ❤️",
        "commented on your Tweet 💬",
        "followed you 👤",
        "reposted your Tweet 🔁"
    ];
    let notify=document.createElement("div");
    notify.className="notify";
    notify.innerHTML=
        names[Math.floor(Math.random()*names.length)]+" "+
        actions[Math.floor(Math.random()*actions.length)];
    let page=document.getElementById("notifications");
    page.prepend(notify);
},15000);
console.log("Twitter Clone Loaded Successfully 🚀");
