// =============================================================
//  matriz.js — Operaciones con matrices
//
//  Aquí vive SOLO la matemática: nada de canvas ni de botones.
//  Una matriz es un arreglo de renglones:
//
//      const A = [[1, 2, 3],
//                 [4, 5, 6]];      // orden 2 × 3
//
//      A[1][2]  →  6               // renglón 2, columna 3 (desde 0)
//
//  En cada workshop vas a programar las funciones que tienen
//  "TODO". Puedes probarlas en la consola del navegador (F12):
//
//      sumar([[1, 2]], [[3, 4]])   →  [[4, 6]]
// =============================================================


// -------------------------------------------------------------
//  Herramientas ya hechas — úsalas dentro de tus funciones
// -------------------------------------------------------------

/** Regresa [m, n]: número de renglones y de columnas. */
function orden(A) {
  return [A.length, A[0].length];
}

/** true si A y B tienen el mismo orden. */
function mismoOrden(A, B) {
  return A.length === B.length && A[0].length === B[0].length;
}

/** Crea una matriz m × n llena con `valor` (0 si no le pasas nada). */
function crearMatriz(m, n, valor = 0) {
  const R = [];
  for (let i = 0; i < m; i++) {
    R.push(new Array(n).fill(valor));
  }
  return R;
}

/** Regresa una copia de A, para no modificar la original. */
function copiar(A) {
  return A.map(renglon => renglon.slice());
}

/** Marca una función como pendiente. Bórrala de tu función cuando la programes. */
function pendiente(nombre, workshop) {
  throw new Error(`${nombre}() todavía no está programada — ${workshop}.`);
}


// =============================================================
//  WORKSHOP 1 — Matrices                         Actividad #27
// =============================================================

/**
 * Suma A + B elemento con elemento.
 *
 * Si A y B NO son del mismo orden, la suma no existe:
 *     throw new Error('Para sumar, A y B deben tener el mismo orden.');
 *
 * Pista: crea R con crearMatriz(m, n) y recórrela con dos for
 *        (renglón i, columna j), igual que en la Semana 11.
 */
function sumar(A, B) {
  if (!mismoOrden(A, B)) {
    throw new Error("Para sumar A y B tienen que ser del mismo orden.");
  }
  const [m, n] = orden(A);
  const R = crearMatriz(m, n);

  // Sumar componente a componente
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        R[i][j] = A[i][j] + B[i][j]
    }
  }
  return R;
}

/**
 * Resta A − B elemento con elemento.
 * Misma condición que la suma: mismo orden.
 */
function restar(A, B) {
  if (!mismoOrden(A, B)) {
    throw new Error("Para restar A y B tienen que ser del mismo orden.");
  }
  const [m, n] = orden(A);
  const R = crearMatriz(m, n);

  // Restar componente a componente
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        R[i][j] = A[i][j] - B[i][j];
    }
  }
  return R;
}

/**
 * Multiplicación escalar k · A: multiplica CADA elemento por k.
 * En una imagen: k > 1 aclara, 0 < k < 1 oscurece.
 */
function escalar(k, A) {
  // TODO Workshop 1
  pendiente('escalar', 'Workshop 1');
}

/**
 * Transpuesta: los renglones se vuelven columnas.
 * Si A es m × n, el resultado es n × m  →  R[j][i] = A[i][j]
 *
 * Ojo: el resultado NO tiene el mismo tamaño que A (salvo si es cuadrada).
 */
function transpuesta(A) {
  // TODO Workshop 1
  pendiente('transpuesta', 'Workshop 1');
}

/**
 * Multiplicación matricial A · B: renglón por columna.
 *
 * Solo existe si las COLUMNAS de A son iguales a los RENGLONES de B:
 *     throw new Error('Para multiplicar, las columnas de A deben ser iguales a los renglones de B.');
 *
 * Si A es m × n y B es n × p, el resultado es m × p:
 *     R[i][j] = A[i][0]·B[0][j] + A[i][1]·B[1][j] + ... + A[i][n−1]·B[n−1][j]
 *
 * Pista: son TRES for (renglón i, columna j, y k para recorrer y sumar).
 */
function multiplicar(A, B) {
  // TODO Workshop 1
  pendiente('multiplicar', 'Workshop 1');
}


// =============================================================
//  WORKSHOP 2 — Determinantes                    Actividad #30
//  (los botones de este workshop se agregan ese día)
// =============================================================

/** Determinante de una matriz 2 × 2:  ad − bc */
function det2(T) {
  // TODO Workshop 2
  pendiente('det2', 'Workshop 2');
}

/**
 * Aplica la matriz 2 × 2 T al punto (x, y).
 * Regresa [x', y'] = [T00·x + T01·y,  T10·x + T11·y]
 */
function transformar(x, y, T) {
  // TODO Workshop 2
  pendiente('transformar', 'Workshop 2');
}

/**
 * Determinante de una matriz cuadrada de cualquier tamaño, por COFACTORES.
 * Regresa un NÚMERO, no una matriz.
 *
 * Si A no es cuadrada:
 *     throw new Error('El determinante solo existe para matrices cuadradas.');
 *
 * Pista: es recursiva.
 *   - Si A es 2 × 2, regresa det2(A).
 *   - Si no, recorre el renglón 0: para cada columna j, arma el MENOR
 *     (A sin el renglón 0 y sin la columna j) y suma
 *         (−1)^j · A[0][j] · determinante(menor)
 */
function determinante(A) {
  // TODO Workshop 2
  pendiente('determinante', 'Workshop 2');
}


// =============================================================
//  WORKSHOP 3 — Sistemas de ecuaciones I         Actividad #33
// =============================================================

/**
 * Resuelve un sistema con Gauss-Jordan.
 * Recibe la matriz AUMENTADA [A | B] y regresa la solución
 * como arreglo: [x, y, z, ...]
 * Si un pivote es 0, intercambia renglones.
 */
function gaussJordan(aumentada) {
  // TODO Workshop 3
  pendiente('gaussJordan', 'Workshop 3');
}


// =============================================================
//  WORKSHOP 4 — Sistemas de ecuaciones II        Actividad #36
// =============================================================

/**
 * Inversa de una 2 × 2:  (1 / det) · [[d, −b], [−c, a]]
 * Si det = 0, regresa null: la transformación no se puede deshacer.
 */
function inversa2x2(T) {
  // TODO Workshop 4
  pendiente('inversa2x2', 'Workshop 4');
}

/**
 * Inversa de una matriz cuadrada de cualquier tamaño, con Gauss-Jordan.
 *
 *     [ A | I ]   →  operaciones de renglón  →   [ I | A⁻¹ ]
 *
 * Si A no es cuadrada, lanza un error.
 * Si en alguna columna no hay pivote distinto de 0, A no tiene inversa
 * (su determinante es 0): regresa null.
 */
function inversa(A) {
  // TODO Workshop 4
  pendiente('inversa', 'Workshop 4');
}