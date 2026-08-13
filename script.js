/* =============================================================================
   Enterprise Linux Health Dashboard - Product Website Interactive Script
   Author: Prathap S (prathaps8675@gmail.com)
   ============================================================================= */

document.addEventListener("DOMContentLoaded", function () {
    if (window.lucide) {
        lucide.createIcons();
    }

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            faqItems.forEach((i) => i.classList.remove("active"));
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-tab");

            tabBtns.forEach((b) => b.classList.remove("active"));
            tabContents.forEach((c) => (c.style.display = "none"));

            btn.classList.add("active");
            const activeContent = document.getElementById(targetId);
            if (activeContent) {
                activeContent.style.display = "block";
            }
        });
    });

    const copyBtns = document.querySelectorAll(".copy-btn");
    copyBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const codeBlock = btn.parentElement.querySelector("code");
            if (codeBlock) {
                const textToCopy = codeBlock.innerText.trim();
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = btn.innerText;
                    btn.innerText = "✓ Copied!";
                    btn.style.background = "#10B981";
                    btn.style.color = "#ffffff";
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.background = "";
                        btn.style.color = "";
                    }, 2000);
                });
            }
        });
    });
});
