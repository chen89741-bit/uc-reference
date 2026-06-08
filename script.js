const minGpaRequirement =
  "California residents: 3.0 A-G GPA minimum; Nonresidents: 3.4 A-G GPA minimum";
const estimatedAnnualCost =
  "Reference only: CA resident on campus about $47k/year; nonresident on campus about $87k/year";
const officialCostLink =
  "https://admission.universityofcalifornia.edu/tuition-financial-aid/tuition-cost-of-attendance/";

function placeholderImage(campusName, color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520">
      <rect width="900" height="520" fill="${color}"/>
      <circle cx="720" cy="90" r="130" fill="rgba(255,255,255,0.16)"/>
      <circle cx="150" cy="430" r="170" fill="rgba(255,255,255,0.12)"/>
      <text x="54" y="250" fill="white" font-family="Arial, sans-serif" font-size="58" font-weight="700">${campusName}</text>
      <text x="58" y="310" fill="rgba(255,255,255,0.82)" font-family="Arial, sans-serif" font-size="28">Campus image placeholder</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function commonsImage(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
}

function commonsPage(fileName) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replaceAll("%20", "_")}`;
}

const campuses = [
  {
    name: "UC Berkeley",
    campusImage: commonsImage("Uc berkeley campus.jpg"),
    imageSource: commonsPage("Uc berkeley campus.jpg"),
    location: "Berkeley, Bay Area / 伯克利，湾区",
    vibe: "Intense, intellectual, activist / 学术强、节奏快、公共议题活跃",
    overallAdmitRate: "11.4%",
    admittedGpaRange: "4.15-4.29",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/berkeley/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Computer Science", "Engineering", "Business/Economics", "Social Science"],
    difficulty: "Very high / 很高",
    fit: "Students who like challenge, research, and city access / 喜欢挑战、研究和城市资源的学生",
    concerns: "Competitive environment, large classes, housing cost / 竞争强、大课多、住宿贵",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UCLA",
    campusImage: commonsImage("2019 UCLA Royce Hall and Haines Hall.jpg"),
    imageSource: commonsPage("2019 UCLA Royce Hall and Haines Hall.jpg"),
    location: "Los Angeles / 洛杉矶",
    vibe: "Energetic, social, big-city / 活跃、社交强、大城市资源多",
    overallAdmitRate: "9.4%",
    admittedGpaRange: "4.20-4.30",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/ucla/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Film/Arts", "Biology", "Psychology", "Business/Economics"],
    difficulty: "Very high / 很高",
    fit: "Students who want academics plus city opportunities / 想兼顾学术和城市机会的学生",
    concerns: "Traffic, competition, large campus / 交通拥堵、竞争强、校园大",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UC San Diego",
    campusImage: commonsImage("UCSD campus (6484576619).jpg"),
    imageSource: commonsPage("UCSD campus (6484576619).jpg"),
    location: "La Jolla, San Diego / 圣地亚哥 La Jolla",
    vibe: "STEM-focused, coastal, research-heavy / STEM 强、海边、研究氛围浓",
    overallAdmitRate: "28.4%",
    admittedGpaRange: "4.11-4.28",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/san-diego/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Computer Science", "Engineering", "Biology", "Psychology"],
    difficulty: "High / 高",
    fit: "Students who like STEM, research, and structured academics / 喜欢 STEM、研究和清晰学术路径的学生",
    concerns: "Social life can feel spread out / 社交可能比较分散",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UC Irvine",
    campusImage: commonsImage("Aldrich Park, UCI.jpg"),
    imageSource: commonsPage("Aldrich Park, UCI.jpg"),
    location: "Irvine, Orange County / 尔湾，橙县",
    vibe: "Organized, safe, suburban / 规划好、安全、郊区型",
    overallAdmitRate: "28.7%",
    admittedGpaRange: "4.04-4.27",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/irvine/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Computer Science", "Engineering", "Business/Economics", "Biology"],
    difficulty: "High / 高",
    fit: "Students who want balance, safety, and career access / 想要平衡、安全和就业资源的学生",
    concerns: "Less traditional college-town feel / 大学校城氛围较弱",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UC Davis",
    campusImage: commonsImage("Mrak Hall (UC Davis) Across Lake Spafford.jpg"),
    imageSource: commonsPage("Mrak Hall (UC Davis) Across Lake Spafford.jpg"),
    location: "Davis, near Sacramento / 戴维斯，近萨克拉门托",
    vibe: "Friendly, bike-friendly, college town / 友好、自行车文化、大学城",
    overallAdmitRate: "44.6%",
    admittedGpaRange: "4.00-4.26",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/davis/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Biology", "Environmental Science", "Engineering", "Social Science"],
    difficulty: "High / 高",
    fit: "Students who like community, science, and a calmer town / 喜欢社区感、科学和安静环境的学生",
    concerns: "Smaller city feel / 城市资源不如 LA 或湾区",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UC Santa Barbara",
    campusImage: commonsImage("UCSB University Center and Storke Tower.jpg"),
    imageSource: commonsPage("UCSB University Center and Storke Tower.jpg"),
    location: "Santa Barbara / 圣塔芭芭拉",
    vibe: "Coastal, social, relaxed but academic / 海边、社交强、轻松但学术不错",
    overallAdmitRate: "38.3%",
    admittedGpaRange: "4.09-4.28",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/santa-barbara/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Environmental Science", "Social Science", "Psychology", "Film/Arts"],
    difficulty: "High / 高",
    fit: "Students who want campus life, beach, and academics / 想要校园生活、海边和学术平衡的学生",
    concerns: "Party reputation, housing pressure / 派对名声、住房压力",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UC Santa Cruz",
    campusImage: commonsImage("McHenry Library UCSC.jpg"),
    imageSource: commonsPage("McHenry Library UCSC.jpg"),
    location: "Santa Cruz / 圣塔克鲁兹",
    vibe: "Nature, creative, independent / 自然环境强、创意、独立",
    overallAdmitRate: "72.7%",
    admittedGpaRange: "3.83-4.20",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/santa-cruz/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Computer Science", "Environmental Science", "Film/Arts", "Social Science"],
    difficulty: "Medium-high / 中高",
    fit: "Students who like nature, creativity, and less traditional campus culture / 喜欢自然、创意和非传统校园文化的学生",
    concerns: "Hilly campus, limited city scale / 校园坡多、城市规模较小",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UC Riverside",
    campusImage: commonsImage("Ucr-belltower.jpg"),
    imageSource: commonsPage("Ucr-belltower.jpg"),
    location: "Riverside, Inland Empire / 河滨，内陆帝国",
    vibe: "Supportive, diverse, growing / 支持性强、多元、发展中",
    overallAdmitRate: "87.1%",
    admittedGpaRange: "3.65-4.16",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/riverside/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Biology", "Business/Economics", "Psychology", "Social Science"],
    difficulty: "Medium / 中等",
    fit: "Students who want UC access, support, and room to grow / 想要 UC 机会、支持和成长空间的学生",
    concerns: "Hot weather, less coastal access / 天气热、离海边远",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  },
  {
    name: "UC Merced",
    campusImage: commonsImage("University of California, Merced.jpg"),
    imageSource: commonsPage("University of California, Merced.jpg"),
    location: "Merced, Central Valley / 默塞德，加州中央谷",
    vibe: "Newer, close-knit, opportunity-focused / 较新、小社区感、机会成长型",
    overallAdmitRate: "95.1%",
    admittedGpaRange: "3.54-4.15",
    minimumGpaRequirement: minGpaRequirement,
    estimatedAnnualCost,
    officialAdmissionsLink: "https://admission.universityofcalifornia.edu/campuses-majors/merced/first-year-admit-data.html",
    officialCostLink,
    strengths: ["Environmental Science", "Engineering", "Biology", "Social Science"],
    difficulty: "Medium / 中等",
    fit: "Students who want smaller classes and growth opportunities / 想要小一些环境和成长机会的学生",
    concerns: "Newer reputation, fewer city resources / 学校较新、城市资源较少",
    source: "UC Admissions Fall 2025; UC Cost 2026-27 average"
  }
];

const fields = ["Computer Science", "Engineering", "Business/Economics", "Biology", "Psychology", "Social Science", "Film/Arts", "Environmental Science"];

const campusGrid = document.querySelector("#campusGrid");
const majorSelect = document.querySelector("#majorSelect");
const majorResults = document.querySelector("#majorResults");
const fitMajor = document.querySelector("#fitMajor");
const fitButton = document.querySelector("#fitButton");
const copyFitButton = document.querySelector("#copyFitButton");
const copyStatus = document.querySelector("#copyStatus");
const fitResults = document.querySelector("#fitResults");
const compareChoices = document.querySelector("#compareChoices");
const copyCompareButton = document.querySelector("#copyCompareButton");
const compareCopyStatus = document.querySelector("#compareCopyStatus");
const compareTable = document.querySelector("#compareTable");

let currentFitSummary = "";
let currentCompareSummary = "";

function renderCampusCards() {
  campusGrid.innerHTML = campuses.map(renderCampusCard).join("");
}

function getBadge(label, value) {
  return `<span class="data-badge"><strong>${label}</strong>${value}</span>`;
}

function shortCost() {
  return "CA ~$47k / Nonresident ~$87k";
}

function campusImageTag(campus, sizeClass = "") {
  const fallback = placeholderImage(campus.name, "#0f766e");
  return `<img class="campus-image ${sizeClass}" src="${campus.campusImage}" alt="${campus.name} campus image" onerror="this.onerror=null; this.src='${fallback}'" />`;
}

function renderCampusCard(campus) {
  return `
    <article class="card">
      ${campusImageTag(campus)}
      <h3>${campus.name}</h3>
      <p class="meta"><strong>Location 位置：</strong>${campus.location}</p>
      <p class="meta"><strong>Strengths 强项：</strong>${campus.strengths.join(", ")}</p>
      <div class="badge-row">
        ${getBadge("Admit", campus.overallAdmitRate)}
        ${getBadge("GPA", campus.admittedGpaRange)}
        ${getBadge("Cost", shortCost())}
        ${getBadge("Difficulty", campus.difficulty)}
      </div>
      <button class="details-button" type="button">View Details 查看详情</button>
      <div class="details-panel hidden">
        <p class="meta"><strong>Vibe 氛围：</strong>${campus.vibe}</p>
        <p class="meta"><strong>Best fit 适合：</strong>${campus.fit}</p>
        <p class="meta"><strong>Concerns 顾虑：</strong>${campus.concerns}</p>
        <p class="meta"><strong>Minimum GPA 最低 GPA：</strong>${campus.minimumGpaRequirement}</p>
        <p class="meta mini-note">Admitted GPA range is not a guarantee. 录取学生 GPA 范围不是录取保证。</p>
        <p class="meta mini-note">Estimated cost is a reference only and varies by campus and student. 费用只是参考，会因校区和个人情况变化。</p>
        <p class="meta"><strong>Source 来源：</strong>${campus.source}</p>
        <div class="link-row">
          <a href="${campus.officialAdmissionsLink}" target="_blank" rel="noreferrer">Official admit data</a>
          <a href="${campus.officialCostLink}" target="_blank" rel="noreferrer">Official cost info</a>
          <a href="${campus.imageSource}" target="_blank" rel="noreferrer">Image source</a>
        </div>
      </div>
    </article>
  `;
}

function setupDetailsButtons() {
  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const isHidden = panel.classList.toggle("hidden");
      button.textContent = isHidden ? "View Details 查看详情" : "Hide Details 收起详情";
    });
  });
}

function buildMajorAdvice(campus, field) {
  const advice = {
    "Computer Science": `${campus.name} is worth considering if you want strong tech, research, or software-related opportunities. 对想走科技、研究或软件方向的学生，可以重点比较这所学校。`,
    Engineering: `${campus.name} may fit students who want applied problem-solving, labs, and project-based learning. 如果你喜欢动手解决问题、实验室和项目学习，可以把它放入候选。`,
    "Business/Economics": `${campus.name} can be a good option if you want economics, campus recruiting, or nearby internship access. 如果你关注经济、实习和职业资源，可以进一步查专业和社团机会。`,
    Biology: `${campus.name} is useful to compare if you are thinking about life science, pre-health, or research experience. 如果你考虑生命科学、医学预科或科研经历，可以重点查看课程和实验室。`,
    Psychology: `${campus.name} may fit students interested in human behavior, research, education, or health-related paths. 如果你关注心理、人类行为、教育或健康相关方向，可以比较课程设置。`,
    "Social Science": `${campus.name} is worth comparing if you care about policy, society, data, community work, or public service. 如果你关注社会、政策、数据、社区或公共服务，可以把它列为选择。`,
    "Film/Arts": `${campus.name} may fit students who want creative work, media, performance, or arts communities. 如果你想走创意、媒体、表演或艺术社群，可以查看作品集和课程要求。`,
    "Environmental Science": `${campus.name} is a strong candidate if you care about climate, ecology, sustainability, or outdoor field work. 如果你关注气候、生态、可持续发展或户外研究，可以优先比较。`
  };

  return advice[field] || `${campus.name} may be a useful campus to compare for this field.`;
}

function renderMajorOptions() {
  majorSelect.innerHTML = fields.map((field) => `<option value="${field}">${field}</option>`).join("");
  fitMajor.innerHTML = fields.map((field) => `<option value="${field}">${field}</option>`).join("");
}

function renderMajorResults() {
  const field = majorSelect.value;
  const matches = campuses.filter((campus) => campus.strengths.includes(field)).slice(0, 5);

  majorResults.innerHTML = matches
    .map(
      (campus) => `
        <article class="card">
          ${campusImageTag(campus, "small")}
          <div class="tag">${field}</div>
          <h3>${campus.name}</h3>
          <p class="meta"><strong>Decision advice 决策建议：</strong>${buildMajorAdvice(campus, field)}</p>
          <div class="badge-row">
            ${getBadge("Admit", campus.overallAdmitRate)}
            ${getBadge("GPA", campus.admittedGpaRange)}
            ${getBadge("Difficulty", campus.difficulty)}
          </div>
          <p class="meta mini-note">No exact major admit rates yet. 暂不加入专业录取率。</p>
          <p class="meta">Fit 适配：${campus.fit}</p>
          <p class="meta">Concern 顾虑：${campus.concerns}</p>
        </article>
      `
    )
    .join("");
}

function getDifficultyScore(campus) {
  if (campus.difficulty.includes("Very high")) return 4;
  if (campus.difficulty.includes("High")) return 3;
  if (campus.difficulty.includes("Medium-high")) return 2;
  return 1;
}

function getGpaLevel(value) {
  const levels = {
    top: 4,
    strong: 3,
    solid: 2,
    building: 1
  };
  return levels[value] || 2;
}

function getCampusMatchScore(campus, preferences) {
  let score = 0;
  const text = `${campus.location} ${campus.vibe} ${campus.fit} ${campus.concerns}`.toLowerCase();

  if (campus.strengths.includes(preferences.major)) score += 3;
  if (text.includes(preferences.environment)) score += 2;
  if (preferences.environment === "city" && (text.includes("city") || text.includes("los angeles") || text.includes("bay area"))) score += 2;
  if (preferences.environment === "coastal" && (text.includes("coastal") || text.includes("beach"))) score += 2;
  if (preferences.environment === "nature" && text.includes("nature")) score += 2;
  if (preferences.environment === "college-town" && text.includes("college town")) score += 2;
  if (preferences.environment === "suburban" && text.includes("suburban")) score += 2;

  if (preferences.vibe === "competitive" && text.includes("challenge")) score += 2;
  if (preferences.vibe === "social" && text.includes("social")) score += 2;
  if (preferences.vibe === "supportive" && text.includes("support")) score += 2;
  if (preferences.vibe === "creative" && text.includes("creative")) score += 2;
  if (preferences.vibe === "research" && text.includes("research")) score += 2;
  if (preferences.vibe === "balanced" && (text.includes("balance") || text.includes("friendly"))) score += 2;

  if (preferences.budget === "high" && !text.includes("housing cost") && !text.includes("housing pressure")) score += 1;
  return score;
}

function pickCampuses(candidates, count = 3) {
  return candidates.slice(0, count).map((campus) => campus.name).join(", ") || "None from current prototype data / 当前原型数据暂无";
}

function renderFitResults() {
  const preferences = {
    gpa: document.querySelector("#fitGpa").value,
    major: fitMajor.value,
    environment: document.querySelector("#fitEnvironment").value,
    budget: document.querySelector("#fitBudget").value,
    vibe: document.querySelector("#fitVibe").value
  };
  const gpaLevel = getGpaLevel(preferences.gpa);
  const scored = campuses
    .map((campus) => ({
      ...campus,
      score: getCampusMatchScore(campus, preferences),
      difficultyScore: getDifficultyScore(campus)
    }))
    .sort((a, b) => b.score - a.score || a.difficultyScore - b.difficultyScore);

  const reach = scored.filter((campus) => campus.difficultyScore > gpaLevel);
  const target = scored.filter((campus) => campus.difficultyScore === gpaLevel);
  const lessSelective = scored.filter((campus) => campus.difficultyScore < gpaLevel);
  const lifestyle = scored.filter((campus) => campus.score >= 3);
  const reachText = pickCampuses(reach);
  const targetText = pickCampuses(target);
  const lessSelectiveText = pickCampuses(lessSelective);
  const lifestyleText = pickCampuses(lifestyle);

  currentFitSummary = [
    "UC Fit Compass Summary",
    "Built by Yuhao Chen",
    "Goal: Help students compare UC campuses with clearer data and fit logic.",
    "Data: Prototype reference only. Verify with official UC sources.",
    "",
    "These categories are not admissions predictions.",
    `Reach: ${reachText}`,
    `Target: ${targetText}`,
    `Less Selective Reference: ${lessSelectiveText}`,
    `Lifestyle Fit: ${lifestyleText}`
  ].join("\n");

  fitResults.innerHTML = `
    <div class="notice">
      <strong>Not an admissions prediction 不是录取预测：</strong>
      Reach, Target, and Less Selective Reference are planning labels based on prototype reference data, not official chances.
      这些只是用来整理申请清单的参考标签，不代表官方录取概率。
    </div>
    <div class="fit-grid">
      ${renderFitCard("Reach 冲刺", reachText, "Higher difficulty than your selected GPA band. 难度高于你选择的 GPA 档位。")}
      ${renderFitCard("Target 匹配", targetText, "Difficulty is close to your selected GPA band. 难度接近你选择的 GPA 档位。")}
      ${renderFitCard("Less Selective Reference 相对低难度参考", lessSelectiveText, "Lower difficulty than your selected GPA band. 难度低于你选择的 GPA 档位。")}
      ${renderFitCard("Lifestyle Fit 生活适配", lifestyleText, "Best match for major, environment, budget, and vibe preferences. 更符合专业、环境、预算和氛围偏好。")}
    </div>
  `;
  copyStatus.textContent = "";
}

function renderFitCard(title, schools, note) {
  return `
    <article class="fit-card">
      <h3>${title}</h3>
      <p>${schools}</p>
      <span>${note}</span>
    </article>
  `;
}

function renderCompareChoices() {
  compareChoices.innerHTML = campuses
    .map(
      (campus) => `
        <label>
          <input type="checkbox" value="${campus.name}" />
          ${campus.name}
        </label>
      `
    )
    .join("");
}

function buildCompareSummary(selected) {
  const names = selected.map((campus) => campus.name).join(", ");
  const difficulties = [...new Set(selected.map((campus) => campus.difficulty))].join(" vs ");
  const locations = selected.map((campus) => campus.location.split(" / ")[0]).join(" | ");
  const allStrengths = [...new Set(selected.flatMap((campus) => campus.strengths))].slice(0, 6).join(", ");
  const summaryText = `${names} differ most in location (${locations}), difficulty (${difficulties}), and academic strengths (${allStrengths}).`;
  currentCompareSummary = [
    "UC Fit Compass Compare Summary",
    `Selected campuses: ${names}`,
    `Biggest differences: ${summaryText}`,
    "Data: Prototype reference only. Verify with official UC sources."
  ].join("\n");

  return `
    <div class="compare-summary">
      <strong>Biggest differences 主要差异：</strong>
      ${summaryText}
      选择时重点看地理位置、录取难度参考、专业强项和生活氛围。
    </div>
  `;
}

function renderCompareTable() {
  const selectedNames = [...compareChoices.querySelectorAll("input:checked")]
    .map((input) => input.value)
    .slice(0, 3);
  const selected = campuses.filter((campus) => selectedNames.includes(campus.name));

  if (selected.length < 2) {
    compareTable.innerHTML = `<div class="notice">Select 2-3 campuses to compare. 请选择 2-3 所学校对比。</div>`;
    currentCompareSummary = "";
    compareCopyStatus.textContent = "";
    return;
  }

  const rows = [
    ["Location 位置", "location"],
    ["Admit rate 录取率", "overallAdmitRate"],
    ["GPA range GPA 范围", "admittedGpaRange"],
    ["Difficulty 难度", "difficulty"],
    ["Estimated cost 预估费用", "estimatedAnnualCost"],
    ["Strengths 强项", "strengths"],
    ["Vibe 氛围", "vibe"],
    ["Best fit 适合", "fit"],
    ["Concerns 顾虑", "concerns"]
  ];

  compareTable.innerHTML = `
    ${buildCompareSummary(selected)}
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Factor 对比项</th>
            ${selected.map((campus) => `<th>${campus.name}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              ([label, key]) => `
                <tr>
                  <th>${label}</th>
                  ${selected
                    .map((campus) => {
                      const value = Array.isArray(campus[key]) ? campus[key].join(", ") : campus[key];
                      return `<td>${value}</td>`;
                    })
                    .join("")}
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

majorSelect.addEventListener("change", renderMajorResults);
fitButton.addEventListener("click", renderFitResults);
copyFitButton.addEventListener("click", async () => {
  if (!currentFitSummary) {
    renderFitResults();
  }

  try {
    await navigator.clipboard.writeText(currentFitSummary);
    copyStatus.textContent = "Copied. 已复制。";
  } catch (error) {
    copyStatus.textContent = "Copy failed. 请手动复制结果。";
  }
});
copyCompareButton.addEventListener("click", async () => {
  if (!currentCompareSummary) {
    compareCopyStatus.textContent = "Select 2-3 campuses first. 请先选择 2-3 所学校。";
    return;
  }

  try {
    await navigator.clipboard.writeText(currentCompareSummary);
    compareCopyStatus.textContent = "Copied. 已复制。";
  } catch (error) {
    compareCopyStatus.textContent = "Copy failed. 请手动复制总结。";
  }
});
compareChoices.addEventListener("change", (event) => {
  const checkedInputs = compareChoices.querySelectorAll("input:checked");
  if (checkedInputs.length > 3) {
    event.target.checked = false;
  }
  renderCompareTable();
});

renderCampusCards();
setupDetailsButtons();
renderMajorOptions();
renderMajorResults();
renderFitResults();
renderCompareChoices();
renderCompareTable();
