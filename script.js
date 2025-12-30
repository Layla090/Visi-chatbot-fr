//here we'll add the mechanisms behind the Chatbot
const input = document.getElementById("user-input");
const chatWindow = document.getElementById("Chat");
/*create element by id means it ADDS an element to the HTML file
while get element by id means it GETS an element
which is already in theHTML file*/
function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;
    /*look at the input val. from earlier, "value" is what the user typed,
    and trim removes any extra spaces in the beginning or the end
    ex: "    hi   "--> "hi"*/
    chatWindow.innerHTML += `<div class="user">${userText}</div>`;
    //<div> is for styling, in this case, the chat bubble.
    //${} is for inserting variables into strings (strings are anything inside quotes)
//+= means add on to what's already there
    let reply = "Thank you for your interest in Visi! How can I help you today?";
    if (userText.toLowerCase().includes("hello")) {
        reply = "Hi, welcome to Visi! How can I help you today?";
    }
    if (userText.toLowerCase().includes("founded")) {
        reply = "Georgetown Visitation was founded in 1799. It is one of the oldest Catholic schools for girls in the US.";
    }
    if (userText.toLowerCase().includes("Technology")) {
        reply = "Our curriculum includes a 1:1 iPad system which the student would buy then use throughout their years. We also have computer labs, the MacNabb Lab, and a robust STEM program.";}
    if (userText.toLowerCase().includes("admission")) {
        reply = "For admission inquiries, please visit our admissions page or contact our admissions office directly.";
    }
    chatWindow.innerHTML += `<div class="bot">${reply}</div>`;
    input.value = "";
    input.focus();
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});