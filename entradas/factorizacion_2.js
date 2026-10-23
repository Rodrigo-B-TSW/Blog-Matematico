const contenidoEntrada = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;600;700&display=swap');

.ft {
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

.ft * {
  box-sizing: border-box;
}

.ft h2,
.ft h3,
.ft h4 {
  font-family: 'Quicksand', sans-serif;
  color: var(--oceano);
}

.ft .ft-intro {
  padding: 20px;
  background: var(--espuma);
  border: 1px solid var(--borde);
  border-radius: 16px;
  margin-bottom: 22px;
}

.ft .ft-intro h2 {
  margin-top: 0;
}

.ft .ft-card {
  margin: 16px 0;
  border: 1px solid var(--borde);
  border-radius: 15px;
  overflow: hidden;
  background: white;
  box-shadow: 0 3px 10px rgba(11, 60, 93, 0.05);
}

.ft .ft-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  cursor: pointer;
  background: #f7fcfd;
  transition: background 0.2s;
}

.ft .ft-head:hover {
  background: var(--espuma);
}

.ft .ft-num {
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

.ft .ft-titulo {
  flex: 1;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--oceano);
}

.ft .ft-flecha {
  color: var(--azul);
  font-size: 1.3rem;
  font-weight: 800;
  transition: transform 0.2s;
}

.ft .ft-card.abierto .ft-flecha {
  transform: rotate(180deg);
}

.ft .ft-body {
  display: none;
  padding: 20px;
  border-top: 1px solid var(--borde);
}

.ft .ft-card.abierto .ft-body {
  display: block;
}

