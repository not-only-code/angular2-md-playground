/* tslint:disable:no-unused-variable */

import { addProviders, async, inject, describe, beforeEach, it, expect } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Angular2MdPlayground', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
});
