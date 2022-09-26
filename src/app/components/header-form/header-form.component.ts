import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SORT_KEY_ENUM } from 'src/app/models/collection.model';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss'],
})
export class HeaderFormComponent implements OnInit {
  @Input() searchDisabled: boolean;
  @Input() sortOptions: any[];

  @Output() searchSubmitEvent = new EventEmitter<string>();
  @Output() sortSubmitEvent = new EventEmitter<SORT_KEY_ENUM>();

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      searchControl: new FormControl(),
    });
  }

  onSearchSubmit() {
    this.searchSubmitEvent.emit(this.formGroup.value.searchControl);
  }

  onSortSubmit(event: any) {
    this.sortSubmitEvent.emit(event.value);
  }
}
