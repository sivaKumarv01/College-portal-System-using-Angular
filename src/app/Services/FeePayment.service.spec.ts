/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeePaymentService } from './FeePayment.service';

describe('Service: FeePayment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeePaymentService]
    });
  });

  it('should ...', inject([FeePaymentService], (service: FeePaymentService) => {
    expect(service).toBeTruthy();
  }));
});
