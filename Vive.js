function changeTab(tabNumber) {
    // Obtener todas las pestañas y contenido
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Desactivar todas las pestañas y ocultar todo el contenido
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
  
    // Activar la pestaña seleccionada y mostrar el contenido correspondiente
    tabs[tabNumber - 1].classList.add('active');
    tabContents[tabNumber - 1].classList.add('active');
  }

  //<![CDATA[
    !function(){"use strict";function e(e,t){for(var c=0,a=e.length;a>c&&!1!==t.call(e[c],c,e[c]);c++);return e}function t(e,t){e.innerHTML='<iframe allowfullscreen class="'+c.ic+'" src="'+t+'"></iframe>'}var c={c:"whale-js--tab",i:"whale-js__item",a:"is-active",ic:"whale-js--iframe"};e(document.querySelectorAll("."+c.c),function(a,i){var r=i.querySelectorAll("."+c.i),n=i.getAttribute("data-focus"),l=document.querySelector("#"+n),s=r[0];l&&(t(l,s.href),s.classList.add(c.a),e(r,function(a,i){i.addEventListener("click",function(a){a.preventDefault(),t(l,i.href),e(r,function(e,t){t.classList.remove(c.a)}),i.classList.add(c.a)})}))})}();
    //]]>