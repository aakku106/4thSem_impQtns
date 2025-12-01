// ============================================
// Theme Toggle Functionality
// ============================================
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Load saved theme or default to light
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// ============================================
// Back to Top Button
// ============================================
const backToTopButton = document.getElementById("backToTop");

// Show/hide back to top button on scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

// Scroll to top when clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ============================================
// Keyboard Shortcuts
// ============================================
document.addEventListener("keydown", (e) => {
  // Ctrl+K or Cmd+K to open search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    if (!searchOverlay.classList.contains("active")) {
      searchToggle.click();
    }
  }

  // Escape to close search or modals
  if (e.key === "Escape") {
    if (searchOverlay.classList.contains("active")) {
      searchClose.click();
    } else if (subjectModal.style.display === "block") {
      closeSubjectModal();
    }
  }
});

// ============================================
// Smooth Scrolling & Active Nav Links
// ============================================
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.querySelector(".nav-links");

// Hamburger menu toggle
if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinksContainer.classList.toggle("active");
  });
}

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

      // Close mobile menu
      if (hamburger && navLinksContainer) {
        hamburger.classList.remove("active");
        navLinksContainer.classList.remove("active");
      }
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
// Content Viewer Function - Opens in new tab
// ============================================
function viewContent(path, title) {
  const url = `viewer.html?file=${encodeURIComponent(
    path
  )}&title=${encodeURIComponent(title)}`;
  window.open(url, "_blank");
}

// ============================================
// Search Functionality
// ============================================
const searchOverlay = document.getElementById("searchOverlay");
const searchToggle = document.getElementById("searchToggle");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const filterBtns = document.querySelectorAll(".filter-btn");

let currentFilter = "all";
let searchIndex = [];

// Build search index
function buildSearchIndex() {
  const subjects = ["AI", "CN", "DBMS", "OS", "TOC"];
  searchIndex = [];

  subjects.forEach((subject) => {
    const data = getSubjectData(subject);
    
    // Add syllabus
    searchIndex.push({
      subject,
      title: `${data.name} - Syllabus`,
      path: data.syllabus,
      type: "Syllabus",
      keywords: `${data.name} syllabus ${subject}`.toLowerCase(),
    });

    // Add important questions
    data.questions.forEach((q) => {
      searchIndex.push({
        subject,
        title: `${data.name} - ${q.type}`,
        path: q.path,
        type: q.type,
        keywords: `${data.name} ${q.type} ${subject} important questions`.toLowerCase(),
      });
    });

    // Add past papers
    data.pastPapers.forEach((p) => {
      searchIndex.push({
        subject,
        title: `${data.name} - ${p.year}`,
        path: p.path,
        type: "Past Paper",
        keywords: `${data.name} ${p.year} ${subject} past paper question`.toLowerCase(),
      });
    });

    // Add emergency plans
    if (data.emergency) {
      data.emergency.forEach((e) => {
        searchIndex.push({
          subject,
          title: e.title,
          path: e.path,
          type: "2-Day Plan",
          keywords: `${e.title} ${subject} emergency 2 day plan`.toLowerCase(),
        });
      });
    }

    // Add examples
    if (data.examples) {
      data.examples.forEach((e) => {
        searchIndex.push({
          subject,
          title: e.title,
          path: e.path,
          type: "Example",
          keywords: `${e.title} ${subject} example solution`.toLowerCase(),
        });
      });
    }
  });
}

// Open search
searchToggle.addEventListener("click", () => {
  searchOverlay.classList.add("active");
  searchInput.focus();
  document.body.style.overflow = "hidden";
});

// Close search
searchClose.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
  searchInput.value = "";
  currentFilter = "all";
  filterBtns.forEach((btn) => btn.classList.remove("active"));
  filterBtns[0].classList.add("active");
  document.body.style.overflow = "auto";
});

// Close with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && searchOverlay.classList.contains("active")) {
    searchClose.click();
  }
});

// Close when clicking outside
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    searchClose.click();
  }
});

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    performSearch(searchInput.value);
  });
});

// Search input
searchInput.addEventListener("input", (e) => {
  performSearch(e.target.value);
});

