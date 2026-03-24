import React from 'react';
import { Terminal } from 'lucide-react';

const IconWrapper = ({ src, alt, size = 28, className = '', imgClassName = '' }) => (
  <div 
    style={{ width: size, height: size }} 
    className={`flex items-center justify-center ${className}`}
    role="img"
    aria-label={alt}
  >
    <img 
      src={src} 
      alt="" 
      className={`max-w-full max-h-full object-contain ${imgClassName}`}
      loading="lazy"
    />
  </div>
);

const DualIconWrapper = ({ src1, alt1, src2, alt2, size = 28, className = '', imgClassName1 = '', imgClassName2 = '' }) => (
  <div 
    style={{ width: size * 2, height: size }} 
    className={`flex items-center justify-center gap-2 ${className}`}
    role="img"
    aria-label={`${alt1} and ${alt2}`}
  >
    <img src={src1} alt="" className={`w-[45%] h-full object-contain ${imgClassName1}`} loading="lazy" />
    <img src={src2} alt="" className={`w-[45%] h-full object-contain ${imgClassName2}`} loading="lazy" />
  </div>
);

export const CPlusPlusIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" {...props} />
);

export const PythonIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" {...props} />
);

export const HtmlCssIcon = (props) => (
  <DualIconWrapper 
    src1="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt1="HTML5"
    src2="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt2="CSS3"
    {...props} 
  />
);

export const GitGithubIcon = (props) => (
  <DualIconWrapper 
    src1="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt1="Git"
    src2="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt2="GitHub"
    imgClassName2="bg-white rounded-full border border-white"
    {...props} 
  />
);

export const GitIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" {...props} />
);

export const GitHubIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" imgClassName="bg-white rounded-full border border-white" {...props} />
);

export const FlaskIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" imgClassName="bg-white rounded-md p-0.5" {...props} />
);

export const SQLIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm" fill="#336791">
      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4S4 11.21 4 9zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4S4 16.21 4 14z"/>
    </svg>
  </div>
);

export const PowerBIIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" className="w-full h-full object-contain drop-shadow-sm" fill="#F2C811">
      <path d="M10.462 8.783v14.075h4.945V8.783h-4.945zM3.551 16.037v6.821h4.945v-6.821H3.551zM17.373 1.142v21.716h4.945V1.142h-4.945z"/>
    </svg>
  </div>
);

export const ExcelIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" className="w-full h-full object-contain drop-shadow-sm" fill="#217346">
      <path d="M23.16 2.379L10.372 4.414v15.222l12.788 1.961V2.379zM1.986 6.3l8.384-1.312v14.07l-8.384-1.31zM4.192 9.07l1.549 3.097-1.549 3.1h2.203l1.101-2.203 1.102 2.203h2.204l-1.549-3.098 1.549-3.098h-2.204l-1.102 2.203-1.101-2.203H4.192z"/>
    </svg>
  </div>
);

export const PowerBIExcelIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size * 2, height: size }} className={`flex items-center justify-center gap-2 ${className}`}>
    <svg viewBox="0 0 24 24" className="w-[45%] h-full object-contain drop-shadow-sm" fill="#F2C811">
      <path d="M10.462 8.783v14.075h4.945V8.783h-4.945zM3.551 16.037v6.821h4.945v-6.821H3.551zM17.373 1.142v21.716h4.945V1.142h-4.945z"/>
    </svg>
    <svg viewBox="0 0 24 24" className="w-[45%] h-full object-contain drop-shadow-sm" fill="#217346">
      <path d="M23.16 2.379L10.372 4.414v15.222l12.788 1.961V2.379zM1.986 6.3l8.384-1.312v14.07l-8.384-1.31zM4.192 9.07l1.549 3.097-1.549 3.1h2.203l1.101-2.203 1.102 2.203h2.204l-1.549-3.098 1.549-3.098h-2.204l-1.102 2.203-1.101-2.203H4.192z"/>
    </svg>
  </div>
);

export const NumpyIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="NumPy" {...props} />
);

export const PandasIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" imgClassName="bg-white rounded-md p-0.5" {...props} />
);

export const MatplotlibIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" {...props} />
);

export const SeabornIcon = (props) => (
  <IconWrapper src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="Seaborn" imgClassName="bg-white rounded-md p-0.5" {...props} />
);

export const NumpyPandasIcon = (props) => (
  <DualIconWrapper
    src1="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt1="NumPy"
    src2="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt2="Pandas"
    imgClassName2="bg-white rounded-md p-0.5"
    {...props}
  />
);

export const MatplotlibSeabornIcon = (props) => (
  <DualIconWrapper
    src1="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" alt1="Matplotlib"
    src2="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt2="Seaborn"
    imgClassName2="bg-white rounded-md p-0.5"
    {...props}
  />
);

export const ScikitLearnIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" {...props} />
);

export const DSAIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <Terminal size={size} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
  </div>
);

export const DataStructuresIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
      <path d="M12 3L12 8M12 8L18 14M12 8L6 14M6 14L6 19M18 14L18 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="12" cy="4" r="3" fill="#FF4B91" />
      <circle cx="6" cy="15" r="3" fill="#00F3FF" />
      <circle cx="18" cy="15" r="3" fill="#FFD700" />
      <rect x="15" y="18" width="6" height="3" rx="1" fill="#7B66FF" opacity="0.8" />
      <rect x="3" y="18" width="6" height="3" rx="1" fill="#7B66FF" opacity="0.8" />
    </svg>
  </div>
);

export const AlgorithmsIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
      <path d="M12 2L12 22M2 12L22 12" stroke="white" strokeWidth="1" opacity="0.1" />
      <path d="M13 2.05v2.02c3.39.49 6.04 3.14 6.53 6.53h2.02c-.5-4.5-4.05-8.05-8.55-8.55zM11 2.05C6.5 2.55 2.95 6.1 2.45 10.6h2.02c.49-3.39 3.14-6.04 6.53-6.53V2.05zM2.45 13.4c.5 4.5 4.05 8.05 8.55 8.55v-2.02c-3.39-.49-6.04-3.14-6.53-6.53H2.45zM13 21.95c4.5-.5 8.05-4.05 8.55-8.55h-2.02c-.49 3.39-3.14 6.04-6.53 6.53v2.02z" fill="#00F3FF" />
      <path d="M12 8v4l3 3" stroke="#FF4B91" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#FFD700" />
    </svg>
  </div>
);

export const GithubSingleIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" imgClassName="bg-white rounded-full border border-white" {...props} />
);

export const LinkedinIcon = (props) => (
  <IconWrapper src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" {...props} />
);

export const GmailIcon = (props) => (
  <IconWrapper src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email" {...props} />
);

export const LeetcodeIcon = ({ size = 28, className = '' }) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" className="w-full h-full object-contain drop-shadow-sm" fill="#FFA116">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.665 2.665 0 0 1 .614-1.164L11.1 9.1l4.418-4.231a3.02 3.02 0 0 1 4.204-.037l2.97 2.825a1.377 1.377 0 0 0 1.95-1.952l-2.97-2.825A5.764 5.764 0 0 0 13.57 0h-.087zM2.844 11.23a1.377 1.377 0 0 0-1.157 2.132l4.898 6.758a1.378 1.378 0 0 0 2.23-1.614L3.918 11.75a1.378 1.378 0 0 0-1.074-.52z"/>
    </svg>
  </div>
);
