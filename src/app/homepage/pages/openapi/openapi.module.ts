import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CliPluginComponent } from './cli-plugin/cli-plugin.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MappedTypesComponent } from './mapped-types/mapped-types.component';
import { OpenApiMigrationGuideComponent } from './migration-guide/migration-guide.component';
import { OperationsComponent } from './operations/operations.component';
import { OpenApiOtherFeaturesComponent } from './other-features/other-features.component';
import { OpenApiSecurityComponent } from './security/security.component';
import { ModelSchemaComponent } from './model-schema/model-schema.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: { title: 'OpenAPI (Swagger)' },
  },
  {
    path: 'model-schema',
    component: ModelSchemaComponent,
    data: { title: 'Model Schema - OpenAPI' },
  },
  // Keep old route to not break existing bookmarks
  {
    path: 'types-and-parameters',
    component: ModelSchemaComponent,
    data: { title: 'Model Schema - OpenAPI' },
  },
  {
    path: 'operations',
    component: OperationsComponent,
    data: { title: 'Operations - OpenAPI' },
  },
  {
    path: 'security',
    component: OpenApiSecurityComponent,
    data: { title: 'Security - OpenAPI' },
  },
  {
    path: 'decorators',
    component: DecoratorsComponent,
    data: { title: 'Decorators - OpenAPI' },
  },
  {
    path: 'mapped-types',
    component: MappedTypesComponent,
    data: { title: 'Mapped Types - OpenAPI' },
  },
  {
    path: 'cli-plugin',
    component: CliPluginComponent,
    data: { title: 'CLI Plugin - OpenAPI' },
  },
  {
    path: 'other-features',
    component: OpenApiOtherFeaturesComponent,
    data: { title: 'Other features - OpenAPI' },
  },
  {
    path: 'migration-guide',
    component: OpenApiMigrationGuideComponent,
    data: { title: 'Migration guide - OpenAPI' },
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    ModelSchemaComponent,
    OpenApiMigrationGuideComponent,
    OpenApiOtherFeaturesComponent,
    OperationsComponent,
    MappedTypesComponent,
    IntroductionComponent,
    DecoratorsComponent,
    CliPluginComponent,
  ],
})
export class OpenApiModule {}
