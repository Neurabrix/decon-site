const nav=document.querySelector('#site-nav'),menu=document.querySelector('.menu-button');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();nav.classList.remove('open');menu.setAttribute('aria-expanded','false');target.scrollIntoView({behavior:'smooth'})}}));
window.addEventListener('scroll',()=>nav.classList.toggle('fixed',window.scrollY>780),{passive:true});
const filters=document.querySelectorAll('.filter'),sessions=document.querySelectorAll('.session');
filters.forEach(filter=>filter.addEventListener('click',()=>{filters.forEach(item=>item.classList.remove('active'));filter.classList.add('active');const topic=filter.dataset.filter;sessions.forEach(session=>session.hidden=topic!=='all'&&session.dataset.topic!==topic)}));
document.querySelectorAll('.faq-list article').forEach(item=>{const button=item.querySelector('button');button.addEventListener('click',()=>{const open=item.classList.toggle('open');button.setAttribute('aria-expanded',String(open))})});
