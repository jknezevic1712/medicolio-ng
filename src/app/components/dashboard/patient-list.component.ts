import { Component, Input } from '@angular/core';
// types
import type { Patient } from '@app/libs/types/General';

@Component({
  standalone: true,
  selector: 'patient-list',
  templateUrl: 'patient-list.component.html',
  styleUrl: 'patient-list.component.sass',
})
export default class PatientListComponent {
  @Input({
    required: true,
  })
  patientList: Patient[] = [];

  isModalOpen = false;
}
