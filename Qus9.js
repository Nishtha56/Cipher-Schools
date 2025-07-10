window.addEventListener("DOMContentLoaded", () => {
  const para = document.getElementById("target");

  console.log("Parent Node of #target:", para.parentNode);
  console.log("Child Nodes of #container:", para.parentNode.childNodes);
  console.log("Next Sibling of #target:", para.nextSibling);
  console.log("Next Element Sibling of #target:", para.nextElementSibling);
});
