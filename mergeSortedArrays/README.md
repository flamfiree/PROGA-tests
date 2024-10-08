# Merge Sorted Two Arrays
## Задание
Дано 2 отсортированных массива чисел, верните отсортированный массив состоящий из элементов 2-х входящих.
Использование стандартных функций сортировок языка запрещены.

В документации к функции решения опишите получившуюся сложность алгоритма по времени и памяти.

> ### Пример
> In: [1,2,4,6] [3,5,6]
> 
> Out: [1,2,3,4,5,6,6]

## Решение
### Временная сложность

Временная сложность алгоритма равна О(n + m), где n и m - длины двух входных массивов. Это связано с тем, что мы выполняем итерацию по каждому массиву только один раз, а количество итераций пропорционально общему количеству элементов в обоих массивах.

### Пространственная сложность

Пространственная сложность алгоритма также равна O(n + m). Это связано с тем, что нам нужно сохранить объединенный массив, длина которого равна сумме длин двух входных массивов.