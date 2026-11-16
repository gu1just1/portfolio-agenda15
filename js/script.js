const filters=document.querySelectorAll('[data-filter]');
const projects=document.querySelectorAll('.project-item');
const status=document.querySelector('#filter-status');
filters.forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;let count=0;
 projects.forEach(project=>{const visible=filter==='todos'||project.dataset.category.split(' ').includes(filter);project.hidden=!visible;if(visible)count++});
 filters.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 status.textContent=count===1?'1 projeto exibido':count+' projetos exibidos';
}));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const sections=document.querySelectorAll('.reveal');document.documentElement.classList.add('reveal-ready');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.08});
 sections.forEach(section=>observer.observe(section));
}
document.querySelectorAll('#menuLinks .nav-link').forEach(link=>link.addEventListener('click',()=>{const menu=document.getElementById('menuLinks');if(window.bootstrap&&menu.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(menu).hide()}));
const themeButton=document.getElementById('tema');let dark=false;try{dark=localStorage.getItem('tema')==='dark'}catch(e){}function setTheme(){document.documentElement.dataset.theme=dark?'dark':'light';themeButton.textContent=dark?'Modo claro':'Modo escuro';themeButton.setAttribute('aria-pressed',String(dark))}setTheme();themeButton.addEventListener('click',()=>{dark=!dark;setTheme();try{localStorage.setItem('tema',dark?'dark':'light')}catch(e){}});
