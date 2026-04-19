// src/entities/counter/index.ts

// 1. Экспортируем редьюсер для стора (в app/store.ts)
export { counterSlice } from './model/counterReducer';
export { counterReducer } from './model/counterReducer'; // если сделал отдельный экспорт редьюсера

// 2. Экспортируем экшены для фич (в features/...)
export { increment, decrement } from './model/counterReducer';

// 3. Экспортируем UI-компоненты для виджетов или страниц
export { CounterValue } from './ui/CounterValue';

// 4. (Опционально) Экспортируем типы, если они понадобятся
// export type { CounterSchema } from './model/types';
