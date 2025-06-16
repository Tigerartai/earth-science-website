// js/script.js

function toggleContent() {
    const content = document.getElementById('moreContent');
    const arrow = document.getElementById('arrow');
    const btnText = document.getElementById('btnText');
  
    if (!content || !arrow || !btnText) return;
  
    content.classList.toggle('active');
    arrow.classList.toggle('rotated');
  
    if (content.classList.contains('active')) {
      btnText.textContent = '收起内容';
    } else {
      btnText.textContent = '了解更多';
    }
  }