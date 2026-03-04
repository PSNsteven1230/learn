const WORDS_BY_GRADE = {
  Preschool: [
    "cat", "dog", "mom", "dad", "sun", "hat", "cup", "red", "big", "up", "ball", "fish",
    "tree", "run", "sit", "book", "milk", "car", "yes", "no", "bed", "toy", "duck", "happy",
    "jump", "blue", "star", "baby", "apple", "bird", "shoe", "nose", "hand", "rain", "moon", "frog",
    "cake", "bus", "kite", "bear", "sock", "train", "boat", "leaf", "grass", "snow", "banana", "cookie"
  ],
  Kindergarten: [
    "can", "like", "see", "go", "play", "look", "come", "with", "little", "help", "want", "here",
    "good", "make", "find", "down", "yellow", "green", "school", "friend", "water", "house", "story", "laugh",
    "quiet", "quick", "brown", "under", "again", "around", "after", "bring", "clean", "drink", "eight", "full",
    "grow", "hold", "kind", "light", "never", "open", "pretty", "round", "sleep", "small", "thank", "today"
  ],
  "1st Grade": [
    "because", "before", "every", "could", "would", "there", "their", "people", "animal", "family", "morning", "number",
    "thought", "answer", "almost", "different", "together", "picture", "always", "between", "reading", "sentence", "favorite", "question",
    "another", "remember", "important", "beautiful", "surprise", "outside", "careful", "country", "example", "follow", "happen", "learn",
    "listen", "minute", "nearby", "person", "science", "should", "something", "through", "welcome", "wonder", "world", "young"
  ]
};
const REAL_WORD_BANK = [
  "a", "am", "an", "and", "are", "as", "at", "away", "be", "been", "best", "better", "black", "brown", "by", "call",
  "came", "carry", "cold", "cut", "day", "did", "do", "does", "done", "draw", "drink", "eat", "fall", "far", "fast",
  "five", "fly", "for", "four", "from", "fun", "funny", "gave", "get", "give", "goes", "got", "had", "has", "have",
  "he", "her", "hers", "him", "his", "hot", "how", "if", "in", "into", "is", "it", "its", "just", "keep", "know",
  "large", "last", "left", "let", "live", "long", "made", "many", "may", "me", "more", "most", "much", "must", "my",
  "new", "next", "night", "not", "now", "of", "off", "old", "on", "once", "one", "only", "or", "our", "out", "over",
  "own", "part", "pick", "put", "ran", "read", "right", "saw", "say", "said", "same", "seven", "shall", "she", "show",
  "six", "so", "soon", "stop", "take", "ten", "than", "that", "the", "them", "then", "these", "they", "this", "three",
  "to", "too", "try", "two", "us", "use", "very", "walk", "warm", "was", "we", "well", "went", "were", "what", "when",
  "where", "which", "white", "who", "why", "will", "with", "work", "would", "write", "you", "your", "about", "above",
  "across", "add", "afraid", "air", "all", "along", "also", "any", "ask", "back", "bad", "bag", "base", "beat", "become",
  "behind", "below", "bit", "body", "both", "bring", "broken", "busy", "buy", "care", "center", "children", "city", "class",
  "close", "color", "complete", "cover", "cry", "dark", "deep", "develop", "door", "drop", "dry", "early", "earth", "easy",
  "enough", "ever", "everybody", "eye", "face", "family", "father", "feet", "field", "fire", "first", "follow", "food",
  "form", "found", "front", "game", "girl", "glass", "great", "ground", "group", "grow", "half", "hard", "hear", "high",
  "hold", "home", "horse", "hour", "idea", "important", "inside", "jump", "kind", "king", "knew", "lady", "land", "language",
  "learn", "letter", "line", "list", "listen", "little", "love", "machine", "man", "map", "mark", "mean", "men", "mile",
  "mind", "miss", "money", "month", "mother", "move", "name", "near", "need", "news", "north", "nothing", "notice", "number",
  "open", "order", "page", "paper", "people", "person", "picture", "place", "plan", "plant", "play", "point", "power",
  "problem", "question", "quick", "quiet", "rain", "ready", "real", "remember", "rest", "river", "room", "round", "school",
  "sea", "second", "seen", "sentence", "set", "ship", "short", "side", "simple", "since", "sleep", "small", "snow", "sound",
  "south", "spring", "start", "state", "still", "street", "strong", "study", "summer", "sun", "table", "tell", "thank",
  "their", "there", "thing", "think", "those", "thought", "today", "together", "told", "top", "toward", "town", "train",
  "tree", "under", "until", "upon", "usually", "voice", "wait", "water", "way", "weather", "week", "while", "wind", "winter",
  "without", "word", "world", "year", "young", "zoo", "after", "again", "almost", "always", "another", "answer", "around",
  "beautiful", "because", "before", "between", "careful", "country", "different", "during", "example", "favorite", "happen",
  "minute", "morning", "outside", "science", "should", "something", "through", "welcome", "wonder"
];

