const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const languageToggle = document.querySelector('.language-toggle');

const translations = {
  zh: {
    navAbout: '关于我', navExperience: '实习经历', navProjects: '项目经历', navSkills: '专业技能', navContact: '联系我',
    heroStatus: '墨尔本 · 2026年11月起可入职', heroTitle1: '你只管努力，', heroTitle2: '剩下的交给时间。',
    heroIntro: '我是王炳迪（Bindi），现就读于墨尔本大学应用计量经济学硕士，致力于将金融与经济数据转化为清晰、可用于决策的洞察。',
    downloadResume: '下载英文简历', emailMe: '发送邮件', basedIn: '所在地', focus: '求职方向', focusValue: '金融 · 数据 · 研究',
    aboutLabel: '01 / 关于我', aboutTitle: '让分析连接商业决策。',
    aboutP1: '我具备计量经济学、金融和经济学的学术背景，并在股票研究、公司估值、市场跟踪及银行运营中积累了实践经验。',
    aboutP2: '在证券与银行实习期间，我处理过公司财务数据、全球市场指标和客户资料，将原始信息整理为结构化研究与可执行的分析结论。',
    experienceLabel: '02 / 实习经历', experienceTitle: '在真实市场中学习。', experienceIntro: '在三家金融机构积累研究、估值与客户服务经验。',
    shanxiRole: '行业研究实习生 · 通信组', shanxi1: '整理上市公司财务及行业数据，为行业研究与公司基本面分析提供支持。',
    shanxi2: '运用市盈率和市净率开展可比公司估值，评估行业估值水平及公司相对价值。', shanxi3: '跟踪通信行业趋势与市场动态，并将关键信息整理为投资简报。',
    galaxyRole: '研究助理实习生', galaxy1: '使用 Wind 和 Excel 跟踪六个主要全球股指，编制每周市场更新。',
    galaxy2: '研究宏观政策及人工智能、半导体等 A 股主题，为公开发布的行业评论提供内容支持。', galaxy3: '通过数据提取、图表制作和数据库维护，协助完成国网英大深度研究报告。',
    icbcRole: '银行业务实习生', icbc1: '在合规要求下为50余名客户提供咨询及日常业务支持。',
    icbc2: '协助处理30余笔个人及小微企业贷款申请，并开展初步信用审核。', icbc3: '参与客户沟通与产品推广，支持约人民币800万元的理财产品销售。',
    projectsLabel: '03 / 代表项目', projectsTitle: '从模型走向决策。', projectsIntro: '涵盖估值、战略分析与团队领导的实践项目。',
    jpmType: 'J.P. Morgan · Forage 职业模拟', jpmTitle: '并购标的筛选与 DCF 估值',
    jpmDescription: '通过 Forage 完成 J.P. Morgan 投资银行职业模拟，筛选潜在并购标的、构建含敏感性分析的 DCF 模型，并针对供应链中断和竞争性报价调整关键假设。',
    startupType: '创业项目', startupDescription: '带领团队完成商业模式、市场定位、营销策略和财务规划，项目获得创新类奖项。',
    educationLabel: '04 / 教育背景', educationTitle: '扎实的量化基础。', inProgress: '在读', completed: '已完成',
    skillsLabel: '05 / 专业能力', skillsTitle: '从数据中识别关键信号。', analysis: '数据分析', visualisation: '数据可视化', markets: '金融市场', aiWorkflows: 'AI 工作流',
    contactLabel: '06 / 联系方式', contactTitle: '让复杂数据指向清晰的下一步。', contactIntro: '我正在寻找数据分析、金融分析及投资研究方向的实习机会。'
  }
};

const english = Object.fromEntries(
  [...document.querySelectorAll('[data-i18n]')].map(element => [element.dataset.i18n, element.textContent.trim()])
);

function setLanguage(language) {
  const dictionary = language === 'zh' ? translations.zh : english;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh' ? '王炳迪 | 金融与数据分析' : 'Bingdi Wang | Finance & Data Analytics';
  languageToggle.textContent = language === 'zh' ? 'EN' : '中文';
  languageToggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换至中文');
  localStorage.setItem('site-language', language);
}

languageToggle.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh');
});

setLanguage(localStorage.getItem('site-language') === 'zh' ? 'zh' : 'en');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
});

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
