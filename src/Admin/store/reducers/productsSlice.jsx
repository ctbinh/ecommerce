import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer Thunk
export const getProducts = createAsyncThunk(
  "products/productsFetched",
  async () => {
    const response = await axios.get(
      "http://localhost/ecommerce/backend/api/product/read.php"
    );
    return response.data.data;
  }
);
export const updateProduct = createAsyncThunk(
  "product/singleProductUpdate",
  async (updatedProduct) => {
    const response = await axios.put(
      "http://localhost/ecommerce/backend/api/product/update.php",
      updatedProduct
    );
    return response.data;
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/singleProductsFetched",
  async (id) => {
    const response = await axios
      .all([
        axios.get(
          `http://localhost/ecommerce/backend/api/product/read_single.php?id=${id}`
        ),
        axios.get(
          `http://localhost/ecommerce/backend/api/imgProduct/read_single.php?id=${id}`
        ),
      ])
      .then(
        axios.spread((data1, data2) => {
          // output of req.
          return {
            ...data1.data,
            imgList: data2.data,
          };
        })
      );
    // console.log("??", res);
    // const response = await axios.get(
    //   `http://localhost/ecommerce/backend/api/product/read_single.php?id=${id}`
    // );
    return response;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    product: {
      loading: true,
    },
  },
  reducers: {
    /* addTodo: {
			reducer(state, action) {
				state.allTodos.unshift(action.payload)
			},
			prepare(title) {
				return {
					payload: {
						id: nanoid(),
						title,
						completed: false
					}
				}
			}
		}, */
    markComplete(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    /* deleteTodo(state, action) {
			const todoId = action.payload
			state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
		} */
    /* todosFetched(state, action) {
			state.allTodos = action.payload
		} */
  },
  extraReducers: {
    // Get all products
    [getProducts.pending]: (state, action) => {
      console.log("Fetching products from backend ....");
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log("Done");
      state.allProducts = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      console.log("Failed to get products!!!");
    },

    // Get single product
    [getSingleProduct.pending]: (state, action) => {
      console.log("Fetching single product from backend ....");
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      console.log("Done");
      state.product = {
        loading: false,
        ...action.payload,
      };
    },
    [getSingleProduct.rejected]: (state, action) => {
      console.log("Failed to get single product!!!");
    },

    // Update product
    [updateProduct.pending]: (state, action) => {
      console.log("Fetching products from backend ....");
    },
    [updateProduct.fulfilled]: (state, action) => {
      console.log("Done");
      // state.allProducts = action.payload;
    },
    [updateProduct.rejected]: (state, action) => {
      console.log("Failed to get products!!!");
    },
  },
});
// Reducer
const productsReducer = productsSlice.reducer;

// Selector
export const productsSelector = (state) => state.productsReducer.allProducts;
export const singleProductsSelector = (state) => state.productsReducer.product;
export const {
  // addTodo,
  markComplete,
  // deleteTodo
  // todosFetched
} = productsSlice.actions;
// Export reducer
export default productsReducer;
