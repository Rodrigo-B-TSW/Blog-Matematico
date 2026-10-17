
contenidoEntrada = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Quicksand:wght@500;700&display=swap');

.fac {
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

.fac h2, .fac h3, .fac .fac-head {
    font-family: 'Quicksand', 'Nunito', sans-serif;
}

.fac h2 {
    color: var(--oceano);
    margin-bottom: 4px;
}

.fac h3 {
    color: var(--azul);
    margin: 18px 0 6px;
    font-size: 16px;
}

.fac p {
    background: none;
    padding: 0;
    margin: 6px 0;
    font-size: 15px;
}

.fac .fac-intro { color: #4d6a7c; }

.fac .fac-acciones { margin: 12px 0 16px; }

.fac .fac-link {
    background: none;
    border: none;
    color: var(--azul);
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    padding: 0;
    margin-right: 14px;
}

.fac .fac-link:hover {
    color: var(--aqua);
    text-decoration: underline;
}

.fac .fac-card {
    border: 1px solid var(--borde);
    border-radius: 10px;
    margin-bottom: 12px;
    overflow: hidden;
    background: #fff;
}

.fac .fac-head {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--espuma);
    border: none;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 700;
    color: var(--oceano);
    cursor: pointer;
    text-align: left;
}

.fac .fac-head:hover { background: #d6eff6; }

.fac .fac-num {
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

.fac .fac-flecha {
    margin-left: auto;
    transition: transform 0.25s;
    color: var(--aqua);
}

.fac .fac-card.abierto .fac-flecha {
    transform: rotate(180deg);
}

.fac .fac-body {
    display: none;
    padding: 6px 18px 18px;
}

.fac .fac-card.abierto .fac-body { display: block; }

.fac .fac-formula {
    background: var(--espuma);
    border-left: 4px solid var(--aqua);
    border-radius: 4px;
    padding: 10px 14px;
    margin: 10px 0;
    font-size: 17px;
    font-weight: 700;
    color: var(--oceano);
    overflow-wrap: anywhere;
}

.fac .fac-regla {
    padding-left: 20px;
    margin: 6px 0;
    font-size: 15px;
}

.fac .fac-paso {
    border-left: 2px solid var(--borde);
    padding: 4px 0 4px 12px;
    margin: 8px 0;
}

.fac .fac-check {
    background: #f0faf6;
    border-left: 4px solid #42aa86;
    border-radius: 4px;
    padding: 9px 12px;
    margin: 10px 0;
    font-size: 14px;
}

.fac .fac-error {
    border-left: 4px solid var(--coral);
    background: #fff4f1;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    margin: 10px 0;
}

.fac .fac-calc {
    border: 1px dashed var(--aqua);
    border-radius: 8px;
    padding: 12px 14px;
    margin-top: 14px;
}

.fac .fac-calc strong { color: var(--azul); }

.fac .fac-pista {
    display: block;
    font-size: 13px;
    color: #4d6a7c;
    margin: 4px 0 8px;
}

.fac .fac-calc input {
    width: 75px;
    max-width: 100%;
    padding: 5px 8px;
    margin: 4px;
    border: 1px solid var(--borde);
    border-radius: 6px;
    font-family: inherit;
    font-size: 15px;
    color: var(--oceano);
}

.fac .fac-calc input:focus {
    outline: 2px solid var(--aqua);
}

.fac .fac-btn {
    background: var(--azul);
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 7px 14px;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    margin: 4px 0;
}

.fac .fac-btn:hover { background: var(--aqua); }

.fac .fac-resultado {
    margin-top: 10px;
    font-size: 15px;
    color: var(--oceano);
    overflow-wrap: anywhere;
}

.fac .fac-ok { color: #1a8a6a; font-weight: 700; }
.fac .fac-aviso { color: #a35b20; font-weight: 700; }
</style>

<section class="fac">
    <h2>Factorización</h2>
    <p class="fac-intro">
        Factorizar consiste en transformar una suma o resta de términos
        algebraicos en una multiplicación de factores. Es el proceso
        inverso de desarrollar productos notables.
    </p>

    <div class="fac-formula">
        Ejemplo general: x² + 5x + 6 = (x + 2)(x + 3)
    </div>

    <p>
        Para elegir el método correcto, observa los términos, sus signos,
        sus exponentes y si comparten algún factor. Después de factorizar,
        comprueba el resultado multiplicando los factores.
    </p>

    <div class="fac-acciones">
        <button class="fac-link" onclick="facTodo(true)">＋ Abrir todo</button>
        <button class="fac-link" onclick="facTodo(false)">－ Cerrar todo</button>
    </div>

    <!-- 1. Factor común -->
    <div class="fac-card abierto" id="fac-c1">
        <button class="fac-head" onclick="facToggle('fac-c1')">
            <span class="fac-num">1</span>
            Factor común
            <span class="fac-flecha">▾</span>
        </button>
        <div class="fac-body">
            <h3>¿Cómo reconocerlo?</h3>
            <p>
                Todos los términos tienen un número, una letra o una
                expresión algebraica en común. Busca qué puedes sacar
                fuera del paréntesis.
            </p>

            <div class="fac-formula">
                ab + ac = a(b + c)
            </div>

            <h3>Procedimiento</h3>
            <ul class="fac-regla">
                <li>Encuentra el máximo factor que comparten los términos.</li>
                <li>Escribe ese factor fuera del paréntesis.</li>
                <li>Divide cada término entre el factor común y coloca
                    los resultados dentro del paréntesis.</li>
            </ul>

            <h3>Ejemplo resuelto</h3>
            <p>Factoriza: 12x³ + 18x²</p>

            <div class="fac-paso">
                <strong>Paso 1.</strong> El máximo factor común es 6x²:
                el número 6 divide a ambos coeficientes y x² es la
                menor potencia de la letra que aparece en ambos términos.
            </div>
            <div class="fac-paso">
                <strong>Paso 2.</strong> Divide cada término entre 6x².
                Así obtienes 2x y 3.
            </div>
            <div class="fac-formula">
                12x³ + 18x² = 6x²(2x + 3)
            </div>

            <h3>Comprobación</h3>
            <div class="fac-check">
                6x²(2x + 3) = 12x³ + 18x²
                <br>6x² · 2x = 12x³
                <br>6x² · 3 = 18x²
                <br><strong>Se recupera el polinomio original.</strong>
            </div>
        </div>
    </div>

    <!-- 2. Agrupación -->
    <div class="fac-card" id="fac-c2">
        <button class="fac-head" onclick="facToggle('fac-c2')">
            <span class="fac-num">2</span>
            Factor común por agrupación
            <span class="fac-flecha">▾</span>
        </button>
        <div class="fac-body">
            <h3>¿Cómo reconocerlo?</h3>
            <p>
                Suele aparecer en polinomios con cuatro términos.
                No siempre hay un factor común para todos, pero puedes
                agruparlos en pares para encontrar factores comunes
                dentro de cada grupo.
            </p>

            <div class="fac-formula">
                ax + ay + bx + by = (a + b)(x + y)
            </div>

            <h3>Procedimiento</h3>
            <ul class="fac-regla">
                <li>Separa los términos en dos grupos convenientes.</li>
                <li>Saca el factor común de cada grupo.</li>
                <li>Comprueba si aparece el mismo paréntesis en ambos.</li>
                <li>Saca ese paréntesis como factor común.</li>
            </ul>

            <h3>Ejemplo resuelto</h3>
            <p>Factoriza: x³ + 2x² + 3x + 6</p>

            <div class="fac-paso">
                <strong>Paso 1.</strong> Agrupa los dos primeros términos
                y los dos últimos:
                <br>(x³ + 2x²) + (3x + 6)
            </div>
            <div class="fac-paso">
                <strong>Paso 2.</strong> Saca el factor común de cada grupo:
                <br>x²(x + 2) + 3(x + 2)
            </div>
            <div class="fac-paso">
                <strong>Paso 3.</strong> Ambos grupos contienen (x + 2).
                Sácalo como factor común.
            </div>
            <div class="fac-formula">
                (x + 2)(x² + 3)
            </div>

            <h3>Comprobación</h3>
            <div class="fac-check">
                (x + 2)(x² + 3)
                <br>= x³ + 3x + 2x² + 6
                <br>= x³ + 2x² + 3x + 6
                <br><strong>Se recupera el polinomio original.</strong>
            </div>
        </div>
    </div>

    <!-- 3. Diferencia de cuadrados -->
    <div class="fac-card" id="fac-c3">
        <button class="fac-head" onclick="facToggle('fac-c3')">
            <span class="fac-num">3</span>
            Diferencia de cuadrados
            <span class="fac-flecha">▾</span>
        </button>
        <div class="fac-body">
            <h3>¿Cómo reconocerlo?</h3>
            <p>
                Tiene dos términos separados por una resta y ambos son
                cuadrados perfectos. Es decir, cada término puede
                escribirse como algo elevado al cuadrado.
            </p>

            <div class="fac-formula">
                a² − b² = (a + b)(a − b)
            </div>

            <h3>Procedimiento</h3>
            <ul class="fac-regla">
                <li>Identifica la raíz cuadrada de cada término.</li>
                <li>Escribe dos paréntesis con esas raíces.</li>
                <li>En uno usa suma y en el otro resta.</li>
            </ul>

            <h3>Ejemplo resuelto</h3>
            <p>Factoriza: 25y² − 81</p>

            <div class="fac-paso">
                <strong>Paso 1.</strong> Ambos términos son cuadrados:
                25y² = (5y)² y 81 = 9².
            </div>
            <div class="fac-paso">
                <strong>Paso 2.</strong> Aplica la diferencia de cuadrados.
            </div>
            <div class="fac-formula">
                25y² − 81 = (5y + 9)(5y − 9)
            </div>

            <h3>Comprobación</h3>
            <div class="fac-check">
                (5y + 9)(5y − 9)
                <br>= 25y² − 45y + 45y − 81
                <br>= 25y² − 81
                <br><strong>Los términos del medio se cancelan.</strong>
            </div>

            <div class="fac-error">
                Importante: una suma de cuadrados, como a² + b²,
                no se factoriza con esta fórmula usando números reales.
            </div>
        </div>
    </div>

    <!-- 4. Trinomio cuadrado perfecto -->
    <div class="fac-card" id="fac-c4">
        <button class="fac-head" onclick="facToggle('fac-c4')">
            <span class="fac-num">4</span>
            Trinomio cuadrado perfecto
            <span class="fac-flecha">▾</span>
        </button>
        <div class="fac-body">
            <h3>¿Cómo reconocerlo?</h3>
            <p>
                Tiene tres términos. El primero y el último son cuadrados
                perfectos, y el término del medio es el doble del producto
                de sus raíces cuadradas.
            </p>

            <div class="fac-formula">
                a² + 2ab + b² = (a + b)²
                <br>a² − 2ab + b² = (a − b)²
            </div>

            <h3>Procedimiento</h3>
            <ul class="fac-regla">
                <li>Saca la raíz cuadrada del primer término y del tercero.</li>
                <li>Multiplica esas raíces y duplica el resultado.</li>
                <li>Comprueba que coincida con el término del medio,
                    incluido su signo.</li>
                <li>Escribe un binomio al cuadrado.</li>
            </ul>

            <h3>Ejemplo resuelto</h3>
            <p>Factoriza: 4x² + 20x + 25</p>

            <div class="fac-paso">
                <strong>Paso 1.</strong> Las raíces de los extremos son
                2x y 5.
            </div>
            <div class="fac-paso">
                <strong>Paso 2.</strong> Su doble producto es
                2(2x)(5) = 20x, que coincide con el término central.
            </div>
            <div class="fac-paso">
                <strong>Paso 3.</strong> Como el término central es positivo,
                el binomio lleva suma.
            </div>
            <div class="fac-formula">
                4x² + 20x + 25 = (2x + 5)²
            </div>

            <h3>Comprobación</h3>
            <div class="fac-check">
                (2x + 5)² = (2x + 5)(2x + 5)
                <br>= 4x² + 10x + 10x + 25
                <br>= 4x² + 20x + 25
                <br><strong>Se recupera el trinomio original.</strong>
            </div>
        </div>
    </div>

    <!-- 5. Trinomio x² + bx + c -->
    <div class="fac-card" id="fac-c5">
        <button class="fac-head" onclick="facToggle('fac-c5')">
            <span class="fac-num">5</span>
            Trinomio x² + bx + c
            <span class="fac-flecha">▾</span>
        </button>
        <div class="fac-body">
            <h3>¿Cómo reconocerlo?</h3>
            <p>
                Tiene tres términos y el coeficiente de x² es 1.
                Busca dos números que sumados den el coeficiente de x
                y multiplicados den el término independiente.
            </p>

            <div class="fac-formula">
                x² + bx + c = (x + m)(x + n)
                <br>m + n = b
                <br>mn = c
            </div>

            <h3>Procedimiento</h3>
            <ul class="fac-regla">
                <li>Busca dos números que multiplicados den c.</li>
                <li>Entre esos pares, elige el que sume b.</li>
                <li>Coloca cada número en un binomio junto a x.</li>
                <li>Respeta los signos de los números encontrados.</li>
            </ul>

            <h3>Ejemplo resuelto</h3>
            <p>Factoriza: x² + 7x + 12</p>

            <div class="fac-paso">
                <strong>Paso 1.</strong> Necesitamos dos números que
                multiplicados den 12 y sumados den 7.
            </div>
            <div class="fac-paso">
                <strong>Paso 2.</strong> Esos números son 3 y 4,
                porque 3 · 4 = 12 y 3 + 4 = 7.
            </div>
            <div class="fac-formula">
                x² + 7x + 12 = (x + 3)(x + 4)
            </div>

            <h3>Comprobación</h3>
            <div class="fac-check">
                (x + 3)(x + 4)
                <br>= x² + 4x + 3x + 12
                <br>= x² + 7x + 12
                <br><strong>Se recupera el trinomio original.</strong>
            </div>
        </div>
    </div>

    <!-- 6. Trinomio ax² + bx + c -->
    <div class="fac-card" id="fac-c6">
        <button class="fac-head" onclick="facToggle('fac-c6')">
            <span class="fac-num">6</span>
            Trinomio ax² + bx + c
            <span class="fac-flecha">▾</span>
        </button>
        <div class="fac-body">
            <h3>¿Cómo reconocerlo?</h3>
            <p>
                Tiene tres términos, pero el coeficiente de x² es
                distinto de 1. Para este caso, puedes descomponer el
                término central y después agrupar.
            </p>

            <h3>Procedimiento</h3>
            <ul class="fac-regla">
                <li>Multiplica el coeficiente de x² por el término independiente.</li>
                <li>Busca dos números cuyo producto sea ese resultado
                    y cuya suma sea el coeficiente de x.</li>
                <li>Descompón el término central usando esos números.</li>
                <li>Agrupa los términos y extrae factores comunes.</li>
            </ul>

            <h3>Ejemplo resuelto</h3>
            <p>Factoriza: 6x² + 11x + 3</p>

            <div class="fac-paso">
                <strong>Paso 1.</strong> Multiplica 6 · 3 = 18.
                Necesitamos dos números que multipliquen 18 y sumen 11:
                son 9 y 2.
            </div>
            <div class="fac-paso">
                <strong>Paso 2.</strong> Descompón el término central:
                <br>6x² + 9x + 2x + 3
            </div>
            <div class="fac-paso">
                <strong>Paso 3.</strong> Agrupa y saca factores comunes:
                <br>(6x² + 9x) + (2x + 3)
                <br>3x(2x + 3) + 1(2x + 3)
            </div>
            <div class="fac-paso">
                <strong>Paso 4.</strong> Extrae el binomio común.
            </div>
            <div class="fac-formula">
                6x² + 11x + 3 = (3x + 1)(2x + 3)
            </div>

            <h3>Comprobación</h3>
            <div class="fac-check">
                (3x + 1)(2x + 3)
                <br>= 6x² + 9x + 2x + 3
                <br>= 6x² + 11x + 3
                <br><strong>Se recupera el trinomio original.</strong>
            </div>
        </div>
    </div>

    <!-- Calculadora -->
    <div class="fac-calc">
        <h3>Mini calculadora: trinomios</h3>
        <p>
            Practica la factorización de trinomios de la forma
            x² + bx + c. Introduce los valores de b y c.
            Esta herramienta busca factores enteros.
        </p>
        <span class="fac-pista">
            Ejemplo: x² + 7x + 12. Escribe b = 7 y c = 12.
        </span>

        <label for="fac-b">b = </label>
        <input type="number" id="fac-b" value="7" step="1">
        <label for="fac-c">c = </label>
        <input type="number" id="fac-c" value="12" step="1">
        <br>
        <button class="fac-btn" onclick="facCalcular()">Factorizar</button>
        <div class="fac-resultado" id="fac-res" aria-live="polite"></div>
    </div>

    <h3>¿Cómo elegir el método?</h3>
    <ul class="fac-regla">
        <li>Si todos los términos comparten un factor, intenta factor común.</li>
        <li>Si hay cuatro términos, prueba agrupación.</li>
        <li>Si hay dos cuadrados separados por una resta, usa diferencia de cuadrados.</li>
        <li>Si hay tres términos, revisa si es un trinomio cuadrado perfecto.</li>
        <li>Si el primer coeficiente es 1, prueba buscar dos números que sumen b y multipliquen c.</li>
        <li>Si el primer coeficiente es distinto de 1, prueba descomponer el término central.</li>
    </ul>

    <div class="fac-error">
        Recuerda: no todos los polinomios se factorizan con números enteros.
        Si no encuentras un método adecuado, revisa primero si existe
        un factor común y después identifica la estructura del polinomio.
    </div>
</section>
`;

/* ============================================================
   Interactividad de Factorización
   ============================================================ */

// Abre o cierra una tarjeta.
function facToggle(id) {
    var tarjeta = document.getElementById(id);
    if (tarjeta) tarjeta.classList.toggle('abierto');
}

// Abre o cierra todas las tarjetas de factorización.
function facTodo(abrir) {
    document.querySelectorAll('.fac .fac-card').forEach(function (card) {
        card.classList.toggle('abierto', abrir);
    });
}

// Busca dos enteros cuya suma sea b y cuyo producto sea c.
function facCalcular() {
    var campoB = document.getElementById('fac-b');
    var campoC = document.getElementById('fac-c');
    var resultado = document.getElementById('fac-res');

    if (!campoB || !campoC || !resultado) return;

    var b = Number(campoB.value);
    var c = Number(campoC.value);

    if (campoB.value.trim() === '' || campoC.value.trim() === '') {
        resultado.textContent = 'Completa ambos campos.';
        return;
    }

    if (!Number.isInteger(b) || !Number.isInteger(c)) {
        resultado.textContent = 'Utiliza números enteros para b y c.';
        return;
    }

    if (Math.abs(b) > 100000 || Math.abs(c) > 100000000) {
        resultado.textContent = 'Usa valores más pequeños para realizar el cálculo.';
        return;
    }

    var m = null;
    var n = null;

    for (var i = -Math.floor(Math.sqrt(Math.abs(c))) - 1;
         i <= Math.floor(Math.sqrt(Math.abs(c))) + 1; i++) {

        if (i === 0) {
            if (c === 0 && b === i) {
                m = 0;
                n = b;
                break;
            }
            continue;
        }

        if (c % i !== 0) continue;

        var j = c / i;

        if (i + j === b) {
            m = i;
            n = j;
            break;
        }
    }

    if (m === null) {
        resultado.innerHTML =
            '<span class="fac-aviso">No se encontraron dos factores enteros.</span>' +
            '<br>Este trinomio no se factoriza con dos números enteros ' +
            'que cumplan ambas condiciones.';
        return;
    }

    function termino(signo, numero) {
        if (numero < 0) return ' − ' + Math.abs(numero);
        return signo + ' ' + numero;
    }

    function binomio(numero) {
        if (numero === 0) return '(x)';
        return numero < 0
            ? '(x − ' + Math.abs(numero) + ')'
            : '(x + ' + numero + ')';
    }

    var factor1 = binomio(m);
    var factor2 = binomio(n);

    resultado.innerHTML =
        '<span class="fac-ok">Factorización encontrada:</span>' +
        '<div class="fac-formula">' + factor1 + factor2 + '</div>' +
        '<strong>Comprobación:</strong><br>' +
        'x² + (' + b + ')x + (' + c + ')' +
        '<br>= x² + (' + m + ' + ' + n + ')x + (' + m + ')(' + n + ')' +
        '<br>= x² + ' + b + 'x + ' + c +
        '<br><span class="fac-ok">La multiplicación recupera el trinomio original.</span>';
}
