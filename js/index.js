const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");
const dateInput = document.querySelector("#til-date");
const titleInput = document.querySelector("#til-title");
const contentInput = document.querySelector("#til-content");

function formatDateValue(value) {
  if (!value) {
    return "";
  }

  return value;
}

function createTilItem(date, title, content) {
  const article = document.createElement("article");
  article.className = "til-item";

  const time = document.createElement("time");
  time.dateTime = date;
  time.textContent = formatDateValue(date);

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = content;

  article.append(time, heading, paragraph);
  return article;
}

function setTodayToDateInput() {
  const today = new Date();
  const tzOffset = today.getTimezoneOffset() * 60000;
  const localDate = new Date(today.getTime() - tzOffset).toISOString().split("T")[0];
  dateInput.value = localDate;
}

tilForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const date = dateInput.value;
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!date || !title || !content) {
    return;
  }

  const newItem = createTilItem(date, title, content);
  tilList.prepend(newItem);

  tilForm.reset();
  setTodayToDateInput();
  titleInput.focus();
});

setTodayToDateInput();
