// 移动端菜单开合
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const shown = nav.style.display === 'flex';
    nav.style.display = shown ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!shown));
  });
}

// 年份自动更新
document.getElementById('year').textContent = new Date().getFullYear();

// 平滑滚动（可选）
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
