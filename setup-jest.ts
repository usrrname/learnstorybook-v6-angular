// src/jest-config/setup.ts
import 'jest-preset-angular/setup-jest';

import './src/jest-config/globalMocks';

Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });
