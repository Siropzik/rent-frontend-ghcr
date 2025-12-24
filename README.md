````md
# rent-frontend-ghcr

Репозиторій містить виконання **Практично-лабораторного заняття №8 та №9** з використанням **GitHub Actions** та **Microsoft Azure**.

---

## Практично-лабораторне заняття №8

### Тема
**Неперервна інтеграція (Continuous Integration)**

### Мета
Ознайомитися з принципами і практиками неперервної інтеграції, сформувати навички автоматизації CI/CD процесів в **GitHub Actions**.

### Коротко про виконання
- Налаштовано **GitHub Actions workflow** для автоматизації процесів у репозиторії.
- Реалізовано **CI**: збірка frontend (`npm install` → `npm run build`), створення Docker-образу та публікація в **GitHub Container Registry (GHCR)**.

---

## Практично-лабораторне заняття №9

### Тема
**Неперервна доставка (Continuous Delivery)**

### Мета
Ознайомитися з принципами і практиками неперервної доставки, сформувати навички роботи з хмарними сервісами **Microsoft Azure**.

### Коротко про виконання
- Проєкт контейнеризовано за допомогою **Docker** (nginx роздає зібраний frontend).
- Налаштовано публікацію Docker-образу в **GitHub Container Registry (GHCR)**.
- Налаштовано автоматичний деплой контейнера в **Azure App Service** через GitHub Actions.

---

## Посилання
- Репозиторій: https://github.com/Siropzik/rent-frontend-ghcr  
- Azure Web App (Application URL): https://rent-frontend-siropzik-01-dchdf2fdfmgufed6.westeurope-01.azurewebsites.net

---

## Стек
- React + Vite
- React Router
- Docker + nginx
- GitHub Actions
- GitHub Container Registry (ghcr.io)
- Azure App Service (Linux plan)

---

## Функціонал (UI Rent System)
Навчальний інтерфейс для сутностей системи оренди:
- **Орендарі**
- **Площі**
- **Договори**
- **Платежі**

> Якщо бекенд/API не підключений — сторінки можуть працювати у **DEMO-режимі** (приклад даних).  
> Якщо API підключено — кнопка “Оновити” завантажує дані з сервера.

---

## CI/CD (як працює пайплайн)

### Тригер
- `push` у гілку `main` та `feature/*`
- `workflow_dispatch`

### Етапи
1. **Build**: збірка frontend.
2. **Publish**: створення Docker-образу та публікація в **GHCR** (`latest` + `sha-<commit>`).
3. **Deploy**: розгортання образу в **Azure App Service**.

Workflow файл: `.github/workflows/ghcr.yml`

---

## Секрети (важливо)
Для деплою в Azure використовується секрет:
- `AZURE_CREDENTIALS` — зберігається в GitHub (**Settings → Secrets and variables → Actions**)

⚠️ Секрети **не додаються в код** і **не публікуються в README**.

---

## Запуск локально (без Docker)
Вимоги: Node.js 18+

```bash
npm install
npm run dev
````

Відкрити: [http://localhost:5173/](http://localhost:5173/)

---

## Запуск локально (Docker)

Оскільки Dockerfile копіює `dist`, спочатку потрібно зібрати проєкт:

```bash
npm install
npm run build
docker build -t rent-frontend:local .
```

Запуск контейнера:

```bash
docker run -dp 8080:80 --rm --name rent-frontend rent-frontend:local
```

Відкрити: [http://localhost:8080/](http://localhost:8080/)

---

## Висновок

Під час виконання **ПЗ №8** було отримано навички налаштування **неперервної інтеграції** в GitHub Actions.
Під час виконання **ПЗ №9** реалізовано **неперервну доставку**: контейнеризація застосунку, публікація Docker-образу в GHCR та автоматичне розгортання в **Azure App Service**.


