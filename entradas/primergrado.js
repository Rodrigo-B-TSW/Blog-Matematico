contenidoEntrada = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Quicksand:wght@500;600;700&display=swap');
 
.ec {
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
 
.ec * {
  box-sizing: border-box;
}
 
.ec h2,
.ec h3,
.ec h4 {
  font-family: 'Quicksand', sans-serif;
  color: var(--oceano);
}
 
.ec p {
  background: none;
  padding: 0;
  margin: 8px 0;
}
 
.ec .ec-intro {
  padding: 20px;
  background: var(--espuma);
  border: 1px solid var(--borde);
  border-radius: 16px;
  margin-bottom: 22px;
}
 
.ec .ec-intro h2 {
  margin-top: 0;
}
 
.ec .ec-card {
  margin: 16px 0;
  border: 1px solid var(--borde);
  border-radius: 15px;
  overflow: hidden;
  background: white;
  box-shadow: 0 3px 10px rgba(11, 60, 93, 0.05);
}
 
.ec .ec-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  cursor: pointer;
  background: #f7fcfd;
  transition: background 0.2s;
}
 
.ec .ec-head:hover {
  background: var(--espuma);
}
 
.ec .ec-num {
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
 
.ec .ec-titulo {
  flex: 1;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--oceano);
}
 
.ec .ec-flecha {
  color: var(--azul);
  font-size: 1.3rem;
  font-weight: 800;
  transition: transform 0.2s;
}
 
.ec .ec-card.abierto .ec-flecha {
  transform: rotate(180deg);
}
 
.ec .ec-body {
  display: none;
  padding: 20px;
  border-top: 1px solid var(--borde);
}
 
.ec .ec-card.abierto .ec-body {
  display: block;
}
 
