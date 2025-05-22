document.querySelector(".btn").addEventListener("click", () => {
  alert("Btn aktivert!");
});

document.getElementById("scrollTopBtn").onclick = () => window.scrollTo({
  top: 0, 
  behavior: 'smooth' 
});

