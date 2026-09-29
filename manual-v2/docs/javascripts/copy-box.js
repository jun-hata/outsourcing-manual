/**
 * copy-box 一括コピー機能
 * .copy-box 内の pre タグのテキストをワンクリックでクリップボードにコピーします。
 */

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  let successful = false;
  try {
    successful = document.execCommand("copy");
  } catch (err) {
    console.error("Fallback copy failed", err);
  }
  document.body.removeChild(textArea);
  return successful ? Promise.resolve() : Promise.reject(new Error("Copy command failed"));
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  return fallbackCopy(text);
}

function setupCopyBoxes() {
  const boxes = document.querySelectorAll(".copy-box");
  boxes.forEach((box) => {
    // 既にボタンが追加されていればスキップ
    if (box.querySelector(".copy-btn")) return;

    const pre = box.querySelector("pre");
    if (!pre) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.setAttribute("aria-label", "テキストをコピー");
    btn.innerHTML = '<span class="copy-btn-icon">📋</span><span class="copy-btn-text">コピー</span>';

    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const text = pre.innerText.trim();
      try {
        await copyToClipboard(text);
        btn.classList.add("copied");
        btn.innerHTML = '<span class="copy-btn-icon">✅</span><span class="copy-btn-text">コピー完了</span>';

        setTimeout(() => {
          btn.classList.remove("copied");
          btn.innerHTML = '<span class="copy-btn-icon">📋</span><span class="copy-btn-text">コピー</span>';
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
        btn.classList.add("error");
        btn.innerHTML = '<span class="copy-btn-icon">⚠️</span><span class="copy-btn-text">失敗</span>';
        setTimeout(() => {
          btn.classList.remove("error");
          btn.innerHTML = '<span class="copy-btn-icon">📋</span><span class="copy-btn-text">コピー</span>';
        }, 2000);
      }
    });

    box.appendChild(btn);
  });
}

// 1. 初回ロード時（即時およびDOMContentLoaded）
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupCopyBoxes);
} else {
  setupCopyBoxes();
}

// 2. Material for MkDocs の instant loading (SPAページ遷移)
if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    setupCopyBoxes();
  });
}