const ILLUSTRATION_PALETTE = [
  ["#dbeafe", "#1d4ed8"],
  ["#dcfce7", "#166534"],
  ["#fee2e2", "#b91c1c"],
  ["#fef3c7", "#b45309"],
  ["#ede9fe", "#6d28d9"],
  ["#cffafe", "#0f766e"]
];

const WORDS_PER_SET = 10;
const SETS_PER_GRADE = 40;
const TOTAL_WORDS_PER_GRADE = WORDS_PER_SET * SETS_PER_GRADE;
const COMPLEX_SPELLING_PATTERN = /(sh|ch|th|wh|ph|ck|ng|qu|oo|ee|ea|ou|ow|igh|tion|sion)/;
const GRADE_ORDER = ["Preschool", "Kindergarten", "1st Grade"];
const GRADE_DIFFICULTY_RULES = {
  Preschool: { minScore: 2, maxScore: 6, minLength: 2, maxLength: 7, targetScore: 4 },
  Kindergarten: { minScore: 4, maxScore: 9, minLength: 3, maxLength: 10, targetScore: 6 },
  "1st Grade": { minScore: 6, maxScore: 14, minLength: 5, maxLength: 14, targetScore: 8 }
};
const IRREGULAR_WORDS = new Set([
  "the", "there", "their", "would", "could", "because", "people", "some", "come", "one", "two", "who", "through"
]);

const gradeSelect = document.getElementById("gradeSelect");
const slowModeToggle = document.getElementById("slowModeToggle");
const lessonSelect = document.getElementById("lessonSelect");
const startBtn = document.getElementById("startBtn");

const practiceCard = document.getElementById("practiceCard");
const resultCard = document.getElementById("resultCard");
const lessonInfo = document.getElementById("lessonInfo");
const wordCounter = document.getElementById("wordCounter");
const progressFill = document.getElementById("progressFill");
const wordDisplay = document.getElementById("wordDisplay");
const wordImage = document.getElementById("wordImage");
const imageFallback = document.getElementById("imageFallback");
const syllableBreakdown = document.getElementById("syllableBreakdown");
const phonicsBreakdown = document.getElementById("phonicsBreakdown");
const letterBreakdown = document.getElementById("letterBreakdown");

const speakBtn = document.getElementById("speakBtn");
const practiceBtn = document.getElementById("practiceBtn");
const correctBtn = document.getElementById("correctBtn");

const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const continueBtn = document.getElementById("continueBtn");
const redoLessonBtn = document.getElementById("redoLessonBtn");
const newLessonBtn = document.getElementById("newLessonBtn");

const state = {
  grade: "Preschool",
  setIndex: 0,
  setWords: [],
  baseWords: [],
  queue: [],
  currentItem: null,
  sessionStats: {},
  baseCompleted: 0,
  correctCount: 0
};
const gradePlanCache = {};
let preferredVoice = null;
let availableVoices = [];
let slowReadEnabled = false;
let masteryStats = {};
const SLOW_MODE_STORAGE_KEY = "letslearn_slow_read";
const MASTERY_STORAGE_KEY = "letslearn_mastery_stats";

