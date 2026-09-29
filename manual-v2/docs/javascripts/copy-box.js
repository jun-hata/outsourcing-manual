/**
 * copy-box 一括コピー機能 & スタイル自動注入
 * .copy-box 内の pre タグのテキストをワンクリックでクリップボードにコピーします。
 * CSSキャッシュの影響を受けないよう、必要なスタイルを動的注入します。
 */

(function () {
  // スタイルを head に注入（ブラウザのCSSキャッシュ対策）
  function injectStyles() {
    if (document.getElementById("copy-box-dynamic-style")) return;
    const style = document.createElement("style");
    style.id = "copy-box-dynamic-style";
    style.textContent = `
      .copy-box {
        position: relative !important;
        background: #f8fafc !important;
        border: 1px solid #cbd5e1 !important;
        border-radius: 10px !important;
        padding: 16px 18px !important;
        margin: 18px 0 !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
      }
      .copy-box pre {
        margin: 0 !important;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
        font-size: 0.95em !important;
        line-height: 1.75 !important;
        white-space: pre !important;
        overflow-x: auto !important;
        padding-right: 90px !important;
      }
      .copy-btn {
        position: absolute !important;
        top: 10px !important;
        right: 12px !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 5px !important;
        padding: 6px 13px !important;
        font-size: 0.82rem !important;
        font-weight: 600 !important;
        color: #1d4ed8 !important;
        background-color: #ffffff !important;
        border: 1px solid #93c5fd !important;
        border-radius: 6px !important;
        cursor: pointer !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
        transition: all 0.15s ease-in-out !important;
        z-index: 10 !important;
        user-select: none !important;
        font-family: inherit !important;
        line-height: 1.4 !important;
      }
      .copy-btn:hover {
        background-color: #eff6ff !important;
        border-color: #3b82f6 !important;
        color: #1e40af !important;
        box-shadow: 0 2px 6px rgba(37, 99, 235, 0.2) !important;
        transform: translateY(-1px) !important;
      }
      .copy-btn:active {
        transform: translateY(0) !important;
      }
      .copy-btn.copied {
        background-color: #ecfdf5 !important;
        border-color: #6ee7b7 !important;
        color: #047857 !important;
        box-shadow: 0 1px 3px rgba(16, 185, 129, 0.2) !important;
      }
      .copy-btn.error {
        background-color: #fef2f2 !important;
        border-color: #fca5a5 !important;
        color: #b91c1c !important;
      }
      .copy-btn-icon {
        font-size: 0.95em !important;
        line-height: 1 !important;
      }
    `;
    document.head.appendChild(style);
  }

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
    injectStyles();

    const boxes = document.querySelectorAll(".copy-box");
    boxes.forEach((box) => {
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

  // 1. 初回ロード時
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
})();
