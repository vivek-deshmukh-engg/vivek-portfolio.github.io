// === Custom Cursor ===
const cursorDot = document.getElementById("cursor-dot");
const cursorRing = document.getElementById("cursor-ring");

document.addEventListener("mousemove", (e) => {
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
  cursorRing.style.left = e.clientX + "px";
  cursorRing.style.top = e.clientY + "px";
});

// === Smooth Button Glow on Hover ===
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorRing.style.transform = "scale(1.5)";
    cursorRing.style.borderColor = "#0ff";
  });
  el.addEventListener("mouseleave", () => {
    cursorRing.style.transform = "scale(1)";
    cursorRing.style.borderColor = "#9f5fff";
  });
});

// === Simple "Read More" Popup ===
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <button id="modal-close">&times;</button>
    <div id="modal-body"></div>
  </div>
`;
document.body.appendChild(modal);

const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

const projectDetails = {
  p1: "An oscilloscope built using ESP32 to visualize analog signals in real-time with a web interface.",
  p2: "Smart home automation system triggered by sound-based clap detection using a microcontroller.",
  p3: "Water level monitoring and control using IC555-based circuit design.",
  p4: "IoT-based environmental system monitoring temperature, humidity, and air quality data.",
  p5: "Touchless automatic handwash dispenser with IR sensor detection.",
  p6: "Ultrasonic RADAR system with ESP8266 for object detection and web data visualization.",
  p7: "Traffic signal simulation and control logic for multiple road lanes.",
  p8: "Automatic street light control based on LDR sensing of ambient light.",
  p9: "Step counter using accelerometer and microcontroller for fitness tracking.",
  p10: "Defence tank system for border surveillance with remote operation.",
  p11: "Car blackbox system that logs accident data and sensor parameters.",
};

document.querySelectorAll(".read-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    modalBody.textContent = projectDetails[id];
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// === Modal Styling ===
const modalStyle = document.createElement("style");
modalStyle.textContent = `
.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.8);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}
.modal-content {
  background: #111;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  color: #fff;
  text-align: center;
  border: 2px solid #0ff;
  box-shadow: 0 0 25px #9f5fff88;
}
#modal-close {
  background: none;
  border: none;
  color: #0ff;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
`;
document.head.appendChild(modalStyle);
