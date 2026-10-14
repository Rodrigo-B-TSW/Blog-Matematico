contenidoEntrada = `
<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Quicksand:wght@500;700&display=swap');

    .pn {
        --oceano: #0b3c5d;
        --azul: #1d7fb8;
        --aqua: #1fb6c9;
        --espuma: #e8f6fa;
        --borde: #cfe9f1;
        --coral: #ff8a73;
        font-family: 'Nunito', Arial, sans-serif;
        color: #1c3b4f;
        line-height: 1.6;
    }

    .pn h2, .pn h3, .pn .pn-head {
        font-family: 'Quicksand', 'Nunito', sans-serif;
    }

    .pn h2 {
        color: var(--oceano);
        margin-bottom: 4px;
    }

    .pn h3 {
        color: var(--azul);
        margin: 18px 0 6px;
        font-size: 16px;
    }

    .pn p {
        background: none;
        padding: 0;
        margin: 6px 0;
        font-size: 15px;
    }

    .pn .pn-intro {
        color: #4d6a7c;
    }

    .pn .pn-acciones {
        margin: 12px 0 16px;
    }

    .pn .pn-link {
        background: none;
        border: none;
        color: var(--azul);
        font-family: inherit;
        font-size: 14px;
        cursor: pointer;
        padding: 0;
        margin-right: 14px;
    }

    .pn .pn-link:hover { color: var(--aqua); text-decoration: underline; }

    /* Tarjetas desplegables */
    .pn .pn-card {
        border: 1px solid var(--borde);
        border-radius: 10px;
        margin-bottom: 12px;
        overflow: hidden;
        background: #fff;
    }

    .pn .pn-head {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        background: var(--espuma);
        border: none;
        padding: 12px 16px;
        font-size: 17px;
        font-weight: 700;
        color: var(--oceano);
        cursor: pointer;
        text-align: left;
    }

    .pn .pn-head:hover { background: #d6eff6; }

    .pn .pn-num {
        background: var(--azul);
        color: #fff;
        border-radius: 50%;
        width: 26px;
        height: 26px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        flex-shrink: 0;
    }

    .pn .pn-flecha {
        margin-left: auto;
        transition: transform 0.25s;
        color: var(--aqua);
    }

    .pn .pn-card.abierto .pn-flecha { transform: rotate(180deg); }

    .pn .pn-body {
        display: none;
        padding: 6px 18px 18px;
    }

    .pn .pn-card.abierto .pn-body { display: block; }

    /* Fórmula destacada */
    .pn .pn-formula {
        background: var(--espuma);
        border-left: 4px solid var(--aqua);
        border-radius: 4px;
        padding: 10px 14px;
        margin: 10px 0;
        font-size: 18px;
        font-weight: 700;
        color: var(--oceano);
    }

    .pn .pn-regla {
        padding-left: 20px;
        margin: 6px 0;
        font-size: 15px;
    }

    .pn .pn-error {
        border-left: 4px solid var(--coral);
        background: #fff4f1;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 14px;
        margin: 10px 0;
    }

    /* Mini calculadora */
    .pn .pn-calc {
        border: 1px dashed var(--aqua);
        border-radius: 8px;
        padding: 12px 14px;
        margin-top: 14px;
    }

    .pn .pn-calc strong { color: var(--azul); }

    .pn .pn-pista {
        display: block;
        font-size: 13px;
        color: #4d6a7c;
        margin: 4px 0 8px;
    }

    .pn .pn-calc input {
        width: 70px;
        padding: 5px 8px;
        margin: 0 8px 0 4px;
        border: 1px solid var(--borde);
        border-radius: 6px;
        font-family: inherit;
        font-size: 15px;
        color: var(--oceano);
    }

    .pn .pn-calc input:focus { outline: 2px solid var(--aqua); }

    .pn .pn-btn {
        background: var(--azul);
        color: #fff;
        border: none;
        border-radius: 6px;
        padding: 6px 14px;
        font-family: inherit;
        font-size: 14px;
        cursor: pointer;
    }

    .pn .pn-btn:hover { background: var(--aqua); }

    .pn .pn-resultado {
        margin-top: 10px;
        font-size: 15px;
        color: var(--oceano);
    }

    .pn .pn-ok { color: #1a8a6a; font-weight: 700; }
</style>

<section class="pn">
    <h2>Productos notables</h2>
    <p class="pn-intro">Son multiplicaciones de binomios que siempre siguen el mismo patrón para que puedas escribir el resultado directo sin multiplicar término por término.</p>

    <div class="pn-acciones">
        <button class="pn-link" onclick="pnTodo(true)">＋ Abrir todo</button>
        <button class="pn-link" onclick="pnTodo(false)">－ Cerrar todo</button>
    </div>

    <!-- 1. Binomio al cuadrado -->
    <div class="pn-card abierto" id="pn-c1">
        <button class="pn-head" onclick="pnToggle('pn-c1')">
            <span class="pn-num">1</span> Binomio al cuadrado <span class="pn-flecha">▾</span>
        </button>
        <div class="pn-body">
            <p>Es un binomio multiplicado por sí mismo.</p>
            <div class="pn-formula">(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></div>
            <h3>Regla</h3>
            <ul class="pn-regla">
                <li>Cuadrado del primero: a<sup>2</sup></li>
                <li>Doble producto: 2ab</li>
                <li>Cuadrado del segundo: b<sup>2</sup></li>
            </ul>
            <p>Si el signo es negativo, solo cambia el doble producto: (a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>.</p>
            <h3>Ejemplo</h3>
            <p>(x + 3)<sup>2</sup> = x<sup>2</sup> + 2(x)(3) + 3<sup>2</sup> = <strong>x<sup>2</sup> + 6x + 9</strong></p>
            <div class="pn-error"> Error común: (a + b)<sup>2</sup> <strong>no</strong> es a<sup>2</sup> + b<sup>2</sup>. ¡Falta el doble producto!</div>

            <div class="pn-calc">
                <strong> Compruébalo con tus datos</strong>
                <span class="pn-pista">Puedes escribir números y letras: 3, x, 2y, -x, x^2, (x+1)...</span>
                a = <input type="text" id="pn-cuad-a" value="x">
                b = <input type="text" id="pn-cuad-b" value="3">
                <button class="pn-btn" onclick="pnCuadrado()">Calcular</button>
                <div class="pn-resultado" id="pn-cuad-res"></div>
            </div>
        </div>
    </div>

    <!-- 2. Binomio al cubo -->
    <div class="pn-card" id="pn-c2">
        <button class="pn-head" onclick="pnToggle('pn-c2')">
            <span class="pn-num">2</span> Binomio al cubo <span class="pn-flecha">▾</span>
        </button>
        <div class="pn-body">
            <p>Es un binomio multiplicado tres veces por sí mismo.</p>
            <div class="pn-formula">(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup></div>
            <h3>Regla</h3>
            <ul class="pn-regla">
                <li>Cubo del primero: a<sup>3</sup></li>
                <li>Triple del cuadrado del primero por el segundo: 3a<sup>2</sup>b</li>
                <li>Triple del primero por el cuadrado del segundo: 3ab<sup>2</sup></li>
                <li>Cubo del segundo: b<sup>3</sup></li>
            </ul>
            <p>Con signo negativo, los signos se alternan: (a − b)<sup>3</sup> = a<sup>3</sup> − 3a<sup>2</sup>b + 3ab<sup>2</sup> − b<sup>3</sup>.</p>
            <h3>Ejemplo</h3>
            <p>(x + 2)<sup>3</sup> = x<sup>3</sup> + 3(x<sup>2</sup>)(2) + 3(x)(2<sup>2</sup>) + 2<sup>3</sup> = <strong>x<sup>3</sup> + 6x<sup>2</sup> + 12x + 8</strong></p>

            <div class="pn-calc">
                <strong>Compruébalo con tus datos</strong>
                <span class="pn-pista">Puedes escribir números y letras: 3, x, 2y, -x, x^2, (x+1)...</span>
                a = <input type="text" id="pn-cubo-a" value="x">
                b = <input type="text" id="pn-cubo-b" value="2">
                <button class="pn-btn" onclick="pnCubo()">Calcular</button>
                <div class="pn-resultado" id="pn-cubo-res"></div>
            </div>
        </div>
    </div>

    <!-- 3. Binomio con término común -->
    <div class="pn-card" id="pn-c3">
        <button class="pn-head" onclick="pnToggle('pn-c3')">
            <span class="pn-num">3</span> Binomio con término común <span class="pn-flecha">▾</span>
        </button>
        <div class="pn-body">
            <p>Dos binomios que comparten el mismo primer término (x) y tienen distinto segundo término.</p>
            <div class="pn-formula">(x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab</div>
            <h3>Regla</h3>
            <ul class="pn-regla">
                <li>Cuadrado del término común: x<sup>2</sup></li>
                <li>La suma de los términos distintos, multiplicada por x: (a + b)x</li>
                <li>El producto de los términos distintos: ab</li>
            </ul>
            <h3>Ejemplo</h3>
            <p>(x + 2)(x + 5) = x<sup>2</sup> + (2 + 5)x + (2)(5) = <strong>x<sup>2</sup> + 7x + 10</strong></p>
            <p>Con signos distintos funciona igual, solo cuida los signos: (x + 6)(x − 4) = x<sup>2</sup> + 2x − 24.</p>

            <div class="pn-calc">
                <strong> Compruébalo con tus datos</strong>
                <span class="pn-pista">Puedes escribir números y letras: 3, x, 2y, -x, x^2, (x+1)...</span>
                x = <input type="text" id="pn-com-x" value="x">
                a = <input type="text" id="pn-com-a" value="2">
                b = <input type="text" id="pn-com-b" value="5">
                <button class="pn-btn" onclick="pnComun()">Calcular</button>
                <div class="pn-resultado" id="pn-com-res"></div>
            </div>
        </div>
    </div>

    <!-- 4. Binomios conjugados -->
    <div class="pn-card" id="pn-c4">
        <button class="pn-head" onclick="pnToggle('pn-c4')">
            <span class="pn-num">4</span> Binomios conjugados <span class="pn-flecha">▾</span>
        </button>
        <div class="pn-body">
            <p>Dos binomios iguales, pero uno con suma y el otro con resta. Al multiplicarlos, el término del medio se cancela.</p>
            <div class="pn-formula">(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></div>
            <h3>Regla</h3>
            <ul class="pn-regla">
                <li>Cuadrado del primero: a<sup>2</sup></li>
                <li>Menos el cuadrado del segundo: b<sup>2</sup></li>
            </ul>
            <p>Se le llama diferencia de cuadrados.</p>
            <h3>Ejemplo</h3>
            <p>(x + 4)(x − 4) = x<sup>2</sup> − 4<sup>2</sup> = <strong>x<sup>2</sup> − 16</strong></p>

            <div class="pn-calc">
                <strong> Compruébalo con tus datos</strong>
                <span class="pn-pista">Puedes escribir números y letras: 3, x, 2y, -x, x^2, (x+1)...</span>
                a = <input type="text" id="pn-conj-a" value="x">
                b = <input type="text" id="pn-conj-b" value="4">
                <button class="pn-btn" onclick="pnConjugados()">Calcular</button>
                <div class="pn-resultado" id="pn-conj-res"></div>
            </div>
        </div>
    </div>
</section>`;


