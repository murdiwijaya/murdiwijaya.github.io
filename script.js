import { data } from "./data.js";
let counter = 0;

function createCheckbox(id, type) {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", type);
  checkbox.setAttribute("id", id);
  return checkbox;
}

function createLabel(id, name) {
  const label = document.createElement("label");
  const text = document.createTextNode(name);
  label.setAttribute("for", id);
  label.appendChild(text);
  return label;
}

function createWrapper() {
  const div = document.createElement("div");
  div.setAttribute("class", "dir_wrapper");
  return div;
}

function tree(items) {
  const result = [];
  items.forEach((item) => {
    const { name, children = [] } = item;
    const id = counter++;
    const hasChild = children.length > 0;
    const type = hasChild ? "checkbox" : "radio";
    const checkbox = createCheckbox(id, type);
    const label = createLabel(id, name);
    result.push(checkbox);
    result.push(label);
    if (hasChild) {
      const div = createWrapper();
      tree(children).forEach((it) => div.appendChild(it));
      result.push(div);
    }
  });
  return result;
}

const getTree = tree(data);

const TREE = document.getElementById("tree");

getTree.forEach((item) => {
  TREE.appendChild(item);
});
