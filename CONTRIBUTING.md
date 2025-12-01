# Contributing to 4th Sem Exam Prep

Thank you for your interest in contributing to this project! Your contributions help fellow BSc.CSIT students succeed in their exams.

## How to Contribute

### 1. **Report Errors or Issues**

If you find any mistakes, outdated information, or broken links:

- Go to [Issues](https://github.com/aakku106/4thSem_impQtns/issues)
- Click "New Issue"
- Provide a clear description of the problem
- Include the file path and line number if possible

### 2. **Suggest New Content**

Have additional study materials or question papers?

- Open an issue with the tag `enhancement`
- Describe what you'd like to add
- Attach or link to the materials

### 3. **Edit Existing Content**

Found a typo or want to improve explanations?

- Click the "Edit on GitHub" button on any document page
- Make your changes directly in the browser
- Submit a pull request with a clear description

### 4. **Add New Features**

Want to improve the website functionality?

- Fork the repository
- Create a new branch (`git checkout -b feature/your-feature-name`)
- Make your changes
- Test thoroughly
- Submit a pull request

## Content Guidelines

### Quality Standards

- Accurate information verified from reliable sources
- Clear, concise explanations
- Well-formatted markdown with proper headings
- Code examples properly highlighted
- Diagrams where helpful (Mermaid supported)

### File Organization

```
Subject/
├── qtn_sets_and_syllabus/
│   ├── syllabus.md
│   ├── 2076.md
│   └── ...
├── imp_qtns/
│   ├── CS4.5.md
│   ├── G2.5_p.md
│   └── G5.md
└── 2DayPrep/
    └── topic_name.md
```

### Markdown Style

- Use `#` for main titles (H1)
- Use `##` for sections (H2)
- Use `###` for subsections (H3)
- Add code blocks with language specification: ` ```python `
- Use tables for comparisons
- Add Mermaid diagrams for visual explanations

### Example Format

````markdown
# Topic Name

## Overview

Brief introduction to the topic.

## Key Concepts

1. **Concept 1**: Explanation
2. **Concept 2**: Explanation

## Example

\```python

# Code example

def example():
return "Hello"
\```

## Common Questions

- Q: Question?
  - A: Answer

---

_Last Updated: [Date]_
````

## Pull Request Process

1. **Fork & Clone**

   ```bash
   git clone https://github.com/YOUR-USERNAME/4thSem_impQtns.git
   cd 4thSem_impQtns
   ```

2. **Create Branch**

   ```bash
   git checkout -b fix/describe-your-change
   ```

3. **Make Changes**

   - Edit files
   - Test locally (open index.html in browser)
   - Commit with clear messages

4. **Push & PR**
   ```bash
   git add .
   git commit -m "Fix: description of changes"
   git push origin fix/describe-your-change
   ```
   - Go to GitHub and create Pull Request
   - Describe your changes clearly
   - Wait for review

## Code of Conduct

- Be respectful and constructive
- Focus on helping students learn
- Credit sources when adding content
- Maintain academic integrity
- No plagiarism or copyright violations

## Questions?

- Open an issue with the `question` tag
- Contact: [GitHub](https://github.com/aakku106)

---

**Thank you for helping make exam prep better for everyone! **