/* ============================================================
   Interactividad
   ============================================================ */

// Abre o cierra una tarjeta (agrega / quita la clase "abierto")
function pnToggle(id) {
    document.getElementById(id).classList.toggle('abierto');
}

// Abre o cierra todas las tarjetas
function pnTodo(abrir) {
    document.querySelectorAll('.pn .pn-card').forEach(function (card) {
        card.classList.toggle('abierto', abrir);
    });
}

/* ------------------------------------------------------------
   Mini álgebra: para aceptar letras necesitamos "polinomios".
   Un polinomio se guarda como un objeto donde cada término tiene:
     c = coeficiente (el número)   v = variables y sus exponentes
   Ejemplo: 6x  ->  { 'x1': { c: 6, v: { x: 1 } } }
   ------------------------------------------------------------ */

// Clave única de un monomio: las letras ordenadas con su exponente (x^2 y -> "x2y1")
function pnClave(v) {
    return Object.keys(v).sort().map(function (l) { return l + v[l]; }).join('');
}

// Elimina los términos cuyo coeficiente quedó en 0 (con tolerancia por los decimales)
function pnLimpiar(p) {
    for (var k in p) {
        if (Math.abs(p[k].c) < 1e-9) delete p[k];
    }
    return p;
}

function pnNum(n) {                       // un número, por ejemplo 3
    return n === 0 ? {} : { '': { c: n, v: {} } };
}

