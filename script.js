const username = "FEPSFY7006774";
const repo = "FY7006774";

async function getLastUpdatedTime() {
  const box = document.getElementId("last-updated");
  const url = `https://api.github.com/repos/${username}/${repo}/commits`;
  