function hashWord(word) {
  let hash = 0;
  for (let i = 0; i < word.length; i += 1) {
    hash = (hash * 31 + word.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function buildWordSvgDataUrl(word) {
  const hash = hashWord(word);
  const colors = ILLUSTRATION_PALETTE[hash % ILLUSTRATION_PALETTE.length];
  const shapeX = 20 + (hash % 55);
  const shapeY = 24 + (hash % 35);
  const letter = word.charAt(0).toUpperCase();
  const label = word.toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
    <rect width="180" height="180" rx="24" fill="${colors[0]}"/>
    <circle cx="${shapeX}" cy="${shapeY}" r="16" fill="${colors[1]}" opacity="0.35"/>
    <circle cx="${160 - shapeX}" cy="${160 - shapeY}" r="26" fill="${colors[1]}" opacity="0.2"/>
    <rect x="18" y="110" width="144" height="52" rx="12" fill="white" opacity="0.8"/>
    <text x="90" y="88" text-anchor="middle" font-family="Trebuchet MS, Verdana, sans-serif" font-size="66" font-weight="700" fill="${colors[1]}">${letter}</text>
    <text x="90" y="143" text-anchor="middle" font-family="Trebuchet MS, Verdana, sans-serif" font-size="20" font-weight="700" fill="#1f2937">${label}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function estimateSyllables(word) {
  const compact = word.toLowerCase().replace(/e\b/g, "").replace(/[^a-z]/g, "");
  const groups = compact.match(/[aeiouy]+/g);
  return Math.max(1, groups ? groups.length : 1);
}

function splitIntoSyllableLikeParts(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!cleaned) {
    return [word];
  }

  const parts = [];
  let current = cleaned.charAt(0);

  for (let i = 1; i < cleaned.length; i += 1) {
    const char = cleaned.charAt(i);
    const prev = cleaned.charAt(i - 1);
    const isVowel = /[aeiouy]/.test(char);
    const wasVowel = /[aeiouy]/.test(prev);

    if (isVowel !== wasVowel && current.length >= 2) {
      parts.push(current);
      current = char;
    } else {
      current += char;
    }
  }

  parts.push(current);
  return parts.length > 1 ? parts : [cleaned];
}

function splitIntoPhonicsChunks(word) {
  const patterns = /(tion|sion|igh|eigh|ch|sh|th|wh|ph|ck|ng|qu|ee|oo|ea|ai|oa|ow|ou)/g;
  return word.toLowerCase().replace(patterns, "-$1-").split("-").filter(Boolean);
}

function getWordDifficultyScore(word, grade) {
  let score = word.length;

  if (COMPLEX_SPELLING_PATTERN.test(word)) {
    score += 1;
  }

  score += Math.max(0, estimateSyllables(word) - 1);

  if (IRREGULAR_WORDS.has(word.toLowerCase())) {
    score += 2;
  }

  if (grade === "1st Grade" && word.length >= 7) {
    score += 1;
  }

  return score;
}

function getRootPoolForGrade() {
  const pool = [];
  GRADE_ORDER.forEach((level) => {
    pool.push(...WORDS_BY_GRADE[level]);
  });
  pool.push(...REAL_WORD_BANK);
  return [...new Set(pool)];
}

function scoreWordCandidates(words, grade) {
  return words
    .filter((word) => word.length >= 2 && word.length <= 14 && /^[a-z]+$/.test(word))
    .map((word, index) => ({
      word,
      index,
      score: getWordDifficultyScore(word, grade)
    }));
}

function buildExpandedWordsForGrade(grade) {
  const roots = getRootPoolForGrade();
  const allCandidates = new Set();
  roots.forEach((word) => allCandidates.add(word.toLowerCase()));

  const rules = GRADE_DIFFICULTY_RULES[grade];
  const scoredCandidates = scoreWordCandidates([...allCandidates], grade)
    .sort((a, b) => {
      if (a.score !== b.score) {
        return a.score - b.score;
      }
      return a.word.localeCompare(b.word);
    });

  const withinBand = scoredCandidates.filter((entry) => (
    entry.score >= rules.minScore &&
    entry.score <= rules.maxScore &&
    entry.word.length >= rules.minLength &&
    entry.word.length <= rules.maxLength
  ));

  const selected = [...withinBand];
  if (selected.length < TOTAL_WORDS_PER_GRADE) {
    const existing = new Set(selected.map((entry) => entry.word));
    const fallback = scoredCandidates
      .filter((entry) => (
        !existing.has(entry.word) &&
        entry.score >= rules.minScore &&
        entry.word.length >= rules.minLength
      ))
      .sort((a, b) => {
        const distanceA = Math.abs(a.score - rules.targetScore);
        const distanceB = Math.abs(b.score - rules.targetScore);
        if (distanceA !== distanceB) {
          return distanceA - distanceB;
        }
        return a.score - b.score;
      });

    for (let i = 0; i < fallback.length && selected.length < TOTAL_WORDS_PER_GRADE; i += 1) {
      selected.push(fallback[i]);
    }
  }

  return selected.map((entry) => entry.word);
}

function buildGradePlan(grade) {
  if (gradePlanCache[grade]) {
    return gradePlanCache[grade];
  }

  const expanded = buildExpandedWordsForGrade(grade);
  const selected = [...expanded];
  if (selected.length === 0) {
    return Array.from({ length: SETS_PER_GRADE }, () => ["word"]);
  }

  while (selected.length < TOTAL_WORDS_PER_GRADE) {
    selected.push(expanded[selected.length % expanded.length]);
  }

  const plannedWords = selected.slice(0, TOTAL_WORDS_PER_GRADE);
  const plan = [];

  for (let i = 0; i < SETS_PER_GRADE; i += 1) {
    const start = i * WORDS_PER_SET;
    const setWords = plannedWords.slice(start, start + WORDS_PER_SET);
    plan.push(setWords);
  }

  gradePlanCache[grade] = plan;
  return plan;
}

function getDifficultyLabel(setIndex) {
  const progress = setIndex / (SETS_PER_GRADE - 1);
  if (progress < 0.25) {
    return "Beginner";
  }
  if (progress < 0.5) {
    return "Building";
  }
  if (progress < 0.75) {
    return "Growing";
  }
  return "Advanced";
}

function generateSetWords(grade, setIndex) {
  const plan = buildGradePlan(grade);
  const safeIndex = Math.min(Math.max(setIndex, 0), SETS_PER_GRADE - 1);
  return plan[safeIndex];
}

function populateGradeOptions() {
  gradeSelect.innerHTML = "";
  Object.keys(WORDS_BY_GRADE).forEach((grade) => {
    const option = document.createElement("option");
    option.value = grade;
    option.textContent = grade;
    gradeSelect.appendChild(option);
  });
}

function populateSetOptions() {
  lessonSelect.innerHTML = "";

  for (let i = 0; i < SETS_PER_GRADE; i += 1) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = `Set ${i + 1} (${WORDS_PER_SET} words)`;
    lessonSelect.appendChild(option);
  }

  lessonSelect.value = String(state.setIndex);
}

function loadSavedSettings() {
  try {
    masteryStats = JSON.parse(localStorage.getItem(MASTERY_STORAGE_KEY) || "{}");
  } catch (_err) {
    masteryStats = {};
  }

  slowReadEnabled = localStorage.getItem(SLOW_MODE_STORAGE_KEY) === "true";
  slowModeToggle.checked = slowReadEnabled;
}

function updateMastery(word, isCorrect) {
  if (!masteryStats[word]) {
    masteryStats[word] = { seen: 0, correct: 0, missed: 0 };
  }

  masteryStats[word].seen += 1;
  if (isCorrect) {
    masteryStats[word].correct += 1;
  } else {
    masteryStats[word].missed += 1;
  }

  localStorage.setItem(MASTERY_STORAGE_KEY, JSON.stringify(masteryStats));
}

function scoreVoice(voice) {
  const name = (voice.name || "").toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang.startsWith("en-us")) {
    score += 40;
  } else if (lang.startsWith("en")) {
    score += 25;
  }

  if (voice.localService) {
    score += 18;
  }

  if (/neural|natural|enhanced|premium|siri|aria|jenny|guy|alloy/.test(name)) {
    score += 22;
  }

  if (/google us english|microsoft|samantha|daniel|zira|davis/.test(name)) {
    score += 16;
  }

  if (/novelty|whisper|robot/.test(name)) {
    score -= 30;
  }

  if (voice.default) {
    score += 6;
  }

  return score;
}

function choosePreferredVoice() {
  if (!window.speechSynthesis) {
    return;
  }

  availableVoices = speechSynthesis.getVoices() || [];
  if (!availableVoices.length) {
    return;
  }

  const english = availableVoices.filter((voice) => /^en(-|$)/i.test(voice.lang || ""));
  const pool = english.length ? english : availableVoices;
  const googleUS = pool.find((voice) => /google us english/i.test(voice.name || "") && /^en-us$/i.test(voice.lang || ""));
  if (googleUS) {
    preferredVoice = googleUS;
    return;
  }

  const enUs = pool.filter((voice) => /^en-us$/i.test(voice.lang || ""));
  if (enUs.length) {
    preferredVoice = [...enUs].sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];
    return;
  }

  preferredVoice = [...pool].sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || null;
}