function pnVar(letra) {                   // una letra, por ejemplo x
    var v = {};
    v[letra] = 1;
    var p = {};
    p[pnClave(v)] = { c: 1, v: v };
    return p;
}

function pnSuma(p, q) {                   // suma términos de la misma clave
    var r = {};
    [p, q].forEach(function (poly) {
        for (var k in poly) {
            if (!r[k]) r[k] = { c: 0, v: poly[k].v };
            r[k].c += poly[k].c;
        }
    });
    return pnLimpiar(r);
}

function pnMult(p, q) {                   // cada término de p por cada término de q
    var r = {};
    for (var k1 in p) {
        for (var k2 in q) {
            var v = {};
            for (var l1 in p[k1].v) v[l1] = p[k1].v[l1];
            for (var l2 in q[k2].v) v[l2] = (v[l2] || 0) + q[k2].v[l2];   // x * x = x^2
            var k = pnClave(v);
            if (!r[k]) r[k] = { c: 0, v: v };
            r[k].c += p[k1].c * q[k2].c;
        }
    }
    return pnLimpiar(r);
}

function pnResta(p, q) { return pnSuma(p, pnMult(pnNum(-1), q)); }

function pnPot(p, n) {                    // multiplica p por sí mismo n veces
    var r = pnNum(1);
    for (var i = 0; i < n; i++) r = pnMult(r, p);
    return r;
}

