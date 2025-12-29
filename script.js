//here we'll add the mechanisms behind the Chatbot
const input = document.createElement("user-input");
const chatWindow = document.getElementById("Chat");
/*create element by id means it ADDS an element to the HTML file
while get element by id means it GETS an element
which is already in theHTML file*/

function sendMessage() {
    const userText = input.value.trim()
    /*look at the input val. from earlier, "value" is what the user typed,
    and trim removes any extra spaces in the beginning or the end
    ex: "    hi   "--> "hi"*/
    if (userText === "") return; //if bro doesnt type anything, it does nothing :P
    
    chatWindow.innerHTML += <div class="user">$[userText]
    </div>
    //<div> is for styling, in this case, the chat bubble.
    //${} is for inserting variables into strings (strings are anything inside quotes)
//+= means add on to what's already there    
    let reply = "Thank you for your interest in Visi! How can I help you today?"
    if (userText.toLowerCase().includes("founded")) {
        reply = "Georgetown Visitation was founded in 1799 by the Religious of the Sacred Heart of Mary. Visi was founded in 1799. It is one of the oldest Catholic schools for girls in the US";}

    }
    {chatWindow.innerHTML += <div class="bot">${reply}</div>;
    input.value = ""; //clears the input box after sending
    let reply = "Thank you for your interest in Visi! How can I help you today?"
}

