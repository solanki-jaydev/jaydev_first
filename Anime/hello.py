from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 14)
        self.cell(0, 10, 'Jaydev Solanki - Resume', 0, 1, 'C')
        self.ln(4)
    
    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.set_text_color(0, 0, 128)
        self.cell(0, 10, title, 0, 1)
        self.set_text_color(0, 0, 0)
        self.ln(1)
    
    def chapter_body(self, body):
        self.set_font('Arial', '', 11)
        self.multi_cell(0, 8, body)
        self.ln()
    
pdf = PDF()
pdf.add_page()

pdf.set_left_margin(15)
pdf.set_right_margin(15)

# Contact and Summary
pdf.set_font('Arial', 'B', 16)
pdf.cell(0, 10, 'Jaydev Solanki', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.cell(0, 8, 'jaydevsolanki673@gmail.com | 93288 40727 | Ahmedabad, Gujarat', 0, 1)
pdf.ln(4)
pdf.set_font('Arial', 'I', 11)
summary = ("Aspiring Frontend Developer pursuing BCA with practical skills in HTML, CSS, JavaScript, and React.js, "
           "eager to contribute through internships and junior roles.")
pdf.multi_cell(0, 8, summary)
pdf.ln(6)

# Experience
pdf.chapter_title('Experience')
experience_text = ("Frontend Developer Intern\n"
                   "Brands.live, Ahmedabad | April 2025 – Present\n"
                   "- Built web UI with HTML, CSS, JavaScript\n"
                   "- Used React.js & GitHub for version control\n"
                   "- Collaborated with design and backend teams")
pdf.chapter_body(experience_text)

# Education
pdf.chapter_title('Education')
education_text = ("Bachelor of Computer Applications (BCA)\n"
                  "Saurashtra University, Rajkot | Expected 2025\n\n"
                  "Higher Secondary Certificate (HSC)\n"
                  "Shree A.Z. Kaneria High School, Dhoraji | 2022")
pdf.chapter_body(education_text)

# Projects
pdf.chapter_title('Projects')
projects_text = ("- ISHUHI – Responsive Home Page (HTML, CSS, Bootstrap)\n"
                 "- BUSINESS-MAN – Magazine Cover (HTML, CSS, non-responsive)\n"
                 "- GLOBSET – Basic Home Page (HTML, CSS, non-responsive)")
pdf.chapter_body(projects_text)

# Skills
pdf.chapter_title('Skills')
skills_text = ("Technologies: HTML5 | CSS3 | JavaScript (ES6+) | MySQL\n"
               "Frameworks & Libraries: Bootstrap | React.js (Basic)\n"
               "Tools & Platforms: Git & GitHub | VS Code | Google Web Tools\n"
               "Other Skills: Responsive Web Design")
pdf.chapter_body(skills_text)

# Languages
pdf.chapter_title('Languages')
languages_text = "English | Gujarati | Hindi"
pdf.chapter_body(languages_text)

# Social Links
pdf.chapter_title('Social Links')
social_text = ("GitHub: https://github.com/yourusername\n"
               "LinkedIn: https://linkedin.com/in/yourprofile")
pdf.chapter_body(social_text)

file_path = "/mnt/data/Jaydev_Solanki_Resume.pdf"
pdf.output(file_path)

file_path