// Dos polinomios son iguales si su resta no deja ningún término
function pnIguales(p, q) { return Object.keys(pnResta(p, q)).length === 0; }

// Convierte un polinomio a texto con exponentes en <sup>, de mayor a menor grado
function pnTexto(p) {
    var terminos = Object.keys(p).map(function (k) { return { k: k, t: p[k] }; });
    if (terminos.length === 0) return '0';

    function grado(t) {
        return Object.keys(t.v).reduce(function (s, l) { return s + t.v[l]; }, 0);
    }
    // Primero el de mayor grado; si empatan, el que tenga más exponente en la letra que va antes (x^2 antes que xy)
    terminos.sort(function (a, b) {
        var d = grado(b.t) - grado(a.t);
        if (d !== 0) return d;
        var letras = Object.keys(Object.assign({}, a.t.v, b.t.v)).sort();
        for (var i = 0; i < letras.length; i++) {
            var ea = a.t.v[letras[i]] || 0, eb = b.t.v[letras[i]] || 0;
            if (ea !== eb) return eb - ea;
        }
        return 0;
    });

    var html = '';
    terminos.forEach(function (item, i) {
        var t = item.t;
        var c = Math.round(t.c * 1e6) / 1e6;
        var letras = Object.keys(t.v).sort().map(function (l) {
            return l + (t.v[l] > 1 ? '<sup>' + t.v[l] + '</sup>' : '');
        }).join('');
        var numero = (Math.abs(c) === 1 && letras !== '') ? '' : String(Math.abs(c));
        if (i === 0) html += (c < 0 ? '−' : '') + numero + letras;
        else html += ' ' + (c < 0 ? '−' : '+') + ' ' + numero + letras;
    });
    return html;
}

