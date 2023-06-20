const chatbotIcon = document.querySelector("#chatbot-icon");
const chatbotWindow = document.querySelector("#chatbot-window");
const chatbotContent = document.querySelector("#chatbot-content");
const userInput = document.querySelector("#user-input");
const messageInput = document.querySelector("#message-input");

const predefinedQuestions = [
  {
    id: "what-are-your-opening-hours",
    question: "What are your opening hours?",
    answer: "Our opening hours are Monday to Friday from 8am to 6pm.",
  },
  {
    id: "what-age-groups-do-you-cater-for",
    question: "What age groups do you cater for?",
    answer: "We cater for children aged 6 months to 5 years old.",
  },
  {
    id: "how-do-i-enroll-my-child",
    answer:
      "You can enroll your child by filling out our online enrollment form or by visiting us in person.",
  },
];

function handlePredefinedQuestionClick(event) {
  const questionId = event.target.id;
  const answer = predefinedQuestions.find((question) => question.id === questionId).answer;
  displayBotMessage(answer);
}

document.querySelectorAll(".predefined-question").forEach((question) => {
  question.addEventListener("click", handlePredefinedQuestionClick);
});

function displayBotMessage(message) {
  const botMessage = document.createElement("p");
  botMessage.classList.add("bot-message");
  botMessage.textContent = message;
  chatbotContent.appendChild(botMessage);
}

chatbotIcon.addEventListener("click", () => {
  chatbotWindow.classList.toggle("hidden");
  if (!chatbotWindow.classList.contains("hidden")) {
    displayWelcomeMessage();
  }
});

function displayWelcomeMessage() {
  const welcomeMessage = "Welcome to our nursery! How can I help you today?";
  displayBotMessage(welcomeMessage);
}

function handleUserMessage(message) {
  const botMessage = "I'm sorry, I don't understand your question. Please try again.";
  if (message.trim().length > 0) {
    const answer = predefinedQuestions.find((question) => question.question === message);
    if (answer) {
      botMessage = answer.answer;
    }
  }
  displayBotMessage(botMessage);
}

const closeButton = document.querySelector(".chat-popup button.close");

closeButton.addEventListener("click", () => {
  chatbotWindow.classList.toggle("hidden");
});
