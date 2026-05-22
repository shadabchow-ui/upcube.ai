export async function addItem(
  _prevState: any,
  _selectedVariantId: string | undefined,
) {
  return "Cart is not available in static mode";
}

export async function removeItem(_prevState: any, _merchandiseId: string) {
  return "Cart is not available in static mode";
}

export async function updateItemQuantity(
  _prevState: any,
  _payload: {
    merchandiseId: string;
    quantity: number;
  },
) {
  return "Cart is not available in static mode";
}

export async function redirectToCheckout() {}

export async function createCartAndSetCookie() {}
