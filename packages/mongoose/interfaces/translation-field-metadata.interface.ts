import { TranslationObjectOptions } from "@lightxinnovations/nestjs-rosetta-core";

export interface TranslationFieldMetadataInterface
  extends TranslationObjectOptions {
  paths: string[];
}
