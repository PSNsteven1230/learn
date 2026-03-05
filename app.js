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
const profileSelect = document.getElementById("profileSelect");
const newProfileBtn = document.getElementById("newProfileBtn");
const renameProfileBtn = document.getElementById("renameProfileBtn");
const dashboardSummary = document.getElementById("dashboardSummary");
const dashboardStats = document.getElementById("dashboardStats");
const dashboardFocus = document.getElementById("dashboardFocus");
const parentSidebar = document.getElementById("parentSidebar");
const toggleParentBtn = document.getElementById("toggleParentBtn");
const sentencePrompt = document.getElementById("sentencePrompt");
const celebrate = document.getElementById("celebrate");

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
  currentStageName: "",
  setWords: [],
  baseWords: [],
  queue: [],
  currentItem: null,
  sessionStats: {},
  baseCompleted: 0,
  correctCount: 0
};
let preferredVoice = null;
let availableVoices = [];
let slowReadEnabled = false;
const SLOW_MODE_STORAGE_KEY = "letslearn_slow_read";
const STORAGE_KEY = "letslearn_v2_data";
const PARENT_COLLAPSE_KEY = "letslearn_parent_collapsed";
let appData = loadAppData();

const PHONICS_PATH = {
  Preschool: [
    { name: "CVC Short Vowels", match: (w) => /^[bcdfghjklmnpqrstvwxyz][aeiou][bcdfghjklmnpqrstvwxyz]$/.test(w) },
    { name: "Early Sight Words", match: (w) => /^(a|am|an|and|the|is|it|in|to|we|you|me|my|go|up|no|yes)$/.test(w) },
    { name: "Simple 4-Letter", match: (w) => w.length === 4 },
    { name: "Digraph Intro", match: (w) => /(sh|ch|th|ck)/.test(w) },
    { name: "Mixed Review", match: () => true }
  ],
  Kindergarten: [
    { name: "Sight Word Build", match: (w) => /^(with|come|here|want|good|make|find|down|again|around|after|today|school|friend)$/.test(w) },
    { name: "Consonant Blends", match: (w) => /^(bl|br|cl|cr|dr|fl|fr|gl|gr|pl|pr|sl|sm|sn|sp|st|sw|tr)/.test(w) },
    { name: "Digraph Practice", match: (w) => /(sh|ch|th|wh|ph|ck|ng)/.test(w) },
    { name: "Long Vowel Teams", match: (w) => /(ee|ea|oa|ai|ow|ou)/.test(w) },
    { name: "Kindergarten Review", match: () => true }
  ],
  "1st Grade": [
    { name: "Vowel Teams + Digraphs", match: (w) => /(ee|ea|oa|ai|ow|ou|igh|ch|sh|th|ph|wh)/.test(w) },
    { name: "R-Controlled + Complex", match: (w) => /(ar|or|er|ir|ur|tion|sion)/.test(w) },
    { name: "Two-Syllable Focus", match: (w) => estimateSyllables(w) >= 2 },
    { name: "Academic Vocabulary", match: (w) => w.length >= 7 },
    { name: "1st Grade Review", match: () => true }
  ]
};

const SENTENCE_OVERRIDES = {
  a: "I saw a red kite today.",
  an: "I ate an apple at lunch.",
  and: "I can jump and run.",
  are: "We are ready to read.",
  is: "The dog is happy.",
  the: "The sun is bright today.",
  there: "The book is over there.",
  their: "Their dog is very friendly.",
  to: "We went to the park.",
  with: "I read with my mom.",
  because: "I smiled because the game was fun.",
  could: "I could read that word today.",
  would: "I would like to play outside.",
  should: "We should clean up now.",
  through: "We walked through the gate.",
  around: "We ran around the field.",
  under: "The cat hid under the bed.",
  before: "Wash your hands before lunch.",
  after: "We read after school.",
  between: "The ball rolled between the chairs.",
  again: "Please read that sentence again.",
  very: "The puppy is very small.",
  always: "I always put books away.",
  never: "I never run inside."
};

