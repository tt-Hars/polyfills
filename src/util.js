export const createEl = (elTag, attr, nodeData) => {
  const { id, classes } = attr;
  const el = document.createElement(elTag);
  el.setAttribute("id", id);
  if (classes) el.setAttribute("class", classes);
  if (nodeData) el.innerHTML = nodeData;
  return el;
};

export const attachEl = (parent, child) => {
  if (typeof parent === "string")
    document.querySelector(parent).appendChild(child);
  else parent.appendChild(child);
};

export const areResultsSame = (res1, res2) => {
  if (typeof res1 === typeof res2) {
    return Array.isArray(res1)
      ? res1.length === res2.length && res1.every((val) => res2.includes(val))
      : res1 === res2;
  }
  return false;
};
