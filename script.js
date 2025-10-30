/* ========= Custom Animated Cursor ========= */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

// Move dot instantly
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

// Smooth follow ring
function moveRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(moveRing);
}
moveRing();

// Hover scaling on clickable items
const clickable = document.querySelectorAll('a, button, .project, .btn');
clickable.forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
    dot.style.transform = 'translate(-50%, -50%) scale(0.6)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform = 'translate(-50%, -50%) scale(1)';
    dot.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

/* ========= Scroll Reveal Animation ========= */
const revealEls = document.querySelectorAll('.section, .skill, .project, .achievements-list li');
const obsOptions = { threshold: 0.1 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, obsOptions);

revealEls.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

/* ========= Project Details (Read More) ========= */
const projectData = {
  p1: {
    title: "Oscilloscope using ESP32",
    detail: `<p><strong>Overview:</strong> A portable digital oscilloscope using ESP32's ADC for waveform capture and web visualization.</p>
    <p><strong>Features:</strong> Real-time sampling, dual-channel view, browser UI, and microSD logging.</p>
    <p><strong>Tech:</strong> ESP32 ADC, WebSocket, HTML5 Canvas, SPI.</p>`
  },
  p2: {
    title: "Home Automation Using Clap Detection",
    detail: `<p><strong>Overview:</strong> Clap-based control system for appliances using sound detection.</p>
    <p><strong>Features:</strong> Pattern recognition, noise filtering, and relay control.</p>`
  },
  p3: {
    title: "Automatic Water Level Controller Using IC555",
    detail: `<p>Simple IC555 timer-based water pump controller with automatic ON/OFF switching.</p>`
  },
  p4: {
    title: "Environmental Monitoring",
    detail: `<p>IoT-based environment monitoring for temperature, humidity, and air quality with cloud logging.</p>`
  },
  p5: {
    title: "Automatic Handwash Dispenser",
    detail: `<p>Touchless handwash dispenser using IR sensors and a micro pump with adjustable flow timing.</p>`
  },
  p6: {
    title: "RADAR Using Ultrasonic Sensor & Data Logging",
    detail: `<p>Ultrasonic radar scanning with object detection visualization and data logging to web dashboard.</p>`
  },
  p7: {
    title: "Traffic Light Controller",
    detail: `<p>Microcontroller-based sequential traffic light controller with pedestrian crossing support.</p>`
  },
  p8: {
    title: "Street Light Controller",
    detail: `<p>Automatic LDR + RTC-controlled street light system for efficient energy use.</p>`
  },
  p9: {
    title: "Step Counter",
    detail: `<p>Low-power wearable step counter using accelerometer and signal processing algorithm.</p>`
  },
  p10: {
    title: "Border Defence Tank System",
    detail: `<p>Autonomous vehicle prototype for defense simulation with obstacle detection and control.</p>`
  },
  p11: {
    title: "Blackbox System for Car",
    detail: `<p>Vehicle data recorder capturing GPS, accelerometer, and event data for analysis.</p>`
  }
};

// Modal logic
const modal = document.getElementById('proj-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    const info = projectData[id];
    if (info) {
      modalContent.innerHTML = `<h2>${info.title}</h2>${info.detail}`;
      modal.setAttribute('aria-hidden', 'false');
    }
  });
});

modalClose.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
  modalContent.innerHTML = '';
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.setAttribute('aria-hidden', 'true');
    modalContent.innerHTML = '';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.setAttribute('aria-hidden', 'true');
    modalContent.innerHTML = '';
  }
});

/* ========= Contact Form (Mailto) ========= */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const msg = contactForm.message.value.trim();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:vivekdeshmukh8055@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ========= Page load animation ========= */
window.addEventListener('load', () => {
  document.body.style.transition = 'background 0.6s ease';
});