const FUNCTION_WORD_SENTENCES = {
  like: "I like to read with my dad.",
  down: "Please sit down on the rug.",
  up: "Put your hand up if you know it.",
  with: "I can read with my teacher.",
  here: "Come here and read this word.",
  again: "Please read that line again.",
  around: "We walked around the playground.",
  after: "We read after lunch.",
  before: "Wash your hands before snack.",
  under: "The toy is under the chair.",
  over: "The bird flew over the tree.",
  between: "The ball rolled between the cones.",
  through: "We walked through the gate.",
  because: "I smiled because I read it right.",
  could: "I could sound out that word.",
  would: "I would like another book.",
  should: "You should point to each word.",
  there: "My backpack is over there.",
  their: "Their class reads every day.",
  where: "Where is your reading folder?",
  when: "Tell me when you are ready.",
  what: "What word do you see?",
  who: "Who wants to read first?",
  why: "Why did the cat run?",
  this: "This story is fun to read.",
  that: "That page has new words.",
  these: "These books are for school.",
  those: "Those words are tricky.",
  into: "Put the card into the box.",
  from: "I learned this word from my book.",
  for: "This game is for reading practice.",
  to: "Point to each letter slowly.",
  of: "I read all of this page.",
  by: "The toy is by the chair.",
  in: "The pencil is in my bag.",
  on: "The book is on the table.",
  as: "Read this word as a team.",
  if: "Raise your hand if you know it.",
  so: "I read slowly so I understand.",
  then: "Read the word, then read the sentence.",
  than: "This word is longer than that one.",
  very: "You read that word very clearly."
};

const ADVERB_WORD_SENTENCES = {
  far: "My school is far from my house.",
  fast: "The rabbit can run fast.",
  soon: "We will read that page soon.",
  now: "We are ready to start now.",
  just: "I just finished my reading.",
  almost: "I almost know that word.",
  too: "I can read this word too."
};

const PRONOUN_WORD_SENTENCES = {
  i: "I am ready to read.",
  me: "Please read with me.",
  you: "You can read this word.",
  he: "He reads every night.",
  him: "I saw him at school.",
  she: "She read the whole page.",
  her: "I read with her after class.",
  we: "We read together every day.",
  us: "Please read this with us.",
  they: "They are reading quietly.",
  them: "I gave the books to them.",
  my: "My book is on the desk.",
  your: "Your reading is getting stronger.",
  our: "Our class reads every morning.",
  his: "His story was very funny.",
  hers: "That red folder is hers.",
  its: "The puppy wagged its tail."
};

const VERB_WORDS = new Set([
  "run", "sit", "jump", "play", "look", "come", "help", "want", "make", "find", "laugh", "bring", "clean", "drink",
  "grow", "hold", "open", "sleep", "thank", "learn", "listen", "remember", "follow", "happen", "read", "write", "walk",
  "move", "wait", "show", "tell", "think", "wonder"
]);

const ADJECTIVE_WORDS = new Set([
  "big", "small", "happy", "blue", "yellow", "green", "brown", "quiet", "quick", "pretty", "round", "little",
  "beautiful", "important", "careful", "favorite", "different", "young", "warm", "cold", "bright", "simple"
]);

const PREPOSITION_WORDS = new Set(["in", "on", "under", "over", "between", "around", "through"]);

const WORD_SOURCE = [...new Set([...Object.values(WORDS_BY_GRADE).flat(), ...REAL_WORD_BANK])]
  .map((w) => w.toLowerCase())
  .filter((w) => /^[a-z]+$/.test(w));

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

function loadAppData() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (parsed && parsed.profiles && typeof parsed.profiles === "object") {
      return parsed;
    }
  } catch (_err) {
    // ignore
  }
  return { profiles: {}, activeProfileId: "" };
}

function saveAppData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function getActiveProfile() {
  return appData.profiles[appData.activeProfileId] || null;
}

