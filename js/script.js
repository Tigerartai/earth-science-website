// js/script.js

// 展开/收起通用函数
function toggleExpandableArea(id) {
    const content = document.getElementById(id);
    const arrow = document.getElementById(`arrow-${id}`);
  
    if (!content || !arrow) return;
  
    content.classList.toggle('active');
    arrow.classList.toggle('rotated');
  }
  
  // 展开/收起首页内容
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
  
  // 导航栏高亮当前页
  (function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  })();