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

  // 模拟 XRF 检测（示例）
function startXRFSimulation() {
    const beam = document.getElementById('xrf-beam');
    const resultsBody = document.getElementById('results-body');
  
    // 启动模拟动画
    beam.style.opacity = 1;
    beam.style.width = '100%';
    beam.style.animation = 'scan 2s ease-in-out infinite';
  
    // 模拟数据检测
    setTimeout(() => {
      beam.style.opacity = 0;
      beam.style.animation = 'none'; // 停止动画
  
      // 模拟检测结果
      const elements = ['Al', 'Si', 'K', 'Ca', 'Fe', 'Pb'];
      const results = elements.map(element => {
        return {
          element,
          concentration: (Math.random() * 100).toFixed(2)
        };
      });
  
      // 更新表格内容
      resultsBody.innerHTML = '';
      results.forEach(result => {
        resultsBody.innerHTML += `
          <tr>
            <td>${result.element}</td>
            <td>${result.concentration}%</td>
          </tr>
        `;
      });
    }, 2000); // 2秒后显示结果
  }

  function startMicroscopeSimulation() {
    const section = document.getElementById('thin-section');
    const result = document.getElementById('microscope-result');
  
    // 模拟偏振光观察动画
    section.style.background = 'linear-gradient(45deg, #f8f9fa, #e9ecef)';
    section.style.width = '100%';
    section.style.height = '100%';
    section.style.borderRadius = '8px';
    section.style.boxShadow = '0 0 10px #007BFF inset';
  
    // 更新结果显示
    result.innerHTML = `
      <h3>🪨 观察结果</h3>
      <ul>
        <li>✅ 石英晶体方向清晰</li>
        <li>✅ 矿物边界分明</li>
        <li>✅ 偏振光干涉颜色明显</li>
      </ul>
    `;
  }

  function runGeoelectricSimulation() {
    const layers = document.querySelectorAll('.resistivity-chart .layer');
    const result = document.getElementById('geoelectric-result');
  
    // 模拟不同深度电阻率数据
    layers.forEach((layer, index) => {
      const resistivity = Math.floor(Math.random() * 100) + 30; // 30~130Ω·m
      layer.style.height = `${resistivity}px`;
      layer.style.backgroundColor = resistivity > 80 ? '#ffc107' : '#28a745';
      layer.style.transition = 'height 0.5s ease, background-color 0.5s ease';
    });
  
    // 更新结果显示
    result.innerHTML = `
      <h3>📊 测量结果</h3>
      <p>地电仪模拟测量完成，结果显示如下：</p>
      <ul>
        <li>🪨 第一层电阻率：${layers[0].style.height}Ω·m</li>
        <li>🪨 第二层电阻率：${layers[1].style.height}Ω·m</li>
        <li>🪨 第三层电阻率：${layers[2].style.height}Ω·m</li>
      </ul>
    `;
  }

  function runSoilSamplerSimulation() {
    const sampler = document.getElementById('sampler');
    const result = document.getElementById('sampler-result');
  
    // 模拟液压钻入动画
    sampler.style.top = '200px';
    sampler.style.transition = 'top 2s ease';
  
    setTimeout(() => {
      // 完成取样后返回原位
      sampler.style.top = '0px';
  
      // 更新结果显示
      result.innerHTML = `
        <h3>🪨 取样完成</h3>
        <p>✅ 已成功提取土壤样本</p>
        <p>✅ 检测到土壤重金属含量：Pb（铅）超标</p>
      `;
    }, 2000);
  }

  function runTelescopeSimulation() {
    const stars = document.querySelectorAll('.telescope-sky .star');
    const result = document.getElementById('telescope-result');
  
    // 模拟星体闪烁动画
    stars.forEach((star, index) => {
      star.style.opacity = '1';
      star.style.transform = `translateX(${Math.random() * 100 - 50}px) translateY(${Math.random() * 100 - 50}px)`;
      star.style.transition = 'all 1s ease-in-out';
    });
  
    // 模拟观测结果
    setTimeout(() => {
      result.innerHTML = `
        <h3>🌌 星体信息</h3>
        <p>✅ 观测到恒星“天狼星”，亮度：-1.46mag</p>
        <p>✅ 观测到星云“猎户座大星云”，距离：1344 光年</p>
      `;
    }, 2000);
  }