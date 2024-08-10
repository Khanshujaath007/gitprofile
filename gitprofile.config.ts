// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Khanshujaath007', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitportfolio',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Khanshujaath007/expense-tracker','Khanshujaath007/tesseract_bot','Khanshujaath007/thinsil-ecommerce', 'Khanshujaath007/YelpCamp'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Yelpcamp',
        //   description:
        //     '',
        //   imageUrl:
        //     '',
        //   link: 'https://github.com/Khanshujaath007/YelpCamp',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: '',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shujaathullakhan',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'khanshujaath007@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/14-0VRiBRfu7XKr-PoXzJ-TWate6f8rFU/view?usp=drivesdk', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'MongoDB',
  ],
  experiences: [
    {
      company: 'Directi Group (Titan Email)',
      position: 'Engineering Intern',
      from: 'february 2024',
      to: 'Present',
      companyLink: 'https://www.directi.com/',
    },
    {
      company: 'Neodove Technologies Pvt Ltd',
      position: 'Full-Stack Developer',
      from: 'November 2023',
      to: 'January 2024',
      companyLink: 'https://www.linkedin.com/company/neodove/posts/?feedView=all',
    },
  ],
  certifications: [
    {
      name: 'Artificail Intelligence Foundations: Machine Learning',
      body: '',
      year: 'Dec 2022',
      link: 'https://www.linkedin.com/learning/certificates/d204a154951e8fea41ef0660fd48de36e917622081d760134bbb41a0d7d53a19?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8A%2FcBRV8RFuPcgeK5DQH%2FA%3D%3D',
    },
    {
      name: 'Ubuntu Linux',
      body: '',
      year: 'Jan 2022',
      link: 'https://ude.my/UC-9bbe0b16-8052-4278-ae69-08233d15fed8',
    },
    {
      name: 'Object Oriented Programming in c++',
      body: '',
      year: 'Sep 2022',
      link: 'https://www.udemy.com/certificate/UC-2754a4e1-c113-4fee-b3b5-f58773c52dc7/',
    },
    {
      name: 'Mastering c++ Programming - Beginner to Advance',
      body: '',
      year: 'Mar 2022',
      link: 'https://ude.my/UC-a4f6b11f-045e-411e-a46c-7fbb480732dc',
    },
    {
      name: 'Java Programming: Solving Problems with Software',
      body: '',
      year: 'Feb 2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/N4JMDWHFB5TN',
    },
    {
      name: 'Career Essentials in Software Development by Microsoft and LinkedIn',
      body: '',
      year: 'Dec 2022',
      link: 'https://www.linkedin.com/learning/certificates/4831bac71d767a100195d11e834f429d7625158ffb3b30d5705d6a8a819fe416?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8A%2FcBRV8RFuPcgeK5DQH%2FA%3D%3D',
    },
  ],
  educations: [
    {
      institution: 'Dr. Ambedkar Institute of Technology',
      degree: 'Bachelor of engineering',
      from: 'Aug 2020',
      to: 'July 2024',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
