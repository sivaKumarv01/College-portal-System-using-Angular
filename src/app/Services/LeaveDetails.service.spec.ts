/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeaveDetailsService } from './LeaveDetails.service';

describe('Service: LeaveDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveDetailsService]
    });
  });

  it('should ...', inject([LeaveDetailsService], (service: LeaveDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
