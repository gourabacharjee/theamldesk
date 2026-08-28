/* ============================================================
   THE AML DESK — Quiz & Flashcard Engine
   ============================================================ */

const QUIZ_MODULES = {
  fundamentals: {
    title: "AML Fundamentals",
    icon: "🏗️",
    color: "amber",
    questions: [
      {
        q: "What are the three stages of money laundering?",
        options: ["Collection, Distribution, Investment", "Placement, Layering, Integration", "Deposit, Transfer, Withdrawal", "Sourcing, Processing, Deployment"],
        correct: 1,
        explanation: "The three universally recognized stages of money laundering are Placement (introducing dirty money into the financial system), Layering (creating complex transactions to disguise the trail), and Integration (reintroducing clean-looking money into the legitimate economy)."
      },
      {
        q: "According to UNODC estimates, how much money is laundered globally each year?",
        options: ["$50–100 billion", "$200–500 billion", "$800 billion – $2 trillion", "$5–10 trillion"],
        correct: 2,
        explanation: "The UNODC estimates that 2–5% of global GDP, or approximately $800 billion to $2 trillion, is laundered globally each year. The exact figure is impossible to determine due to the covert nature of money laundering."
      },
      {
        q: "Which stage of money laundering is generally considered the MOST risky for criminals?",
        options: ["Placement", "Layering", "Integration", "All stages carry equal risk"],
        correct: 0,
        explanation: "Placement is considered the riskiest stage because criminals must physically introduce large amounts of cash or illicit funds into the financial system, where they are most visible and likely to attract attention."
      },
      {
        q: "What is the key difference between AML and CFT?",
        options: ["AML is for banks, CFT is for government", "AML deals with proceeds FROM crime, CFT deals with funds going TOWARDS terrorism", "AML is international, CFT is domestic", "There is no difference — they are the same thing"],
        correct: 1,
        explanation: "AML (Anti-Money Laundering) focuses on the proceeds flowing out from criminal activity, while CFT (Counter-Financing of Terrorism) addresses funds flowing towards terrorist activities. CFT funds may even originate from legitimate sources."
      },
      {
        q: "What does 'predicate offence' mean in AML context?",
        options: ["A prediction about future crimes", "The underlying crime that generates illicit proceeds", "An offence committed before the main crime", "A preliminary investigation stage"],
        correct: 1,
        explanation: "A predicate offence is the underlying crime that generates the proceeds which are subsequently laundered. Examples include drug trafficking, fraud, corruption, tax evasion, and human trafficking."
      },
      {
        q: "Which of these is NOT typically associated with the placement stage?",
        options: ["Structuring cash deposits", "Purchasing real estate with layered funds to appear legitimate", "Smuggling cash across borders", "Depositing cash into business accounts"],
        correct: 1,
        explanation: "Purchasing real estate to reintroduce 'clean' money into the economy is associated with the Integration stage, not Placement. Placement involves introducing dirty money into the financial system for the first time."
      },
      {
        q: "Sanctions compliance primarily involves:",
        options: ["Filing tax returns accurately", "Screening customers against prohibited-party lists", "Monitoring employee behaviour", "Auditing financial statements"],
        correct: 1,
        explanation: "Sanctions compliance requires financial institutions to screen customers and transactions against official sanctions lists (OFAC SDN, UN, EU, UK) to ensure they are not dealing with prohibited parties, countries, or entities."
      },
      {
        q: "What does the term 'money laundering' originally refer to?",
        options: ["Washing counterfeit bills", "Using laundromats to mix illegal cash with legitimate revenue", "Cleaning currency in industrial machines", "A legal term from Roman law"],
        correct: 1,
        explanation: "The term is believed to originate from US organized crime groups using cash-intensive laundromats (launderettes) to commingle illicit cash with legitimate business revenue — literally 'laundering' money through a legal business."
      },
      {
        q: "Why is money laundering considered harmful even though it involves 'just moving money'?",
        options: ["It only affects banks' profits", "It enables serious crimes like drug trafficking, terrorism, corruption, and human trafficking", "It increases inflation slightly", "It only matters to regulators, not the public"],
        correct: 1,
        explanation: "Money laundering enables and sustains the most serious criminal enterprises. Without the ability to launder proceeds, large-scale criminal activities would struggle to operate. It also undermines financial systems, distorts markets, and erodes trust in institutions."
      },
      {
        q: "In which decade was the first major international effort to combat money laundering established?",
        options: ["1960s", "1970s", "1980s (FATF founded 1989)", "2000s"],
        correct: 2,
        explanation: "The Financial Action Task Force (FATF) was founded in 1989 by the G7, marking the first major international coordinated effort to combat money laundering. The US Bank Secrecy Act (1970) was an earlier national effort."
      }
    ]
  },
  regulations: {
    title: "Global Regulations",
    icon: "🌍",
    color: "teal",
    questions: [
      {
        q: "How many Recommendations does the FATF issue?",
        options: ["20", "30", "40", "50"],
        correct: 2,
        explanation: "The FATF issues 40 Recommendations that form the global standard for AML/CFT policies. These cover everything from risk assessment to international cooperation."
      },
      {
        q: "What is the FATF 'Grey List'?",
        options: ["A list of banks with poor compliance", "Countries with strategic AML/CFT deficiencies under increased monitoring", "A list of suspicious transactions", "A classified internal document"],
        correct: 1,
        explanation: "The FATF Grey List (officially 'Jurisdictions under Increased Monitoring') identifies countries with strategic deficiencies in their AML/CFT frameworks that have committed to resolving them within agreed timeframes."
      },
      {
        q: "The US Bank Secrecy Act (BSA) requires CTRs to be filed for cash transactions exceeding:",
        options: ["$5,000", "$10,000", "$15,000", "$25,000"],
        correct: 1,
        explanation: "The BSA requires financial institutions to file Currency Transaction Reports (CTRs) for cash transactions exceeding $10,000 in a single business day."
      },
      {
        q: "Which section of the USA PATRIOT Act introduced Enhanced Due Diligence for correspondent banking?",
        options: ["Section 311", "Section 312", "Section 314", "Section 326"],
        correct: 1,
        explanation: "Section 312 of the USA PATRIOT Act requires Enhanced Due Diligence (EDD) for correspondent banking accounts and private banking accounts for non-US persons."
      },
      {
        q: "India's primary AML legislation is:",
        options: ["FEMA", "PMLA 2002", "RBI Act", "SEBI Act"],
        correct: 1,
        explanation: "The Prevention of Money Laundering Act (PMLA) 2002 (effective 2005) is India's primary AML legislation. It criminalises money laundering and provides for confiscation of proceeds of crime."
      },
      {
        q: "What major change did the EU's 5th Anti-Money Laundering Directive (5AMLD) introduce?",
        options: ["Created the FATF", "Extended AML rules to virtual currency exchanges", "Abolished CDD requirements", "Removed PEP screening requirements"],
        correct: 1,
        explanation: "The 5th AMLD (2018) extended AML/CFT rules to virtual currency exchanges and custodian wallet providers, and made beneficial ownership registers publicly accessible."
      },
      {
        q: "The Wolfsberg Group is:",
        options: ["A government regulator", "An association of 13 global banks developing AML best practices", "A law enforcement agency", "A cryptocurrency exchange"],
        correct: 1,
        explanation: "The Wolfsberg Group is an association of 13 major global banks that develops voluntary frameworks and guidance for managing financial crime risks. Their principles are widely adopted as industry best practices."
      },
      {
        q: "Which UK law creates the three main money laundering offences (Sections 327–329)?",
        options: ["Financial Services Act", "Proceeds of Crime Act (POCA) 2002", "Terrorism Act 2000", "Bribery Act 2010"],
        correct: 1,
        explanation: "The Proceeds of Crime Act (POCA) 2002 creates three money laundering offences: concealing/converting criminal property (s.327), arranging (s.328), and acquiring/using/possessing criminal property (s.329)."
      },
      {
        q: "FinCEN stands for:",
        options: ["Financial Intelligence Center", "Financial Crimes Enforcement Network", "Finance and Commerce Network", "Federal Investigation for Criminal Enterprises Network"],
        correct: 1,
        explanation: "FinCEN (Financial Crimes Enforcement Network) is the US Treasury bureau responsible for administering the BSA, collecting financial intelligence, and combating money laundering."
      },
      {
        q: "What is the EU AMLA (established 2024)?",
        options: ["An AML software tool", "A centralized EU AML supervisory authority based in Frankfurt", "A new cryptocurrency", "A FATF working group"],
        correct: 1,
        explanation: "AMLA (Anti-Money Laundering Authority) is the EU's new centralized AML/CFT supervisory authority, established as part of the 2024 AML Package, headquartered in Frankfurt."
      }
    ]
  },
  concepts: {
    title: "Core Concepts",
    icon: "🔍",
    color: "purple",
    questions: [
      {
        q: "What is the 'Risk-Based Approach' in AML?",
        options: ["All customers get the same level of scrutiny", "Resources and controls are allocated proportionally to identified risks", "Only high-risk customers are monitored", "Risk is ignored if the customer is a large corporation"],
        correct: 1,
        explanation: "The Risk-Based Approach means that AML resources and controls should be proportional to the identified level of risk. Higher-risk customers receive more scrutiny; lower-risk customers may receive simplified due diligence."
      },
      {
        q: "A PEP (Politically Exposed Person) requires:",
        options: ["No special treatment", "Enhanced Due Diligence (EDD)", "Account closure", "Only basic KYC"],
        correct: 1,
        explanation: "PEPs require Enhanced Due Diligence (EDD) because their prominent public position may make them vulnerable to corruption and bribery. EDD for PEPs includes source of wealth/funds investigation and senior management approval."
      },
      {
        q: "What is 'tipping off' in AML context?",
        options: ["Providing a gratuity to bank staff", "Informing a customer that a SAR/STR has been filed about them", "Reporting suspicious activity to the FIU", "Exceeding a transaction threshold"],
        correct: 1,
        explanation: "Tipping off is the criminal offence of informing a customer (or anyone else) that a SAR/STR has been filed about them or that an investigation is underway. This is prohibited in most AML jurisdictions."
      },
      {
        q: "In the Three Lines of Defence model, who forms the 2nd Line?",
        options: ["Front office and business units", "Compliance and risk management functions", "Internal audit", "External regulators"],
        correct: 1,
        explanation: "The 2nd Line of Defence consists of the compliance and risk management functions. They oversee and advise the business (1st Line) on AML/CFT matters and ensure policies are followed."
      },
      {
        q: "What is 'safe harbour' protection in SAR filing?",
        options: ["A physical location for SAR submissions", "Protection from liability for filing SARs in good faith", "A SAR that is guaranteed to result in prosecution", "A type of account with reduced reporting requirements"],
        correct: 1,
        explanation: "Safe harbour protects financial institutions and individuals from civil liability for filing SARs/STRs in good faith. This encourages reporting by ensuring filers cannot be sued for making a report."
      },
      {
        q: "Beneficial ownership refers to:",
        options: ["The person whose name is on the account", "The natural person who ultimately owns or controls an entity", "The bank that holds the account", "Any shareholder with more than 1% ownership"],
        correct: 1,
        explanation: "The beneficial owner is the natural person who ultimately owns or controls a customer entity, or on whose behalf a transaction is conducted. The typical threshold is 25% ownership/control (varies by jurisdiction)."
      },
      {
        q: "Which of these triggers Enhanced Due Diligence?",
        options: ["Opening a savings account", "A customer from a FATF Grey List country", "A small domestic wire transfer", "A routine credit card payment"],
        correct: 1,
        explanation: "Customers from high-risk jurisdictions (including FATF Grey/Black List countries) trigger EDD requirements, which include additional verification, source of wealth investigation, and senior management approval."
      },
      {
        q: "The FATF 'Travel Rule' requires:",
        options: ["All travellers to declare cash at borders", "Originator and beneficiary information to accompany wire transfers", "Banks to track customer travel patterns", "Compliance officers to travel internationally for training"],
        correct: 1,
        explanation: "The FATF Travel Rule (Recommendation 16) requires financial institutions and VASPs to include originator and beneficiary information with wire transfers and virtual asset transfers to enable traceability."
      },
      {
        q: "What does SDD (Simplified Due Diligence) mean?",
        options: ["Due diligence conducted by software only", "Reduced verification for LOW-risk customers", "A simplified SAR filing form", "Due diligence performed once and never updated"],
        correct: 1,
        explanation: "Simplified Due Diligence (SDD) involves reduced verification measures for customers assessed as presenting LOW risk of money laundering or terrorist financing — for example, publicly listed companies."
      },
      {
        q: "A transaction monitoring system that uses machine learning is an example of:",
        options: ["Rule-based monitoring", "Behavioural analytics", "Manual review", "Correspondent banking"],
        correct: 1,
        explanation: "Behavioural analytics uses AI/ML to build customer profiles and flag deviations from expected behaviour, as opposed to rule-based systems that use predefined thresholds and scenarios."
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) return;

  let currentModule = null;
  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;
  let mode = 'quiz'; // 'quiz' or 'flashcard'

  // Load saved progress
  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem('amldesk_quiz_progress') || '{}');
    } catch { return {}; }
  }

  function saveProgress(moduleKey, scoreVal, total) {
    const progress = getProgress();
    progress[moduleKey] = { score: scoreVal, total: total, date: new Date().toISOString() };
    localStorage.setItem('amldesk_quiz_progress', JSON.stringify(progress));
  }

  // Render module selection
  function renderModuleSelection() {
    const progress = getProgress();
    let html = `
      <div class="section-header section-header--center reveal visible">
        <span class="section-header__label">Test Your Knowledge</span>
        <h2>Choose a Module</h2>
        <p class="section-header__description">Select a topic to start a quiz or review flashcards. Your progress is saved locally.</p>
      </div>
      <div class="callout callout--info" style="margin-bottom: var(--space-8);">
        <p><strong>📌 Educational Only</strong> These quizzes are for self-assessment and interview preparation only. They do not constitute a certification or qualification.</p>
      </div>
      <div class="quiz-modules">
    `;

    for (const [key, mod] of Object.entries(QUIZ_MODULES)) {
      const prog = progress[key];
      const pct = prog ? Math.round((prog.score / prog.total) * 100) : 0;
      const colorClass = `card__icon--${mod.color}`;

      html += `
        <article class="card quiz-card" data-module="${key}" tabindex="0" role="button" aria-label="Start ${mod.title} quiz">
          <div class="card__icon ${colorClass}" aria-hidden="true">${mod.icon}</div>
          <h3 class="card__title">${mod.title}</h3>
          <p class="card__text">${mod.questions.length} questions</p>
          ${prog ? `
            <div class="quiz-progress">
              <div class="quiz-progress__bar"><div class="quiz-progress__fill" style="width: ${pct}%"></div></div>
              <span class="quiz-progress__text">${prog.score}/${prog.total} (${pct}%)</span>
            </div>
          ` : `<p class="card__text color-muted" style="margin:0;">Not started</p>`}
          <div style="display: flex; gap: var(--space-3); margin-top: var(--space-4);">
            <button class="btn btn--sm btn--primary start-quiz-btn" data-module="${key}" data-mode="quiz">Quiz</button>
            <button class="btn btn--sm btn--ghost start-quiz-btn" data-module="${key}" data-mode="flashcard">Flashcards</button>
          </div>
        </article>
      `;
    }

    html += `</div>`;
    quizContainer.innerHTML = html;

    // Attach listeners
    quizContainer.querySelectorAll('.start-quiz-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const moduleKey = btn.dataset.module;
        mode = btn.dataset.mode;
        startModule(moduleKey);
      });
    });
  }

  // Start module
  function startModule(moduleKey) {
    currentModule = moduleKey;
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    if (mode === 'flashcard') {
      renderFlashcard();
    } else {
      renderQuestion();
    }
  }

  // Render quiz question
  function renderQuestion() {
    const mod = QUIZ_MODULES[currentModule];
    const q = mod.questions[currentQuestionIndex];
    const letters = ['A', 'B', 'C', 'D'];
    answered = false;

    let html = `
      <div class="quiz-question">
        <div class="quiz-question__header">
          <span class="quiz-question__counter">Question ${currentQuestionIndex + 1} of ${mod.questions.length}</span>
          <span class="quiz-question__score">Score: ${score}/${currentQuestionIndex}</span>
        </div>
        <div class="quiz-progress" style="margin-bottom: var(--space-6);">
          <div class="quiz-progress__bar"><div class="quiz-progress__fill" style="width: ${(currentQuestionIndex / mod.questions.length) * 100}%"></div></div>
        </div>
        <h3 class="quiz-question__text">${q.q}</h3>
        <div class="quiz-options">
    `;

    q.options.forEach((opt, i) => {
      html += `
        <div class="quiz-option" data-index="${i}" tabindex="0" role="button" aria-label="Option ${letters[i]}: ${opt}">
          <span class="quiz-option__letter">${letters[i]}</span>
          <span>${opt}</span>
        </div>
      `;
    });

    html += `
        </div>
        <div id="quiz-explanation" style="display:none;"></div>
        <div class="quiz-actions">
          <button class="btn btn--ghost" id="quiz-back-btn">← Back to Modules</button>
          <button class="btn btn--primary" id="quiz-next-btn" style="display:none;">
            ${currentQuestionIndex < mod.questions.length - 1 ? 'Next Question →' : 'See Results'}
          </button>
        </div>
      </div>
    `;

    quizContainer.innerHTML = html;

    // Option click handlers
    quizContainer.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => handleAnswer(parseInt(opt.dataset.index)));
      opt.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleAnswer(parseInt(opt.dataset.index));
        }
      });
    });

    document.getElementById('quiz-back-btn').addEventListener('click', renderModuleSelection);
    document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);
  }

  function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const mod = QUIZ_MODULES[currentModule];
    const q = mod.questions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) score++;

    // Update UI
    quizContainer.querySelectorAll('.quiz-option').forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.correct) opt.classList.add('correct');
      if (i === selectedIndex && !isCorrect) opt.classList.add('incorrect');
      if (i === selectedIndex) opt.classList.add('selected');
    });

    // Show explanation
    const expEl = document.getElementById('quiz-explanation');
    expEl.innerHTML = `<div class="quiz-explanation"><strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.explanation}</div>`;
    expEl.style.display = 'block';

    // Show next button
    document.getElementById('quiz-next-btn').style.display = 'inline-flex';

    // Update score display
    const scoreEl = quizContainer.querySelector('.quiz-question__score');
    if (scoreEl) scoreEl.textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
  }

  function nextQuestion() {
    const mod = QUIZ_MODULES[currentModule];
    currentQuestionIndex++;
    if (currentQuestionIndex >= mod.questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    const mod = QUIZ_MODULES[currentModule];
    const total = mod.questions.length;
    const pct = Math.round((score / total) * 100);
    saveProgress(currentModule, score, total);

    let grade, gradeColor;
    if (pct >= 90) { grade = 'Excellent!'; gradeColor = 'var(--color-success)'; }
    else if (pct >= 70) { grade = 'Good Job!'; gradeColor = 'var(--color-accent)'; }
    else if (pct >= 50) { grade = 'Keep Learning!'; gradeColor = 'var(--color-warning)'; }
    else { grade = 'Review Needed'; gradeColor = 'var(--color-danger)'; }

    quizContainer.innerHTML = `
      <div class="quiz-results">
        <h2 style="margin-bottom: var(--space-4);">${mod.title} — Results</h2>
        <div class="quiz-results__score">${pct}%</div>
        <p style="font-size: var(--text-2xl); font-weight: 600; color: ${gradeColor}; margin-bottom: var(--space-4);">${grade}</p>
        <p style="font-size: var(--text-lg); color: var(--color-text-secondary); margin-bottom: var(--space-8);">
          You answered ${score} out of ${total} questions correctly.
        </p>
        <div class="quiz-actions" style="justify-content: center;">
          <button class="btn btn--primary" id="quiz-retry-btn">Retry Quiz</button>
          <button class="btn btn--secondary" id="quiz-modules-btn">All Modules</button>
        </div>
        <p style="margin-top: var(--space-8); font-size: var(--text-xs); color: var(--color-text-muted);">
          This quiz is for educational and self-assessment purposes only. It does not constitute a certification.
        </p>
      </div>
    `;

    document.getElementById('quiz-retry-btn').addEventListener('click', () => startModule(currentModule));
    document.getElementById('quiz-modules-btn').addEventListener('click', renderModuleSelection);
  }

  // Flashcard mode
  function renderFlashcard() {
    const mod = QUIZ_MODULES[currentModule];
    const q = mod.questions[currentQuestionIndex];

    quizContainer.innerHTML = `
      <div class="quiz-question__header" style="max-width: 600px; margin: 0 auto var(--space-6);">
        <span class="quiz-question__counter">Card ${currentQuestionIndex + 1} of ${mod.questions.length}</span>
        <span class="quiz-question__score">${mod.title}</span>
      </div>
      <div class="quiz-progress" style="max-width: 600px; margin: 0 auto var(--space-8);">
        <div class="quiz-progress__bar"><div class="quiz-progress__fill" style="width: ${((currentQuestionIndex + 1) / mod.questions.length) * 100}%"></div></div>
      </div>
      <div class="flashcard-container">
        <div class="flashcard" id="flashcard" tabindex="0" role="button" aria-label="Click to flip card">
          <div class="flashcard__front">
            <span class="flashcard__label">Question</span>
            <p class="flashcard__text">${q.q}</p>
            <span class="flashcard__hint">Click to reveal answer</span>
          </div>
          <div class="flashcard__back">
            <span class="flashcard__label">Answer</span>
            <p class="flashcard__text" style="font-size: var(--text-lg);">${q.options[q.correct]}</p>
            <p style="margin-top: var(--space-4); font-size: var(--text-sm); color: var(--color-text-secondary);">${q.explanation}</p>
          </div>
        </div>
      </div>
      <div class="quiz-actions" style="margin-top: var(--space-8);">
        <button class="btn btn--ghost" id="fc-back-btn">← Back to Modules</button>
        ${currentQuestionIndex > 0 ? `<button class="btn btn--secondary" id="fc-prev-btn">← Previous</button>` : ''}
        ${currentQuestionIndex < mod.questions.length - 1 ? `<button class="btn btn--primary" id="fc-next-btn">Next Card →</button>` : `<button class="btn btn--primary" id="fc-done-btn">Done ✓</button>`}
      </div>
    `;

    const flashcard = document.getElementById('flashcard');
    flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
    flashcard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flashcard.classList.toggle('flipped');
      }
    });

    document.getElementById('fc-back-btn').addEventListener('click', renderModuleSelection);
    const prevBtn = document.getElementById('fc-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => { currentQuestionIndex--; renderFlashcard(); });
    const nextBtn = document.getElementById('fc-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => { currentQuestionIndex++; renderFlashcard(); });
    const doneBtn = document.getElementById('fc-done-btn');
    if (doneBtn) doneBtn.addEventListener('click', renderModuleSelection);
  }

  // Initial render
  renderModuleSelection();
});
