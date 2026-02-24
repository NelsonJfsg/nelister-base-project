# Nelister Base Project 🚀

Proyecto base profesional para Angular 21 diseñado para acelerar el desarrollo de aplicaciones web modernas. Incluye arquitectura escalable, componentes reutilizables y un layout preconfigurado.

## 🚀 Demo
[Demo - Nelister Base Project](https://base.nelister.com/auth/login)

## 📋 Descripción

**Nelister Base Project** es un starter template completo para proyectos Angular que deseas compartir o utilizar como punto de partida. Proporciona:

- ✅ Estructura de carpetas escalable y bien organizada
- ✅ Layout principal con Navbar, Sidebar y Footer
- ✅ Responsive Design para mobile y tablets.
- ✅ Sistema de autenticación con Guards
- ✅ 5 módulos de ejemplo (Auth, Home, Dashboard, Security, Wallet, Settings)
- ✅ Componentes reutilizables del UI
- ✅ Lazy loading de rutas para mejor rendimiento
- ✅ Angular Material integrado
- ✅ Sistema de temas (Dark y Light)
- ✅ SCSS para estilos profesionales
- ✅ TypeScript con tipos estrictos
- ✅ Tests configurados con Vitest

No necesitas empezar desde cero. Solo clona este proyecto, ajusta los módulos a tus necesidades y ¡comienza a desarrollar!

## 🛠️ Tecnologías

- **Angular**: 21.1.0
- **TypeScript**: 5.9.2
- **Angular Material**: 21.1.5
- **Angular CDK**: 21.1.5
- **RxJS**: 7.8.0
- **SCSS**: Para estilos avanzados
- **Vitest**: Testing framework
- **Node.js**: npm 10.9.2

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/                 # Lógica central de la aplicación
│   │   ├── guards/          # Route guards (Auth, NoAuth)
│   │   └── interceptors/    # HTTP interceptors (próximamente)
│   │
│   ├── features/            # Módulos de funcionalidades
│   │   ├── auth/           # Módulo de autenticación (login)
│   │   ├── home/           # Página de inicio
│   │   ├── dashboard/      # Panel de control
│   │   ├── security/       # Seguridad
│   │   ├── wallet/         # Billetera/Pagos
│   │   └── settings/       # Configuración de usuario
│   │
│   ├── shared/             # Componentes y servicios compartidos
│   │   ├── components/     # Componentes reutilizables
│   │   └── ui/
│   │       └── layout/     # Layout principal
│   │           ├── components/
│   │           │   ├── navbar/
│   │           │   ├── sidebar/
│   │           │   └── footer/
│   │           ├── interfaces/
│   │           ├── pages/
│   │           │   └── main-layout/
│   │           └── services/
│   │
│   ├── app.routes.ts       # Configuración principal de rutas
│   ├── app.config.ts       # Configuración de la aplicación
│   ├── app.ts              # Componente raíz
│   └── app.scss            # Estilos globales
│
├── styles.scss             # Estilos compartidos
├── main.ts                 # Punto de entrada
└── index.html              # HTML principal

```

## 🚀 Instalación y Setup

### Requisitos previos
- Node.js 18+ (se incluye npm 10.9.2)
- Conocimiento de Angular 21 y TypeScript

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/NelsonJfsg/nelister-base-project.git
   cd nelister-base-project
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:4200`

4. **Build para producción**
   ```bash
   npm run build
   ```

## 📚 Estructura de Rutas

El proyecto utiliza lazy loading para optimizar el rendimiento. Todas las rutas están centralizadas en `app.routes.ts`:

```
/auth              → Módulo de autenticación (Login, Registro)
/home              → Página de inicio
/dashboard         → Panel de control
/security          → Configuración de seguridad
/wallet            → Gestión de pagos/billetera
/settings          → Configuración de usuario
```

### Guards de Autenticación

- **AuthGuard**: Protege rutas que requieren estar autenticado
- **NoAuthGuard**: Previene acceso a rutas de auth si ya estás autenticado

Ejemplo de uso:
```typescript
canActivate: [AuthGuard]  // Solo usuarios autenticados
canActivate: [NoAuthGuard] // Solo usuarios NO autenticados
```

### 🧩 Estructura de Features (Skeletons)

El proyecto incluye varios módulos con su estructura de rutas y lazy loading ya configurada. 
Nota: A excepción del módulo de Auth, estos módulos sirven como punto de partida visual y estructural:

    Auth: Sistema funcional de Login (simulado) y Guards.
    Dashboard, Wallet, Settings, etc.: Estructuras limpias listas para recibir tu lógica de negocio.

## 🎨 Componentes Compartidos del Layout

### Navbar
Barra de navegación superior con logo y opciones de usuario.

### Sidebar
Menú lateral con navegación entre módulos principales.

### Footer
Pie de página con información de derechos y enlaces.

### Main Layout
Envolvente principal que integra Navbar, Sidebar y Footer.

## 📦 Dependencias Principales

### Producción
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

### Desarrollo
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

## 🔧 Cómo Extender el Proyecto

### Crear un nuevo módulo de features

1. Crea una carpeta en `src/app/features/` con el nombre de tu módulo:
   ```
   src/app/features/mi-modulo/
   ├── mi-modulo.routes.ts
   ├── pages/
   │   └── mi-pagina/
   │       ├── mi-pagina.ts
   │       ├── mi-pagina.html
   │       └── mi-pagina.scss
   └── services/
   ```

2. Define las rutas en `mi-modulo.routes.ts`:
   ```typescript
   import { Routes } from '@angular/router';
   import { MiPaginaComponent } from './pages/mi-pagina/mi-pagina';

   export const MiModuloRoutes: Routes = [
     {
       path: '',
       component: MiPaginaComponent
     }
   ];
   ```

3. Agrega el módulo en `app.routes.ts`:
   ```typescript
   {
     path: 'mi-modulo',
     loadChildren: () => import('./features/mi-modulo/mi-modulo.routes')
       .then(r => r.MiModuloRoutes)
   }
   ```

### Crear un componente compartido

1. Crea el componente en `src/app/shared/components/`:
   ```bash
   src/app/shared/components/mi-componente/
   ├── mi-componente.ts
   ├── mi-componente.html
   └── mi-componente.scss
   ```

2. Usa el componente en otros lugares:
   ```typescript
   import { MiComponente } from '@app/shared/components/mi-componente/mi-componente';

   @Component({
     selector: 'app-home',
     imports: [MiComponente],
     template: '<app-mi-componente></app-mi-componente>'
   })
   ```

## 🔐 Autenticación

El proyecto usa un sistema simple basado en **localStorage** para almacenar tokens.

### Implementar login

En `src/app/features/auth/pages/login-page/`:

```typescript
export class LoginPage {
  onLogin(credentials: { email: string; password: string }) {
    // Aquí va la llamada a tu API
    localStorage.setItem('token', 'tu-token-aqui');
    this.router.navigate(['/dashboard']);
  }
}
```

### Proteger una ruta

```typescript
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  component: DashboardComponent
}
```

## 📝 Scripts Disponibles

### Desarrollo
```bash
npm start          # Inicia servidor en modo desarrollo (Puerto 4200)
npm run watch      # Build con watch mode
```

### Testing
```bash
npm test           # Ejecuta tests con Vitest
```

### Producción
```bash
npm run build      # Build optimizado para producción
```

## 🎯 Best Practices Implementadas

✅ **Standalone Components**: Todas los componentes son standalone  
✅ **Signals**: Gestión moderna de estado con signals  
✅ **Lazy Loading**: Rutas lazy-loaded para mejor rendimiento  
✅ **TypeScript Strict**: Tipos estrictos habilitados  
✅ **SCSS**: Organización clara de estilos  
✅ **OnPush Change Detection**: Componentes optimizados (recomendado)  
✅ **Componentes Pequeños**: Single responsibility principle  
✅ **Servicios Inyectables**: Inyección de dependencias moderna  

## 🤝 Contribuir

Contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo, modificarlo y compartirlo.

## 💬 Soporte

Si encuentras problemas o tienes preguntas:
- Abre un issue en GitHub
- Consulta la documentación de [Angular](https://angular.dev)
- Revisa ejemplos en las carpetas de features

## 🎓 Recursos Útiles

- [Documentación Angular 21](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev)

---

**Creado con ❤️ para la comunidad Angular**

> ⭐ Si este proyecto te es útil, considera darle una estrella en GitHub
