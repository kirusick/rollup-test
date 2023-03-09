import "./styles/entry.scss";

const child = document.createElement("div");
child.className = "foo";
child.innerHTML = "main";

document.body.appendChild(child);

child.onclick = () => {
  import("./bundle");
};
