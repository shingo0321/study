/*
 * 模擬試験エンジン(共通)。study/claude/<exam>/mock-exam/ 配下の各ページから、
 * その試験専用の mock-exam-data.js (window.MOCK_EXAM_DATA を定義) と合わせて読み込む。
 */
(function () {
  "use strict";

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // 元データの英日テキストには `code` と **bold** のみ含まれる想定。
  // 必ずHTMLエスケープしてから変換することで、"<instructions>" のような
  // 選択肢中の文字列がタグとして解釈されるのを防ぐ。
  function formatText(s) {
    var out = escapeHtml(s);
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return out;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function formatClock(totalSeconds) {
    var s = Math.max(0, Math.round(totalSeconds));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return (m < 10 ? "0" + m : m) + ":" + (r < 10 ? "0" + r : r);
  }

  var STYLE = "\n"
    + "#mock-exam-app { font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Hiragino Sans\", \"Yu Gothic\", sans-serif; }\n"
    + "#mock-exam-app .me-intro { border: 1px solid #d0d7de; border-radius: 10px; padding: 1.5rem; background: #f6f8fa; }\n"
    + "#mock-exam-app .me-intro dl { display: grid; grid-template-columns: max-content 1fr; gap: 0.3rem 1rem; margin: 1rem 0; }\n"
    + "#mock-exam-app .me-intro dt { color: #57606a; }\n"
    + "#mock-exam-app .me-intro dd { margin: 0; font-weight: 600; }\n"
    + "#mock-exam-app .me-btn { display: inline-block; padding: 0.6rem 1.4rem; border-radius: 6px; border: none; background: #0969da; color: #fff; font-size: 1rem; font-weight: 600; cursor: pointer; }\n"
    + "#mock-exam-app .me-btn:hover { background: #0757ba; }\n"
    + "#mock-exam-app .me-btn.me-btn-secondary { background: #57606a; }\n"
    + "#mock-exam-app .me-btn.me-btn-secondary:hover { background: #424a53; }\n"
    + "#mock-exam-app .me-note { color: #57606a; font-size: 0.85rem; }\n"
    + "#mock-exam-app .me-panel { position: sticky; top: 0.5rem; z-index: 5; border: 1px solid #d0d7de; border-radius: 10px; background: #fff; padding: 0.8rem 1rem; margin-bottom: 1.2rem; box-shadow: 0 2px 8px rgba(27,31,36,0.08); display: flex; flex-wrap: wrap; align-items: center; gap: 0.8rem 1.5rem; }\n"
    + "#mock-exam-app .me-panel-item { font-size: 0.9rem; color: #24292f; }\n"
    + "#mock-exam-app .me-panel-item strong { font-size: 1.05rem; }\n"
    + "#mock-exam-app .me-timer.me-timer-warn { color: #cf222e; font-weight: 700; }\n"
    + "#mock-exam-app .me-panel-spacer { flex: 1; }\n"
    + "#mock-exam-app .me-score-badge { display: inline-block; padding: 0.15rem 0.6rem; border-radius: 999px; font-weight: 700; font-size: 0.85rem; }\n"
    + "#mock-exam-app .me-score-badge.pass { background: #dafbe1; color: #116329; }\n"
    + "#mock-exam-app .me-score-badge.fail { background: #ffebe9; color: #82071e; }\n"
    + "#mock-exam-app .me-domain-table { width: 100%; border-collapse: collapse; margin: 0 0 1.2rem; font-size: 0.9rem; }\n"
    + "#mock-exam-app .me-domain-table th, #mock-exam-app .me-domain-table td { border: 1px solid #d0d7de; padding: 0.35rem 0.6rem; text-align: left; }\n"
    + "#mock-exam-app .me-domain-table th { background: #f6f8fa; }\n"
    + "#mock-exam-app .me-question { border: 1px solid #d0d7de; border-radius: 10px; padding: 1.1rem 1.2rem; margin-bottom: 1rem; }\n"
    + "#mock-exam-app .me-question-head { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; flex-wrap: wrap; }\n"
    + "#mock-exam-app .me-qnum { font-weight: 700; }\n"
    + "#mock-exam-app .me-domain-tag { font-size: 0.78rem; color: #0969da; background: #ddf4ff; padding: 0.1rem 0.5rem; border-radius: 999px; text-decoration: none; }\n"
    + "#mock-exam-app .me-domain-tag:hover { text-decoration: underline; }\n"
    + "#mock-exam-app .me-multi-hint { font-size: 0.78rem; color: #9a6700; background: #fff8c5; padding: 0.1rem 0.5rem; border-radius: 999px; }\n"
    + "#mock-exam-app .me-stem-en { margin: 0.2rem 0; font-style: italic; }\n"
    + "#mock-exam-app .me-stem-ja { margin: 0.2rem 0 0.8rem; color: #57606a; }\n"
    + "#mock-exam-app .me-options { display: flex; flex-direction: column; gap: 0.4rem; }\n"
    + "#mock-exam-app .me-option { display: flex; gap: 0.6rem; align-items: flex-start; border: 1px solid #d0d7de; border-radius: 8px; padding: 0.5rem 0.7rem; cursor: pointer; }\n"
    + "#mock-exam-app .me-option:hover { background: #f6f8fa; }\n"
    + "#mock-exam-app .me-option input { margin-top: 0.25rem; flex: none; }\n"
    + "#mock-exam-app .me-option-en { display: block; font-style: italic; }\n"
    + "#mock-exam-app .me-option-ja { display: block; color: #57606a; font-size: 0.92rem; }\n"
    + "#mock-exam-app .me-option.me-correct { border-color: #1a7f37; background: #dafbe1; }\n"
    + "#mock-exam-app .me-option.me-incorrect { border-color: #cf222e; background: #ffebe9; }\n"
    + "#mock-exam-app .me-feedback { margin-top: 0.8rem; padding-top: 0.7rem; border-top: 1px dashed #d0d7de; }\n"
    + "#mock-exam-app .me-feedback-badge { display: inline-block; font-size: 0.8rem; font-weight: 700; padding: 0.1rem 0.6rem; border-radius: 999px; margin-bottom: 0.4rem; }\n"
    + "#mock-exam-app .me-badge-correct { background: #dafbe1; color: #116329; }\n"
    + "#mock-exam-app .me-badge-incorrect { background: #ffebe9; color: #82071e; }\n"
    + "#mock-exam-app .me-badge-unanswered { background: #eaeef2; color: #57606a; }\n"
    + "#mock-exam-app .me-explanation { margin: 0; color: #24292f; }\n"
    + "@media (max-width: 640px) {\n"
    + "  #mock-exam-app .me-intro dl { grid-template-columns: 1fr; }\n"
    + "}\n";

  function injectStyle() {
    if (document.getElementById("mock-exam-style")) return;
    var style = document.createElement("style");
    style.id = "mock-exam-style";
    style.textContent = STYLE;
    document.head.appendChild(style);
  }

  function prepareAttempt(data) {
    var questions = shuffle(data.questions).map(function (q) {
      var options = shuffle(
        q.options.map(function (o) {
          return { origLetter: o.letter, en: o.en, ja: o.ja };
        })
      );
      return {
        id: q.id,
        domainLabel: q.domainLabel,
        domainLink: q.domainLink,
        stemEn: q.stemEn,
        stemJa: q.stemJa,
        options: options,
        correct: q.correct.slice(),
        explanation: q.explanation,
      };
    });
    return questions;
  }

  function renderIntro(root, data, onStart) {
    injectStyle();
    var totalMinutes = data.timeLimitMinutes;
    root.innerHTML =
      '<div class="me-intro">'
      + "<p>" + escapeHtml(data.examTitle) + " の模擬試験です。全" + data.questions.length + "問を通しで解答し、最後にまとめて自動採点します。</p>"
      + "<dl>"
      + "<dt>問題数</dt><dd>" + data.questions.length + "問</dd>"
      + "<dt>制限時間</dt><dd>" + totalMinutes + "分(自動採点あり)</dd>"
      + "<dt>合格ラインの目安</dt><dd>スケールスコア " + data.passScore + " / " + data.scoreMax + "</dd>"
      + "</dl>"
      + '<p class="me-note">出題順・選択肢の順序は開始のたびにランダムに入れ替わります。制限時間になると自動的に採点されます。スケールスコアは正答率を100〜1000の範囲に単純換算した自己学習用の目安であり、実際の採点方式(非公開)を再現するものではありません。</p>'
      + '<button type="button" class="me-btn" id="me-start-btn">模擬試験を開始する</button>'
      + "</div>";
    root.querySelector("#me-start-btn").addEventListener("click", onStart);
  }

  function optionInputType(q) {
    return q.correct.length > 1 ? "checkbox" : "radio";
  }

  function renderExam(root, data, questions, onGrade) {
    injectStyle();

    var panelHtml =
      '<div class="me-panel" id="me-panel">'
      + '<div class="me-panel-item">残り時間: <strong class="me-timer" id="me-timer">' + formatClock(data.timeLimitMinutes * 60) + "</strong></div>"
      + '<div class="me-panel-item" id="me-progress">回答済み: <strong>0</strong> / ' + questions.length + "</div>"
      + '<div class="me-panel-spacer"></div>'
      + '<button type="button" class="me-btn" id="me-grade-btn">採点する</button>'
      + "</div>";

    var questionsHtml = questions
      .map(function (q, idx) {
        var inputType = optionInputType(q);
        var multiHint =
          q.correct.length > 1
            ? '<span class="me-multi-hint">' + q.correct.length + "つ選択</span>"
            : "";
        var optionsHtml = q.options
          .map(function (o, oIdx) {
            var displayLetter = String.fromCharCode(65 + oIdx);
            return (
              '<label class="me-option" data-letter="' + o.origLetter + '">'
              + '<input type="' + inputType + '" name="q-' + q.id + '" value="' + o.origLetter + '">'
              + '<span class="me-option-text">'
              + '<span class="me-option-en">' + displayLetter + ". " + formatText(o.en) + "</span>"
              + '<span class="me-option-ja">' + formatText(o.ja) + "</span>"
              + "</span>"
              + "</label>"
            );
          })
          .join("");

        return (
          '<div class="me-question" data-qid="' + q.id + '">'
          + '<div class="me-question-head">'
          + '<span class="me-qnum">問' + (idx + 1) + "</span>"
          + '<a class="me-domain-tag" href="' + escapeHtml(q.domainLink) + '" target="_blank" rel="noopener">' + escapeHtml(q.domainLabel) + "</a>"
          + multiHint
          + "</div>"
          + '<div class="me-stem">'
          + '<p class="me-stem-en">' + formatText(q.stemEn) + "</p>"
          + '<p class="me-stem-ja">' + formatText(q.stemJa) + "</p>"
          + "</div>"
          + '<div class="me-options">' + optionsHtml + "</div>"
          + '<div class="me-feedback" hidden></div>'
          + "</div>"
        );
      })
      .join("");

    root.innerHTML = panelHtml + '<div id="me-questions">' + questionsHtml + "</div>";

    var progressStrong = root.querySelector("#me-progress strong");
    root.querySelector("#me-questions").addEventListener("change", function () {
      var answered = 0;
      questions.forEach(function (q) {
        if (root.querySelector('input[name="q-' + q.id + '"]:checked')) answered++;
      });
      progressStrong.textContent = String(answered);
    });

    root.querySelector("#me-grade-btn").addEventListener("click", function () {
      onGrade();
    });

    var timerEl = root.querySelector("#me-timer");
    var remaining = data.timeLimitMinutes * 60;
    var timerId = setInterval(function () {
      remaining -= 1;
      timerEl.textContent = formatClock(remaining);
      if (remaining <= 300) timerEl.classList.add("me-timer-warn");
      if (remaining <= 0) {
        clearInterval(timerId);
        onGrade();
      }
    }, 1000);

    return {
      stopTimer: function () {
        clearInterval(timerId);
      },
    };
  }

  function gradeExam(root, data, questions) {
    var correctCount = 0;
    var domainStats = {};

    questions.forEach(function (q) {
      var card = root.querySelector('.me-question[data-qid="' + q.id + '"]');
      var checked = Array.prototype.slice
        .call(card.querySelectorAll("input:checked"))
        .map(function (i) {
          return i.value;
        });
      var correctSet = q.correct;
      var isCorrect =
        checked.length === correctSet.length && checked.every(function (v) {
          return correctSet.indexOf(v) !== -1;
        });

      if (!domainStats[q.domainLabel]) domainStats[q.domainLabel] = { correct: 0, total: 0 };
      domainStats[q.domainLabel].total++;
      if (isCorrect) {
        domainStats[q.domainLabel].correct++;
        correctCount++;
      }

      Array.prototype.forEach.call(card.querySelectorAll(".me-option"), function (label) {
        var input = label.querySelector("input");
        input.disabled = true;
        var letter = label.getAttribute("data-letter");
        if (correctSet.indexOf(letter) !== -1) {
          label.classList.add("me-correct");
        } else if (input.checked) {
          label.classList.add("me-incorrect");
        }
      });

      var fb = card.querySelector(".me-feedback");
      fb.hidden = false;
      var badgeClass = checked.length === 0 ? "me-badge-unanswered" : isCorrect ? "me-badge-correct" : "me-badge-incorrect";
      var badgeText = checked.length === 0 ? "未回答" : isCorrect ? "正解" : "不正解";
      fb.innerHTML =
        '<span class="me-feedback-badge ' + badgeClass + '">' + badgeText + "</span>"
        + '<p class="me-explanation"><strong>解説: </strong>' + formatText(q.explanation) + "</p>";
    });

    return { correctCount: correctCount, total: questions.length, domainStats: domainStats };
  }

  function renderResultPanel(root, data, result) {
    var pct = result.correctCount / result.total;
    var scaled = Math.round(data.scoreMin + pct * (data.scoreMax - data.scoreMin));
    var pass = scaled >= data.passScore;

    var domainRows = Object.keys(result.domainStats)
      .sort()
      .map(function (label) {
        var s = result.domainStats[label];
        return "<tr><td>" + escapeHtml(label) + "</td><td>" + s.correct + " / " + s.total + "</td></tr>";
      })
      .join("");

    var panel = root.querySelector("#me-panel");
    panel.innerHTML =
      '<div class="me-panel-item">正答数: <strong>' + result.correctCount + " / " + result.total + "</strong>(" + Math.round(pct * 100) + "%)</div>"
      + '<div class="me-panel-item">スケールスコア目安: <strong>' + scaled + " / " + data.scoreMax + "</strong></div>"
      + '<div class="me-panel-item"><span class="me-score-badge ' + (pass ? "pass" : "fail") + '">' + (pass ? "合格ライン到達" : "合格ラインには未到達") + "</span></div>"
      + '<div class="me-panel-spacer"></div>'
      + '<button type="button" class="me-btn me-btn-secondary" id="me-retry-btn">もう一度挑戦する(出題順をシャッフル)</button>';

    var table = document.createElement("table");
    table.className = "me-domain-table";
    table.innerHTML = "<thead><tr><th>出題分野</th><th>正答数</th></tr></thead><tbody>" + domainRows + "</tbody>";
    panel.insertAdjacentElement("afterend", table);

    panel.querySelector("#me-retry-btn").addEventListener("click", function () {
      startAttempt(root, data);
    });

    if (typeof panel.scrollIntoView === "function") {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function startAttempt(root, data) {
    var questions = prepareAttempt(data);
    var timerHandle = renderExam(root, data, questions, function onGrade() {
      timerHandle.stopTimer();
      var result = gradeExam(root, data, questions);
      renderResultPanel(root, data, result);
    });
  }

  function init() {
    var root = document.getElementById("mock-exam-app");
    if (!root || typeof window.MOCK_EXAM_DATA === "undefined") return;
    var data = window.MOCK_EXAM_DATA;
    renderIntro(root, data, function () {
      startAttempt(root, data);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
