import { PORTFOLIO_DATA } from '../data/portfolioData';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const SUGGESTED_QUESTIONS = [
  "What skills does Vikas have?",
  "What is his main project?",
  "What is the Lost & Found project?",
  "What technologies does he use?",
  "What is he currently learning?",
  "Tell me about his journey"
];

/**
 * Knowledge-base grounded response system.
 * Strictly adheres to information provided in the portfolio.
 * Answers ONLY using confirmed portfolio details without fabricating information.
 */
export async function getPortfolioAIResponse(query: string): Promise<string> {
  // Simulate natural assistant latency
  await new Promise((resolve) => setTimeout(resolve, 450));

  const clean = query.trim().toLowerCase();

  // 1. Skills questions
  if (
    clean.includes("skill") ||
    clean.includes("arsenal") ||
    clean.includes("what can he do") ||
    clean.includes("languages") ||
    clean.includes("proficien")
  ) {
    const prog = PORTFOLIO_DATA.skills.filter((s) => s.category === "Programming").map((s) => `${s.name} (${s.level})`).join(", ");
    const web = PORTFOLIO_DATA.skills.filter((s) => s.category === "Web").map((s) => `${s.name} (${s.level})`).join(", ");
    const db = PORTFOLIO_DATA.skills.filter((s) => s.category === "Database").map((s) => `${s.name} (${s.level})`).join(", ");
    const tools = PORTFOLIO_DATA.skills.filter((s) => s.category === "Tools").map((s) => `${s.name} (${s.level})`).join(", ");

    return `Here are Vikas's technical skills grouped by category, with honest proficiency levels:\n\n• Programming: ${prog}\n• Web: ${web}\n• Database: ${db}\n• Tools: ${tools}\n\nVikas maintains honest working levels: Working Knowledge in Python, SQL, HTML, JavaScript, GitHub, and AI tools, and Familiar with CSS and Git.`;
  }

  // 2. Main project / Lost & Found project questions
  if (
    clean.includes("main project") ||
    clean.includes("lost & found") ||
    clean.includes("lost and found") ||
    clean.includes("mission #01") ||
    clean.includes("flagship") ||
    clean.includes("best project")
  ) {
    const p = PORTFOLIO_DATA.projects[0];
    return `Vikas's flagship project is "${p.title}" (${p.missionNumber}):\n\n• Problem: ${p.problem}\n• Solution: ${p.solution}\n• Technologies: ${p.technologies.join(", ")}\n• 7-Step Workflow: Lost Item → Potential Match → Claim → Verification → Admin Review → Approve → Returned.\n• Admin Features: Review reports, verify private proof (e.g. serial numbers), approve/reject claims with comments, mark returned, and remove duplicates.\n• Security: Protected admin console and student self-service portal.`;
  }

  // 3. Technologies used across projects
  if (
    clean.includes("technolog") ||
    clean.includes("tech stack") ||
    clean.includes("tools does he use") ||
    clean.includes("stack")
  ) {
    return `Vikas works with Python, SQL, HTML, CSS, JavaScript, Git, GitHub, and modern AI development tools. He applies them toward building structured web applications and practical student utilities.`;
  }

  // 4. Current mission / learning questions
  if (
    clean.includes("currently learning") ||
    clean.includes("learning") ||
    clean.includes("current mission") ||
    clean.includes("studying") ||
    clean.includes("goal")
  ) {
    return `Vikas's current mission is: "${PORTFOLIO_DATA.profile.currentMission}". As a BTech student, he is focused on deepening his programming foundations, mastering relational databases, exploring AI-assisted workflows, and preparing for competitive hackathons.`;
  }

  // 5. Who is Vikas / About questions
  if (
    clean.includes("who is") ||
    clean.includes("about") ||
    clean.includes("who am i") ||
    clean.includes("bio") ||
    clean.includes("background")
  ) {
    return `${PORTFOLIO_DATA.profile.name} is a ${PORTFOLIO_DATA.profile.currentYear} ${PORTFOLIO_DATA.profile.course} student at ${PORTFOLIO_DATA.profile.college}. Guided by the mantra "${PORTFOLIO_DATA.profile.tagline}", he focuses on building robust software, database engineering, and practical tools. He is the creator of the Lost & Found Management System for campus asset recovery.`;
  }

  // 6. Journey / timeline questions
  if (
    clean.includes("journey") ||
    clean.includes("timeline") ||
    clean.includes("roadmap") ||
    clean.includes("path")
  ) {
    const steps = PORTFOLIO_DATA.journey.map((j) => `${j.stepNumber}. ${j.title}`).join("\n");
    return `Vikas's engineering milestones include:\n\n${steps}\n\nHe continues evolving as a full-stack engineer and competing in hackathons.`;
  }

  // 7. Certificates / achievements questions
  if (
    clean.includes("certificate") ||
    clean.includes("achievement") ||
    clean.includes("cert") ||
    clean.includes("courses")
  ) {
    const certs = PORTFOLIO_DATA.certificates.map((c) => `• ${c.title} — ${c.issuer}`).join("\n");
    return `Vikas has official verified credentials including:\n\n${certs}\n\nKey highlights: Grade O (Outstanding) in the 8-week AI-ML Virtual Internship supported by Google for Developers & AICTE, and representation in the 3-day Hackathon-2025 at SMS Lucknow with Team CODE STORM.`;
  }

  // 8. Contact & Social links
  if (
    clean.includes("contact") ||
    clean.includes("email") ||
    clean.includes("reach") ||
    clean.includes("hire") ||
    clean.includes("connect") ||
    clean.includes("github") ||
    clean.includes("linkedin")
  ) {
    return `You can connect with Vikas directly:\n\n• Email: ${PORTFOLIO_DATA.profile.email}\n• GitHub: ${PORTFOLIO_DATA.profile.github}\n• LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}\n\nYou can also use the contact form in the Contact section to send him a direct message!`;
  }

  // 9. College / Course / Education
  if (
    clean.includes("college") ||
    clean.includes("university") ||
    clean.includes("institution") ||
    clean.includes("course") ||
    clean.includes("degree") ||
    clean.includes("btech") ||
    clean.includes("year") ||
    clean.includes("branch")
  ) {
    return `Vikas is currently a ${PORTFOLIO_DATA.profile.currentYear} student pursuing ${PORTFOLIO_DATA.profile.course} at ${PORTFOLIO_DATA.profile.college}.`;
  }

  // 10. Easter egg / secret
  if (clean.includes("easter egg") || clean.includes("secret") || clean.includes("curious")) {
    return `Curious minds are rewarded! Try pressing the 'E' key on your keyboard anywhere on the website, or look for the "Curious enough?" hint at the bottom right.`;
  }

  // Default strictly grounded refusal when query is outside portfolio bounds:
  return `I don't have that information in the portfolio yet. Feel free to ask about Vikas's skills, his Lost & Found project, his journey, current mission, or contact options!`;
}
