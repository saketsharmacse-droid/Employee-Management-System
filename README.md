# Employee Management System

A simple task & employee management app built with React — made mainly to get hands-on with real-world state management, context API, and the little bugs.
I have built this entirely by myself with no help from any AI agents, that's the reason for this boring UI.

🔗 **Live demo:** [saketsharmacse-droid.github.io/Employee-Management-System](https://saketsharmacse-droid.github.io/Employee-Management-System/)

---

## What it does

There are two roles — **Admin** and **Employee** — and each gets their own dashboard.

**Admin can:**
- Add new employees
- Create and assign tasks to any employee
- See a quick overview table of every employee's task counts (new / active / completed / failed)

**Employee can:**
- Log in and see only their own tasks
- Accept a new task (moves it into "active")
- Mark an active task as completed or failed
- Watch their task counters update live as they work through tasks

Everything is stored in `localStorage`, so there's no backend — refresh the page and your data's still there (unless you clear your browser storage).

---

## Login credentials (for testing)

**Admin**
```
email: admin@me.com
password: 123
```

**Employee** (a few seeded ones, all with password `123`)
```
e@e.com
employee2@example.com
employee3@example.com
employee4@example.com
employee5@example.com
```

---

## Tech stack

- **React** (functional components + hooks — `useState`, `useEffect`, `useContext`)
- **Context API** for global auth/user state, instead of prop-drilling everywhere
- **Tailwind CSS v4** for styling
- **Vite** as the build tool
- **localStorage** as the "database" — no backend, everything persists client-side
- **gh-pages** for deployment

---

## Some of the things I actually ran into while building this

This wasn't a smooth one-shot build — a bunch of classic React gotchas showed up along the way:

- **Stale state bugs** — updating `userData` by mutating the same array reference and calling `setUserData()` on it. React didn't re-render because it saw the same reference and assumed nothing changed. Had to switch to building fresh arrays/objects with `.map()` and spread syntax everywhere state updates.
- **A typo that quietly broke everything** — checking `elem.NewTask` instead of `elem.newTask` in one spot, which meant new tasks straight up wouldn't render.
- **Wrong condition order** — checking `active` before `newTask` when a task can technically be both at once, so tasks were rendering in the wrong card type.
- **AuthProvider resetting itself** — the seed data function was running on every mount, which wiped out anything I'd added (new employees, task status changes) on every refresh. Fixed it so seeding only happens once, and state gets written back to `localStorage` whenever it changes.
- **Admin/Employee data going out of sync** — the employee dashboard was reading from a frozen snapshot taken at login instead of the live shared context, so admin-assigned tasks weren't showing up on the employee's side until I made it re-derive from the live context data.
- **Deployment path issues** — GitHub Pages needs the right `base` path in `vite.config.js` matching the exact repo name, or you just get a blank white screen with 404s everywhere.

---

## Running it locally

```bash
npm install
npm run dev
```

To build and deploy your own version:
```bash
npm run deploy
```

---

## Folder structure

```
src/
├── components/
│   ├── Auth/          → Login
│   ├── Dashboard/      → AdminDashboard, EmployeeDashboard
│   ├── other/          → Header, CreateTask, AllTask, TaskListNumbers, AddEmployee
│   └── TaskList/       → TaskList, NewTask, AcceptTask, CompleteTask, FailedTask
├── context/            → AuthProvider (global user/task state)
├── utils/               → localStorage seed data & helpers
├── App.jsx
└── main.jsx
```

---

## What's next (maybe)

- Swap the plain-text "Assign to" field for a dropdown of actual employee names, so tasks can't get typo'd into the void.
- Add a delete/edit option for employees.
- Maybe move off localStorage to an actual backend if I keep building on this.

---

If you have any suggestions, feedback or complaints regarding this project, probably ping me on my mail (which I will surely not read).

Saket Sharma

Saket.sharma.cse@gmail.com
