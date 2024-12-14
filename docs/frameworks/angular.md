# Angular

Angular is a platform and framework for building single-page client applications using TypeScript.

## Key Features

- **Full Framework**: Complete solution out of the box
- **TypeScript**: Built with and for TypeScript
- **RxJS**: Powerful reactive programming
- **Dependency Injection**: Built-in DI system

## Getting Started

```bash
npm install -g @angular/cli
ng new my-angular-app
cd my-angular-app
ng serve
```

## Basic Component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="updateTitle()">Update Title</button>
  `
})
export class HelloComponent {
  title = 'Hello Angular!';

  updateTitle() {
    this.title = 'Hello World!';
  }
}
```

## Service Example

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('/api/data');
  }
}
```