// Evita que lo que escribe la persona se interprete como HTML
function pnEsc(texto) {
    return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ------------------------------------------------------------
   Intérprete: convierte un texto como "2x+1" en un polinomio.
   Gramática (de menor a mayor prioridad):
     expresión = término ( (+|-) término )*
     término   = factor ( [*] factor )*       <- "2x" es 2 * x (multiplicación implícita)
     factor    = (-|+) factor | potencia
     potencia  = átomo [ ^ entero ]
     átomo     = número | letra | ( expresión )
   ------------------------------------------------------------ */
function pnParsear(texto) {
    var s = texto.replace(/\s+/g, '').replace(/−/g, '-').replace(/[×·]/g, '*')
                 .replace(/²/g, '^2').replace(/³/g, '^3').replace(/,/g, '.');
    var i = 0;

    function fallo() {
        throw new Error('No entendí «' + pnEsc(texto) + '». Prueba con números y letras, por ejemplo: 3, x, 2y, -x, x^2 o (x+1).');
    }

    function expresion() {
        var p = termino();
        while (s[i] === '+' || s[i] === '-') {
            var op = s[i++];
            var q = termino();
            p = (op === '+') ? pnSuma(p, q) : pnResta(p, q);
        }
        return p;
    }

    function termino() {
        var p = factor();
        // Mientras no llegue un + , - o ), lo que sigue se multiplica (con o sin *)
        while (i < s.length && s[i] !== '+' && s[i] !== '-' && s[i] !== ')') {
            if (s[i] === '*') i++;
            p = pnMult(p, factor());
        }
        return p;
    }

    function factor() {
        if (s[i] === '-') { i++; return pnMult(pnNum(-1), factor()); }
        if (s[i] === '+') { i++; return factor(); }
        return potencia();
    }

    function potencia() {
        var base = atomo();
        if (s[i] === '^') {
            i++;
            var m = /^\d+/.exec(s.slice(i));
            if (!m) fallo();
            i += m[0].length;
            var n = parseInt(m[0], 10);
            if (n > 12) throw new Error('Usa exponentes de 12 o menos.');
            return pnPot(base, n);
        }
        return base;
    }

    function atomo() {
        var c = s[i];
        if (c === undefined) fallo();
        if (c === '(') {
            i++;
            var p = expresion();
            if (s[i] !== ')') fallo();
            i++;
            return p;
        }
        if (/[0-9.]/.test(c)) {
            var m = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i));
            if (!m) fallo();
            i += m[0].length;
            return pnNum(parseFloat(m[0]));
        }
        if (/[a-zA-Z]/.test(c)) { i++; return pnVar(c); }
        fallo();
    }

    var resultado = expresion();
    if (i < s.length) fallo();           // sobró texto que no pudimos leer
    return resultado;
}

// Muestra el resultado de la comparación: lado izquierdo vs lado derecho
// izq y der son polinomios; pasos es el texto con la fórmula ya sustituida
function pnMostrar(idRes, pasos, izq, der) {
    var igual = pnIguales(izq, der);
    document.getElementById(idRes).innerHTML =
        pasos +
        '<br>Multiplicando directo = <strong>' + pnTexto(izq) + '</strong>' +
        '<br>Usando la fórmula = <strong>' + pnTexto(der) + '</strong>' +
        (igual ? ' <span class="pn-ok"> ¡Son iguales!</span>' : ' ');
}

