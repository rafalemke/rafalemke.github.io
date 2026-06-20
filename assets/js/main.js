// ===== Dynamic year in footer =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Internationalization (PT default from HTML, EN from dictionary) =====
// The HTML is authored in PT and used as the source of truth for Portuguese.
// We capture it on load and only need to provide the English translations.
const i18nNodes = document.querySelectorAll('[data-i18n]');
const i18nPt = {};
i18nNodes.forEach(node => {
    i18nPt[node.getAttribute('data-i18n')] = node.innerHTML;
});

const i18nEn = {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    // Hero
    'hero.role': 'Data Analyst &middot; Analytics Engineer',
    'hero.subtitle': 'From data ingestion to insight delivery — I turn raw data into strategic decisions with Python, Power BI, SQL and Cloud.',
    'hero.cta_projects': '<i class="fas fa-folder-open"></i> View Projects',
    'hero.cta_cv': '<i class="fas fa-download"></i> Download CV',
    // About
    'about.title': 'About Me',
    'stack.title': 'Stack &amp; Tools',
    'about.stat_years': 'Years in Data',
    'about.stat_projects': 'Projects Delivered',
    'about.stat_certs': 'Certifications',
    'about.stat_english': 'Advanced English',
    'about.heading': 'Turning Data into Strategic Decisions',
    'about.p1': 'With 3+ years of experience, my focus is translating raw data into business intelligence that drives strategic decision-making. I work end-to-end — from extraction and modeling (ETL) to interactive dashboards and automated reporting.',
    'about.p2': 'I have experience automating processes, saving time and reducing operational errors, always with a focus on governance, data quality and the <strong>Single Source of Truth</strong> principle.',
    'about.p3': 'I am passionate about solving complex problems and believe every dataset hides an opportunity — from classic Business Intelligence to data engineering and AI/IoT integrations.',
    'about.specialties_label': 'Specialties:',
    'about.specialties': 'Exploratory Analysis, Machine Learning, Data Visualization, ETL, Business Intelligence and Process Automation.',
    // Skills
    'skills.title': 'Technical Skills',
    'skills.cat_collect': 'Data Collection & Extraction',
    'skills.collect_1': 'Relational databases: SQL (Oracle PL/SQL, MySQL, PostgreSQL) — Joins, Subqueries, CTEs',
    'skills.collect_2': 'Web Scraping: Python with BeautifulSoup, Selenium and Playwright',
    'skills.collect_3': 'APIs: consuming REST APIs for data integration',
    'skills.cat_etl': 'Processing & Modeling (ETL)',
    'skills.etl_1': 'ETL tools: Pentaho Data Integration (PDI)',
    'skills.etl_2': 'Scripting: Python (Pandas, NumPy) for large-scale cleaning and transformation',
    'skills.etl_3': 'Orchestration: Apache Airflow for scheduling and monitoring pipelines',
    'skills.cat_ml': 'Analysis & Machine Learning',
    'skills.ml_1': 'Exploratory Analysis: Pandas, NumPy and Jupyter Notebooks',
    'skills.ml_2': 'Statistical analysis to validate hypotheses and results',
    'skills.ml_3': 'Predictive Modeling: Scikit-learn, TensorFlow and PyTorch',
    'skills.cat_bi': 'Visualization & Business Intelligence',
    'skills.bi_1': 'Power BI (DAX and Power Query/M) and Qlik Sense — KPIs and management reports',
    'skills.bi_2': 'Data Storytelling: Looker, Seaborn and Matplotlib',
    'skills.bi_3': 'Streamlit apps built directly in Python',
    'skills.cat_cloud': 'Cloud, Infra & Backend',
    'skills.cloud_1': 'Google Cloud Platform (GCP) and BigQuery',
    'skills.cloud_2': 'Docker for application containerization',
    'skills.cloud_3': 'APIs and back-end with Django, FastAPI and Flet',
    'skills.cat_ai': 'AI, IoT & Others',
    'skills.ai_1': 'LLM integrations (Llama 3) and WhatsApp chatbots',
    'skills.ai_2': 'IoT with ESP32 and Raspberry Pi, sensor ingestion via API',
    'skills.ai_3': 'Git, GitHub, agile methodologies (Scrum) and Figma',
    // Projects
    'projects.title': 'Featured Projects',
    'projects.bi_title': 'Analytics Dashboard — Power BI',
    'projects.bi_obj': '<strong>Goal:</strong> consolidate operational data into an executive KPI dashboard to support strategic decisions.',
    'projects.bi_act': '<strong>Action:</strong> dimensional modeling, DAX measures and Power Query (M) transformations, with standardized metrics (single source of truth).',
    'projects.btn_dash': 'View Dashboard',
    'projects.iot_title': 'End-to-End IoT Data Pipeline',
    'projects.iot_obj': '<strong>Goal:</strong> build a complete IoT data pipeline, securely integrating hardware (ESP32), a remote server (Raspberry Pi) and a web dashboard.',
    'projects.iot_act': '<strong>Action:</strong> ESP32 sensors send readings via FastAPI to the Raspberry Pi, which stores them in MySQL and serves a Streamlit dashboard published through a Cloudflare tunnel.',
    'projects.btn_code': 'Code',
    'projects.btn_app': 'View App',
    'projects.bot_title': 'Data Chatbot (WhatsApp + Llama 3)',
    'projects.bot_obj': '<strong>Goal:</strong> enable natural-language queries to business data directly through WhatsApp.',
    'projects.bot_act': '<strong>Action:</strong> integrated Evolution API/WAHA with an LLM (Llama 3) and a FastAPI backend, turning questions into queries and returning automated answers.',
    'projects.btn_soon': 'Coming Soon',
    'projects.ocr_title': 'Data Extraction Automation (Freelance)',
    'projects.ocr_obj': '<strong>Goal:</strong> extract, clean and unify attendance and voting data provided as PDFs.',
    'projects.ocr_act': '<strong>Action:</strong> Python pipeline with OCR (Tesseract), Regex and Fuzzy Join to extract, fix inconsistencies and merge tables, exporting the result to XLSX.',
    'projects.bike_title': 'Case Study — Google Data Analytics',
    'projects.bike_obj': '<strong>Goal:</strong> identify usage patterns of a bike-share company to convert casual riders into annual members.',
    'projects.bike_act': '<strong>Action:</strong> processed and analyzed over 1.2 million records with SQL and R, leading to strategic recommendations for the marketing team.',
    // Experience
    'exp.title': 'Professional Experience',
    'exp.cehab_date': 'Oct/2025 – Present',
    'exp.cehab_role': 'Data Analyst',
    'exp.cehab_1': 'Development and maintenance of interactive Power BI dashboards for strategic decisions.',
    'exp.cehab_2': 'Data modeling with DAX and M, with standardized metrics and single source of truth.',
    'exp.cehab_3': 'Python scripts for web scraping and automation, containerized with Docker and run on GCP.',
    'exp.bea_date': 'Sep/2025 – Oct/2025',
    'exp.bea_role': 'BI Analyst',
    'exp.bea_1': 'Power BI dashboards integrated with Google BigQuery for product and marketing teams.',
    'exp.bea_2': 'SQL queries for data analysis in a cloud environment.',
    'exp.uni_date': 'Jun/2024 – Jun/2025',
    'exp.uni_role': 'IT Intern',
    'exp.uni_1': 'ETL pipelines with Pentaho (PDI) integrating multiple data sources.',
    'exp.uni_2': 'SQL queries in Oracle PL/SQL for management reports.',
    'exp.uni_3': 'Web scraping with Python (Selenium, BeautifulSoup) and visualization in Qlik Sense.',
    'exp.free_date': '2024 – Present',
    'exp.free_role': 'Freelance Developer',
    'exp.free_company': 'Independent Projects · Remote',
    'exp.free_1': 'Automated text extraction from PDFs with OCR (Tesseract), reducing manual processing.',
    'exp.free_2': 'Interactive Streamlit dashboards and on-demand IoT/AI solutions.',
    // Education
    'edu.title': 'Education',
    'edu.mba_degree': 'MBA in Business Intelligence & Analytics 360',
    'edu.mba_date': 'Aug/2025 – Present',
    'edu.cst_degree': 'Associate Degree in Systems Analysis & Development',
    'edu.cst_date': 'Feb/2023 – Jun/2025',
    'edu.aero_degree': "Bachelor's in Aeronautical Sciences",
    // Certificates
    'cert.title': 'Certifications',
    'cert.done': 'Completed',
    'cert.view': 'View Certificate',
    'cert.ds': 'Data Scientist',
    'cert.progress': 'In Progress',
    'cert.in_progress': 'In Progress',
    // Contact
    'contact.title': 'Get in Touch',
    'contact.lead': 'Ready to turn your data into valuable insights? Let\'s talk about how I can help your company make smarter decisions.',
    // Footer
    'footer.rights': 'All rights reserved.'
};

