const root = document.querySelector(":root");

const GetMode = () => {
  currentMode = getComputedStyle(root).getPropertyValue("--primary");
  return currentMode;
}

const SetMode = (mode) => {
  document.documentElement.style.cssText = mode;
}

const SetSavedMode = () => {
  savedMode = localStorage.getItem("mode");
  if(savedMode == "black") {
    SetMode("--primary: black; --secondary: white");
  }
  else {
    SetMode("--primary: white; --secondary: black");
  }
}

SetSavedMode();

const ChangeMode = () => {
  let currentMode = GetMode();
  if(currentMode == "black") {
    SetMode("--primary: white; --secondary: black");
    localStorage.setItem("mode","white");
  }
  else {
    SetMode("--primary: black; --secondary: white");
    localStorage.setItem("mode","black");
  }
}



