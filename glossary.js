/* ============================================================
   THE AML DESK — Glossary Search & Filter
   ============================================================ */

const GLOSSARY_DATA = [
  { term: "AML", full: "Anti-Money Laundering", def: "Laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income." },
  { term: "AMLA", full: "Anti-Money Laundering Authority (EU)", def: "The EU's new centralized AML/CFT supervisory authority, established in 2024, headquartered in Frankfurt. Directly supervises certain high-risk financial entities." },
  { term: "AMLR", full: "Anti-Money Laundering Regulation (EU)", def: "The EU's directly applicable AML regulation (part of the 2024 AML Package) that harmonises AML/CFT rules across member states without requiring transposition." },
  { term: "Beneficial Owner", full: "", def: "The natural person who ultimately owns or controls a customer entity, or on whose behalf a transaction is conducted. Typically defined as holding 25% or more ownership/control." },
  { term: "BSA", full: "Bank Secrecy Act", def: "US federal law (1970) requiring financial institutions to assist government agencies in detecting and preventing money laundering. Foundation of US AML framework." },
  { term: "CAMS", full: "Certified Anti-Money Laundering Specialist", def: "A professional certification offered by ACAMS (Association of Certified Anti-Money Laundering Specialists). Widely recognized as the gold standard AML credential." },
  { term: "CDD", full: "Customer Due Diligence", def: "The process of identifying customers, verifying their identity, and understanding the nature and purpose of the business relationship to assess ML/TF risk." },
  { term: "CFT", full: "Counter-Financing of Terrorism", def: "Measures to detect, prevent, and disrupt the financing of terrorist activities. Often paired with AML as 'AML/CFT'." },
  { term: "CIP", full: "Customer Identification Program", def: "A US requirement (under USA PATRIOT Act Section 326) for financial institutions to verify the identity of individuals opening accounts." },
  { term: "Correspondent Banking", full: "", def: "A banking arrangement where one bank (correspondent) provides services on behalf of another bank (respondent), often for cross-border payments. High-risk for ML due to nested relationships." },
  { term: "CTA", full: "Corporate Transparency Act", def: "US law (2021) requiring companies to report beneficial ownership information to FinCEN, combating the misuse of anonymous shell companies." },
  { term: "CTR", full: "Currency Transaction Report", def: "A report filed by US financial institutions for cash transactions exceeding $10,000 in a single business day. Required under the BSA." },
  { term: "De-risking", full: "", def: "The practice of financial institutions terminating or restricting relationships with entire categories of clients perceived as high-risk, rather than managing risk on a case-by-case basis." },
  { term: "DPA", full: "Deferred Prosecution Agreement", def: "A legal arrangement where prosecutors agree to defer criminal charges against an institution in exchange for meeting certain conditions (fines, compliance improvements, monitoring)." },
  { term: "EDD", full: "Enhanced Due Diligence", def: "Additional verification and scrutiny applied to high-risk customers (PEPs, high-risk jurisdictions, complex structures). Requires source of wealth/funds investigation and senior management approval." },
  { term: "Egmont Group", full: "", def: "An international network of Financial Intelligence Units (FIUs) that facilitates information sharing and cooperation in the fight against money laundering and terrorist financing." },
  { term: "FATF", full: "Financial Action Task Force", def: "The global intergovernmental standard-setter for AML/CFT (founded 1989). Issues the 40 Recommendations, conducts mutual evaluations, and maintains Grey/Black Lists." },
  { term: "FCA", full: "Financial Conduct Authority", def: "The UK's financial regulatory body that supervises AML/CFT compliance for financial services firms." },
  { term: "FinCEN", full: "Financial Crimes Enforcement Network", def: "US Treasury bureau responsible for administering the BSA, collecting financial intelligence, and combating money laundering and other financial crimes." },
  { term: "FIU", full: "Financial Intelligence Unit", def: "A national agency that receives, analyses, and disseminates financial intelligence (SARs/STRs) to combat money laundering and terrorist financing." },
  { term: "FIU-IND", full: "Financial Intelligence Unit — India", def: "India's national FIU, responsible for receiving and processing STRs and CTRs from reporting entities." },
  { term: "Front Company", full: "", def: "A legitimate business used to disguise the source of illicit funds. Unlike a shell company, a front company may have real operations, but they serve primarily as cover for money laundering." },
  { term: "FSRB", full: "FATF-Style Regional Body", def: "Regional organisations that promote and assess compliance with FATF standards in their member jurisdictions (e.g., APG, MONEYVAL, CFATF)." },
  { term: "Grey List", full: "FATF Grey List", def: "Countries identified by FATF as having strategic deficiencies in their AML/CFT frameworks but that have committed to resolve them within agreed timeframes. Officially called 'Jurisdictions under Increased Monitoring'." },
  { term: "Black List", full: "FATF Black List", def: "Countries identified by FATF as high-risk jurisdictions subject to a call for action due to significant strategic AML/CFT deficiencies. Officially called 'High-Risk Jurisdictions subject to a Call for Action'." },
  { term: "Hawala", full: "", def: "An informal value transfer system based on trust and honour, commonly used in South Asia and the Middle East. While legitimate in many contexts, it can be exploited for money laundering due to minimal record-keeping." },
  { term: "ICA", full: "International Compliance Association", def: "A professional body offering compliance certifications, including the ICA Diploma in Anti-Money Laundering." },
  { term: "Integration", full: "", def: "The third stage of money laundering, where 'cleaned' funds are reintroduced into the legitimate economy (e.g., through real estate purchases, luxury goods, or business investments)." },
  { term: "KYC", full: "Know Your Customer", def: "The process of verifying a customer's identity and understanding their financial activities. The cornerstone of every AML programme." },
  { term: "Layering", full: "", def: "The second stage of money laundering, involving complex layers of transactions to separate money from its criminal source and obscure the audit trail." },
  { term: "MER", full: "Mutual Evaluation Report", def: "A comprehensive assessment of a country's AML/CFT framework conducted by FATF or an FSRB, evaluating both technical compliance and effectiveness." },
  { term: "MiCA", full: "Markets in Crypto-Assets Regulation", def: "EU regulation (2023) establishing a harmonised framework for crypto-asset markets, including AML/CFT requirements for crypto-asset service providers." },
  { term: "MLRO", full: "Money Laundering Reporting Officer", def: "The designated individual within a regulated firm responsible for receiving internal suspicious activity reports and making decisions about filing external SARs/STRs." },
  { term: "MSB", full: "Money Services Business", def: "A business providing money transfer, currency exchange, cheque cashing, or stored value services. MSBs are subject to AML regulations and registration requirements." },
  { term: "Mutual Legal Assistance Treaty", full: "MLAT", def: "Bilateral or multilateral agreements between countries enabling the exchange of evidence and information for criminal investigations, including money laundering cases." },
  { term: "NCA", full: "National Crime Agency", def: "The UK's lead agency for combating serious and organised crime. Houses the UK Financial Intelligence Unit (UKFIU) which receives SARs." },
  { term: "Nominee", full: "", def: "A person or entity that holds assets, shares, or directorships on behalf of another person. Nominees can be used legitimately but may obscure beneficial ownership." },
  { term: "OFAC", full: "Office of Foreign Assets Control", def: "US Treasury office that administers and enforces economic and trade sanctions. Maintains the SDN (Specially Designated Nationals) list." },
  { term: "PEP", full: "Politically Exposed Person", def: "An individual who holds or has held a prominent public function (head of state, senior politician, military leader, etc.). PEPs are considered high-risk and require enhanced due diligence." },
  { term: "Placement", full: "", def: "The first stage of money laundering, involving the introduction of illicit funds into the legitimate financial system (e.g., cash deposits, purchase of monetary instruments)." },
  { term: "PMLA", full: "Prevention of Money Laundering Act", def: "India's primary AML legislation (2002, effective 2005). Criminalises money laundering, provides for confiscation of proceeds of crime, and establishes enforcement mechanisms." },
  { term: "POCA", full: "Proceeds of Crime Act", def: "UK legislation (2002) creating money laundering offences (Sections 327–329) and enabling the confiscation and recovery of criminal proceeds." },
  { term: "Predicate Offence", full: "", def: "The underlying crime that generates the proceeds which are subsequently laundered. Examples include drug trafficking, fraud, corruption, tax evasion, and human trafficking." },
  { term: "RBA", full: "Risk-Based Approach", def: "The foundational AML principle that resources and controls should be allocated proportionally to the identified risks. Higher-risk customers receive more scrutiny; lower-risk customers may receive simplified due diligence." },
  { term: "SAR", full: "Suspicious Activity Report", def: "A report filed by financial institutions with their FIU when they identify transactions or activity that may indicate money laundering, terrorist financing, or other financial crimes." },
  { term: "SDD", full: "Simplified Due Diligence", def: "Reduced verification measures applied to customers and transactions assessed as presenting a low risk of money laundering or terrorist financing." },
  { term: "SDN List", full: "Specially Designated Nationals List", def: "OFAC's list of individuals and entities whose assets are blocked (frozen) and with whom US persons are generally prohibited from dealing." },
  { term: "Shell Company", full: "", def: "A company that has no significant assets, operations, or employees. While they have legitimate uses, shell companies are frequently misused to conceal beneficial ownership and launder funds." },
  { term: "Smurfing", full: "", def: "A form of structuring where multiple individuals ('smurfs') make small deposits or transactions to avoid reporting thresholds." },
  { term: "STR", full: "Suspicious Transaction Report", def: "The term used in India, Australia, and FATF terminology for a report filed when suspicious transactions are identified. Equivalent to SAR in the US/UK." },
  { term: "Structuring", full: "", def: "Breaking large transactions into smaller amounts to avoid triggering reporting thresholds (e.g., the $10,000 CTR threshold in the US). Also called 'smurfing'. This is itself a federal crime in the US." },
  { term: "TBML", full: "Trade-Based Money Laundering", def: "The exploitation of the international trade system to transfer value and disguise illicit funds — through over/under-invoicing, multiple invoicing, or phantom shipments." },
  { term: "Three Lines of Defence", full: "", def: "A governance model for risk management: 1st Line (business units own the risk), 2nd Line (compliance/risk management oversee), 3rd Line (internal audit independently assures)." },
  { term: "Tipping Off", full: "", def: "The criminal offence of informing a customer (or anyone else) that a SAR/STR has been filed about them, or that an investigation is underway. Prohibited in most AML jurisdictions." },
  { term: "Transaction Monitoring", full: "", def: "The ongoing process of reviewing customer transactions (using automated systems and manual review) to identify patterns that may indicate money laundering or other financial crimes." },
  { term: "Travel Rule", full: "FATF Recommendation 16", def: "Requires financial institutions and VASPs to include originator and beneficiary information in wire transfers and virtual asset transfers to enable traceability." },
  { term: "UBO", full: "Ultimate Beneficial Owner", def: "Synonym for Beneficial Owner — the natural person who ultimately owns or controls an entity. See 'Beneficial Owner'." },
  { term: "UNODC", full: "United Nations Office on Drugs and Crime", def: "UN agency that assists member states in the fight against illicit drugs, crime, and terrorism. Provides AML technical assistance and publishes ML statistics." },
  { term: "VASP", full: "Virtual Asset Service Provider", def: "Any business that conducts virtual asset (cryptocurrency) activities — exchanges, transfers, custody, etc. VASPs are subject to AML/CFT requirements under FATF Recommendation 15." },
  { term: "Wolfsberg Group", full: "", def: "An association of 13 major global banks that develops industry standards and guidance for managing financial crime risks. Publishes voluntary AML principles." },
  { term: "Wire Transfer", full: "", def: "An electronic transfer of funds between financial institutions. Subject to AML regulations including the FATF Travel Rule (Recommendation 16) and BSA requirements." }
];

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('glossary-search-input');
  const lettersContainer = document.getElementById('glossary-letters');
  const contentContainer = document.getElementById('glossary-content');
  const noResults = document.getElementById('glossary-no-results');

  // Get unique letters
  const letters = [...new Set(GLOSSARY_DATA.map(item => item.term[0].toUpperCase()))].sort();

  // Build letter navigation
  letters.forEach(letter => {
    const btn = document.createElement('a');
    btn.href = `#letter-${letter}`;
    btn.className = 'glossary-letter';
    btn.textContent = letter;
    btn.setAttribute('aria-label', `Jump to letter ${letter}`);
    lettersContainer.appendChild(btn);
  });

  // Render glossary
  function renderGlossary(filter = '') {
    const filterLower = filter.toLowerCase();
    const filtered = GLOSSARY_DATA.filter(item => {
      return item.term.toLowerCase().includes(filterLower) ||
             item.full.toLowerCase().includes(filterLower) ||
             item.def.toLowerCase().includes(filterLower);
    });

    if (filtered.length === 0) {
      contentContainer.innerHTML = '';
      noResults.style.display = 'block';
      return;
    }

    noResults.style.display = 'none';

    // Group by letter
    const groups = {};
    filtered.forEach(item => {
      const letter = item.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(item);
    });

    let html = '';
    Object.keys(groups).sort().forEach(letter => {
      html += `<div class="glossary-group" id="letter-${letter}">`;
      html += `<div class="glossary-group__letter">${letter}</div>`;
      groups[letter].forEach(item => {
        const fullText = item.full ? ` <span class="glossary-term__abbr">(${item.full})</span>` : '';
        html += `<div class="glossary-term">`;
        html += `<div class="glossary-term__word">${highlightMatch(item.term, filter)}${fullText}</div>`;
        html += `<p class="glossary-term__def">${highlightMatch(item.def, filter)}</p>`;
        html += `</div>`;
      });
      html += `</div>`;
    });

    contentContainer.innerHTML = html;
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<mark style="background: var(--color-accent-glow); color: var(--color-accent); padding: 0 2px; border-radius: 2px;">$1</mark>');
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Initial render
  renderGlossary();

  // Search handler
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderGlossary(searchInput.value.trim());
    }, 200);
  });
});
