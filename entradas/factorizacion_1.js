const contenidoEntrada = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;600;700&display=swap');

.fac {
  --oceano: #0b3c5d;
  --azul: #1d7fb8;
  --aqua: #1fb6c9;
  --espuma: #e8f6fa;
  --borde: #cfe9f1;
  --coral: #ff8a73;

  font-family: 'Nunito', sans-serif;
  color: #203746;
  line-height: 1.7;
}

.fac * {
  box-sizing: border-box;
}

.fac h2,
.fac h3,
.fac h4 {
  font-family: 'Quicksand', sans-serif;
  color: var(--oceano);
}

.fac .fac-intro {
  padding: 20px;
  background: var(--espuma);
  border: 1px solid var(--borde);
  border-radius: 16px;
  margin-bottom: 22px;
}

.fac .fac-intro h2 {
  margin-top: 0;
}

.fac .fac-card {
  margin: 16px 0;
  border: 1px solid var(--borde);
  border-radius: 15px;
  overflow: hidden;
  background: white;
  box-shadow: 0 3px 10px rgba(11, 60, 93, 0.05);
}

.fac .fac-head {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border: none;
  background: #f7fcfd;
  color: var(--oceano);
  font-family: 'Quicksand', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s;
}

.fac .fac-head:hover {
  background: var(--espuma);
}

.fac .fac-num {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--oceano);
  color: white;
  font-weight: 800;
}

.fac .fac-titulo {
  flex: 1;
}

.fac .fac-flecha {
  color: var(--azul);
  font-size: 1.3rem;
  transition: transform 0.2s;
}

.fac .fac-card.abierto .fac-flecha {
  transform: rotate(180deg);
}

.fac .fac-body {
  display: none;
  padding: 20px;
  border-top: 1px solid var(--borde);
}

.fac .fac-card.abierto .fac-body {
  display: block;
}

