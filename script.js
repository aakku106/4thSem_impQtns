// ============================================
// Theme Toggle Functionality
// ============================================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const html = document.documentElement;

// Load saved theme or default to light
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "light" ? "🌙" : "☀️";
}

// ============================================
// Smooth Scrolling & Active Nav Links
// ============================================
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Update active link
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Update active nav link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ============================================
// Subject Modal Functionality
// ============================================
const modal = document.getElementById("subjectModal");
const modalBody = document.getElementById("modalBody");

function openSubject(subject) {
  const subjectData = getSubjectData(subject);
  modalBody.innerHTML = generateModalContent(subject, subjectData);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

function getSubjectData(subject) {
  const subjects = {
    AI: {
      name: "Artificial Intelligence",
      code: "CSC 303",
      folders: ["AI"],
      description:
        "Explore intelligent agents, search algorithms, knowledge representation, and machine learning.",
      syllabus: "AI/qtn_sets_and_syllabus/syllabus.md",
      questions: [
        { type: "CS 4.5 Marks", path: "AI/imp_qtns/CS4.5.md" },
        { type: "Group 2.5 Marks", path: "AI/imp_qtns/G2.5_p.md" },
        { type: "Group 5 Marks", path: "AI/imp_qtns/G5.md" },
      ],
      pastPapers: [
        { year: "2081", path: "AI/qtn_sets_and_syllabus/2081.md" },
        { year: "2080 New", path: "AI/qtn_sets_and_syllabus/2080_new.md" },
        { year: "2080", path: "AI/qtn_sets_and_syllabus/2080.md" },
        { year: "2079", path: "AI/qtn_sets_and_syllabus/2079.md" },
        { year: "2078", path: "AI/qtn_sets_and_syllabus/2078.md" },
        { year: "2076", path: "AI/qtn_sets_and_syllabus/2076.md" },
        { year: "Model", path: "AI/qtn_sets_and_syllabus/modelQtn.md" },
      ],
      emergency: [
        {
          title: "FOPL Resolution Examples",
          path: "AI/imp_qtns/2DayPrep/fopl_resolution_example.md",
        },
        {
          title: "Informed Search Examples",
          path: "AI/imp_qtns/2DayPrep/informed_search_examples.md",
        },
        {
          title: "Short Question Cheatsheet",
          path: "AI/imp_qtns/2DayPrep/short_qtn_cheatsheet.md",
        },
        {
          title: "2-Day Plan Overview",
          path: "AI/imp_qtns/2DayPrep/README.md",
        },
      ],
      examples: [{ title: "G5 Solutions", path: "AI/Example_soln/g5_soln.md" }],
    },
    CN: {
      name: "Computer Networks",
      code: "CSC 304",
      folders: ["CN"],
      description:
        "Master network protocols, architecture, and communication systems.",
      syllabus: "CN/qtn_sets_and_syllabus/syllabus.md",
      questions: [
        { type: "CS 4.5 Marks", path: "CN/imp_qtns/CS4.5.md" },
        { type: "Group 2.5 Marks", path: "CN/imp_qtns/G2.5_p.md" },
        { type: "Group 5 Marks", path: "CN/imp_qtns/G5.md" },
      ],
      pastPapers: [
        { year: "2081", path: "CN/qtn_sets_and_syllabus/2081.md" },
        { year: "2080 New", path: "CN/qtn_sets_and_syllabus/2080_new.md" },
        { year: "2080", path: "CN/qtn_sets_and_syllabus/2080.md" },
        { year: "2079", path: "CN/qtn_sets_and_syllabus/2079.md" },
        { year: "2078", path: "CN/qtn_sets_and_syllabus/2078.md" },
        { year: "2076", path: "CN/qtn_sets_and_syllabus/2076.md" },
        { year: "Model", path: "CN/qtn_sets_and_syllabus/modelQtn.md" },
      ],
      emergency: [
        {
          title: "Distance Vector Routing",
          path: "CN/imp_qtns/2DayPrep/distance_vector_routing.md",
        },
        {
          title: "IPv4 vs IPv6 Explained",
          path: "CN/imp_qtns/2DayPrep/ipv4_vs_ipv6_explained.md",
        },
        { title: "TCP vs UDP", path: "CN/imp_qtns/2DayPrep/tcp_vs_udp.md" },
        { title: "Subnetting", path: "CN/imp_qtns/2DayPrep/subnetting.md" },
        {
          title: "Stop and Wait ARQ",
          path: "CN/imp_qtns/2DayPrep/stop_and_wait_arq.md",
        },
        {
          title: "Traffic Shaping",
          path: "CN/imp_qtns/2DayPrep/traffic_shaping_explained.md",
        },
        {
          title: "Switching & Topologies",
          path: "CN/imp_qtns/2DayPrep/switching_and_topologies.md",
        },
        { title: "MAC vs LLC", path: "CN/imp_qtns/2DayPrep/mac_vs_llc.md" },
        {
          title: "2-Day Plan Overview",
          path: "CN/imp_qtns/2DayPrep/README.md",
        },
      ],
    },
    DBMS: {
      name: "Database Management System",
      code: "CSC 305",
      folders: ["DBMS"],
      description:
        "Learn database design, SQL, normalization, and transaction management.",
      syllabus: "DBMS/qtn_sets_ans_syllabus/syllabus.md",
      questions: [
        { type: "CS 4.5 Marks", path: "DBMS/imp_qtns/CS4.5.md" },
        { type: "Group 2.5 Marks", path: "DBMS/imp_qtns/G2.5_p.md" },
        { type: "Group 5 Marks", path: "DBMS/imp_qtns/G5.md" },
      ],
      pastPapers: [
        { year: "2081", path: "DBMS/qtn_sets_ans_syllabus/2081.md" },
        { year: "2080 New", path: "DBMS/qtn_sets_ans_syllabus/2080_new.md" },
        { year: "2080", path: "DBMS/qtn_sets_ans_syllabus/2080.md" },
        { year: "2079", path: "DBMS/qtn_sets_ans_syllabus/2079.md" },
        { year: "2078", path: "DBMS/qtn_sets_ans_syllabus/2078.md" },
        { year: "2076", path: "DBMS/qtn_sets_ans_syllabus/2076.md" },
        { year: "Model", path: "DBMS/qtn_sets_ans_syllabus/modelQtn.md" },
      ],
      emergency: [
        {
          title: "ACID Properties",
          path: "DBMS/imp_qtns/2DayPrep/acid_properties.md",
        },
        {
          title: "Normalization & FD",
          path: "DBMS/imp_qtns/2DayPrep/normalization_and_fd.md",
        },
        { title: "SQL Queries", path: "DBMS/imp_qtns/2DayPrep/sql_queries.md" },
        {
          title: "SQL Past Paper Solutions",
          path: "DBMS/imp_qtns/2DayPrep/sql_past_paper_solutions.md",
        },
        {
          title: "Three Schema Architecture",
          path: "DBMS/imp_qtns/2DayPrep/three_schema_architecture.md",
        },
        {
          title: "2-Day Plan Overview",
          path: "DBMS/imp_qtns/2DayPrep/README.md",
        },
      ],
    },
    OS: {
      name: "Operating System",
      code: "CSC 306",
      folders: ["OS"],
      description:
        "Understand process management, memory management, and system calls.",
      syllabus: "OS/qtn_sets_and_syllabus/syllabus.md",
      questions: [
        { type: "CS 4.5 Marks", path: "OS/imp_qtns/CS4.5.md" },
        { type: "Group 2.5 Marks", path: "OS/imp_qtns/G2.5_p.md" },
        { type: "Group 5 Marks", path: "OS/imp_qtns/G5.md" },
      ],
      pastPapers: [
        { year: "2081", path: "OS/qtn_sets_and_syllabus/2081.md" },
        { year: "2080 New", path: "OS/qtn_sets_and_syllabus/2080_new.md" },
        { year: "2080", path: "OS/qtn_sets_and_syllabus/2080.md" },
        { year: "2079", path: "OS/qtn_sets_and_syllabus/2079.md" },
        { year: "2078", path: "OS/qtn_sets_and_syllabus/2078.md" },
        { year: "2076", path: "OS/qtn_sets_and_syllabus/2076.md" },
        { year: "Model", path: "OS/qtn_sets_and_syllabus/modelQtn.md" },
      ],
      emergency: [
        {
          title: "CPU Scheduling Examples",
          path: "OS/imp_qtns/2DayPrep/cpu_scheduling_examples.md",
        },
        {
          title: "Deadlock Conditions",
          path: "OS/imp_qtns/2DayPrep/deadlock_conditions.md",
        },
        {
          title: "Disk Scheduling Examples",
          path: "OS/imp_qtns/2DayPrep/disk_scheduling_examples.md",
        },
        {
          title: "Mutual Exclusion & Race Condition",
          path: "OS/imp_qtns/2DayPrep/mutual_exclusion_and_race_condition.md",
        },
        {
          title: "Page Replacement Examples",
          path: "OS/imp_qtns/2DayPrep/page_replacement_examples.md",
        },
        {
          title: "Paging vs Segmentation",
          path: "OS/imp_qtns/2DayPrep/paging_vs_segmentation.md",
        },
        {
          title: "Process vs Thread",
          path: "OS/imp_qtns/2DayPrep/process_vs_thread.md",
        },
        {
          title: "2-Day Plan Overview",
          path: "OS/imp_qtns/2DayPrep/README.md",
        },
      ],
    },
    TOC: {
      name: "Theory of Computation",
      code: "CSC 307",
      folders: ["TOC"],
      description:
        "Study automata theory, formal languages, and computational complexity.",
      syllabus: "TOC/qtn_sets_and_syllabus/syllabus.md",
      questions: [
        { type: "CS 4.5 Marks", path: "TOC/imp_qtns/CS4.5.md" },
        { type: "Group 2.5 Marks", path: "TOC/imp_qtns/G2.5_p.md" },
        { type: "Group 5 Marks", path: "TOC/imp_qtns/G5.md" },
      ],
      pastPapers: [
        { year: "2081", path: "TOC/qtn_sets_and_syllabus/2081.md" },
        { year: "2080 New", path: "TOC/qtn_sets_and_syllabus/2080_new.md" },
        { year: "2080", path: "TOC/qtn_sets_and_syllabus/2080.md" },
        { year: "2079", path: "TOC/qtn_sets_and_syllabus/2079.md" },
        { year: "2078", path: "TOC/qtn_sets_and_syllabus/2078.md" },
        { year: "2076", path: "TOC/qtn_sets_and_syllabus/2076.md" },
        { year: "Model", path: "TOC/qtn_sets_and_syllabus/modelQtn.md" },
      ],
      emergency: [
        {
          title: "2-Day TOC Survival Guide",
          path: "TOC/imp_qtns/2DayPrep/2_Day_TOC_Survival_Guide.md",
        },
        { title: "CFG Basics", path: "TOC/imp_qtns/2DayPrep/cfg_basics.md" },
        {
          title: "Chomsky Hierarchy Cheatsheet",
          path: "TOC/imp_qtns/2DayPrep/chomsky_hierarchy_cheatsheet.md",
        },
        {
          title: "Pumping Lemma Examples",
          path: "TOC/imp_qtns/2DayPrep/pumping_lemma_examples.md",
        },
        {
          title: "Thompson Construction",
          path: "TOC/imp_qtns/2DayPrep/thompson_construction_examples.md",
        },
      ],
      examples: [
        { title: "G5 Solutions", path: "TOC/Example_soln/g5_soln.md" },
      ],
    },
  };

  return subjects[subject];
}

function generateModalContent(subject, data) {
  return `
        <div class="modal-header">
            <h2>${data.name}</h2>
            <span class="subject-code">${data.code}</span>
        </div>
        <p class="modal-description">${data.description}</p>
        
        <div class="modal-section">
            <h3>📚 Syllabus</h3>
            <a href="${
              data.syllabus
            }" class="resource-link" target="_blank">View Complete Syllabus</a>
        </div>
        
        <div class="modal-section">
            <h3>⭐ Important Questions</h3>
            <div class="resource-grid">
                ${data.questions
                  .map(
                    (q) => `
                    <a href="${q.path}" class="resource-link" target="_blank">
                        ${q.type}
                    </a>
                `
                  )
                  .join("")}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>📄 Past Papers</h3>
            <div class="past-papers-grid">
                ${data.pastPapers
                  .map(
                    (p) => `
                    <a href="${p.path}" class="paper-link" target="_blank">
                        ${p.year}
                    </a>
                `
                  )
                  .join("")}
            </div>
        </div>
        
        ${
          data.emergency
            ? `
            <div class="modal-section">
                <h3>⚡ 2-Day Emergency Plan</h3>
                <div class="resource-list-modal">
                    ${data.emergency
                      .map(
                        (e) => `
                        <a href="${e.path}" class="resource-link" target="_blank">
                            ${e.title}
                        </a>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `
            : ""
        }
        
        ${
          data.examples
            ? `
            <div class="modal-section">
                <h3>✅ Solved Examples</h3>
                <div class="resource-list-modal">
                    ${data.examples
                      .map(
                        (e) => `
                        <a href="${e.path}" class="resource-link" target="_blank">
                            ${e.title}
                        </a>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `
            : ""
        }
        
        <style>
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid var(--border-color);
            }
            .modal-header h2 {
                margin: 0;
                color: var(--text-primary);
            }
            .modal-description {
                color: var(--text-secondary);
                margin-bottom: 2rem;
            }
            .modal-section {
                margin-bottom: 2rem;
            }
            .modal-section h3 {
                color: var(--text-primary);
                margin-bottom: 1rem;
                font-size: 1.25rem;
            }
            .resource-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 0.75rem;
            }
            .resource-link {
                display: block;
                padding: 0.75rem 1rem;
                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                text-decoration: none;
                color: var(--text-primary);
                transition: all var(--transition-fast);
            }
            .resource-link:hover {
                background: var(--accent-primary);
                color: white;
                transform: translateY(-2px);
            }
            .past-papers-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                gap: 0.5rem;
            }
            .paper-link {
                display: block;
                padding: 0.5rem;
                background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
                color: white;
                text-align: center;
                border-radius: var(--radius-md);
                text-decoration: none;
                font-weight: 600;
                transition: transform var(--transition-fast);
            }
            .paper-link:hover {
                transform: scale(1.05);
            }
            .resource-list-modal {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
        </style>
    `;
}

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".subject-card, .feature-card, .emergency-card"
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
});

// ============================================
// View Counter (using localStorage for demo)
// ============================================
let viewCount = localStorage.getItem("viewCount") || 0;
viewCount++;
localStorage.setItem("viewCount", viewCount);

console.log(
  `🎓 4th Sem Exam Prep loaded successfully! View count: ${viewCount}`
);
console.log("🚀 Ready to ace your exams!");