// Perform search
function performSearch(query) {
  if (!query.trim()) {
    searchResults.innerHTML = `
      <div class="search-empty">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="12" stroke="currentColor" stroke-width="3"/>
          <path d="M30 30L40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <p>Start typing to search...</p>
      </div>
    `;
    return;
  }

  const searchTerm = query.toLowerCase();
  let results = searchIndex.filter((item) => {
    const matchesFilter =
      currentFilter === "all" || item.subject === currentFilter;
    const matchesQuery = item.keywords.includes(searchTerm);
    return matchesFilter && matchesQuery;
  });

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="search-empty">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="12" stroke="currentColor" stroke-width="3"/>
          <path d="M30 30L40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <p>No results found for "${query}"</p>
      </div>
    `;
    return;
  }

  searchResults.innerHTML = results
    .map(
      (item) => `
    <div class="search-result-item" onclick="openSearchResult('${item.path}', '${item.title.replace(/'/g, "\\'")}')">
      <div class="search-result-header">
        <h3 class="search-result-title">${highlightText(item.title, searchTerm)}</h3>
        <span class="search-result-badge">${item.subject}</span>
      </div>
      <p class="search-result-path">${item.type}</p>
      <p class="search-result-snippet">${highlightText(item.keywords, searchTerm)}</p>
    </div>
  `
    )
    .join("");
}

// Highlight matching text
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

// Open search result
function openSearchResult(path, title) {
  viewContent(path, title);
  searchClose.click();
}

// Initialize search on page load
document.addEventListener("DOMContentLoaded", () => {
  buildSearchIndex();
});

// ============================================
// Subject Modal Functionality
// ============================================
const subjectModal = document.getElementById("subjectModal");
const subjectModalBody = document.getElementById("subjectModalBody");

function openSubject(subject) {
  const subjectData = getSubjectData(subject);
  subjectModalBody.innerHTML = generateModalContent(subject, subjectData);
  subjectModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeSubjectModal() {
  subjectModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === subjectModal) {
    closeSubjectModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (subjectModal.style.display === "block") {
      closeSubjectModal();
    }
  }
});

function getSubjectData(subject) {
  const subjects = {
    AI: {
      name: "Artificial Intelligence",
      code: "CSC 303",
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
        <div class="subject-modal-wrapper">
        <div class="modal-header-content">
            <h2>${data.name}</h2>
            <span class="subject-code">${data.code}</span>
        </div>
        <p class="modal-description">${
          data.description
        }</p>        <div class="modal-section">
            <h3>Syllabus</h3>
            <button class="resource-link" onclick="viewContent('${
              data.syllabus
            }', 'Syllabus - ${data.name}')">
                View Complete Syllabus
            </button>
        </div>
        
        <div class="modal-section">
            <h3>Important Questions</h3>
            <div class="resource-grid">
                ${data.questions
                  .map(
                    (q) => `
                    <button class="resource-link" onclick="viewContent('${q.path}', '${q.type} - ${data.name}')">
                        ${q.type}
                    </button>
                `
                  )
                  .join("")}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Past Papers</h3>
            <div class="past-papers-grid">
                ${data.pastPapers
                  .map(
                    (p) => `
                    <button class="paper-link" onclick="viewContent('${p.path}', '${data.name} - ${p.year}')">
                        ${p.year}
                    </button>
                `
                  )
                  .join("")}
            </div>
        </div>
        
        ${
          data.emergency
            ? `
            <div class="modal-section">
                <h3>2-Day Emergency Plan</h3>
                <div class="resource-list-modal">
                    ${data.emergency
                      .map(
                        (e) => `
                        <button class="resource-link" onclick="viewContent('${e.path}', '${e.title}')">
                            ${e.title}
                        </button>
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
                <h3>Solved Examples</h3>
                <div class="resource-list-modal">
                    ${data.examples
                      .map(
                        (e) => `
                        <button class="resource-link" onclick="viewContent('${e.path}', '${e.title}')">
                            ${e.title}
                        </button>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `
            : ""
        }
        </div>
        
        <style>
            #subjectModalBody {
                text-align: left;
            }
            .modal-header-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid var(--border-color);
            }
            .modal-header-content h2 {
                margin: 0;
                font-size: 1.5rem;
                font-weight: 600;
                letter-spacing: -0.02em;
            }
            .modal-description {
                color: var(--text-secondary);
                margin: 1rem 0 2rem 0;
                line-height: 1.6;
                font-size: 0.9375rem;
            }
            .modal-section {
                margin-bottom: 2.5rem;
            }
            .modal-section:last-child {
                margin-bottom: 0;
            }
            .modal-section h3 {
                color: var(--text-primary);
                margin: 0 0 1rem 0;
                font-size: 1.125rem;
                font-weight: 600;
                letter-spacing: -0.01em;
            }
            .resource-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 0.875rem;
            }
            .resource-link {
                display: block;
                padding: 0.875rem 1.125rem;
                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                text-decoration: none;
                color: var(--text-primary);
                transition: all var(--transition-fast);
                cursor: pointer;
                font-size: 0.9375rem;
                text-align: left;
                font-weight: 500;
            }
            .resource-link:hover {
                background: var(--accent-primary);
                color: white;
                transform: translateY(-2px);
                border-color: var(--accent-primary);
            }
            .past-papers-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                gap: 0.625rem;
            }
            .paper-link {
                display: block;
                padding: 0.625rem 0.75rem;
                background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
                color: white;
                text-align: center;
                border-radius: var(--radius-md);
                text-decoration: none;
                font-weight: 500;
                transition: transform var(--transition-fast);
                border: none;
                cursor: pointer;
                font-size: 0.875rem;
            }
            .paper-link:hover {
                transform: scale(1.05);
            }
            .resource-list-modal {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            .subject-modal-wrapper {
                text-align: left;
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

console.log("4th Sem Exam Prep loaded successfully!");
console.log("Ready to ace your exams!");
