// here we'll add the mechanisms behind the chatbot

const input = document.getElementById("text");
const chatWindow = document.getElementById("messages");
const popUpButton = document.getElementById("pop-up");
const sendBtn = document.getElementById("sendBtn");

// button + enter key
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

// optional popup toggle (if button exists)
if (popUpButton) {
  popUpButton.addEventListener("click", () => {
    const chatContainer = document.getElementById("chat-container");
    if (
      chatContainer.style.display === "none" ||
      !chatContainer.style.display
    ) {
      chatContainer.style.display = "block";
    } else {
      chatContainer.style.display = "none";
    }
  });
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return;

  // show user message
  addMessage(userText, "user");
  input.value = "";

  // default reply
  let reply =
    "Welcome to Georgetown Visitation Preparatory School Admissions 👋 I am here to help answer questions about applying, visiting campus, tuition, financial aid, and student life.";

  const text = userText.toLowerCase();
  const hasAny = (arr) => arr.some((p) => text.includes(p));

  // greetings
  if (hasAny(["hello", "hi", "hey", "ello", "greetings", "yo"])) {
    reply =
      "Hello! Welcome to Georgetown Visitation Preparatory School Admissions 👋 What would you like to learn more about today?";
  }

  // location
  if (hasAny(["where", "location", "address", "located"])) {
    reply =
      "Georgetown Visitation Preparatory School is located at 1524 35th St NW, Washington, DC 20007, in the Georgetown neighborhood.";
  }

  // what kind of school
  if (
    hasAny([
      "what kind of school is visitation",
      "tell me about georgetown visitation",
      "tell me about visitation",
    ])
  ) {
    reply =
      "Georgetown Visitation Preparatory School is an all-girls Catholic, college-preparatory high school rooted in the Salesian tradition.";
  }

  // grades served
  if (
    hasAny([
      "what grades does visitation serve",
      "what grades are in",
      "is this a high school",
    ])
  ) {
    reply =
      "Georgetown Visitation serves students in grades 9 through 12 in the DC, MD, and VA area.";
  }

  // apply
  if (hasAny(["apply", "how to application", "admissions process"])) {
    reply =
      "The admissions process includes creating an Admissions Portal account, submitting an application, student questionnaire, teacher recommendations, transcripts, and standardized testing if applicable.";
  }

  // deadline
  if (
    hasAny([
      "applications due",
      "application deadline",
      "applications deadline",
      "application date",
    ])
  ) {
    reply =
      "The application deadline is typically the first Friday in December. Families should refer to the Admissions website for the most up-to-date dates.";
  }

  // decisions
  if (hasAny(["decisions", "when will we hear back"])) {
    reply =
      "Admissions decisions are usually released in late February through the Admissions Portal.";
  }

  // cub for a day
  if (hasAny(["what is cub for a day", "shadow day", "visit"])) {
    reply =
      "Cub for a Day is a full-day visit where current 8th grade or transfer students experience a day in the life of a Visitation student.";
  }

  // open house
  if (hasAny(["open houses", "information nights"])) {
    reply =
      "Yes! Georgetown Visitation hosts Open Houses and Student & Parent Information Nights in the fall.";
  }

  // tuition
  if (
    hasAny([
      "tuition cost",
      "cost of visi",
      "cost of georgetown visi",
      "cost",
    ])
  ) {
    reply =
      "Tuition is approximately $39,000 per year, with additional costs for uniforms, technology, and supplies.";
  }

  // financial aid
  if (
    hasAny([
      "financial aid",
      "do you offer assistance",
      "offer aid",
      "aid offer",
      "aid",
    ])
  ) {
    reply =
      "Yes, Georgetown Visitation offers need-based financial aid, and about one-third of students receive assistance.";
  }

  // scholarships
  if (hasAny(["scholarships", "merit awards"])) {
    reply =
      "Yes, Georgetown Visitation offers merit-based awards, including the St. Jane de Chantal Award.";
  }

  // founded
  if (hasAny(["founded"])) {
    reply =
      "Georgetown Visitation was founded in 1799 and is one of the oldest Catholic schools for girls in the United States.";
  }

  // technology
  if (hasAny(["technology"])) {
    reply =
      "Our curriculum includes a 1:1 iPad program, which students use throughout their years at Visitation.";
  }

  // academics
  if (
    hasAny([
      "ap",
      "academics offered",
      "college prep",
      "courses",
      "honors",
      "advanced placement",
    ])
  ) {
    reply =
      "Visitation offers a rigorous college-preparatory curriculum, including numerous AP and Honors courses.";
  }

  // student life
  if (hasAny(["student life", "clubs", "activities"])) {
    reply =
      "Students can participate in over 50 clubs, leadership programs, service opportunities, athletics, and arts programs.";
  }

  // athletics
  if (
    hasAny([
      "athletic",
      "varsity",
      "jv",
      "junior varsity",
      "sport",
      "tennis",
      "soccer",
      "basketball",
    ])
  ) {
    reply =
      "Visitation offers a wide range of athletic programs at varsity and junior varsity levels.";
  }

  // transportation
  if (
    hasAny([
      "transportation",
      "how do students get to school",
      "carpool",
      "drive",
    ])
  ) {
    reply =
      "We have an extensive carpooling system across the DMV, and Visitation is accessible by public transportation.";
  }

  // dress code
  if (
    hasAny([
      "cub for a day dress",
      "dress for cub for a day",
      "shadow dress",
      "dress for shadow",
    ])
  ) {
    reply =
      "Prospective students should wear their current school uniform if possible, or appropriate school attire.";
  }

  // contact admissions
  if (
    hasAny([
      "who can i talk to",
      "live support",
      "human",
      "admissions contact",
      "talk to admissions",
    ])
  ) {
    reply =
      "For personalized assistance, please contact the Georgetown Visitation Admissions Office through the school website.";
  }

  // thanks
  if (hasAny(["thank", "thx", "tq", "ty", "thanks", "appreciate"])) {
    reply =
      "You're welcome! If you have any more questions about Visitation, feel free to ask 💙";
  }

  // food
  if (hasAny(["eat", "food", "lunch"])) {
    reply =
      "Students can bring lunch from home or purchase lunch through MyHotLunchbox.";
  }

  // goodbye
  if (hasAny(["bye", "goodbye", "see you", "later", "farewell", "bai"])) {
    reply =
      "Farewell! Thank you for checking out Georgetown Visitation 💙";
  }

  // delay for realism
  setTimeout(() => {
    addMessage(reply, "bot");
  }, 400);
}
