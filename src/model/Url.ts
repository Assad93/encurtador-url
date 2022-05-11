import { getModelForClass, prop } from "@typegoose/typegoose";

export class Url {
  @prop({ required: true })
  hash: string;

  @prop({ required: true })
  originUrl: string;

  @prop({ required: true })
  shortUrl: string;
}

export const UrlModel = getModelForClass(Url);
