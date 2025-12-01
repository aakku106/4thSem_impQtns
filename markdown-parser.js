// ============================================
// Markdown to HTML Parser
// ============================================

class MarkdownParser {
  constructor() {
    this.rules = [
      // Headers
      { pattern: /^### (.*$)/gm, replacement: "<h3>$1</h3>" },
      { pattern: /^## (.*$)/gm, replacement: "<h2>$1</h2>" },
      { pattern: /^# (.*$)/gm, replacement: "<h1>$1</h1>" },

      // Bold and Italic
      {
        pattern: /\*\*\*(.*?)\*\*\*/g,
        replacement: "<strong><em>$1</em></strong>",
      },
      { pattern: /\*\*(.*?)\*\*/g, replacement: "<strong>$1</strong>" },
      { pattern: /\*(.*?)\*/g, replacement: "<em>$1</em>" },
      { pattern: /\_\_(.*?)\_\_/g, replacement: "<strong>$1</strong>" },
      { pattern: /\_(.*?)\_/g, replacement: "<em>$1</em>" },

      // Code blocks
      {
        pattern: /```([\s\S]*?)```/g,
        replacement: "<pre><code>$1</code></pre>",
      },
      { pattern: /`([^`]+)`/g, replacement: "<code>$1</code>" },

      // Links
      {
        pattern: /\[([^\]]+)\]\(([^\)]+)\)/g,
        replacement: '<a href="$2" target="_blank">$1</a>',
      },

      // Images
      {
        pattern: /!\[([^\]]*)\]\(([^\)]+)\)/g,
        replacement: '<img src="$2" alt="$1" />',
      },

      // Horizontal Rule
      { pattern: /^\-\-\-$/gm, replacement: "<hr />" },

      // Line breaks
      { pattern: /\n\n/g, replacement: "</p><p>" },
    ];
  }

  parse(markdown) {
    let html = markdown;

    // Handle lists (unordered)
    html = html.replace(/^\* (.+)$/gm, "<li>$1</li>");
    html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
    html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

    // Handle lists (ordered)
    html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

    // Apply all rules
    this.rules.forEach((rule) => {
      html = html.replace(rule.pattern, rule.replacement);
    });

    // Wrap in paragraphs
    html = "<p>" + html + "</p>";

    // Clean up
    html = html.replace(/<p><\/p>/g, "");
    html = html.replace(/<p>(<h[1-6]>)/g, "$1");
    html = html.replace(/(<\/h[1-6]>)<\/p>/g, "$1");
    html = html.replace(/<p>(<ul>)/g, "$1");
    html = html.replace(/(<\/ul>)<\/p>/g, "$1");
    html = html.replace(/<p>(<ol>)/g, "$1");
    html = html.replace(/(<\/ol>)<\/p>/g, "$1");
    html = html.replace(/<p>(<pre>)/g, "$1");
    html = html.replace(/(<\/pre>)<\/p>/g, "$1");
    html = html.replace(/<p><hr \/><\/p>/g, "<hr />");

    return html;
  }
}

// ============================================
// Content Viewer
// ============================================

class ContentViewer {
  constructor() {
    this.parser = new MarkdownParser();
    this.cache = new Map();
  }

  async fetchMarkdown(path) {
    // Check cache first
    if (this.cache.has(path)) {
      return this.cache.get(path);
    }

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${path}`);
      }
      const markdown = await response.text();
      this.cache.set(path, markdown);
      return markdown;
    } catch (error) {
      console.error("Error fetching markdown:", error);
      return `# Error Loading Content\n\nUnable to load the requested document. Please try again later.`;
    }
  }

  async renderMarkdown(path, container) {
    // Show loading state
    container.innerHTML = '<div class="loading">Loading content...</div>';

    // Fetch and parse markdown
    const markdown = await this.fetchMarkdown(path);
    const html = this.parser.parse(markdown);

    // Render with styling
    container.innerHTML = `
            <div class="markdown-content">
                ${html}
            </div>
        `;

    // Smooth scroll to top of content
    container.scrollTop = 0;
  }

  async openInModal(path, title) {
    const modal = document.getElementById("contentModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    modalTitle.textContent = title;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    await this.renderMarkdown(path, modalBody);
  }

  closeModal() {
    const modal = document.getElementById("contentModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Create global instance
const contentViewer = new ContentViewer();
