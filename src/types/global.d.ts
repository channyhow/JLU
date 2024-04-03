/* eslint-disable @typescript-eslint/no-explicit-any */
// global.d.ts

// Define a general type for dataLayer objects
interface DataLayerObject {
  event?: string;
  [key: string]: any; // Allow for other dynamic keys with unknown types
}

// Extend the Window interface to include dataLayer with the specific type
interface Window {
  dataLayer: DataLayerObject[];
}