function speakText(text, rate, pitch) {
  if (!window.speechSynthesis || !text) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = pitch;
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    if (preferredVoice.lang) {
      utterance.lang = preferredVoice.lang;
    }
  } else {
    utterance.lang = "en-US";
  }

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function speakCurrentWord() {
  if (!state.currentItem) {
    return;
  }

  const word = state.currentItem.word;
  const baseRate = state.grade === "Preschool" ? 0.72 : state.grade === "Kindergarten" ? 0.78 : 0.84;
  const rate = slowReadEnabled ? Math.max(0.58, baseRate - 0.2) : baseRate;
  speakText(word, rate, 1.0);
}

function showWordImage(word) {
  wordImage.src = buildWordSvgDataUrl(word);
  wordImage.alt = `Picture hint for ${word}`;
  wordImage.classList.remove("hidden");

  imageFallback.textContent = word.charAt(0).toUpperCase();
  imageFallback.classList.add("hidden");
  imageFallback.setAttribute("aria-hidden", "true");

  wordImage.onerror = () => {
    wordImage.classList.add("hidden");
    imageFallback.classList.remove("hidden");
    imageFallback.setAttribute("aria-hidden", "false");
  };
}

function updateWordBreakdown(word) {
  const syllables = splitIntoSyllableLikeParts(word);
  const chunks = splitIntoPhonicsChunks(word);
  const letters = word.split("").join(" - ");

  syllableBreakdown.textContent = syllables.join(" * ");
  phonicsBreakdown.textContent = chunks.join(" | ");
  letterBreakdown.textContent = letters;
}

