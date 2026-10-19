(() => {
  'use strict';

  const F = FACULTAD;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const digits = (tel) => (tel || '').replace(/[^\d+]/g, '');

  // Mensaje flotante (Toast)
  function showToast(msj) {
    let t = $('#toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.append(t);
    }
    t.textContent = msj;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // Creación segura de nodos DOM
  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? '' : v);
    }
    for (const c of children.flat()) {
      if (c == null) continue;
      node.append(c.nodeType ? c : document.createTextNode(c));
    }
    return node;
  }

  // Catálogo de iconos SVG minimalistas y profesionales
  const ICONS = {
    edit: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
    trash: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
    phone: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    teams: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    clock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    pin: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    user: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  };

  /* ---------------- Cabecera y datos iniciales ---------------- */
  document.title = `${F.nombre} UANL · Guía Estudiantil`;
  $('#facultad-nombre').textContent = F.nombre;
  $('#facultad-nombre').title = F.nombreLargo;
  $('#bienvenida').textContent = F.bienvenida;
  $('#conmutador-top').innerHTML = `${ICONS.phone} ${F.atencion.conmutador}`;
  $('#conmutador-top').href = `tel:${digits(F.atencion.conmutador)}`;
  $('#direccion').textContent = F.ubicacion.direccion;
  $('#btn-llegar').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(F.ubicacion.consulta)}`;

  // Horarios de atención rápida
  $('#horario-ventanillas').textContent = F.atencion.ventanillas;
  $('#horario-cajas').textContent = F.atencion.cajas;
  $('#conmutador-info').textContent = F.atencion.conmutador;

  /* ---------------- Navegación por pestañas ---------------- */
  const VIEWS = ['inicio', 'mapa', 'contactos', 'guia'];

  function show(name) {
    if (!VIEWS.includes(name)) name = 'inicio';
    VIEWS.forEach((v) => {
      const sec = $(`#view-${v}`);
      if (sec) sec.hidden = v !== name;
    });
    $$('.tabbar a').forEach((a) => {
      if (a.dataset.tab === name) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }
  const route = () => show(location.hash.slice(1));
  window.addEventListener('hashchange', route);

  /* ---------------- Inicio: Calendario Oficial de Fechas ---------------- */
  const MESES_MAP = {
    8: 'AGO', 9: 'SEP', 10: 'OCT', 11: 'NOV', 12: 'DIC'
  };
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const fechasUl = $('#fechas');
  let mesActivo = 'todos';

  function renderFechas() {
    if (!fechasUl) return;
    const filtradas = F.fechas.filter((f) =>
      mesActivo === 'todos' || String(f.mesNum) === mesActivo
    );

    fechasUl.replaceChildren(...filtradas.map((f) => {
      let isPast = false;
      if (f.fechaInicio) {
        const [y, m, d] = f.fechaInicio.split('-').map(Number);
        isPast = new Date(y, m - 1, d) < hoy;
      }
      const nombreMes = MESES_MAP[f.mesNum] || f.mes.toUpperCase();

      return el('li', { class: isPast ? 'past' : '' },
        el('div', { class: 'd' },
          el('b', {}, f.dia),
          el('small', {}, nombreMes)
        ),
        el('div', { class: 'date-info' },
          el('div', { class: 'date-meta-row' },
            el('span', { class: `tipo-tag ${f.tipo}` }, f.tipoEtiqueta)
          ),
          el('p', { class: 'date-text' }, f.texto)
        )
      );
    }));

    if (!filtradas.length) {
      fechasUl.replaceChildren(
        el('li', { class: 'muted card' }, 'No hay eventos registrados en este mes.')
      );
    }
  }

  $$('.month-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.month-tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      mesActivo = btn.dataset.mes || 'todos';
      renderFechas();
    });
  });
  renderFechas();

  /* ---------------- Inicio: Gestor de Tareas y Pendientes Editable ---------------- */
  const KEY_TAREAS = 'fime-guia:tareas-v3';

  // Obtener tareas o inicializar con las sugeridas
  function cargarTareas() {
    try {
      const guardadas = JSON.parse(localStorage.getItem(KEY_TAREAS));
      if (Array.isArray(guardadas) && guardadas.length) return guardadas;
    } catch { /* ignorar */ }
    // Tareas por defecto de FIME
    return (F.pendientesSugeridos || []).map((txt, idx) => ({
      id: Date.now() + '-' + idx,
      texto: txt,
      completada: false
    }));
  }

  let listaTareas = cargarTareas();
  let filtroTareas = 'all'; // 'all', 'pending', 'completed'

  function guardarTareas() {
    try {
      localStorage.setItem(KEY_TAREAS, JSON.stringify(listaTareas));
    } catch { /* sin almacenamiento */ }
  }

  function actualizarProgresoTareas() {
    const total = listaTareas.length;
    const completadas = listaTareas.filter((t) => t.completada).length;
    const pendientes = total - completadas;
    const porcentaje = total ? Math.round((completadas / total) * 100) : 0;

    $('#task-counter').textContent = `${completadas} de ${total} completadas`;
    $('#task-percent').textContent = `${porcentaje}%`;
    const barra = $('#progress-bar');
    if (barra) barra.style.width = `${porcentaje}%`;

    $('#count-all').textContent = String(total);
    $('#count-pending').textContent = String(pendientes);
    $('#count-completed').textContent = String(completadas);
  }

  const checkUl = $('#checklist');
  const taskEmpty = $('#task-empty');

  function renderTareas() {
    if (!checkUl) return;

    const filtradas = listaTareas.filter((t) => {
      if (filtroTareas === 'pending') return !t.completada;
      if (filtroTareas === 'completed') return t.completada;
      return true;
    });

    checkUl.replaceChildren(...filtradas.map((t) => {
      const li = el('li', { class: `task-item ${t.completada ? 'completed' : ''}`, 'data-id': t.id });

      // Checkbox y texto
      const chk = el('input', {
        type: 'checkbox',
        class: 'task-checkbox',
        'aria-label': `Marcar como completada: ${t.texto}`
      });
      chk.checked = t.completada;

      const span = el('span', { class: 'task-label' }, t.texto);
      const mainDiv = el('div', { class: 'task-main' }, chk, span);

      // Alternar completada
      const toggle = () => {
        t.completada = !t.completada;
        guardarTareas();
        actualizarProgresoTareas();
        renderTareas();
      };
      chk.addEventListener('change', toggle);
      span.addEventListener('click', toggle);

      // Botón Editar
      const btnEdit = el('button', {
        type: 'button',
        class: 'task-icon-btn',
        title: 'Editar tarea',
        'aria-label': `Editar tarea: ${t.texto}`,
        html: ICONS.edit,
        onclick: (e) => {
          e.stopPropagation();
          activarEdicionTarea(li, t);
        }
      });

      // Botón Eliminar
      const btnDel = el('button', {
        type: 'button',
        class: 'task-icon-btn delete',
        title: 'Eliminar tarea',
        'aria-label': `Eliminar tarea: ${t.texto}`,
        html: ICONS.trash,
        onclick: (e) => {
          e.stopPropagation();
          eliminarTarea(t.id);
        }
      });

      const btnGroup = el('div', { class: 'task-btn-group' }, btnEdit, btnDel);
      li.append(mainDiv, btnGroup);
      return li;
    }));

    if (taskEmpty) taskEmpty.hidden = filtradas.length > 0;
    actualizarProgresoTareas();
  }

  function activarEdicionTarea(liNode, tarea) {
    const editInput = el('input', {
      type: 'text',
      class: 'task-edit-input',
      value: tarea.texto,
      maxlength: '120',
      required: true
    });

    const btnSave = el('button', {
      type: 'button',
      class: 'task-edit-btn save',
      onclick: () => guardarEdicion()
    }, 'Guardar');

    const btnCancel = el('button', {
      type: 'button',
      class: 'task-edit-btn cancel',
      onclick: () => renderTareas()
    }, 'Cancelar');

    function guardarEdicion() {
      const nuevoTexto = editInput.value.trim();
      if (!nuevoTexto) return;
      tarea.texto = nuevoTexto;
      guardarTareas();
      renderTareas();
      showToast('Tarea actualizada');
    }

    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        guardarEdicion();
      } else if (e.key === 'Escape') {
        renderTareas();
      }
    });

    const editRow = el('div', { class: 'task-edit-row' }, editInput, btnSave, btnCancel);
    liNode.replaceChildren(editRow);
    editInput.focus();
  }

  function agregarTarea(texto) {
    const limp = (texto || '').trim();
    if (!limp) return;
    listaTareas.unshift({
      id: Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      texto: limp,
      completada: false
    });
    guardarTareas();
    renderTareas();
    showToast('Tarea agregada');
  }

  function eliminarTarea(id) {
    listaTareas = listaTareas.filter((t) => t.id !== id);
    guardarTareas();
    renderTareas();
    showToast('Tarea eliminada');
  }

  // Formulario agregar tarea
  $('#task-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#task-input');
    if (!input) return;
    agregarTarea(input.value);
    input.value = '';
    input.focus();
  });

  // Filtros de tarea
  $$('.task-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.task-filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filtroTareas = btn.dataset.filter || 'all';
      renderTareas();
    });
  });

  // Restablecer tareas a las oficiales de FIME
  $('#btn-reset-tasks')?.addEventListener('click', () => {
    if (confirm('¿Deseas restablecer la lista con las tareas sugeridas de FIME?')) {
      listaTareas = (F.pendientesSugeridos || []).map((txt, idx) => ({
        id: Date.now() + '-' + idx,
        texto: txt,
        completada: false
      }));
      guardarTareas();
      renderTareas();
      showToast('Lista restablecida');
    }
  });

  // Limpiar toda la lista
  $('#btn-clear-tasks')?.addEventListener('click', () => {
    if (confirm('¿Deseas borrar todas las tareas de la lista?')) {
      listaTareas = [];
      guardarTareas();
      renderTareas();
      showToast('Lista vaciada');
    }
  });

  renderTareas();

  /* ---------------- Mapa interactivo FIME ---------------- */
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const VB_W = 1024, VB_H = 853;
  const svgEl = (tag, attrs = {}) => {
    const n = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };

  const wrap = $('#map-wrap');
  let svg = null;
  const grupos = new Map();

  if (wrap) {
    svg = svgEl('svg', {
      viewBox: `0 0 ${VB_W} ${VB_H}`,
      role: 'group',
      'aria-label': `Plano de ${F.nombreLargo}`
    });
    svg.append(svgEl('image', { href: F.mapa, x: '0', y: '0', width: String(VB_W), height: String(VB_H) }));

    F.lugares.forEach((l) => {
      const r = svgEl('rect', {
        class: 'bld',
        'data-id': l.id,
        x: String(l.x),
        y: String(l.y),
        width: String(l.w),
        height: String(l.h),
        rx: '6',
        tabindex: '0',
        role: 'button',
        'aria-label': l.nombre
      });
      r.addEventListener('click', () => selectPlace(l.id, false));
      r.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectPlace(l.id, false);
        }
      });
      grupos.set(l.id, r);
      svg.append(r);
    });
    wrap.replaceChildren(svg);
  }

  // Control de zoom
  const ZOOM_INICIAL = 2, ZOOM_MAX = 4;
  let zoom = 1;

  function setZoom(z, focus) {
    if (!svg || !wrap) return;
    const prev = zoom;
    zoom = Math.min(ZOOM_MAX, Math.max(1, z));
    const cx = wrap.scrollLeft + wrap.clientWidth / 2;
    const cy = wrap.scrollTop + wrap.clientHeight / 2;
    svg.style.width = `${zoom * 100}%`;
    if (!focus) {
      const k = zoom / prev;
      wrap.scrollLeft = cx * k - wrap.clientWidth / 2;
      wrap.scrollTop = cy * k - wrap.clientHeight / 2;
    }
  }

  setZoom(ZOOM_INICIAL, true);
  $('#zoom-in')?.addEventListener('click', () => setZoom(zoom + 0.5));
  $('#zoom-out')?.addEventListener('click', () => setZoom(zoom - 0.5));
  $('#zoom-reset')?.addEventListener('click', () => { setZoom(ZOOM_INICIAL, true); wrap.scrollTo(0, 0); });

  const info = $('#place-info');

  function selectPlace(id, fromList) {
    const l = F.lugares.find((p) => p.id === id);
    if (!l) return;
    grupos.forEach((g, gid) => g.classList.toggle('sel', gid === id));

    if (zoom < 2) setZoom(2, true);
    if (svg && wrap) {
      const w = svg.getBoundingClientRect().width;
      const scale = w / VB_W;
      wrap.scrollTo({
        left: (l.x + l.w / 2) * scale - wrap.clientWidth / 2,
        top: (l.y + l.h / 2) * scale - wrap.clientHeight / 2,
        behavior: 'smooth'
      });
    }

    if (info) {
      info.replaceChildren(
        el('h3', {}, l.nombre),
        el('p', {}, l.desc),
        l.horario ? el('p', { class: 'muted meta-icon-row', html: `${ICONS.clock} <span>Horario: ${l.horario}</span>` }) : null,
        l.tel ? el('div', { class: 'row' },
          el('a', { class: 'btn btn-call', href: `tel:${digits(l.tel)}`, html: `${ICONS.phone} <span>Llamar ${l.tel}</span>` })) : null
      );
    }
    if (fromList && wrap) wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Lista de lugares filtrable
  const listaLugares = $('#place-list');
  function renderLugares(q = '') {
    if (!listaLugares) return;
    const nq = norm(q);
    const filtrados = F.lugares.filter((l) => norm(`${l.nombre} ${l.desc} ${l.corto}`).includes(nq));
    listaLugares.replaceChildren(...filtrados.map((l) =>
      el('li', {},
        el('button', { type: 'button', onclick: () => selectPlace(l.id, true) },
          el('span', { class: 'badge' }, l.corto),
          el('span', {}, l.nombre)
        )
      )
    ));
    if (!filtrados.length) {
      listaLugares.append(el('li', { class: 'muted card' }, 'No se encontraron lugares con ese término.'));
    }
  }
  renderLugares();
  $('#buscar-lugar')?.addEventListener('input', (e) => renderLugares(e.target.value));

  /* ---------------- Nomenclatura de salones ---------------- */
  const salonInput = $('#salon-input');
  const salonOut = $('#salon-resultado');
  const salonBtn = $('#salon-ver');
  let salonEdificio = null;

  salonInput?.addEventListener('input', () => {
    const v = salonInput.value.replace(/\D/g, '').slice(0, 4);
    salonInput.value = v;
    if (salonBtn) salonBtn.hidden = true;
    salonEdificio = null;

    if (v.length < 4) {
      if (salonOut) salonOut.textContent = 'Escribe los 4 dígitos (ejemplo: 2103).';
      return;
    }
    const [ed, piso, n] = [v[0], v[1], v.slice(2)];
    const lugar = F.lugares.find((l) => l.id === `e${ed}`);

    if (salonOut) {
      salonOut.textContent = `Edificio ${ed}, piso ${piso}, aula ${n}.` +
        (lugar ? '' : ' (Nota: si es un edificio de dos dígitos o laboratorio, puede ser una excepción).');
    }
    if (lugar && salonBtn) {
      salonEdificio = lugar.id;
      salonBtn.hidden = false;
      salonBtn.textContent = `Ver ${lugar.nombre} en el mapa`;
    }
  });

  salonBtn?.addEventListener('click', () => {
    if (salonEdificio) selectPlace(salonEdificio, true);
  });
  $('#salon-form')?.addEventListener('submit', (e) => e.preventDefault());

  /* ---------------- Directorio institucional de contactos ---------------- */
  const contenedorContactos = $('#contactos-lista');

  function copiarTexto(txt, etiqueta) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(() => {
        showToast(`¡Código Teams copiado: ${txt}!`);
      }).catch(() => {
        prompt('Copia este código de Teams:', txt);
      });
    } else {
      prompt('Copia este código de Teams:', txt);
    }
  }

  function tarjetaContacto(c) {
    const elementosMeta = [];
    if (c.titular) elementosMeta.push(el('p', { class: 'titular meta-icon-row', html: `${ICONS.user} <span>Titular: ${c.titular}</span>` }));
    if (c.detalle) elementosMeta.push(el('p', { class: 'meta' }, c.detalle));
    if (c.extension) elementosMeta.push(el('p', { class: 'meta meta-icon-row', html: `${ICONS.phone} <span>Conmutador FIME: Extensión ${c.extension}</span>` }));
    if (c.horario) elementosMeta.push(el('p', { class: 'meta meta-icon-row', html: `${ICONS.clock} <span>Horario: ${c.horario}</span>` }));
    if (c.lugar) elementosMeta.push(el('p', { class: 'meta meta-icon-row', html: `${ICONS.pin} <span>Ubicación: ${c.lugar}</span>` }));

    const acciones = el('div', { class: 'actions' });

    (c.tels || []).forEach((t) => {
      acciones.append(el('a', { class: 'btn btn-call', href: `tel:${digits(t)}`, html: `${ICONS.phone} <span>Llamar ${t}</span>` }));
    });

    (c.correos || []).forEach((m) => {
      acciones.append(el('a', { class: 'btn ghost mail', href: `mailto:${m}`, html: `${ICONS.mail} <span>${m}</span>` }));
    });

    if (c.teams) {
      acciones.append(el('button', {
        type: 'button',
        class: 'btn btn-teams',
        html: `${ICONS.teams} <span>Teams: ${c.teams} (Copiar)</span>`,
        onclick: () => copiarTexto(c.teams, c.nombre)
      }));
    }

    return el('article', { class: 'card contact' },
      el('h3', {}, c.nombre),
      ...elementosMeta,
      acciones
    );
  }

  function renderContactos(q = '') {
    if (!contenedorContactos) return;
    const nq = norm(q);
    const bloques = F.contactos.map((g) => {
      const items = g.items.filter((c) => {
        if (!nq) return true;
        const textoCompleto = [
          g.grupo, c.nombre, c.titular, c.detalle, c.lugar, c.extension, c.teams,
          ...(c.correos || []), ...(c.tels || [])
        ].filter(Boolean).join(' ');
        return norm(textoCompleto).includes(nq);
      });
      if (!items.length) return null;
      return el('section', { class: 'group' },
        el('h2', {}, g.grupo),
        items.map(tarjetaContacto)
      );
    }).filter(Boolean);

    contenedorContactos.replaceChildren(...bloques);
    const vacio = $('#contactos-vacio');
    if (vacio) vacio.hidden = bloques.length > 0;
  }
  renderContactos();
  $('#buscar-contacto')?.addEventListener('input', (e) => renderContactos(e.target.value));

  /* ---------------- Guía Integral de Gestión Académica ---------------- */
  const contenedorGuias = $('#guias-lista');
  const tabsGuia = $$('.guide-tab-btn');
  let categoriaGuiaActiva = 'todas';

  function renderGuias() {
    if (!contenedorGuias) return;
    const filtradas = F.guias.filter((g) =>
      categoriaGuiaActiva === 'todas' || g.categoria === categoriaGuiaActiva
    );

    contenedorGuias.replaceChildren(...filtradas.map((g) => {
      const details = el('details', { class: 'card guide-card' },
        el('summary', {}, g.titulo),
        el('div', { class: 'guide-body' },
          el('p', { class: 'muted' }, g.resumen),
          el('div', { html: g.contenidoHtml })
        )
      );
      return details;
    }));
  }

  tabsGuia.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabsGuia.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      categoriaGuiaActiva = btn.dataset.cat || 'todas';
      renderGuias();
    });
  });
  renderGuias();

  // Preguntas frecuentes (FAQ)
  const faqDiv = $('#faq');
  if (faqDiv) {
    faqDiv.replaceChildren(...F.faq.map(({ q, a }) =>
      el('details', { class: 'card faq-box' },
        el('summary', {}, q),
        el('p', {}, a)
      )
    ));
  }

  // Enlaces oficiales
  const enlacesUl = $('#enlaces');
  if (enlacesUl) {
    enlacesUl.replaceChildren(...F.enlaces.map(({ texto, url }) =>
      el('li', {},
        el('a', { href: url, target: '_blank', rel: 'noopener noreferrer' }, texto)
      )
    ));
  }

  /* ---------------- Arranque y Modo Offline ---------------- */
  route();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* soporte offline opcional */ });
  }
})();
