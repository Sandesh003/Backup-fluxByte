import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class dropdownDirective{
@HostBinding('class.collapse.navbar-collapse') isOpen = false;
@HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
}
}