import { TranslationObjectOptions } from "@lightxinnovations/nestjs-rosetta-core";

export interface TranslationColumnMetadataInterface
  extends TranslationObjectOptions {
  paths: string[];
  when?: (value: any) => boolean;
}
