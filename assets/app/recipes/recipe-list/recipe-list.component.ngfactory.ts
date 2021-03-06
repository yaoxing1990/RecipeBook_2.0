/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './recipe-list.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from './recipe-item/recipe-item.component.ngfactory';
import * as i3 from './recipe-item/recipe-item.component';
import * as i4 from './recipe-list.component';
import * as i5 from '@angular/common';
import * as i6 from '../recipe.service';
import * as i7 from '@angular/router';
const styles_RecipeListComponent:any[] = [i0.styles];
export const RenderType_RecipeListComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_RecipeListComponent,data:{}});
function View_RecipeListComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-recipe-item',
      ([] as any[]),(null as any),(null as any),(null as any),i2.View_RecipeItemComponent_0,
      i2.RenderType_RecipeItemComponent)),i1.ɵdid(114688,(null as any),0,i3.RecipeItemComponent,
      ([] as any[]),{recipe:[0,'recipe'],index:[1,'index']},(null as any))],(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit;
    const currVal_1:any = _v.context.index;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
export function View_RecipeListComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),7,'div',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          4,'div',[['class','col-xs-12']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',[['class','btn btn-success']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i4.RecipeListComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onNewRecipe()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['New Recipe'])),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),['\n'])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          0,'hr',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),7,'div',[['class','row']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class',
          'col-xs-12']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_RecipeListComponent_1)),i1.ɵdid(802816,
          (null as any),0,i5.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),['\n\n']))],
      (_ck,_v) => {
        var _co:i4.RecipeListComponent = _v.component;
        const currVal_0:any = _co.recipes;
        _ck(_v,16,0,currVal_0);
      },(null as any));
}
export function View_RecipeListComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-recipe-list',
      ([] as any[]),(null as any),(null as any),(null as any),View_RecipeListComponent_0,
      RenderType_RecipeListComponent)),i1.ɵdid(245760,(null as any),0,i4.RecipeListComponent,
      [i6.RecipeService,i7.Router,i7.ActivatedRoute],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const RecipeListComponentNgFactory:i1.ComponentFactory<i4.RecipeListComponent> = i1.ɵccf('app-recipe-list',
    i4.RecipeListComponent,View_RecipeListComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy95YW94aS9Eb2N1bWVudHMvSm9iaHVudGluZy9Qcm9qZWN0L01FQU5fU3RhY2svYXNzZXRzL2FwcC9yZWNpcGVzL3JlY2lwZS1saXN0L3JlY2lwZS1saXN0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMveWFveGkvRG9jdW1lbnRzL0pvYmh1bnRpbmcvUHJvamVjdC9NRUFOX1N0YWNrL2Fzc2V0cy9hcHAvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQudHMuUmVjaXBlTGlzdENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiAoY2xpY2spPVwib25OZXdSZWNpcGUoKVwiPk5ldyBSZWNpcGU8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxocj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgIDxhcHAtcmVjaXBlLWl0ZW1cbiAgICAgICpuZ0Zvcj1cImxldCByZWNpcGVFbCBvZiByZWNpcGVzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIFtyZWNpcGVdPVwicmVjaXBlRWxcIlxuICAgICAgW2luZGV4XT1cImlcIj48L2FwcC1yZWNpcGUtaXRlbT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuIiwiPGFwcC1yZWNpcGUtbGlzdD48L2FwcC1yZWNpcGUtbGlzdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNRSTtNQUFBO3VDQUFBLFVBQUE7TUFBQTtJQUVFO0lBQ0E7SUFIRixXQUVFLFVBQ0EsU0FIRjs7OztvQkFSSjtNQUFBO01BQWlCLHlDQUNmO1VBQUE7VUFBQSw4QkFBdUI7TUFDckI7VUFBQTtZQUFBO1lBQUE7WUFBZ0M7Y0FBQTtjQUFBO1lBQUE7WUFBaEM7VUFBQSxnQ0FBd0Q7TUFBbUIseUNBQ3ZFO01BQ0YsdUNBQ047VUFBQTtVQUFBLGdCQUFJLHVDQUNKO1VBQUE7VUFBQSw0Q0FBaUI7VUFBQSxXQUNmO1VBQUE7TUFBdUIsMkNBQ3JCO1VBQUEsa0VBQUE7VUFBQTtVQUFBLHVDQUdnQztNQUM1Qix1Q0FDRjs7O1FBSkE7UUFERixZQUNFLFNBREY7Ozs7b0JDUko7TUFBQTtvQ0FBQSxVQUFBO01BQUE7O1FBQUE7Ozs7In0=
