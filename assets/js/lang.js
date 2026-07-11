// Language Translation System
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.education': 'Education',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        // Header
        'header.greeting': "Hello, I'm",
        'header.name': 'Hamza Mughales',
        'header.title': 'Senior PHP/Laravel Software Engineer',
        'header.subtitle': 'Backend-Focused Full-Stack Developer | Laravel & Vue.js',
        'header.tagline': 'Transforming ideas into scalable, high-performance web solutions',
        'header.viewWork': 'View My Work',
        'header.contactMe': 'Contact Me',

        // About Section
        'about.subtitle': 'Who Am I ?',
        'about.title': 'About Me',
        'about.p1': 'Senior Software Engineer with <strong>6+ years of experience</strong> building scalable web applications using <strong>Laravel, PHP, and Vue.js</strong>. Experienced in designing enterprise systems, RESTful APIs, and modern business platforms.',
        'about.p2': 'Worked across <strong>fintech, ERP, education, HR, accounting, and project management</strong> domains. Passionate about clean architecture, maintainable code, performance optimization, and delivering reliable production-ready software.',
        'about.downloadCV': 'Download CV',
        'about.stats.experience': 'Years Experience',
        'about.stats.projects': 'Projects Completed',
        'about.highlights.fullstack': 'Full-Stack Development',
        'about.highlights.modern': 'Modern Web Technologies',
        'about.highlights.scalable': 'Scalable Solutions',

        // Skills Section
        'skills.subtitle': 'My Expertise',
        'skills.title': 'Technical Skills',
        'skills.backend': 'Backend Development',
        'skills.frontend': 'Frontend Development',
        'skills.database': 'Database & Tools',


        // Portfolio Section
        'portfolio.subtitle': 'What I Did ?',
        'portfolio.title': 'Portfolio',
        'portfolio.school.title': 'School management system',
        'portfolio.school.desc': 'School management system. built with Laravel and Vuejs',
        'portfolio.lms1.title': 'Learning management system',
        'portfolio.lms1.desc': 'An online platform for managing and delivering educational content and courses.',
        'portfolio.lms2.title': 'Learning Management System',
        'portfolio.lms2.desc': 'An online platform for managing and delivering educational content and courses.',
        'portfolio.amat.title': 'Amat-Rozy',
        'portfolio.amat.desc': 'Amat Rozy is a portfolio for an artist, made with bootstrap, jQuery and PHP Codeigniter.',
        'portfolio.statistical.title': 'Statistical System',
        'portfolio.statistical.desc': 'A statistical system built for Yemen Telecom corporation.',
        'portfolio.erp.title': 'ERP Software',
        'portfolio.erp.desc': 'A software system that helps organizations manage and integrate key parts of their business operations.',
        'portfolio.documentary.title': 'Documentary System',
        'portfolio.documentary.desc': 'A software system for documenting other software systems.',
        'portfolio.ecommerce.title': 'E-commerce',
        'portfolio.ecommerce.desc': 'A software for buying and selling services over the internet.',
        'portfolio.idcards.title': 'ID Cards',
        'portfolio.idcards.desc': 'A software to manage employees\' cards.',

        // CTA Section
        'cta.badge': 'Available for Projects',
        'cta.title': "Let's Build Something Amazing Together",
        'cta.description': "I'm currently available for freelance projects and full-time opportunities. Whether you need a complete web application or want to enhance your existing system, I can help bring your vision to life.",
        'cta.benefit1': '5+ Years Experience',
        'cta.benefit2': 'Fast Response Time (< 24h)',
        'cta.benefit3': 'Quality Guaranteed',
        'cta.button1': 'Get in Touch',
        'cta.button2': 'WhatsApp Me',
        'cta.note': 'Typical response time: Within 24 hours',
        'cta.stat1': 'Projects Completed',
        'cta.stat2': 'Years Experience',
        'cta.stat3': 'Client Satisfaction',

        // Experience Section
        'experience.subtitle': 'Where Have I Worked?',
        'experience.title': 'Professional Experience',

        // Elevenz Experience
        'exp.elevenz.title': 'Software Engineer',
        'exp.elevenz.company': 'Elevenz Company',
        'exp.elevenz.period': 'Feb 2026 - Present',
        'exp.elevenz.p1': 'Developing and maintaining enterprise web applications using <strong>Laravel</strong> and <strong>Vue.js</strong>.',
        'exp.elevenz.p2': 'Building and enhancing a <strong>Design & Finishing Project Management Platform</strong>, enabling project planning, task tracking, budgeting, document management, and collaboration between stakeholders.',
        'exp.elevenz.p3': 'Designing scalable backend services and RESTful APIs while improving application performance and maintainability.',

        // NOOT Experience
        'exp.noot.title': 'Software Engineer',
        'exp.noot.company': 'NOOT | نوت',
        'exp.noot.period': 'Nov 2024 - Jan 2026',
        'exp.noot.location': 'Remote • Saudi Arabia',
        'exp.noot.p1': 'Developed and maintained core features for a <strong>multi-tenant SaaS ERP platform</strong> serving businesses across Saudi Arabia.',
        'exp.noot.p2': 'Built scalable backend systems, business workflows, and admin dashboards using <strong>Laravel</strong> and <strong>Laravel Filament</strong>. Designed and maintained secure RESTful APIs for HR, accounting, CRM, inventory, and POS modules.',
        'exp.noot.p3': 'Improved application performance through database optimization, queue management, caching, and clean architecture practices while collaborating in an Agile environment.',

        // Wings Experience
        'exp.wings.title': 'Software Engineer',
        'exp.wings.company': 'Wings Company',
        'exp.wings.period': 'Dec 2023 - Aug 2024',
        'exp.wings.p1': 'Improved and maintained an existing <strong>School Management System (SMS)</strong> built with Laravel and Vue.js, optimizing code quality, fixing runtime issues, enhancing database queries, and restructuring tables for better performance as the dataset scaled. Developed and refined APIs to support mobile application integration.',
        'exp.wings.p2': 'Contributed to a <strong>Learning Management System (LMS)</strong> built with Laravel and Tailwind, adding new features and integrating <strong>CodePay</strong> as a payment method, enabling organizations to generate and sell unique codes that users can redeem to purchase courses.',

        // Smart Life Experience
        'exp.smartlife.title': 'Full Stack Developer',
        'exp.smartlife.company': 'Smart Life Company',
        'exp.smartlife.period': 'Jul 2022 - May 2023',
        'exp.smartlife.p1': 'Enhanced and maintained an existing ERP system built with the PHP CodeIgniter framework, resolving bugs, optimizing performance, and improving code quality for better maintainability and efficiency.',
        'exp.smartlife.p2': 'Developed a <strong>smart dynamic reporting feature</strong>, empowering customers to generate custom reports tailored to their specific needs. Designed and implemented a <strong>documentary system</strong> using Laravel, centralizing and organizing company system documents.',
        'exp.smartlife.p3': 'Built an <strong>e-commerce project dashboard</strong> using Laravel Filament, enabling efficient management of the platform. Designed and deployed APIs to support integration with a mobile application.',

        // Ysys Experience
        'exp.ysys.title': 'Full-Stack Developer',
        'exp.ysys.company': 'Ysys Company',
        'exp.ysys.period': 'Jun 2021 - May 2022',
        'exp.ysys.p1': 'Designed and developed scalable web applications, with a focus on both server-side logic and client-side components.',
        'exp.ysys.p2': 'Contributed significantly to Floosak, a <strong>finance wallet</strong> built with Laravel, handling report generation, problem-solving, feature implementation, and integration with third-party providers to enhance functionality.',
        'exp.ysys.p3': 'Integrated <strong>third-party APIs</strong> and services to expand application capabilities. Managed server environments including hosting solutions, database management, and cloud infrastructure (<strong>Forge</strong>, Namecheap).',

        // Education Section
        'education.subtitle': 'Academic Background',
        'education.title': 'Education',
        'education.period': '2015 - 2019',
        'education.degree': 'Bachelor of Science',
        'education.major': 'Information Technology',
        'education.university': 'Sana\'a University, Yemen',

        // Contact Section
        'contact.subtitle': 'Let\'s Connect',
        'contact.title': 'Get In Touch',
        'contact.description': 'Have a project in mind? Let\'s discuss how I can help you achieve your goals.',


        'contact.email': 'Email',
        'contact.responseTime': 'Response time: < 24 hours',
        'contact.phone': 'Phone / WhatsApp',
        'contact.whatsapp': 'Message on WhatsApp',
        'contact.location': 'Location',
        'contact.locationValue': 'Yemen (Remote Work Available)',
        'contact.social': 'Connect on Social Media',
        'contact.available': 'Available for new projects',

        // Footer
        'footer.rights': 'Hamza Mughales'
    },
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.about': 'نبذة عني',
        'nav.portfolio': 'أعمالي',
        'nav.education': 'التعليم',
        'nav.experience': 'الخبرات',
        'nav.contact': 'تواصل معي',

        // Header
        'header.greeting': 'مرحباً، أنا',
        'header.name': 'حمزة المغلس',
        'header.title': 'مهندس برمجيات أول PHP/Laravel',
        'header.subtitle': 'مطور ويب متكامل مع تركيز على الواجهة الخلفية | Laravel & Vue.js',
        'header.tagline': 'تحويل الأفكار إلى حلول ويب قابلة للتطوير وعالية الأداء',
        'header.viewWork': 'شاهد أعمالي',
        'header.contactMe': 'تواصل معي',

        // About Section
        'about.subtitle': 'من أنا؟',

        'about.p1': 'مهندس برمجيات أول بخبرة تزيد عن <strong>6 سنوات</strong> في بناء تطبيقات ويب قابلة للتوسع باستخدام <strong>Laravel وPHP وVue.js</strong>. خبرة في تصميم الأنظمة المؤسسية وواجهات RESTful API والمنصات التجارية الحديثة.',
        'about.p2': 'عملت في مجالات <strong>التكنولوجيا المالية وERP والتعليم والموارد البشرية والمحاسبة وإدارة المشاريع</strong>. شغوف بالهندسة النظيفة والكود القابل للصيانة وتحسين الأداء وتقديم برمجيات جاهزة للإنتاج.',
        'about.downloadCV': 'تحميل السيرة الذاتية',
        'about.stats.experience': 'سنوات خبرة',
        'about.stats.projects': 'مشروع مكتمل',
        'about.highlights.fullstack': 'تطوير ويب متكامل',
        'about.highlights.modern': 'تقنيات ويب حديثة',
        'about.highlights.scalable': 'حلول قابلة للتطوير',

        // Skills Section
        'skills.subtitle': 'خبراتي',
        'skills.title': 'المهارات التقنية',
        'skills.backend': 'تطوير الواجهة الخلفية',
        'skills.frontend': 'تطوير الواجهة الأمامية',
        'skills.database': 'قواعد البيانات والأدوات',


        // Portfolio Section
        'portfolio.subtitle': 'ماذا أنجزت؟',
        'portfolio.title': 'معرض الأعمال',
        'portfolio.school.title': 'نظام إدارة مدرسية',
        'portfolio.school.desc': 'نظام إدارة مدرسية مبني باستخدام Laravel و Vuejs',
        'portfolio.lms1.title': 'نظام إدارة التعلم',
        'portfolio.lms1.desc': 'منصة إلكترونية لإدارة وتقديم المحتوى التعليمي والدورات.',
        'portfolio.lms2.title': 'نظام إدارة التعلم',
        'portfolio.lms2.desc': 'منصة إلكترونية لإدارة وتقديم المحتوى التعليمي والدورات.',
        'portfolio.amat.title': 'أمات روزي',
        'portfolio.amat.desc': 'أمات روزي هو معرض أعمال لفنان، تم إنشاؤه باستخدام Bootstrap و jQuery و PHP Codeigniter.',
        'portfolio.statistical.title': 'نظام إحصائي',
        'portfolio.statistical.desc': 'نظام إحصائي تم بناؤه لشركة يمن تليكوم.',
        'portfolio.erp.title': 'نظام تخطيط موارد المؤسسات',
        'portfolio.erp.desc': 'نظام برمجي يساعد المؤسسات على إدارة ودمج الأجزاء الرئيسية من عملياتها التجارية.',
        'portfolio.documentary.title': 'نظام التوثيق',
        'portfolio.documentary.desc': 'نظام برمجي لتوثيق الأنظمة البرمجية الأخرى.',
        'portfolio.ecommerce.title': 'التجارة الإلكترونية',
        'portfolio.ecommerce.desc': 'برنامج لشراء وبيع الخدمات عبر الإنترنت.',
        'portfolio.idcards.title': 'بطاقات الهوية',
        'portfolio.idcards.desc': 'برنامج لإدارة بطاقات الموظفين.',

        // CTA Section
        'cta.badge': 'متاح للمشاريع',
        'cta.title': 'لنبني شيئاً مذهلاً معاً',
        'cta.description': 'أنا متاح حالياً لمشاريع العمل الحر والفرص بدوام كامل. سواء كنت بحاجة إلى تطبيق ويب كامل أو ترغب في تحسين نظامك الحالي، يمكنني المساعدة في تحويل رؤيتك إلى واقع.',
        'cta.benefit1': 'خبرة أكثر من 5 سنوات',
        'cta.benefit2': 'وقت استجابة سريع (أقل من 24 ساعة)',
        'cta.benefit3': 'جودة مضمونة',
        'cta.button1': 'تواصل معي',
        'cta.button2': 'راسلني على واتساب',
        'cta.note': 'وقت الاستجابة المعتاد: خلال 24 ساعة',
        'cta.stat1': 'مشروع مكتمل',
        'cta.stat2': 'سنوات خبرة',
        'cta.stat3': 'رضا العملاء',

        // Experience Section
        'experience.subtitle': 'أين عملت؟',
        'experience.title': 'الخبرات المهنية',

        // Elevenz Experience
        'exp.elevenz.title': 'مهندس برمجيات',
        'exp.elevenz.company': 'شركة Elevenz',
        'exp.elevenz.period': 'فبراير 2026 - حتى الآن',
        'exp.elevenz.p1': 'تطوير وصيانة تطبيقات ويب مؤسسية باستخدام <strong>Laravel</strong> و <strong>Vue.js</strong>.',
        'exp.elevenz.p2': 'بناء وتطوير <strong>منصة إدارة مشاريع التصميم والتشطيبات</strong>، تمكّن من تخطيط المشاريع وتتبع المهام وإدارة الميزانيات والمستندات والتعاون بين أصحاب المصلحة.',
        'exp.elevenz.p3': 'تصميم خدمات خلفية قابلة للتوسع وواجهات RESTful API مع تحسين أداء التطبيق وقابلية صيانته.',

        // NOOT Experience
        'exp.noot.title': 'مهندس برمجيات',
        'exp.noot.company': 'NOOT | نوت',
        'exp.noot.period': 'نوفمبر 2024 - يناير 2026',
        'exp.noot.location': 'عن بُعد • المملكة العربية السعودية',
        'exp.noot.p1': 'تطوير وصيانة الميزات الأساسية لمنصة <strong>SaaS ERP متعددة المستأجرين</strong> تخدم الشركات في جميع أنحاء المملكة العربية السعودية.',
        'exp.noot.p2': 'بناء أنظمة خلفية قابلة للتوسع وسير عمل الأعمال ولوحات إدارة باستخدام <strong>Laravel</strong> و <strong>Laravel Filament</strong>. تصميم وصيانة واجهات RESTful API آمنة لوحدات الموارد البشرية والمحاسبة وCRM والمخزون ونقاط البيع.',
        'exp.noot.p3': 'تحسين أداء التطبيق من خلال تحسين قاعدة البيانات وإدارة الطوابير والتخزين المؤقت وممارسات الهندسة النظيفة مع التعاون في بيئة Agile.',

        // Wings Experience
        'exp.wings.title': 'مهندس برمجيات',
        'exp.wings.company': 'شركة Wings',
        'exp.wings.period': 'ديسمبر 2023 - أغسطس 2024',
        'exp.wings.p1': 'تحسين وصيانة <strong>نظام إدارة مدرسية (SMS)</strong> قائم تم بناؤه باستخدام Laravel و Vue.js، وتحسين جودة الكود وإصلاح مشكلات وقت التشغيل وتحسين استعلامات قاعدة البيانات وإعادة هيكلة الجداول لتحسين الأداء. تطوير وتحسين واجهات برمجة التطبيقات لدعم تكامل تطبيقات الهاتف المحمول.',
        'exp.wings.p2': 'المساهمة في <strong>نظام إدارة التعلم (LMS)</strong> المبني باستخدام Laravel و Tailwind، وإضافة ميزات جديدة وتكامل <strong>CodePay</strong> كطريقة دفع، مما يمكّن المؤسسات من إنشاء وبيع رموز فريدة لشراء الدورات.',

        // Smart Life Experience
        'exp.smartlife.title': 'مطور ويب متكامل',
        'exp.smartlife.company': 'شركة Smart Life',
        'exp.smartlife.period': 'يوليو 2022 - مايو 2023',
        'exp.smartlife.p1': 'تحسين وصيانة نظام ERP قائم تم بناؤه باستخدام إطار عمل PHP CodeIgniter، وحل الأخطاء وتحسين الأداء وتحسين جودة الكود لتحسين قابلية الصيانة والكفاءة.',
        'exp.smartlife.p2': 'تطوير <strong>ميزة تقارير ديناميكية ذكية</strong> تمكّن العملاء من إنشاء تقارير مخصصة. تصميم وتنفيذ <strong>نظام توثيق</strong> باستخدام Laravel لمركزية وتنظيم مستندات النظام.',
        'exp.smartlife.p3': 'بناء <strong>لوحة معلومات مشروع التجارة الإلكترونية</strong> باستخدام Laravel Filament. تصميم ونشر واجهات برمجة التطبيقات لدعم التكامل مع تطبيق الهاتف المحمول.',

        // Ysys Experience
        'exp.ysys.title': 'مطور ويب متكامل',
        'exp.ysys.company': 'شركة Ysys',
        'exp.ysys.period': 'يونيو 2021 - مايو 2022',
        'exp.ysys.p1': 'تصميم وتطوير تطبيقات ويب قابلة للتوسع، مع التركيز على كل من منطق جانب الخادم ومكونات جانب العميل.',
        'exp.ysys.p2': 'المساهمة بشكل كبير في Floosak، <strong>محفظة مالية</strong> مبنية باستخدام Laravel، في إنشاء التقارير وحل المشكلات وتنفيذ الميزات والتكامل مع مزودي الطرف الثالث.',
        'exp.ysys.p3': 'دمج <strong>واجهات برمجة التطبيقات الخارجية</strong> والخدمات لتوسيع قدرات التطبيق. إدارة بيئات الخادم بما في ذلك الاستضافة وقواعد البيانات والبنية التحتية السحابية (<strong>Forge</strong> و Namecheap).',

        // Education Section
        'education.subtitle': 'الخلفية الأكاديمية',
        'education.title': 'التعليم',
        'education.period': '2015 - 2019',
        'education.degree': 'بكالوريوس علوم',
        'education.major': 'تقنية المعلومات',
        'education.university': 'جامعة صنعاء، اليمن',

        // Contact Section
        'contact.subtitle': 'لنتواصل',
        'contact.title': 'تواصل معي',
        'contact.description': 'هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكنني مساعدتك في تحقيق أهدافك.',


        'contact.email': 'البريد الإلكتروني',
        'contact.responseTime': 'وقت الاستجابة: أقل من 24 ساعة',
        'contact.phone': 'الهاتف / واتساب',
        'contact.whatsapp': 'راسلني على واتساب',
        'contact.location': 'الموقع',
        'contact.locationValue': 'اليمن (العمل عن بُعد متاح)',
        'contact.social': 'تواصل عبر وسائل التواصل الاجتماعي',
        'contact.available': 'متاح لمشاريع جديدة',

        // Footer
        'footer.rights': 'حمزة المغلس'
    }
};

// Current language
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
    
    // Add click event to language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

// Toggle between languages
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(currentLang);
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Add/remove RTL class
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Update language toggle button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.innerHTML = `<i class="ti-world"></i> ${lang === 'en' ? 'العربية' : 'English'}`;
    }
    
    // Add transition effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}
