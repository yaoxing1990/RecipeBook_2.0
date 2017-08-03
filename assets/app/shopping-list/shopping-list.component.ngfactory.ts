/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './shopping-list.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './shopping-edit/shopping-edit.component.ngfactory';
import * as i3 from './shopping-edit/shopping-edit.component';
import * as i4 from './shopping-list.service';
import * as i5 from '@angular/common';
import * as i6 from './shopping-list.component';
const styles_ShoppingListComponent:any[] = [i0.styles];
export const RenderType_ShoppingListComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_ShoppingListComponent,data:{}});
function View_ShoppingListComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'a',[['class',
      'list-group-item'],['style','cursor: pointer']],(null as any),[[(null as any),
      'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onEditItem(_v.context.index)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n        ',' (',
      ')\n      ']))],(null as any),(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit.name;
    const currVal_1:any = _v.context.$implicit.amount;
    _ck(_v,1,0,currVal_0,currVal_1);
  });
}
export function View_ShoppingListComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),15,'div',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          12,'div',[['class','col-xs-10']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-shopping-edit',([] as any[]),
          (null as any),(null as any),(null as any),i2.View_ShoppingEditComponent_0,
          i2.RenderType_ShoppingEditComponent)),i1.ɵdid(245760,(null as any),0,i3.ShoppingEditComponent,
          [i4.ShoppingListService],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'hr',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          4,'ul',[['class','list-group']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ShoppingListComponent_1)),
      i1.ɵdid(802816,(null as any),0,i5.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i6.ShoppingListComponent = _v.component;
    _ck(_v,5,0);
    const currVal_0:any = _co.ingredients;
    _ck(_v,12,0,currVal_0);
  },(null as any));
}
export function View_ShoppingListComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-shopping-list',
      ([] as any[]),(null as any),(null as any),(null as any),View_ShoppingListComponent_0,
      RenderType_ShoppingListComponent)),i1.ɵdid(245760,(null as any),0,i6.ShoppingListComponent,
      [i4.ShoppingListService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ShoppingListComponentNgFactory:i1.ComponentFactory<i6.ShoppingListComponent> = i1.ɵccf('app-shopping-list',
    i6.ShoppingListComponent,View_ShoppingListComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy95YW94aS9Eb2N1bWVudHMvSm9iaHVudGluZy9Qcm9qZWN0L01FQU5fU3RhY2svYXNzZXRzL2FwcC9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC50cy5TaG9wcGluZ0xpc3RDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICA8YXBwLXNob3BwaW5nLWVkaXQ+PC9hcHAtc2hvcHBpbmctZWRpdD5cbiAgICA8aHI+XG4gICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIlxuICAgICAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBpbmdyZWRpZW50IG9mIGluZ3JlZGllbnRzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgKGNsaWNrKT1cIm9uRWRpdEl0ZW0oaSlcIlxuICAgICAgPlxuICAgICAgICB7eyBpbmdyZWRpZW50Lm5hbWUgfX0gKHt7IGluZ3JlZGllbnQuYW1vdW50IH19KVxuICAgICAgPC9hPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLXNob3BwaW5nLWxpc3Q+PC9hcHAtc2hvcHBpbmctbGlzdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0tNO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFJRTtNQUFBO01BQUE7SUFBQTtJQUpGO0VBQUEsZ0NBS0M7TUFBQTtJQUFBO0lBQUE7SUFBQTs7OztvQkFWUDtNQUFBO01BQWlCLHlDQUNmO1VBQUE7VUFBQSw4QkFBdUI7TUFDckI7VUFBQTs2Q0FBQSxVQUFBO1VBQUEsc0RBQXVDO1VBQUEsYUFDdkM7VUFBQTtNQUFJLDJDQUNKO1VBQUE7VUFBQSw4QkFBdUI7TUFDckI7YUFBQTs0QkFBQSx5Q0FPSTtVQUFBLGFBQ0QseUNBQ0Q7VUFBQSxTQUNGOztJQWJGO0lBTUk7SUFIRixZQUdFLFNBSEY7Ozs7b0JDTE47TUFBQTtzQ0FBQSxVQUFBO01BQUE7SUFBQTs7OzsifQ==