.ft .ft-formula {
  padding: 15px;
  margin: 14px 0;
  text-align: center;
  background: var(--espuma);
  border: 1px solid var(--borde);
  border-radius: 12px;
  color: var(--oceano);
  font-size: 1.1rem;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.ft .ft-regla {
  padding: 14px 16px;
  margin: 14px 0;
  border-left: 4px solid var(--aqua);
  background: #f4fbfc;
  border-radius: 0 10px 10px 0;
}

.ft .ft-paso {
  padding: 12px 14px;
  margin: 10px 0;
  border: 1px solid var(--borde);
  border-radius: 10px;
}

.ft .ft-paso strong {
  color: var(--azul);
}

.ft .ft-check {
  padding: 14px 16px;
  margin: 14px 0;
  border-left: 4px solid #3b9b78;
  background: #f1faf5;
  border-radius: 0 10px 10px 0;
}

.ft .ft-check strong {
  color: #267452;
}

.ft .ft-aviso {
  padding: 14px 16px;
  margin: 14px 0;
  background: #fff7f2;
  border-left: 4px solid var(--coral);
  border-radius: 0 10px 10px 0;
}

.ft .ft-aviso strong {
  color: #a94d3b;
}

.ft .ft-subtitulo {
  margin-top: 22px;
  margin-bottom: 8px;
}

.ft .ft-estrategia {
  padding: 20px;
  margin-top: 25px;
  background: #f7fcfd;
  border: 1px solid var(--borde);
  border-radius: 16px;
}

.ft .ft-estrategia h2 {
  margin-top: 0;
}

.ft .ft-lista {
  padding-left: 22px;
}

.ft .ft-lista li {
  margin-bottom: 10px;
}

.ft .ft-final {
  padding: 15px;
  margin-top: 18px;
  text-align: center;
  background: var(--oceano);
  color: white;
  border-radius: 12px;
  font-weight: 700;
}

@media (max-width: 600px) {
  .ft .ft-body {
    padding: 14px;
  }

  .ft .ft-head {
    padding: 13px;
  }

  .ft .ft-formula {
    font-size: 1rem;
  }
}
</style>

<section class="ft">

  <div class="ft-intro">
    <h2>Factorización II: Trinomios</h2>
    <p>
      Factorizar consiste en expresar un polinomio como una multiplicación
      de factores más sencillos. Para hacerlo correctamente, primero debemos
      reconocer qué tipo de expresión tenemos y después elegir el procedimiento
      adecuado.
    </p>
    <p>
      En esta entrada estudiaremos la suma y diferencia de cubos, los trinomios
      de la forma <strong>x² + bx + c</strong> y los trinomios de la forma
      <strong>ax² + bx + c</strong>, utilizando el método de aspa simple.
    </p>
    <p>
      Selecciona cada apartado para consultar la explicación, el procedimiento,
      un ejemplo resuelto y su comprobación.
    </p>
  </div>

  <div class="ft-card abierto">
    <div class="ft-head" onclick="ftToggle(this)">
      <span class="ft-num">1</span>
      <span class="ft-titulo">Suma de cubos</span>
      <span class="ft-flecha">⌄</span>
    </div>

    <div class="ft-body">
      <h3>¿Cómo reconocerla?</h3>
      <p>
        Es una expresión formada por dos términos que se están sumando y que
        pueden escribirse como cubos perfectos. Un cubo perfecto es una
        expresión que proviene de elevar otra expresión a la tercera potencia.
      </p>

      <div class="ft-formula">
        a³ + b³ = (a + b)(a² − ab + b²)
      </div>

      <h3 class="ft-subtitulo">Procedimiento</h3>
      <div class="ft-paso">
        <strong>Paso 1.</strong> Comprueba que ambos términos sean cubos
        perfectos y que estén sumándose.
      </div>
      <div class="ft-paso">
        <strong>Paso 2.</strong> Escribe la suma de las raíces cúbicas como
        el primer factor.
      </div>
      <div class="ft-paso">
        <strong>Paso 3.</strong> En el segundo factor, escribe el cuadrado
        de la primera raíz, menos el producto de ambas raíces, más el cuadrado
        de la segunda raíz.
      </div>

      <h3 class="ft-subtitulo">Ejemplo resuelto</h3>
      <p>Factoriza la expresión:</p>
      <div class="ft-formula">8x³ + 27</div>

      <div class="ft-paso">
        <strong>1.</strong> Identificamos los cubos perfectos:
        <br />
        8x³ = (2x)³ y 27 = 3³.
      </div>
      <div class="ft-paso">
        <strong>2.</strong> Aplicamos la fórmula de suma de cubos:
        <br />
        (2x + 3)((2x)² − (2x)(3) + 3²).
      </div>
      <div class="ft-paso">
        <strong>3.</strong> Simplificamos las potencias y los productos:
        <br />
        (2x + 3)(4x² − 6x + 9).
      </div>

      <div class="ft-check">
        <strong>Comprobación:</strong>
        <p>
          Multiplicamos los factores:
        </p>
        <p>
          (2x + 3)(4x² − 6x + 9)
        </p>
        <p>
          = 8x³ − 12x² + 18x + 12x² − 18x + 27
        </p>
        <p>
          = 8x³ + 27
        </p>
        <p>
          Los términos intermedios se cancelan y recuperamos la expresión
          original. La factorización es correcta.
        </p>
      </div>
    </div>
  </div>

  <div class="ft-card">
    <div class="ft-head" onclick="ftToggle(this)">
      <span class="ft-num">2</span>
      <span class="ft-titulo">Diferencia de cubos</span>
      <span class="ft-flecha">⌄</span>
    </div>

    <div class="ft-body">
      <h3>¿Cómo reconocerla?</h3>
      <p>
        Es una expresión formada por dos términos que se restan y que pueden
        escribirse como cubos perfectos.
      </p>

      <div class="ft-formula">
        a³ − b³ = (a − b)(a² + ab + b²)
      </div>

      <h3 class="ft-subtitulo">Procedimiento</h3>
      <div class="ft-paso">
        <strong>Paso 1.</strong> Verifica que ambos términos sean cubos
        perfectos y que exista una resta entre ellos.
      </div>
      <div class="ft-paso">
        <strong>Paso 2.</strong> Escribe la diferencia de las raíces cúbicas
        como primer factor.
      </div>
      <div class="ft-paso">
        <strong>Paso 3.</strong> En el segundo factor, escribe el cuadrado
        de la primera raíz, más el producto de ambas raíces, más el cuadrado
        de la segunda raíz.
      </div>

      <h3 class="ft-subtitulo">Ejemplo resuelto</h3>
      <p>Factoriza la expresión:</p>
      <div class="ft-formula">64x³ − 125</div>

      <div class="ft-paso">
        <strong>1.</strong> Identificamos los cubos perfectos:
        <br />
        64x³ = (4x)³ y 125 = 5³.
      </div>
      <div class="ft-paso">
        <strong>2.</strong> Aplicamos la fórmula:
        <br />
        (4x − 5)((4x)² + (4x)(5) + 5²).
      </div>
      <div class="ft-paso">
        <strong>3.</strong> Simplificamos:
        <br />
        (4x − 5)(16x² + 20x + 25).
      </div>

      <div class="ft-check">
        <strong>Comprobación:</strong>
        <p>
          Multiplicamos los factores:
        </p>
        <p>
          (4x − 5)(16x² + 20x + 25)
        </p>
        <p>
          = 64x³ + 80x² + 100x − 80x² − 100x − 125
        </p>
        <p>
          = 64x³ − 125
        </p>
        <p>
          Los términos intermedios se cancelan y obtenemos la expresión
          original.
        </p>
      </div>

      <div class="ft-aviso">
        <strong>Recuerda:</strong> En la suma de cubos, el primer factor
        contiene una suma. En la diferencia de cubos, contiene una resta.
        El segundo factor siempre comienza con el cuadrado de la primera
        raíz cúbica, pero el signo del término central cambia según el caso.
      </div>
    </div>
  </div>

  <div class="ft-card">
    <div class="ft-head" onclick="ftToggle(this)">
      <span class="ft-num">3</span>
      <span class="ft-titulo">Trinomio de la forma x² + bx + c</span>
      <span class="ft-flecha">⌄</span>
    </div>

    <div class="ft-body">
      <h3>¿Cómo reconocerlo?</h3>
      <p>
        Es un polinomio de tres términos cuyo primer término es x², el segundo
        contiene x y el tercero es una constante. El coeficiente de x² es 1.
      </p>

      <div class="ft-formula">
        x² + bx + c = (x + m)(x + n)
      </div>

      <p>
        Para encontrar los factores, necesitamos dos números que, al sumarse,
        den el coeficiente de x y, al multiplicarse, den el término constante.
      </p>

      <h3 class="ft-subtitulo">Procedimiento</h3>
      <div class="ft-paso">
        <strong>Paso 1.</strong> Identifica el coeficiente de x, que
        representamos con b, y el término constante, que representamos con c.
      </div>
      <div class="ft-paso">
        <strong>Paso 2.</strong> Busca dos números cuya suma sea b y cuyo
        producto sea c.
      </div>
      <div class="ft-paso">
        <strong>Paso 3.</strong> Coloca esos números en dos binomios que
        comiencen con x.
      </div>
      <div class="ft-paso">
        <strong>Paso 4.</strong> Comprueba el resultado multiplicando los
        binomios.
      </div>

      <h3 class="ft-subtitulo">Ejemplo resuelto</h3>
      <p>Factoriza la expresión:</p>
      <div class="ft-formula">x² + 7x + 12</div>

      <div class="ft-paso">
        <strong>1.</strong> Buscamos dos números que sumen 7 y cuyo producto
        sea 12.
      </div>
      <div class="ft-paso">
        <strong>2.</strong> Esos números son 3 y 4, porque:
        <br />
        3 + 4 = 7
        <br />
        3 × 4 = 12
      </div>
      <div class="ft-paso">
        <strong>3.</strong> Colocamos los números en los binomios:
        <br />
        (x + 3)(x + 4).
      </div>

      <div class="ft-formula">
        x² + 7x + 12 = (x + 3)(x + 4)
      </div>

      <div class="ft-check">
        <strong>Comprobación:</strong>
        <p>
          Multiplicamos los binomios:
        </p>
        <p>
          (x + 3)(x + 4) = x² + 4x + 3x + 12
        </p>
        <p>
          = x² + 7x + 12
        </p>
        <p>
          Recuperamos el trinomio original, por lo que la factorización
          es correcta.
        </p>
      </div>

      <div class="ft-aviso">
        <strong>Atención a los signos:</strong> Si el término constante es
        positivo, los dos números tienen el mismo signo. Si es negativo,
        tienen signos diferentes. En todos los casos, su suma debe coincidir
        con el coeficiente de x.
      </div>
    </div>
  </div>

  <div class="ft-card">
    <div class="ft-head" onclick="ftToggle(this)">
      <span class="ft-num">4</span>
      <span class="ft-titulo">Trinomio de la forma ax² + bx + c</span>
      <span class="ft-flecha">⌄</span>
    </div>

    <div class="ft-body">
      <h3>¿Cómo reconocerlo?</h3>
      <p>
        Es un polinomio de tres términos cuyo primer término contiene x²,
        pero su coeficiente es distinto de 1. Para factorizarlo podemos
        utilizar el método de aspa simple.
      </p>

      <div class="ft-formula">
        ax² + bx + c = (px + q)(rx + s)
      </div>

      <p>
        En este método se buscan factores del primer coeficiente y del término
        constante. Después se multiplican en cruz y se comprueba que la suma
        de los productos cruzados sea igual al término central.
      </p>

      <h3 class="ft-subtitulo">Procedimiento: aspa simple</h3>
      <div class="ft-paso">
        <strong>Paso 1.</strong> Busca dos números cuyo producto sea el
        coeficiente de x².
      </div>
      <div class="ft-paso">
        <strong>Paso 2.</strong> Busca dos números cuyo producto sea el
        término constante.
      </div>
      <div class="ft-paso">
        <strong>Paso 3.</strong> Coloca los factores en los binomios,
        manteniendo x en los términos que provienen de x².
      </div>
      <div class="ft-paso">
        <strong>Paso 4.</strong> Multiplica en cruz los términos de los
        binomios.
      </div>
      <div class="ft-paso">
        <strong>Paso 5.</strong> Suma los productos cruzados. Su resultado
        debe coincidir con el coeficiente del término central.
      </div>
      <div class="ft-paso">
        <strong>Paso 6.</strong> Comprueba la factorización multiplicando
        los dos binomios.
      </div>

      <h3 class="ft-subtitulo">Ejemplo resuelto</h3>
      <p>Factoriza la expresión:</p>
      <div class="ft-formula">6x² + x − 2</div>

      <div class="ft-paso">
        <strong>1.</strong> Buscamos dos números que multiplicados den 6:
        <br />
        3 × 2 = 6.
      </div>
      <div class="ft-paso">
        <strong>2.</strong> Buscamos dos números que multiplicados den −2:
        <br />
        2 × (−1) = −2.
      </div>
      <div class="ft-paso">
        <strong>3.</strong> Formamos los binomios:
        <br />
        (3x + 2)(2x − 1).
      </div>
      <div class="ft-paso">
        <strong>4.</strong> Realizamos los productos cruzados:
        <br />
        3x × (−1) = −3x
        <br />
        2 × 2x = 4x
      </div>
      <div class="ft-paso">
        <strong>5.</strong> Sumamos los productos cruzados:
        <br />
        −3x + 4x = x.
        <br />
        El resultado coincide con el término central del trinomio.
      </div>

      <div class="ft-formula">
        6x² + x − 2 = (3x + 2)(2x − 1)
      </div>

      <div class="ft-check">
        <strong>Comprobación:</strong>
        <p>
          Multiplicamos los binomios:
        </p>
        <p>
          (3x + 2)(2x − 1)
        </p>
        <p>
          = 6x² − 3x + 4x − 2
        </p>
        <p>
          = 6x² + x − 2
        </p>
        <p>
          El resultado es igual a la expresión original. La factorización
          es correcta.
        </p>
      </div>

      <div class="ft-aviso">
        <strong>Importante:</strong> No basta con que los factores del primer
        y último término sean correctos. La suma de los productos cruzados
        también debe dar exactamente el término central.
      </div>
    </div>
  </div>

  <div class="ft-estrategia">
    <h2>Estrategia de factorización</h2>
    <p>
      Antes de aplicar una fórmula, observa la expresión y cuenta sus términos.
      Después, revisa sus características para escoger el método adecuado.
      Conviene buscar primero un factor común, si existe.
    </p>

    <ol class="ft-lista">
      <li>
        <strong>Factor común:</strong> Si todos los términos comparten un
        número, una variable o ambos, extrae ese factor antes de intentar
        otro método.
      </li>
      <li>
        <strong>Dos términos:</strong> Comprueba si se trata de una diferencia
        de cuadrados, una suma de cubos o una diferencia de cubos.
      </li>
      <li>
        <strong>Tres términos:</strong> Revisa si es un trinomio cuadrado
        perfecto (TCP). Para reconocerlo, el primer y el último término deben
        ser cuadrados perfectos, y el término central debe ser el doble del
        producto de sus raíces cuadradas.
      </li>
      <li>
        <strong>Trinomio x² + bx + c:</strong> Si el coeficiente de x² es 1,
        busca dos números que sumen b y cuyo producto sea c.
      </li>
      <li>
        <strong>Trinomio ax² + bx + c:</strong> Si el coeficiente de x² es
        distinto de 1, intenta el método de aspa simple, verificando los
        productos cruzados.
      </li>
      <li>
        <strong>Cuatro términos:</strong> Considera la factorización por
        agrupación. Agrupa los términos, extrae el factor común de cada grupo
        y busca un binomio común.
      </li>
    </ol>

    <div class="ft-regla">
      <strong>Curiosidad: cambio de variable</strong>
      <p>
        Algunas expresiones con potencias como x⁴ y x² pueden tratarse como
        trinomios mediante un cambio de variable. Por ejemplo, en
        x⁴ + 5x² + 4 podemos sustituir u = x² y obtener
        u² + 5u + 4. Después de factorizar, se sustituye u nuevamente por x².
        No es un tipo de trinomio completamente distinto: es una manera de
        simplificar temporalmente la expresión.
      </p>
    </div>

    <div class="ft-final">
      La clave es reconocer la estructura, elegir el método y comprobar
      siempre el resultado multiplicando los factores.
    </div>
  </div>

</section>
`;

function ftToggle(elemento) {
  const tarjeta = elemento.closest(".ft-card");
  tarjeta.classList.toggle("abierto");
}