function setLang(lang) {
    const dict = lang === 'en' ? i18nEn : i18nPt;
    i18nNodes.forEach(node => {
        const key = node.getAttribute('data-i18n');
        const value = dict[key] !== undefined ? dict[key] : i18nPt[key];
        if (value !== undefined) node.innerHTML = value;
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';
    // Swap the CV download to the matching language version
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = lang === 'en'
            ? 'assets/cv/Rafael_Lemke_CV_EN.pdf'
            : 'assets/cv/Rafael_Lemke_CV.pdf';
    }
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('lang', lang);
}

// Wire up language buttons
document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
});

// Initial language: saved preference, else browser, else PT
const savedLang = localStorage.getItem('lang');
const initialLang = savedLang || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'pt');
setLang(initialLang);

// ===== Smooth scrolling for navigation links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// ===== Navbar style on scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile menu toggle =====
const mobileBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');
mobileBtn.addEventListener('click', () => navMenu.classList.toggle('active'));

// ===== Fade-in on scroll =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== Animate counters when About is visible =====
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const raw = counter.textContent.trim();
        // Only animate purely numeric values (e.g. "3+", "15+", "4"); skip "C1" etc.
        if (!/^\d+\+?%?$/.test(raw)) return;
        const target = parseInt(raw, 10);
        const suffix = raw.includes('+') ? '+' : (raw.includes('%') ? '%' : '');
        const increment = Math.max(1, target / 40);
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 35);
    });
}

const aboutSection = document.querySelector('#about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });
    aboutObserver.observe(aboutSection);
}
