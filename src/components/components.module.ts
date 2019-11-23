import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector';
@NgModule({
	declarations: [QuantitySelectorComponent],
	imports: [QuantitySelectorComponent],
	exports: [QuantitySelectorComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class ComponentsModule {}