function updatePracticeView() {
  if (!state.currentItem) {
    return;
  }

  const currentWord = state.currentItem.word;
  const queueRemaining = state.queue.length + 1;
  const label = state.currentItem.source === "review" ? "Practice" : "Word";
  wordDisplay.textContent = currentWord;
  lessonInfo.textContent = `${state.grade} - Set ${state.setIndex + 1} / ${SETS_PER_GRADE} - ${getDifficultyLabel(state.setIndex)}`;
  wordCounter.textContent = `${label} ${Math.min(state.baseCompleted + 1, state.baseWords.length)} / ${state.baseWords.length} | Queue ${queueRemaining}`;
  const percent = Math.max(0, Math.min(100, (state.baseCompleted / Math.max(1, state.baseWords.length)) * 100));
  progressFill.style.width = `${percent}%`;
  showWordImage(currentWord);
  updateWordBreakdown(currentWord);
}

function moveToNextWordOrComplete() {
  if (state.queue.length === 0) {
    state.currentItem = null;
    completeSet();
    return;
  }

  state.currentItem = state.queue.shift();
  updatePracticeView();
}

function startSet() {
  state.baseWords = generateSetWords(state.grade, state.setIndex);
  state.setWords = [...state.baseWords];
  state.queue = state.baseWords.map((word) => ({ word, source: "base" }));
  state.currentItem = state.queue.shift() || null;
  state.sessionStats = {};
  state.baseCompleted = 0;
  state.baseWords.forEach((word) => {
    state.sessionStats[word] = { correct: 0, missed: 0 };
  });
  state.correctCount = 0;

  practiceCard.classList.remove("hidden");
  resultCard.classList.add("hidden");
  updatePracticeView();
}

