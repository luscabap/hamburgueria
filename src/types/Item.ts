import { ImageProps } from "./Image"

export type ItemProps = {
  alcoholic: number,
  availabilityType: string,
  available: boolean,
  description?: string,
  id: number,
  modifiers?: []
  images?: ImageProps[],
  name: string,
  position: number,
  price: number,
  sku: string,
  visible?: number
}