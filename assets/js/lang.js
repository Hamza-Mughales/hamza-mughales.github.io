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
        'header.title': 'Software Engineer | FULL-STACK DEVELOPER',
        'header.tagline': 'Transforming ideas into scalable, high-performance web solutions',
        'header.viewWork': 'View My Work',
        'header.contactMe': 'Contact Me',

        // About Section
        'about.subtitle': 'Who Am I ?',
        'about.title': 'About Me',
        'about.p1': 'Experienced Software Engineer with over <strong>5 years of expertise</strong> in designing, developing, and deploying robust applications using <strong>Laravel, Vue.js, and modern web technologies</strong>. Skilled in creating scalable, efficient solutions tailored to business needs with a focus on <strong>performance, security, and user experience</strong>.',
        'about.p2': 'Successfully contributed to projects in diverse fields, including <strong>fintech, education, e-commerce, and enterprise resource planning (ERP)</strong>, delivering high-quality software solutions that drive tangible business results. Passionate about solving complex problems, adopting best practices, and thriving in collaborative environments as a Full-Stack Developer.',
        'about.downloadCV': 'Download CV',

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

        // NOOT Experience
        'exp.noot.title': 'Software Engineer',
        'exp.noot.company': 'NOOT | نوت',
        'exp.noot.period': 'Nov 2024 - Present',
        'exp.noot.location': 'Remote • Saudi Arabia',
        'exp.noot.p1': 'Working as a Software Engineer at <strong>NOOT</strong>, a leading SaaS platform providing comprehensive business management solutions including HR management, financial accounting, POS systems, CRM, and inventory management for businesses across Saudi Arabia and the region.',
        'exp.noot.p2': 'Developing and maintaining core features of the platform using <strong>Laravel</strong> and <strong>Laravel Filament</strong>, building intuitive admin panels and management dashboards that serve thousands of businesses managing their daily operations efficiently.',
        'exp.noot.p3': 'Implementing <strong>RESTful APIs</strong> and backend services for multiple integrated modules including HR systems, financial accounting, inventory tracking, and CRM functionalities, ensuring seamless data flow and system integration across the platform.',
        'exp.noot.p4': 'Contributing to system architecture decisions, optimizing database queries for performance at scale, and implementing security best practices to protect sensitive business and financial data.',
        'exp.noot.p5': 'Collaborating with product managers and cross-functional teams in an agile environment to deliver new features, enhance user experience, and maintain high code quality standards through code reviews and automated testing.',

        // Freelance Experience
        'exp.freelance.title': 'Software Engineer',
        'exp.freelance.company': 'Freelance',
        'exp.freelance.period': 'Aug 2019 - Present',
        'exp.freelance.p1': 'Delivered custom web solutions for clients across various industries, focusing on developing efficient, user-friendly, and scalable applications.',
        'exp.freelance.p2': 'Worked on diverse projects, including e-commerce platforms, management systems, and dynamic reporting tools, leveraging technologies like <strong>Laravel, Vue.js, Bootstrap, Tailwind CSS, JavaScript, jQuery, MySQL</strong>.',
        'exp.freelance.p3': 'Provided end-to-end development services, including requirement analysis, design, development, testing, and deployment.',
        'exp.freelance.p4': 'Specialized in enhancing existing systems, optimizing performance, fixing bugs, and integrating third-party APIs to meet unique business needs.',
        'exp.freelance.p5': 'Built strong client relationships through effective communication, on-time delivery, and delivering high-quality results.',

        // Wings Experience
        'exp.wings.title': 'Software Engineer',
        'exp.wings.company': 'Wings Company',
        'exp.wings.period': 'Dec 2023 - Aug 2024',
        'exp.wings.p1': 'Improved and maintained an existing <strong>School Management System (SMS)</strong> built with Laravel and Vue.js, optimizing code quality, fixing runtime issues, enhancing database queries, and restructuring tables for better performance as the dataset scaled. Developed and refined APIs to support mobile application integration.',
        'exp.wings.p2': 'Contributed to a <strong>Learning Management System (LMS)</strong> project built with Laravel and Tailwind, adding new features to enhance functionality. Successfully integrated CodePay as a payment method, enabling organizations to generate and sell unique codes that users can redeem to purchase courses.',
        'exp.wings.p3': 'Focused on delivering high-performing, scalable solutions while ensuring code maintainability and system efficiency.',

        // KitSys Experience
        'exp.kitsys.title': 'Software Engineer',
        'exp.kitsys.company': 'KitSys Company',
        'exp.kitsys.period': 'Jun 2023 - Nov 2023',
        'exp.kitsys.p1': 'Developed and maintained APIs for a <strong>School Management System (SMS)</strong> using Laravel, handling core functionalities such as managing students, teachers, and subjects. Implemented a microservices architecture where services communicated seamlessly via gRPC.',
        'exp.kitsys.p2': 'Built an <strong>e-commerce project dashboard</strong> using Laravel Filament, enabling efficient management of the platform. Designed and deployed APIs to support integration with a mobile application, ensuring smooth user experiences across devices.',
        'exp.kitsys.p3': 'Focused on delivering scalable, robust, and maintainable backend solutions while collaborating closely with frontend and mobile teams to ensure successful project outcomes.',

        // Smart Life Experience
        'exp.smartlife.title': 'Full-Stack Developer',
        'exp.smartlife.company': 'Smart Life Company',
        'exp.smartlife.period': 'Jul 2022 - May 2023',
        'exp.smartlife.p1': 'Enhanced and maintained an existing ERP system built with the PHP CodeIgniter framework, resolving bugs, optimizing performance, and improving code quality for better maintainability and efficiency.',
        'exp.smartlife.p2': 'Developed a <strong>smart dynamic reporting feature</strong>, empowering customers to generate custom reports tailored to their specific needs, improving data accessibility and decision-making capabilities.',
        'exp.smartlife.p3': 'Designed and implemented a <strong>documentary system</strong> using Laravel, centralizing and organizing company system documents for streamlined access and management.',
        'exp.smartlife.p4': 'Collaborated with stakeholders to identify improvement opportunities, implement new features, and ensure the ERP system met evolving business requirements.',
        'exp.smartlife.p5': 'Focused on delivering high-quality solutions that enhanced system usability and customer satisfaction.',

        // Ysys Experience
        'exp.ysys.title': 'Full-Stack Developer',
        'exp.ysys.company': 'Ysys Company',
        'exp.ysys.period': 'Jun 2021 - May 2022',
        'exp.ysys.p1': 'Designed and developed scalable web applications, with a focus on both server-side logic and client-side components.',
        'exp.ysys.p2': 'Contributed significantly to Floosak, a <strong>finance wallet</strong> built with Laravel, handling various aspects including report generation, problem-solving, feature implementation, and integration with third-party providers to enhance functionality.',
        'exp.ysys.p3': 'Integrated <strong>third-party APIs</strong> and services to expand application capabilities and ensure seamless interoperability.',
        'exp.ysys.p4': 'Managed and maintained various server environments, including hosting solutions, database management systems, and cloud infrastructure (e.g., <strong>Forge</strong>, Namecheap), ensuring optimal performance and reliability.',
        'exp.ysys.p5': 'Collaborated with team members to support development efforts, ensuring smooth integration of code and overall project success.',

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
        'header.title': 'مهندس برمجيات | مطور ويب متكامل',
        'header.tagline': 'تحويل الأفكار إلى حلول ويب قابلة للتطوير وعالية الأداء',
        'header.viewWork': 'شاهد أعمالي',
        'header.contactMe': 'تواصل معي',

        // About Section
        'about.subtitle': 'من أنا؟',
        'about.title': 'نبذة عني',
        'about.p1': 'مهندس برمجيات ذو خبرة تزيد عن <strong>5 سنوات</strong> في تصميم وتطوير ونشر تطبيقات قوية باستخدام <strong>Laravel و Vue.js وتقنيات الويب الحديثة</strong>. ماهر في إنشاء حلول قابلة للتطوير وفعالة مصممة خصيصاً لتلبية احتياجات الأعمال مع التركيز على <strong>الأداء والأمان وتجربة المستخدم</strong>.',
        'about.p2': 'ساهمت بنجاح في مشاريع في مجالات متنوعة، بما في ذلك <strong>التكنولوجيا المالية والتعليم والتجارة الإلكترونية وتخطيط موارد المؤسسات (ERP)</strong>، وتقديم حلول برمجية عالية الجودة تحقق نتائج أعمال ملموسة. شغوف بحل المشكلات المعقدة واعتماد أفضل الممارسات والازدهار في البيئات التعاونية كمطور ويب متكامل.',
        'about.downloadCV': 'تحميل السيرة الذاتية',

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

        // NOOT Experience
        'exp.noot.title': 'مهندس برمجيات',
        'exp.noot.company': 'NOOT | نوت',
        'exp.noot.period': 'نوفمبر 2024 - حتى الآن',
        'exp.noot.location': 'عن بُعد • المملكة العربية السعودية',
        'exp.noot.p1': 'أعمل كمهندس برمجيات في <strong>نوت</strong>، منصة SaaS رائدة توفر حلول إدارة أعمال شاملة بما في ذلك إدارة الموارد البشرية والمحاسبة المالية وأنظمة نقاط البيع وإدارة علاقات العملاء وإدارة المخزون للشركات في جميع أنحاء المملكة العربية السعودية والمنطقة.',
        'exp.noot.p2': 'تطوير وصيانة الميزات الأساسية للمنصة باستخدام <strong>Laravel</strong> و <strong>Laravel Filament</strong>، وبناء لوحات إدارة بديهية ولوحات معلومات إدارية تخدم آلاف الشركات التي تدير عملياتها اليومية بكفاءة.',
        'exp.noot.p3': 'تنفيذ <strong>واجهات برمجة التطبيقات RESTful</strong> وخدمات الواجهة الخلفية لوحدات متكاملة متعددة بما في ذلك أنظمة الموارد البشرية والمحاسبة المالية وتتبع المخزون ووظائف إدارة علاقات العملاء، مما يضمن تدفق البيانات بسلاسة وتكامل النظام عبر المنصة.',
        'exp.noot.p4': 'المساهمة في قرارات بنية النظام، وتحسين استعلامات قاعدة البيانات للأداء على نطاق واسع، وتنفيذ أفضل ممارسات الأمان لحماية بيانات الأعمال والبيانات المالية الحساسة.',
        'exp.noot.p5': 'التعاون مع مديري المنتجات والفرق متعددة الوظائف في بيئة رشيقة لتقديم ميزات جديدة وتحسين تجربة المستخدم والحفاظ على معايير جودة الكود العالية من خلال مراجعات الكود والاختبار الآلي.',

        // Freelance Experience
        'exp.freelance.title': 'مهندس برمجيات',
        'exp.freelance.company': 'عمل حر',
        'exp.freelance.period': 'أغسطس 2019 - حتى الآن',
        'exp.freelance.p1': 'تقديم حلول ويب مخصصة للعملاء في مختلف الصناعات، مع التركيز على تطوير تطبيقات فعالة وسهلة الاستخدام وقابلة للتطوير.',
        'exp.freelance.p2': 'العمل على مشاريع متنوعة، بما في ذلك منصات التجارة الإلكترونية وأنظمة الإدارة وأدوات التقارير الديناميكية، باستخدام تقنيات مثل <strong>Laravel و Vue.js و Bootstrap و Tailwind CSS و JavaScript و jQuery و MySQL</strong>.',
        'exp.freelance.p3': 'تقديم خدمات تطوير شاملة، بما في ذلك تحليل المتطلبات والتصميم والتطوير والاختبار والنشر.',
        'exp.freelance.p4': 'التخصص في تحسين الأنظمة الحالية وتحسين الأداء وإصلاح الأخطاء ودمج واجهات برمجة التطبيقات الخارجية لتلبية احتياجات الأعمال الفريدة.',
        'exp.freelance.p5': 'بناء علاقات قوية مع العملاء من خلال التواصل الفعال والتسليم في الوقت المحدد وتقديم نتائج عالية الجودة.',

        // Wings Experience
        'exp.wings.title': 'مهندس برمجيات',
        'exp.wings.company': 'شركة Wings',
        'exp.wings.period': 'ديسمبر 2023 - أغسطس 2024',
        'exp.wings.p1': 'تحسين وصيانة <strong>نظام إدارة مدرسية (SMS)</strong> قائم تم بناؤه باستخدام Laravel و Vue.js، وتحسين جودة الكود وإصلاح مشكلات وقت التشغيل وتحسين استعلامات قاعدة البيانات وإعادة هيكلة الجداول لتحسين الأداء مع توسع مجموعة البيانات. تطوير وتحسين واجهات برمجة التطبيقات لدعم تكامل تطبيقات الهاتف المحمول.',
        'exp.wings.p2': 'المساهمة في مشروع <strong>نظام إدارة التعلم (LMS)</strong> المبني باستخدام Laravel و Tailwind، وإضافة ميزات جديدة لتحسين الوظائف. تكامل ناجح لـ CodePay كطريقة دفع، مما يمكّن المؤسسات من إنشاء وبيع رموز فريدة يمكن للمستخدمين استبدالها لشراء الدورات.',
        'exp.wings.p3': 'التركيز على تقديم حلول عالية الأداء وقابلة للتطوير مع ضمان قابلية صيانة الكود وكفاءة النظام.',

        // KitSys Experience
        'exp.kitsys.title': 'مهندس برمجيات',
        'exp.kitsys.company': 'شركة KitSys',
        'exp.kitsys.period': 'يونيو 2023 - نوفمبر 2023',
        'exp.kitsys.p1': 'تطوير وصيانة واجهات برمجة التطبيقات لـ <strong>نظام إدارة مدرسية (SMS)</strong> باستخدام Laravel، والتعامل مع الوظائف الأساسية مثل إدارة الطلاب والمعلمين والمواد. تنفيذ بنية خدمات صغيرة حيث تتواصل الخدمات بسلاسة عبر gRPC.',
        'exp.kitsys.p2': 'بناء <strong>لوحة معلومات مشروع التجارة الإلكترونية</strong> باستخدام Laravel Filament، مما يتيح إدارة فعالة للمنصة. تصميم ونشر واجهات برمجة التطبيقات لدعم التكامل مع تطبيق الهاتف المحمول، مما يضمن تجارب مستخدم سلسة عبر الأجهزة.',
        'exp.kitsys.p3': 'التركيز على تقديم حلول خلفية قابلة للتطوير وقوية وقابلة للصيانة مع التعاون الوثيق مع فرق الواجهة الأمامية والهاتف المحمول لضمان نجاح نتائج المشروع.',

        // Smart Life Experience
        'exp.smartlife.title': 'مطور ويب متكامل',
        'exp.smartlife.company': 'شركة Smart Life',
        'exp.smartlife.period': 'يوليو 2022 - مايو 2023',
        'exp.smartlife.p1': 'تحسين وصيانة نظام ERP قائم تم بناؤه باستخدام إطار عمل PHP CodeIgniter، وحل الأخطاء وتحسين الأداء وتحسين جودة الكود لتحسين قابلية الصيانة والكفاءة.',
        'exp.smartlife.p2': 'تطوير <strong>ميزة تقارير ديناميكية ذكية</strong>، تمكين العملاء من إنشاء تقارير مخصصة مصممة خصيصاً لاحتياجاتهم المحددة، وتحسين إمكانية الوصول إلى البيانات وقدرات اتخاذ القرار.',
        'exp.smartlife.p3': 'تصميم وتنفيذ <strong>نظام توثيق</strong> باستخدام Laravel، ومركزية وتنظيم مستندات نظام الشركة لتبسيط الوصول والإدارة.',
        'exp.smartlife.p4': 'التعاون مع أصحاب المصلحة لتحديد فرص التحسين وتنفيذ ميزات جديدة والتأكد من أن نظام ERP يلبي متطلبات الأعمال المتطورة.',
        'exp.smartlife.p5': 'التركيز على تقديم حلول عالية الجودة تعزز قابلية استخدام النظام ورضا العملاء.',

        // Ysys Experience
        'exp.ysys.title': 'مطور ويب متكامل',
        'exp.ysys.company': 'شركة Ysys',
        'exp.ysys.period': 'يونيو 2021 - مايو 2022',
        'exp.ysys.p1': 'تصميم وتطوير تطبيقات ويب قابلة للتطوير، مع التركيز على كل من منطق جانب الخادم ومكونات جانب العميل.',
        'exp.ysys.p2': 'المساهمة بشكل كبير في Floosak، <strong>محفظة مالية</strong> مبنية باستخدام Laravel، والتعامل مع جوانب مختلفة بما في ذلك إنشاء التقارير وحل المشكلات وتنفيذ الميزات والتكامل مع مزودي الطرف الثالث لتحسين الوظائف.',
        'exp.ysys.p3': 'دمج <strong>واجهات برمجة التطبيقات الخارجية</strong> والخدمات لتوسيع قدرات التطبيق وضمان التشغيل البيني السلس.',
        'exp.ysys.p4': 'إدارة وصيانة بيئات الخادم المختلفة، بما في ذلك حلول الاستضافة وأنظمة إدارة قواعد البيانات والبنية التحتية السحابية (مثل <strong>Forge</strong> و Namecheap)، مما يضمن الأداء الأمثل والموثوقية.',
        'exp.ysys.p5': 'التعاون مع أعضاء الفريق لدعم جهود التطوير، وضمان التكامل السلس للكود ونجاح المشروع بشكل عام.',

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
