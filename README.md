# Nelister Base Project 🚀

Para la versión en español, haz clic [aquí](./README.es.md).

A professional base project for **Angular 21** designed to accelerate the development of modern web applications. It includes scalable architecture, reusable components, and a pre-configured layout.

## 🚀 Demo
[Demo - Nelister Base Project](https://base.nelister.com/auth/login)

## 📋 Description

**Nelister Base Project** is a comprehensive starter template for Angular projects that you wish to share or use as a starting point. It provides:

- ✅ Scalable and well-organized folder structure.
- ✅ Main layout with Navbar, Sidebar, and Footer.
- ✅ Responsive Design for mobile and tablets.
- ✅ Authentication system with Guards.
- ✅ 5 example modules (Auth, Home, Dashboard, Security, Wallet, Settings).
- ✅ Reusable UI components.
- ✅ Route Lazy Loading for better performance.
- ✅ Integrated Angular Material.
- ✅ Theme system (Dark and Light).
- ✅ SCSS for professional styling.
- ✅ TypeScript with strict typing.
- ✅ Tests configured with Vitest.

No need to start from scratch. Just clone this project, adjust the modules to your needs, and start developing!

## 🛠️ Technologies

- **Angular**: 21.1.0
- **TypeScript**: 5.9.2
- **Angular Material**: 21.1.5
- **Angular CDK**: 21.1.5
- **RxJS**: 7.8.0
- **SCSS**: For advanced styling.
- **Vitest**: Testing framework.
- **Node.js**: npm 10.9.2

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                 # Central application logic
│   │   ├── guards/           # Route guards (Auth, NoAuth)
│   │   └── interceptors/     # HTTP interceptors (coming soon)
│   │
│   ├── features/             # Feature modules
│   │   ├── auth/             # Authentication module (login)
│   │   ├── home/             # Home page
│   │   ├── dashboard/        # Control panel
│   │   ├── security/         # Security
│   │   ├── wallet/           # Wallet/Payments
│   │   └── settings/         # User settings
│   │
│   ├── shared/               # Shared components and services
│   │   ├── components/       # Reusable components
│   │   └── ui/
│   │       └── layout/       # Main layout
│   │           ├── components/
│   │           │   ├── navbar/
│   │           │   ├── sidebar/
│   │           │   └── footer/
│   │           ├── interfaces/
│   │           ├── pages/
│   │           │   └── main-layout/
│   │           └── services/
│   │
│   ├── app.routes.ts         # Main route configuration
│   ├── app.config.ts         # Application configuration
│   ├── app.ts                # Root component
│   └── app.scss              # Global styles
│
├── styles.scss               # Shared styles
├── main.ts                   # Entry point
└── index.html                # Main HTML
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js 18+ (includes npm 10.9.2)
- Knowledge of Angular 21 and TypeScript

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [https://github.com/NelsonJfsg/nelister-base-project.git](https://github.com/NelsonJfsg/nelister-base-project.git)
   cd nelister-base-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📚 Route Structure

The project uses lazy loading to optimize performance. All routes are centralized in `app.routes.ts`:

```
/auth              → Authentication Module (Login, Register)
/home              → Home Page
/dashboard         → Control Panel
/security          → Security Settings
/wallet            → Payment/Wallet Management
/settings          → User Settings
```

### Authentication Guards

- **AuthGuard**: Protects routes that require authentication.
- **NoAuthGuard**: Prevents access to auth routes if you are already authenticated.

Usage example:
```typescript
canActivate: [AuthGuard]  // Authenticated users only
canActivate: [NoAuthGuard] // NON-authenticated users only
```

### 🧩 Feature Structure (Skeletons)

The project includes several modules with their route structure and lazy loading already configured.
Note: Except for the Auth module, these modules serve as a visual and structural starting point:

- **Auth**: Functional Login system (simulated) and Guards.
- **Dashboard, Wallet, Settings, etc.**: Clean structures ready to receive your business logic.

## 🎨 Shared Layout Components

### Navbar
Top navigation bar with logo and user options.

### Sidebar
Side menu with navigation between main modules.

### Footer
Page footer with copyright information and links.

### Main Layout
Main wrapper that integrates Navbar, Sidebar, and Footer.

## 📦 Main Dependencies

### Production
```json
{
  "@angular/core": "^21.1.0",
  "@angular/common": "^21.1.0",
  "@angular/forms": "^21.1.0",
  "@angular/router": "^21.1.0",
  "@angular/material": "~21.1.5",
  "@angular/cdk": "~21.1.5",
  "rxjs": "~7.8.0",
  "normalize.css": "^8.0.1"
}
```

### Development
```json
{
  "@angular/cli": "^21.1.4",
  "@angular/build": "^21.1.4",
  "@angular/compiler-cli": "^21.1.0",
  "typescript": "~5.9.2",
  "vitest": "^4.0.8",
  "jsdom": "^27.1.0"
}
```

## 🔧 How to Extend the Project

### Create a new feature module

1. Create a folder in `src/app/features/` with your module name:
   ```
   src/app/features/my-module/
   ├── my-module.routes.ts
   ├── pages/
   │   └── my-page/
   │       ├── my-page.ts
   │       ├── my-page.html
   │       └── my-page.scss
   └── services/
   ```

2. Define the routes in `my-module.routes.ts`:
   ```typescript
   import { Routes } from '@angular/router';
   import { MyPageComponent } from './pages/my-page/my-page';

   export const MyModuleRoutes: Routes = [
     {
       path: '',
       component: MyPageComponent
     }
   ];
   ```

3. Add the module to `app.routes.ts`:
   ```typescript
   {
     path: 'my-module',
     loadChildren: () => import('./features/my-module/my-module.routes')
       .then(r => r.MyModuleRoutes)
   }
   ```

### Create a shared component

1. Create the component in `src/app/shared/components/`:
   ```bash
   src/app/shared/components/my-component/
   ├── my-component.ts
   ├── my-component.html
   └── my-component.scss
   ```

2. Use the component elsewhere:
   ```typescript
   import { MyComponent } from '@app/shared/components/my-component/my-component';

   @Component({
     selector: 'app-home',
     imports: [MyComponent],
     template: '<app-my-component></app-my-component>'
   })
   ```

## 🔐 Authentication

The project uses a simple system based on **localStorage** to store tokens.

### Implement login

In `src/app/features/auth/pages/login-page/`:

```typescript
export class LoginPage {
  onLogin(credentials: { email: string; password: string }) {
    // API call goes here
    localStorage.setItem('token', 'your-token-here');
    this.router.navigate(['/dashboard']);
  }
}
```

### Protect a route

```typescript
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  component: DashboardComponent
}
```

## 📝 Available Scripts

### Development
```bash
npm start          # Starts server in development mode (Port 4200)
npm run watch      # Build with watch mode
```

### Testing
```bash
npm test           # Runs tests with Vitest
```

### Production
```bash
npm run build      # Optimized build for production
```

## 🎯 Implemented Best Practices

✅ **Standalone Components**: All components are standalone.
✅ **Signals**: Modern state management with signals.
✅ **Lazy Loading**: Lazy-loaded routes for better performance.
✅ **TypeScript Strict**: Strict typing enabled.
✅ **SCSS**: Clear organization of styles.
✅ **OnPush Change Detection**: Optimized components (recommended).
✅ **Small Components**: Single responsibility principle.
✅ **Injectable Services**: Modern dependency injection.

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is under the MIT license. Feel free to use, modify, and share it.

## 💬 Support

If you encounter issues or have questions:
- Open an issue on GitHub.
- Consult the [Angular documentation](https://angular.dev).
- Review examples in the feature folders.

## 🎓 Useful Resources

- [Angular 21 Documentation](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev)

---

**Created with ❤️ for the Angular community**

> ⭐ If this project is useful to you, consider giving it a star on GitHub.
