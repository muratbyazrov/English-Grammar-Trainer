window.Trainer = window.Trainer || {};
window.Trainer.createSpeech = function (window) {
  let speechVoices = [];
  let speechPlaybackToken = 0;

  function buildEnglishUtterance(text, options = {}) {
    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") {
      return null;
    }

    const normalized = String(text || "").trim();
    if (!normalized) return null;

    const utterance = new window.SpeechSynthesisUtterance(normalized);
    const voices = speechVoices.length ? speechVoices : window.speechSynthesis.getVoices();
    const preferredVoice = pickPreferredEnglishVoice(voices);
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang || "en-US";
    } else {
      utterance.lang = "en-US";
    }
    utterance.rate = Number.isFinite(Number(options.rate)) ? Number(options.rate) : 0.9;
    utterance.pitch = 1;
    return utterance;
  }

  function stopSpeech() {
    speechPlaybackToken += 1;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function speakEnglishText(text, { onComplete, rate } = {}) {
    const utterance = buildEnglishUtterance(text, { rate });
    if (!utterance) {
      return false;
    }

    const token = speechPlaybackToken + 1;
    speechPlaybackToken = token;

    let finished = false;
    const finish = () => {
      if (finished || token !== speechPlaybackToken) return;
      finished = true;
      if (typeof onComplete === "function") {
        onComplete();
      }
    };

    utterance.addEventListener("end", finish, { once: true });
    utterance.addEventListener("error", finish, { once: true });

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function refreshSpeechVoices() {
    if (!("speechSynthesis" in window)) {
      speechVoices = [];
      return;
    }
    speechVoices = window.speechSynthesis.getVoices() || [];
  }

  function pickPreferredEnglishVoice(voices) {
    if (!Array.isArray(voices) || !voices.length) return null;

    const preferredNamePattern = /(Google US English|Samantha|Alex|Daniel|Karen|Moira|Tessa|Serena|Jenny|Aria|Guy|Libby)/i;
    const lowQualityPattern = /(eSpeak|compact|festival|pico|robot)/i;

    const candidates = voices
      .filter((voice) => /^en[-_]/i.test(voice.lang || ""))
      .map((voice) => {
        let score = 0;
        if (/^en[-_]US/i.test(voice.lang || "")) score += 50;
        if (/^en[-_]GB/i.test(voice.lang || "")) score += 40;
        if (voice.localService) score += 8;
        if (preferredNamePattern.test(voice.name || "")) score += 25;
        if (/(Neural|Natural|Enhanced|Premium)/i.test(voice.name || "")) score += 12;
        if (lowQualityPattern.test(voice.name || "")) score -= 30;
        return { voice, score };
      })
      .sort((a, b) => b.score - a.score);

    return candidates.length ? candidates[0].voice : null;
  }

  return { stopSpeech, speakEnglishText, refreshSpeechVoices };
};