function createProfile(name) {
  const id = `p_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  appData.profiles[id] = {
    id,
    name,
    createdAt: new Date().toISOString(),
    progress: {
      Preschool: { currentSet: 0, completedSets: 0, usedWords: [] },
      Kindergarten: { currentSet: 0, completedSets: 0, usedWords: [] },
      "1st Grade": { currentSet: 0, completedSets: 0, usedWords: [] }
    },
    mastery: {},
    totals: { correct: 0, missed: 0, sessions: 0 }
  };
  appData.activeProfileId = id;
  saveAppData();
}

function ensureProfile() {
  if (!Object.keys(appData.profiles).length) {
    createProfile("Reader 1");
  }
  if (!appData.profiles[appData.activeProfileId]) {
    appData.activeProfileId = Object.keys(appData.profiles)[0];
    saveAppData();
  }
}

function populateProfiles() {
  profileSelect.innerHTML = "";
  Object.values(appData.profiles).forEach((profile) => {
    const option = document.createElement("option");
    option.value = profile.id;
    option.textContent = profile.name;
    profileSelect.appendChild(option);
  });
  profileSelect.value = appData.activeProfileId;
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

function getStageForSet(grade, setIndex) {
  const stages = PHONICS_PATH[grade];
  const block = Math.ceil(SETS_PER_GRADE / stages.length);
  return stages[Math.min(stages.length - 1, Math.floor(setIndex / block))];
}

function getSessionTick(profile, grade, setIndex) {
  const prior = GRADE_ORDER.slice(0, GRADE_ORDER.indexOf(grade))
    .reduce((sum, g) => sum + (profile.progress[g]?.completedSets || 0), 0);
  return prior + setIndex + 1;
}

function getMastery(profile, word) {
  if (!profile.mastery[word]) {
    profile.mastery[word] = {
      interval: 1,
      ease: 2.1,
      due: 0,
      streak: 0,
      seen: 0,
      correct: 0,
      missed: 0
    };
  }
  return profile.mastery[word];
}

function pickRotatingWords(list, count, seed, excluded) {
  const results = [];
  if (!list.length || count <= 0) {
    return results;
  }
  const step = [3, 5, 7, 11][seed % 4];
  const start = seed % list.length;
  for (let i = 0; i < list.length * 2 && results.length < count; i += 1) {
    const word = list[(start + i * step) % list.length];
    if (!excluded.has(word)) {
      excluded.add(word);
      results.push(word);
    }
  }
  return results;
}

function generateSetWords(grade, setIndex) {
  const profile = getActiveProfile();
  const progress = profile.progress[grade];
  const stage = getStageForSet(grade, setIndex);
  state.currentStageName = stage.name;

  const scored = scoreWordCandidates(WORD_SOURCE, grade).map((s) => s.word);
  const stageWords = scored.filter((word) => stage.match(word));
  const usedWords = new Set(progress.usedWords || []);
  const unseenStageWords = stageWords.filter((word) => !usedWords.has(word));
  const unseenScoredWords = scored.filter((word) => !usedWords.has(word));
  const sessionTick = getSessionTick(profile, grade, setIndex);

  const dueReview = Object.keys(profile.mastery)
    .filter((word) => scored.includes(word) && profile.mastery[word].due <= sessionTick)
    .sort((a, b) => profile.mastery[a].due - profile.mastery[b].due)
    .slice(0, 3);

  const selected = new Set(dueReview);
  const words = [...dueReview];
  words.push(...pickRotatingWords(unseenStageWords, WORDS_PER_SET - words.length, setIndex + 3, selected));
  words.push(...pickRotatingWords(stageWords, WORDS_PER_SET - words.length, setIndex + 11, selected));
  words.push(...pickRotatingWords(unseenScoredWords, WORDS_PER_SET - words.length, setIndex + 17, selected));
  words.push(...pickRotatingWords(scored, WORDS_PER_SET - words.length, setIndex + 29, selected));

  const finalWords = words.slice(0, WORDS_PER_SET);
  progress.usedWords = [...new Set([...(progress.usedWords || []), ...finalWords])].slice(-1200);
  saveAppData();
  return finalWords;
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
    const stage = getStageForSet(state.grade, i);
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = `Set ${i + 1} - ${stage.name}`;
    lessonSelect.appendChild(option);
  }

  const profile = getActiveProfile();
  const profileSet = profile.progress[state.grade]?.currentSet || 0;
  state.setIndex = Math.min(Math.max(profileSet, 0), SETS_PER_GRADE - 1);
  lessonSelect.value = String(state.setIndex);
}

function loadSavedSettings() {
  slowReadEnabled = localStorage.getItem(SLOW_MODE_STORAGE_KEY) === "true";
  slowModeToggle.checked = slowReadEnabled;

  const isCollapsed = localStorage.getItem(PARENT_COLLAPSE_KEY) === "true";
  parentSidebar.classList.toggle("collapsed", isCollapsed);
  toggleParentBtn.textContent = isCollapsed ? "Open" : "Close";
}

function applySpacedRepetitionResult(word, isCorrect) {
  const profile = getActiveProfile();
  const entry = getMastery(profile, word);
  const tick = getSessionTick(profile, state.grade, state.setIndex);

  entry.seen += 1;
  if (isCorrect) {
    entry.correct += 1;
    entry.streak += 1;
    entry.interval = entry.streak <= 1 ? 1 : Math.max(1, Math.round(entry.interval * entry.ease));
    entry.ease = Math.min(2.8, entry.ease + 0.05);
    entry.due = tick + entry.interval;
    profile.totals.correct += 1;
  } else {
    entry.missed += 1;
    entry.streak = 0;
    entry.interval = 1;
    entry.ease = Math.max(1.3, entry.ease - 0.2);
    entry.due = tick + 1;
    profile.totals.missed += 1;
  }
  saveAppData();
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

function triggerCelebrate() {
  celebrate.classList.remove("pop");
  void celebrate.offsetWidth;
  celebrate.classList.add("pop");
  setTimeout(() => celebrate.classList.remove("pop"), 700);
}

function buildSentencePrompt(word) {
  const normalized = word.toLowerCase();
  if (SENTENCE_OVERRIDES[normalized]) {
    return `Sentence: ${SENTENCE_OVERRIDES[normalized]}`;
  }

  if (PRONOUN_WORD_SENTENCES[normalized]) {
    return `Sentence: ${PRONOUN_WORD_SENTENCES[normalized]}`;
  }

  if (FUNCTION_WORD_SENTENCES[normalized]) {
    return `Sentence: ${FUNCTION_WORD_SENTENCES[normalized]}`;
  }

  if (ADVERB_WORD_SENTENCES[normalized]) {
    return `Sentence: ${ADVERB_WORD_SENTENCES[normalized]}`;
  }

  if (PREPOSITION_WORDS.has(normalized)) {
    if (normalized === "in") {
      return "Sentence: The toy is in the box.";
    }
    if (normalized === "on") {
      return "Sentence: The book is on the table.";
    }
    if (normalized === "over") {
      return "Sentence: The bird flew over the tree.";
    }
    return `Sentence: We went ${normalized} the park.`;
  }

  if (VERB_WORDS.has(normalized)) {
    const verbTemplates = [
      `We can ${normalized} together.`,
      `I like to ${normalized} after school.`,
      `Please ${normalized} with me.`
    ];
    return `Sentence: ${verbTemplates[hashWord(normalized) % verbTemplates.length]}`;
  }

  if (ADJECTIVE_WORDS.has(normalized)) {
    const adjectiveTemplates = [
      `The ${normalized} kite flew high.`,
      `That is a ${normalized} puppy.`,
      `I found a ${normalized} ball.`
    ];
    return `Sentence: ${adjectiveTemplates[hashWord(normalized) % adjectiveTemplates.length]}`;
  }

  if (/^(one|two|three|four|five|six|seven|eight|nine|ten)$/.test(normalized)) {
    if (normalized === "one") {
      return "Sentence: I see one duck in the pond.";
    }
    return `Sentence: I can count ${normalized} stars.`;
  }

  const isLikelyNoun = !VERB_WORDS.has(normalized) &&
    !ADJECTIVE_WORDS.has(normalized) &&
    !PREPOSITION_WORDS.has(normalized) &&
    !PRONOUN_WORD_SENTENCES[normalized] &&
    !FUNCTION_WORD_SENTENCES[normalized] &&
    !ADVERB_WORD_SENTENCES[normalized];

  if (!isLikelyNoun) {
    return `Sentence: We are practicing the word "${normalized}" in reading.`;
  }

  const nounTemplates = [
    `I see the ${normalized}.`,
    `We read about the ${normalized} today.`
  ];
  return `Sentence: ${nounTemplates[hashWord(normalized) % nounTemplates.length]}`;
}

function updateDashboard() {
  const profile = getActiveProfile();
  const totalAnswers = profile.totals.correct + profile.totals.missed;
  const accuracy = totalAnswers ? Math.round((profile.totals.correct / totalAnswers) * 100) : 0;
  const masteryEntries = Object.entries(profile.mastery);
  const masteredCount = masteryEntries.filter(([, m]) => m.streak >= 3).length;
  const focusWords = masteryEntries
    .filter(([, m]) => m.missed > m.correct)
    .sort((a, b) => (b[1].missed - b[1].correct) - (a[1].missed - a[1].correct))
    .slice(0, 5)
    .map(([word]) => word);

  dashboardSummary.textContent = `Profile: ${profile.name} | Grade: ${state.grade} | Stage: ${state.currentStageName || getStageForSet(state.grade, state.setIndex).name}`;
  dashboardStats.textContent = `Sessions: ${profile.totals.sessions} | Accuracy: ${accuracy}% | Mastered Words: ${masteredCount}`;
  dashboardFocus.textContent = focusWords.length ? `Focus Words: ${focusWords.join(", ")}` : "Focus Words: Great progress. No high-risk words right now.";
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
  lessonInfo.textContent = `${state.grade} - Set ${state.setIndex + 1} / ${SETS_PER_GRADE} - ${state.currentStageName} - ${getDifficultyLabel(state.setIndex)}`;
  wordCounter.textContent = `${label} ${Math.min(state.baseCompleted + 1, state.baseWords.length)} / ${state.baseWords.length} | Queue ${queueRemaining}`;
  const percent = Math.max(0, Math.min(100, (state.baseCompleted / Math.max(1, state.baseWords.length)) * 100));
  progressFill.style.width = `${percent}%`;
  sentencePrompt.textContent = buildSentencePrompt(currentWord);
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
  const profile = getActiveProfile();
  profile.progress[state.grade].currentSet = state.setIndex;
  saveAppData();

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
  updateDashboard();
}

function completeSet() {
  const profile = getActiveProfile();
  profile.totals.sessions += 1;
  profile.progress[state.grade].completedSets = Math.max(profile.progress[state.grade].completedSets, state.setIndex + 1);
  profile.progress[state.grade].currentSet = Math.min(SETS_PER_GRADE - 1, state.setIndex + 1);
  saveAppData();

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
  updateDashboard();
}

function markCorrect() {
  if (!state.currentItem) {
    return;
  }

  const word = state.currentItem.word;
  state.correctCount += 1;
  applySpacedRepetitionResult(word, true);
  state.sessionStats[word].correct += 1;
  if (state.currentItem.source === "base") {
    state.baseCompleted += 1;
    triggerCelebrate();
  }

  moveToNextWordOrComplete();
}

function markNeedsPractice() {
  if (!state.currentItem) {
    return;
  }

  const word = state.currentItem.word;
  applySpacedRepetitionResult(word, false);
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

profileSelect.addEventListener("change", () => {
  appData.activeProfileId = profileSelect.value;
  saveAppData();
  populateSetOptions();
  updateDashboard();
});

newProfileBtn.addEventListener("click", () => {
  const name = prompt("Enter child name:", `Reader ${Object.keys(appData.profiles).length + 1}`);
  if (!name) {
    return;
  }
  createProfile(name.trim() || "Reader");
  populateProfiles();
  populateSetOptions();
  updateDashboard();
});

renameProfileBtn.addEventListener("click", () => {
  const profile = getActiveProfile();
  const name = prompt("Rename profile:", profile.name);
  if (!name) {
    return;
  }
  profile.name = name.trim() || profile.name;
  saveAppData();
  populateProfiles();
  updateDashboard();
});

toggleParentBtn.addEventListener("click", () => {
  const nextCollapsed = !parentSidebar.classList.contains("collapsed");
  parentSidebar.classList.toggle("collapsed", nextCollapsed);
  toggleParentBtn.textContent = nextCollapsed ? "Open" : "Close";
  localStorage.setItem(PARENT_COLLAPSE_KEY, String(nextCollapsed));
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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

ensureProfile();
populateProfiles();
populateGradeOptions();
populateSetOptions();
loadSavedSettings();
choosePreferredVoice();
if (window.speechSynthesis && typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
  window.speechSynthesis.onvoiceschanged = choosePreferredVoice;
}
updateDashboard();