// Lee los inputs, los convierte en polinomios y ejecuta el cálculo de cada tema.
// Si algo sale mal (campo vacío, texto raro) muestra el mensaje de error.
function pnCorrer(idRes, ids, calcular) {
    try {
        var polys = [], textos = [];
        ids.forEach(function (id) {
            var texto = document.getElementById(id).value.trim();
            if (texto === '') throw new Error('Completa todos los campos.');
            polys.push(pnParsear(texto));
            textos.push('(' + pnEsc(texto) + ')');
        });
        var r = calcular(polys, textos);
        pnMostrar(idRes, r.pasos, r.izq, r.der);
    } catch (e) {
        document.getElementById(idRes).innerHTML = e.message;
    }
}

// (a + b)^2 = a^2 + 2ab + b^2
function pnCuadrado() {
    pnCorrer('pn-cuad-res', ['pn-cuad-a', 'pn-cuad-b'], function (p, t) {
        var A = p[0], B = p[1];
        return {
            // izq: multiplicamos el binomio por sí mismo; der: aplicamos la fórmula
            izq: pnPot(pnSuma(A, B), 2),
            der: pnSuma(pnSuma(pnPot(A, 2), pnMult(pnMult(pnNum(2), A), B)), pnPot(B, 2)),
            pasos: '(' + t[0] + ' + ' + t[1] + ')<sup>2</sup> = ' + t[0] + '<sup>2</sup> + 2' + t[0] + t[1] + ' + ' + t[1] + '<sup>2</sup>'
        };
    });
}

// (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
function pnCubo() {
    pnCorrer('pn-cubo-res', ['pn-cubo-a', 'pn-cubo-b'], function (p, t) {
        var A = p[0], B = p[1];
        var a3 = pnPot(A, 3);
        var a2b = pnMult(pnMult(pnNum(3), pnPot(A, 2)), B);
        var ab2 = pnMult(pnMult(pnNum(3), A), pnPot(B, 2));
        var b3 = pnPot(B, 3);
        return {
            izq: pnPot(pnSuma(A, B), 3),
            der: pnSuma(pnSuma(a3, a2b), pnSuma(ab2, b3)),
            pasos: '(' + t[0] + ' + ' + t[1] + ')<sup>3</sup> = ' + t[0] + '<sup>3</sup> + 3' + t[0] + '<sup>2</sup>' + t[1] +
                   ' + 3' + t[0] + t[1] + '<sup>2</sup> + ' + t[1] + '<sup>3</sup>'
        };
    });
}

// (x + a)(x + b) = x^2 + (a + b)x + ab
function pnComun() {
    pnCorrer('pn-com-res', ['pn-com-x', 'pn-com-a', 'pn-com-b'], function (p, t) {
        var X = p[0], A = p[1], B = p[2];
        return {
            izq: pnMult(pnSuma(X, A), pnSuma(X, B)),
            der: pnSuma(pnSuma(pnPot(X, 2), pnMult(pnSuma(A, B), X)), pnMult(A, B)),
            pasos: '(' + t[0] + ' + ' + t[1] + ')(' + t[0] + ' + ' + t[2] + ') = ' + t[0] + '<sup>2</sup> + (' + t[1] + ' + ' + t[2] + ')' + t[0] +
                   ' + ' + t[1] + t[2]
        };
    });
}

// (a + b)(a - b) = a^2 - b^2
function pnConjugados() {
    pnCorrer('pn-conj-res', ['pn-conj-a', 'pn-conj-b'], function (p, t) {
        var A = p[0], B = p[1];
        return {
            izq: pnMult(pnSuma(A, B), pnResta(A, B)),
            der: pnResta(pnPot(A, 2), pnPot(B, 2)),
            pasos: '(' + t[0] + ' + ' + t[1] + ')(' + t[0] + ' − ' + t[1] + ') = ' + t[0] + '<sup>2</sup> − ' + t[1] + '<sup>2</sup>'
        };
    });
}
