import { getURL } from "../utilities/transformAPIdata";

export function bgURL(b2key: string): string {
  return `bg-[url(${getURL(b2key)})] `;
}
