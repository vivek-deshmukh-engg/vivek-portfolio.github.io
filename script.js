:root{
  --bg:#060608;
  --card:#0f1720;
  --accent:#7b2bff;
  --accent2:#00ffe0;
  --muted:#a9b0b8;
  --glass: rgba(255,255,255,0.03);
  --max-width:1100px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0; background: radial-gradient(1200px 600px at 10% 10%, rgba(123,43,255,0.08), transparent),
    radial-gradient(800px 400px at 90% 90%, rgba(0,255,224,0.03), transparent),
    var(--bg);
  color:#e9eef5; font-family: "Poppins",system-ui,Segoe UI,Roboto,Helvetica,Arial;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.5;
}

/* Container */
.container{max-width:var(--max-width); margin:0 auto; padding:0 20px}

/* Header */
.site-header{position:fixed; top:0; left:0; right:0; z-index:1000; backdrop-filter: blur(6px); background:linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.2)); border-bottom:1px solid rgba(255,255,255,0.02)}
.header-inner{display:flex; align-items:center; justify-content:space-between; padding:18px 0}
.brand h1{font-size:20px; letter-spacing:0.2px; margin:0}
.brand h1 span{color:var(--accent2)}
.title{font-size:12px; color:var(--muted); margin-top:4px}

/* Nav */
.nav a{color:#dfe9f2; text-decoration:none; margin-left:18px; font-size:14px}
.nav a.btn-outline{border:1px solid rgba(255,255,255,0.06); padding:8px 12px; border-radius:8px}
.nav a.btn-outline:hover{background:rgba(255,255,255,0.02)}
.nav a.btn{background:var(--accent2); color:#000; padding:8px 12px; border-radius:8px; margin-left:14px; text-decoration:none}

/* Hero */
.hero{padding-top:110px; padding-bottom:60px}
.hero-inner{display:grid; grid-template-columns: 1fr 360px; gap:36px; align-items:center}
.hero-text h2{font-size:36px; margin:0 0 12px}
.hero-text h2 span{color:var(--accent2)}
.lead{color:var(--muted); max-width:680px}
.hero-cta{margin-top:20px}
.btn{display:inline-block; background:linear-gradient(90deg,var(--accent),#904cff); color:#fff; padding:10px 18px; border-radius:12px; text-decoration:none; box-shadow: 0 6px 24px rgba(123,43,255,0.08)}
.btn.ghost{background:transparent; border:1px solid rgba(255,255,255,0.04); margin-left:12px}
.btn.small{padding:8px 12px; font-size:14px}

/* Hero card */
.hero-card{position:relative; min-height:220px; border-radius:14px; overflow:hidden}
.card-glow{position:absolute; inset:-20% -10% auto auto; width:220px; height:220px; filter:blur(60px); background:linear-gradient(45deg,var(--accent),var(--accent2)); opacity:0.25; transform:translate(30px,-30px)}
.card-content{position:relative; background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent); border:1px solid rgba(255,255,255,0.03); padding:20px; border-radius:14px; height:100%}
.card-content h3{margin:0 0 8px}
.card-content ul{list-style:none; padding:0; margin:0}
.card-content li{margin:8px 0; color:var(--muted)}

/* Sections */
.section{padding:64px 0}
.section.dark{background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent)}
.section-title{color:var(--accent); font-size:20px; margin-bottom:12px}
.section-sub{color:var(--muted); max-width:900px}

/* Skills grid */
.skills-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:18px}
.skill{background:var(--card); border-radius:12px; padding:14px; border:1px solid rgba(255,255,255,0.03); text-align:center; color:#dfe9f2; box-shadow: 0 6px 20px rgba(0,0,0,0.45)}

/* Achievements */
.achievements-list{list-style:none; padding:0; margin-top:18px}
.achievements-list li{background:var(--card); padding:16px; border-radius:12px; margin-bottom:12px; border-left:4px solid var(--accent); color:var(--muted)}

/* Projects grid */
.projects-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:18px}
.project{background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent); padding:16px; border-radius:12px; border:1px solid rgba(255,255,255,0.03); position:relative}
.project h3{margin:0 0 8px}
.project p{margin:0 0 12px; color:var(--muted)}
.btn-outline{background:transparent; border:1px solid rgba(255,255,255,0.06); padding:8px 12px; border-radius:10px; color:#fff}

/* Contact grid */
.contact-grid{display:grid; grid-template-columns: 1fr 1fr; gap:24px}
.contact-info{list-style:none; padding:0; color:var(--muted)}
.contact-form input, .contact-form textarea{width:100%; padding:12px; border-radius:10px; background:transparent; border:1px solid rgba(255,255,255,0.04); color:#e9eef5; margin-bottom:12px}

/* Footer */
.site-footer{padding:30px 0; border-top:1px solid rgba(255,255,255,0.02); margin-top:30px; text-align:center; color:var(--muted)}

/* Modal */
.modal{position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.6); z-index:2000; opacity:0; pointer-events:none; transition:all .25s ease}
.modal[aria-hidden="false"]{opacity:1; pointer-events:auto}
.modal-inner{background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02)); border-radius:12px; padding:18px; width:90%; max-width:760px; box-shadow:0 20px 60px rgba(0,0,0,0.6)}
.modal-close{position:absolute; right:28px; top:28px; background:transparent; border:none; color:#fff; font-size:22px}

/* Cursor styles */
.cursor-dot{position:fixed; width:8px; height:8px; border-radius:50%; background:var(--accent2); transform:translate(-50%, -50%); pointer-events:none; z-index:3000; transition:transform .08s linear}
.cursor-ring{position:fixed; width:48px; height:48px; border-radius:50%; border:2px solid rgba(123,43,255,0.6); transform:translate(-50%, -50%); pointer-events:none; z-index:2999; transition:transform .12s ease, opacity .2s}
.cursor-ring.hidden{opacity:0}

/* Responsive */
@media (max-width:1000px){
  .projects-grid{grid-template-columns:repeat(2,1fr)}
  .skills-grid{grid-template-columns:repeat(2,1fr)}
  .hero-inner{grid-template-columns:1fr}
  .nav a{display:none}
}
@media (max-width:640px){
  .projects-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .skills-grid{grid-template-columns:1fr}
  .hero-text h2{font-size:28px}
}