.fac .fac-body h3 {
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.fac .fac-body h3:first-child {
  margin-top: 0;
}

.fac p {
  margin: 8px 0;
}

.fac .fac-formula {
  padding: 15px;
  margin: 14px 0;
  text-align: center;
  background: var(--espuma);
  border: 1px solid var(--borde);
  border-left: 4px solid var(--aqua);
  border-radius: 10px;
  color: var(--oceano);
  font-size: 1.1rem;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.fac .fac-regla {
  padding-left: 22px;
  margin: 10px 0;
}

.fac .fac-regla li {
  margin-bottom: 8px;
}

.fac .fac-paso {
  padding: 12px 14px;
  margin: 10px 0;
  border: 1px solid var(--borde);
  border-radius: 10px;
}

.fac .fac-paso strong {
  color: var(--azul);
}

.fac .fac-check {
  padding: 14px 16px;
  margin: 14px 0;
  border-left: 4px solid #3b9b78;
  background: #f1faf5;
  border-radius: 0 10px 10px 0;
}

.fac .fac-check strong {
  color: #267452;
}

.fac .fac-aviso {
  padding: 14px 16px;
  margin: 14px 0;
  background: #fff7f2;
  border-left: 4px solid var(--coral);
  border-radius: 0 10px 10px 0;
}

.fac .fac-aviso strong {
  color: #a94d3b;
}

.fac .fac-estrategia {
  padding: 20px;
  margin-top: 25px;
  background: #f7fcfd;
  border: 1px solid var(--borde);
  border-radius: 16px;
}

.fac .fac-estrategia h2 {
  margin-top: 0;
}

.fac .fac-ida {
  padding: 16px;
  margin: 14px 0;
  border: 1px solid var(--borde);
  border-radius: 12px;
  background: white;
}

.fac .fac-ida h3 {
  margin-top: 0;
}

.fac .fac-etiqueta {
  display: inline-block;
  margin-bottom: 8px;
  padding: 4px 10px;
  border-radius: 20px;
  background: var(--espuma);
  color: var(--oceano);
  font-size: 0.85rem;
  font-weight: 800;
}

.fac .fac-final {
  padding: 15px;
  margin-top: 18px;
  text-align: center;
  background: var(--oceano);
  color: white;
  border-radius: 12px;
  font-weight: 700;
}

@media (max-width: 600px) {
  .fac .fac-body {
    padding: 14px;
  }

  .fac .fac-head {
    padding: 13px;
  }

  .fac .fac-formula {
    font-size: 1rem;
  }
}
</style>

<section class="fac">

  <div class="fac-intro">
    <h2>Factorización I</h2>

    <p>
      Factorizar consiste en transformar una expresión algebraica en una
      multiplicación de factores más sencillos. Es el proceso inverso de
      desarrollar productos notables.
    </p>

    <p>
      En esta entrada estudiaremos tres casos: factor común, trinomio
      cuadrado perfecto y diferencia de cuadrados. Aprenderemos a reconocer
      cada uno, aplicar su procedimiento y comprobar el resultado.
    </p>

    <div class="fac-formula">
      Factorizar: convertir una expresión en un producto de factores.
    </div>

    <p>
      Abre cada apartado para consultar su explicación y ejemplo resuelto.
    </p>
  </div>

  <div class="fac-card abierto">
    <button class="fac-head" onclick="facToggle(this)">
      <span class="fac-num">1</span>
      <span class="fac-titulo">Factor común</span>
      <span class="fac-flecha">⌄</span>
    </button>

    <div class="fac-body">
      <h3>¿Cómo reconocerlo?</h3>

      <p>
        Existe un factor común cuando todos los términos de una expresión
        comparten un número, una variable o una combinación de ambos.
        Ese factor se puede extraer y escribir fuera de un paréntesis.
      </p>

      <div class="fac-formula">
        ab + ac = a(b + c)
      </div>

      <h3>Procedimiento</h3>

      <div class="fac-paso">
        <strong>Paso 1.</strong> Busca el mayor número que divide a todos
        los coeficientes y las variables que aparecen en todos los términos.
      </div>

      <div class="fac-paso">
        <strong>Paso 2.</strong> Escribe el factor común fuera del
        paréntesis.
      </div>

      <div class="fac-paso">
        <strong>Paso 3.</strong> Divide cada término de la expresión
        original entre el factor común y coloca los resultados dentro
        del paréntesis.
      </div>

      <h3>Ejemplo resuelto</h3>

      <p>Factoriza la expresión:</p>

      <div class="fac-formula">
        15x⁴ + 25x³
      </div>

      <div class="fac-paso">
        <strong>Paso 1.</strong> El máximo factor común de 15 y 25 es 5.
        En cuanto a las variables, la menor potencia compartida es x³.
        Por tanto, el factor común es 5x³.
      </div>

      <div class="fac-paso">
        <strong>Paso 2.</strong> Dividimos cada término entre 5x³:

        <p>
          15x⁴ ÷ 5x³ = 3x
        </p>
        <p>
          25x³ ÷ 5x³ = 5
        </p>
      </div>

      <div class="fac-paso">
        <strong>Paso 3.</strong> Colocamos el factor común fuera del
        paréntesis y los cocientes dentro.
      </div>

      <div class="fac-formula">
        15x⁴ + 25x³ = 5x³(3x + 5)
      </div>

      <h3>Comprobación</h3>

      <div class="fac-check">
        <strong>Multiplicamos de regreso:</strong>

        <p>
          5x³(3x + 5)
        </p>
        <p>
          = 5x³ · 3x + 5x³ · 5
        </p>
        <p>
          = 15x⁴ + 25x³
        </p>

        <p>
          Recuperamos la expresión original, por lo que la factorización
          es correcta.
        </p>
      </div>

      <div class="fac-aviso">
        <strong>Consejo:</strong> Antes de aplicar cualquier otro método,
        revisa si existe un factor común. A veces se puede extraer primero
        y después continuar factorizando lo que queda dentro del paréntesis.
      </div>
    </div>
  </div>

  <div class="fac-card">
    <button class="fac-head" onclick="facToggle(this)">
      <span class="fac-num">2</span>
      <span class="fac-titulo">Trinomio cuadrado perfecto</span>
      <span class="fac-flecha">⌄</span>
    </button>

    <div class="fac-body">
      <h3>¿Cómo reconocerlo?</h3>

      <p>
        Es un polinomio de tres términos en el que el primero y el último
        son cuadrados perfectos. Además, el término central debe ser el
        doble del producto de las raíces cuadradas de esos extremos,
        con el signo correspondiente.
      </p>

      <div class="fac-formula">
        a² + 2ab + b² = (a + b)²
        <br />
        a² − 2ab + b² = (a − b)²
      </div>

      <h3>Procedimiento</h3>

      <div class="fac-paso">
        <strong>Paso 1.</strong> Calcula las raíces cuadradas del primer
        y del tercer término.
      </div>

      <div class="fac-paso">
        <strong>Paso 2.</strong> Multiplica ambas raíces y duplica
        el resultado.
      </div>

      <div class="fac-paso">
        <strong>Paso 3.</strong> Comprueba que el resultado coincida
        con el término central, incluyendo su signo.
      </div>

      <div class="fac-paso">
        <strong>Paso 4.</strong> Escribe un binomio con las dos raíces
        y elévalo al cuadrado. El signo del binomio depende del signo
        del término central.
      </div>

      <h3>Ejemplo resuelto</h3>

      <p>Factoriza la expresión:</p>

      <div class="fac-formula">
        9x² − 24x + 16
      </div>

      <div class="fac-paso">
        <strong>Paso 1.</strong> Identificamos las raíces cuadradas
        de los extremos:

        <p>
          √(9x²) = 3x
        </p>
        <p>
          √16 = 4
        </p>
      </div>

      <div class="fac-paso">
        <strong>Paso 2.</strong> Calculamos el doble producto de las raíces:

        <p>
          2(3x)(4) = 24x
        </p>
      </div>

      <div class="fac-paso">
        <strong>Paso 3.</strong> El resultado es 24x y coincide en magnitud
        con el término central −24x. Como este es negativo, utilizamos
        una resta en el binomio.
      </div>

      <div class="fac-formula">
        9x² − 24x + 16 = (3x − 4)²
      </div>

      <h3>Comprobación</h3>

      <div class="fac-check">
        <strong>Multiplicamos de regreso:</strong>

        <p>
          (3x − 4)² = (3x − 4)(3x − 4)
        </p>
        <p>
          = 9x² − 12x − 12x + 16
        </p>
        <p>
          = 9x² − 24x + 16
        </p>

        <p>
          Recuperamos el trinomio original. Por tanto, la factorización
          es correcta.
        </p>
      </div>

      <div class="fac-aviso">
        <strong>Importante:</strong> Que el primer y el último término
        sean cuadrados perfectos no es suficiente. También debes verificar
        que el término central sea el doble producto de sus raíces.
      </div>
    </div>
  </div>

  <div class="fac-card">
    <button class="fac-head" onclick="facToggle(this)">
      <span class="fac-num">3</span>
      <span class="fac-titulo">Diferencia de cuadrados</span>
      <span class="fac-flecha">⌄</span>
    </button>

    <div class="fac-body">
      <h3>¿Cómo reconocerla?</h3>

      <p>
        Es una expresión de dos términos separados por una resta, donde
        ambos términos son cuadrados perfectos. Cada uno puede escribirse
        como una expresión elevada al cuadrado.
      </p>

      <div class="fac-formula">
        a² − b² = (a + b)(a − b)
      </div>

      <h3>Procedimiento</h3>

      <div class="fac-paso">
        <strong>Paso 1.</strong> Verifica que haya dos términos y que
        estén separados por una resta.
      </div>

      <div class="fac-paso">
        <strong>Paso 2.</strong> Calcula la raíz cuadrada de cada término.
      </div>

      <div class="fac-paso">
        <strong>Paso 3.</strong> Forma dos binomios con esas raíces:
        uno con suma y otro con resta.
      </div>

      <div class="fac-paso">
        <strong>Paso 4.</strong> Comprueba el resultado multiplicando
        los dos binomios.
      </div>

      <h3>Ejemplo resuelto</h3>

      <p>Factoriza la expresión:</p>

      <div class="fac-formula">
        49m² − 100
      </div>

      <div class="fac-paso">
        <strong>Paso 1.</strong> Identificamos los cuadrados perfectos:

        <p>
          49m² = (7m)²
        </p>
        <p>
          100 = 10²
        </p>
      </div>

      <div class="fac-paso">
        <strong>Paso 2.</strong> Como los términos están separados por
        una resta, aplicamos la fórmula de diferencia de cuadrados.
      </div>

      <div class="fac-paso">
        <strong>Paso 3.</strong> Escribimos los dos binomios utilizando
        las raíces cuadradas, uno con suma y otro con resta.
      </div>

      <div class="fac-formula">
        49m² − 100 = (7m + 10)(7m − 10)
      </div>

      <h3>Comprobación</h3>

      <div class="fac-check">
        <strong>Multiplicamos de regreso:</strong>

        <p>
          (7m + 10)(7m − 10)
        </p>
        <p>
          = 49m² − 70m + 70m − 100
        </p>
        <p>
          = 49m² − 100
        </p>

        <p>
          Los términos centrales se cancelan y recuperamos la expresión
          original. La factorización es correcta.
        </p>
      </div>

      <div class="fac-aviso">
        <strong>No confundas:</strong> Una diferencia de cuadrados tiene
        una resta entre los dos cuadrados. Una suma de cuadrados, como
        a² + b², no se factoriza con esta misma fórmula usando números reales.
      </div>
    </div>
  </div>

  <div class="fac-estrategia">
    <h2>Ida y regreso</h2>

    <p>
      La factorización es el proceso inverso de desarrollar una multiplicación
      algebraica. Por eso, cada uno de estos casos está relacionado con una
      regla de productos notables o con la propiedad distributiva.
    </p>

    <div class="fac-ida">
      <span class="fac-etiqueta">Caso 1</span>
      <h3>Factor común y propiedad distributiva</h3>

      <p>
        <strong>Ida — desarrollar:</strong> multiplicamos el factor
        que está fuera del paréntesis por cada término que está dentro.
      </p>

      <div class="fac-formula">
        a(b + c) = ab + ac
      </div>

      <p>
        <strong>Regreso — factorizar:</strong> si los términos tienen
        un factor común, lo extraemos y escribimos los cocientes dentro
        del paréntesis.
      </p>

      <div class="fac-formula">
        ab + ac = a(b + c)
      </div>

      <p>
        Es el mismo procedimiento en direcciones opuestas: distribuir
        al desarrollar y extraer el factor común al factorizar.
      </p>
    </div>

    <div class="fac-ida">
      <span class="fac-etiqueta">Caso 2</span>
      <h3>Trinomio cuadrado perfecto y binomio al cuadrado</h3>

      <p>
        <strong>Ida — desarrollar:</strong> multiplicamos un binomio
        por sí mismo. Esto produce un trinomio.
      </p>

      <div class="fac-formula">
        (a + b)² = a² + 2ab + b²
        <br />
        (a − b)² = a² − 2ab + b²
      </div>

      <p>
        <strong>Regreso — factorizar:</strong> reconocemos los dos
        cuadrados perfectos y comprobamos el doble producto del medio.
        Si coinciden, expresamos el trinomio como un binomio al cuadrado.
      </p>

      <div class="fac-formula">
        a² + 2ab + b² = (a + b)²
        <br />
        a² − 2ab + b² = (a − b)²
      </div>
    </div>

    <div class="fac-ida">
      <span class="fac-etiqueta">Caso 3</span>
      <h3>Diferencia de cuadrados y binomios conjugados</h3>

      <p>
        <strong>Ida — desarrollar:</strong> multiplicamos dos binomios
        que tienen los mismos términos, pero signos opuestos.
      </p>

      <div class="fac-formula">
        (a + b)(a − b) = a² − b²
      </div>

      <p>
        <strong>Regreso — factorizar:</strong> si encontramos dos cuadrados
        perfectos separados por una resta, obtenemos dos binomios conjugados:
        uno con suma y otro con resta.
      </p>

      <div class="fac-formula">
        a² − b² = (a + b)(a − b)
      </div>

      <p>
        Los términos cruzados se cancelan al multiplicar, por eso no aparece
        un término central en la diferencia de cuadrados.
      </p>
    </div>

    <h3>¿Cómo comprobar una factorización?</h3>

    <ol class="fac-regla">
      <li>Escribe los factores que obtuviste.</li>
      <li>Multiplica aplicando la propiedad distributiva o el producto notable correspondiente.</li>
      <li>Simplifica los términos semejantes.</li>
      <li>Compara el resultado con la expresión original.</li>
    </ol>

    <div class="fac-final">
      Factorizar es ir de una expresión a sus factores; comprobar es
      multiplicarlos de regreso para verificar que recuperamos la expresión
      original.
    </div>
  </div>

</section>
`;

function facToggle(elemento) {
  const tarjeta = elemento.closest(".fac-card");
  tarjeta.classList.toggle("abierto");
}

function facTodo(abrir) {
  document.querySelectorAll(".fac .fac-card").forEach((tarjeta) => {
    tarjeta.classList.toggle("abierto", abrir);
  });
}