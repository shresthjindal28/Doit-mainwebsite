import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubServiceOption {
  id: string;
  name: string;
  provider: string;
  price: number;
}

export interface CartItem {
  mainServiceId: number;
  mainServiceName: string;
  subServiceId: string;
  subServiceName: string;
  optionId: string;
  provider: string;
  price: number;
  quantity: number;
  selectedDate?: Date;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex(
        item => item.mainServiceId === action.payload.mainServiceId && 
                item.subServiceId === action.payload.subServiceId &&
                item.optionId === action.payload.optionId
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ mainServiceId: number, subServiceId: string, optionId: string }>) => {
      state.items = state.items.filter(item => 
        !(item.mainServiceId === action.payload.mainServiceId && 
          item.subServiceId === action.payload.subServiceId &&
          item.optionId === action.payload.optionId)
      );
    },
    updateQuantity: (state, action: PayloadAction<{ 
      mainServiceId: number, 
      subServiceId: string, 
      optionId: string, 
      quantity: number 
    }>) => {
      const item = state.items.find(item => 
        item.mainServiceId === action.payload.mainServiceId &&
        item.subServiceId === action.payload.subServiceId &&
        item.optionId === action.payload.optionId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    updateDate: (state, action: PayloadAction<{ 
      mainServiceId: number, 
      subServiceId: string, 
      optionId: string, 
      date: Date 
    }>) => {
      const item = state.items.find(item => 
        item.mainServiceId === action.payload.mainServiceId &&
        item.subServiceId === action.payload.subServiceId &&
        item.optionId === action.payload.optionId
      );
      if (item) {
        item.selectedDate = action.payload.date;
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  updateDate, 
  toggleCart 
} = cartSlice.actions;

export default cartSlice.reducer;
