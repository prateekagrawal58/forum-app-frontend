import { TestBed } from '@angular/core/testing';

import { TopicServiceService } from './topic-service.service';

describe('TopicServiceService', () => {
  let service: TopicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
