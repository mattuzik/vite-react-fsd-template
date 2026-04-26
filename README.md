# FSD Template

🚀 Современный и масштабируемый шаблон на базе методологии **Feature-Sliced Design**.

---

## 🛠 Стек технологий

- **Core:** [React 19](https://reactjs.org)
- **Type System:** [TypeScript](https://typescriptlang.org)
- **State Management:** [Redux Toolkit](https://js.org)
- **Build Tool:** [Vite](https://vitejs.dev)
- **Linter:** [ESLint](https://eslint.org) (настроен под FSD)

---

## 🏗 Архитектура

Проект организован по слоям **Feature-Sliced Design**:

- `app/` — глобальные провайдеры, стили и точка входа.
- `pages/` — композиционные слои, собирающие страницы из виджетов.
- `widgets/` — крупные блоки, соединяющие фичи и сущности.
- `features/` — действия пользователя, приносящие бизнес-ценность.
- `entities/` — бизнес-логика и модели данных (например, Counter).
- `shared/` — переиспользуемые UI-компоненты, API-клиенты и хелперы.

---

## 🚀 Быстрый старт

### Установка шаблона
```bash
git clone https://github.com/mattuzik/vite-react-redux-fsd-template
```

### Установка зависимостей
```bash
npm install
```

### Запуск dev-сервера
```bash
npm run dev
```

### Сборка (production)
```bash
npm run build
```

---

## 📏 Правила проекта

1.  **Соблюдай иерархию слоев:** Модуль может импортировать только то, что находится на слоях ниже.
2.  **Public API:** Используй `index.ts` в каждой папке модуля для экспорта только необходимого функционала.
3.  **Типизация:** Обязательное использование интерфейсов для всех стейтов и пропсов.