.ec .ec-formula {
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
 
.ec .ec-regla {
  padding: 14px 16px;
  margin: 14px 0;
  border-left: 4px solid var(--aqua);
  background: #f4fbfc;
  border-radius: 0 10px 10px 0;
}
 
.ec .ec-paso {
  padding: 12px 14px;
  margin: 10px 0;
  border: 1px solid var(--borde);
  border-radius: 10px;
}
 
.ec .ec-paso strong {
  color: var(--azul);
}
 
.ec .ec-check {
  padding: 14px 16px;
  margin: 14px 0;
  border-left: 4px solid #3b9b78;
  background: #f1faf5;
  border-radius: 0 10px 10px 0;
}
 
.ec .ec-check strong {
  color: #267452;
}
 
.ec .ec-aviso {
  padding: 14px 16px;
  margin: 14px 0;
  background: #fff7f2;
  border-left: 4px solid var(--coral);
  border-radius: 0 10px 10px 0;
}
 
.ec .ec-aviso strong {
  color: #a94d3b;
}
 
.ec .ec-subtitulo {
  margin-top: 22px;
  margin-bottom: 8px;
}
 
.ec .ec-lista {
  padding-left: 22px;
}
 
.ec .ec-lista li {
  margin-bottom: 10px;
}
 
.ec .ec-tabla {
  overflow-x: auto;
  margin: 12px 0;
  border: 1px solid var(--borde);
  border-radius: 12px;
}
 
.ec table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
 
.ec th {
  padding: 10px 12px;
  text-align: left;
  background: var(--oceano);
  color: white;
  font-family: 'Quicksand', sans-serif;
}
 
.ec td {
  padding: 10px 12px;
  vertical-align: top;
  border-top: 1px solid var(--borde);
}
 
.ec tr:nth-child(even) td {
  background: #f7fcfd;
}
 
.ec .ec-cierre {
  padding: 20px;
  margin-top: 25px;
  background: #f7fcfd;
  border: 1px solid var(--borde);
  border-radius: 16px;
}
 
.ec .ec-cierre h2 {
  margin-top: 0;
}
 
.ec .ec-final {
  padding: 15px;
  margin-top: 18px;
  text-align: center;
  background: var(--oceano);
  color: white;
  border-radius: 12px;
  font-weight: 700;
}
 
@media (max-width: 600px) {
  .ec .ec-body {
    padding: 14px;
  }
 
  .ec .ec-head {
    padding: 13px;
  }
 
  .ec .ec-formula {
    font-size: 1rem;
  }
}
</style>
 
<section class="ec">
 
  <div class="ec-intro">
    <h2>Ecuaciones de primer grado</h2>
    <p>
      Una ecuación de primer grado es una igualdad con una incógnita (por
      ejemplo x) elevada a la potencia 1. Resolverla consiste en encontrar el
      valor de la incógnita que hace verdadera la igualdad.
    </p>
    <p>
      En esta entrada veremos el procedimiento general y un ejemplo resuelto de
      cada tipo: enteras, fraccionarias, con signos de agrupación y con
      literales. Al final resolveremos un problema de planteamiento.
    </p>
    <p>
      Selecciona cada apartado para consultar la explicación, el
      procedimiento, el ejemplo resuelto y su comprobación.
    </p>
  </div>
 
  <div class="ec-card abierto">
    <div class="ec-head" onclick="ecToggle(this)">
      <span class="ec-num">1</span>
      <span class="ec-titulo">Procedimiento general</span>
      <span class="ec-flecha">⌄</span>
    </div>
 
    <div class="ec-body">
      <h3>¿Qué buscamos?</h3>
      <p>
        Dejar la incógnita sola en un lado del igual. La forma más simple de
        una ecuación de primer grado es:
      </p>
 
      <div class="ec-formula">
        ax + b = c &nbsp;→&nbsp; x = (c − b) / a
      </div>
 
      <h3 class="ec-subtitulo">Procedimiento</h3>
      <ol class="ec-lista">
        <li>
          <strong>Quita los signos de agrupación:</strong> elimina los
          paréntesis con la propiedad distributiva.
        </li>
        <li>
          <strong>Quita los denominadores:</strong> multiplica toda la
          ecuación por el MCM de los denominadores.
        </li>
        <li>
          <strong>Reduce:</strong> junta los términos semejantes de cada lado.
        </li>
        <li>
          <strong>Transpón:</strong> pasa las letras a un lado del igual y los
          números al otro.
        </li>
        <li>
          <strong>Reduce de nuevo</strong> los términos semejantes.
        </li>
        <li>
          <strong>Despeja:</strong> divide entre el coeficiente de la
          incógnita.
        </li>
        <li>
          <strong>Comprueba:</strong> sustituye el valor en la ecuación
          original y verifica que ambos lados valgan lo mismo.
        </li>
      </ol>
 
      <div class="ec-regla">
        <strong>Regla de oro:</strong> lo que haces de un lado del igual, lo
        haces del otro.
      </div>
 
      <h3 class="ec-subtitulo">Al transponer, la operación se invierte</h3>
      <ul class="ec-lista">
        <li>Lo que suma pasa restando.</li>
        <li>Lo que resta pasa sumando.</li>
        <li>Lo que multiplica pasa dividiendo.</li>
        <li>Lo que divide pasa multiplicando.</li>
      </ul>
 
      <h3 class="ec-subtitulo">Los 4 tipos y por dónde empezar</h3>
      <div class="ec-tabla">
        <table>
          <tr>
            <th>Tipo</th>
            <th>Cómo la reconozco</th>
            <th>Primer paso</th>
          </tr>
          <tr>
            <td>Entera</td>
            <td>Sin paréntesis ni denominadores</td>
            <td>Transponer</td>
          </tr>
          <tr>
            <td>Fraccionaria</td>
            <td>Tiene denominadores</td>
            <td>Multiplicar por el MCM</td>
          </tr>
          <tr>
            <td>Con signos de agrupación</td>
            <td>Tiene paréntesis</td>
            <td>Propiedad distributiva</td>
          </tr>
          <tr>
            <td>Con literales</td>
            <td>Hay otras letras además de la incógnita</td>
            <td>Tratar esas letras como números</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
 
  <div class="ec-card">
    <div class="ec-head" onclick="ecToggle(this)">
      <span class="ec-num">2</span>
      <span class="ec-titulo">Ecuación entera</span>
      <span class="ec-flecha">⌄</span>
    </div>
 
    <div class="ec-body">
      <h3>¿Cómo reconocerla?</h3>
      <p>
        No tiene paréntesis ni denominadores. Solo contiene números y la
        incógnita, así que empezamos transponiendo.
      </p>
 
      <h3 class="ec-subtitulo">Ejemplo resuelto</h3>
      <p>Resuelve la ecuación:</p>
      <div class="ec-formula">5x − 7 = 2x + 11</div>
 
      <div class="ec-paso">
        <strong>1.</strong> Transponemos: las x a la izquierda y los números
        a la derecha.
        <br />
        5x − 2x = 11 + 7
      </div>
      <div class="ec-paso">
        <strong>2.</strong> Reducimos los términos semejantes:
        <br />
        3x = 18
      </div>
      <div class="ec-paso">
        <strong>3.</strong> Despejamos dividiendo entre 3:
        <br />
        x = 18 / 3 = 6
      </div>
 
      <div class="ec-formula">x = 6</div>
 
      <div class="ec-check">
        <strong>Comprobación:</strong>
        <p>Sustituimos x = 6 en la ecuación original:</p>
        <p>Lado izquierdo: 5(6) − 7 = 30 − 7 = 23</p>
        <p>Lado derecho: 2(6) + 11 = 12 + 11 = 23</p>
        <p>
          Ambos lados valen 23, por lo que la solución es correcta.
        </p>
      </div>
    </div>
  </div>
 
  <div class="ec-card">
    <div class="ec-head" onclick="ecToggle(this)">
      <span class="ec-num">3</span>
      <span class="ec-titulo">Ecuación fraccionaria</span>
      <span class="ec-flecha">⌄</span>
    </div>
 
    <div class="ec-body">
      <h3>¿Cómo reconocerla?</h3>
      <p>
        Tiene denominadores. Para quitarlos, multiplicamos toda la ecuación
        por el mínimo común múltiplo (MCM) de los denominadores.
      </p>
 
      <h3 class="ec-subtitulo">Ejemplo resuelto</h3>
      <p>Resuelve la ecuación:</p>
      <div class="ec-formula">(x + 2)/4 − (x − 1)/6 = 1</div>
 
      <div class="ec-paso">
        <strong>1.</strong> Buscamos el MCM de los denominadores 4 y 6:
        <br />
        MCM = 12
      </div>
      <div class="ec-paso">
        <strong>2.</strong> Multiplicamos todos los términos por 12:
        <br />
        12·(x + 2)/4 − 12·(x − 1)/6 = 12·1
      </div>
      <div class="ec-paso">
        <strong>3.</strong> Simplificamos cada fracción:
        <br />
        3(x + 2) − 2(x − 1) = 12
      </div>
      <div class="ec-paso">
        <strong>4.</strong> Aplicamos la distributiva. El signo − cambia los
        signos del segundo paréntesis:
        <br />
        3x + 6 − 2x + 2 = 12
      </div>
      <div class="ec-paso">
        <strong>5.</strong> Reducimos los términos semejantes:
        <br />
        x + 8 = 12
      </div>
      <div class="ec-paso">
        <strong>6.</strong> Transponemos el 8:
        <br />
        x = 12 − 8 = 4
      </div>
 
      <div class="ec-formula">x = 4</div>
 
      <div class="ec-check">
        <strong>Comprobación:</strong>
        <p>Sustituimos x = 4 en la ecuación original:</p>
        <p>(4 + 2)/4 − (4 − 1)/6 = 6/4 − 3/6 = 1.5 − 0.5 = 1</p>
        <p>
          El lado izquierdo vale 1, igual que el derecho. La solución es
          correcta.
        </p>
      </div>
 
      <div class="ec-aviso">
        <strong>Importante:</strong> al multiplicar por el MCM hay que
        multiplicar todos los términos, incluso los que no tienen fracción.
        Aquí, el 1 también se multiplica por 12.
      </div>
    </div>
  </div>
 
  <div class="ec-card">
    <div class="ec-head" onclick="ecToggle(this)">
      <span class="ec-num">4</span>
      <span class="ec-titulo">Ecuación con signos de agrupación</span>
      <span class="ec-flecha">⌄</span>
    </div>
 
    <div class="ec-body">
      <h3>¿Cómo reconocerla?</h3>
      <p>
        Tiene paréntesis. Antes de transponer, los eliminamos multiplicando el
        número o el signo que está afuera por cada término de adentro.
      </p>
 
      <h3 class="ec-subtitulo">Ejemplo resuelto</h3>
      <p>Resuelve la ecuación:</p>
      <div class="ec-formula">3(x − 2) − 2(4 − x) = 4x − (x + 4)</div>
 
      <div class="ec-paso">
        <strong>1.</strong> Aplicamos la distributiva en cada lado:
        <br />
        3x − 6 − 8 + 2x = 4x − x − 4
      </div>
      <div class="ec-paso">
        <strong>2.</strong> Reducimos los términos semejantes:
        <br />
        5x − 14 = 3x − 4
      </div>
      <div class="ec-paso">
        <strong>3.</strong> Transponemos:
        <br />
        5x − 3x = −4 + 14
      </div>
      <div class="ec-paso">
        <strong>4.</strong> Reducimos:
        <br />
        2x = 10
      </div>
      <div class="ec-paso">
        <strong>5.</strong> Despejamos dividiendo entre 2:
        <br />
        x = 10 / 2 = 5
      </div>
 
      <div class="ec-formula">x = 5</div>
 
      <div class="ec-check">
        <strong>Comprobación:</strong>
        <p>Sustituimos x = 5 en la ecuación original:</p>
        <p>Lado izquierdo: 3(5 − 2) − 2(4 − 5) = 3(3) − 2(−1) = 9 + 2 = 11</p>
        <p>Lado derecho: 4(5) − (5 + 4) = 20 − 9 = 11</p>
        <p>
          Ambos lados valen 11, por lo que la solución es correcta.
        </p>
      </div>
 
      <div class="ec-aviso">
        <strong>Cuidado con los signos:</strong> un signo − delante de un
        paréntesis cambia el signo de todos los términos que hay dentro. Por
        eso −2(4 − x) da −8 + 2x, y −(x + 4) da −x − 4.
      </div>
    </div>
  </div>
 
  <div class="ec-card">
    <div class="ec-head" onclick="ecToggle(this)">
      <span class="ec-num">5</span>
      <span class="ec-titulo">Ecuación con literales</span>
      <span class="ec-flecha">⌄</span>
    </div>
 
    <div class="ec-body">
      <h3>¿Cómo reconocerla?</h3>
      <p>
        Además de la incógnita x, tiene otras letras (como a y b) que
        representan números cualquiera. Esas letras se tratan como si fueran
        números, y el resultado queda expresado con ellas.
      </p>
 
      <h3 class="ec-subtitulo">Ejemplo resuelto</h3>
      <p>Despeja x en la ecuación:</p>
      <div class="ec-formula">3(x − a) = 2x + b</div>
 
      <div class="ec-paso">
        <strong>1.</strong> Aplicamos la distributiva:
        <br />
        3x − 3a = 2x + b
      </div>
      <div class="ec-paso">
        <strong>2.</strong> Transponemos: las x a la izquierda y las demás
        letras a la derecha.
        <br />
        3x − 2x = b + 3a
      </div>
      <div class="ec-paso">
        <strong>3.</strong> Reducimos:
        <br />
        x = 3a + b
      </div>
 
      <div class="ec-formula">x = 3a + b</div>
 
      <div class="ec-check">
        <strong>Comprobación:</strong>
        <p>Sustituimos x = 3a + b en la ecuación original:</p>
        <p>Lado izquierdo: 3((3a + b) − a) = 3(2a + b) = 6a + 3b</p>
        <p>Lado derecho: 2(3a + b) + b = 6a + 2b + b = 6a + 3b</p>
        <p>
          Ambos lados son iguales. También podemos probar con números: si
          a = 2 y b = 1, entonces x = 3(2) + 1 = 7. Izquierda: 3(7 − 2) = 15.
          Derecha: 2(7) + 1 = 15.
        </p>
      </div>
    </div>
  </div>
 
  <div class="ec-card">
    <div class="ec-head" onclick="ecToggle(this)">
      <span class="ec-num">6</span>
      <span class="ec-titulo">Problema de planteamiento</span>
      <span class="ec-flecha">⌄</span>
    </div>
 
    <div class="ec-body">
      <h3>Enunciado</h3>
      <div class="ec-regla">
        El plan de hosting de mi app cobra una cuota fija de $120 al mes más
        $0.50 por cada GB de almacenamiento usado. Este mes me cobraron $245
        en total. ¿Cuántos GB usé?
      </div>
 
      <h3 class="ec-subtitulo">Resolución en 5 pasos</h3>
      <div class="ec-tabla">
        <table>
          <tr>
            <th>Paso</th>
            <th>Qué hago</th>
            <th>Resultado</th>
          </tr>
          <tr>
            <td>1. Incógnita</td>
            <td>Defino lo que busco</td>
            <td>x = GB de almacenamiento usados este mes</td>
          </tr>
          <tr>
            <td>2. Traducción</td>
            <td>Paso cada frase a álgebra</td>
            <td>
              "cuota fija de $120" → 120
              <br />
              "$0.50 por cada GB" → 0.5x
              <br />
              "me cobraron $245" → = 245
            </td>
          </tr>
          <tr>
            <td>3. Ecuación</td>
            <td>Junto las piezas</td>
            <td>120 + 0.5x = 245</td>
          </tr>
          <tr>
            <td>4. Solución</td>
            <td>Resuelvo con el procedimiento general</td>
            <td>
              0.5x = 245 − 120
              <br />
              0.5x = 125
              <br />
              x = 125 / 0.5 = 250
            </td>
          </tr>
          <tr>
            <td>5. Validación</td>
            <td>Regreso al enunciado, no solo a la ecuación</td>
            <td>
              250 GB × $0.50 = $125 y $120 + $125 = $245, que coincide con el
              cobro. Además, 250 es positivo, como debe ser una cantidad de GB.
            </td>
          </tr>
        </table>
      </div>
 
      <div class="ec-check">
        <strong>Respuesta:</strong>
        <p>Usé 250 GB de almacenamiento este mes.</p>
      </div>
 
      <div class="ec-aviso">
        <strong>Importante:</strong> validar contra el enunciado significa
        comprobar que la respuesta tiene sentido en la situación real, no solo
        que cumple la ecuación. Si la ecuación hubiera dado un número negativo
        de GB, sabríamos que hay un error en el planteamiento.
      </div>
    </div>
  </div>
 
  <div class="ec-cierre">
    <h2>Errores comunes</h2>
    <p>
      Antes de cerrar, estos son los errores que más se repiten al resolver
      ecuaciones de primer grado:
    </p>
 
    <ul class="ec-lista">
      <li>
        <strong>Signos:</strong> olvidar que un − delante de un paréntesis
        cambia todos los signos de adentro.
      </li>
      <li>
        <strong>Transposición:</strong> pasar un término al otro lado sin
        invertir su operación.
      </li>
      <li>
        <strong>MCM:</strong> multiplicar solo las fracciones y olvidar los
        términos que no tienen denominador.
      </li>
      <li>
        <strong>Comprobación:</strong> no sustituir el resultado en la
        ecuación original.
      </li>
    </ul>
 
    <div class="ec-final">
      La clave es seguir los pasos en orden y comprobar siempre el resultado
      en la ecuación original.
    </div>
  </div>
 
</section>
`;
 
function ecToggle(elemento) {
  const tarjeta = elemento.closest(".ec-card");
  tarjeta.classList.toggle("abierto");
}