import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer Thunk
export const getNumCart = createAsyncThunk("numcart", async () => {
  const response = await axios.get(
    `http://localhost/ecommerce/backend/api/cart/getCountCart.php?user_id=${sessionStorage.getItem(
      "user_id"
    )}`
  );
  return response.data.count;
});

// Create slice
const numCartSlice = createSlice({
  name: "numCart",
  initialState: {
    numCart: 0,
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
    addCart(state, action) {
      state.numCart += 1;
    },
    subCart(state, action) {
      state.numCart -= 1;
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
    // Get all comment
    [getNumCart.pending]: (state, action) => {
      console.log("Fetching num cart by id from backend ....");
    },
    [getNumCart.fulfilled]: (state, action) => {
      console.log("Done");
      state.numCart = action.payload;
    },
    [getNumCart.rejected]: (state, action) => {
      console.log("Failed to get num cart by id!!!");
    },

    // // remove comment by id
    // [removeCommentById.pending]: (state, action) => {
    //   console.log("Fetching delete comment by id from backend ....");
    // },
    // [removeCommentById.fulfilled]: (state, action) => {
    //   console.log("Done");
    //   state.allComments = state.allComments.filter(
    //     (comment) => comment.id !== action.payload
    //   );
    // },
    // [removeCommentById.rejected]: (state, action) => {
    //   console.log("Failed to delete comment by id!!!");
    // },
  },
});

// Reducer
const numCartReducer = numCartSlice.reducer;

// Selector
export const numCartSelector = (state) => {
  console.log(state);
  return state.numCartSlice.numCart;
};

export const {
  // addTodo,
  addCart,
  subCart,
  markComplete,
  // deleteTodo
  // todosFetched
} = numCartSlice.actions;

// Export reducer
export default numCartReducer;