function completeSet() {
  practiceCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const isFinalSet = state.setIndex === SETS_PER_GRADE - 1;
  progressFill.style.width = "100%";

  if (isFinalSet) {
    resultTitle.textContent = "Program Complete!";
    resultText.textContent = `Awesome work. You finished all ${SETS_PER_GRADE} sets for ${state.grade}. You can redo this set or start from any set again.`;
    continueBtn.classList.add("hidden");
    return;
  }

  resultTitle.textContent = "Set Complete!";
  const totalMisses = Object.values(state.sessionStats).reduce((sum, item) => sum + item.missed, 0);
  resultText.textContent = `You finished Set ${state.setIndex + 1}. Missed attempts this set: ${totalMisses}. Continue to Set ${state.setIndex + 2} to keep learning.`;
  continueBtn.classList.remove("hidden");
}

function markCorrect() {
  if (!state.currentItem) {
    return;
  }

  const word = state.currentItem.word;
  state.correctCount += 1;
  updateMastery(word, true);
  state.sessionStats[word].correct += 1;
  if (state.currentItem.source === "base") {
    state.baseCompleted += 1;
  }

  moveToNextWordOrComplete();
}

function markNeedsPractice() {
  if (!state.currentItem) {
    return;
  }

  const word = state.currentItem.word;
  updateMastery(word, false);
  state.sessionStats[word].missed += 1;

  const repeatsToAdd = Math.min(3, state.sessionStats[word].missed);
  for (let i = 0; i < repeatsToAdd; i += 1) {
    state.queue.push({ word, source: "review" });
  }

  moveToNextWordOrComplete();
}

gradeSelect.addEventListener("change", () => {
  state.grade = gradeSelect.value;
  state.setIndex = 0;
  populateSetOptions();
});

lessonSelect.addEventListener("change", () => {
  state.setIndex = Number(lessonSelect.value);
});

slowModeToggle.addEventListener("change", () => {
  slowReadEnabled = slowModeToggle.checked;
  localStorage.setItem(SLOW_MODE_STORAGE_KEY, String(slowReadEnabled));
});

startBtn.addEventListener("click", startSet);
speakBtn.addEventListener("click", speakCurrentWord);
practiceBtn.addEventListener("click", markNeedsPractice);
correctBtn.addEventListener("click", markCorrect);

continueBtn.addEventListener("click", () => {
  if (state.setIndex < SETS_PER_GRADE - 1) {
    state.setIndex += 1;
    lessonSelect.value = String(state.setIndex);
    startSet();
  }
});

redoLessonBtn.addEventListener("click", () => {
  startSet();
});

newLessonBtn.addEventListener("click", () => {
  resultCard.classList.add("hidden");
  practiceCard.classList.add("hidden");
});

populateGradeOptions();
populateSetOptions();
loadSavedSettings();
choosePreferredVoice();
if (window.speechSynthesis && typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
  window.speechSynthesis.onvoiceschanged = choosePreferredVoice;
}

